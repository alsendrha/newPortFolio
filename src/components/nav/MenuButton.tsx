type MenuButtonProps = {
  onClick: () => void;
  menuOpen: boolean;
};

const MenuButton = ({ onClick, menuOpen }: MenuButtonProps) => {
  return (
    <div
      className="w-[40px] h-[35px] justify-between  cursor-pointer relative hidden max-[1000px]:block"
      onClick={onClick}
    >
      <div
        className={`absolute w-full h-[4px] top-0 bg-white rounded-full transformation ${
          menuOpen ? "top-1/2 -translate-y-1/2 rotate-[45deg]" : ""
        }`}
      />
      <div
        className={`absolute w-full h-[4px] top-1/2 -translate-y-1/2 bg-white rounded-full transformation ${
          menuOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`absolute w-full h-[4px] bottom-0 bg-white rounded-full transformation ${
          menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : ""
        }`}
      />
    </div>
  );
};

export default MenuButton;
