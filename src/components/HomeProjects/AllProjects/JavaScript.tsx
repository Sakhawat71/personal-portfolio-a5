import SkillCart from "../SkillsCard/SkillCart";


const JavaScript = () => {

    const projectInfo = [
        {
            id: 1,
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
            id: 2,
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

export default JavaScript;