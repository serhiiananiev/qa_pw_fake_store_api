import { test } from '../../_fixtures/fixtures';

/*
Test:
1. Send GET request for product with ID 1
2. Assert that the Success Response code is received
3. Assert that the Response Body contains field 'id'
*/

test('Read product information', async ({ productsAPI }) => {
  const response = await productsAPI.getSingleProduct(1);
  await productsAPI.assertSuccessResponseCode(response);
  await productsAPI.assertBodyHasId(response);
});
