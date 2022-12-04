const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
        return (
          <div className="col-sm-3">
            <h2>H-Thai-ML</h2>
            <p className="text-align">
              Thai, Pan-Asian
            </p>
            <img src= '/images/thai-food.jpg' alt= 'H-Thai-ML' />
            <p className="text-align">
              Located in Seattle, WA
            </p>

                <h2>Coding Cat Cafe</h2>
            <p className= 'text-align'>
                Coffee, Bakery
            </p>
            <img src='/images/coffee.jpg' alt='Coding Cat Cafe'/>
            <p className='text-align'>
                Located in Phoenix, AZ
            </p>
          </div>
  
        )
      })
      
    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className='row'>
                {placesFormatted}
            </div>
              
          </main>
      </Def>
  )
  }
  
  

module.exports = index
