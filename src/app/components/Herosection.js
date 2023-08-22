import React, { Fragment } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import "@/app/globals.css";

const Herosection = ({title ,videoURL}) => {
  return (
    <Fragment>
     <div className='herosection'>  
   
     <div className='herosection_container'>
    <h1>{title}</h1>
    <p>
    From award-winning deams to blockbuster action movies , we&apos;ve got you covered . Browser out 
    selection of th the latest and greatest movies,and find your new favorite today . 
    </p>
          <Link href={"/movie"}>
     <button className='btn-1 outer-shadow hover-in-shadow'>Explore Movies</button>
     </Link>

      </div> 
    
      
      <div className='herosection_video'> 
            <video  controls  src={videoURL} type='video/mp4'/>
      </div> 

     <div className="custom-shape-divider-bottom-1692503127">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className='shap-fill'></path>
            </svg>  
        </div>
      
        </div>
      </Fragment>
  )
}

export default Herosection;