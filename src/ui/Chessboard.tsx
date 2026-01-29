import { Chessboard } from "react-chessboard";

type ChessBoardProps = {
  id: string;
  position?: string;
  size?: number;
  darkSquare?: string;
  lightSquare?: string;
  draggable?: boolean;
  ghostOpacity?: number;
  notation?: boolean;
  animationDuration?: number;
  boardStyle?: React.CSSProperties;
  draggingPieceStyle?: React.CSSProperties;
  highlightSquares?: Record<string, React.CSSProperties>;
};


function ChessBoard({
  id,
  position = "start",
  size = 420,
  draggable = false,
  darkSquare = "#B58863",
  lightSquare = "#F0D9B5",
  ghostOpacity = 0.5,
  notation = false,
  animationDuration = 200,
  boardStyle = { borderRadius: "8px" },
  draggingPieceStyle = { transform: "scale(1)" },
  highlightSquares = {},
}: ChessBoardProps) {
  return (
    <div style={{ width: size, height: size }}>
      <Chessboard
        options = {{
          id,
          draggingPieceGhostStyle: { opacity: ghostOpacity },
          showNotation: notation,
          canDragPiece: draggable,
          draggingPieceStyle,
          squareStyles: highlightSquares,
        }}
        boardStyle ={boardStyle}
        animationDurationInMs={animationDuration}
        position={position}
        boardWidth={size}
        arePiecesDraggable={draggable}
        customDarkSquareStyle={{ backgroundColor: darkSquare }}
        customLightSquareStyle={{ backgroundColor: lightSquare }}
      />
    </div>
  );
}

export default ChessBoard;
