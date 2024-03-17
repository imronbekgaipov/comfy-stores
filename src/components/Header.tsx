function Header() {
  return (
    <header className="w-full h-10 bg-base-300">
      <div className="max-container items-center h-full flex justify-end gap-x-6">
        <p>Hello, user</p>
        <button className="btn btn-xs  btn-outline">Logout</button>
      </div>
    </header>
  );
}
export default Header;
