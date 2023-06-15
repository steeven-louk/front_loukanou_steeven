
import './App.css'
import { Header } from './components/Header'
import option from './assets/option.png';
import promo from './assets/promo.jpg';
import Search from './components/Search'

function App() {

  return (
    <>
      <Header/>
      <Search/>
      <main>
        <section className="option py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1>All your travel options in one place</h1>
                <p>
                  More than 1,000 trusted travel partners across trains, buses, flights, ferries, and airport transfers, so that you can focus on the journey.
                </p>
              </div>
              <div className="col-md-6">
                  <img src={option} alt="option" width="100%" />
              </div>
            </div>
          </div>
        </section>

        <section className="promo py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                  <img src={promo} alt="promo" width="100%" />
              </div>
              <div className="col-md-6">
                <h1>The go-to app for travelers</h1>
                <p>
                  Download the free Omio app for expertise you can count on, and travel with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
