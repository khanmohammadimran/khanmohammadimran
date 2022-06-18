// import React from 'react';
// import { SkillBar } from 'react-skills';
// import { motion } from 'framer-motion'

// const Service = () => {

//     return (
//         <div className='w-11/12 lg:w-1/2 md:w-1/2 mx-auto font-nunito py-4'>
//             <h2 className='text-5xl text-center py-6'>Skill Set</h2>
//             <div className='grid gap-2'>
//                 <SkillBar name="HTML" level={90} color="tomato" height={40} />
//                 <SkillBar name="CSS" level={90} color="aqua" height={40} />
//                 <SkillBar name="JavaScript" level={80} color="tomato" height={40} />
//                 <SkillBar name="React js" level={75} color="aqua" height={40} />
//                 <SkillBar name="Node js" level={65} color="tomato" height={40} />
//                 <SkillBar name="Express js" level={75} color="aqua" height={40} />
//                 <SkillBar name="MongoDB" level={60} color="tomato" height={40} />
//             </div>
//         </div>
//     );
// };

// export default Service;


// Custom Code //

// import React, { useState } from 'react';
// import '../Service/Service.css'
// const Service = ({ done }) => {
//     const [style, setStyle] = useState({});

//     setTimeout(() => {
//         const newStyle = {
//             opacity: 1,
//             width: `${done}%`
//         }

//         setStyle(newStyle);
//     }, 200);

//     return (
//         <div className="progress">
//             <div className="progress-done" style={style}>
//                 {done}%
//             </div>
//             <>
//                 <h1>React Progress Bar</h1>
//                 <Service done="70" />
//             </>
//         </div>
//     )
// }

// export default Service;


import React from 'react';
import ReactSkillbar from 'react-skillbars';

const Service = () => {

    const skills = [
        {
            type: 'HTML', level: 90, color: {
                bar: "#32A99A",
                title: { text: '#fff', background: '#288679' }
            }
        },
        {
            type: 'CSS', level: 90, color: {
                bar: "#32A99A",
                title: { text: '#fff', background: '#288679' }
            }
        },
        {
            type: 'JavaScript', level: 80, color: {
                bar: "#32A99A",
                title: { text: '#fff', background: '#288679' }
            }
        },
        {
            type: 'React JS', level: 75, color: {
                bar: "#32A99A",
                title: { text: '#fff', background: '#288679' }
            }
        },
        {
            type: 'Node JS', level: 65, color: {
                bar: "#32A99A",
                title: { text: '#fff', background: '#288679' }
            }
        },
        {
            type: 'Express JS', level: 75, color: {
                bar: "#32A99A",
                title: { text: '#fff', background: '#288679' }
            }
        },
        {
            type: 'Mongo DB', level: 60, color: {
                bar: "#32A99A",
                title: { text: '#fff', background: '#288679' }
            }
        },
    ];

    const colors = {
        bar: "#3498db",
        title: {
            text: "#000000",
            background: "#2980b9"
        }
    };

    return (
        <div className='w-11/12 lg:w-1/2 md:w-1/2 mx-auto font-nunito py-4'>
            <h2 className='text-5xl text-center py-6'>Skill Set</h2>
            <ReactSkillbar skills={skills} colors={colors} animationThreshold={0.8} />
        </div>
    );
};

export default Service;