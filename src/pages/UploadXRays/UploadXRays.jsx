import './UploadXRays.css'
import uploadFile from '../../assets/images/File upload area.png';
import { CgClose } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";

const UploadXRays = () => {
  return (
    <div className='UploadXRays'>
      <div className="container">
        <div className="upload">
          <form action="">
            <h3 className='text-center mb-3'>Upload X_Rays</h3>
            <div className="file">
              <img src={uploadFile} alt="" />
              <input type="file" />
            </div>
            <h5 className='my-3'>Uploading - <span> 3/3 files</span></h5>
            <div className="fileNotUpload">
              <p className='m-0'>tests_file.csv</p>
              <div className="icon">
                <CgClose/>
              </div>
            </div>
            <p>This document is too large. Please only upload files less than 5MB.</p>


            <div className="uploaded d-flex justify-content-start align-items-start flex-column">
              <h5>Uploaded</h5>
              <div className="content">
                <div className="fileName">
                  <p className='m-0'>tests_file.csv</p>
                  <div className="icon">
                    <FaTrashAlt/>
                  </div>
                </div>
                <select defaultValue="Category" className='category' id='Category' name='Category'>
                  <option value="Category" disabled>Category</option>
                  <option value="Category_1">Category 1</option>
                  <option value="Category_2">Category 2</option>
                </select>
              </div>

              <div className="content">
                <div className="fileName">
                  <p className='m-0'>tests_file.csv</p>
                  <div className="icon">
                    <FaTrashAlt/>
                  </div>
                </div>
                <select defaultValue="Category" className='category' id='Category' name='Category'>
                  <option value="Category" disabled>Category</option>
                  <option value="Category_1">Category 1</option>
                  <option value="Category_2">Category 2</option>
                </select>
              </div>
            </div>
            <input type="submit" value='UPLOAD FILES'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadXRays;