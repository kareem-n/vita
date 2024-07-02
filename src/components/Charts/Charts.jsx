import Chart, { NumChart } from '../../Data/Chart/Chart';
import Head, { ContentHead } from '../Head/Head';
import './Charts.css';
import { useEffect, useState } from 'react';
import switchIcon from '../../assets/images/switchIcon.png';
import switchIcon2 from '../../assets/images/switchIcon2.png';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';
// import Head, { ContentHead } from '../../components/Head/Head';

const Charts = () => {
  const [boxCount, setBoxCount] = useState(3);
  const [boxes, setBoxes] = useState([]);


  const [catItems, setCatItems] = useState(null);
  const [data, setData] = useState(null)


  function getData(cat) {
    axios.get(`https://vitaapp.azurewebsites.net/patients/get-list-of-tests-details-by-category?category=${cat}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(dt => {
      setData(dt.data)
      console.log(dt.data);
    })
  }

  useEffect(() => {

    axios.get("https://vitaapp.azurewebsites.net/patients/get-category-list", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(res => {
      setCatItems(res.data);
      if (res.data[0]) {
        getData(res.data[0])
      }
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
    <>
      {
        data ? <div className='Charts'>
          {
            catItems && <ContentHead getData={getData} items={catItems} />
          }
          <div className="charts">
            {data.map((box, index) => (
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
                      <h2>{box.description}</h2>
                      <p><strong>Date: </strong>15/9/2025</p>
                    </div>
                    <div className={`num ${box.isRedBorder ? 'red-border' : ''}`}>
                      <h2 className='m-0'>{box.value}</h2>
                      <p className={`m-0 ${box.isRedBorder ? 'red-border' : ''}`}>{box.unites}</p>
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
        </div> : <div style={{
          margin: '200px'
        }} className="d-flex align-items-center justify-content-center">
          <Bars color='blue' />
        </div>
      }

    </>

  )
}

export default Charts;