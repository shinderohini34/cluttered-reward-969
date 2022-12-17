import { useState } from "react"
import "./Signin.css"
import {Link} from "react-router-dom"
export const SignIn =()=>{
    const [signdown,setSigndown] = useState(false)
    return(
        <div className={signdown?"signdown_clicked":"signdown"} onClick={()=>{
            setSigndown(!signdown)
        }} >
           <div className="members" ><h2>Members can access discounts,
                points and special features</h2></div>
           <div className="sign-button" >
              <Link to="/login" ><button className="button-link" >Sign in</button></Link> 
               <h2>Create a free account</h2>
           </div>
           <div className="sign-txt" >
               <p>List of favourites</p>
               <p>Loyalty Program</p>
           </div>
           <hr></hr>
           <div className="feedback" >
               <p>Feedback</p>
           </div>
        </div>

        )}