export const productList = [
  {
    name: "Remera amarilla",
    price: 1800,
    urlPicture: "/remeramarilla.jpg",
    stock: 11,
    id: 2,
    category: "remera",
    desc: "En este lugar iría la descripcion del producto. En este momento estamos pensando que ingresar para que este <p> sea más llamativo :)",
  },
  {
    name: "Remera naranja",
    price: 1800,
    urlPicture: "/remeranaranja.png",
    stock: 15,
    id: 3,
    category: "remera",
    desc: "En este lugar iría la descripcion del producto. En este momento estamos pensando que ingresar para que este <p> sea más llamativo :)",
  },
  {
    name: "Remera estampada",
    price: 2100,
    urlPicture: "/otraremera.jpg",
    stock: 12,
    id: 4,
    category: "remera",
    desc: "En este lugar iría la descripcion del producto. En este momento estamos pensando que ingresar para que este <p> sea más llamativo :)",
  },
  {
    name: "Buzo NASA",
    price: 7000,
    urlPicture: "/buzonasa.png",
    stock: 8,
    id: 5,
    category: "buzo",
    desc: "En este lugar iría la descripcion del producto. En este momento estamos pensando que ingresar para que este <p> sea más llamativo :)",
  },
  {
    name: "Buzo rosa TRASHER",
    price: 6200,
    urlPicture: "/buzorosa.jpg",
    stock: 5,
    id: 6,
    category: "buzo",
    desc: "En este lugar iría la descripcion del producto. En este momento estamos pensando que ingresar para que este <p> sea más llamativo :)",
  },
  {
    name: "Buzo blanco ABCDE",
    price: 6700,
    urlPicture: "/buzoblanco.jpg",
    stock: 10,
    id: 7,
    category: "buzo",
    desc: "En este lugar iría la descripcion del producto. En este momento estamos pensando que ingresar para que este <p> sea más llamativo :)",
  },
];

const task = new Promise((resp) => {
  resp(productList);
}, 2000);

export const getItem = () => {
  return task;
};
