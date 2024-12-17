// import Navbar from "./navbar";

// import Navbar from './navbar1'
import Navbar from "./navbar3";
function Contact(){
    return(
        <div className="">
            <Navbar/>
        <section class="
         container-fluid pb-5 " >
            <div class="contact d-flex flex-column align-items-center justify-content-center gap-3 " id="contact">
                <div class="">
                    <p class="fs-4" >Let's Talk</p>
                </div>
                <div class="conatct-form  container-fluid" >
                    <form action="#" id="details">
                        <div class="client-data d-flex flex-column">
                            <label for="fName">FullName </label>
                            <input type="text" required name="fName" id="fName" autoComplete="off" />
                        </div>
                        <br/>
                      <div class="client-data d-flex flex-column">
                            <label for="eMail">Email </label>
                            <input type="email" required name="email" id="eMail" autoComplete="off"/>
                      </div>
                      <br/>
                      <div class="client-data d-flex flex-column">
                            <label for="subject">Subject </label>
                            <input type="text" required name="subject" id="subject" autoComplete="off"/>
                      </div>
                      <br/>
                      <div class="client-data d-flex flex-column">
                            <label for="message">Message </label>
                            <input type="text" required name="message" id="message" autoComplete="off"/>
                      </div>
                      <br/>  
                      <div class="sendbtn">
                      <button type="submit" class="sendbtn ps-4 pe-4 pt-2 pb-2 fs-5 mt-5 rounded fw-bold">Send Message</button>
                      </div>

                    </form>
                    
                </div>
            </div>
        </section>
        </div>

    )
}

export default Contact;