import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import { Landingpage } from './pages/index';
import {Chessmaster} from './pages/CHessmaster/index';
import {Calculator} from './pages/calculator'; 
import {ComponentsWithStyle} from './pages/newComponents';

function App() {
  return (  
    
  <BrowserRouter>
     <Linkerar></Linkerar>

  <Routes>
   <Route index element={<Landingpage/>}/>
    <Route path="/landing" element={<Landingpage/>}/>
    <Route path="/calculator" element={<Calculator/>}/>
    <Route path="/chessmaster" element={<Chessmaster/>}/>
    <Route path="/Components" element={<ComponentsWithStyle/>}/>

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
      <li>
        <Link to="/Components">New</Link>
      </li>
      
    </ul>
  </nav>
);
}

export default App;
