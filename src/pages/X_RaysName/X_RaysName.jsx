import "./X_RaysName.css";
import ImgXRayes_1 from "../../assets/images/x-ray1.png";
import ImgXRayes_2 from "../../assets/images/x-ray2.png";
import ImgXRayes_3 from "../../assets/images/x-ray3.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Bars } from "react-loader-spinner";
import { string } from "joi";
import { FaCompass } from "react-icons/fa";

const X_RaysName = () => {
  const { type, accessP } = useSelector((state) => state.user);

  const { id, name } = useParams();

  const convertArrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const [img, setImg] = useState(null);

  const nav = useNavigate();

  useEffect(() => {
    if (type === "doctor" && accessP === false) {
      nav("/noPatient");
    }

    if (type === "patient") {
      axios
        .get(
          `https://vitaapp.azurewebsites.net/patients/get-XRay-picture?ID=${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
            responseType: "arraybuffer",
          }
        )
        .then((res) => {
          console.log(res.data);
          const img = convertArrayBufferToBase64(res.data);
          setImg(`data:image/jpeg;base64,${img}`);
        });
    } else if (type === "doctor") {
      axios
        .get(
          `https://vitaapp.azurewebsites.net/doctors/get-XRay-picture?ID=${id}&patientName=${accessP}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
            responseType: "arraybuffer",
          }
        )
        .then((res) => {
          console.log(res.data);
          const img = convertArrayBufferToBase64(res.data);
          setImg(`data:image/jpeg;base64,${img}`);
        });
    }
  }, []);

  const [Loader, setLoader] = useState(false);
  const [ModelResult, setModelResult] = useState(false);

  return (
    <div className="X_RaysName">
      <div className="container">
        <div className="heading text-center pt-4">
          <h2>{name}</h2>
        </div>
        <div className="imagesName mt-4 d-flex justify-content-start align-items-center gap-3 flex-wrap">
          <div className="imageName">
            {(name === "bones" || name === "Chest-Lungs") && (
              <div
                onClick={() => {
                  setLoader(true);
                  let tmp = name.toLowerCase();
                  // name = name.toLowerCase();
                  axios
                    .get(
                      `https://vitaapp.azurewebsites.net/users/auth/predict?category=${tmp}&ID=${id}`,
                      {
                        headers: {
                          Authorization: ` Bearer ${localStorage.getItem(
                            "user"
                          )}`,
                        },
                      }
                    )
                    .then((res) => {
                      console.log(res.data);
                      setModelResult(res.data);
                      setLoader(false);
                    });
                }}
                style={{
                  cursor: "pointer",
                  backgroundColor: "var(--main-color)",
                  padding: "10px",
                  position: "absolute",
                  transform: "translate(-50% ,-50%)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent:"center",
                  alignItems:"center"
                }}
              >
                <FaCompass style={{ color:"#fff" }}/>
              </div>
            )}
            <img src={img} alt="" />
            <h6 className="mt-3 mb-0 text-center">{name}</h6>

            {console.log(ModelResult?.predicted_class?.toLowerCase())}
            <h6
              style={{
                backgroundColor:
                  ModelResult?.predicted_class?.toLowerCase() === "normal" ||
                  ModelResult?.predicted_class?.toLowerCase() ===
                    "not fractured"
                    ? "green"
                    : "red",
                padding:
                  ModelResult?.predicted_class?.toLowerCase() === "normal" ||
                  ModelResult?.predicted_class?.toLowerCase() ===
                    "not fractured"
                    ? "20px"
                    : "0",
              }}
              className="mt-3 mb-0 text-center text-white"
            >
              {ModelResult.predicted_class}
            </h6>
          </div>
        </div>
      </div>

      {Loader && (
        <div className=" position-absolute w-100 h-100 top-0 bottom-0 d-flex justify-content-center align-items-center">
          <Bars />
        </div>
      )}
    </div>
  );
};

export default X_RaysName;
