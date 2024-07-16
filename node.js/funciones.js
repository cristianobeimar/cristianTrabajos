const fs = require("fs");

function iniciarDiario() {
  const entrada = "hoy fuen un dia increible\n";

  fs.writeFile("diario.txt", entrada, (err) => {
    if (err) throw err;
    console.log("Diario inicializado con la entrada:");
    console.log(entrada);
  });
}
// iniciarDiario()

function leerDiario() {
  fs.readFile("diario.txt", "utf8", (err, data) => {
    if (err) {
      console.log("El diario aún no ha sido inicializado.");
      throw err;
    }
    console.log("texto:", data);
  });
}

function nuevaEntrada() {
  const texto_nuevo = "Tuve un trabajo bastante agotador.\n";
  fs.appendFile("diario.txt", texto_nuevo, (err) => {
    if (err) throw err;
    console.log("el texto:", texto_nuevo, "se agrego correctamente");
  });
}

const fs1 = require("fs/promises");
async function realizarCambios() {
  const cambio = "Tuve un rabajo bastante agotador pero muy productivo.\n";
  const archivo_leido = await fs1.readFile("diario.txt", { encoding: "utf-8" });

  
  archivo_text_nuevo = archivo_leido.split("\n");
  archivo_text_nuevo[7] = "este esta nuevo";
    let n = archivo_text_nuevo.join('\n')
  fs.writeFile("diario.txt", n, (err) => {
    if (err) throw err;
    console.log("Diario inicializado con la entrada:");
    console.log(n);
  });

}
realizarCambios();
