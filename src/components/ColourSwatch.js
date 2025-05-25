const ColorSwatch = ({ color }) => {
  return (
    <div
      style={{
        width: "24px",
        height: "24px",
        backgroundColor: color,
        borderRadius: "4px",
        cursor: "pointer",
        display: "inline-block",
        marginRight: "8px",
      }}
    ></div>
  );
}
export default ColorSwatch;