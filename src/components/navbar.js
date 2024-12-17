import { Link} from "react-router-dom";
import bm from '../images/BM.png'

function Navbar(){
    return(
        <section class="left-side-content container col-sm-3 position-sticky top-0 start-0 bottom-0">
            <div class="left-box-top  d-xl-flex flex-column align-items-center gap-3 pt-5  ">
                <img src={bm} width="100px" height="100px"  class="rounded-pill border border-5 border-secondary" />
                <h3>Bose Muthuveeragandar</h3>
                <div class="contact-icons d-flex gap-5 ">
                    <a href=""><i class="bi bi-twitter-x fs-3"></i></a>
                    <a href=""><i class="bi bi-whatsapp fs-3"></i></a>
                    <a href=""><i class="bi bi-instagram fs-3"></i></a>
                    <a href=""><i class="bi bi-linkedin fs-3"></i></a>
                </div>
            </div>
            <div class="left-box-bottom d-flex flex-column mt-5 ms-4 gap-5 ">
                <Link to={'/'} class="fs-4 "><i class="bi bi-house p-2"></i><span>Home</span></Link>
                <Link to={'/about'} class="fs-4"><i class="bi bi-person p-2"></i><span>About</span></Link>
                <Link to={'/resume'} class="fs-4"><i class="bi bi-file-earmark-text p-2"></i><span>Resume</span></Link>
            <Link to={'/'} class="fs-4"><i class="bi bi-pc-horizontal p-2"></i><span>Projects</span></Link> 
            <Link to={'/contact'} class="fs-4"><i class="bi bi-envelope p-2"></i><span>Contact</span></Link>
            </div>
        </section>

    )
}

export default Navbar;