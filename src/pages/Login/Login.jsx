import "./Login.css";
import { FaUser } from "react-icons/fa";
import Logo from "../../assets/images/LOGO.png";
import Ellipse from "../../assets/images/Ellipse 1.png";
import Vector_2 from "../../assets/images/Vector2.png";
import Vector from "../../assets/images/Vector.png";
import LoginButton, { InputSubmit, RegisterButton } from "../../components/Buttons/Buttons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate()
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const [errors, serErrors] = useState({})
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setLoginForm({
      ...loginForm, [name] : value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
      if(!loginForm.email.trim()){
        validationErrors.email = 'Email Is Requried';
      }

    if(!loginForm.password.trim()){
      validationErrors.password = 'Password Is Requried'
    }
    serErrors(validationErrors);

    if(Object.keys(validationErrors).length === 0){
      navigate('/Main')
    }
  }

  return (
    <>
      <section className="login" id="login">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="content">
            <div className="info d-flex">
              <div className="text">
                <h2>VITA.</h2>
                <form action="" onSubmit={handleSubmit}>
                  <div className="input">
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <input type="email" placeholder="Enter Your Email" name="email" onChange={handleChange}/>
                    {errors.email && <div className='alert alert-danger'>{errors.email}</div>}
                  </div>
                  <div className="input">
                    <label htmlFor="password">Password  <span>*</span></label>
                    <input type="password" name="password" id="password" placeholder="Enter Your Password" onChange={handleChange}/>
                    {errors.password && <div className='alert alert-danger'>{errors.password}</div>}
                  </div>                  <h6><a href=""> Forgot Password ?</a></h6>
                  <div className="d-flex">
                    <InputSubmit>Login</InputSubmit>
                    <span>No Account ? <Link to="/register">Register</Link></span>
                  </div>
                </form>
              </div>
              <div className="image ">
                <img src={Ellipse} alt="" />
              </div>
            </div>
          </div>
          <img src={Vector_2} className="vector_1" />
          <img src={Vector_2} className="vector_2" />
          <img src={Vector} className="vector_3" />
          <img src={Vector_2} className="vector_4" />
          <img src={Vector} className="vector_5" />
        </div>
      </section>
    </>
  );
};

export default Login;
