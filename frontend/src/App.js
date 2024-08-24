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
     <h1 className="text-green-800 text-2xl font-bold mb-4">Jan Aarogya Connect</h1>
     </>
     
  
  );
}

export default App;
