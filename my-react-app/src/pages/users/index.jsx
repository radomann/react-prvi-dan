import { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"

export const UsersPage = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        console.log("redirect to about");
        navigate("/about")
    },[])

    return <>
        {/* <Navigate to="/" /> */}
        <h1>Users page</h1>
        <p>User ID: {id}</p>
    </>
}