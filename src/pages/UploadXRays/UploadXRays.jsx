import './UploadXRays.css'
import uploadFile from '../../assets/images/File upload xray.png';
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
            <div className="fileNotUpload">
              <p className='m-0'>tests_file.png</p>
              <div className="icon">
                <CgClose/>
              </div>
            </div>

            <div className="uploaded d-flex justify-content-start align-items-start flex-column">
              <h5>Uploaded</h5>
              <div className="content">
                <div className="fileName">
                  <p className='m-0'>tests_file.png</p>
                  <div className="icon">
                    <FaTrashAlt/>
                  </div>
                </div>
                <select defaultValue="Category" className='category' id='Category' name='Category'>
                  <option value="Category" disabled>Category</option>
                  <option value="Brain">Brain</option>
                  <option value="Skull">Skull</option>
                  <option value="Eyes">Eyes</option>
                  <option value="Ears, Nose, and Throat">Ears, Nose, and Throat</option>
                  <option value="Dental">Dental</option>
                  <option value="Chest-Lungs">Chest-Lungs</option>
                  <option value="Chest-Breasts">Chest-Breasts</option>
                  <option value="Abdominal">Abdominal</option>
                  <option value="Pelvis">Pelvis</option>
                  <option value="Bones">Bones</option>
                  <option value="Joints">Joints</option>
                  <option value="Spine">Spine</option>
                  <option value="Whole Body">Whole Body</option>
                </select>
              </div>

              <div className="content">
                <div className="fileName">
                  <p className='m-0'>tests_file.png</p>
                  <div className="icon">
                    <FaTrashAlt/>
                  </div>
                </div>
                <select defaultValue="Category" className='category' id='Category' name='Category'>
                  <option value="Category" disabled>Category</option>
                  <option value="Brain">Brain</option>
                  <option value="Skull">Skull</option>
                  <option value="Eyes">Eyes</option>
                  <option value="Ears, Nose, and Throat">Ears, Nose, and Throat</option>
                  <option value="Dental">Dental</option>
                  <option value="Chest-Lungs">Chest-Lungs</option>
                  <option value="Chest-Breasts">Chest-Breasts</option>
                  <option value="Abdominal">Abdominal</option>
                  <option value="Pelvis">Pelvis</option>
                  <option value="Bones">Bones</option>
                  <option value="Joints">Joints</option>
                  <option value="Spine">Spine</option>
                  <option value="Whole Body">Whole Body</option>
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