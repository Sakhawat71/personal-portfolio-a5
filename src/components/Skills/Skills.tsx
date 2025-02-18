import React from 'react';
import "./skills.css";
import Image from 'next/image';

import html5 from "@/assets/skills/html.png";
import css3 from "@/assets/skills/css3.png";
import es6 from "@/assets/skills/es6.png";
import reactjs from "@/assets/skills/reactjs.png";
import nextjs from "@/assets/skills/nextjs.png";
import tailwind from "@/assets/skills/tailwind.png";
import bootstrap from "@/assets/skills/bootstrap.png";
import mui from "@/assets/skills/mui.png";
import nodejs from "@/assets/skills/nodejs.png";
import express from "@/assets/skills/expressjs.png";
import mongodb from "@/assets/skills/mongodb.png";
import git from "@/assets/skills/git.png";
import vscode from "@/assets/skills/vs-code.png";
import figma from "@/assets/skills/figma.png";
import vercel from "@/assets/skills/vercel.png";
import firebase from "@/assets/skills/firebase.png";
import netlify from "@/assets/skills/netlify.png";

import scImage from "@/assets/aspirations/sc.png";
import devImg from "@/assets/aspirations/dev.png";
import learnImg from "@/assets/aspirations/learn.png";

import lineImage from '@/assets/ext/line.png'

const Skills = () => {
    return (
        <div className=' gradient-bg h-full my-20 mx-auto w-4/6 font-montserrat'>


            {/* Aspirations */}
            <div className='mt-10 border-black border-[5px] w-72 mx-auto text-center'>
                <h2 className='font-bold text-xl tracking-[6px] p-3 uppercase'>Aspirations</h2>
            </div>


            <Image
                src={lineImage}
                alt='line'
                width={150}
                height={50}
                className='my-20 mx-auto'
            />

            <div className='lg:grid lg:grid-cols-2  text-center my-20 '>

                <div className='flex flex-col md:flex-row items-center'>
                    <Image
                        src={devImg}
                        alt='DEVELOPMENT'
                        width={100}
                        height={100}
                    />
                    <div className='text-center'>
                        <h2 className='font-bold tracking-widest text-xl text-center md:text-start'>DEVELOPMENT</h2>
                        <p className='text-center md:text-start md:pl-5 pt-3'>Aspiring to become a Full Stack Developer, mastering both front-end and back-end technologies.</p>
                    </div>
                </div>



                <div className='flex flex-col md:flex-row items-center mt-10 lg:mt-0'>
                    <Image
                        src={scImage}
                        alt='cyber_security'
                        width={100}
                        height={100}
                    />
                    <div>
                        <h2 className='uppercase font-bold tracking-widest text-xl text-center md:text-start'>cyber security</h2>
                        <p className='text-center md:text-start md:pl-5 pt-3'>Passionate about cybersecurity, eager to explore and learn about protecting digital infrastructures.</p>
                    </div>
                </div>

                <div className=' mt-10 lg:mt-16 col-span-2 text-center flex justify-center'>
                    <div className='flex flex-col md:flex-row items-center lg:w-1/2'>
                        <Image
                            src={learnImg}
                            alt='Learning'
                            width={100}
                            height={100}
                        />
                        <div>
                            <h2 className='uppercase font-bold tracking-widest text-xl text-center md:text-start'>Continuous Learning</h2>
                            <p className='text-center md:text-start md:pl-5 pt-3'>Committed to lifelong learning in technology, politics, and history, constantly expanding my knowledge.</p>
                        </div>
                    </div>
                </div>
            </div>


            <Image
                src={lineImage}
                alt='line'
                width={150}
                height={50}
                className='my-20 mx-auto'
            />


            {/* SKILLS SECTION */}

            <div className=' border-black border-[5px] w-72 mx-auto text-center'>
                <h2 className='font-bold text-xl tracking-[6px] p-3'>SKILLS</h2>
            </div>

            <h1 className='font-bold text-xl tracking-widest mt-20'>Front-End</h1>

            {/* front end section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={html5}
                        alt='html5'
                        width={80}
                        height={80}
                    />
                    <p>HTML5</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={css3}
                        alt='html5'
                        width={80}
                        height={80}
                    />
                    <p>CSS3</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={es6}
                        alt='html5'
                        width={80}
                        height={80}
                    />
                    <p>JS</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={reactjs}
                        alt='reactjs'
                        width={80}
                        height={80}
                    />
                    <p>REACT.JS</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={nextjs}
                        alt='nextjs'
                        width={80}
                        height={80}
                    />
                    <p>NEXT.JS</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={tailwind}
                        alt='tailwind'
                        width={80}
                        height={80}
                    />
                    <p>TAILWIND CSS</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={mui}
                        alt='mui'
                        width={80}
                        height={80}
                    />
                    <p>MATERIAL UI</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={bootstrap}
                        alt='bootstrap'
                        width={80}
                        height={80}
                    />
                    <p>Bootstrap</p>
                </div>



            </div>


            <h1 className='font-bold text-xl tracking-widest mt-20'>Back End</h1>

            {/* back end section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={nodejs}
                        alt='nodejs'
                        width={80}
                        height={80}
                    />
                    <p>NODE.JS</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={express}
                        alt='expressjs'
                        width={150}
                        height={80}
                    />
                    <p>EXPRESS.JS</p>
                </div>
            </div>


            <h1 className='font-bold text-xl tracking-widest mt-20'>Databases</h1>

            {/* Databases section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={mongodb}
                        alt='MongoDB'
                        width={80}
                        height={80}
                    />
                    <p>MongoDB</p>
                </div>


            </div>


            <h1 className='font-bold text-xl tracking-widest mt-20'>Tools</h1>

            {/* Tools section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={git}
                        alt='github'
                        width={80}
                        height={80}
                    />
                    <p>GitHub</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={vscode}
                        alt='vscode'
                        width={80}
                        height={80}
                    />
                    <p>VS CODE</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={figma}
                        alt='figma'
                        width={80}
                        height={80}
                    />
                    <p>FIGMA</p>
                </div>

            </div>


            <h1 className='font-bold text-xl tracking-widest mt-20'>Hosting & Server</h1>

            {/* Hosting & Serverless Platforms section */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  text-center  gap-10 my-10'>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={firebase}
                        alt='firebase'
                        width={80}
                        height={80}
                    />
                    <p>FIREBASE</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={vercel}
                        alt='vercel'
                        width={80}
                        height={80}
                    />
                    <p>VERCEL</p>
                </div>

                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <Image
                        src={netlify}
                        alt='netlify'
                        width={80}
                        height={80}
                    />
                    <p>Netlify</p>
                </div>

            </div>


        </div>
    );
};

export default Skills;