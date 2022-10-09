const NavButton = ({ title = "", link = "" }) => (
  <a href={link}>
    <div className="bg-[#000033] hover:bg-blue-700 text-white text-center font-semibold py-1 px-5 border border-blue-700 rounded">
      {title}
    </div>
  </a>
);

export default NavButton;
