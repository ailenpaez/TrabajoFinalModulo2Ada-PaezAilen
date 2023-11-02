const metods = require("./books");

const processParameters = (argsByTerminal) => {
  const args = {
    action: "",
    type: "",
  };
  if (argsByTerminal[0]) {
    args.action = argsByTerminal[0].slice(2);
  }
  if (argsByTerminal[1]) {
    args.type = argsByTerminal.slice(1);
  }
  return args;
};

const actionsDelegated = (args) => {
  const { action, type } = args; //viene del processParameters
  switch (action) {
    case "": // si ejecuto solo el index.js (proccessparameters)
      console.log(metods.getAll());
      break;
    case "get":
      console.log(metods.getById(parseInt(type[0]))); //EL ID ES UN NRO.
      break;
    case "tag":
      console.log(metods.getByTag(type[0]));
      break;
    case "author":
      console.log(metods.getByAuthor(type[0]));
      break;
    case "name":
      console.log(metods.getByName(type[0]));
      break;
    default:
      console.log("COMMAND_NOT_FOUND");
  }
};

const main = () => {
  // Recibe los parámetros ingresados por el usuario
  const args = process.argv.slice(2);
  // Llama a processParameters para procesar los parametros
  const parameters = processParameters(args);
  // Llama a actionsDelegated para hacer las consultas a books.js según los parametros
  // Imprime el resultado de la consulta en la consola
  actionsDelegated(parameters); //acá conecta con la fc de armar el objeto
};

main();
