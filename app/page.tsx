"use client";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HelloSection from "@/components/HelloSection";
import ImageSlider from "@/components/ImageSlider";
import Loading from "@/components/Loading";
import MyWork from "@/components/MyWork";
import Navbar from "@/components/Navbar";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";
import { Separator } from "@/components/ui/separator";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
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
      <>
    <div className="px-6 bg-[#fafaf8] overflow-x-hidden">

      <div className="max-w-[1500px] mx-auto">
        <div className="nav  opacity-0 -translate-y-6">
          <Navbar />
        </div>
      </div>

      <div className="md:my-8 ">
        <ImageSlider />
      </div>

      <div className="texth opacity-0 fontcharm translate-y-12 mb-12 md:my-32 mt-10 md:mt-40">
        <div
          ref={texth}
          className="max-w-[1500px] texth mx-auto flex  flex-col items-center"
        >
          <h1 className="text-2xl md:text-4xl  leading-relaxed font-light text-center max-w-[800px]">
            Natural & Elegance <br />
            Fine Art Wedding & Lifestyle Photographer & Videographer
          </h1>
          <h2 className="text-lg md:text-2xl font-light  text-center my-4">
            Capturing Timeless Beauty & Emotion
          </h2>
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto">
        <div className="nav  opacity-0 -translate-y-6">
          <Separator/>
          <HelloSection />
          <Separator/>
          <MyWork />
          <Separator/>
          <Featured/>
          <Separator/>
        </div>
      </div>

      <div className="max-w-[2000px] mx-auto">
          <Video/>
          <Separator/>
      </div>

      <div className="max-w-[1500px] mx-auto">
        <div className="nav  opacity-0 -translate-y-6">
          <Testimonial/>
        </div>
        <Separator/>
      </div>

    </div>
      <div className="bg-[#fbf5f1] py-4 ">
        <div className="max-w-[1500px] mx-auto">
            <Footer/>
        </div>
      </div>
      </>
  );
}
