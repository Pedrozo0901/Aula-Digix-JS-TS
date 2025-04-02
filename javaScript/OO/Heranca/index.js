import Animal from "./Animal.js";
import {Cobra} from "./Cobra.js";
import {PicaPau} from "./Picapau.js";

const animal = new Animal("Animal", "Raça", 10, 5);

const cobra = new Cobra("Coral", "Serpente", 1.2, 3, "listrada");

const picapau = new PicaPau("Pica Pau ", "Passaro", .8, 4);

console.log(cobra);
picapau.bicar();


