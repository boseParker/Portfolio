import { useState,useEffect } from 'react';
import bgRemove from '../images/bgREmove.png'
// import bgRemove from '../images/1721140316387.jpg'
import Developer from '../images/Developer.jpg'
// import Navbar from "./navbar";
// import Navbar from './navbar1';
import Navbar from './navbar3';
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
        <div className="">
        <Navbar/>
        <section class=" my-img-right-side-content container-fluid p-0" >
         
                <div class="img-container  d-flex flex-column flex-sm-row  justify-content-start align-items-center   ">
                <div class="my-img " >
                    <img src={bgRemove} style={{width:"100%",height:"100%"}} />
                </div>
                <div className='intro-content'>
                    {/* <h1 class="text-light ">Bose M</h1> */}
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