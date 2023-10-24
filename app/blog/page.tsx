"use client"
import BlogComp from '@/components/BlogComp';
import Loading from '@/components/Loading';
import Navbar from '@/components/Navbar'
import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import {motion} from "framer-motion"
import Footer from '@/components/Footer';
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
  }, [loading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="px-6 bg-[#fafaf8] overflow-x-hidden ">

      <div className="max-w-[1500px] mx-auto relative z-50">
        <div className="nav  opacity-0 -translate-y-6">
          <Navbar />
        </div>
      </div>


      <div className="fontcharm">
          <div
            ref={texth}
            className="max-w-[1500px] mx-auto "
          >
            <motion.div  initial={{ y: 100 }} animate={{ y: 0 }}  className='grid grid-cols-1 overflow-hidden md:grid-cols-3 gap-4 md:gap-y-8  py-8'>
                <BlogComp/>
                <BlogComp/>
                <BlogComp/>
                <BlogComp/>
                <BlogComp/>
                <BlogComp/>
                <BlogComp/>
            </motion.div>
            <Footer/>
          </div>
      </div>


      </div>
  )
}

export default Page