import { useState } from 'react'
import './AddPrescription.css'
import { IoAddOutline } from "react-icons/io5";

const AddPrescription = () => {


  const [medButton, setmedButton] = useState(1);

  const arr = Array(medButton).fill(0);


  const [medData, setmedData] = useState({
    medicine: '',
    note: ''
  })

  const handleMedData =()=>{
    
  }


  return (
    <form action='' className='AddPrescription'>
      <div className='medicine'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3>Medicine</h3>
          <h3>Note</h3>
        </div>

        {
          arr.map((item, key) => <div key={key} className='inputs'>
            <input type="text" name='medicine' required placeholder='Medicine' />
            <input type="text" name='note' required placeholder='Note' />
          </div>)
        }



        <button
          onClick={() => {
            setmedButton(medButton + 1)
          }}
          type='button' className='addBtn'>
          <IoAddOutline />
        </button>
        {/* <p>{JSON.stringify(dataMedicine)}</p> */}
      </div>

      <div className='test'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3>Test</h3>
          <h3>Note</h3>
        </div>

        <div className='inputs'>
          <input type="text" name='test' placeholder='Test' required />
          <input type="text" name='note' placeholder='Note' required />
        </div>

        <button type='button' className='addBtn' >
          <IoAddOutline />
        </button>
        {/* <p>{JSON.stringify(dataTest)}</p> */}
      </div>

      <div className='x_Ray'>
        <div className="heading d-flex justify-content-around align-items-center">
          <h3>X_Ray</h3>
          <h3>Note</h3>
        </div>

        <div className='inputs'>
          <input type="text" name='test' required placeholder='X_Ray' />
          <input type="text" name='note' required placeholder='Note' />
        </div>


        <button type='button' className='addBtn'>
          <IoAddOutline />
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