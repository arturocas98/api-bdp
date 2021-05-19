const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const publicIp = require("public-ip");
require("dotenv").config();

/**Inicializar express */
const app = express();

/**Cors */

var corsOptions = {
  origin: "*", // Reemplazar con dominio
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

/**Capturar body */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**Importar rutas */
const authRoutes = require("./routes/auth");
const admin = require("./routes/admin");
const validateToken = require("./routes/middleware/validate-token");

/**Route middleware */
app.use("/auth/oauth/v2/", authRoutes);
app.use("/api/admin", validateToken, admin);
app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "success",
  });
});
app.use("/api/empleados", validateToken, require("./routes/empleados.route"));
app.use("/ip", async (req,res) => {
  // const ip = await publicIp.v4();
  res.json({
    ip:req.connection.remoteAddress

  });
});
/**Conexión a la base de datos */

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@platzimongo.yzhdi.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
const option = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose
  .connect(uri, option)
  .then(() => console.log("Base de datos conectada"))
  .catch((e) => console.log("error db:", e));

/**Iniciar el servidor */

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening http:/localhost:${PORT}`);
});
