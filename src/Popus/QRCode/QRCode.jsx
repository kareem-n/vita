import { useSelector } from 'react-redux';
import './QRCode.css'

import QRCode from 'react-qr-code';

const QRCodee = () => {


  const { userDet } = useSelector(state => state.user);


  return (
    <>
      <div style={{
        margin: '96px'
      }}
        className='d-flex align-items-center flex-column'
      >
        {
          userDet && <div className='d-flex justify-content-center align-items-center flex-column'>
            <QRCode
              size={256}
              style={{ height: "400px", maxWidth: "80%", width: "80%" }}
              value={userDet.username}
            />
            <h1 className='mt-2 fw-bold'>@{userDet.username}</h1>
          </div>


        }



      </div>

    </>
  )
}

export default QRCodee;