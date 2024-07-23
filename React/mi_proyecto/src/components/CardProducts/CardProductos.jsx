import "./CardProducto.css";
export const CardProductos = ({
  title,
  imagen,
  description,
  Precio,
  rating,
}) => {
  return (
    <>
      <div className="targeta">
        <div className="imagen">
          <img src={imagen} className="card-img" alt={"superhero"} />
        </div>
        <div className="datos-producto">
          <div className="row no-gutters">
            <h2 className="card-title">{title}</h2>
            <p className="card-text">
              <small className="text-muted">{description}</small>
            </p>
            <div className="precio_producto">
              <p className="precio">
                ${Precio}{" "}
                <span className="price-before">{Precio + Precio / 2}</span>{" "}
              </p>
              <p className="rating">{rating?.rate | ""}</p>
            </div>
          </div>
        </div>
        <button className="but">comprar</button>
      </div>
    </>
  );
};
