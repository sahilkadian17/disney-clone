import React, { useEffect , useState } from "react";
import {useParams} from 'react-router-dom'
import db from "../firebase";

function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState()
  useEffect(()=>{
    db.collection("movies")
    .doc(id)
    .get()
    .then((doc)=>{
      if(doc.exists){
        setMovie(doc.data());
      }
      else{

      }
    })
  },[id])
console.log(movie);
  return (
    <div className="Detail__Container">
      {movie &&(
        <>
          <div className="Detail__Background">
            <img src={movie.backgroundImg} alt="" className="Detail__Img" />
          </div>
          <div className="Detail__Title">
            <img src={movie.titleImg} alt="" className="Title__Img" />
          </div>
          <div className="Controls">
            <button className="PlayButton">
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </button>
            <button className="TrailerButton">
              <img src="/images/play-icon-white.png" alt="" />
              <span>TRAILER</span>
            </button>
            <button className="AddButton">
              <span>+</span>
            </button>
            <button className="GroupWatchButton">
              <img src="/images/group-icon.png" alt="" />
            </button>
          </div>
          <div className="Detail__Subtitle">
            {movie.subTitle}
          </div>
          <div className="Detail__Description">
            {movie.description}
          </div>
        </>
      )}
    </div>
  );
}

export default Detail;
