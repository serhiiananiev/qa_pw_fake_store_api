import { test } from '../../_fixtures/fixtures';

/*
Preconditions:
1. Send POST request to '/products' endpoint with body
2. Assert that the Success Response code is received
3. Parse the 'id' from the Response body

Test:
1. Send PUT request to '/products/{id}' with new body
2. Assert that the Success Response code is received
3. Assert the Response Body contains correct Title 
4. Assert the Response Body contains correct Price 
5. Assert the Response Body contains correct Description 
6. Assert the Response Body contains correct Category 
7. Assert the Response Body contains correct Image 
*/

let productID;
let response;
const productData = {
  id: 1,
  title: 'string',
  price: 0.1,
  description: 'string',
  category: 'string',
  image: 'http://example.com',
};
const newBody = {
  id: 1,
  title: 'new_string',
  price: 10,
  description: 'description!',
  category: 'cars',
  image: 'http://google.com',
};

test.beforeEach(async ({ productsAPI }) => {
  response = await productsAPI.addNewProduct(productData);
  await productsAPI.assertSuccessResponseCode(response);
  productID = await productsAPI.parseIdFromBody(response);
});

test('Update product', async ({ productsAPI }) => {
  const newResponse = await productsAPI.updateProduct(newBody, productID);
  await productsAPI.assertSuccessResponseCode(newResponse);
  await productsAPI.assertCorrectTitle(newBody.title, newResponse);
  await productsAPI.assertCorrectPrice(newBody.price, newResponse);
  await productsAPI.assertCorrectDescription(newBody.description, newResponse);
  await productsAPI.assertCorrectCategory(newBody.category, newResponse);
  await productsAPI.assertCorrectImage(newBody.image, newResponse);
});
