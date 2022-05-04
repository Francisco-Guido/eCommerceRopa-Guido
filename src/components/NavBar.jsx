import CartWidget from "./CartWidget";
import {Link} from "react-router-dom"

const NavBar = () => {
  return (
    <div class="flex flex-wrap pb-1">
      <div class="flex w-1/2">
      <Link to={'/'}>        
          <img src="/logoStyle.PNG" className="object-cover h-20 w-30" />
        </Link>
        
      </div>
      <CartWidget />
      <div className="flex justify-around align-center w-full mb-5">
      <div className="flex w-2/3 justify-around">       
      <Link to={'/'} className="list-none font-bold text-xl text-gray-500 hover:text-black">Catálogo</Link>
      <Link to={`/category/remera`} className="list-none font-bold text-xl text-gray-500 hover:text-black">Remeras</Link>
      <Link to={`/category/buzo`} className="list-none font-bold text-xl text-gray-500 hover:text-black">Buzos</Link>       
      </div>
      </div>
      
    </div>
  );
};

export default NavBar;
