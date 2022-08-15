import React, {useContext} from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import { CredentialsContext } from '../App';

const Dashboard = () => {

    const navigate=useNavigate();

    const [credentials, setCredentials] = useContext(CredentialsContext);

    const logout = () => {
        setCredentials(null);
        navigate("/");
      }

  return (
    <>
        {credentials && <NavLink className="nav-link active" aria-current="page" to="/apply">Apply</NavLink>}
        {credentials && <button className='logout_btn' onClick={logout}>Logout</button>}
    </>
  )
}

export default Dashboard;