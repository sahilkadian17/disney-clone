import React , {useEffect} from 'react'
import {selectUserName,selectUserPhoto,
        setUserLogin,setSignOut} from '../features/users/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import {auth,provider} from '../firebase'
import {useNavigate,Link} from 'react-router-dom'

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(()=>{
    auth.onAuthStateChanged(async (user)=>{
        if(user){
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            navigate("/home");
        }
    })
  },[userName])
  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOut());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div className='NavBar'>
        <img onClick={handleAuth} src="/images/logo.svg" alt="" className='NavBar__Logo' />
        {
            !userName ? ( 
            <div onClick={handleAuth} className="Login__Button">Login</div>):(
            <>
                <div className="NavMenu">
                <Link to="/home"className='NavMenu__Icon'>
                    <img src="/images/home-icon.svg" alt="" className='NavMenu__Logo' />
                    <span className='NavMenu__Title'>HOME</span>
                </Link>
                <Link to="/home"className='NavMenu__Icon'>
                    <img src="/images/search-icon.svg" alt="" className='NavMenu__Logo' />
                    <span className='NavMenu__Title'>SEARCH</span>
                </Link>
                <Link to="/home"className='NavMenu__Icon'>
                    <img src="/images/watchlist-icon.svg" alt="" className='NavMenu__Logo' />
                    <span className='NavMenu__Title'>WATCHLIST</span>
                </Link>
                <Link to="/home"className='NavMenu__Icon'>
                    <img src="/images/original-icon.svg" alt="" className='NavMenu__Logo' />
                    <span className='NavMenu__Title'>ORIGINALS</span>
                </Link>
                <Link to="/home"className='NavMenu__Icon'>
                    <img src="/images/movie-icon.svg" alt="" className='NavMenu__Logo' />
                    <span className='NavMenu__Title'>MOVIES</span>
                </Link>
                <Link to="/home"className='NavMenu__Icon'>
                    <img src="/images/series-icon.svg" alt="" className='NavMenu__Logo' />
                    <span className='NavMenu__Title'>SERIES</span>
                </Link>
                </div>
                <div>
                    <img src={userPhoto} alt="Profile"  className="User__Img" />
                    <span className="User__Signout" onClick={handleAuth}>Sign Out</span>
                </div>
            </>
        )}
    </div>
  )
}

export default Header