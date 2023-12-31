"use client"
import AlamiSection from '@/components/AlamiSection'
import Footer from '@/components/Footer'
import GetImage from '@/components/GetImage'
import GetText from '@/components/GetText'
import Loading from '@/components/Loading'
import Navbar from '@/components/Navbar'
import VideosSlider from '@/components/VideosSlider'
import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

type Props = {}

const Page = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const texth = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(".nav", { y: 0, opacity: 1, duration: 1 });
    setTimeout(() => {
      let tl = gsap.timeline();
      tl.to(".texth", { y: 0, opacity: 1, duration: 1 });
    }, 1000);
  }, [loading]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className=" bg-[#fafaf8] overflow-x-hidden">

        <div className="max-w-[1500px] mx-auto relative z-50">
            <div className="nav px-6 opacity-0 -translate-y-6">
                <Navbar/>
            </div>
        </div>
        <div className="relative nav mt-8 opacity-0 -translate-y-6">
            <GetImage width={1500} height={1000} name="hero" className="h-[50vh]  bg-[#0002]  md:h-[70vh] scale-105 w-full  object-cover mb-8 " section="weddingFilms"  />
            {/* <h1 className="absolute md:text-white md:bottom-10 md:left-10 drop-shadow-2xl font-bold text-3xl md:text-6xl ">Capturing Timeless Beauty & Emotion</h1> */}
        </div>
        <div className='max-w-[1500px] mx-auto flex justify-center'>
            <p className='text-center max-w-3xl mx-auto mt-4 md:py-28 text-sm p-4 md:text-xl'><GetText id="wedding_films_content"/></p>
        </div>
        <div className='py-24'>
            <VideosSlider/>
            <AlamiSection/>
        </div>
        <Footer/>
    </div>
  )
}
export default Page