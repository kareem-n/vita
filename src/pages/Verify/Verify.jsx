import "./Verify.css";
import Vector from "../../assets/images/Vector.png";
import Bg from "../../assets/images/bg-virfy.png";
import { InputSubmit } from "../../components/Buttons/Buttons";

const Verify = () => {
  return (
    <>
      <section className="verify" id="verify">
        <div className="container">
          <div className="heading text-center">
            <h1>Register Now</h1>
            <p>Fill the information carefully </p>
          </div>
          <form action="">
            <h5>Verify it’s you</h5>
            <h4>Enter verification code</h4>

            <div className="inputs d-grid">
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
              <input type="text" maxLength={1} />
            </div>
            <p>A verification code has been sent to your mobile number and email</p>
            <InputSubmit>Verify</InputSubmit>
          </form> 
          <img src={Vector} className="vector_1" />
          <img src={Vector} className="vector_2" />
          <img src={Vector} className="vector_3" />
          <img src={Vector} className="vector_4" />

          <div className="circle one"></div>
          <div className="circle two"></div>
          <div className="circle three"></div>
          <div className="circle four"></div>
          <div className="circle five"></div>
          <div className="circle six"></div>

          <div className="image">
            <img src={Bg} className="Bg" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Verify;
