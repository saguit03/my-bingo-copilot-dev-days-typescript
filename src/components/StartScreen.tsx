interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="rgb-app-shell flex flex-col items-center justify-center min-h-full p-4 sm:p-6">
      <div className="w-full max-w-sm text-center">
        <div className="rgb-card rounded-xl p-6 sm:p-8">
          <span className="rgb-chip mb-3">Trainer Lobby</span>
          <h1 className="rgb-title-font text-xl sm:text-2xl text-[var(--rgb-ink)] mb-3 leading-tight">
            Pokedex Bingo
          </h1>
          <p className="text-[var(--rgb-ink-soft)] text-lg mb-5">
            Build your party. Catch five in a row.
          </p>

          <div className="rgb-divider mb-5"></div>

          <div className="text-left rounded-lg border-2 border-[var(--rgb-line)] bg-white/45 p-4 mb-6">
            <h2 className="rgb-title-font text-[0.65rem] text-[var(--rgb-ink)] mb-3">How To Play</h2>
            <ul className="text-[var(--rgb-ink-soft)] text-[1rem] space-y-2 leading-tight">
              <li>Find a trainer that matches the tile.</li>
              <li>Tap the tile to register the catch.</li>
              <li>Complete one line to call BINGO.</li>
            </ul>
          </div>

          <button
            onClick={onStart}
            className="rgb-button w-full font-semibold py-3 px-6 text-lg"
          >
            Begin Adventure
          </button>
        </div>
      </div>
    </div>
  );
}
