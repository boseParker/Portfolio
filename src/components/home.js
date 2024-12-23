import { useState,useEffect } from 'react';
import bgRemove from '../images/bgREmove.png'
import Navbar from './navbar3'
import Navbar1 from './navbar'
import Footer from './footer';
function Home(){

    const a=["Fullstack Developer","Front-end Developer"]
    const [data,setData]=useState(0)
    const[i,setI]=useState(0)
    setInterval(()=>{
       setI(Math.floor(Math.random()*2))
    },10000)
   
    
    useEffect(()=>{
        setData(a[i])
    },[i])

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
      
        <section class=" my-img-right-side-content container-fluid p-0 col-12 col-xl-9 col-sm-8" >
         
                <div class="img-container  d-flex flex-column flex-sm-row  justify-content-start align-items-center "style={{paddingTop:"75px"}} >
                <div class="my-img " >
                    <img src={bgRemove} style={{width:"100%",height:"100%"}} />
                </div>
                <div className='intro-content'>
                <p class="fs-2 text-light fst-italic fw-bold "><span className='text-danger pe-1'>I'm </span> <span>Bose </span>
                    <br/>
                 
                    
                    <span className='text-light'><div>{data}</div></span>
                       
                        </p>  
                </div>
                    
                    
                       
                </div>
           
            </section>
            
           
        </div>
    )
}

export default Home;