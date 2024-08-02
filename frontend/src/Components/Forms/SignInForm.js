import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../UserContext/UserContext';

function SignInForm({ close, SignStat }) {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        phone: '',

    });
    const [authData, setAuthData] = useState({

        emailAuth: '',
        passwordAuth: '',

    });


    const { user, setUser } = useContext(UserContext)

    const handleChangeAuth = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSuccess = (clientData) => {
        // Save client data to localStorage
        localStorage.setItem('clientData', JSON.stringify(clientData));
        // Do something after successful registration/authentication (e.g., redirect, update UI)

        console.log('Client data stored in localStorage:', clientData);
        setUser(clientData)
        setFormData({
            name: '',
            surname: '',
            email: '',
            password: '',
            phone: ''

        })
        setAuthData({
            emailAuth: '',
            passwordAuth: ''
        });
    };

    const handleSubmitAuth = async (e) => {
        e.preventDefault();
        const { emailAuth, passwordAuth } = authData;
        try {
            const response = await fetch('http://localhost:7000/authenticate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ emailAuth, passwordAuth })
            });
            if (response.ok) {
                // Registration/authentication successful, save client data
                const clientData = await response.json();
                handleSuccess(clientData);
                alert('Hello !!!')


            } else {
                // Registration/authentication failed, handle error
                console.error('Authentication failed');
                alert(`erreur in ${emailAuth} or your password : ${passwordAuth} -_# hhhhhhh `)

            }
        } catch (error) {
            console.error(error);
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, surname, email, phone, password } = formData;
        try {
            const response = await fetch('http://localhost:7000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, surname, email, phone, password })
            });
            if (response.ok) {
                // Registration successful, do something
                const clientData = await response.json();
                handleSuccess(clientData)
                console.log('Registered client:', name, surname);
                alert(`${surname} now log in to ensure your account`)
            } else {
                // Registration failed, handle error
                console.error('Registration failed');
                alert(`${email} already exists -_# change it mister ${surname}`)

            }
        } catch (error) {
            console.error(error);
        }
    };

    const CloseModal = () => {
        close()
    }

    useEffect(() => {
        const storedUserData = localStorage.getItem('clientData')
        if (storedUserData) {
            const clientData = JSON.parse(storedUserData)
            console.log(clientData)
            setUser(clientData)

        }
    }, [])


    return (
        <div className='flex flex-wrap justify-center items-center]'>
            {SignStat ?
                <>
                    <form className='grid justify-start items-start' onSubmit={handleSubmitAuth}>
                        <span className='flex flex-wrap justify-start items-center'>Email :</span>
                        <input className='py-2 rounded-md shadow-md border px-2 mb-4 w-[20rem]' type="email" value={authData.emailAuth} name="emailAuth" onChange={handleChangeAuth} placeholder="Email" required />
                        <span className='flex flex-wrap justify-start items-center'>Password :</span>
                        <input className='py-2 rounded-md shadow-md border px-2 mb-4 w-[20rem]' type="password" value={authData.passwordAuth} name="passwordAuth" onChange={handleChangeAuth} placeholder="Password" required />
                        <button className='py-2 px-2 rounded-lg shadow-md border hover:bg-indigo-900 bg-indigo-500 text-white' onClick={CloseModal} type="submit">Submit</button>
                    </form>
                </>
                :
                <>
                    <form className='grid justify-start items-start' onSubmit={handleSubmit}>
                        <span className='flex flex-wrap justify-start items-center'>Prenom :</span>
                        <input className='py-2 rounded-md shadow-md border px-2 mb-2 w-[20rem]' type="text" value={formData.surname} name="surname" onChange={handleChange} placeholder="Prenom" required />
                        <span className='flex flex-wrap justify-start items-center'>Nom :</span>
                        <input className='py-2 rounded-md shadow-md border px-2 mb-2 w-[20rem]' type="text" value={formData.name} name="name" onChange={handleChange} placeholder="Name" required />
                        <span className='flex flex-wrap justify-start items-center'>Email :</span>
                        <input className='py-2 rounded-md shadow-md border px-2 mb-2 w-[20rem]' type="email" value={formData.email} name="email" onChange={handleChange} placeholder="Email" required />
                        <span className='flex flex-wrap justify-start items-center'>Telephone</span>
                        <input className='py-2 rounded-md shadow-md border px-2 mb-2 w-[20rem]' type="tel" value={formData.phone} name="phone" onChange={handleChange} placeholder="Telephone" />
                        <span className='flex flex-wrap justify-start items-center'>Password :</span>
                        <input className='py-2 rounded-md shadow-md border px-2 mb-2 w-[20rem]' type="password" value={formData.password} name="password" onChange={handleChange} placeholder="Password" required />
                        <button className='py-2 px-2 rounded-lg shadow-md border hover:bg-indigo-900 bg-indigo-500 text-white' onClick={CloseModal} type="submit">Submit</button>
                    </form>
                </>
            }

        </div >
    );
}

export default SignInForm;