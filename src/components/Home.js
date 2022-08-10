import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/Aug-ART-22/GW/Hero/Tomorrow/Aug_ART_PC_Hero_Shop_Ends_Tomorrow_Unrec._CB629349681_.jpg'
          alt='tt'
        />
        <div className='home__row'>
          <Product
            id='14'
            title='Electronic Accessories'
            img='https://m.media-amazon.com/images/I/71ZHgJWsHtL._SX522_.jpg'
            price={29.99}
            rating={2}
          />
          <Product
            id='15'
            title='LG 7 kg 5 Star Inverter Fully-Automatic Top Loading Washing Machine'
            img='https://m.media-amazon.com/images/I/51xxA+6E+xL._SX522_.jpg'
            price={678.4}
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='16'
            title='It Ends With Us'
            img='https://images-eu.ssl-images-amazon.com/images/I/51qX2RGyhhL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
            price={200.4}
            rating={3}
          />
          <Product
            id='17'
            title='This is a test image for demo'
            img='https://m.media-amazon.com/images/I/61eZGX4CkzL._UY695_.jpg'
            price={100.4}
            rating={5}
          />
          <Product
            id='18'
            title='Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine'
            img='https://images-eu.ssl-images-amazon.com/images/I/41qLZhKF5ZL._SX300_SY300_QL70_FMwebp_.jpg'
            price={41.44}
            rating={4}
          />
        </div>
        <div className='home__row'>
          <Product
            id='19'
            title='Buy a brand new laptop'
            img='https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/843f64aa-8622-48f5-9955-e4774fe7016f.jpg'
            price={106.6}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
