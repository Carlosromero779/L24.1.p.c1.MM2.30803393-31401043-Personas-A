/*PERSONAS-A
*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
*datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más
*mujeres o ambos por igual.
*Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
*Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
*Porcentaje de mujeres procesadas: 58.33%
*Hay más mujeres
*/ 
import Cl_personas from "./Cl_personas.js";
import Cl_datos from "./Cl_datos.js";

let persona1 = new Cl_personas('Luisa', 'F');
let persona2 = new Cl_personas('Ana', 'F');
let persona3 = new Cl_personas('Jose', 'M');
let persona4 = new Cl_personas('Carmen', 'F');
let persona5 = new Cl_personas('Rosa', 'F');
let persona6 = new Cl_personas('Jose', 'M');
let persona7 = new Cl_personas('Maria', 'F');
let persona8 = new Cl_personas('Luz', 'F');
let persona9 = new Cl_personas('Rafael', 'M');
let persona10 = new Cl_personas('Liz', 'F');
let persona11 = new Cl_personas('Carlos', 'M');
let persona12 = new Cl_personas('Leo', 'M');
let datos = new Cl_datos();
datos.procesarPersona(persona1);
datos.procesarPersona(persona2);
datos.procesarPersona(persona3);
datos.procesarPersona(persona4);
datos.procesarPersona(persona5);
datos.procesarPersona(persona6);
datos.procesarPersona(persona7);
datos.procesarPersona(persona8);
datos.procesarPersona(persona9);
datos.procesarPersona(persona10);
datos.procesarPersona(persona11);
datos.procesarPersona(persona12);

let salida = document.getElementById('salida');
salida.innerHTML = `<br> Porcentaje de mujeres procesadas: ${datos.porcentaje().toFixed(2)}% `;
salida.innerHTML += `<br> ${datos.sexoMayor()}`;