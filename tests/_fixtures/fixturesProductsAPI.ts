import { test as base } from '@playwright/test';
import { ProductsAPI } from '../../src/api/endpoints/ProductsAPI';

export const test = base.extend<{
  productsAPI;
}>({
  productsAPI: async ({ request }, use) => {
    const productAPIClient = new ProductsAPI(request);
    await use(productAPIClient);
  },
});
