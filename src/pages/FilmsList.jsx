// states
import React, { useState, useEffect } from 'react'
import MainLayout from '../components/MainLayout'
import Film from '../components/Film'
//import StarSearch from '../../components/StarSearch'
// api
import axios from 'axios'

function FilmList() {

  // films
  const [films, setFilms] = useState([])
  // const star search
  // const [searches, setSearches] = useState('')


  // api axios
  const fetchFilms = async() => {
   
    // old url
    // https://www.omdbapi.com/?s=star%20wars&apikey=6cfb8a83
    // https://www.omdbapi.com/?s=${searches}&apikey=6cfb8a83

    // axios
    const responsePosts = await axios.get(`https://www.omdbapi.com/?s=star%20wars&apikey=6cfb8a83`);
    let info = await responsePosts.data 
    console.log("API call",[info])

    if(info.Search){
      setFilms(info.Search)
    }


    // let data;
    // data = await axios.get(`https://www.omdbapi.com/?s=star%20wars&apikey=6cfb8a83`);
    // console.log(data.data)
    // setFilms(data.data.results)


  }
  // useEffect
  useEffect(() => {
    fetchFilms()
  }, []);

  console.log("films deconstructed::",{films})

  const loaded = () => {
    return (
      <MainLayout>
        <hr />
        <h1>FILMS HERE</h1>
        <div id='filmWrapper'>
          {/* testing */}
          <div className='filmBox'>
            {/* <StarSearch searches={searches} setSearches={setSearches}/> */}
            <Film films={films}/>
          </div>

          {/* {films} */}
        <div id="movieDetails">Movie Info Here</div>
        </div>
      </MainLayout>
    )
  }

  // loading screen
  const loading = () => {
    <h1> LOADING ...</h1>
  }
  return films ? loaded() : loading()
}

export default FilmList