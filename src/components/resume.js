import Navbar1 from './navbar'
import Navbar from "./navbar3";
import resume from '../images/resume.pdf'
function Resume(){
    return(
        <div className="d-sm-flex">
               <section className='col-xl-3 col-sm-4 col-12 '>
            <div className='d-none d-sm-block position-sticky top-0 start-0 bottom-0'>
            <Navbar1/>
            </div>
            <div className='d-block d-sm-none'>
                <Navbar/>
            </div>
        
         </section>

       
        <section class="right-side-content container-fluid  col-12 col-xl-9 col-sm-8 pb-5" >
           <div class="row mt-5 d-flex gap-4" >
                <div class="cv_section ps-5 pb-5">
                    <h1>Resume</h1>
                </div>
                <div class="cv-download-section col-10 m-auto border p-3 p-sm-5 d-flex justify-content-between flex-wrap align-items-center" > 
                    <h2 class="col-sm-6 fs-3 col-5 " >Fresher</h2>
                    <a href={resume} download="BOSE_M_RESUME.pdf" class="col-sm-4  col-5 text-light bg-danger p-2 p-sm-3 fs-6 rounded-pill text-center ">Download My Cv</a>
                </div>
                <div class="education row  border  p-sm-4 col-10 m-auto d-flex flex-wrap flex-column flex-sm-row  align-items-sm-center justify-content-between">
                    <p class="fw-light fs-3">Education :</p>
                    <div class=" col-12  col-lg-5 ps-sm-5 pb-4">
                        <p class="fs-sm-3 fw-bold">2021 - 2024</p>
                        <p class="fs-sm-5 fw-bold">Periyar University</p>
                        <p class=" fs-sm-5 fw-bold">Bachelor Degree</p>
                    </div>
                    <div class="col-12  col-lg-7">
                        <p className="fs-sm-5 ">I successfully completed my Bachelor's degree in Computer Science at Periyar University from 2021 to 2024, achieving a CGPA of 7.45. Throughout my academic journey, I built a strong foundation in core computer science concepts, honed my problem-solving skills, and gained hands-on experience in programming, software development, and web technologies. My coursework and projects reflect my dedication to applying theoretical knowledge to real-world challenges.</p>
                    </div>
                </div>
                <div class="col-10 border  p-sm-5 p-3 m-auto">
                    <div class="">
                        <p class="fs-4 fw-bold">Professional Skillset</p>
                    </div>
                    <div class=" extra-skills row  d-flex flex-wrap gap-2">
                        <li class="col-6 fs-sm-5 p-sm-1 " >Enterpreneurial Mindeset</li>
                        <li class="col-6 fs-sm-5 p-sm-1" >TeamWork & Collaboration</li>
                        <li class="col-6 fs-sm-5 p-sm-1">Digital Analytics</li>
                        <li class="col-6 fs-sm-5 p-sm-1" >Go-to-Market Planning</li>
                    </div>

                </div>
           </div>
        </section>
        </div>

    )
}

export default Resume;