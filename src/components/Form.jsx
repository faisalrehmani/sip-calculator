import React, { useContext } from 'react'
import ResultContext from '../providers/ResultContext'

const Form = () => {

const {amount , setAmount , interest , setInterest , years , setYears , calculateSip } 
= useContext(ResultContext);



const handleSubmit = (e) => {
  e.preventDefault();
  calculateSip();

  setAmount("");
  setInterest("");
  setYears("");

}


  return (
    <>
      
     <div className="card p-3 rounded-0 border-secondary">
      <form className='my-2'onSubmit={handleSubmit}>
        <label className='mx-2' htmlFor="">
            Amount Deposit :
        </label>
        <input type="number"
         className='form-control my-2 rounded-0 border-secondary' 
          placeholder='Enter Amount'  
          onChange={(e) => setAmount(e.target.value)}
          value={amount}  
          required
         />

       <label className='mx-2' htmlFor="">
            Interest Rate (%) :
        </label>
        <input type="number"
         className='form-control my-2 rounded-0 border-secondary' 
          placeholder='Enter Interest Rate'  
          onChange={(e) => setInterest(e.target.value)}
          value={interest} 
          required   
         />

       <label className='mx-2' htmlFor="">
       Time Period :
        </label>
        <input type="number"
         className='form-control my-2 rounded-0 border-secondary' 
          placeholder='Enter Duration (years)'      
          onChange={(e) => setYears(e.target.value)}
        value={years}
        required
        />

        <button className='btn btn-success w-100 my-2'>Calculate</button>

      </form>
     </div>

    </>
  )
}

export default Form
