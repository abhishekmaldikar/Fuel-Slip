import './App.css';
import Header from './Comoponents/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HeroSection from './Comoponents/HeroSection';

const theme= createTheme({
  palette: {
    primary: {
    main : '#f8f6f6'
      
    }
  }
})


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header/>
      <HeroSection/>
      </ThemeProvider>
    </div>
  );
}

export default App;
