

async function Getproductos() {
  const resp = await fetch("https://api-productos-categorias.vercel.app/products")
  const products = await resp.json()

  return products ;
}
export default Getproductos
