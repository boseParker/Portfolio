// import Navbar from "./navbar"
// import Navbar from './navbar1';
import Navbar from './navbar3';
import bm from '../images/half.JPG'
import fullimage from '../images/full.JPG'

function About(){

    return(
        <div className="">
            <Navbar/>
        
        <section class="right-side-content container-fluid d-flex flex-column gap-5 pb-5">
            <div class="about container ps-sm-5 pt-sm-5 pb-sm-5 mt-3" id="about">
                <h2>About</h2>
              
                 <p>I'm a passionate Web Developer skilled in crafting responsive and user-friendly websites. I specialize in HTML, CSS, JavaScript, and Python Fullstack development, creating projects that combine functionality with modern design. Always eager to learn and grow, I aim to build impactful digital experiences.</p>
            <div class="about-my-details container pt-5 ">
                    <h3 class="pb-5">Web Developer</h3>
                <div class="personal-detalis d-flex flex-wrap align-items-center justify-content-center gap-5 ">
                  
                    <div class="about-my-img" >
                        <img src={fullimage} width="290px" height="450px"  alt="" style={{borderRadius:"50%"}}/>
                    </div>
                  
                     
                        <div class="personal-info d-flex flex-row flex-wrap gap-5  ">
                        <div class="set-1 d-flex flex-column gap-3 fs-3  ">
                            <li><i class="bi bi-chevron-right "></i><strong>Birthday:</strong> <span>12 April 2004</span></li>
                            <li><i class="bi bi-chevron-right "></i><strong>Website:</strong> <span>www.example.com</span></li>
                            <li><i class="bi bi-chevron-right "></i><strong>Phone:</strong> <span>+91 9791817649</span></li>
                            <li><i class="bi bi-chevron-right "></i><strong>City:</strong> <span>Coimabtore,Tamilnadu</span></li>
                        </div>
                        <div class="set-2 d-flex flex-column gap-3 fs-3">
                            <li><i class="bi bi-chevron-right "></i><strong>Age:</strong> <span>21</span></li>
                            <li><i class="bi bi-chevron-right "></i><strong>Degree:</strong> <span>Bachelor</span></li>
                            <li><i class="bi bi-chevron-right "></i><strong>Email:</strong> <span>bosemuthu01@gamil.com</span></li>
                            <li><i class="bi bi-chevron-right "></i><strong>Freelance:</strong> <span>Available</span></li>
                        </div>
                        </div>
                
                </div>
            </div>

         </div>

         {/* skills  */}
         <div class="container mt-sm-5 pt-sm-5 ps-sm-5">
            <h2 class="">Skills</h2>
             <div class="d-flex flex-wrap justify-content-around gap-5">
                <div class="skill d-flex flex-column">
                   <p class="d-flex justify-content-between"><span>HTML</span><span>100%</span></p>
                   <div class="skills border border-1 " >
                    <div class="skill-html bg-info" style={{width: "100%", height: "100%"}}></div>
                   </div> 
                </div>
                <div class="skill d-flex flex-column">
                   <p class="d-flex justify-content-between"><span>CSS</span><span>90%</span></p>
                   <div class="skills border border-1 " >
                    <div class="skill-html bg-info" style={{width: "90%", height: "100%"}}></div>
                   </div> 
                </div>
                <div class="skill d-flex flex-column">
                   <p class="d-flex justify-content-between"><span>JAVASCRIPT</span><span>70%</span></p>
                   <div class="skills border border-1 " >
                    <div class="skill-html bg-info" style={{width: "70%", height: "100%"}}></div>
                   </div> 
                </div>
                <div class="skill d-flex flex-column">
                   <p class="d-flex justify-content-between"><span>BOOTSTRAP</span><span>50%</span></p>
                   <div class="skills border border-1 " >
                    <div class="skill-html bg-info" style={{width: "50%", height: "100%"}}></div>
                   </div> 
                </div>
                <div class="skill d-flex flex-column">
                   <p class="d-flex justify-content-between"><span>REACT</span><span>50%</span></p>
                   <div class="skills border border-1 " >
                    <div class="skill-html bg-info" style={{width: "50%", height: "100%"}}></div>
                   </div> 
                </div>
                <div class="skill d-flex flex-column">
                   <p class="d-flex justify-content-between"><span>PYTHON</span><span>50%</span></p>
                   <div class="skills border border-1 " >
                    <div class="skill-html bg-info" style={{width: "50%", height: "100%"}}></div>
                   </div> 
                </div>
             </div>
        </div>

        </section>
        </div>
    )
}

export default  About;