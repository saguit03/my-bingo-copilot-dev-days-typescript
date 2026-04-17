---
name: critical-dogfood-playtest
description: 'Critically dogfood a web app and evaluate how fun it is. Use for playtesting, engagement review, UX friction discovery, and actionable fun-focused feedback with severity and fix ideas.'
argument-hint: 'What app/theme should be dogfood-tested and for what audience?'
---

# Critical Dogfood Playtest

Evaluate the product like a tough internal dogfooder: skeptical, detail-oriented, and focused on whether the experience is genuinely fun.

## When to Use

- You want critical feedback, not a pass/fail QA checklist.
- You need to assess engagement, delight, and replayability.
- You want prioritized fixes tied to user impact and effort.

Common trigger phrases:
- "dogfood this app"
- "is this fun?"
- "critical playtest"
- "give blunt UX feedback"

## Inputs

- Product context (target audience, event type, success criteria)
- Environment constraints (desktop/mobile, browser, timebox)
- Scope for this pass (onboarding, core loop, end-state, all)

If inputs are missing, assume a 10-15 minute first-time user session and state assumptions.

## Procedure

1. Define the test lens
- Set a primary persona (for this repo: first-time attendee at a social mixer).
- Set a strict objective: "Would I voluntarily play this again with friends?"
- Write 3 hypotheses before testing (for example: onboarding is clear, board interactions feel rewarding, winning moment feels celebratory).

2. Run three short play sessions
- Session A: first-impression flow (no prior context).
- Session B: speed run (optimize for quick success).
- Session C: adversarial run (actively try to break fun and momentum).
- Capture timestamped observations for each key action.

3. Score fun with a rubric (1-5 each)
- Onboarding clarity: Do I immediately know what to do?
- Social spark: Does this prompt conversation and movement?
- Interaction feel: Are taps/clicks satisfying and confidence-building?
- Momentum: Does the loop keep me moving toward a goal?
- Payoff: Is winning emotionally rewarding and share-worthy?
- Replayability: Would I play again without being told?

4. Identify friction and classify severity
- Critical: kills core fun loop or causes abandonment.
- Major: significantly weakens engagement or social flow.
- Minor: polish gap, annoyance, or clarity issue.
- For each issue, capture:
  - evidence (what happened)
  - user impact (why it hurts fun)
  - likely root cause
  - proposed fix (smallest useful change first)

5. Branch on results
- If any rubric category <= 2:
  - Mark as urgent fun risk.
  - Provide at least 2 concrete fix options and expected impact.
- If average rubric score is between 2.5 and 3.5:
  - Focus on one high-impact quick win and one deeper iteration.
- If average rubric score > 3.5:
  - Focus on "delight multipliers" that can elevate memorability.

6. Produce a critical readout
- Start with verdict in one sentence: "Fun now?" yes/no + confidence.
- List findings by severity first, then by user journey order.
- Include a prioritized action plan:
  - Next 24 hours (quick wins)
  - Next sprint (structural improvements)
- End with one explicit re-test scenario to validate improvements.

## Quality Bar

A complete output includes all of the following:
- At least 8 concrete observations from real interaction flows
- Rubric scores with brief rationale per category
- Severity-ranked findings with clear evidence
- Fixes that are specific enough to implement immediately
- A blunt conclusion about current fun level and replay likelihood

## Output Format

Use this structure:

1. Verdict
2. Fun Rubric Scores
3. Findings (Critical -> Major -> Minor)
4. Prioritized Fix Plan (24h / next sprint)
5. Re-test Plan

Keep tone candid and constructive. Avoid generic praise without evidence.
