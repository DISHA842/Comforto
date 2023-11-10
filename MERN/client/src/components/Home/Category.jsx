
import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';


import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
    border: 1px solid rgba(224, 224, 224, 1);
`;

const StyledButton = styled(Button)`
    margin: 20px;
    width: 85%;
    background: #6495ED;
    color: #fff;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const Categories = () => {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    return (
        <>
            <Link className='px-2' to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
                <button className="px-20 py-4 mt-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    Create Blog
                </button>
            </Link>



            <div className="flex flex-col mt-2">
                <div className="overflow-x-auto sm:-mx-2 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-2 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-sm font-light text-left border border-collapse border-slate-400">
                                <thead className="font-medium border-b dark:border-neutral-500">
                                    <tr>
                                        <Link className="px-2 text-black hover:text-blue-900" to="/">
                                            <th scope="col" className="px-6 py-4">All Categories</th>
                                        </Link>



                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr className="border-b dark:border-neutral-500">
                                        <td className="px-6 py-4 whitespace-nowrap">Mark</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Otto</td>
                                        <td className="px-6 py-4 whitespace-nowrap">@mdo</td>
                                    </tr> */}
                                    {
                                        categories.map(category => (
                                            <tr className="border-b dark:border-neutral-500" key={category.id}>
                                                <td className="px-4 py-4 whitespace-nowrap">

                                                    <Link className="px-2 text-black hover:text-blue-900" to={`/?category=${category.type}`}>{category.type}</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories;