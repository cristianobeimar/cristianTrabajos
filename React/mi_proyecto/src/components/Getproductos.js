

async function Getproductos() {
  const resp = await fetch("https://fakestoreapi.com/products")
  const products = await resp.json()

  return products ;
}
export default Getproductos
