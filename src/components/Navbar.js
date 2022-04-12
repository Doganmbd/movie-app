
import React from "react";
import { Link , useNavigate} from "react-router-dom";

const Navbar = () => {
  const currentUser = { displayName: "Mustafa bilal doğan" };
  const navigate = useNavigate();
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link to={"/"} className="navbar-brand text-white">
            <h4>React Movie App</h4>
          </Link>
          <div className="d-flex text-white align-items-center">
{   currentUser ?       (
            <h5 className="mb-0 text-capitalize">{currentUser?.displayName}</h5>
         ) : (<button onClick={()=> navigate("/login")} className="ms-2 btn btn-outline-light">Login</button>)}

{   currentUser ?       (<button className="ms-2 btn btn-outline-light">LogOut</button>) : (<button onClick={()=> navigate("/register")} className="ms-2 btn btn-outline-light">Register</button>)}


</div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
