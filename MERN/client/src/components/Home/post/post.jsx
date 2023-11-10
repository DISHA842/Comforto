
// import { styled, Box, Typography } from '@mui/material';
import { addEllipsis } from "../../../utils/common-utils";

// const Container = styled(Box)`
//     border: 1px solid #d3cede;
//     border-radius: 10px;
//     margin: 10px;
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     height: 350px;
//     & > img, & > p {
//         padding: 0 5px 5px 5px;
//     }
// `;

// const Image = styled('img')({
//     width: '100%',
//     objectFit: 'cover',
//     borderRadius: '10px 10px 0 0',
//     height: 150
// });

// const Text = styled(Typography)`
//     color: #878787
//     font-size: 12px;
// `;

// const Heading = styled(Typography)`
//     font-size: 18px;
//     font-weight: 600
// `;

// const Details = styled(Typography)`
//     font-size: 14px;
//     word-break: break-word;
// `;

const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://www.calmsage.com/wp-content/uploads/2020/01/best-Motivational-Quotes-768x545.jpg';
    // const url = ''
    // const addEllipsis = (str, limit) => {
    //     return str.length > limit ? str.substring(0, limit) + '...' : str;
    // }

    return (
        // <Container>
        //     <Image src={url} alt="post" />
        //     <Text>{post.categories}</Text>
        //     <Heading>{addEllipsis(post.title, 20)}</Heading>
        //     <Text>Author: {post.username}</Text>
        //     <Details>{addEllipsis(post.description, 100)}</Details>
        // </Container>
        <div className="flex flex-col items-center h-auto border-2 border-solid rounded-md w-96 border-slate-300">
            <img classname="object-fill" src={url} alt="post" />
            <h1 className="text-lg text-bold ">{post.categories}</h1>
            <h1 className="text-xl text-bold">{addEllipsis(post.title, 15)}</h1>
            <h1 className="text-bold text-md">Author: {post.username}</h1>
            <div className="text-base break-words">{addEllipsis(post.description, 15)}</div>
        </div>
        // <h1>hello</h1>
    )
}

export default Post;