import Navbar from "./navbar3";
// import Calculator from '../images/calculator.jpg'
import Calculator from '../images/calculator1.jpg'
// import stopWatch from '../images/stopWatch.jpg'
import stopWatch from '../images/StopWatchProject.webp'
// import todo from '../images/todo.png'
import todo from '../images/todo1.png'
// import weather from '../images/weather.png'
import weather from '../images/weather1.png'
import Ola from '../images/ola.webp'  
function Project(){
    return(
        <>
        <Navbar/>
        <div className="p-5">
            <p className="fs-4 fw-bold">Projects</p>
        </div>
        <div className="project-section d-flex flex-wrap justify-content-center gap-5">
           
         <div class="card p-2 d-flex align-items-center" style={{width: "19rem"}}>
            <img src={Calculator} style={{width:"250px",height:"200px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Calculator</h5>
                <p class="card-text"><strong>Description:</strong> A fully functional calculator app built using HTML, CSS, and JavaScript.
                </p>
                <p class="card-text"><strong>Features:</strong>  Supports basic arithmetic operations (addition, subtraction, multiplication, division) with a user-friendly interface.
                </p>
                <a href="#" class="btn btn-primary">Live Demo</a>
            </div>
        </div>

         <div class="card p-2 d-flex align-items-center" style={{width: "19rem"}}>
            <img src={stopWatch} style={{width:"250px",height:"200px"}} class="card-img-top " alt="..."/>
            <div class="card-body">
                <h5 class="card-title">StopWatch</h5>
                <p class="card-text"><strong>Description:</strong> A sleek and interactive stopwatch application developed using ReactJS.</p>
                <p class="card-text"><strong>Features:</strong> Start, pause, reset functionality, and a dynamic display to track elapsed time accurately.</p>
                <a href="#" class="btn btn-primary">Live Demo</a>
            </div>
        </div>

         <div class="card p-2 d-flex align-items-center" style={{width: "19rem" }}>
            <img src={todo} style={{width:"250px",height:"200px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">TODO List</h5>
                <p class="card-text"><strong>Description:</strong> A simple yet powerful task management application developed using ReactJS.
                </p>
                <p class="card-text"><strong>Features:</strong> Add, edit, and delete tasks with real-time updates and a clean, user-friendly interface.</p>
                <a href="#" class="btn btn-primary">Live Demo</a>
            </div>
        </div>
         <div class="card p-2 d-flex align-items-center" style={{width: "19rem"}}>
            <img src={weather} style={{width:"250px",height:"200px"}} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Weather</h5>
                <p class="card-text"><strong>Description:</strong> A weather forecast application built using JavaScript to display real-time weather data.
                </p>
                <p class="card-text"><strong>Features:</strong>Fetches live weather information for any location using APIs, displays temperature, humidity, and conditions with a clean UI.</p>
                <a href="#" class="btn btn-primary">Live Demo</a>
            </div>
        </div>
         <div class="card p-2 d-flex align-items-center" style={{width: "19rem"}}>
            <img src={Ola} style={{width:"250px",height:"200px"}} class="card-img-top " alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Ola Clone</h5>
                <p class="card-text"><strong>Description:</strong> A visually appealing clone of the Ola webpage designed using HTML and CSS.</p>
                <p class="card-text"><strong>Features:</strong>  Static page replicating the layout, design elements, and styling of the original Ola website.</p>
                <a href="#" class="btn btn-primary">Live Demo</a>
            </div>
        </div>
            
        </div>
        </>
    )
}
export default Project;