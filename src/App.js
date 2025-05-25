import logo from './logo.svg';
import './App.css';
import SpinnerWheel from './components/SpinnerWheel';
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <SpinnerWheel />
      </ChakraProvider>
    </div>
  );
}

export default App;
