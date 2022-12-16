import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import BarcelonaWeather from './Components/BarcelonaWeather';
import VeniceWeather from './Components/VeniceWeather';
import BerlinWeather from './BerlinWeather';
import LondonWeather from './Components/LondonWeather';
import ParisWeather from './Components/ParisWeather';
import AmsterdamWeather from './Components/AmsterdamWeather';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
  return (
    <div >
      <Head>
        <title>Cities-Weather-Checker</title>
        <meta name="European cities and their weather forecasts" content="Images of cities and their respective weather forecasts" />
        
      </Head>

      <main>
        <section className="bg-white px-10 md:px-20 lg:px-40">

        <div class="grid grid-cols-4 gap-4 py-3 ">


          <div class="col-start-1 col-end-5 ...  text-center shadow-lg rounded-xl h-96 bg-[url('https://cdn.wallpapersafari.com/50/91/QMOVWb.jpg')] w-full md:w-full lg:w-full  bg-cover  bg-center "> 
              
            <div class=" bg-gray-900 bg-opacity-50 h-96 w-full md:w-full lg:w-full bg-cover  bg-center shadow-lg rounded-xl">
              <h1 className="text-white lg:text-3xl md:text-2xl text-xl font-light content-center pt-20 opacity-100 font-sans">FRONT-END-DEV</h1>

              <h2 className="text-white  lg:text-6xl md:text-4xl text-2xl  font-sans  ">VALTECH</h2>
 
           </div>
          </div>
 
          <div class="lg:col-start-1 lg:col-end-3 ... md:col-start-1 md:col-end-5 ... col-start-1 col-end-5 ...  text-center shadow-lg rounded-xl bg-[url('https://wallsdesk.com/wp-content/uploads/2017/01/Venice-Wallpapers-and-Backgrounds.jpg')] h-96 w-full bg-cover bg-brightness-75 opacity-75 bg-center hover:scale-105 hover:opacity-50 ">

            <div class=" bg-gray-900 bg-opacity-50 h-96 w-full md:w-full lg:w-full bg-cover  bg-center shadow-lg rounded-xl">
          
            <h1 className="text-white md:text-2xl text-xl font-light font-sans content-center pt-20 brightness-150">ITALY</h1>

            <h2 className="text-white md:text-4xl text-2xl  font-sans ">VENICE</h2>

            <div className="py-5">
          <VeniceWeather/>
          </div>

            </div>
          </div>


        <div class="lg:col-start-3 lg:col-end-4 ... md:col-start-1 md:col-end-3 ... col-start-1 col-end-5 ...  text-center shadow-lg rounded-xl  bg-[url('https://blog.obilet.com/wp-content/uploads/2018/04/Berlin.jpg')] h-96 w-full bg-cover opacity-75 hover:scale-105 hover:opacity-50 bg-center"> 

          <div class=" bg-gray-900 bg-opacity-50 h-96 w-full md:w-full lg:w-full bg-cover  bg-center shadow-lg rounded-xl">
               
                <h1 className="text-white  md:text-2xl text-xl font-light font-sans content-center pt-20">GERMANY</h1>

                <h2 className="text-white  md:text-4xl text-2xl  font-sans  ">BERLIN</h2>

                <div className="py-5">
              <BerlinWeather/>
                 </div>
        
          </div>
        </div>

        <div class="lg:col-start-4 lg:col-end-5 ... md:col-start-3 md:col-end-5 ... col-start-1 col-end-5 ...   text-center shadow-lg  rounded-xl  bg-[url('https://i1.wp.com/m3globalresearch.blog/wp-content/uploads/2019/12/barcelona.jpg?ssl=1')] h-96 w-full bg-cover opacity-75 hover:scale-105 hover:opacity-50 bg-center"> 

          <div class=" bg-gray-900 bg-opacity-50 h-96 w-full md:w-full lg:w-full bg-cover  bg-center shadow-lg rounded-xl">
          
          <h1 className="text-white md:text-2xl text-xl font-light  font-sans content-center pt-20">SPAIN</h1>

          <h2 className="text-white  md:text-4xl text-2xl  font-sans">BARCELONA</h2>
          <div className="py-5">
          <BarcelonaWeather/>
          </div>
          </div>
        </div>


      <div class="lg:col-start-1 lg:col-end-2 ... md:col-start-1 md:col-end-3 ... col-start-1 col-end-5 ...  text-center shadow-lg rounded-xl space-x-3  bg-[url('https://i.pinimg.com/originals/4d/ef/7d/4def7d7085b470a5757141d8f6e2a58f.jpg')] h-96 w-full bg-cover opacity-75 hover:scale-105 hover:opacity-50 bg-center">
      
        <div class=" bg-gray-900 bg-opacity-50 h-96 w-full md:w-full lg:w-full bg-cover  bg-center shadow-lg rounded-xl">

          <h1 className="text-white  md:text-2xl text-xl font-light  font-sans content-center pt-20">FRANCE</h1>

          <h2 className="text-white  md:text-4xl text-2xl font-sans  ">PARIS</h2>

          <div className="py-5">
              <ParisWeather/>
                 </div>

        </div>
  
      </div>




      <div class="lg:col-start-2 lg:col-end-3 ... md:col-start-3 md:col-end-5 ... col-start-1 col-end-5 ...   text-center shadow-lg rounded-xl space-x-3 bg-[url('https://toyoaviation.ro/wp-content/uploads/2016/06/tour_amsterdam_2.jpg')] h-96 w-full bg-cover opacity-75 hover:scale-105 hover:opacity-50 bg-center">
       
      <div class=" bg-gray-900 bg-opacity-50 h-96 w-full md:w-full lg:w-full bg-cover  bg-center shadow-lg rounded-xl">

          <h1 className="text-white md:text-2xl text-xl font-light font-sans content-center pt-20">NETHERLANDS</h1>

          <h2 className="text-white md:text-4xl text-2xl font-sans  ">AMSTERDAM</h2>
        
          <div className="py-5">
              <AmsterdamWeather/>
                 </div>

          </div>
 
      </div>


        <div class="lg:col-start-3 lg:col-end-5 ... md:col-start-1 md:col-end-5 ... col-start-1 col-end-5 ...  text-center shadow-lg rounded-xl  bg-[url('http://media.cntraveler.com/photos/571f9be4afc531496352d2a9/master/pass/GettyImages-174726708.jpg')] h-96 w-full bg-cover opacity-75 hover:scale-105 hover:opacity-50 bg-center">
              
        <div class=" bg-gray-900 bg-opacity-50 h-96 w-full md:w-full lg:w-full bg-cover  bg-center shadow-lg rounded-xl">

            <h1 className="text-white md:text-2xl text-xl font-light font-sans content-center pt-20">ENGLAND</h1>

            <h2 className="text-white md:text-4xl text-2xl font-sans  ">LONDON</h2>

            <div className="py-5">
          <LondonWeather/>
          </div>

        </div>

              
      </div>



          
         
            
          </div>
          <Analytics />
        </section>
      </main>

   
    </div>
  )
}
