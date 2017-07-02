export class Empleado{
  /*
  public nombre:string;
  public edad:number;
  public cargo:string;

  constructor(nombre, edad, cargo){
    this.nombre = nombre;
    this.edad = edad;
    this.cargo = cargo;
  }
      Esta seria la forma clásica de definir un modelo. Sigue la forma nueva
 */
  constructor(
    public nombre:string,
    public edad:number,
    public cargo:string,
    public contratado:boolean
  ){}

}