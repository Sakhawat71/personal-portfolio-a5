"use client"
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import AllProjects from './AllProjects/AllProjects';
import Reactjs from './AllProjects/Reactjs';
import JavaScript from './AllProjects/JavaScript';
import HtmlCss from './AllProjects/HtmlCss';
import lineImage from '@/assets/ext/line.png';
import Image from 'next/image';


const Projects = () => {


    return (
        <div className='mt-10 mx-5 md:mx-10 lg:mx-16'>

            <Image
                src={lineImage}
                alt='line'
                width={150}
                height={50}
                className='my-20 mx-auto'
            />

            <div className='my-20 flex items-center'>
                <div className=' border-black border-[5px] w-72 mx-auto text-center '>
                    <h2 className='text-black font-bold text-xl tracking-[6px] p-3 uppercase '>PORTFOLIO</h2>
                </div>
            </div>


            <div className="w-full">
                <Tabs >
                    <TabList
                        className="relative flex justify-center space-x-2 md:space-x-8 w-full border-b border-gray-300 "
                    >

                        <Tab>
                            ALL
                        </Tab>

                        <Tab >
                            React.js
                        </Tab>

                        <Tab >
                            JavaScript
                        </Tab>

                        <Tab >
                            HTML/CSS
                        </Tab>

                    </TabList>

                    <div className="mt-8 px-4 w-full">

                        <TabPanel>
                            <AllProjects />
                        </TabPanel>

                        <TabPanel>
                            <Reactjs />
                        </TabPanel>

                        <TabPanel>
                            <JavaScript />
                        </TabPanel>

                        <TabPanel>
                            <HtmlCss />
                        </TabPanel>
                    </div>
                </Tabs>
            </div>



        </div>
    );
};

export default Projects;