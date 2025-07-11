import { BaseAPI } from '../BaseAPI';
import { expect } from 'allure-playwright';

export class ProductsAPI extends BaseAPI {
  constructor(request) {
    super(request);
    this._endpoint = '/products';
    this._headers = { 'content-type': 'application/json' };
  }

  async getAllProducts() {
    return await this.step(`Get all products data`, async () => {
      return await this.request.get(this._endpoint, { headers: this._headers });
    });
  }

  async addNewProduct(body) {
    return await this.step(`Add a new product`, async () => {
      return await this.request.post(this._endpoint, {
        headers: this._headers,
        data: body,
      });
    });
  }

  async getSingleProduct(productId) {
    return await this.step(`Get single product data`, async () => {
      return await this.request.get(`${this._endpoint}/${productId}`, {
        headers: this._headers,
      });
    });
  }

  async updateProduct(body, productId) {
    return await this.step(`Update a product`, async () => {
      return await this.request.put(`${this._endpoint}/${productId}`, {
        headers: this._headers,
        data: body,
      });
    });
  }

  async deleteSingleProduct(productId) {
    return await this.step(`Delete single product data`, async () => {
      return await this.request.delete(`${this._endpoint}/${productId}`, {
        headers: this._headers,
      });
    });
  }

  async assertCorrectTitle(title, response) {
    await this.step(`Assert correct title`, async () => {
      const titleFromBody = await this.parseTitleFromBody(response);
      expect(titleFromBody).toEqual(title);
    });
  }

  async assertCorrectPrice(price, response) {
    await this.step(`Assert correct price`, async () => {
      const priceFromBody = await this.parsePriceFromBody(response);
      expect(priceFromBody).toEqual(price);
    });
  }

  async assertCorrectDescription(desc, response) {
    await this.step(`Assert correct description`, async () => {
      const descFromBody = await this.parseDescriptionFromBody(response);
      expect(descFromBody).toEqual(desc);
    });
  }

  async assertCorrectCategory(category, response) {
    await this.step(`Assert correct category`, async () => {
      const categoryFromBody = await this.parseCategoryFromBody(response);
      expect(categoryFromBody).toEqual(category);
    });
  }

  async assertCorrectImage(image, response) {
    await this.step(`Assert correct image`, async () => {
      const imageFromBody = await this.parseImageFromBody(response);
      expect(imageFromBody).toEqual(image);
    });
  }
}
