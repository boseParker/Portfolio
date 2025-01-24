import Navbar from "./navbar3";
import Navbar1 from './navbar'
import ProjectData from './data.json'  
function Project(){
    
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
       <section className="container-fluid col-12 col-xl-9 col-sm-8 ">
        <div className="p-5">
            <p className="fs-4 fw-bold">Projects</p>
        </div>
        <div className="project-section d-flex flex-wrap justify-content-center gap-5">
            {
                ProjectData.projects.map((data,index)=>{
                    return(
                        <div className="card p-2 d-flex align-items-center " key={index} style={{width: "19rem"}}>
                            
                                    <img src={`/images/${data.img}`} style={{width:"250px",height:"200px"}} className="card-img-top border-bottom border-2 " alt={data.title}/>
                            
                       
                        <div className="card-body pt-3">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text"><strong>Description:</strong>{data.description}
                            </p>
                            <p className="card-text"><strong>Features:</strong> {data.features}
                            </p>
                            <a href={data.link} target="_blank" className="btn btn-primary" rel="noopener noreferrer">Live Demo</a>
                            
                        </div>
                    </div>
                    )
                })
            }
           
        

        
        
        
            
        </div>
        </section>
        </div>

    )
}
export default Project;