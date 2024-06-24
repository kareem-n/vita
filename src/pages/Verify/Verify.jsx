import "./Verify.css";
import Vector from "../../assets/images/Vector.png";
import Bg from "../../assets/images/bg-virfy.png";
import { InputSubmit } from "../../components/Buttons/Buttons";
import { useRef } from "react";

const Verify = () => {
  // إنشاء مراجع لكل حقل إدخال
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 1 && index < inputRefs.current.length - 1) {
      // نقل التركيز إلى الحقل التالي
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0 && !e.target.value) {
      // حذف محتوى الحقل السابق ونقل التركيز إليه
      inputRefs.current[index - 1].focus();
      inputRefs.current[index - 1].value = '';
    }
  };

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
              {Array.from({ length: 8 }).map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={(el) => (inputRefs.current[index] = el)}
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
              ))}
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
          <div class="circle three"></div>
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
