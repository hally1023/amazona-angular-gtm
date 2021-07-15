import * as fromDetailsProduct from './details-product.actions';

describe('DetailsProducts', () => {
  it('should return an action', () => {
    expect(fromDetailsProduct.DetailsProducts().type).toBe(
      '[DetailsProduct] Details Products'
    );
  });
});
