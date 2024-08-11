import './App.css';
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import { useState } from 'react';

function App() {
  const [token, setToken] = useState('');

  return (
    <div className="App">
      <SignUp setToken={setToken} />
      <Login setToken={setToken}/>
      <Dashboard token={token} />
    </div>
  );
}

export default App;
