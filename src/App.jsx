import { Routes, Route, Navigate} from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import PrivateRoute from './PrivateRoute'
import './App.css'

const App = () => {
  console.log('Excultando')
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' Component={Login} />
        {/* rotas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path='/home' Component={Home} />
        </Route>
      </Routes>
  );
};

export default App;
