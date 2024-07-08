import './UploadTests.css'
import uploadFile from '../../assets/images/File upload area.png';
import { CgClose } from "react-icons/cg";
import Papa from 'papaparse';
import { useEffect, useState } from 'react';
import Joi from 'joi';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const UploadTests = () => {


  const [data, setdata] = useState(null);
  const [fileName, setFileName] = useState(null)
  const requiredHeaders = ["category", "code", "description", "units", "value", "is_abnormal"];
  const nav = useNavigate();


  const [Errors, setErrors] = useState(null);

  const { type, accessP, currentProfile } = useSelector(state => state.user);


  const handleFileChnage = (e) => {
    const { name, value, files } = e.target;
    console.log(name, files[0]);
    setFileName(files[0].name)
    Papa.parse(files[0], {
      complete: (results) => {
        const headers = results.meta.fields;
        const missingHeaders = requiredHeaders.filter(header => !headers.includes(header));

        if (missingHeaders.length > 0) {
          setErrors(`Missing headers: ${missingHeaders.join(', ')}`);
          return;
        }

        const rowsWithMissingValues = results.data.filter(row => {
          // Filter out completely empty rows
          const isEmptyRow = requiredHeaders.every(header => !row[header]);
          if (isEmptyRow) return false;

          // Check if any required header is missing a value
          return requiredHeaders.some(header => !row[header]);
        });

        if (rowsWithMissingValues.length > 0) {
          setErrors('seems like some fields is empty');
          return;
        }

        // Handle valid data
        setdata(results.data);
      },
      error: (error) => {
        console.log(`Error parsing file: ${error.message}`);
      },
      header: true,
      skipEmptyLines: true,
    });
  }


  const validOBJ = (dt) => {

    const schema = Joi.object({
      category: Joi.string().required().messages({
        'string.empty': 'category is required'
      }),
      code: Joi.string().required().messages({
        'string.empty': 'category is required'
      }),
      description: Joi.string().required().messages({
        'string.empty': 'category is required'
      }),
      units: Joi.string().required().messages({
        'string.empty': 'category is required'
      }),
      value: Joi.string().required().messages({
        'string.empty': 'category is required'
      }),
      is_abnormal: Joi.string().required().messages({
        'string.empty': 'category is required'
      }),

    })

    return schema.validate(dt, { abortEarly: false })

  }


  useEffect(() => {

    if (!type) {
      nav("/noPatient")
    }


  }, [type])



  const [success, setsuccess] = useState(null)
  // const [missingKey, setMissingKey] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();






    console.log(type, accessP);



    data.map(item => {
      // console.log(item);
      // const validResult = validOBJ(item) ;

      console.log(item);

      item['patientName'] = accessP;

      axios.post(`https://vitaapp.azurewebsites.net/Test-Lab/add-test-result?laboratoryName=${currentProfile}`, item, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        console.log(res.data);
        setsuccess(res.data)
      })
        .catch(err => {
          console.log(err);
        })


    })



    // console.log(data);


    // console.log(validOBJ);

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
            <h3 className='text-center mb-3'>Upload X_Rays</h3>
            <div className="file">
              <img src={uploadFile} alt="" />
              <input
                onChange={handleFileChnage}
                name='file'
                type="file" />
            </div>
            <h5 className='my-3'>Uploading - <span> {fileName ? '1' : '0'}/1 files</span></h5>
            <div style={{
              border: Errors ? "1px solid red" : success && '2px solid green'
            }} className="fileName">
              <p className='m-0'>{fileName ? fileName : '__.csv'}</p>
              <div className="icon">
                <CgClose />
              </div>
            </div>

            {
              Errors && <div className="text-danger">{Errors}</div>
            }
            {
              success && <div className="text-success">{success}</div>
            }

            <input disabled={Errors ? true : false} type="submit" value='UPLOAD FILES' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default UploadTests;