import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { CredentialsContext } from '../../App';

const Agencylogin = () => {

   const navigate=useNavigate();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [, setCredentials] = useContext(CredentialsContext);

   const loginAgencyUser = async (e) =>{
        e.preventDefault();

        const res = await fetch("http://localhost:5000/agencylogin", {
          // mode: 'no-cors',
          method:"POST",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify({username,password})
        });

        const data = res.json();
        if(res.status!==200 || !data){          
          window.alert("Agency Invalid Credentials");
        }else{
          window.alert("Agency Login Successfull");
          setCredentials({username, password});
          navigate("/agencydashboard");
        }
        
   }

   const openPage = () => {
    navigate("/agencyapplyform");
   }

  return (
    <div className='form_page'>
    <div className='form_container'>
    
    <form method="POST" onSubmit={loginAgencyUser}>  
      <div className='shadow p-3 mb-5 bg-white rounded'>
        <div className='w-50 mx-auto heading'>Agency Login</div>
      
          <div className="mb-3 mx-auto inputArea">
            <label className="form-label" htmlFor='username'>Username</label>
            <input type="email" className="form-control" name='username' id ='username' autoComplete='off'
              value={username} onChange={(e)=> setUsername(e.target.value)}
            />
          </div>
          
          <div className="mb-3 mx-auto inputArea">
            <label className="form-label" htmlFor='password'>Password</label>
            <input type="password" className="form-control" name='password' id ='password' autoComplete='off'
            value={password} onChange={(e)=> setPassword(e.target.value)} />
          </div>
          
          
          <div className='form_btn'>
          <button type="submit" className="btn btn-dark" name='signin' id='signin'>Login</button>
          </div>

      </div>
    </form>

    

    <form>  
      <div className='shadow p-3 mb-5 bg-white rounded'>
        <div className='w-50 mx-auto heading'>Agency Registration</div>
          <div className='form_btn'>
          <button type="submit" className="btn btn-dark" onClick={openPage}>Register</button>
          </div>
      </div>
    </form>

</div>
</div>
  )
}

export default Agencylogin;