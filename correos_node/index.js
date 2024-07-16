const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // Utilice verdadero para el puerto 465, falso para todos los demás puertos
  auth: {
    user: 'ayte2024@outlook.com',
    pass: '12345678ayte'
},
});


// async..await no está permitido en el ámbito global, debe usar un contenedor
async function main() {
  // enviar correo con objeto de transporte definido
  const info = await transporter.sendMail({
    from: '"Cristian 👻" <ayte2024@outlook.com>', // dirección del remitente
    to: "afbravo.p5@gmail.com, critianyalana63@gmail.com", // lista de receptores
    subject: "Aqui va el asunto desde microsoft", // Línea de asunto
    text: "Hello world? hhhhhh", // cuerpo de texto plano
    html: "<h1>this is a test</h1>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main();
 

var mensajehtml = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email HTML</title>
    <style>
        /* Estilos básicos */
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border: 1px solid #dddddd;
        }
        h1 {
            color: #333333;
        }
        p {
            color: #666666;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px 0;
            background-color: #007BFF;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #0056b3;
        }
        .footer {
            text-align: center;
            color: #999999;
            font-size: 12px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Título del Correo</h1>
        <p>Hola,</p>
        <p>Este es un ejemplo de correo electrónico en HTML con estilos embebidos. Puedes modificar este contenido y los estilos según tus necesidades.</p>
        <a href="#" class="button">Llamada a la Acción</a>
        <p class="footer">© 2024 Tu Empresa. Todos los derechos reservados.</p>
    </div>
</body>
</html>
`;