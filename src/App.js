import "./App.css";
import SpinnerWheel from "./components/SpinnerWheel";
import { ChakraProvider } from "@chakra-ui/react";
import { SegmentsProvider } from "./SegmentContext";
import Editor from "./components/Editor";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <SegmentsProvider>
        <Header />
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
        </div>
        <Editor />
      </SegmentsProvider>
    </ChakraProvider>
  );
}

export default App;
