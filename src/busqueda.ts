import { Producto } from './Producto';

export function buscarPorCodigo(
  productos: Producto[],
  codigo: string,
): Producto | undefined {
  return productos.find((p) => p.codigo === codigo);
}

export function buscarPorNombre(
  productos: Producto[],
  texto: string,
): Producto[] {
  const termino = texto.toLowerCase();
  return productos.filter((p) => p.nombre.toLowerCase().includes(termino));
}
