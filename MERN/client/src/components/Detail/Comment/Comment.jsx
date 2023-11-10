import { useContext } from "react";

import { Typography, Box, styled } from "@mui/material";
import { Delete } from '@mui/icons-material';

import { API } from '../../../service/api';
import { DataContext } from "../../../context/DataProvider";

const Component = styled(Box)`
    margin-top: 30px;
    background: #F5F5F5;
    padding: 10px;
`;

const Container = styled(Box)`
    display: flex;
    margin-bottom: 5px;
`;

const Name = styled(Typography)`
    font-weight: 600,
    font-size: 18px;
    margin-right: 20px;
`;

const StyledDate = styled(Typography)`
    font-size: 14px;
    color: #878787;
`;

const DeleteIcon = styled(Delete)`
    margin-left: auto;
`;

const Comment = ({ comment, setToggle }) => {

    const { account } = useContext(DataContext)

    const removeComment = async () => {
        await API.deleteComment(comment._id);
        setToggle(prev => !prev);
    }

    return (
        <div className="p-2.5 bg-gray-400 mt-8">
            <div className="flex mb-3">
                <h1 className="mr-5 font-semibold text-lg">{comment.name}</h1>
                <h1 className="  text-base ">{new Date(comment.date).toDateString()}</h1>
                {comment.name === account.username && <DeleteIcon onClick={() => removeComment()} />}
            </div>
            <p>{comment.comments}</p>
        </div>
    )
}

export default Comment;