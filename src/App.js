import './App.css';
import SpinnerWheel from './components/SpinnerWheel';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div className="App"
    style={{
      backgroundImage: "url('/book_club_background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100%",
    }}
    >
      <ChakraProvider>
        <SpinnerWheel />
      </ChakraProvider>
    </div>
  );
}

export default App;
