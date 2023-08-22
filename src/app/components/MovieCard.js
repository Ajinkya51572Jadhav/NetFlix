import Link from 'next/link';
import "@/app/globals.css";

const MovieCard = (curElm) => {
             const {id , type , title , synopsis} = curElm.jawSummary;

  
    return (
       <div className='movie_container btn-1 outer-shadow inner-shadow hover-in-shadow'>
     <img src={curElm.jawSummary.backgroundImage.url} alt={title}  width={250} height={200}/>
     <h3>{title}</h3>
     <p>{`${synopsis.substring(0,100)}...`}</p>
     <Link href={`/movie/${id}`}><button className='btn-1 outer-shadow hover-in-shadow'> Read More</button></Link> 
         </div>
  )
} 

export default MovieCard