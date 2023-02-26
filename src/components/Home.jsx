import React, { Fragment } from 'react'

const Home = () => {
  return (
    <div className='home'>
      <div className='side'>
        <h1>RFQ List</h1>
        <div>
          <h3>Sort By :</h3>
          <div>
            <input type="checkbox" name="pulished" id="" />
            <span>
              <label htmlFor="published">Published Date</label>
              <input type="date" name="" id="" />
            </span>
          </div>
          <div>
            <input type="checkbox" name="closing" id="" />
            <span>
              <label htmlFor="closing">Closing Date</label>
              <input type="date" name="" id="" />
            </span>
          </div>
        </div>
        <h3>Preferred Source of Origin</h3>
      </div>
      <div className="main">
        main
      </div>
    </div>
  )
}

export default Home