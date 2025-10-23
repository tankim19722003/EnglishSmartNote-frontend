import postIt from "../assets/post-it.png"; 

const Header = () => {
  return (
    <header className="w-full z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-8 py-4 flex items-center justify-center shadow-md font-sans hover:bg-[#3AB28A] transition-colors duration-200 fixed top-0 h-14">
      <h1 className="m-0 text-xl font-semibold tracking-wide flex items-center">
        <img src={postIt} alt="Post-it icon" className="w-6 h-6 mr-2" />
        Smart Note
      </h1>
    </header>
  );
};

export default Header;