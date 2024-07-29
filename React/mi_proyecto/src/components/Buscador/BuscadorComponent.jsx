import React, { useEffect, useState } from "react";

export default function BuscadorComponent({ datos }) {
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setproductosFiltrados] = useState([]);

  const buscadorInput = (e) => {
    const search = e.target.value;
    setBusqueda(search);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="search products"
        value={busqueda}
        onChange={buscadorInput}
      />
      <ul>{productosFiltrados.length > 0 && <li>Productos encontrados</li>}</ul>
    </div>
  );
}
<img src="" alt="" />