import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, imageDimensions }) => {
  const { width, height } = imageDimensions;
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img
          id='inputimage'
          alt=''
          src={imageUrl}
          width='500px'
          height='auto'
        />
        {box.map(el => {
          const { bounding_box: boundingBox } = el.region_info;
          console.log(boundingBox);
          return (
            <div
              className='bounding-box'
              style={{
                top: boundingBox.top_row * height,
                right: width - boundingBox.right_col * width,
                bottom: height - boundingBox.bottom_row * height,
                left: boundingBox.left_col * width,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
