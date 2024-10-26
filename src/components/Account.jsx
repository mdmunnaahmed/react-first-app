import { Link } from "react-router-dom";
import { useAuth } from "./../contexts/AuthContext";

const Account = () => {
  const { currentUser, logout } = useAuth();

  return (
    <div className="account">
      {currentUser ? (
        <>
          <span>{currentUser.displayName || "User"}</span> {/* Fallback if displayName is null */}
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
            style={{ cursor: "pointer" }} // Optional: Cursor change for better UX
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Account;
