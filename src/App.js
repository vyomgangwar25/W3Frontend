 
 import Login from './components/Login';
 import Register from './components/Register';
 import Dashboard from './components/Dashboard';
import './App.css';
 
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/> 
       </Routes>
    </div>
  );
}

export default App;
