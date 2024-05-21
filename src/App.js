 
 import Login from './components/Login';
 import Register from './components/Register';
import TaskList from './components/TaskList';
import './App.css';
 
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/tasks' element={<TaskList/>} />
       </Routes>
    </div>
  );
}

export default App;
