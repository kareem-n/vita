import "./Home.css";
import { FaUser } from "react-icons/fa";
import Logo from "../../assets/images/LOGO.png";
import Ellipse from "../../assets/images/Ellipse 1.png";
import Vector_2 from "../../assets/images/Vector2.png";
import Vector from "../../assets/images/Vector.png";
import LoginButton, { RegisterButton } from "../../components/Buttons/Buttons";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="content">
            <div className="info d-flex">
              <div className="text">
                <h2>VITA.</h2>
                <h3>Vital Information <br /> Tracking Archive</h3>
                <div className="btns d-flex">
                  <LoginButton>Login</LoginButton>
                  <RegisterButton>Register</RegisterButton>
                </div>
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

export default Home;
