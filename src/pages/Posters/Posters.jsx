import "./Posters.css";
import { FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";
import poster from "../../assets/images/adbdecfb6a9c4b872702d8a52799d6e5.jpg";
import axios from "axios";

const Posters = () => {
  // حالة لكل مربع
  const [liked, setLiked] = useState(Array(15).fill(false));

  const handleDoubleClick = (key) => {
    setLiked((prevLiked) => {
      const newLiked = [...prevLiked];
      newLiked[key] = !newLiked[key];
      return newLiked;
    });
  };

  const [Posters, setPosters] = useState(null);

  const convertArrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  useEffect(() => {
    axios
      .get(
        `https://vitaapp.azurewebsites.net/users/auth/get-posters?page=0&size=3`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("user")}}`,
          },
        }
      )
      .then((res) => {
        let tmp = [];

        res.data?.map((item) => {
          if (item.id) {
            // console.log(localStorage.getItem("user") );
            axios
              .get(
                `https://vitaapp.azurewebsites.net/users/auth/get-poster-image?ID=${item.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("user")}`,
                  },
                  responseType: "arraybuffer",

                }
              )
              .then((ress2) => {
                console.log(ress2.data);

                const base64 = convertArrayBufferToBase64(ress2.data);

                // console.log(base64);
                const image = `data:image/jpeg;base64,${base64}`;

                // const ttt = ress2.data
                item = { ...item, image };
                tmp.push(item);
              })
              .catch((err) => {
                item = { ...item };
                tmp.push(item);
              });
          }

          // console.log({ ...res.data, ['organizationDTOList']: tmp });
          // console.log(res.data);
        });

        setTimeout(() => {
          console.log(tmp);
          setPosters(tmp);
        }, 2000);
      });
  }, []);

  return (
    <div className="posters">
      <div className="container">
        <div className="boxes d-flex justify-content-start align-items-center flex-wrap gap-3">
          {Posters &&
            Posters.map((item, key) => (
              <div
                key={key}
                className="box"
                // key={index}
                onDoubleClick={() => handleDoubleClick(key)}
              >
                <img src={item.image} alt="" />
                <p>Vita</p>
                <div className="iconHeart">
                  <FaHeart style={{ color: "red" }} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Posters;
