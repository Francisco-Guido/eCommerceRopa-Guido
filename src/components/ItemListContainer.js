import ItemCount from "./ItemCount";

const ItemListContainer = ({ name }) => {
  return (
    <div>
      <h1>Hola, {name}</h1>
      <ItemCount />
    </div>
  );
};

export default ItemListContainer;
