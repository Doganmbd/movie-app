import {useState} from "react";
import { Navigate,useNAvigate } from "react-router-dom";
import { createUser } from "../auth/firebase";

const Register = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNAvigate()

  const handleSubmitInput = (e) => {
    e.preventDefault();
    createUser(email,password);
    console.log(firstName, lastName, email, password ,navigate);
   

  }

  return (
    <div className="d-flex justify-content-center">
      <div className="form-image">
        <img src={"https://picsum.photos/800/800"} alt="bilal" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register" onSubmit={handleSubmitInput}>
          <div className="mb-3">
          <label htmlFor="first" className="form-label">First name</label>
          <input type="text" className="form-control" id ="first" placeholder="Enter your first name" onChange={(e)=>setFirstName(e.target.value)} value={firstName} required/>
          </div>
          <div className="mb-3">
          <label htmlFor="last" className="form-label">Last Name</label>
          <input type="text" className="form-control" id ="last" placeholder="Enter your last name" onChange={(e)=>setLastName(e.target.value)} required />
          </div>
          <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id ="email" placeholder="Enter your email address" onChange={(e)=>setEmail(e.target.value)}  required />
          </div>
          <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id ="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)} required  />
          </div>
          <input type="submit" className="btn btn-primary form-control" value="Register" /* onClick={handleSubmitInput} *//>
        </form>
      </div>
    </div>
  );
};

export default Register;
