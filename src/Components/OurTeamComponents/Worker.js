import React from 'react'

function Worker({worker}) {
    return (
      <div className="worker">
        <div className="worker-image">
          <img src={worker.image} alt="" />
        </div>
        <div className="worker-details">
          <div className="worker-name">{worker.name}</div>
          <div className="worker-position">{worker.position}</div>
          <div className="worker-contact">
           { worker.twitter && <a href={worker.twitter} target="_blank" rel="noopener noreferrer"><i className="ri-twitter-line"></i></a> }
            { worker.ig && <a href={worker.ig} target="_blank" rel="noopener noreferrer"><i className="ri-instagram-line"></i></a> }
           { worker.in && <a href={worker.in} target="_blank" rel="noopener noreferrer"><i className="ri-linkedin-line"></i></a> }
          </div>
        </div>
      </div>
    );
}

export default Worker
