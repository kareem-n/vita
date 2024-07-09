import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IoIosWarning } from "react-icons/io";
import { Bars } from "react-loader-spinner";
import axios from "axios";

function Search() {
  const { type, currentProfile } = useSelector((state) => state.user);

  console.log(type, currentProfile);

  const [searchParams, setSearchParams] = useState({
    type: type === "patient" ? "doctor" : "patient",
    username: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [isLoad, setIsLoad] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const handleSearch = () => {
    let fold, endpoint, searchParam, searchParam2;
    const baseUrl = "https://vitaapp.azurewebsites.net";
    // const url = `/patients/give_access?doctorName=eslam`;

    console.log(type);

    if (type === "doctor") {
      switch (searchParams.type) {
        case "patient":
          fold = "doctors";
          endpoint = "get_access";
          searchParam = "patientName";
          break;
        default:
          break;
      }
    } else if (type === "patient") {
      switch (searchParams.type) {
        case "doctor":
          fold = "patients";
          endpoint = "give_access";
          searchParam = "doctorName";
          break;
        case "x-rays":
        case "pharmacy":
        case "test_lab":
          fold = "patients";
          endpoint = "give-organization-access";
          searchParam = "organizationName";
          break;

        default:
          break;
      }
    } else if (
      type === "xray_lab" ||
      type === "pharmacy" ||
      type === "test_lab"
    ) {
      switch (searchParams.type) {
        case "patient":
          fold = "Organization";
          endpoint = "request-access";
          searchParam = "patientName";
          searchParam2 = "organizationName";
          break;

        default:
          break;
      }
    }

    setError("");
    if (searchParams.username) {
      setIsSearching(true);
      setIsLoad(true);
      axios
        .get(
          `${baseUrl}/${fold}/${endpoint}?${searchParam}=${searchParams.username}&${searchParam2}=${currentProfile}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("user")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setSuccess(res.data);
          setIsLoad(false);

          setTimeout(() => {
            setIsSearching(false);
            setError(null);
          }, 2000);
        })
        .catch((err) => {
          console.log(err.response.data);
          setError(err.response.data);
          setIsLoad(false);

          setTimeout(() => {
            setIsSearching(false);
            setError(null);
          }, 2000);
        });
    } else {
      setError("type a user name to search");
    }
  };

  return (
    <>
      {error && (
        <div
          style={{
            left: "100px",
          }}
          className="text-danger px-3 py-1 rounded-pill position-absolute top-100"
        >
          {error}
        </div>
      )}
      <select onChange={handleChange} name="type">
        {type !== "patient" && <option value="patient">Patient</option>}
        {type !== "doctor" && <option value="doctor">Doctor</option>}
        <option value="x-rays">x-rays</option>
        <option value="pharmacy">Pharmacy</option>
        <option value="test_lab">test-lab</option>
      </select>
      <div
        className={` ${
          !isSearching && "overflow-hidden"
        } position-relative ms-2`}
      >
        <input
          onChange={handleChange}
          style={{
            outline: "none",
            width: "300px",
          }}
          placeholder="search username..."
          className="py-1 px-2  rounded-2 border-1"
          type="text"
          name="username"
        />
        {isSearching && (
          <div
            style={{
              overflow: "hidden",
            }}
            className="bg-dark text-white position-absolute top-100 start-0 w-100 p-3 rounded-bottom-2 "
          >
            {isLoad && (
              <div className="d-flex justify-content-center overflow-hidden">
                <Bars color="blue" width={50} />
              </div>
            )}
            {error && (
              <div className="text-danger fw-bold overflow-hidden">
                <IoIosWarning className="me-2 h5" />
                {error}
              </div>
            )}
            {success && (
              <div className="text-success fw-bold overflow-hidden">
                <FaCheckDouble className="me-2 h5" />
                {success}
              </div>
            )}
          </div>
        )}
      </div>

      <button
        onClick={handleSearch}
        className="btn ms-2 btn-outline-success btn-sm px-3"
      >
        <FaSearch />
      </button>
    </>
  );
}

export default Search;
