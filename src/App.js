import "./App.css";
import SpinnerWheel from "./components/SpinnerWheel";
import { ChakraProvider } from "@chakra-ui/react";
import { SegmentsProvider } from "./SegmentContext";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ChakraProvider>
      <SegmentsProvider>
        <NavBar />
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
          <SpinnerWheel />
          <Menu />
        </div>
      </SegmentsProvider>
    </ChakraProvider>
  );
}

export default App;
