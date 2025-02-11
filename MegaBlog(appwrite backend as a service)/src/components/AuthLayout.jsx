import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'

export default function Protected({children, authentication = true}) {

    const [loader, setLoader] = useState(true)

    const navigate = useNavigate()  
    const dispatch = useDispatch()  
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // easy way:
        // if(authStatus === true){
        //     navigate("/")
        // }else if(authStatus === false){
        //     navigate("/login")
        // }

        if(authentication && authStatus !== authentication) {
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate])
    return loader ? <h1>Loading....</h1> : <>{children}</>
}
