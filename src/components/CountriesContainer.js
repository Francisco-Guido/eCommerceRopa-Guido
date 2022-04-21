/* import React, { useEffect } from "react";

const CountriesContainer = (props) => {
  const countries = [
    "Mexico",
    "Argentina",
    "Australia",
    "Colombia",
    "Peru",
    "Costa Rica",
  ];

  useEffect(() => {
    console.log(countries);

    const promesa = new Promise((resolve, reject) => {
      const rand = Math.random();
      console.log(rand);
      setTimeout(() => {
        if (rand >= 0.5) {
          resolve("Promesa cumplida");
        } else {
          reject("Rechazada!!!");
        }
      }, 5000);
    });

    promesa
      .then((result) => {
        console.log("La promesa fue satisfecha", result);
      })
      .catch((err) => {
        console.log("La promesa fue rechazada", err);
      });
  }, []);

  return (
    <div style={{ border: "solid green 2px" }}>
      <h1>CountriesContainer</h1>
      {countries.map((c, i) => (
        <li key={i}>{c}</li>
      ))}
    </div>
  );
};

export default CountriesContainer;
 */
