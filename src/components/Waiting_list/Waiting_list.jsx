import { WaitingHead } from '../Head/Head'
import './Waiting_list.css'
import { FaCheck } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import user from '../../assets/images/user.jpeg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../loader/Loader';
import { useSelector } from 'react-redux';

const Waiting_list = () => {


  const { type, currentProfile } = useSelector(state => state.user)

  const [load, setLoad] = useState(false);
  const [data, setData] = useState([]);


  const convertArrayBufferToBase64 = (buffer) => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };



  useEffect(() => {
    if (type)

      if (type === "patient") {

        setLoad(true);
        axios.get("https://vita-production.up.railway.app/patients/get-list-of-connections", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`
          }
        }).then(res => {

          const tmp = [];
          res.data.map(item => {
            axios.get(`https://vita-production.up.railway.app/users/auth/get-image?username=${item.username}`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("user")}`
              }, responseType: 'arraybuffer'
            }).then(ress => {
              const base64 = convertArrayBufferToBase64(ress.data);
              const image = `data:image/jpeg;base64,${base64}`;


              item = { ...item, image };
              tmp.push(item);
              // setData(tmp)

            })

          })

          setTimeout(() => {
            setData(tmp);
            setLoad(false);
          }, 2000);

          // setData(tmp);


        })
      }

    if (type === "doctor") {

      setLoad(true);
      axios.get("https://vita-production.up.railway.app/doctors/get-list-of-connections", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {

        const tmp = [];
        res.data.map(item => {
          axios.get(`https://vita-production.up.railway.app/users/auth/get-image?username=${item.username}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }, responseType: 'arraybuffer'
          }).then(ress => {
            const base64 = convertArrayBufferToBase64(ress.data);
            const image = `data:image/jpeg;base64,${base64}`;


            item = { ...item, image };
            tmp.push(item);
            // setData(tmp)

          })

        })

        setTimeout(() => {
          setData(tmp);
          setLoad(false);
        }, 2000);

        // setData(tmp);


      })
    }
    if (type === "xray_lab") {

      setLoad(true);
      axios.get(`https://vita-production.up.railway.app/XRay-Lab/get-list-of-connections?xRayLaboratoryName=${currentProfile}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user")}`
        }
      }).then(res => {
        console.log(0);
        const tmp = [];
        res.data.map(item => {
          axios.get(`https://vita-production.up.railway.app/users/auth/get-image?username=${item.username}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`
            }, responseType: 'arraybuffer'
          }).then(ress => {
            const base64 = convertArrayBufferToBase64(ress.data);
            const image = `data:image/jpeg;base64,${base64}`;


            item = { ...item, image };
            tmp.push(item);
            // setData(tmp)

          })

        })

        setTimeout(() => {
          setData(tmp);
          setLoad(false);
        }, 2000);

        // setData(tmp);


      })
    }



  }, [type])


  return (
    <div className='waiting_list'>
      {
        load && <Loader />
      }
      <WaitingHead />
      {
        data.length > 0 && <div className="waitings d-grid">
          {
            data.map((item, key) => <div key={key} className="wait">
              <div className="image">
                <img src={item.image} alt="" />
              </div>
              <div className="info">
                <h3>{item.fullName}</h3>
                <p>{item.username}</p>
              </div>
              <div className="check">
                {
                  !item.access && <div
                    onClick={() => {

                      let tmp = ''
                      let path = ''
                      if (type === 'patient') {
                        tmp = 'doctorName';
                        path = 'patients';
                        axios.get(`https://vita-production.up.railway.app/${path}/accept_access?${tmp}=${item.username}`, {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem("user")}`
                          }
                        }).then(() => {
                          window.location.reload();
                        })
                      } else if (type === 'doctor') {
                        tmp = 'patient';
                        path = "doctors"
                        axios.get(`https://vita-production.up.railway.app/${path}/accept_access?${tmp}=${item.username}`, {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem("user")}`
                          }
                        }).then(() => {
                          window.location.reload();
                        })
                      }
                      else if (type === 'xray_lab') {
                        axios.get(`https://vita-production.up.railway.app/XRay-Lab/accept-access?xRayLaboratoryName=${currentProfile}&patientName=${item.username}`, {
                          headers: {
                            Authorization: `Bearer ${localStorage.getItem("user")}`
                          }
                        }).then(() => {
                          window.location.reload();
                        })
                      }

                    }}
                    className="done">
                    <FaCheck />
                  </div>
                }

                <div
                  onClick={() => {
                    let tmp = ''
                    let path = ''
                    if (type === 'patient') {
                      tmp = 'doctorName';
                      path = 'patients';
                      axios.get(`https://vita-production.up.railway.app/${path}/remove_access?${tmp}=${item.username}`, {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem("user")}`
                        }
                      }).then(() => {
                        window.location.reload();
                      })
                    } else if (type === 'doctor') {
                      tmp = 'patient';
                      path = "doctors"
                      axios.get(`https://vita-production.up.railway.app/${path}/remove_access?${tmp}=${item.username}`, {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem("user")}`
                        }
                      }).then(() => {
                        window.location.reload();
                      })
                    }
                    else if (type === 'xray_lab') {
                      axios.get(`https://vita-production.up.railway.app/XRay-Lab/remove-access?xRayLaboratoryName=${currentProfile}&patientName=${item.username}`, {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem("user")}`
                        }
                      }).then(() => {
                        window.location.reload();
                      })
                    }



                  }}
                  className="not">
                  <HiXMark />
                </div>


              </div>
            </div>
            )
          }


        </div>
      }

    </div>
  )
}

export default Waiting_list