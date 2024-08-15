const express = require("express");
const bodyParser = require("body-parser");
const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sequelize = new Sequelize("crudexpress", "obeimar", "1234567", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

// Definir el modelo de datos para 'User'
const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "users", // Nombre personalizado para la tabla
  }
);

// Sincronizar el modelo con la base de datos (crear la tabla si no existe)
sequelize
  .sync()
  .then(() => console.log("Conectado a la base de datos y sincronizado."))
  .catch((err) => console.error("Error al conectar a la base de datos:", err));
// Rutas CRUD
// Obtener todos los usuarios
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo usuario
app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// con este codigo Actualizar un usuario
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const user = await User.findByPk(id);//findByPk: es la primera llave
    if (user) {
      user.name = name;
      user.email = email;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un usuario
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



//este es otra base de datos de clientes 

// Definir el modelo de datos para 'User'
const cliente = sequelize.define(
  "clientes",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      documet: {
        type: DataTypes.STRING,
        allowNull: true,
      },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
    tableName: "clientes", // Nombre personalizado para la tabla
  }
);
// Obtener todos los usuarios
app.get("/clientes", async (req, res) => {
  try {
    const users = await cliente.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo usuario
app.post("/clientes", async (req, res) => {
  const { name, age, lastname, document, email } = req.body;
  try {
    const newUser = await cliente.create({ name, age, lastname, document, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// con este codigo Actualizar un usuario
app.put("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, lastname, document, email } = req.body;
  try {
    const user = await cliente.findByPk(id);
    if (user) {
      user.name = name;
      user.email = email;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar un usuario
app.delete("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await cliente.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor ejecutándose en http://localhost:3000");
});





// ,

//     {  
//     "name": "mercedes",
//     "age": "20",
//     "lastname": "acalo",
//     "documet": "1007178878",
//     "email": "mercedes@gmail.com"
// },
// {
    
//     "name": "felipe",
//     "age": "22",
//     "lastname": "morales",
//     "documet": "1007178878",
//     "email": "felipe@gmail.com"
// }