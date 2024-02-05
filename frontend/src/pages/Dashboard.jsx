import { Topbar } from "../components/Topbar"
import {Balance} from "../components/Balance"
import { Users } from "../components/Users"
import { useNavigate } from "react-router-dom";
// import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { Button } from "../components/Button";
export function Dashboard(){
    const navigate = useNavigate();
    const firstName = localStorage.getItem("firstName")
    
    return (
       <>
            <div className="flex">
                <Topbar username = {firstName} logout="true"/>
            </div>
            
            <Balance/>
            <Users/>
       </>
    )
   
}


