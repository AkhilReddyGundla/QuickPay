import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Dashboard } from './pages/Dashboard'
import {TransferMoney} from './pages/TransferMoney'
<<<<<<< HEAD
import { Suspense,lazy } from 'react'
const signup = lazy(()=>import("./pages/Signup"))
const signin = lazy(()=>import("./pages/Signin"))
const dashboard = lazy(()=>import("./pages/Dashboard"))
const send = lazy(()=>import("./pages/TransferMoney"))
=======
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path = '/signup' element = {<Suspense fallback={"Loading...."} ><Signup/></Suspense>}/>
          <Route path = '/signin' element = {<Suspense fallback={"Loading...."} ><Signin/></Suspense>}/>
          <Route path = '/dashboard' element = {<Suspense fallback={"Loading...."} ><Dashboard/></Suspense>}/>
          <Route path = '/send' element = {<Suspense fallback={"Loading...."} ><TransferMoney/></Suspense>}/>
=======
          <Route path = '/signup' element = {<Signup/>}/>
          <Route path = '/signin' element = {<Signin/>}/>
          <Route path = '/dashboard' element = {<Dashboard/>}/>
          <Route path = '/send' element = {<TransferMoney/>}/>
>>>>>>> 8b967ef16c2f9f47f87d5825b8e1105cd55a351b
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
