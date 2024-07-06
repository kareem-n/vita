import './UploadTests.css'
import uploadFile from '../../assets/images/File upload area.png';
import { CgClose } from "react-icons/cg";
import Papa from 'papaparse';
import { useState } from 'react';

const UploadTests = () => {


  const [data, setdata] = useState(null);
  const [fileName, setFileName] = useState(null)



  const handleFileChnage = (e) => {
    const { name, value, files } = e.target;
    console.log(name, files[0]);
    setFileName(files[0].name)
    Papa.parse(files[0], {
      complete: (result) => {
        console.log(result);
        // setdata(result.data)
      },
      header: true,
    });
  }


  const validateItems = (items) => {
    const requiredKeys = ["category", "code", "description", "units", "value","is_abnormal"];
    return items.map((item, index) => {
      const missingKeys = requiredKeys.filter(key => !item.hasOwnProperty(key) || item[key].trim() === "");
      if (missingKeys.length > 0) {
        return { index, missingKeys };
      }
      return null;
    }).filter(result => result !== null);
  };

  const [missingKey, setMissingKey] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (validateItems(data)) {
    //   console.log(validateItems(data));
    //   setMissingKey(validateItems(data)[0].missingKeys);
    // }

  }





  return (
    <div className='UploadTests'>
      <div className="container">
        <div className="upload">
          <form onSubmit={handleSubmit} action="">
            <div className="file">
              <img src={uploadFile} alt="" />
              <input onChange={handleFileChnage} name='file' type="file" />
            </div>
            <h5 className='my-3'>Uploading - <span> {fileName ? '1' : '0'}/1 files</span></h5>
            <div className="fileName">
              <p className='m-0'>{fileName ? fileName : '__.csv'}</p>
              <div className="icon">
                <CgClose />
              </div>
            </div>

              {
                missingKey&& missingKey.map( (miss,key) => <div key={key} className="text-danger">{miss} is missing !</div> )
              }

            <input type="submit" value='UPLOAD FILES' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadTests;