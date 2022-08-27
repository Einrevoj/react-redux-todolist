
import './App.css';
import TodoList from './components/TodoList'
import Auth from './components/authentication/Auth';
import { useSelector } from 'react-redux';

function App() {
  const activeUser = useSelector((state) => state.activeUser)
  return (
    <div className='App'>
    {activeUser.email ? <TodoList/> : <Auth />}
   
    
    </div>
    
  );
}

export default App;
