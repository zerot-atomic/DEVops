import { describe, expect, it } from 'vitest';
import { Producto } from '../src/Producto';
import { buscarPorCodigo, buscarPorNombre } from '../src/busqueda';

const inventario = [
  new Producto('P001', 'Teclado mecánico', 899.5, 25),
  new Producto('P002', 'Mouse inalámbrico', 349, 40),
  new Producto('P003', 'Teclado numérico', 199, 10),
];

describe('búsqueda de productos', () => {
  it('encuentra un producto por código', () => {
    expect(buscarPorCodigo(inventario, 'P002')?.nombre).toBe(
      'Mouse inalámbrico',
    );
  });

  it('devuelve undefined si el código no existe', () => {
    expect(buscarPorCodigo(inventario, 'X999')).toBeUndefined();
  });

  it('filtra por nombre sin importar mayúsculas', () => {
    expect(buscarPorNombre(inventario, 'teclado')).toHaveLength(2);
  });
});
