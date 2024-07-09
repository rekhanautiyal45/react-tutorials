import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Header/NavBars';
import { BrowserRouter} from "react-router-dom";
import Routing from './components/Header/Routing';
import Container from 'react-bootstrap/Container';
function App() {
  return (
    <div className="App">
      <Container>
       <BrowserRouter>
          <Navbars />
          <Routing />
      </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
