const Empleado = require("../models/empleado");
const VerificaUsuario = require('../models/verificaUsuario');
const EmpleadoController = {};

EmpleadoController.getEmpleados = async (req, res) => {
  const empleados = await Empleado.find();
  res.json(empleados);
};

EmpleadoController.createEmpleado = async (req, res) => {
  const { Datos } = req.body;

  try {
    const empleado = new Empleado(Datos);

    await empleado.save();
    res.status(201).json({
      NewRegistraUserResult: {
        CodError: "",
        FechaIngreso: { "@nil": "true" },
        IdAplicaciones: { "@nil": "true" },
        IdUsuario: { "@nil": "true" },
        LastLogon: { "@nil": "true" },
        Maquina: { "@nil": "true" },
        MsgError: "Ok",
        Token: { "@nil": "true" },
      },
    });
  } catch (error) {
    res.status(400).json({
      NewRegistraUserResult: {
        CodError: "20",
        FechaIngreso: { "@nil": "true" },
        IdAplicaciones: { "@nil": "true" },
        IdUsuario: { "@nil": "true" },
        LastLogon: { "@nil": "true" },
        Maquina: { "@nil": "true" },
        MsgError:
          "Usuario no existe o Error severo:The user name could not be found.\r\n",
        Token: { "@nil": "true" },
      },
    });
  }

  // console.log(req.body);
  // res.json('recibido');
};

EmpleadoController.verificarUsuario = async (req, res) => {
  const { Datos } = req.body;
  try {
    const verificaUsuario = new VerificaUsuario(Datos);

    await verificaUsuario.save();
    res.status(201).json({
      NewVerificaUserResult: {
        "AliaSwitch": {"@nil": "true"},
        "Apellido1": {"@nil": "true"},
        "Apellido2": {"@nil": "true"},
        "AreaContable": {"@nil": "true"},
        "Base": {"@nil": "true"},
        "Cargo": {"@nil": "true"},
        "CodError": "106",
        "CodOrganigrama": {"@nil": "true"},
        "IdAgencia": {"@nil": "true"},
        "IdEmpresa": {"@nil": "true"},
        "IdLocalidad": {"@nil": "true"},
        "IdRol": {"@nil": "true"},
        "IdTransacciones": {"@nil": "true"},
        "IdUsuario": {"@nil": "true"},
        "Identificacion": {"@nil": "true"},
        "MsgError": "Ok",
        "Nombre1": {"@nil": "true"},
        "Nombre2": {"@nil": "true"},
        "NombreUsr": {"@nil": "true"},
        "NumEmpleado": {"@nil": "true"},
        "Opident": {"@nil": "true"},
        "Servidor": {"@nil": "true"},
        "Terminal": {"@nil": "true"},
        "UserBD": {"@nil": "true"},
        "pwdBD": {"@nil": "true"}
     }
     
    });
  } catch (error) {
    res.status(400).json({
      NewVerificaUserResult: {
      },
    });
  }

  // console.log(req.body);
  // res.json('recibido');
};

EmpleadoController.getEmpleado = async (req, res) => {
  const empleado = await Empleado.findOne({ username: req.params.username });
  res.json(empleado);
};

EmpleadoController.editEmpleado = async (req, res) => {
  const { id } = req.params;
  const empleado = {
    nombre: req.body.nombre,
    cargo: req.body.cargo,
    oficina: req.body.oficina,
    salario: req.body.salario,
  };
  await Empleado.findByIdAndUpdate(id, { $set: empleado }, { new: true });
  res.json({
    estado: "Empleado actualizado",
  });
};

EmpleadoController.deleteEmpleado = async (req, res) => {
  await Empleado.findByIdAndDelete(req.params.id);
  res.json({
    estado: "Empleado eliminado",
  });
};

module.exports = EmpleadoController;
