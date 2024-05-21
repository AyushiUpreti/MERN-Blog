import React from 'react'
import loader from '../Components/loader.gif';

const Loader = () => {
  return (
    <div className='loader'>
        <div className="loader_image">
            <img src={loader} alt="" />
        </div>
    </div>
  )
}

export default Loader
