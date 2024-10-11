import React, { useContext, useEffect, useState } from 'react'
import ResultContext from '../providers/ResultContext'


const Dashboard = () => {

const {futureValue} = useContext(ResultContext);

const [visibleFutureValue , setVisibleFutureValue] = useState(futureValue);


useEffect(()=>{
  setVisibleFutureValue(futureValue);

  const timer = setTimeout(()=> {
    setVisibleFutureValue("");
  }, 10000);

  return () =>
    clearTimeout(timer)

}, [futureValue]);


if(!futureValue ||  futureValue.length === 0) {
  return  (
    <div className="card p-3 my-3 border-secondary rounded-0 text-center">
        {/* <h2 className='text-center'>Result</h2> */}
        <h2 className='text-secondary'>Future Value : </h2>
        <h1>{futureValue}</h1> 
        </div>
  )
}


  return (
    <>
           
        <div className="card p-3 my-3 border-secondary rounded-0 text-center">
        {/* <h2 className='text-center'>Result</h2> */}
        <h2 className='text-secondary'>Future Value : </h2>
        <h1>₹ {visibleFutureValue}</h1> 
        </div> 

    </>
  )
}

export default Dashboard


