import "./Login.css";
import Logo from "../../assets/images/LOGO.png";
import Ellipse from "../../assets/images/Ellipse 1.png";
import Vector_2 from "../../assets/images/Vector2.png";
import Vector from "../../assets/images/Vector.png";
import { FirstBtn, InputSubmit } from "../../components/Buttons/Buttons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Joi from "joi";
import Loader from "../../components/loader/Loader";
import { useDispatch } from "react-redux";
import { setUser, setUserDet, setUserImage } from "../../redux/slices/UserSlice";
import axios from "axios";

const Login = () => {


  const navigate = useNavigate();


  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });


  const dispatch = useDispatch();


  const [exError, setExError] = useState(null);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);



  const dataValidationSchema = (loginData) => {


    const schema = Joi.object({
      username: Joi.string()
        .required()
        .messages({
          'string.empty': 'username is required',
        }),

      password: Joi.string()
        .required()
        .messages({
          'string.empty': 'Password is required',
        }),
    });
    return schema.validate(loginData, { abortEarly: false })
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm, [name]: value
    })
  }



  const convertArrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true);
    setErrors(null);

    const dataValidationResult = dataValidationSchema(loginForm);

    if (dataValidationResult.error) {
      setErrors(dataValidationResult.error.details);
      setLoading(false);

    } else {
      axios.post("https://vita-production.up.railway.app/login", loginForm).then(res => {
        setLoading(false);

        // console.log(res.data);

        dispatch(setUser(res.data.token));
        localStorage.setItem("user", res.data.token);

        axios.get("https://vita-production.up.railway.app/users/auth/get-profile-image", {
          headers: {
            Authorization: `Bearer ${res.data.token}`,
          },
          responseType: 'arraybuffer',
        }).then(data => {
          const base64 = convertArrayBufferToBase64(data.data);
          const image = `data:image/jpeg;base64,${base64}`;
          dispatch(setUserImage(image));
        })


        axios.get("https://vita-production.up.railway.app/users/auth/get-general-info-of-user", {
          headers: {
            Authorization: `Bearer ${res.data.token}`
          }
        }).then(data => {
          // console.log(data.data);
          dispatch(setUserDet(data.data));
          navigate('/Posters')
        })



      }).catch(err => {
        setLoading(false)
        setExError("username or password is wrong!")
        console.log(err);
      })


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
                {
                  exError && <div className="alert alert-danger mt-2">
                    {exError}
                  </div>
                }
                <form onSubmit={handleSubmit}>
                  <div className="input">
                    <label htmlFor="username">Username <span style={{ color:'#F21D2F' }}>*</span></label>
                    <input type="text" placeholder="user name" name="username" onChange={handleChange} />

                    {
                      errors && errors.map((err, i) => {
                        if (err.path[0] === 'username') {
                          return <div key={i} className="badge text-danger h1">
                            {err.message}
                          </div>
                        }
                      })
                    }


                  </div>
                  <div className="input">
                    <label htmlFor="password">Password <span style={{ color:'#F21D2F' }}>*</span></label>
                    <input type="password" name="password" id="password" placeholder="Enter Your Password" onChange={handleChange} />

                    {
                      errors && errors.map((err, i) => {
                        if (err.path[0] === 'password') {
                          return <div key={i} className="badge text-danger h1">
                            {err.message}
                          </div>
                        }
                      })
                    }

                  </div>
                  <h6><a href="">Forgot Password ?</a></h6>
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

        {
          loading && <Loader />
        }
      </section>
    </>
  );
};

export default Login;
