import React, { useState, useEffect, useContext } from 'react';

import { styled, Box, TextareaAutosize, Button, InputBase, FormControl } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';


// const Container = styled(Box)(({ theme }) => ({
//     margin: '50px 100px',
//     [theme.breakpoints.down('md')]: {
//         margin: 0
//     }
// }));

// const Image = styled('img')({
//     width: '100%',
//     height: '50vh',
//     objectFit: 'cover'
// });

// const StyledFormControl = styled(FormControl)`
//     margin-top: 10px;
//     display: flex;
//     flex-direction: row;
// `;

// const InputTextField = styled(InputBase)`
//     flex: 1;
//     margin: 0 30px;
//     font-size: 25px;
// `;

// const Textarea = styled(TextareaAutosize)`
//     width: 100%;
//     border: none;
//     margin-top: 50px;
//     font-size: 18px;
//     &:focus-visible {
//         outline: none;
//     }
// `;

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const UpdatePost = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);
    const { id } = useParams();
    const url = post.picture ? post.picture : 'https://www.calmsage.com/wp-content/uploads/2020/01/Quotes-for-inspiration-768x545.jpg';
    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    }, []);
    useEffect(() => {
        const getImage = async () => {

            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                console.log("i");
                const response = await API.uploadFile(data);
                post.picture = response.data;
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file])

    const updateBlogPost = async (e) => {
        e.preventDefault()

        await API.updatePost(post);
        navigate(`/details/${id}`);
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }
    const printval = (e) => {
        setFile(e.target.files[0])
    }

    return (
        <div className='mx-12 my-24'>
            <img className='object-cover w-full h-96' src={url} alt="post" />

            <form className='flex flex-row mt-8'>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />

                </label>
                <input
                    type="file"
                    id="fileInput"
                    aria-describedby="file_input_help"
                    style={{ display: "none" }}
                    onChange={(e) => printval(e)}
                />
                <input value={post.title} className='flex-1 py-2 border-none outline-none border-slate-100' onChange={(e) => handleChange(e)} name='title' placeholder="Title" />
                <button className="px-4 text-white bg-blue-500 rounded py-2font-bold hover:bg-blue-700" onClick={(e) => updateBlogPost(e)} variant="contained" color="primary">Update</button>
            </form>

            <textarea
                value={post.description}
                className='w-full mt-12 outline-none'
                rowsMin={5}
                placeholder="Tell your story..."
                name='description'
                onChange={(e) => handleChange(e)}
            />
        </div>
    )
}

export default UpdatePost;