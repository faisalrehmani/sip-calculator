import React from 'react'
import Form from './components/Form'
import Dashboard from './components/Dashboard'



const App = () => {
  return (
    <>
     
      <div className="container-fluid p-5">
        <h2 className='text-center text-dark mb-1'>SIP CALCULATOR</h2>
          <h6 className='text-center mb-3'>Calculate Your SIP Easily</h6>

          <Form />
          <Dashboard />

      </div>

    </>
  )
}

export default App
