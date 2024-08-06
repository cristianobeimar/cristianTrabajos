import Carrito from "../CarritoCompras/compras";
import "./CardProducto.css";
export const CardProductos = ({
  TITULO,
  item,
  numeroCarrito,
  IMAGEN,
  DESCRIPCION,
  PRECIO,
  rating
  
}) => {
  return (
    <>
      <div className="targeta">
        <div className="imagen">
          <img src={IMAGEN} className="card-img" alt={"superhero"} />
        </div>
        {/* datos-producto  */}
        <div className="datos-producto">
          <div className="row no-gutters">
            <h4 className="card-title">{TITULO}</h4>
            <p className="card-text">
              <small className="text-muted">{DESCRIPCION}</small>
            </p>
            <div className="precio_producto">
              <p className="precio">
                ${PRECIO}{" "}
                <span className="price-before">{PRECIO + PRECIO / 2}</span>{" "}
              </p>         
            </div>
          </div>
        </div>
        <Carrito numeroCarrito={numeroCarrito} item={item} />
      </div>
    </>
  );
};

