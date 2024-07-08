import './UploadPost.css'
import uploadFile from '../../assets/images/File upload post.png';
import { CgClose } from "react-icons/cg";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';

const UploadPost = () => {


  const [ImgData, setImgData] = useState(null)
  const [Dayes, setDayes] = useState(null)
  const [ErrorMsg, setErrorMsg] = useState(null)
  const [SuccessMsg, setSuccessMsg] = useState(null)

  const [Loading, setLoading] = useState(false)
  const handleImgChange = (e) => {
    setImgData(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg(null)

    if (!ImgData) {
      setErrorMsg("upload Poster Image!")
    } else {

      if (!Dayes) {
        setErrorMsg("choose number of days!")
        return
      }

      setLoading(true)

      const tmp = new FormData
      tmp.append("image", ImgData)

      axios.post(`https://vitaapp.azurewebsites.net/users/auth/add-poster?days=${Dayes}`, tmp, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        setSuccessMsg(res.data)
        console.log(res.data);
        setLoading(false)
      }).catch(err => {
        setErrorMsg('something went wrong, try again ')
        setLoading(false)
      })

    }

  }



  return (
    <div className='UploadPost'>
      <div className="container">
        <div className="upload">
          <form onSubmit={handleSubmit} action="">
            <h3 className='text-center mb-3'>Upload Post</h3>
            <div className="file">
              <p>Choose Picture : </p>
              <img src={uploadFile} alt="" />
              <input onChange={handleImgChange} type="file" />
            </div>
            {
              ImgData && <div className="my-2">
                {ImgData.name} - (image)
              </div>
            }

            {
              ErrorMsg && <div className="text-danger py-2 px-3">
                {ErrorMsg}
              </div>
            }
            {
              SuccessMsg && <div className="text-success py-2 px-3">
                {SuccessMsg}
              </div>
            }
            <div className="Num d-flex justify-content-between align-items-start mt-3">
              <h4>Number Of Days : </h4>
              <div className="">
                <input onChange={(e) => {
                  setDayes(e.target.value)
                  // console.log(e.target.value);
                }} type="number" min={1} />
                <p>fees:$56</p>
              </div>
            </div>

            <div className="pay d-flex justify-content-between align-items-start mt-0">
              <h4>Pay Fees : </h4>
              <button type='button' className='btn'>Pay</button>
            </div>

            <input type="submit" value='UPLOAD' />
          </form>
        </div>
        {
          Loading && <div style={{
            backgroundColor: 'rgba(0,0,0,0.3)'
          }} className="position-absolute top-0 bottom-0 w-100 h-100 d-flex justify-content-center align-items-center">
            <Bars />
          </div>
        }
      </div>
    </div>
  )
}

export default UploadPost;