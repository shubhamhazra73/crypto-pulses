import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
   <>
 <div class="nine">
  <h1>Crypto Pulses <span>LIVE CRYPTO UPDATES</span></h1>
 </div>
<div id='carousel'>
  <Carousel  infiniteLoop autoPlay interval={1000}>
                <div>
                    <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/bitcoin-2643159_1280-sixteen_nine.jpg?size=948:533" />
                    <p className="legend" >Home to hundreds of crypto agents</p>
                </div>
                <div>
                    <img src="https://article-imgs.scribdassets.com/43x5gq36f48vc6sb/images/fileFXS4VLJD.jpg" />
                    <p className="legend">Join Now!</p>
                </div>
                <div>
                    <img src="https://insidetelecom.com/wp-content/uploads/2022/07/Crypto-Trading-Algorithm.jpg" />
                    <p className="legend">We're Live!</p>
                </div>
            </Carousel>
</div>




<div class="nine">
  <h1>About Us <span> LIVE CRYPTO UPDATES </span></h1>
 </div>
<div id='about'>


 
<img id='aboutImage' src="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg" alt="" />
<p id='aboutText'>
Welcome to Crypto Pulses, the all-in-one solution for tracking the performance
 of cryptocurrencies in real-time. Our app allows you to stay up-to-date on the
  latest market trends and monitor the value of your crypto holdings.
<div>
With Crypto Pulses, you can track the prices of hundreds of cryptocurrencies 
in real-time, and view historical price data on interactive charts. Our app also
 allows you to create a portfolio and track the value of your crypto holdings over time.
</div>
Stay informed with our curated news section, where you can find the latest updates
and analysis from leading sources in the crypto industry. Set custom alerts to 
receive notifications when your favorite cryptocurrencies reach certain price points
or trading volumes.
<div>
Our app is designed with a user-friendly interface and easy navigation. Whether
 you're a seasoned crypto investor or new to the space, Crypto Pulses has 
 everything you need to stay informed and make informed decisions.
</div>
Download Crypto Pulses today and join the millions of users who trust us to stay
 on top of the ever-changing cryptocurrency market.
</p>

 </div>


 <div id='reach'>
 <div class="nine">
  <h1>Reach Us <span> LIVE CRYPTO UPDATES </span></h1>
 </div>
 <div id='links'>
  <div className="row">
            <div className='col'>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div className='col'>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
        
            <div className='col'>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div className='col'>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
  </div>

        
        </div>

 </div>



   </>
  )
}

export default Home;
