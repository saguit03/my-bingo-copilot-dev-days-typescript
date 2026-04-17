interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="rgb-modal-backdrop fixed inset-0 flex items-center justify-center p-4 z-50">
      <div className="rgb-victory-card rounded-xl p-6 max-w-xs w-full text-center">
        <div className="rgb-title-font text-[0.62rem] text-[var(--rgb-ink-soft)] mb-3">Elite Match</div>
        <h2 className="rgb-title-font text-lg text-[#60490e] mb-3 leading-tight">Bingo</h2>
        <p className="text-[var(--rgb-ink-soft)] text-lg mb-6 leading-tight">
          Your squad completed a full line.
        </p>

        <button
          onClick={onDismiss}
          className="rgb-button w-full font-semibold py-3 px-6 text-lg"
        >
          Continue Journey
        </button>
      </div>
    </div>
  );
}
