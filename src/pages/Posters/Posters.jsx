import './Posters.css'
import { CiHeart } from "react-icons/ci";
import poster from '../../assets/images/adbdecfb6a9c4b872702d8a52799d6e5.jpg'
const Posters = () => {
  return (
    <div className='posters'>
      <div className="container">
        <div className="boxes d-flex justify-content-start align-items-center flex-wrap gap-3">
          <div className="box">
            <img src={poster} alt="" />
            <p>Vita</p>
            <div className="iconHeart">
              <CiHeart/>
            </div>
          </div>
          <div className="box">
            <img src={poster} alt="" />
            <p>Vita</p>
            <div className="iconHeart">
              <CiHeart/>
            </div>
          </div>
          <div className="box">
            <img src={poster} alt="" />
            <p>Vita</p>
            <div className="iconHeart">
              <CiHeart/>
            </div>
          </div>
          <div className="box">
            <img src={poster} alt="" />
            <p>Vita</p>
            <div className="iconHeart">
              <CiHeart/>
            </div>
          </div>
          <div className="box">
            <img src={poster} alt="" />
            <p>Vita</p>
            <div className="iconHeart">
              <CiHeart/>
            </div>
          </div>
          <div className="box">
            <img src={poster} alt="" />
            <p>Vita</p>
            <div className="iconHeart">
              <CiHeart/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posters