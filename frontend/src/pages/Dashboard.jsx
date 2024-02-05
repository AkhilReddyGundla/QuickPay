import { Topbar } from "../components/Topbar"
import {Balance} from "../components/Balance"
import { Users } from "../components/Users"
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { Button } from "../components/Button";
export function Dashboard(){
    const navigate = useNavigate();
=======
// import { useSearchParams } from 'react-router-dom';
import axios from "axios";
export function Dashboard(){
    // const [searchParams] = useSearchParams();
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
    const firstName = localStorage.getItem("firstName")
    
    return (
       <>
<<<<<<< HEAD
            <div className="flex">
                <Topbar username = {firstName} logout="true"/>
            </div>
            
=======
            <Topbar username = {firstName}/>
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
            <Balance/>
            <Users/>
       </>
    )
<<<<<<< HEAD
   
=======
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
}


