import './index.scss';
import SideBar from '../Sidebar';
import { Outlet } from 'react-router-dom';
import About from '../About';

const Layout = () => {
    return(
        <div className= 'App'>
        <SideBar/>
        <div className= 'page'>
            

            <Outlet/>

            
        </div>
        </div>
    ) 
}

export default Layout;

