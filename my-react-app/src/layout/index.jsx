import { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const AppLayout = () => {
  const { user, handleUserLogout } = useContext(UserContext);
  const handleLinkClassName = ({ isActive }) =>
    isActive ? 'text-green-500' : '';

  return (
    <>
      <nav>
        <NavLink to="/" className={handleLinkClassName}>
          Home
        </NavLink>
        |
        <NavLink to="/about" className={handleLinkClassName} end>
          About
        </NavLink>
        |
        <NavLink to="/about/team" className={handleLinkClassName}>
          Team
        </NavLink>
        |
        <NavLink to="/users" className={handleLinkClassName}>
          Users
        </NavLink>
        |
        {user?.userId ? (
          <button
            className="px-2 py-1 bg-green-500 rounded-sm text-white ml-4"
            onClick={handleUserLogout}
          >
            Logout
          </button>
        ) : (
          <NavLink to="/login" className={handleLinkClassName}>
            Login
          </NavLink>
        )}
      </nav>
      <Outlet />
    </>
  );
};