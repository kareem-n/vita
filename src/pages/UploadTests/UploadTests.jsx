import './UploadTests.css'
import uploadFile from '../../assets/images/File upload area.png';
import { CgClose } from "react-icons/cg";

const UploadTests = () => {
  return (
    <div className='UploadTests'>
      <div className="container">
        <div className="upload">
          <form action="">
            <div className="file">
              <img src={uploadFile} alt="" />
              <input type="file" />
            </div>
            <h5 className='my-3'>Uploading - <span> 3/3 files</span></h5>
            <div className="fileName">
              <p className='m-0'>tests_file.csv</p>
              <div className="icon">
                <CgClose/>
              </div>
            </div>
            <div className="fileName">
              <p className='m-0'>tests_file.csv</p>
              <div className="icon">
                <CgClose/>
              </div>
            </div>
            <div className="fileName">
              <p className='m-0'>tests_file.csv</p>
              <div className="icon">
                <CgClose/>
              </div>
            </div>

            <input type="submit" value='UPLOAD FILES'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadTests;