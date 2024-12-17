import { useState } from "react"

function Task(){
    const [birthOfYear,setBirthOfYear]=useState()
    const [birthOfMOnth,setBirthOfMonth]=useState()
    const [birthOfDate,setBirthOfDate]=useState()
    const [age,setAge]=useState()
    const [date,setDate]=useState()
    const [month,setMonth]=useState()
    function handleYear(event){
        setBirthOfYear(Number(event.target.value))
    }
    function handleMonth(event){
        setBirthOfMonth(Number(event.target.value))
    }
    function handleDate(event){
        setBirthOfDate(Number(event.target.value))
    }
    function dates(){
        const dates=new Date
        const currentDate=dates.getDate()
        const currentYear=dates.getFullYear()
        const currentMonth=dates.getMonth()
        const previousDays=new Date(currentYear,currentMonth,0).getDate()
        
        
     
       setAge(()=>{
        return currentYear-birthOfYear
        
       })
       setDate(()=>{
        return currentDate - birthOfDate+previousDays
       })
       setMonth(()=>{
        return currentMonth-birthOfMOnth
       })

     
       
     
      
    
    }
    return(
        <>
        <h1>Hello</h1>
        <input type="text" name="birthYear" value={birthOfYear} onChange={handleYear} placeholder="Year"/> 
        <input type="text" name="birthMonth" value={birthOfMOnth} onChange={handleMonth} placeholder="Month"/> 
        <input type="text" name="birthDate" value={birthOfDate} onChange={handleDate} placeholder="Date"/> 
        <button onClick={dates}>clc</button>

       
      <div>
        <p>{`${age}Years ${month}Months ${date}Days`}</p>
      </div>
        
            

       

       
      
        
        </>
    )
}
export default Task