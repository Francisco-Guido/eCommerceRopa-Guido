import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div class="navbar">
      <div class="flex-1">
        <a>
          <img src="logoStyle.PNG" class="object-cover h-20 w-30" />
        </a>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
