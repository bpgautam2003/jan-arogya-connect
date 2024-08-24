import './App.css';
import Admin from './components/Admin';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';

function App() {
  return (
    <>
    <div className="App">
      <Admin/>
      <Login/>
      <Signup/>
     </div>
   
     </>
  );
}

export default App;
