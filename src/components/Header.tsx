import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { logout } from "../redux/user/userSlice";

function Header() {
  const dispatch = useAppDispatch();
  const { userData } = useSelector((store: RootState) => store.user);
  return (
    <header className="w-full h-10 bg-base-300">
      <div className="max-container items-center h-full flex justify-end gap-x-6">
        <p>
          Hello, {userData == "guest" ? "GUEST USER" : userData?.user.username}
        </p>
        <button
          onClick={() => {
            dispatch(logout());
          }}
          className="btn btn-xs  btn-outline"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
export default Header;
