import * as fromDeleteProduct from './delete-product.actions';

describe('DeleteProducts', () => {
  it('should return an action', () => {
    expect(fromDeleteProduct.DeleteProducts().type).toBe(
      '[DeleteProduct] Delete Products'
    );
  });
});
