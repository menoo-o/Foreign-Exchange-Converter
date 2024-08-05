import './App.css'

function App() {


  return (
    <>
      <div className='container'>
        <div className="hero">    
          <img src='/bgimg.jpg' alt='bg img' className='hero-image' />
        <div className='heading'>
          <h1>CryptoCurrency Converter</h1>
        </div>

        <div className='glassmorph'>
          <div className="exchange-container">

             {/* upper half */}
            <div className= 'upper-upperhalf'>
              <p className='from'>From</p>
              <p className='to'>Amount</p>
            </div>
           
            <div className='middle-upperhalf'>
              <input className='currency' type='text' placeholder='Currency'></input>
              <input className='amount' type='Number' placeholder='Enter Amout'></input>
            </div>

            {/* swap */}
            <div className='swap'>
              <img src='../public/swap.png' alt='img' /> 
            </div>

            {/* lower half */}
            <div className= 'upper-upperhalf'>
              <p className='from'>To</p>
              <p className='to'>Amount</p>
            </div>

            <div className='middle-upperhalf'>
              <input className='exchanged-currency' type='text' placeholder='Exchanged Currency'></input>
              <input className='exchanged-amount' type='Number' placeholder='Exchanged Amount'></input>
            </div>

            <div className='info'>
              <div className= 'rate'>
                <h3> Exchange Rate:</h3>
                <h4>1$ = 290 PKR</h4>
              </div>
            </div>
            
          </div>
        
        </div>
      </div>
    </div>
      


    </>
  )
}

export default App
