import {useState} from 'react';
import axios from 'axios';

const SignUp = ({setToken}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [message, setMessage] = useState('');

    const { name, email, password, confirmPassword } = formData;

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
        
        // if(name != '' || email != '' || password != '' || confirmPassword != '') {
        //    alert('Enter the value in field')
        //     return;
        // }

        // if(password !== confirmPassword) {
        //     alert('Password is not matching')
        //     return
        // }

        axios.post('https://instagram-express-app.vercel.app/api/auth/signup', {
            name: name,
            email: email,
            password: password
        })
        .then(res => {
            console.log(res);
            setMessage(res.data.message)
            setToken(res.data.data.token)
            setFormData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        })
        .catch(err => setMessage(err.response.data.message))

        console.log(formData);
    }

    return(
        <>
            <h2>Sign Up</h2>
            <form>
                <input type="text" onChange={handleChange} placeholder="Name" name="name"  value={name}/>
                <input type="email" placeholder="Email" onChange={handleChange} name="email" value={email} />
                <input type="password" placeholder="Password" onChange={handleChange} name="password" value={password} />
                <input type="password" placeholder="Confirm Password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            {message && (<h2>{message}</h2>)}
        </>
    )
}

export default SignUp;