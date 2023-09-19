import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            
            <div className="h-[50px] bg-slate-500 flex justify-center items-center" >
                <Header></Header>
            </div>
            <div className="text-3xl text-center font-bold">
                This is home
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;