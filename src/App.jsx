import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import { Landingpage } from './pages/index';
import {Chessmaster} from './pages/CHessmaster/index'
import {Calculator} from './pages/calculator'
function App() {
  return (  
    
  <BrowserRouter>
     <Linkerar></Linkerar>

  <Routes>
   <Route index element={<Landingpage/>}/>
    <Route path="/landing" element={<Landingpage/>}/>
    <Route path="/calculator" element={<Calculator/>}/>
    <Route path="/chessmaster" element={<Chessmaster/>}/>
   </Routes>

   </BrowserRouter>
 );
}
function Linkerar(){
  return(<nav>
    <ul>
      <li>
        <Link to="/landing">landing</Link>
        </li>
      <li>
        <Link to="/calculator">calculator</Link>
        </li>
      <li>
        <Link to="/chessmaster">checkmaster</Link>
      </li>
    </ul>
  </nav>
);
}

export default App;
