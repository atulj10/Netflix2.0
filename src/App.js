import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomScreen/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Profile from './components/Profile/Profile';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //loggedin
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      }
      else {
        //logged out
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        {!user ?
          <Login /> :
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
