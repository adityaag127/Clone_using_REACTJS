import React from 'react'
import Header from "./Header";
import "./Home.css";
import Product from './Product';
function Home() {
  return (
    <>
      <Header />
      <div className='home'>
        <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          />
          <div className="home_row">
            <Product
              id="123"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses [Paperback] Ries, Eric Paperback – 6 October 2011"
              price={20}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
            />

            <Product
              id="123"
              title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)"
              price={20}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
            />
        </div>
        <div className="home_row">
          <Product
            id="123"
            title="boAt Flash Edition Smart Watch with Activity Tracker, Multiple Sports Modes, 1.3 Screen, 170+ Watch Faces, Sleep Monitor, Gesture, Camera & Music Control, IP68 & 7 Days Battery Life(Lightning Black)"
            price={20}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />

          <Product
            id="123"
            title="boAt Airdopes 141 Bluetooth Truly Wireless in Ear Earbuds with 42H Playtime, Beast Mode(Low Latency Upto 80ms) for Gaming, IPX4 Water Resistance, ENx Tech, IWP, Smooth Touch Controls(Cyan Cider)"
            price={20}
            rating={5}
            image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img21/CEPC/Electronics/Revamp/SBC/xcm_banners_02_sbc_v1_564x564_in-en._CB657839327_.jpg"
          />

          <Product
            id="123"
            title="Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens"
            price={20}
            rating={5}
            image="https://nypost.com/wp-content/uploads/sites/2/2022/02/tech.png"
          />
        </div>
        <div className="home_row">
            <Product
              id="123"
              title="Redmi 108 cm (43 inches) 4K Ultra HD Android Smart LED TV X43 | L43R7-7AIN (Black)"
              price={20}
              rating={5}
              image="https://m.media-amazon.com/images/S/aplus-media/sota/1f74ad80-89d7-4d63-98c9-586a00d25302.__CR0,0,1464,600_PT0_SX1464_V1___.png"
            />
        </div>
      </div>
    </>
  )
}

export default Home
