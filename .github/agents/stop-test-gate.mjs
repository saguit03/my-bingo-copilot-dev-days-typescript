import { spawnSync } from 'node:child_process';

const testResult = spawnSync('npm', ['test'], {
  cwd: process.cwd(),
  shell: true,
  encoding: 'utf8',
});

if (testResult.stdout) {
  process.stderr.write(testResult.stdout);
}

if (testResult.stderr) {
  process.stderr.write(testResult.stderr);
}

if (testResult.status === 0) {
  process.stdout.write(JSON.stringify({ continue: true }));
  process.exit(0);
}

process.stdout.write(
  JSON.stringify({
    hookSpecificOutput: {
      hookEventName: 'Stop',
      decision: 'block',
      reason: 'Tests failed. Fix the failures before finishing.',
    },
  })
);
process.exit(0);