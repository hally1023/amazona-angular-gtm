import * as fromListProduct from './list-product.actions';

describe('loadListProducts', () => {
  it('should return an action', () => {
    expect(fromListProduct.listProducts().type).toBe(
      '[ListProduct] List Products'
    );
  });
});
