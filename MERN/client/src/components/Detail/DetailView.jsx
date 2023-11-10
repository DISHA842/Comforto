import { useState, useEffect, useContext } from 'react';

import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom'

import { API } from '../../service/api';

import { DataContext } from '../../context/DataProvider';
import Comments from './Comment/Comments';



const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const EditIcon = styled(Edit)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
    margin: 5px;
    padding: 5px;
    border: 1px solid #878787;
    border-radius: 10px;
`;

const Heading = styled(Typography)`
    font-size: 38px;
    font-weight: 600;
    text-align: center;
    margin: 50px 0 10px 0;
`;

const Author = styled(Box)(({ theme }) => ({
    color: '#878787',
    display: 'flex',
    margin: '20px 0',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    },
}));

const DetailView = () => {
    const url = 'https://www.calmsage.com/wp-content/uploads/2020/01/best-Motivational-Quotes-768x545.jpg';

    const [post, setPost] = useState({});
    const { account } = useContext(DataContext);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getPostById(id);
            if (response.isSuccess) {
                setPost(response.data);
            }
        }
        fetchData();
    }, []);



    const deleteBlog = async () => {
        await API.deletePost(post._id);
        navigate('/')
    }

    return (
        // <Container>
        //     <Image src={post.picture || url} alt="post" />
        //     <Box style={{ float: 'right' }}>
        //         {
        //             account.username === post.username &&
        //             <>
        //                 <Link to={`/update/${post._id}`}><EditIcon color="primary" /></Link>
        //                 <DeleteIcon onClick={() => deleteBlog()} color="error" />
        //             </>
        //         }
        //     </Box>
        //     <Heading>{post.title}</Heading>

        //     <Author>
        //         <Link to={`/?username=${post.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        //             <Typography>Author: <span style={{ fontWeight: 600 }}>{post.username}</span></Typography>
        //         </Link>
        //         <Typography style={{ marginLeft: 'auto' }}>{new Date(post.createdDate).toDateString()}</Typography>
        //     </Author>

        //     <Typography>{post.description}</Typography>
        //     {/* <Comments post={post} /> */}
        // </Container>
        <div className='mx-2 my-4 mt-4'>
            <img className='object-fill w-full h-96' src={post.picture || url} alt='blog' />
            {/* <div style={{ float: 'right' }}>
                {
                    account.username === post.username &&
                    <>
                        <Link to={`/update/${post._id}`}><EditIcon color="primary" /></Link>
                        <DeleteIcon onClick={() => deleteBlog()} color="error" />
                    </>
                }


            </div> */}
            <Box style={{ float: 'right' }}>
                {
                    account.username === post.username &&
                    <>
                        <Link to={`/update/${post._id}`}><EditIcon color="primary" /></Link>
                        <DeleteIcon onClick={() => deleteBlog()} color="error" />
                    </>
                }
            </Box>
            <h1 className='mt-4 text-2xl font-extrabold text-center break-words'>{post.title}</h1>
            <div className='flex'>
                <h1 className='text-lg font-semibold'>{post.username}</h1>
                <h1 style={{ marginLeft: 'auto' }}>{new Date(post.createdDate).toDateString()}</h1>
            </div>
            <h1 className='text-base font-light break-words '>{post.description}</h1>
            <Comments post={post} />
        </div>
    )
}

export default DetailView;