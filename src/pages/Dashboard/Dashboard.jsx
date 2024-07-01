import './Dashboard.css'
import vita from '../../assets/images/LOGO.png';
// import totalUsers from '../../assets/images/Total Users.png';
// import heart from '../../assets/images/Heart.png';
// import corona from '../../assets/images/Corona.png';
// import stethoscope from '../../assets/images/stethoscope.png';
// import org from '../../assets/images/org.png';
// import iconuser from '../../assets/images/iconuser.png';
// import signout from '../../assets/images/signout.png';

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="heading d-flex justify-content-between align-items-center">
        <div className="image">
          <img src={vita} alt="" />
        </div>
        <div className="title">
          <h1>VITA Analysis Center </h1>
        </div>
        <div className="profile">
          <h5 className='m-0'>Organization</h5>
          <p className='m-0'>@username</p>
        </div>
      </div>
      <div className="container">
        <div className="content d-flex justify-content-start align-items-center flex-wrap">
          <div className="today_counts">
            <div className="title">
              <h5 className='m-0'>Today's Counts</h5>
            </div>
            <div className="boxes d-flex align-items-center flex-wrap">
              <div className="box">
                <img src={totalUsers} alt="" />
                <h3 className='mt-3'>110</h3>
                <p className='m-0' style={{ fontSize:"13px", color:'#FEB95A' }}>Total Users</p>
              </div>
              <div className="box">
                <img src={corona} alt="" />
                <h3 className='mt-3'>15</h3>
                <p className='m-0' style={{ fontSize:"13px", color:'#FF5353' }}>Test Categories</p>
              </div>
              <div className="box">
                <img src={heart} alt="" />
                <h3 className='mt-3'>500</h3>
                <p className='m-0' style={{ fontSize:"13px", color:'#66DDCE' }}>Different Tests</p>
              </div>
              <div className="box">
                <img src={stethoscope} alt="" />
                <h3 className='mt-3'>9</h3>
                <p className='m-0' style={{ fontSize:"13px", color:'#F2C8ED' }}>Doctors</p>
              </div>
              <div className="box">
                <img src={org} alt="" />
                <h3 className='mt-3'>12</h3>
                <p className='m-0' style={{ fontSize:"13px", color:'#20AEF3' }}>Organizations</p>
              </div>
            </div>
          </div>
          <div className="options">
            <div className="title">
              <h5 className='m-0'>Options</h5>
            </div>
            <div className="boxes d-flex align-items-center justify-content-center flex-wrap">
              <div className="right">
                <div className="box">
                  <img src={iconuser} alt="" />
                  <span>Profile</span>
                </div>
                <div className="box" >
                  <img src={signout} alt="" />
                  <span>Signout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex justify-content-start align-items-center flex-wrap">
          <div className="ages">
            <div className="title">
              <h5 className='m-0'>Ages</h5>
            </div>
            <div className="progressAges d-flex justify-content-between align-items-center flex-wrap">
              <div className="the-progress">
                <h5>%50</h5>
                <span style={{ height:"50%" }}></span>
                <h6>~10</h6>
              </div>
              <div className="the-progress">
                <h5>%50</h5>
                <span style={{ height:"50%" }}></span>
                <h6>~20</h6>
              </div>
              <div className="the-progress">
                <h5>%30</h5>
                <span style={{ height:"30%" }}></span>
                <h6>~30</h6>
              </div>
              <div className="the-progress">
                <h5>%20</h5>
                <span style={{ height:"20%" }}></span>
                <h6>~40</h6>
              </div>
              <div className="the-progress">
                <h5>%60</h5>
                <span style={{ height:"60%" }}></span>
                <h6>~50</h6>
              </div>
              <div className="the-progress">
                <h5>%70</h5>
                <span style={{ height:"70%" }}></span>
                <h6>~60</h6>
              </div>
              <div className="the-progress">
                <h5>%20</h5>
                <span style={{ height:"20%" }}></span>
                <h6>+60</h6>
              </div>
            </div>
          </div>
          <div className="TopAbnormalTests">
            <div className="title">
              <h5 className='m-0'>Top Abnormal Tests</h5>
            </div>
            <div className="tests">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col" colSpan={2}>Name</th>
                    <th scope="col" style={{ textAlign:'center' }}>%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Test NAME 1</td>
                    <td style={{ width:'40%' }}>
                      <div className="the-progress">
                        <span style={{ width:"46%", backgroundColor:'#FCB859' }}></span>
                      </div>
                    </td>
                    <td style={{ display:'flex', justifyContent:'center' }}>
                      <div className="numProgress" style={{ backgroundColor:'#fcb8596b', border: "1px solid #FCB859"  }}>%46</div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Test NAME 2</td>
                    <td style={{ width:'40%' }}>
                      <div className="the-progress">
                        <span style={{ width:"17%", backgroundColor:'#66DDCE' }}></span>
                      </div>
                    </td>
                    <td style={{ display:'flex', justifyContent:'center' }}>
                      <div className="numProgress" style={{ backgroundColor:'rgb(102 221 206 / 53%)', border: "1px solid #66DDCE"  }}>%17</div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Test NAME 3</td>
                    <td style={{ width:'40%' }}>
                      <div className="the-progress">
                        <span style={{ width:"19%", backgroundColor:'#28AEF3' }}></span>
                      </div>
                    </td>
                    <td style={{ display:'flex', justifyContent:'center' }}>
                      <div className="numProgress" style={{ backgroundColor:'rgb(40 174 243 / 50%)', border: "1px solid #28AEF3"  }}>%19</div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Test NAME 4</td>
                    <td style={{ width:'40%' }}>
                      <div className="the-progress">
                        <span style={{ width:"29%", backgroundColor:'#F2C8ED' }}></span>
                      </div>
                    </td>
                    <td style={{ display:'flex', justifyContent:'center' }}>
                      <div className="numProgress" style={{ backgroundColor:'rgb(242 200 237 / 53%)', border: "1px solid #F2C8ED"  }}>%29</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="choose_text text-center">
          <select name="" id="" defaultValue="Choose Test">
            <option value="choose">Choose Test</option>
            <option value="TestOne">Test One</option>
            <option value="TestTwo">Test Two</option>
            <option value="TestThree">Test Three</option>
            <option value="TestFour">Test Four</option>
          </select>
        </div>

        <div className="test_progress d-flex justify-content-center align-items-center flex-wrap">
          <div className="test_gander">
            <div className="title">
              <h5 className='m-0'>Test-Gander</h5>
            </div>
              <div className="progressGander d-flex justify-content-center align-items-center flex-wrap">
                <div className="the-progress">
                  <h5 style={{ color:'#20AEF3' }}>%70</h5>
                  <span style={{ height:"70%", background:'#20AEF3' }}></span>
                  <h6 style={{ color:'#20AEF3' }}>Males</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color:'#F2C8ED' }}>%30</h5>
                  <span style={{ height:"30%", background:'#F2C8ED' }}></span>
                  <h6 style={{ color:'#F2C8ED' }}>females</h6>
                </div>
              </div>
              </div>
            <div className="test_age">
              <div className="title">
                <h5 className='m-0'>Test-Age</h5>
              </div>
                <div className="progressAges d-flex justify-content-center align-items-center flex-wrap">
                <div className="the-progress">
                  <h5 style={{ color:'#66EDDB' }}>%50</h5>
                  <span style={{ height:"50%" }}></span>
                  <h6 style={{ color:'#66EDDB' }}>~10</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color:'#66EDDB' }}>%50</h5>
                  <span style={{ height:"50%" }}></span>
                  <h6 style={{ color:'#66EDDB' }}>~20</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color:'#66EDDB' }}>%30</h5>
                  <span style={{ height:"30%" }}></span>
                  <h6 style={{ color:'#66EDDB' }}>~30</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color:'#66EDDB' }}>%20</h5>
                  <span style={{ height:"20%" }}></span>
                  <h6 style={{ color:'#66EDDB' }}>~40</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color:'#66EDDB' }}>%60</h5>
                  <span style={{ height:"60%" }}></span>
                  <h6 style={{ color:'#66EDDB' }}>~50</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color:'#66EDDB' }}>%70</h5>
                  <span style={{ height:"70%" }}></span>
                  <h6 style={{ color:'#66EDDB' }}>~60</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color:'#66EDDB' }}>%20</h5>
                  <span style={{ height:"20%" }}></span>
                  <h6 style={{ color:'#66EDDB' }}>+60</h6>
                </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Dashboard;