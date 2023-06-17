import { Header } from "./components/header/Header";

// importation des images
import option from "./assets/option.png";
import promo from "./assets/promo.jpg";
import globe from "./assets/globe.png";
import Search from "./components/search/Search";

import sectionOne from "./assets/section/sectionOne.svg";
import sectionTwo from "./assets/section/sectionTwo.svg";
import sectionThree from "./assets/section/sectionThree.svg";

import BatBat from './assets/Bat_Bat.png'
// importation des images

import SwiperComponent from "./components/swiper/Swiper";

// importation du style
import "./App.scss";

function App() {

  const forTraveler = [
    {
      icon: <i className="fa-solid fa-comment"></i>,
      text: "Support on your journey",
    },
    {
      icon: <i className="fa-solid fa-qrcode"></i>,
      text: "Tickets on your phone",
    },
    {
      icon: <i className="fa-solid fa-heart-pulse"></i>,
      text: "COVID-19 travel info",
    },
    {
      icon: <i className="fa-solid fa-rotate"></i>,
      text: "Updates and reminders",
    },
  ];

  const cheapFlights = [
    {
      image: sectionOne,
      title: "Compare cheap flights and train tickets with buses",
      text: "With Omio, you can compare airline tickets with train tickets and Greyhound bus tickets.",
    },
    {
      image: sectionTwo,
      title: "Find cheap tickets with ease",
      text: "Search and book cheap flight, bus, ferry and train tickets! Discover the best tickets for you with Omio.",
    },
    {
      image: sectionThree,
      title: "Timetables and tickets for all your travels needs",
      text: "It’s never been easier to book a train ticket, bus ticket, airplane ticket or ferry ticket before.",
    },
  ];

  return (
    <>
      <Header />
      <Search />
      <main>
        <section className="section-1 py-3">
          <div className="container">
            <div className="row align-items-center">

              <div className="col-md-6">
                <h1>All your travel options in one place</h1>
                <p>
                  More than 1,000 trusted travel partners across trains, buses,
                  flights, ferries, and airport transfers, so that you can focus
                  on the journey.
                </p>
              </div>

              <div className="col-md-6">
                <img src={option} alt="option" width="100%" />
              </div>

            </div>
          </div>
        </section>

        <section className="section-2 bg-secondaire my-5 py-5 gap-3">
          <div className="container">
            <div className="row">

              <div className="col-md-6">
                <img src={promo} alt="promo" loading="lazy" width="100%" />
              </div>

              <div className="col-md-6 mt-5">
                <h1>The go-to app for travelers</h1>
                <p>
                  Download the free Omio app for expertise you can count on, and
                  travel with confidence.
                </p>

                <div className="row mt-3" style={{ color: "#425486" }}>
                  {forTraveler.map((item, index) => (
                    <div
                      className="col-6 mb-3 d-inline-flex align-items-center gap-3"
                      key={index}>
                      <span className="icon">{item.icon}</span>
                      <span> {item.text}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="section-3 py-3 gap-3">
          <div className="container">
            <div className="row p-2  justify-content-between">

              <div className="col-md-5 mt-4">
                <h2>Fuel your wanderlust</h2>
                <p>
                  Inspiring travel stories from across the world, told through a
                  local lens in our magazine The Window Seat.
                </p>
                <button type="button" className=" w-100">
                  Get inspired
                </button>
              </div>

              <div className="col-md-6 mt-4">
                <SwiperComponent />
              </div>

            </div>
          </div>
        </section>

        <section className="section-4 bg-secondaire  my-5 py-5">
          <div className="container">
            <div className="row">

              {cheapFlights.map((item, index) => (
                <div className="card border-0 col-md-4" key={index}>
                  <img
                    src={item.image}
                    loading="lazy"
                    className="card-img-top img-fluid"
                    width="100%"
                  />
                  <div className="card-body">
                    <h4 className="card-title fw-bold">{item.title}</h4>
                    <p className="card-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="section-5 flex-wrap my-3 py-5  gap-3 align-items-center justify-content-center d-flex">
          <div className="d-inline-flex align-items-center">
            <img src={globe} width={100} alt="globe" />
            <div className="text flex-column">
              <h4 className="fw-bold">You get $11. Your friends get $11.</h4>
              <p>Refer your friends to receive discounts when you travel</p>
            </div>
          </div>

          <button>Get started</button>
        </section>

        <section className="section-6 bg-secondaire py-5 mt-5 gap-3 align-items-center justify-content-center d-flex flex-column text-center">
          <div className="container">
            <span>THE WORLD OF OMIO</span>
            <p>
              Want to receive exclusive discounts and updates straight to your
              inbox?
            </p>
            <span className="divider"></span>

            <form className="justify-content-center align-items-center gap-3 d-flex flex-wrap">
              <div className="form-group position-relative d-inline-flex">
              <i className="fa-solid fa-envelope icon"></i>
                <input
                  type="text"
                  placeholder="Your email"
                  className="my-3 form-control"
                />
              </div>
              <button className="w-100">Sign me up</button>
              <span className="bat-bat d-block d-sm-none"><img src={BatBat} width={50} alt="bat-bat" /></span>
            </form>

          </div>
        </section>
      </main>
    </>
  );
}

export default App;
