import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [posts, setPosts] = useState([]);
  async function GetZips () {
    let input = document.getElementById("city").value.toUpperCase();
      await axios
        .get(`http://ctp-zip-api.herokuapp.com/city/${input}`)
        .then(response => {
          setPosts(response.data)
          console.log(response.data);
        })

    
  }
  return (
    <div className='app text-center'>
      <h1 className='bg-dark text-light p-5'> City zip code search</h1>
      <div className='align-items-center'>
      <label className='form-label'><b>Enter a city:</b></label>
      <div className='justify-content-center'>
        
          <input type= "text" id="city" className='text-center'/>
          <button type = "button" onClick={GetZips} className='btn btn-primary'>search</button>
        
      </div>

     
      </div>
      {posts.map(e =>{
     //   let codeid = document.querySelector('#codes')
     //   for(let i = 0;i < e.length;i++){
      //    let lis = document.createElement('li')
      //    lis.setAttribute('id', 'codes')
       //   console.log(e)
       //   lis.appendChild(codeid)
      //  }
        return(
          <div>
            <ul>
              <li className= ''id = 'codes'>{e}</li>
            </ul>
          </div>
        )
      })}
    </div>
    
  );
}

export default App;
