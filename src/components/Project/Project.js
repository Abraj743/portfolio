import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { ecommerce,chair,study,plan, eventimg,portfolio,pizza } from '../../assets'

const Project = () => {
  return (
    <section id='project' className='w-full h-auto py-20 border-b-[1px] 
    border-b-black'>
      <div className='w-full flex justify-center items-center text-center'>
        <Title title="Vistit my portfolio and keep your feedback" des="my projects.." />
      </div>
      <div className='grid grid-cols-1 mdl:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
          <ProjectCard
          src={study }
          title="Study Notion" 
          des="A full-fledged e-learning website, dedicated to showcasing a captivating course collection, with React.js and MongoDb as backend" proLink={'https://steptalk.vercel.app'} gitLink={'https://github.com/iitian360/store-frontend'}
          />


          <ProjectCard  src={pizza }
          title="Pizza delivery website - Mobopizza" 
          des="Developed MoboPizza, a responsive and user-friendly pizza delivery website built with React.
          Implemented features such as menu browsing, customizable pizza options, cart management" proLink={'https://mobopizza.vercel.app'}
              gitLink={'https://github.com/iitian360/Pizza-delivery-app'} 
          />


          <ProjectCard src={portfolio }
          title="Portfolio" 
          des="My portfolio website is a meticulously crafted digital showcase that reflects my journey, skills, and accomplishments as a web developer.
          The website includes a showcase of my previous projects, each with detailed descriptions, visuals, and links to GitHub repositories or live demos"
          />


          <ProjectCard src={ecommerce }
          title="E-Commerce website" 
          des="The website features a well-organized product catalog with clear product descriptions, high-quality images, and relevant information, facilitating informed purchasing decisions"
          />


          <ProjectCard src={chair }
          title="Modern Chair Sell Website" 
          des="I incorporated interactive image galleries that allow visitors to view chairs from various angles and zoom in for finer details, offering an engaging and immersive experience" proLink={'https://collegelib.up.railway.app/'}
              gitLink={'https://github.com/iitian360/village-database'}
          />



          <ProjectCard src={plan }
          title="Tourist Plan Website" 
          des="I implemented a user-friendly interface that allows travelers to create personalized itineraries by selecting destinations, activities, dates, and preferences."
          proLink={'https://mesuraj.netlify.app/'}
          gitLink={'#'}
          />


      </div>
    </section>
  )
}

export default Project
