import React from 'react';
import skills from './data/skills.json';

const Skill = () => {
  const frontendSkills = skills[0].frontend;
  const databaseSkills = skills[1].database;
  const otherSkills = skills[2].otherskills;
  const toolsTechnologiesSkills =skills[3].toolstechnologies;

  return (
    

    <div className='container skills' id='skills'>
      <h1>SKILLS</h1>


      <h3>Frontend</h3>
    <div className='skills-section' data-aos="flip-left" data-aos-duration="900">
      {frontendSkills.map((data) => ( <>
            <div className='items' data-aos="flip-left" data-aos-duration="900" key={data.id}>
                <img src={`/assets/${data.imgSrc}`} alt='no'/>
                <h2>{data.title}</h2>
              </div>
            </>
            ))}
    </div>

{/* 
    <h3>Backend</h3>
   <div className='skills-section'>
      {backendskills.map((data) => ( <>
            <div className='items' data-aos="flip-left" data-aos-duration="900" key={data.id}>
                <img src={`/assets/${data.imgSrc}`} alt='no'/>
                <h2>{data.title}</h2>
              </div>
            </>
            ))}
    </div> */}


    <h3>Database</h3>
    <div className='skills-section'>
      {databaseSkills.map((data) => ( <>
            <div className='items' data-aos="flip-left" data-aos-duration="900" key={data.id}>
                <img src={`/assets/${data.imgSrc}`} alt='no'/>
                <h2>{data.title}</h2>
              </div>
            </>       
            ))}

    </div>


    <h3>Other Skills</h3>
    <div className='skills-section'>
      {otherSkills.map((data) => ( <>
            <div className='items' data-aos="flip-left" data-aos-duration="900" key={data.id}>
                <img src={`/assets/${data.imgSrc}`} alt='no'/>
                <h2>{data.title}</h2>
              </div>
            </>
            ))}
    </div>


    <h3>Tools and Technologies</h3>
    <div className='skills-section'>
      {toolsTechnologiesSkills.map((data) => ( <>
            <div className='items' data-aos="flip-left" data-aos-duration="900" key={data.id}>
                <img src={`/assets/${data.imgSrc}`} alt='no'/>
                <h2>{data.title}</h2>
              </div>
            </>
            ))}
    </div>
  
  
      </div>
  );
};

export default Skill  