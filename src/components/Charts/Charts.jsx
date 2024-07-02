import Chart, { NumChart } from '../../Data/Chart/Chart';
import Head, { ContentHead } from '../Head/Head';
import './Charts.css';
import { useEffect, useState } from 'react';
import switchIcon from '../../assets/images/switchIcon.png';
import switchIcon2 from '../../assets/images/switchIcon2.png';
import axios from 'axios';
// import Head, { ContentHead } from '../../components/Head/Head';

const Charts = () => {
  const [boxCount, setBoxCount] = useState(3);
  const [boxes, setBoxes] = useState([]);


  useEffect(() => {

    axios.get("https://vitaapp.azurewebsites.net/patients/get-list-of-tests-details-by-category?category=boold&patientName=kareem", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(res => {
      console.log(res.data);
    })

  }, [])


  useEffect(() => {
    const initialBoxState = Array(boxCount).fill({ isFlipped: false, isRedBorder: false });
    setBoxes(initialBoxState);
  }, [boxCount]);

  const handleFlip = (index) => {
    const newBoxes = [...boxes];
    newBoxes[index] = { ...newBoxes[index], isFlipped: !newBoxes[index].isFlipped };
    setBoxes(newBoxes);
  };

  const handleDoubleClick = (index) => {
    const newBoxes = [...boxes];
    newBoxes[index] = { ...newBoxes[index], isRedBorder: !newBoxes[index].isRedBorder };
    setBoxes(newBoxes);
  };
  return (
    <div className='Charts'>
      <ContentHead />
      <div className="charts">
        {boxes.map((box, index) => (
          <div
            key={index}
            className={`box mt-4 ${box.isFlipped ? 'flipped' : ''}`}
            onDoubleClick={() => handleDoubleClick(index)}
          >
            <NumChart>
              <Head>
                <img style={{ cursor: 'pointer' }} src={switchIcon2} alt="" onClick={() => handleFlip(index)} />
              </Head>
              <div className="info d-flex align-items-center gap-4 justify-content-evenly">
                <div className="name_date">
                  <h2>Test <br /> Name</h2>
                  <p><strong>Date: </strong>15/9/2025</p>
                </div>
                <div className={`num ${box.isRedBorder ? 'red-border' : ''}`}>
                  <h2 className='m-0'>45.6</h2>
                  <p className={`m-0 ${box.isRedBorder ? 'red-border' : ''}`}>Units</p>
                </div>
              </div>
            </NumChart>
            <Chart>
              <Head>
                <h5>Test Name</h5>
                <img style={{ cursor: 'pointer' }} src={switchIcon} alt="" onClick={() => handleFlip(index)} />
              </Head>
            </Chart>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Charts;