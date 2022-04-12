import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { signIN } from "../auth/firebase";

const Login = () => {


  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmitInput = (e) => {
    e.preventDefault()
    console.log(email, password)
    signIN(email,password)

  }


  return ( <div className="d-flex justify-content-center">
  <div className="form-image">
    <img src={"https://picsum.photos/800/800"} alt="bilal" />
  </div>
  <div className="register-form">
    <h1 className="form-title display-3">Login</h1>
    <form id="register" onSubmit={handleSubmitInput}>
      
      <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" className="form-control" id ="email" placeholder="Enter your email address" onChange={(e)=>setEmail(e.target.value)}  required />
      </div>
      <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id ="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} required  />
      </div>

      <input type="submit" className="btn btn-primary form-control" value="Login" /* onClick={handleSubmitInput} *//>
    </form>
    <button className="btn btn-primary form-control" >Countinue With Google</button>
  </div>
</div>)
};

export default Login;
