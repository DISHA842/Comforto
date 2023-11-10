
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';


// const Component = styled(AppBar)`
//     background: #FFFFFF;
//     color: black;
// `;

// const Container = styled(Toolbar)`
//     justify-content: center;
//     & > a {
//         padding: 20px;
//         color: #000;
//         text-decoration: none;
//     }
// `

const Header = () => {

    const navigate = useNavigate();

    const logout = async () => navigate('/account');

    return (
        // <Component>
        //     <Container>
        //         <Link to='/'>HOME</Link>
        //         <Link to='/about'>ABOUT</Link>
        //         <Link to='/contact'>CONTACT</Link>
        //         <Link to='/account'>LOGOUT</Link>
        //     </Container>
        // </Component>
        <div className="flex justify-center p-6 bg-blue-300">

            <Link className="px-20 text-black hover:text-blue-900" to='/'>HOME</Link>


            <Link className="px-20 text-black hover:text-blue-900" to='/contact'>CONTACT</Link>


            <Link className="px-20 text-black hover:text-blue-900" to='/about'>ABOUT</Link>
            <Link className="px-20 text-black hover:text-blue-900" to='/login'>LOGOUT</Link>

        </div>
    )
}

export default Header;