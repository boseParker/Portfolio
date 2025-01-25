import Navbar from './navbar3';
import Navbar1 from './navbar'
import fullimage from '../../src/images/full.jpg'
import Html from '../images/html.png'
import Css from '../images/css.png'
import Js from '../images/js.png'
import ReactImg from '../images/react.png'; 
import PythonImg from '../images/Python-.png'
import Bootstrapimg from '../images/bootstrap.png'

function About(){

    return(
        <div className="d-sm-flex">
             <section className='col-sm-4 col-xl-3 col-12 '>
            <div className='d-none d-sm-block position-sticky top-0 start-0 bottom-0'>
            <Navbar1/>
            </div>
            <div className='d-block d-sm-none'>
                <Navbar/>
            </div>
        
         </section>
        
        
        <section className="right-side-content container-fluid d-flex flex-column col-12 col-xl-9 col-sm-8 gap-5 pb-5 ps-sm-5 ps-3">
            <div className="about  mt-3" id="about">
                <h2>About</h2>
              
                 <p>I'm a passionate Web Developer skilled in crafting responsive and user-friendly websites. I specialize in HTML, CSS, JavaScript, and Python Fullstack development, creating projects that combine functionality with modern design. Always eager to learn and grow,  aim to build impactful digital experiences.</p>
            <div className="about-my-details container pt-5 ">
                    <h3 className="pb-5">Web Developer</h3>
                <div className="personal-detalis d-flex flex-wrap align-items-center justify-content-around justify-content-sm-start gap-5 ">
                  
                    <div className="about-my-img" >
                        <img src={fullimage} width="290px" height="450px"  alt="fullImage" style={{borderRadius:"50%"}}/>
                    </div>
                  
                     
                        
                        <div className="set-2 d-flex flex-column gap-3 fs-4">
                            <li><i className="bi bi-chevron-right "></i><strong>Degree:</strong> <span>Bachelor of Computer Science</span></li>
                            <li><i className="bi bi-chevron-right "></i><strong>Email:</strong> <span>bosemuthu01@gmail.com</span></li>
                            <li><i className="bi bi-chevron-right "></i><strong>Freelance:</strong> <span>Available</span></li>
                            <li><i className="bi bi-chevron-right "></i><strong>City:</strong> <span>Namakkal,Tamilnadu</span></li>
                        </div>
                      
                
                </div>
            </div>

         </div>

         {/* skills  */}
         <div className="container mt-lg-5 pt-lg-5 ps-lg-5">
            <h2 className="">Skills</h2>
             <div className="d-flex flex-wrap justify-content-around gap-5 flex-basis mt-5 ">
                <div className="skill d-flex flex-column align-items-center ">
                    <div>
                        <img src={Html} height={"200px"} width={"200px"} alt='html'/>
                    </div>
                   <p className="d-flex justify-content-between"><span>HTML</span></p>
                 
                </div>
                <div className="skill d-flex flex-column align-items-center ">
                    <div>
                        <img src={Css} height={"200px"} width={"200px"} alt='css'/>
                    </div>
                   <p className="d-flex justify-content-between"><span>CSS</span></p>
                 
                </div>
                <div className="skill d-flex flex-column align-items-center ">
                <div>
                        <img src={Js} height={"200px"} width={"200px"} alt='js'/>
                    </div>
                   <p className="d-flex justify-content-between"><span>JAVASCRIPT</span></p>
                  
                </div>
                <div className="skill d-flex flex-column align-items-center ">
                <div>
                        <img src={Bootstrapimg} height={"200px"} width={"200px"} alt='bootstrap'/>
                    </div>
                   <p className="d-flex justify-content-between"><span>BOOTSTRAP</span></p>

                </div>
                <div className="skill d-flex flex-column align-items-center ">
                <div>
                        <img src={ReactImg} height={"200px"} width={"200px"} alt='reactJs'/>
                    </div>
                   <p className="d-flex justify-content-between"><span>REACT JS</span></p>
                   
                </div>
                <div className="skill d-flex flex-column align-items-center ">
                <div>
                        <img src={PythonImg} height={"200px"} width={"200px"} alt='python'/>
                    </div>
                   <p className="d-flex justify-content-between"><span>PYTHON(Basics)</span></p>
                 
                </div>
             </div>
        </div>

        </section>
        </div>
    )
}

export default  About;