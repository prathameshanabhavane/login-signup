import {useState} from 'react';
import axios from 'axios';

const Login = ({setToken}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [message, setMessage] = useState('');

    const { email, password } = formData;

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('https://instagram-express-app.vercel.app/api/auth/login', {
            email: email,
            password: password
        })
        .then(res => {
            console.log(res);
            setMessage(res.data.message)
            setToken(res.data.data.token)
            setFormData({
                email: '',
                password: '',
            })
        })
        .catch(err => setMessage(err.response.data.message))

        console.log(formData);
    }

    return(
        <>
            <h2>Login</h2>
            <form>
                <input type="email" placeholder="Email" onChange={handleChange} name="email" value={email} />
                <input type="password" placeholder="Password" onChange={handleChange} name="password" value={password} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            {message && (<h2>{message}</h2>)}
        </>
    )
}

export default Login;