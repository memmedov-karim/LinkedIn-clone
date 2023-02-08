import Header from './components/header/Header';
import Lefsection from './components/leftside/Lefsection';
import Midlesection from './components/middleside/Midlesection';
import Rightside from './components/rightside/Rightside';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [IsOpenmeInfo,setIsOpenMeInfo] = useState(false);
  const openMeInfo = () => {
    console.log("ok")
    setIsOpenMeInfo(!IsOpenmeInfo);
  }
  const closeMeInfo = () => {
    setIsOpenMeInfo(false)
  }
  return (
    <div className="App">
      <Header IsOpenmeInfo = {IsOpenmeInfo} setIsOpenMeInfo={setIsOpenMeInfo} openMeInfo={openMeInfo} />
      <div onClick={closeMeInfo} className='sections'>
        <Lefsection />
        <Midlesection />
        <Rightside />
      </div>
    </div>
  );
}

export default App;
