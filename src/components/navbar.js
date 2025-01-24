import { Link} from "react-router-dom";
import bm from '../images/full.jpg'


function Navbar(){
    return(<>
        <section className="left-side-content container ">
            <div className="left-box-top  d-flex flex-column align-items-center gap-3  p-sm-3  ">
                <img src={bm} width="100px" height="100px" alt="Bm image"  className="rounded-pill border border-5 border-secondary" />
                <h3 className="fs-4 ">Bose M</h3>
                <div className="contact-icons d-flex gap-lg-5 gap-sm-4 ">
                    <a href="mailto:bosem3708@gmail.com" target="_blank"><i className="bi bi-envelope fs-3 text-light"></i></a>
                    <a href="https://wa.me/+919791817649?text=Hello!%20I%20would%20like%20to%20connect%20with%20you." target="_blank"><i className="bi bi-whatsapp fs-3 text-light"></i></a>
                    <a href="https://www.instagram.com/bose.m66/" target="_blank"><i className="bi bi-instagram fs-3 text-light"></i></a>
                    <a href="https://www.linkedin.com/in/bose-m-96473433a/" target="_blank"><i className="bi bi-linkedin fs-3 text-light"></i></a>
                </div>
            </div>
            <div className="left-box-bottom d-flex flex-column  mt-5 ms-5 gap-5 ">
                <Link to={'/'} className="fs-4 "><i className="bi bi-house p-2"></i><span>Home</span></Link>
                <Link to={'/about'} className="fs-4"><i className="bi bi-person p-2"></i><span>About</span></Link>
                <Link to={'/resume'} className="fs-4"><i className="bi bi-file-earmark-text p-2"></i><span>Resume</span></Link>
            <Link to={'/projects'} className="fs-4"><i className="bi bi-pc-horizontal p-2"></i><span>Projects</span></Link> 
            <Link to={'/contact'} className="fs-4"><i className="bi bi-envelope p-2"></i><span>Contact</span></Link>
            </div>
        </section>
        </>
    )
}

export default Navbar;