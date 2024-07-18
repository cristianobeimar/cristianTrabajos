import "./CardProducto.css";
export const CardProductos = ({ title, imagen, description, Precio }) => {
  return (
    <>
      <div className="targeta">
        <div className="card">
          <div className="row no-gutters">
            <h2 className="card-title">{title}</h2>
            <div className="imagen">
              <img src={imagen} className="card-img" alt={"superhero"} />
            </div>

            <div className="col-8">
              <div className="card-body">
                <p className="card-text">
                  <small className="text-muted">{description}</small>
                </p>
                <h3 className="card-text">
                  <small className="text-muted">{Precio}</small>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
