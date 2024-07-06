import { useEffect, useState } from 'react'
import './AddPrescription.css'
import { IoAddOutline } from "react-icons/io5";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AddPrescription = () => {
  const [dataMedicine, setDataMedicine] = useState([{
    medicine: "",
    note: ""
  }])

  const nav = useNavigate();

  const { accessP, type } = useSelector(state => state.user)


  console.log(accessP);


  useEffect(() => {

    if (type === "doctor" && accessP === false) {
      nav('/noPatient')
    }

  }, [])



  const handleClickMedicine = () => {
    setDataMedicine([...dataMedicine, { medicine: "", note: "" }])
  }
  const handleChangeMedicine = (e, i) => {
    const { name, value } = e.target;
    const onchangeValue = [...dataMedicine];
    onchangeValue[i][name] = value;
    setDataMedicine(onchangeValue)

  }

  const [dataTest, setDataTest] = useState([{
    test: "",
    note: ""
  }])

  const handleClickTest = () => {
    setDataTest([...dataTest, { test: "", note: "" }])
  }
  const handleChangeTest = (e, i) => {
    const { name, value } = e.target
    const onchangeValue = [...dataTest];
    onchangeValue[i][name] = value;
    setDataTest(onchangeValue)
  }

  const [dataXRay, setDataXRay] = useState([{
    x_ray: "",
    note: ""
  }])

  const handleClickXRay = () => {
    setDataXRay([...dataXRay, { x_ray: "", note: "" }])
  }
  const handleChangeXRay = (e, i) => {
    const { name, value } = e.target
    const onchangeValue = [...dataTest];
    onchangeValue[i][name] = value;
    setDataXRay(onchangeValue)
  }



  const [dig, setDig] = useState(null);
  const [note, setNote] = useState(null);


  const [errorMsg, setErrorMsg] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {

    e.preventDefault();

    setErrorMsg(null)
    dataMedicine.map(med => {
      console.log(med);
      for (const iterator in med) {
        if (med[iterator] === '') {
          setErrorMsg('some fields is empty!')
        }
      }
    })

    dataTest.map(med => {
      console.log(med);
      for (const iterator in med) {
        if (med[iterator] === '') {
          setErrorMsg('some fields is empty!')
        }
      }
    })


    dataXRay.map(med => {
      console.log(med);
      for (const iterator in med) {
        if (med[iterator] === '') {
          setErrorMsg('some fields is empty!')
        }
      }
    })

    if (!dig) {
      setErrorMsg('some fields is empty!')
    }
    if (!note) {
      setErrorMsg('some fields is empty!')
    }


    // console.log(errorMsg);


    if (!errorMsg) {
      axios.post(`https://vitaapp.azurewebsites.net/doctors/add-prescription-to-my-patient`, {
        "patientName": `${accessP}`,
        "medicines": dataMedicine,
        "xr": dataXRay,
        "tests": dataTest,
        "note": `${note}`,
        "diagnosis": `${dig}`
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {

        setSuccess("prescription added ")
        window.scrollTo({
          top: 0
        })

      }).catch(err => {
        console.log(err.response);
      })
    }
    else {
      window.scrollTo({
        top: 0
      })
    }





  }

  return (
    <form onSubmit={handleSubmit} className='AddPrescription'>

      {
        errorMsg && <div className="bg-danger mb-3 text-white px-3 py-2 rounded-2">
          {errorMsg}
        </div>
      }

      {
        success && <div className="bg-success mb-3 text-white px-3 py-2 rounded-2">
          {success}
        </div>
      }

      <div className='medicine'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3>Medicine</h3>
          <h3>Note</h3>
        </div>
        {
          dataMedicine.map((value, i) =>
            <div key={i} className='inputs'>
              <input type="text" name='medicine' value={value.medicine} onChange={(e) => handleChangeMedicine(e, i)} required placeholder='Medicine' />
              <input type="text" name='note' value={value.note} onChange={(e) => handleChangeMedicine(e, i)} required placeholder='Note' />
            </div>
          )
        }
        <button type='button' className='addBtn' onClick={handleClickMedicine}>
          <IoAddOutline />
        </button>
        {/* <p>{JSON.stringify(dataMedicine)}</p> */}
      </div>

      <div className='test'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3>Test</h3>
          <h3>Note</h3>
        </div>
        {
          dataTest.map((value, i) =>
            <div key={i} className='inputs'>
              <input type="text" name='test' /*value={value.test}*/ onChange={(e) => handleChangeTest(e, i)} placeholder='Test' required />
              <input type="text" name='note' /*value={value.note}*/ onChange={(e) => handleChangeTest(e, i)} placeholder='Note' required />
            </div>
          )
        }
        <button type='button' className='addBtn' onClick={handleClickTest}>
          <IoAddOutline />
        </button>
        {/* <p>{JSON.stringify(dataTest)}</p> */}
      </div>

      <div className='x_Ray'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3>X_Ray</h3>
          <h3>Note</h3>
        </div>
        {
          dataXRay.map((value, i) =>
            <div key={i} className='inputs'>
              <input type="text" name='test' /*value={value.x_ray}*/ onChange={(e) => handleChangeXRay(e, i)} required placeholder='X_Ray' />
              <input type="text" name='note' /*value={value.note}*/ onChange={(e) => handleChangeXRay(e, i)} required placeholder='Note' />
            </div>
          )
        }
        <button type='button' className='addBtn' onClick={handleClickXRay}>
          <IoAddOutline />
        </button>
        {/* <p>{JSON.stringify(dataXRay)}</p> */}
      </div>
      <div className='Diagnosis'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3 className='border-0'>Diagnosis</h3>
        </div>
        <textarea onChange={(e) => {
          setDig(e.target.value)
        }} name="" id="" cols="30" rows="10" placeholder='diagnosis...'></textarea>
      </div>
      <div className='note'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3 className='border-0'>Note</h3>
        </div>
        <textarea onChange={(e) => {
          setNote(e.target.value)
        }} name="" id="" cols="30" rows="10" placeholder='Note...'></textarea>
      </div>

      <button onClick={handleSubmit} type="submit" className='add'>Add</button>
    </form>
  )
}
export default AddPrescription