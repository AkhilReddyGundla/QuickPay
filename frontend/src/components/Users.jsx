import { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'
import { Button } from "./Button"
import axios from 'axios'
// import { use } from "../../../backend/routes/accounts"
export function Users(){
<<<<<<< HEAD
    let time;
=======
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
    const navigate = useNavigate()
    const [filter,setFilter] = useState('')
    const [users,setUsers] = useState([])
    const currentUserName = localStorage.getItem("username")
    useEffect(()=>{
        axios.get('http://localhost:3000/api/v1/user/bulk?filter='+filter)
            .then(response =>{
                setUsers(response.data.users)
            })
    },[filter])
    return(
        <div className="mt-5 ml-4 mr-4">
            <div className="text-xl md:text-1.5xl lg:text-2xl font-bold">Users</div>
            <div className="mt-3">
<<<<<<< HEAD
                <input onInput={getUsers} placeholder="Search users..." className="w-full font-semibold p-3 border border-blue-600 rounded-lg"></input>
=======
                <input onChange={(e)=>setFilter(e.target.value)} placeholder="Search users..." className="w-full font-semibold p-3 border border-blue-600 rounded-lg"></input>
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
            </div>
            <div className="ml-1">
                {users.map((user,indx)=>{
                    return user.username === currentUserName ? null : <User key ={indx} user={user}/>
                })}
            </div>
        </div>
    )

<<<<<<< HEAD
    function getUsers(e){
        clearTimeout(time)
        time = setTimeout(()=>getFilteredUsers(e),500)
    }
    function getFilteredUsers(e){
        setFilter(e.target.value)
    }
    function User({user}){
        
        return(
            <div className="flex justify-between mt-4 odd:bg-slate-100 p-1 rounded-lg">
=======

    function User({user}){
        
        return(
            <div className="flex justify-between mt-4 odd:bg-slate-200 p-1 rounded-lg">
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
                <div className="flex items-center">
                    <div className="text-0.5xl md:text-xl lg:text-1.5xl font-semibold bg-blue-200 rounded-full flex items-center  mr-4 pr-3 pl-3 pt-1 pb-1" >{user.firstName.charAt(0).toUpperCase()}</div>
                    <div className="text-0.5xl md:text-xl lg:text-1.5xl flex items-center">{user.firstName}</div>
                </div>
                <div className="ml-10 mr-2">
                <Button onPress={(e) => navigate(`/send?id=${user._id}&name=${user.firstName}`)} text="Send Money" />
                </div>
            </div>
        )
        
    }
}