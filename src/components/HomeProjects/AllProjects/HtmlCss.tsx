import SkillCart from "../SkillsCard/SkillCart";

const HtmlCss = () => {

    const projectInfo = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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
    ];

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

export default HtmlCss;