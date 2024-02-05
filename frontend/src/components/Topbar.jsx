<<<<<<< HEAD

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function Topbar({username}){
    const navigate = useNavigate()
    const location = useLocation();
    return (
        <div className="shadow-lg flex justify-between h-16 w-full ">
            
            <div className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-600 flex items-center ml-4 ">QuickPay</div>
            {
            username ? 
                <div className="flex items-center gap-5 ">
                <div className="text-xl md:text-2xl lg:text-2xl font-semibold">Hello, {username}</div>
                {
                    
                    location.pathname == '/dashboard' ? (
                        <button onClick={logoutFromApplication} className="bg-blue-600 p-4 rounded-lg text-white font-bold text-lg">Logout</button>
                      ) : null
                      
                }
            </div> : 
=======
export function Topbar({username}){
    return (
        <div className="shadow-lg flex justify-between h-16 w-full ">
            <div className="text-xl md:text-2xl lg:text-4xl font-bold text-blue-600 flex items-center ml-4 ">QuickPay</div>
            {username ? 
            <div className="flex items-center gap-2 ">
            <div className="text-xl md:text-2xl lg:text-2xl font-semibold">Hello, {username}</div>
            <div className="text-xl md:text-2xl lg:text-2xl font-semibold bg-blue-100 rounded-full flex items-center ml-1 mr-4 p-3 h-1/2 ">{username.charAt(0).toUpperCase()}</div>
        </div> : 
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
            <div className="flex items-center mr-4">
                <div className="text-0.5xl md:text-1.5xl lg:text-2xl font-semibold">Hello, User </div>
            </div>
            }
            
        </div>
    )
<<<<<<< HEAD
    function logoutFromApplication(){
        localStorage.clear();
        navigate("/signup");
    }
=======
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
}