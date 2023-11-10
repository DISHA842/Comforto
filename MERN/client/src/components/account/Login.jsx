import React, { useState, useEffect, useContext } from 'react';

import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState('');
    const [account, toggleAccount] = useState('login');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    useEffect(() => {
        showError(false);
    }, [login])

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        let response = await API.userLogin(login);
        if (response.isSuccess) {
            showError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });

            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            showError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            showError('Something went wrong! please try again later');
        }
    }

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <div className='px-60'>
            {
                account === 'login' ?
                    <div className="flex flex-col w-full">


                        <h1 className="w-full mb-8 text-3xl font-bold tracking-wider text-gray-600 px-9">
                            Sign in
                        </h1>
                        <div className="py-2 text-left w-80 px-9">
                            <input value={login.username} onChange={(e) => onValueChange(e)} name='username' type="text" className="block w-full px-4 py-2 bg-gray-100 bg-gray-200 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-700 " placeholder="Email" />
                        </div>
                        <div className="py-2 text-left w-80 px-9">
                            <input value={login.password} onChange={(e) => onValueChange(e)} name='password' type="password" className="block w-full px-4 py-2 bg-gray-100 bg-gray-200 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-700 " placeholder="Password" />
                        </div>
                        <div className="px-16 py-2">
                            <button onClick={() => loginUser()} type="submit" className="block w-40 p-2 font-bold tracking-wider text-white bg-purple-600 border-2 border-gray-100 rounded-lg px-9 focus:outline-none focus:border-gray-700 hover:bg-purple-700">
                                Log In
                            </button>



                            <div className="mt-12 text-center">
                                <span>
                                    Don't have an account?
                                </span>
                                <button onClick={toggleSignup} className="font-light font-semibold text-indigo-600 underline text-md hover:text-indigo-800">Create One</button>
                            </div>

                        </div>
                    </div>
                    :
                    <div className='flex flex-col w-full'>


                        <h1 className="w-full mb-8 text-3xl font-bold tracking-wider text-gray-600 px-9">
                            Sign Up
                        </h1>
                        <div className="py-2 text-left w-80 px-9">
                            <input onChange={(e) => onInputChange(e)} name='name' type="text" className="block w-full px-4 py-2 bg-gray-100 bg-gray-200 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-700 " placeholder="Name" />
                        </div>
                        <div className="py-2 text-left w-80 px-9 ">
                            <input onChange={(e) => onInputChange(e)} name='username' type="text" className="block w-full px-4 py-2 bg-gray-100 bg-gray-200 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-700 " placeholder="Email" />
                        </div>
                        <div className="py-2 text-left w-80 px-9">
                            <input onChange={(e) => onInputChange(e)} name='password' type="password" className="block w-full px-4 py-2 bg-gray-100 bg-gray-200 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-gray-700 " placeholder="Password" />
                        </div>
                        {error && <h1>{error}</h1>}
                        <div className="px-16 py-2">
                            <button onClick={() => signupUser()} type="submit" className="block w-40 p-2 font-bold tracking-wider text-white bg-purple-600 border-2 border-gray-100 rounded-lg px-9 focus:outline-none focus:border-gray-700 hover:bg-purple-700">
                                Sign Up
                            </button>




                            <div className="mt-12 text-center">
                                <span>
                                    Have an account?
                                </span>
                                <button onClick={toggleSignup} className="font-light font-semibold text-indigo-600 underline text-md hover:text-indigo-800">Log In</button>
                            </div>
                        </div>

                    </div>
            }






        </div>
    )
}

export default Login;