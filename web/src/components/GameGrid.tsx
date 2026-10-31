import type { ReactNode } from "react";

interface Props<T> {
  grid: T[][];
  renderCell: (value: T, row: number, col: number) => ReactNode;
  onCellClick?: (row: number, col: number) => void;
  cellSize?: string;
  gap?: string;
}

export function GameGrid<T>({
  grid,
  renderCell,
  onCellClick,
  cellSize = "clamp(3rem, 12vmin, 5rem)",
  gap = "0.4rem",
}: Props<T>) {
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;

  return (
    <div
      className="grid-game grid touch-manipulation justify-center"
      /* dynamic: grid size, cell size and gap from props */
      style={{
        gridTemplateRows: `repeat(${rows}, ${cellSize})`,
        gridTemplateColumns: `repeat(${cols}, ${cellSize})`,
        gap,
      }}
    >
      {grid.map((row, r) =>
        row.map((value, c) => (
          <div
            key={`${r}-${c}`}
            onClick={() => onCellClick?.(r, c)}
            onTouchEnd={(e) => {
              e.preventDefault();
              onCellClick?.(r, c);
            }}
            className={`flex select-none items-center justify-center rounded-lg [transition:transform_200ms_ease,opacity_300ms_ease] ${onCellClick ? "cursor-pointer" : "cursor-default"}`}
          >
            {renderCell(value, r, c)}
          </div>
        ))
      )}
    </div>
  );
}
