import { Topbar } from "../components/Topbar"
import {Balance} from "../components/Balance"
import { Users } from "../components/Users"

import axios from "axios";
export function Dashboard(){
    // const [searchParams] = useSearchParams();

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


