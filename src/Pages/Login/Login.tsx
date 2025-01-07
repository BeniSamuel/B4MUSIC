import React from 'react'
import Regside from '../../Components/Regside/Regside'
import LoginCP from '../../Components/LoginCP/LoginCP'

const Login:React.FC = () => {
  return (
    <div className=' w-[100vw] md:flex flex-row h-[100vh]'>
        {/* regside component */}
        <Regside className=" h-full "/>
        {/* login component */}
        <LoginCP />
    </div>
  )
}

export default Login