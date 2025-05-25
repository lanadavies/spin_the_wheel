import { createContext, useState } from "react";

export const colorPalette = ["#f7abcf", "#f7d1ab", "#c2afdc", "#6988db"];

const defaultSegments = [
  { name: "Item 1", color: colorPalette[0] },
  { name: "Item 2", color: colorPalette[1] },
  { name: "Item 3", color: colorPalette[2] },
  { name: "Item 4", color: colorPalette[3] },
  { name: "Item 5", color: colorPalette[0] },
  { name: "Item 6", color: colorPalette[1] },
  { name: "Item 7", color: colorPalette[2] },
  { name: "Item 8", color: colorPalette[3] },
];

export const SegmentsContext = createContext();

export const SegmentsProvider = ({children}) => {
  const [segments, setSegments] = useState(defaultSegments);
  return (
    <SegmentsContext.Provider value={{ segments, setSegments }}>
      {children}
    </SegmentsContext.Provider>
  );
};
