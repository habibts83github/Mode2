import React, { useState } from "react";
import axios from "axios";
function Hadith(){
    const url= "https://ahadith-api.herokuapp.com/api/books/en"
    const [hadiths, setHadiths] = useState([])
    const getHadiths = () =>{
        axios.get(url)
        .then(response =>{
            console.log(response)
            setHadiths(response.data.Books)   
})
    }
    console.log(hadiths)
    return(
      <div>
          <button onClick={()=> getHadiths()}> Click here to display Hadiths </button>
           {hadiths.map((data, i) => <p onClick = {data.ayahs} key ={ i } 
           className = "Book_ID"> {data.Book_Name } </p>)}
          
      </div>
    );
}

export default Hadith
