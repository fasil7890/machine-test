import './App.css';
import Home from './components/Home';
import SignIn from './components/SignIn';
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}></Route>
      <Route path='/home' element={<Home/>} />
      </Routes>
     
      </BrowserRouter>
     
    </div>
  );
}

export default App;
