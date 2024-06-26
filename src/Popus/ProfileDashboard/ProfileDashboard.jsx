import { FaXmark } from "react-icons/fa6";
import "./ProfileDashboard.css";

const ProfileDashboard = () => {
  return (
    <div className="overlay d-flex justify-content-center align-items-center">
      <div className="popup text-center" style={{ background: "#171821", paddingTop: "20px" }}>
        <div className="heading">
          <h3 className="text-white">Profile</h3>
        </div>

        <form action="">
          <div className="org_name">
            <label htmlFor="orgName">Organization Name <span>*</span></label>
            <input type="text" id="orgName" name="orgName" placeholder="Enter Organization Name"/>
          </div>
          <div className="user_name mt-3">
            <label htmlFor="userName">Username <span>*</span></label>
            <input type="text" id="userName" name="userName" placeholder="Enter Username"/>
          </div>
          <div className="email mt-3">
            <label htmlFor="email">Organization Name <span>*</span></label>
            <input type="email" id="email" name="email" placeholder="Enter Email Address"/>
          </div>

          <div className="password mt-5">
            <div className="currPass">
              <label htmlFor="currPass">Current Password <span>*</span></label>
              <input type="password" id="currPass" name="currPass" placeholder="Current Password"/>
            </div>
            <div className="newPass mt-3">
              <label htmlFor="newPass">New Password <span>*</span></label>
              <input type="password" id="newPass" name="newPass" placeholder="Enter Username"/>
            </div>
            <div className="confirmPaa mt-3">
              <label htmlFor="confirmPaa">Confirm Password <span>*</span></label>
              <input type="password" id="confirmPaa" name="confirmPaa" placeholder="Enter Email Address"/>
            </div>

            <input type="submit" value={'Save'}/>
          </div>
        </form>
          <div className="close" style={{ backgroundColor:'#21222D' }}>
            <FaXmark/>
          </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
