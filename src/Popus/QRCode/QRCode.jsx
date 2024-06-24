import './QRCode.css'
import { FaXmark } from "react-icons/fa6";
import ImageQRCode from '../../assets/images/QR.png'


const QRCode = ({ popupQRCode, setpopupQRCode }) => {

  const hide = () => {
    setpopupQRCode(false)
  }

  return (
    <>

      {popupQRCode && (
        <div className='overlay d-flex justify-content-center align-items-center'>
          <div className="popup">
            <div className="qrcode">
              <div className="heading"><h3>Connect with (first name) </h3></div>
              <div className="QRCode mt-7">
                <div className="image">
                  <img src={ImageQRCode} alt="" />
                </div>
              </div>
            </div>
            <div className="close">
              <FaXmark onClick={hide} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default QRCode;