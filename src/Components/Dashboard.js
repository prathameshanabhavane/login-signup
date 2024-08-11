import axios from "axios";
import { useState } from "react";

const Dashboard = ({token}) => {
    let [name, setName] = useState("");
    let [message, setMessage] = useState("");

    const getJoke = () => {
        axios.get('https://instagram-express-app.vercel.app/api/auth/zuku', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setMessage(res.data.data.message)
            setName(res.data.data.user.name)
        })
        .catch(err => console.log(err.response.data.message))
    }

    return(
        <div>
            <h2>Dashboard</h2>
            <h1>Good Morning, {name}</h1>
            <button onClick={getJoke}>Get Joke</button>
            <p>{message}</p>
        </div>
    )
}

export default Dashboard;