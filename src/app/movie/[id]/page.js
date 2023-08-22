
const page = async({params}) => {
      const id = params.id;
  console.log(id);

 
  const  url =`https://netflix54.p.rapidapi.com/title/details/?id=${id}&lang=en`;
            

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e26dd062d2msheda21e15bbae588p172211jsn2830ebfd5e9f',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  
  try {
     console.log(url);
    const response = await fetch(url, options);
    const result = await response.json();
    var main_data = result[0].details; 
  
    console.log(result);
  } catch (error) {
    console.error(error);
  }
  
  return (
    <div>
    <h2 className="heading_card">netFlix \ <span>{main_data.type}</span></h2>
    <div  className="movie_card">
      <img src={main_data.backgroundImage.url} alt={main_data.title}  width={600} height={300}/>
       <h2>{main_data.title}</h2>
     <p>{main_data.synopsis}</p>
     </div>
        </div>
    
  )
}

export default page