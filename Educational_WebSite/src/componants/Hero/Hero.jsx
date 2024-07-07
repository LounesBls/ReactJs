import React, { useRef } from "react";
import HeroImg from '../../assets/hero-img1.png';
import './hero.css'

const Hero = () => {
    const home = useRef();
    return(
        <main id="home" className="container mx-auto px-4">
            <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
                <div className="hero_Content ps-4 text-wrap">
                    <h2 className="text-3xl text-zinc-700 font-bold text-pretty">
                    Anytime Anywhere Learn on your Suitable Scheduler
                    </h2>
                    <p className="opacity-60 text-balance">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda enim tenetur consequuntur iste culpa done.
                    </p>

                    <div className="search my-5">
                        <input type="search" placeholder="Search" className="border-2 border-cyan-700 rounded-full border-opacity-70 ps-3 py-1 me-3 focus:outline-none w-2/6"/>
                        <button type="button" className="capitalize font-semibold text-white bg-[#17bf9e] px-5 py-1.5 align-center rounded-[50px]">search</button>
                    </div>
                </div>

                <div className="hero_Img">
                    <img src={HeroImg} alt={`${HeroImg}`} className="bg-light w-screen lg:w-96"/>
                </div>
            </div>
        </main>
    );
};

export default Hero;