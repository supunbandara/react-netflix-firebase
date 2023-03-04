import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <div className="text-4xl">
        <Link to="/">
          <img className="w-32" src={logo} alt="" />
        </Link>
      </div>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white border-2 px-6 py-2 mr-3 rounded border-white">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer border-2 border-red-600 text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white border-2 px-6 py-2 mr-3 rounded border-white">
              Sign In
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer border-2 border-red-600 text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
