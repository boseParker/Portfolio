import { useState } from 'react';
import emailjs from '@emailjs/browser'
import Navbar1 from './navbar'
import Navbar from "./navbar3";
function Contact(){

    const [mailDetails,setmailDetails]=useState(
        {
            name:"",
            email:"",
            message:""

        }
    )
    const handleDeatils=(e)=>{
        const{name,value}=e.target
        setmailDetails({...mailDetails,[name]:value})


    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        // console.log(mailDetails)
        emailjs
        .send(
            "service_6mmby36",
            "template_9olspdn",
            mailDetails,
            "O2Vfe8EwGMMUoWXZ6"
        )
        .then(
            (result)=>{
                alert("Message sent successfully!");
              console.log(result.text);
            },
            (error) => {
                alert("Failed to send message. Please try again.");
                console.log(error.text);
              }
        )
        
        setmailDetails(
            {
                name:"",
                email:"",
                message:""
            }
        )
    }
 
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
        <section class="container-fluid pb-5 col-12 col-xl-9 col-sm-8 " >
            <div class="contact d-flex flex-column align-items-center justify-content-center gap-3 " id="contact">
                <div class="">
                    <p class="fs-4" >Let's Talk</p>
                </div>
                <div class="conatct-form  container-fluid" >
                    <form action="#" id="details" onSubmit={handlesubmit}>
                        <div class="client-data d-flex flex-column">
                            <label for="fName">FullName </label>
                            <input type="text" required value={mailDetails.name} name="name" id="fname" onChange={handleDeatils} autoComplete="off" />
                        </div>
                        <br/>
                      <div class="client-data d-flex flex-column">
                            <label for="eMail">Email </label>
                            <input type="email" required value={mailDetails.email} name="email" id="email" onChange={handleDeatils} autoComplete="off"/>
                      </div>
                      <br/>
                    
                      <div class="client-data d-flex flex-column">
                            <label for="message">Message </label>
                            <input type="text" required value={mailDetails.message} name="message" id="message" onChange={handleDeatils} autoComplete="off"/>
                      </div>
                      <br/>  
                      <div class="sendbtn">
                      <button class="sendbtn ps-4 pe-4 pt-2 pb-2 fs-5 mt-5 rounded fw-bold">Send Message</button>
                      </div>

                    </form>
                    
                </div>
            </div>
        </section>
        </div>

    )
}

export default Contact;