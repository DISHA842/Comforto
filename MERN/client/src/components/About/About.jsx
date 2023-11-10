
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

// const Banner = styled(Box)`
//     background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
//     width: 100%;
//     height: 50vh;
//     background-position: left 0px bottom 0px;
//     background-size: cover;
// `;

// const Wrapper = styled(Box)`
//     padding: 20px;
//     & > h3, & > h5 {
//         margin-top: 50px;
//     }
// `;

// const Text = styled(Typography)`
//     color: #878787;
// `;

const About = () => {

    return (
        <Box>
            <img src="https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg" className='object-fill w-full bg-left-top h-96'></img>
            <div>
                <h3 className='text-lg font-bold'>Comforto</h3>
                <h1 className='text-base font-semibold'>This is a website for helping those,
                    who are facing common health issues, they can connect and share in this platform
                </h1>

            </div>
        </Box>
    )
}

export default About;