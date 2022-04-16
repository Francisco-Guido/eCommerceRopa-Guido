import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div class="navbar">
      <div class="flex-1">
        <a>
          <img src="logoAuto.PNG" class="object-cover h-16 w-30" />
        </a>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
