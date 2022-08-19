import React, { useState,useEffect } from 'react';
import './App.css';

function App() {
    const [progress, setprogress] = useState(0);

    useEffect(()=>{
        const interval= setInterval(()=>{
          setprogress((oldvalue)=>{
       
            let newValue=oldvalue + 1;
       
            if(newValue>98){
              clearInterval(interval);
            }
       
            return newValue;
       
          })
        },20)
        },[]);

 return (
   <main className='container'>
        <div className="outside-progress-bar">
            <div className='inside-progress-bar'>
                <p className='text'> {progress}%</p>
            </div>
        </div>
   </main>
 );
}

export default App;