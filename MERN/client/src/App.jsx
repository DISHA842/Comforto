
import { Routes, Route, Router } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Outlet, Navigate } from 'react-router-dom';
import './index.css'
import Login from './components/account/Login';
import DataProvider from './context/DataProvider';
import Home from './components/Home/Home';
import Header from './components/header/Header';
import CreatePost from './components/create/CreatePost';
import DetailView from './components/Detail/DetailView';
import UpdatePost from './components/create/Update';
import Contact from './components/contact/contact';
import About from './components/About/About';

const PrivateRoute = ({ isAuthenticated, ...props }) => {
    const token = sessionStorage.getItem('accessToken');
    return isAuthenticated && token ?
        <>
            <Header />
            <Outlet />
        </> : <Navigate replace to='/login' />
};

function App() {
    const [isAuthenticated, isUserAuthenticated] = useState(false);
    return (
        <DataProvider>
            <BrowserRouter>

                <div className="">
                    <Routes>
                        <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
                        {/* <Login></Login> */}

                        <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                            <Route path='/' element={<Home />} />
                        </Route>
                        <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                            <Route path='/create' element={<CreatePost />} />
                        </Route>
                        <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                            <Route path='/details/:id' element={<DetailView />} />
                        </Route>
                        <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
                            <Route path='/update/:id' element={<UpdatePost />} />
                        </Route>
                        <Route path='/contact'   >
                            <Route path='/contact' element={<Contact />} />
                        </Route>
                        <Route path='/about' >
                            <Route path='/about' element={<About />} />
                        </Route>
                    </Routes>
                </div>

            </BrowserRouter>
        </DataProvider>
    )
}

export default App;
