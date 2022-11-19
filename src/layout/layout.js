import { NavLink, Outlet } from "react-router-dom";
function Layout() {
    return (
        <>
            <div className="Layout">
                <NavLink className="nav-link" to='overview'>Overview</NavLink>
                <NavLink className="nav-link" to='stepComponent'>stepComponent</NavLink>
            </div>
            <Outlet />
        </>);
}

export default Layout;