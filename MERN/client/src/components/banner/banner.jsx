
import { styled, Box, Typography } from '@mui/material';
import '../banner/banner.css'

// const Image = styled(Box)`
//     width: 100%;
//     background: url(https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg) center/55% repeat-x #000;
//     height: 50vh;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;

// const Heading = styled(Typography)`
//     font-size: 70px;
//     color: #FFFFFF;
//     line-height: 1
// `;

// const SubHeading = styled(Typography)`
//     font-size: 20px;
//     background: #FFFFFF;
// `;

const Banner = () => {

    return (
        // <div className='flex flex-row'>

        //     <img
        //         src="https://tecdn.b-cdn.net/img/new/slides/041.jpg"
        //         class="h-auto max-w-full"
        //         alt="..." />
        //     {/* <Heading>BLOG</Heading>
        //     <SubHeading>Code for Interview</SubHeading> */}
        //     <h1 className='font-bold text-white text-7xl'>BLOG</h1>
        //     <h1 className='text-lg font-semibold text-white'>Comforto</h1>


        // </div>

        <div className="relative">
            <img className='object-fill w-full bg-center bg-no-repeat h-96' src="https://www.calmsage.com/wp-content/uploads/2020/01/best-Inspiration-Quotes-768x545.jpg" />
            <h1 className="absolute pb-3 font-bold text-white -translate-x-1/2 -translate-y-1/2 text-7xl top-1/2 left-1/2">
                BLOGS
                <br></br>
                <br></br>
                <h1 className="absolute pb-3 text-lg font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">

                    Comforto
                </h1>
            </h1>



        </div>
    )
}

export default Banner;