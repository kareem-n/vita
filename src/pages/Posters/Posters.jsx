import './Posters.css'
import { CiHeart } from "react-icons/ci";
import { useState } from 'react';
import poster from '../../assets/images/adbdecfb6a9c4b872702d8a52799d6e5.jpg'

const Posters = () => {
  // حالة لكل مربع
  const [liked, setLiked] = useState(Array(6).fill(false));

  const handleDoubleClick = (index) => {
    setLiked(prevLiked => {
      const newLiked = [...prevLiked];
      newLiked[index] = !newLiked[index];
      return newLiked;
    });
  };

  return (
    <div className='posters'>
      <div className="container">
        <div className="boxes d-flex justify-content-start align-items-center flex-wrap gap-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div 
              className="box" 
              key={index} 
              onDoubleClick={() => handleDoubleClick(index)}
            >
              <img src={poster} alt="" />
              <p>Vita</p>
              <div className="iconHeart">
                <CiHeart style={{ color: liked[index] ? 'red' : 'black' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Posters;
