import * as fromCreateProduct from './create-product.actions';

describe('CreateProducts', () => {
  it('should return an action', () => {
    expect(fromCreateProduct.CreateProducts().type).toBe(
      '[CreateProduct] Create Products'
    );
  });
});
