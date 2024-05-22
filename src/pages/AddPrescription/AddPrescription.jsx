import { useState } from 'react'
import './AddPrescription.css'
import { IoAddOutline } from "react-icons/io5";

const AddPrescription = () => {
  const [dataMedicine, setDataMedicine] = useState([{
    medicine:"",
    note:""
  }])

  const handleClickMedicine =()=>{
    setDataMedicine([...dataMedicine,{medicine:"",note:""}])
  }
  const handleChangeMedicine = (e,i) =>{
    const {name,value} = e.target;
    const onchangeValue = [...dataMedicine];
    onchangeValue[i][name] = value;
    setDataMedicine(onchangeValue)
  }

  const [dataTest, setDataTest] = useState([{
    test:"",
    note:""
  }])

  const handleClickTest =()=>{
    setDataTest([...dataTest,{test:"",note:""}])
  }
  const handleChangeTest = (e,i) =>{
    const {name,value} = e.target
    const onchangeValue = [...dataTest];
    onchangeValue[i][name] = value;
    setDataTest(onchangeValue)
  }

  const [dataXRay, setDataXRay] = useState([{
    x_ray:"",
    note:""
  }])

  const handleClickXRay =()=>{
    setDataXRay([...dataXRay,{x_ray:"",note:""}])
  }
  const handleChangeXRay = (e,i) =>{
    const {name,value} = e.target
    const onchangeValue = [...dataTest];
    onchangeValue[i][name] = value;
    setDataXRay(onchangeValue)
  }

  return (
    <form action='' className='AddPrescription'>
      <div className='medicine'>
          <div className="heading d-flex justify-content-around align-items-center">
            <h3>Medicine</h3>
            <h3>Note</h3>
          </div>
          {
            dataMedicine.map((value,i)=>
            <div key={i} className='inputs'>
                <input type="text" name='medicine' value={value.medicine} onChange={(e)=>handleChangeMedicine(e,i)} required placeholder='Medicine'/>
                <input type="text" name='note' value={value.note} onChange={(e)=>handleChangeMedicine(e,i)} required placeholder='Note'/>
              </div>
            )
          }
            <button type='button' className='addBtn' onClick={handleClickMedicine}>
              <IoAddOutline/>
            </button>
        {/* <p>{JSON.stringify(dataMedicine)}</p> */}
      </div>
    
      <div className='test'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3>Test</h3>
          <h3>Note</h3>
        </div>
        {
          dataTest.map((value,i)=>
          <div key={i} className='inputs'>
              <input type="text" name='test' value={value.test} onChange={(e)=>handleChangeTest(e,i)} placeholder='Test' required/>
              <input type="text" name='note' value={value.note} onChange={(e)=>handleChangeTest(e,i)} placeholder='Note' required/>
            </div>
          )
        }
        <button type='button' className='addBtn' onClick={handleClickTest}>
          <IoAddOutline/>
        </button>
      {/* <p>{JSON.stringify(dataTest)}</p> */}
      </div>

      <div className='x_Ray'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3>X_Ray</h3>
          <h3>Note</h3>
        </div>
        {
          dataXRay.map((value,i)=>
            <div key={i} className='inputs'>
              <input type="text" name='test' value={value.x_ray} onChange={(e)=>handleChangeXRay(e,i)} required placeholder='X_Ray'/>
              <input type="text" name='note' value={value.note} onChange={(e)=>handleChangeXRay(e,i)} required placeholder='Note'/>
            </div>
          )
        }
        <button type='button' className='addBtn' onClick={handleClickXRay}>
          <IoAddOutline/>
        </button>
      {/* <p>{JSON.stringify(dataXRay)}</p> */}
      </div>
      <div className='Diagnosis'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3 className='border-0'>Diagnosis</h3>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='diagnosis...'></textarea>
      </div>
      <div className='note'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3 className='border-0'>Note</h3>
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder='Note...'></textarea>
      </div>
        <button type="submit" className='add'>Add</button>
    </form>
  )
}
export default AddPrescription