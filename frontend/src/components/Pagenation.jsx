import { Button } from '@mui/material';
import React from 'react';

function Pagenation({curr,total,handlepageChange}) {
    var arr= new Array(total).fill(1)
    return (
        <div>
          {arr.map((el,i)=>{
              return (<Button onClick={()=>{handlepageChange(i+1)}} variant={i+1==curr?'contained':'outlined'}>{i+1}</Button>)
            //   if(curr<4&&i<5){
            // }
            // else if(curr+2>=total&&i+1>=total-5){
            //     return (<Button onClick={()=>{handlepageChange(i+1)}} variant={i+1==curr?'contained':'outlined'}>{i+1}</Button>)
            // }
            // else if(curr>=4){
            //     if(i+1==curr||i+1==curr-1||i+1==curr-2||i+1==+curr+1||i+1==+curr+2){
            //     return (<Button onClick={()=>{handlepageChange(i+1)}} variant={i+1==curr?'contained':'outlined'}>{i+1}</Button>)
            //     }
            // }
          })}
        </div>
    );
}

export default Pagenation;