
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

// const Banner = styled(Box)`
//     background-image: url(http://mrtaba.ir/image/bg2.jpg);
//     width: 100%;
//     height: 50vh;
//     background-position: left 0px top -100px;
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


const Contact = () => {
    return (
        <div>
            <img src='http://mrtaba.ir/image/bg2.jpg' className='object-fill w-full bg-left-top h-96' />
            <div className='p-8'>
                <h3>Getting in touch is easy!</h3>
                <h5>
                    Reach out to me on
                    <Link href="https://www.instagram.com/abc/" color="inherit" target="_blank">
                        <Instagram />
                    </Link>
                    or send me an Email
                    <Link href="mailto:abc@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </h5>
            </div>
        </div>
    );
}

export default Contact;