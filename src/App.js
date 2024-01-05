 
import './App.css';
import Adduser from './Component/Modal/Adduser/Adduser';
import Profile from './Component/Modal/Profile/Profile';
import Update from './Component/Modal/Update/Update';
import Users from './Component/Users/Users';

function App() {
  return ( 
    <div className='bg-gray-100'>
    
      <Users></Users>
      <Adduser></Adduser>
      <Update></Update>
    
    </div>
  );
}

export default App;
