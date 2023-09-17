import React from 'react'
import ResumeCard from './ResumeCard'
import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.6}}} className='w-full flex flex-col lg:flex-row gap-20'>
      {/* part-1 */}
      <div className='lg:w-1/2 w-full'>
        <div className='lg:py-12 py-4 font-titleFont'>
          <p className='text-sm text-designColor tracking=[4px]'>2020 - 2024</p>
          <h2 className='lg:text-4xl text-2xl font-bold'>Qualification</h2>
        </div>
        <div className='mt-4 lg:mt-14 h-auto w-full border-l-[6px] border-l-black border-opacity-30
        flex flex-col gap-4 lg:gap-10'>
          <ResumeCard
            title="High school"
            subtitle="Lucknow Public School,Uttar Pradesh.(2015-2016)"
            result="88%"
            des="I completed my High School from a private english medium school  with 89% marks."
          />
          <ResumeCard
            title="Intermediate"
            subtitle="City Convent School,Lucknow,Uttar Pradesh.(2018-2019)"
            result="90%"
            des="I have completed my senior secondary (12th) from a private english medium school with
            80% marks in 12th board examination." />
          <ResumeCard
            title="Graduation (B.Tech)"
            subtitle="Indian Institute of Technology (BHU) Varanasi."
            result="9.21/10"
            des="Currently I am persuing my B.Tech in Pharmaceutical Engineering and Technology at
            IIT (BHU) VARANASI." />
        </div>
      </div>

      {/* part 2 */}

      <div className='lg:w-1/2 w-full'>
        <div className='lg:py-12 py-4 font-titleFont'>
          <p className='text-sm text-designColor tracking=[4px]'>2020 - 2024</p>
          <h2 className='lg:text-4xl text-2xl font-bold'>Qualification</h2>
        </div>
        <div className='mt-4 lg:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30
        flex flex-col gap-4 lg:gap-10'>
          <ResumeCard
            title="High school"
            subtitle="Lucknow Public School,Uttar Pradesh.(2015-2016)"
            result="88%"
            des="I completed my High School from a private english medium school  with 89% marks."
          />
          <ResumeCard
            title="Intermediate"
            subtitle="City Convent School,Lucknow,Uttar Pradesh.(2018-2019)"
            result="90%"
            des="I have completed my senior secondary (12th) from a private english medium school with
            80% marks in 12th board examination." />
          <ResumeCard
            title="Graduation (B.Tech)"
            subtitle="Indian Institute of Technology (BHU) Varanasi."
            result="9.21/10"
            des="Currently I am persuing my B.Tech in Pharmaceutical Engineering and Technology at
            IIT (BHU) VARANASI." />
        </div>
      </div>
    </motion.div>
  )
}

export default Education
