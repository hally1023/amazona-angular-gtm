import * as fromUpdateProduct from './update-product.actions';

describe('UpdateProducts', () => {
  it('should return an action', () => {
    expect(fromUpdateProduct.UpdateProducts().type).toBe(
      '[UpdateProduct] Update Products'
    );
  });
});
