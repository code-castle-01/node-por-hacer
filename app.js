// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;

  case 'listar':
    let listado = porHacer.getListado();
    
    for (let tarea of listado) {
      console.log('=====Por Hacer====='.blue);
      console.log(tarea.descripcion);
      console.log('Estado:', tarea.completado);
      console.log('==================='.green);
    }
    
    break;

  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.d, argv.c) // puede ser asi
    console.log(actualizado);
    break;                                                                  // (argv.d, argv.c)

  case 'borrar':
      let borrado = porHacer.borrar(argv.d)
      console.log(borrado);
      break; 

  default:
    console.log('Comando no conocido');
    break;
}