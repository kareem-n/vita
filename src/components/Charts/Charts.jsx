import Chart, { NumChart } from '../../Data/Chart/Chart';
import Head, { ContentHead } from '../Head/Head';
import './Charts.css';
import { FaUser } from "react-icons/fa";

// import Head, { ContentHead } from '../../components/Head/Head';

const Charts = () => {
  return (
    <div className='Charts'>
      <ContentHead/>
      <div className="charts d-grid">
        <Chart>
          <Head>
            <h5>Test Name</h5>
            <FaUser/>
          </Head>
        </Chart>
        
        <Chart>
          <Head>
            <h5>Test Name</h5>
            <FaUser/>
          </Head>
        </Chart>
        <Chart>
          <Head>
            <h5>Test Name</h5>
            <FaUser/>
          </Head>
        </Chart>
        <Chart>
          <Head>
            <h5>Test Name</h5>
            <FaUser/>
          </Head>
        </Chart>
        <Chart>
          <Head>
            <h5>Test Name</h5>
            <FaUser/>
          </Head>
        </Chart>

      <NumChart>
        <Head>
          <FaUser/>
        </Head>
        <div className="info d-flex align-items-center gap-4 justify-content-evenly">
          <div className="name_date">
            <h2>Test <br /> Name</h2>
            <p><strong>Date: </strong>15/9/2025</p>
          </div>
          <div className="num">
            <h2 className='m-0'>45.6</h2>
            <p className='m-0'>Units</p>
          </div>
        </div>
      </NumChart>

      <NumChart>
        <Head>
          <FaUser/>
        </Head>
        <div className="info d-flex align-items-center gap-4 justify-content-evenly">
          <div className="name_date">
            <h2>Test <br /> Name</h2>
            <p><strong>Date: </strong>15/9/2025</p>
          </div>
          <div className="num">
            <h2 className='m-0'>45.6</h2>
            <p className='m-0'>Units</p>
          </div>
        </div>
      </NumChart>

      <NumChart>
        <Head>
          <FaUser/>
        </Head>
        <div className="info d-flex align-items-center gap-4 justify-content-evenly">
          <div className="name_date">
            <h2>Test <br /> Name</h2>
            <p><strong>Date: </strong>15/9/2025</p>
          </div>
          <div className="num">
            <h2 className='m-0'>45.6</h2>
            <p className='m-0'>Units</p>
          </div>
        </div>
      </NumChart>

      <NumChart>
        <Head>
          <FaUser/>
        </Head>
        <div className="info d-flex align-items-center gap-4 justify-content-evenly">
          <div className="name_date">
            <h2>Test <br /> Name</h2>
            <p><strong>Date: </strong>15/9/2025</p>
          </div>
          <div className="num">
            <h2 className='m-0'>45.6</h2>
            <p className='m-0'>Units</p>
          </div>
        </div>
      </NumChart>
      </div>
    </div>
  )
}

export default Charts