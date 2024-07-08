import './Dashboard.css'
import vita from '../../assets/images/LOGO.png';
import totalUsers from '../../assets/images/Total Users.png';
import heart from '../../assets/images/Heart.png';
import corona from '../../assets/images/Corona.png';
import stethoscope from '../../assets/images/stethoscope.png';
import org from '../../assets/images/org.png';
import iconuser from '../../assets/images/iconuser.png';
import signout from '../../assets/images/signout.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Dashboard = () => {

  const [AdminData, setAdminData] = useState(null);
  const [StaticData, setStaticData] = useState(null)
  const [testList, setTestList] = useState(null)

  useEffect(() => {

    axios.get("https://vitaapp.azurewebsites.net/analysis/get-profile-data", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(res => {
      setAdminData(res.data)
    })
    // 






    axios.get("https://vitaapp.azurewebsites.net/analysis/tests-list", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("user")}`
      }
    }).then(res => {

      axios.get("https://vitaapp.azurewebsites.net/analysis/static-data", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        setStaticData(res.data.staticData)
      })
      setTestList(res.data)

      axios.get("https://vitaapp.azurewebsites.net/analysis/static-data", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        setStaticData(res.data.staticData)
      })

      let tmp = [];
      testList?.testsList.map(list => {
        console.log((StaticData.topAbnormalTests['01'][list]))

        tmp.push((StaticData.topAbnormalTests['01']))

      })

    }

    )


  }, [])


  function calc(x) {
    let tmp = null
    testList?.testsList.map(list => {
      if (StaticData.topAbnormalTests[x][list] !== undefined) {
        tmp = (StaticData.topAbnormalTests[x][list][0] + '0')
      }
    })

    return tmp
  }


  const [Last, setLast] = useState(null)

  const nav = useNavigate();

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
          <h5 className='m-0'>{AdminData && AdminData.organizationName}</h5>
          <p className='m-0'>@{AdminData && AdminData.username}</p>
        </div>
      </div>
      <div className="container">
        <div className="content d-flex justify-content-start align-items-center flex-wrap">
          <div className="today_counts">
            <div className="title">
              <h5 className='m-0'>Today's Counts</h5>
            </div>

            {
              StaticData ?
                <>
                  <div className="boxes d-flex align-items-center flex-wrap">
                    <div className="box">
                      <img src={totalUsers} alt="" />
                      <h3 className='mt-3'>{StaticData.todayCounts.activeUsers}</h3>
                      <p className='m-0' style={{ fontSize: "13px", color: '#FEB95A' }}>Total Users</p>
                    </div>
                    <div className="box">
                      <img src={corona} alt="" />
                      <h3 className='mt-3'>{StaticData.todayCounts.categories}</h3>
                      <p className='m-0' style={{ fontSize: "13px", color: '#FF5353' }}>Test Categories</p>
                    </div>
                    <div className="box">
                      <img src={heart} alt="" />
                      <h3 className='mt-3'>{StaticData.todayCounts.differentTests}</h3>
                      <p className='m-0' style={{ fontSize: "13px", color: '#66DDCE' }}>Different Tests</p>
                    </div>
                    <div className="box">
                      <img src={stethoscope} alt="" />
                      <h3 className='mt-3'>{StaticData.todayCounts.organizations}</h3>
                      <p className='m-0' style={{ fontSize: "13px", color: '#F2C8ED' }}>Doctors</p>
                    </div>
                    <div className="box">
                      <img src={org} alt="" />
                      <h3 className='mt-3'>{StaticData.todayCounts.organizations}</h3>
                      <p className='m-0' style={{ fontSize: "13px", color: '#20AEF3' }}>Organizations</p>
                    </div>
                  </div>
                </>
                : <>
                  Loading
                </>
            }



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
                <div
                  onClick={() => {

                    localStorage.clear();
                    nav('/login')

                  }}
                  className="box" style={{
                    cursor: 'pointer'
                  }} >
                  <img src={signout} alt="" />
                  <span>Signout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          StaticData ? <>
            <div className="info d-flex justify-content-start align-items-center flex-wrap">
              <div className="ages">
                <div className="title">
                  <h5 className='m-0'>Ages</h5>
                </div>
                <div className="progressAges d-flex justify-content-between align-items-center flex-wrap">
                  <div className="the-progress">
                    <h5>{StaticData.agesList['~10']}%</h5>
                    <span style={{ height: StaticData.agesList['~10'] + "%" }}></span>
                    <h6>~10</h6>
                  </div>
                  <div className="the-progress">
                    <h5>{StaticData.agesList['~20']}%</h5>
                    <span style={{ height: StaticData.agesList['~20'] + "%" }}></span>
                    <h6>~20</h6>
                  </div>
                  <div className="the-progress">
                    <h5>{StaticData.agesList['~30']}%</h5>
                    <span style={{ height: StaticData.agesList['~30'] + "%" }}></span>
                    <h6>~30</h6>
                  </div>
                  <div className="the-progress">
                    <h5>{StaticData.agesList['~40']}%</h5>
                    <span style={{ height: StaticData.agesList['~40'] + "%" }}></span>
                    <h6>~40</h6>
                  </div>
                  <div className="the-progress">
                    <h5>{StaticData.agesList['~50']}%</h5>
                    <span style={{ height: StaticData.agesList['~50'] + "%" }}></span>
                    <h6>~50</h6>
                  </div>
                  <div className="the-progress">
                    <h5>{StaticData.agesList['~60']}%</h5>
                    <span style={{ height: StaticData.agesList['~60'] + "%" }}></span>
                    <h6>~60</h6>
                  </div>
                  <div className="the-progress">
                    <h5>{StaticData.agesList['+60']}%</h5>
                    <span style={{ height: StaticData.agesList['+60'] + "%" }}></span>
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
                        <th scope="col" style={{ textAlign: 'center' }}>%</th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        StaticData.topAbnormalTests.map((item, key) => <tr key={key}>
                          <th scope="row">1</th>
                          <td>{item.name}</td>
                          <td style={{ width: '40%' }}>
                            <div className="the-progress">
                              <span style={{ width: item.value + '%', backgroundColor: '#FCB859' }}></span>
                            </div>
                          </td>
                          <td style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className="numProgress" style={{ backgroundColor: '#fcb8596b', border: "1px solid #FCB859" }}>{item.value}</div>
                          </td>
                        </tr>)
                      }



                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </> : <>Loading</>
        }


        <div className="choose_text text-center">
          <select
            onChange={(e) => {

              console.log(e.target.value);

              axios.get(`https://vitaapp.azurewebsites.net/analysis/selected-test-bars?description=${e.target.value}`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("user")}`
                }
              }).then(res => {
                console.log(res.data)



                setLast(res.data);
              })

            }}
            name="" id="" defaultValue="Choose Test">
            <option value="choose">Choose Test</option>
            {
              testList && testList.testsList.map((list, key) =>
                <option key={key} value={list}>{list}</option>
              )
            }

          </select>
        </div>

        {
          Last && <div className="test_progress d-flex justify-content-center align-items-center flex-wrap">
            <div className="test_gander">
              <div className="title">
                <h5 className='m-0'>Test-Gander</h5>
              </div>
              <div className="progressGander d-flex justify-content-center align-items-center flex-wrap">
                <div className="the-progress">
                  <h5 style={{ color: '#20AEF3' }}>{Last['Test-Gender']['Males']}</h5>
                  <span style={{ height: Last['Test-Gender']['Males'] + "%", background: '#20AEF3' }}></span>
                  <h6 style={{ color: '#20AEF3' }}>Males</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color: '#F2C8ED' }}>{Last['Test-Gender']['Females']}</h5>
                  <span style={{ height: Last['Test-Gender']['Females'] + "%", background: '#F2C8ED' }}></span>
                  <h6 style={{ color: '#F2C8ED' }}>females</h6>
                </div>
              </div>
            </div>
            <div className="test_age">
              <div className="title">
                <h5 className='m-0'>Test-Age</h5>
              </div>
              <div className="progressAges d-flex justify-content-center align-items-center flex-wrap">
                <div className="the-progress">
                  <h5 style={{ color: '#66EDDB' }}>{Last['Test-Age']['~10']}</h5>
                  <span style={{ height: Last['Test-Age']['~10'] + "%" }}></span>
                  <h6 style={{ color: '#66EDDB' }}>~10</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color: '#66EDDB' }}>{Last['Test-Age']['~20']}</h5>
                  <span style={{ height: Last['Test-Age']['~20'] + "%" }}></span>
                  <h6 style={{ color: '#66EDDB' }}>~20</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color: '#66EDDB' }}>{Last['Test-Age']['~30']}</h5>
                  <span style={{ height: Last['Test-Age']['~30'] + "%" }}></span>
                  <h6 style={{ color: '#66EDDB' }}>~30</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color: '#66EDDB' }}>{Last['Test-Age']['~40']}</h5>
                  <span style={{ height: Last['Test-Age']['~40'] + "%" }}></span>
                  <h6 style={{ color: '#66EDDB' }}>~40</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color: '#66EDDB' }}>{Last['Test-Age']['~50']}</h5>
                  <span style={{ height: Last['Test-Age']['~50'] + "%" }}></span>
                  <h6 style={{ color: '#66EDDB' }}>~50</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color: '#66EDDB' }}>{Last['Test-Age']['~60']}</h5>
                  <span style={{ height: Last['Test-Age']['~60'] + "%" }}></span>
                  <h6 style={{ color: '#66EDDB' }}>~60</h6>
                </div>
                <div className="the-progress">
                  <h5 style={{ color: '#66EDDB' }}>{Last['Test-Age']['+20']}</h5>
                  <span style={{ height: Last['Test-Age']['+60'] + "%" }}></span>
                  <h6 style={{ color: '#66EDDB' }}>+60</h6>
                </div>
              </div>
            </div>

          </div>
        }

      </div>
    </section>
  )
}

export default Dashboard;