import React, {useState,useEffect} from "react";
import "./css/style.css";

function Temp() {
    const [city,setCity] = useState()
    const [search ,setSearch] = useState('hyderabad')

    useEffect( ()=>{
const fetchApi= async () => {
    const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=a0ef8d19bf0c9c80087daba8ad9426d2`
    const response = await fetch(url) ;
    const resJson = await response.json();
    // console.log(resJson);

    setCity(resJson.main)
}

        fetchApi();
    },[search]
    );
  return (
   <>
    
      <div className="box">
        <div className="inputData">
          <input type="search" className="inputField" value={search} onChange={(event)=>{
            setSearch(event.target.value)


          }}/>
      
      </div>

      {!city ? (<p> no data found)</p> ) : ( 
        <div>
        <div className="info">
          <h2 className='location'>
          <i className="fas fa-street-view"></i> {search}
          </h2>
          <h2 className="temp">{city.temp}°cel </h2>
          <h3 className='tempmin_max'> min : {city.temp_min}° cel | max :{city.temp_max}°cel</h3>
      </div>

      <div className="wave-one"></div>
      <div className="wave-two"></div>
      <div className="wave-three"></div>
      </div>
      )
      }
      </div>
      

      </>
  )
 
}

export default Temp;