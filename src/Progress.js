import React from 'react';
import './progress.css';
 
function Progress(){
 return(
   <main className='container'>
       <div>
            <svg  className='circle'>
                <circle cx="100px" cy="100px" r="90px"  />
            </svg>
        </div>
   </main>
)
}
 
export default Progress