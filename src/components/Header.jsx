import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <section className='flex justify-between items-center px-12 py-5 shadow-lg'>
            <div><h1 className='text-2xl font-extrabold'>AMAZON</h1></div>
            <nav>
                <ul className='flex gap-10 font-semibold'>
                    <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-400 px-4 py-2 rounded-lg text-white" : ""}>Home</NavLink></li>
                    <li><NavLink to="/products" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-400 px-4 py-2 rounded-lg text-white" : ""}>Products</NavLink></li>
                    <li><NavLink to="/dashboard" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "bg-red-400 px-4 py-2 rounded-lg text-white" : ""}>Dashboard</NavLink></li>
                </ul>
            </nav>
        </section>
    );
};

export default Header;