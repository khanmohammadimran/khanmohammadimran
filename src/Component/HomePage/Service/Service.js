import React from 'react';
import { SkillBar } from 'react-skills';

const Service = () => {
    // const skillsData = [
    //     {
    //         name: 'ReactJS',
    //         level: 100,
    //         color: 'blue',
    //     },
    //     {
    //         name: 'SomeOtherTech',
    //         level: 85,
    //         color: 'red',
    //     }
    // ]

    return (
        <div className='w-1/2 mx-auto font-nunito py-4'>
            <h2 className='text-5xl text-center py-6'>Skill Set</h2>
            <div className='grid gap-2'>
                <SkillBar name="HTML" level={90} color="tomato" height={40} />
                <SkillBar name="CSS" level={90} color="aqua" height={40} />
                <SkillBar name="JavaScript" level={80} color="tomato" height={40} />
                <SkillBar name="React js" level={75} color="aqua" height={40} />
                <SkillBar name="Node js" level={65} color="tomato" height={40} />
                <SkillBar name="Express js" level={75} color="aqua" height={40} />
                <SkillBar name="MongoDB" level={60} color="tomato" height={40} />
            </div>
        </div>
    );
};

export default Service;