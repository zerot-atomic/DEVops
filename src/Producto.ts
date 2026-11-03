export class Producto {
  constructor(
    public readonly codigo: string,
    public nombre: string,
    public precio: number,
    public existencia: number,
  ) {}

  mostrarInformacion(): void {
    console.log('===== Producto =====');
    console.log(`Código:     ${this.codigo}`);
    console.log(`Nombre:     ${this.nombre}`);
    console.log(`Precio:     $${this.precio.toFixed(2)}`);
    console.log(`Existencia: ${this.existencia} unidades`);
  }
}
