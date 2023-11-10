import Banner from "../banner/banner";
import Header from "../header/Header";
import Categories from "./Category";
import Posts from "./post/posts";

const Home = () => {
    return (
        <>

            <Banner className='mb-2'></Banner>
            <div className="grid grid-cols-4 gap-4 mt-2">
                <div className="col-span-1">
                    <Categories></Categories>
                </div>
                <div className="col-span-3">
                    <Posts></Posts>
                </div>

            </div>

        </>
    )
}

export default Home;