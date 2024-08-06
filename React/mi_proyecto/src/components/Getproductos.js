

async function Getproductos() {
  const resp = await fetch("http://localhost:3434/0")
  const products = await resp.json()

  return products ;
}
export default Getproductos
