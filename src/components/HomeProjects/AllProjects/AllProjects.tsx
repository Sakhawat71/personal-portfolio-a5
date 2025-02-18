"use client"
import SkillCart from "../SkillsCard/SkillCart";

const AllProjects = () => {

    const projectInfo = [
        {
            id: 1,
            images: [
                { src: "https://i.ibb.co.com/44TfpkX/chat-canvas-71-web-app.png" },
                { src: "https://i.ibb.co.com/gWCBbYk/chat-canvas-71-web-app-membership.png" },
                { src: "https://i.ibb.co.com/VgHsCdj/chat-canvas-71-web-app-login.png" },
                { src: "https://i.ibb.co.com/XYd7NDd/chat-canvas-71-web-app-dashboard-my-profile.png" },
                { src: "https://i.ibb.co.com/RPPjC7J/chat-canvas-71-web-app-dashboard-my-profile-2.png" },
                { src: "https://i.ibb.co.com/q1sY3xn/chat-canvas-71-web-app-dashboard-my-profile-1.png" },
            ],
            alt: "Chat Canvas Project",
            projectName: "Chat Canvas",
            projectDis: "Online Forum Platform.Technologies Used: React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS, daisyUI.",
            liveLink: "https://chat-canvas-71.web.app",
            gitRepo: "https://github.com/Sakhawat71/chat-canvas-frontend",
        },
        {
            id: 2,
            images: [
                { src: "https://i.ibb.co.com/yP6Q4Wh/costudy-7.png" },
                { src: "https://i.ibb.co.com/rwyLHTf/costudy-3.png" },
                { src: "https://i.ibb.co.com/ctyGqdg/costudy-8.png" },
                { src: "https://i.ibb.co.com/qjxgWvr/costudy-4.png" },
                { src: "https://i.ibb.co.com/M65GGfv/costudy-5.png" }
            ],
            alt: "Online CoStudy ",
            projectName: "CoStudy",
            projectDis: "CoStudy is a web application that facilitates collaborative learning by allowing users to create, update, and view assignments.",
            liveLink: "https://costudy.netlify.app",
            gitRepo: "https://github.com/Sakhawat71/CoStudy-frontend",
        },
        {
            id: 3,
            images: [
                { src: "https://i.ibb.co.com/KrkSPKR/drive-Gear-5.png" },
                { src: "https://i.ibb.co.com/98tnMPP/drive-Gear-1.png" },
                { src: "https://i.ibb.co.com/2kQN6Db/drive-Gear-4.png" },
                { src: "https://i.ibb.co.com/2dS2nDC/drive-Gear-2.png" },
                { src: "https://i.ibb.co.com/yyM0WH8/drive-Gear-3.png" }
            ],
            alt: "DriveGear",
            projectName: "DriveGear",
            projectDis: "React , MongoDB and Express.js is used in this project.Also used are React Router, Context api and CRUD Operations with Mongodb + express.js",
            liveLink: "https://brandshop-sabbir71.web.app",
            gitRepo: "https://github.com/Sakhawat71/DriveGear-frontend",
        },
        {
            id: 4,
            images: [
                { src: "https://i.ibb.co.com/rZ8HHvN/event-managment-4.png" },
                { src: "https://i.ibb.co.com/0fRRzKB/event-managment-6.png" },
                { src: "https://i.ibb.co.com/GMBg2cF/event-managment-1.png" },
                { src: "https://i.ibb.co.com/KXf7kZ8/event-managment-2.png" },
                { src: "https://i.ibb.co.com/DwyQVKg/event-managment-5.png" }
            ],
            alt: "Dream Events",
            projectName: "Dream Events",
            projectDis: "Private routes using Firebase authentication and PrivateRoute component to ensure that only authenticated users can access event details and profiles.",
            liveLink: "https://event-managment-sakhawat71.netlify.app",
            gitRepo: "https://github.com/Sakhawat71/event-management",
        },
        {
            id: 5,
            images: [
                { src: "https://i.ibb.co.com/KLkmx4W/donation-campaign-4.png" },
                { src: "https://i.ibb.co.com/1QdGZrr/donation-campaign-1.png" },
                { src: "https://i.ibb.co.com/J2j0YT7/donation-campaign-2.png" },
                { src: "https://i.ibb.co.com/WVBvhJC/donation-campaign-3.png" },
            ],
            alt: "Donation Campaign",
            projectName: "Donation Campaign",
            projectDis: "The Donation Campaign React App! This application is designed to facilitate and manage donation campaigns for various causes.",
            liveLink: "https://donation-campaign-sakhawat71.netlify.app",
            gitRepo: "https://github.com/Sakhawat71/donation-campaign",
        },
        {
            id: 6,
            images: [
                { src: "https://i.ibb.co.com/8Nm7kcb/phero-tube-3.png" },
                { src: "https://i.ibb.co.com/dmbgbxV/phero-tube-1.png" },
                { src: "https://i.ibb.co.com/G2ddzsk/phero-tube-2.png" },
                { src: "https://i.ibb.co.com/85bmmdZ/phero-tube-4.png" },
            ],
            alt: "phtube",
            projectName: "PH Tube",
            projectDis: "The 'PH Tube' project is a responsive video streaming website created with HTML, CSS, and JavaScript. The site is designed to be mobile-friendly.",
            liveLink: "https://phero-tube-sabbir71.netlify.app/",
            gitRepo: "https://github.com/Sakhawat71/ph-tube",
        },
        {
            id: 7,
            images: [
                { src: "https://i.ibb.co.com/nczJ0yx/summer-sale-3.png" },
                { src: "https://i.ibb.co.com/sF64SWz/summer-sale-4.png" },
                { src: "https://i.ibb.co.com/jv5v1Fm/summer-sale-2.png" },
            ],
            alt: "Summer sale",
            projectName: "Summer Sale",
            projectDis: "The 'Summer Sale' project is a responsive promotional website built with HTML, CSS, JavaScript and TailwindCSS. The site adapts well to various screen sizes.",
            liveLink: "https://b8a5-summer-sale-sakhawat71.netlify.app",
            gitRepo: "https://github.com/Sakhawat71/summer-sale-ph_a5",
        },
        {
            id: 8,
            images: [
                { src: "https://i.ibb.co.com/hmVzN3c/fruit-brust-1.png" },
                { src: "https://i.ibb.co.com/QnPWvx9/fruit-brust-2.png" },
                { src: "https://i.ibb.co.com/SV5g1LK/fruit-brust-3.png" },
            ],
            alt: "fruit-brust",
            projectName: "Fruit Brust",
            projectDis: "The 'Fruit Burst' project is a responsive website built using HTML, CSS, and DaisyUI, a Tailwind CSS component library. And is fully responsive across different devices.",
            liveLink: "https://sakhawat71.github.io/fruit-brust-daisyui/index.html",
            gitRepo: "https://github.com/Sakhawat71/fruit-brust-daisyui",
        },
        {
            id: 9,
            images: [
                { src: "https://i.ibb.co.com/K2jYLTD/gamer-zone-1.png" },
                { src: "https://i.ibb.co.com/smVqNLB/gamer-zone-2.png" },
                { src: "https://i.ibb.co.com/FX8BVMb/gamer-zone-3.png" },
            ],
            alt: "gamer-zone",
            projectName: "Gamer Zone",
            projectDis: "The 'Gamer Zone' is a responsive website built with HTML and CSS. It features a gaming-themed design without the use of any CSS frameworks.",
            liveLink: "https://sakhawat71.github.io/gamer-zone/index.html",
            gitRepo: "https://github.com/Sakhawat71/gamer-zone",
        },
        {
            id: 10,
            images: [
                { src: "https://i.ibb.co.com/fQp08Jx/flower-shop-1.png" },
                { src: "https://i.ibb.co.com/6bJGscV/flower-shop-2.png" },
                { src: "https://i.ibb.co.com/mDWxbTx/flower-shop-3.png" },
                { src: "https://i.ibb.co.com/PxFd6f5/flower-shop-4.png" },
            ],
            alt: "flower-shop",
            projectName: "Flower Shop",
            projectDis: "This is a basic HTML and CSS project for a flower shop website.There is no CSS framework used here, and the site is not responsive.",
            liveLink: "https://sakhawat71.github.io/flower-shop/index.html",
            gitRepo: "https://github.com/Sakhawat71/flower-shop",
        },
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 bg-[#D6D6D6]'>

            {
                projectInfo?.map(project =>
                    <SkillCart key={project.id} project={project} />
                )
            }

        </div>
    );
};

export default AllProjects;