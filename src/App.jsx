import './App.css'
import Login from './components/Auth/Login'
import Admin from './components/dashboard/Admin'
import Emp from './components/dashboard/Emp'
import { AuthContext } from './context/AuthProvider'
import { useContext, useState } from 'react'

function App() {
  const [user, setUser] = useState(null);
  const { userData } = useContext(AuthContext);

  const handlelogin = (email, password) => {
    if (userData && userData.admin.find((e) => email === e.email && password === e.password)) {
      setUser('admin');
    }
    else if (userData){
      const emp = userData.employees.find((e) => email === e.email && password === e.password);
      if (emp) {
        setUser(emp);
      } else {
        alert('Invalid credentials');
      }
    }
    else {
      alert('No user data found');
    }
  };

  return (
    <>
      {!user ? <Login handlelogin={handlelogin}/> : null}
      {user === 'admin' ? <Admin setUser={setUser}/> : (user ? <Emp data={user} setUser={setUser}/> : null)}
    </>
  );
}

export default App;