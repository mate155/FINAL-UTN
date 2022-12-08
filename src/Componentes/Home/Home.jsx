import React from 'react'
import CarouselProductos from '../CarouselProductos/CarouselProductos';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar'
import './Home.css';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className='titulo'>
        <h2>
            Escabio 24/7
        </h2>
            <CarouselProductos/>
        </div>
        <Footer/>
    </div>
  );
}
