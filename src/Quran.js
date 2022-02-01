import React, { useState } from "react";
import axios from "axios";
function Islam(){
    const url= "http://api.alquran.cloud/v1/quran/quran-uthmani"
    const [islam, setIslam] = useState([])
    const getIslam = () =>{
        axios.get(url)
        .then(response =>{
            console.log(response)
            setIslam(response.data.data.surahs)   
})
    }
    // console.log(islam)
    return(
      <div>
          <button onClick={()=> getIslam()}> Click here to display surahs </button>
           {islam.map((data, i) => <p onClick = {data.ayahs} key ={ i } 
           className = "number"> {data.englishName } </p>)}

               {/* <button onClick={()=> getIslam()}> Click here to display surahs </button>
          {islam.map((data, i) => <details key ={ i } className = "surahs">  <summary >
               <p> {data.ayats}</p> {data.englishName } </summary></details>)} */}          
          {/* {islam.map((data, i) => <p onClick = {data.ayahs} key ={ i } className = "surahs"> {data.englishName } </p>)} */}
          
          
      </div>
    );
}

export default Islam

// useEffect(() => {
//     axios.get(url)
// .then(response =>{
//     setIslam(response.data)
//     console.log(islam)
// })
// }, [url])