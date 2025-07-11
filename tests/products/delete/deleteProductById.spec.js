import { test } from '../../_fixtures/fixtures';

/*
Preconditions:
1. Send POST request to '/products' endpoint with body
2. Assert that the Success Response code is received
3. Parse the 'id' from the Response body

Test:
1. Send DELETE request to '/products/{id}' endpoint
2. Assert that the Success Response code is received
*/

let productID;
let response;
const productData = {
  title: 'string',
  price: 0.1,
  description: 'string',
  category: 'string',
  image: 'http://example.com',
};

test.beforeEach(async ({ productsAPI }) => {
  response = await productsAPI.addNewProduct(productData);
  await productsAPI.assertSuccessResponseCode(response);
  productID = await productsAPI.parseIdFromBody(response);
});

test('Delete product', async ({ productsAPI }) => {
  const newResponse = await productsAPI.deleteSingleProduct(productID);
  await productsAPI.assertSuccessResponseCode(newResponse);
});
