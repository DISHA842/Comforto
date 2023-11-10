import { useState, useEffect, useContext } from 'react';
import { Box, TextareaAutosize, Button, styled } from '@mui/material';

import { DataContext } from '../../../context/DataProvider';

import { API } from '../../../service/api';

//components
import Comment from './Comment';

// const Container = styled(Box)`
//     margin-top: 100px;
//     display: flex;
// `;

// const Image = styled('img')({
//     width: 50,
//     height: 50,
//     borderRadius: '50%'
// });

// const StyledTextArea = styled(TextareaAutosize)`
//     height: 100px !important;
//     width: 100%; 
//     margin: 0 20px;
// `;

const initialValue = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

const Comments = ({ post }) => {
    const url = 'https://static.thenounproject.com/png/12017-200.png'

    const [comment, setComment] = useState(initialValue);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    const { account } = useContext(DataContext);

    useEffect(() => {
        const getData = async () => {
            const response = await API.getAllComments(post._id);
            if (response.isSuccess) {
                setComments(response.data);
            }
        }
        getData();
    }, [toggle, post]);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: account.username,
            postId: post._id,
            comments: e.target.value
        });
    }

    const addComment = async () => {
        await API.newComment(comment);
        setComment(initialValue)
        setToggle(prev => !prev);
    }

    return (
        <div>
            <div className='flex flex-row mt-12'>
                <img className=' w-12 h-12 rounded-md' src={url} alt="dp" />
                <textarea className='h-full w-full m-3 p-2'
                    rowsMin={5}
                    placeholder="what's on your mind?"
                    onChange={(e) => handleChange(e)}
                    value={comment.comments}
                />
                <button
                    className='px-4 text-white bg-blue-500 rounded py-2 font-bold hover:bg-blue-700'
                    variant="contained"
                    color="primary"
                    size="medium"
                    style={{ height: 40 }}
                    onClick={(e) => addComment(e)}
                >Post</button>
            </div>
            <div>
                {
                    comments && comments.length > 0 && comments.map(comment => (
                        <Comment comment={comment} setToggle={setToggle} />
                    ))
                }
            </div>
        </div>
    )
}

export default Comments;