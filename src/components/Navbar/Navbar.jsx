import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import imageProfile from "../../assets/images/ImageProfile.png";
import { useEffect, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

import AddProfile from "../../Popus/AddProfile/AddProfile";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProfile, setType } from "../../redux/slices/UserSlice";
import Search from "../search/Search";
import { FaXmark } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const pageTitles = {
    "/Posters": "Posters",
    "/AddPrescription": "Add Prescription",
    "/Prescriptions": "Prescriptions",
    "/Prescriptions_2": "Prescriptions List",
    "/Profile": "Profile",
    "/ViewPrescription/": "View Prescription",
    "/NoPatient": "NoPatient",
    "/waiting_list": "Waiting List",
    "/Charts": "Tests",
    "/QRCode": "QRCode",
    "/UploadTests": "Upload Tests",
    "/UploadXRays": "Upload XRays",
    "/UploadPost": "Upload Post",
    "/X_Rays": "X_Rays",
    "/userInfo": "User Info",
    "/Admin": "Admin",

    // Add other routes and their corresponding titles here
  };

  const currentPage = pageTitles[location.pathname] || "Page";

  const dispatch = useDispatch();

  const nav = useNavigate();

  const { type, user, userDet, image } = useSelector((state) => state.user);

  const [dropShow, setSropShow] = useState(false);
  const [addProfileShow, setAddProfileShow] = useState(false);

  const [profiles, setProfiles] = useState(null);

  const convertArrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  function getA() {
    axios
      .get(
        "https://vitaapp.azurewebsites.net/users/auth/get-list-of-profiles",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}`,
          },
        }
      )

      .then((res) => {
        // setProfiles(res.data);
        const tmp = [];
        res.data.organizationDTOList?.map((item) => {
          axios
            .get(
              `https://vitaapp.azurewebsites.net/Organization/get-profile-picture?organizationName=${item.organizationName}`,
              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("user")}`,
                },
                responseType: "arraybuffer",
              }
            )
            .then((res) => {
              const base64 = convertArrayBufferToBase64(res.data);
              const image = `data:image/jpeg;base64,${base64}`;

              // console.log( { ...item, image });
              item = { ...item, image };
              tmp.push(item);
            })
            .catch((err) => {
              item = { ...item };
              tmp.push(item);
            });

          // console.log({ ...res.data, ['organizationDTOList']: tmp });
          console.log(res.data);
          setTimeout(() => {
            setProfiles({ ...res.data, ["organizationDTOList"]: tmp });
          }, 2000);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getA();
  }, [user]);

  const [searchPop, setSearchPop] = useState(false);

  return (
    <>
      <nav className="d-flex justify-content-between align-items-center">
        <h2 className="m-0">{currentPage}</h2>
        {/* search com */}
        {searchPop && (
          <div className="d-flex position-relative">
            <Search />
          </div>
        )}
        <div
          style={{
            borderColor:
              localStorage.getItem("userP") === "doctor"
                ? "yellow"
                : localStorage.getItem("userP") === "patient"
                ? "green"
                : "orange",
          }}
          className="account"
        >
          <div className="profile d-flex justify-content-between align-items-center">
            <div
              onClick={() => {
                setSearchPop(!searchPop);
              }}
              className="search"
            >
              {searchPop ? <FaXmark /> : <FaSearch />}
            </div>
            <div className="position-relative">
              <div className="info gap-3 d-flex justify-content-between align-items-center">
                <div className="image">
                  <img
                    src={image && image}
                    className="rounded-circle"
                    width={"50px"}
                    height={"50px"}
                  />
                </div>
                <div className="name_mile">
                  <h4 className="m-0" style={{ fontSize: "13px" }}>
                    {userDet ? userDet.fullName : ""}
                  </h4>
                  <p className="m-0">@{userDet ? userDet.username : ""}</p>
                </div>
                {dropShow && (
                  <div className="profiles position-absolute top-100 mt-2 rounded-4">
                    {profiles && (
                      <div className="">
                        {profiles.doctor && (
                          <div
                            onClick={() => {
                              dispatch(setType("doctor"));
                              localStorage.setItem("userP", "doctor");

                              setSropShow(false);
                              nav("/posters");
                            }}
                            style={{
                              cursor: "pointer",
                            }}
                            className="profile text-warning fw-bold text-nowrap"
                          >
                            <img
                              src={imageProfile}
                              style={{
                                width: "40px",
                                height: "40px",
                                border: "4px solid yellow",
                              }}
                              className="rounded-circle object-fit-cover me-2"
                              alt=""
                            />
                            Doctor
                          </div>
                        )}

                        {profiles.patient && (
                          <div
                            onClick={() => {
                              dispatch(setType("patient"));
                              localStorage.setItem("userP", "patient");

                              setSropShow(false);
                              nav("/posters");
                            }}
                            style={{
                              cursor: "pointer",
                            }}
                            className="profile text-success fw-bold text-nowrap"
                          >
                            <img
                              src={imageProfile}
                              style={{
                                width: "40px",
                                height: "40px",
                                border: "4px solid green",
                              }}
                              className="rounded-circle object-fit-cover me-2"
                              alt=""
                            />
                            Patient
                          </div>
                        )}

                        {profiles.organizationDTOList.length > 0 &&
                          profiles.organizationDTOList.map((item, key) => (
                            <div
                              key={key}
                              onClick={() => {
                                dispatch(setType(item.type));
                                localStorage.setItem("userP", item.type);
                                localStorage.setItem(
                                  "current",
                                  item.organizationName
                                );
                                dispatch(
                                  setCurrentProfile(item.organizationName)
                                );
                                setSropShow(false);
                                nav("/posters");
                              }}
                              style={{
                                cursor: "pointer",
                                color: "orange",
                              }}
                              className="profile fw-bold text-nowrap"
                            >
                              <img
                                src={item.image ? item.image : imageProfile}
                                style={{
                                  width: "40px",
                                  height: "40px",
                                  border: "4px solid orange",
                                }}
                                className="rounded-circle object-fit-cover me-2"
                                alt=""
                              />
                              {item.organizationName}
                            </div>
                          ))}
                      </div>
                    )}
                    <div
                      onClick={() => setAddProfileShow(true)}
                      style={{
                        cursor: "pointer",
                        padding: "0.4rem 1.2rem",
                      }}
                      className="d-flex align-items-center border-top"
                    >
                      <IoMdAddCircle
                        style={{ color: "#000" }}
                        className="me-1"
                      />{" "}
                      <p className="m-0 text-nowrap text-black py-2">
                        add profile
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div onClick={() => setSropShow(!dropShow)} className="arrow">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </nav>

      {addProfileShow && (
        <div className="">
          <AddProfile setAddProfileShow={setAddProfileShow} />
        </div>
      )}
    </>
  );
};

export default Navbar;
