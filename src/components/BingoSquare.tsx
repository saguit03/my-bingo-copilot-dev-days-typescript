import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses = 'rgb-square';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'rgb-square-winning'
      : 'rgb-square-marked'
    : 'rgb-square-idle';

  const freeSpaceClasses = square.isFreeSpace ? 'rgb-square-free cursor-default' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="rgb-mark">C</span>
      )}
    </button>
  );
}
