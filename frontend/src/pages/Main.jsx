import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Main = () => {
    const navigate = useNavigate()
    
    useEffect(() => {
        navigate('/admin')
    }, [])

    return (
        <div>Main</div>
    )
}

export default Main