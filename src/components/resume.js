import React from 'react'
import resume from '../../src/images/resume.pdf'
import Navbar1 from './navbar'
import Navbar from './navbar3'
const Resume = () => {
  return (
    <div className='d-sm-flex'>
        <section className='col-sm-4 col-xl-3 col-12 '>
            <div className='d-none d-sm-block position-sticky top-0 start-0 bottom-0'>
            <Navbar1/>
            </div>
            <div className='d-block d-sm-none'>
                <Navbar/>
            </div>
        
         </section>
         <section className='container-fluid d-flex flex-wrap ms-sm-5 col-12 col-xl-9 col-sm-8 gap-5 pb-5 ps-sm-5 ps-3 mt-5'>
                <section>
                        <p className='resume-title'>Resume</p>
                        <div className='resume-body d-flex flex-column ms-sm-5 '>
                        <p><a href={resume} download="Bose_Resume" rel='alternate' className='text-light' >Resume Download <span><i className="bi bi-arrow-down-circle"></i></span></a></p>
                        </div>
                </section>
                <section>
                    <p className='resume-title '>Courses & Experience</p>
                    <div className='resume-body d-flex flex-column ms-sm-5 '>
                        <p>2024-present</p>
                        <p>Full Stack Development(Python)</p>
                        <p>Edex Tech ,Coimbatore</p>
                    </div>
                </section>
                <section >
                <p className='resume-title'>My Education</p>
                <div className='resume-body   d-flex flex-column ms-sm-5'>
                    <p>2021-2024</p>
                    <p>B.Sc CS</p>
                    <p>Periyar University</p>
                </div>
            </section>
            
           
         </section>
   
    </div>
  )
}

export default Resume
