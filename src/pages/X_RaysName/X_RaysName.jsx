import './X_RaysName.css';
import ImgXRayes_1 from '../../assets/images/x-ray1.png'
import ImgXRayes_2 from '../../assets/images/x-ray2.png'
import ImgXRayes_3 from '../../assets/images/x-ray3.png'
const X_RaysName = () => {
  return (
    <div className='X_RaysName'>
      <div className="container">
        <div className="heading text-center pt-4">
          <h2>X_Ray Name</h2>
        </div>
        <div className="imagesName mt-4 d-flex justify-content-start align-items-center gap-3 flex-wrap">
          <div className="imageName">
            <img src={ImgXRayes_1} alt="" />
            <h6 className='mt-3 mb-0 text-center'>X_Ray Name</h6>
          </div>
          <div className="imageName">
            <img src={ImgXRayes_2} alt="" />
            <h6 className='mt-3 mb-0 text-center'>X_Ray Name</h6>
          </div>
          <div className="imageName">
            <img src={ImgXRayes_3} alt="" />
            <h6 className='mt-3 mb-0 text-center'>X_Ray Name</h6>
          </div>
          <div className="imageName">
            <img src={ImgXRayes_1} alt="" />
            <h6 className='mt-3 mb-0 text-center'>X_Ray Name</h6>
          </div>
          <div className="imageName">
            <img src={ImgXRayes_2} alt="" />
            <h6 className='mt-3 mb-0 text-center'>X_Ray Name</h6>
          </div>
          <div className="imageName">
            <img src={ImgXRayes_3} alt="" />
            <h6 className='mt-3 mb-0 text-center'>X_Ray Name</h6>
          </div>
          <div className="imageName">
            <img src={ImgXRayes_1} alt="" />
            <h6 className='mt-3 mb-0 text-center'>X_Ray Name</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default X_RaysName;