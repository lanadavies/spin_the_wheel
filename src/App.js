import "./App.css";
import SpinnerWheel from "./components/SpinnerWheel";
import { ChakraProvider } from "@chakra-ui/react";
import { SegmentsProvider } from "./SegmentContext";
import Menu from "./components/Menu";


function App() {

  return (
    <div
      className="App"
      style={{
        backgroundImage: "url('/book_club_background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <ChakraProvider>
        <SegmentsProvider>
          <SpinnerWheel />
          <Menu />
        </SegmentsProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
