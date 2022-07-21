import React, {useEffect} from 'react'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from "../firebase";
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movies/movieSlice';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
      db.collection('movies').onSnapshot((snapshot) => {
          let tempMovies = snapshot.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
          })
          dispatch(setMovies(tempMovies));
      })
  })

  return (
    <div className='Home__Container'>
        <ImgSlider/>
        <Viewers/>
        <Movies/>
    </div>
  )
}

export default Home