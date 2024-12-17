import {Link,NavLink} from 'react-router-dom'
function Navbar(){
    return(
        <div className=' container-fluid d-flex  justify-content-end px-3 py-2 bg-dark text-light' style={{ overflow: "hidden"}}>
         
            <nav className='d-flex gap-3'>
               <div className='d-none d-sm-block' >
              
                <ul className=' d-flex gap-4 navbar fs-5 '>
                    
                   
                   <Link to={'/'}> <li>Home</li></Link>
                    <Link to={'/about'}><li>About</li></Link>
                    <Link to={'/resume'}><li>Resume</li></Link>
                    <Link to={'/'}><li>Project</li></Link>
                    <Link to={'/contact'}><li>Contact</li></Link>
                    
                </ul>
                </div>


                <div class="d-block d-md-none ">
                   
                    <div class="navbar fw-bold">
                        <div class="container-fluid">
                            <button class="navbar-toggler dar" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                     </div>

                 </div>
            </nav>
            
        </div>
    )
}

export default Navbar;