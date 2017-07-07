import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'conversorexp' })
export class ConversorExp implements PipeTransform{
  transform(valor){
   let numero = parseInt(valor);
   let resultado = "El exponencial de "+numero+" es: "+(numero * numero);
   return resultado;

 }
}

