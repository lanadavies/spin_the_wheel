import { createContext, useState } from "react";

export const colorPalette = ["#f7abcf", "#f7d1ab", "#c2afdc", "#98b0f2", '#94d1c3'];

const defaultSegments = [
  { name: "Item 1", color: colorPalette[0] },
  { name: "Item 2", color: colorPalette[1] },
  { name: "Item 3", color: colorPalette[2] },
  { name: "Item 4", color: colorPalette[3] },
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
