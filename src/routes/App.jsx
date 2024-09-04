import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '../container/layout';
import { Login } from '../pages/login/login';
import { AuthContext } from '../contexts/AuthContext';
import { Groups } from '../pages/groups/groups';
import { Users } from '../pages/users/users';
import { Import } from '../pages/import/import';
import {Management} from '../pages/management/management';
import { Unit } from '../pages/unit/unit';

function App() {

  const { isLogged } = useContext(AuthContext)
  
  
    return (
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/ConsolaFaysu_Front/'}>
        <Routes>
          {isLogged ? (
            <Route path="/" element={<Layout />}>
              <Route path='/' element={<Groups/>} />
              <Route path="/units" element={<Unit/>} />
              <Route path="/users" element={<Users/>} />
              <Route path="/import" element={<Import/>}/>
              <Route path="/management" element={<Management/>}/>
            </Route>
          ) : (
            <Route path="/*" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App
