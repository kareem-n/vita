import './UploadPost.css'
import uploadFile from '../../assets/images/File upload area.png';
import { CgClose } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";

const UploadPost = () => {
  return (
    <div className='UploadPost'>
      <div className="container">
        <div className="upload">
          <form action="">
            <h3 className='text-center mb-3'>Upload Post</h3>
            <div className="file">
              <p>Choose Picture : </p>
              <img src={uploadFile} alt="" />
              <input type="file" />
            </div>
            <div className="Num d-flex justify-content-between align-items-start mt-3">
              <h4>Number Of Days : </h4>
              <div className="">
                <input type="number" min={1} required/>
                <p>fees:$56</p>
              </div>
            </div>

            <div className="pay d-flex justify-content-between align-items-start mt-0">
              <h4>Pay Fees : </h4>
              <button type='button' className='btn'>Pay</button>
            </div>
            
            <input type="submit" value='UPLOAD'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadPost;