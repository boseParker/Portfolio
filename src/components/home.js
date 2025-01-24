import { useTypewriter, Cursor } from "react-simple-typewriter";
import bgRemove from '../images/bgREmove.png'
import Navbar from './navbar3'
import Navbar1 from './navbar'

function Home(){
    const [data]= useTypewriter({
        words : ["Fullstack Developer","Front-end Developer"],
        loop : true,
        typeSpeed :70,
        delaySpeed : 1000,
        deleteSpeed:50
    })
 
    return(
        <div className="d-sm-flex">
         <section className='navbar-left col-sm-4 col-xl-3 col-12 '>
            <div className='navbar-1 d-none d-sm-block position-sticky top-0 start-0 bottom-0'>
            <Navbar1/>
            </div>
            <div className='d-block d-sm-none'>
                <Navbar/>
            </div>
        
         </section>
      
        <section className=" my-img-right-side-content container-fluid p-0 col-12 col-xl-9 col-sm-8" >
         
                <div className="img-container  d-flex flex-column flex-sm-row  justify-content-start align-items-center "style={{paddingTop:"75px"}} >
                <div className="my-img " >
                    <img src={bgRemove} style={{width:"100%",height:"100%"}} />
                </div>
                <div className='intro-content fs-2 text-light fst-italic fw-bold d-flex flex-column justify-content-between '>
                <p><span className='text-danger pe-1'>I'm </span> <span>Bose </span></p> 

                        <p ><span >{data}</span></p> 
                      
                </div>
                    
                    
                       
                </div>
           
            </section>
            
           
        </div>
    )
}

export default Home;