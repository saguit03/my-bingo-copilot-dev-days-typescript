import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="rgb-app-shell flex flex-col min-h-full px-3 py-3 sm:px-5 sm:py-5">
      <header className="rgb-hud rounded-lg px-3 py-3 sm:px-4 sm:py-4 mb-2">
        <div className="flex items-center justify-between gap-3">
        <button
          onClick={onReset}
            className="rgb-title-font text-[0.55rem] sm:text-[0.62rem] px-2 py-2 border-2 border-[var(--rgb-line)] rounded bg-white/45 active:translate-y-px"
        >
            Retreat
        </button>
          <h1 className="rgb-title-font text-[0.7rem] sm:text-[0.85rem] text-[var(--rgb-ink)] text-center">
            Pokedex Bingo
          </h1>
          <span className="rgb-chip text-[0.78rem]">RGB</span>
        </div>
      </header>

      <p className="rgb-hud rounded-lg text-center text-[var(--rgb-ink-soft)] text-[1rem] leading-tight py-2 px-3 mb-2">
        Tap a tile when you find a matching trainer.
      </p>

      {hasBingo && (
        <div className="rgb-title-font rounded-lg text-center py-2 px-3 mb-2 text-[0.6rem] sm:text-[0.68rem] border-3 border-[var(--rgb-line)] bg-[var(--rgb-yellow)] text-[#4d3b11]">
          Bingo Achieved. Party Bonus Unlocked.
        </div>
      )}

      <div className="flex-1 flex items-center justify-center py-2">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
