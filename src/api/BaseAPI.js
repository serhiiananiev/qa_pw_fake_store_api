import { expect } from '../../tests/_fixtures/fixtures';
import { testStep } from '../common/helpers/pw';
import { SUCCESS_CODE } from './constants/responceCodes';

export class BaseAPI {
  _endpoint;
  _headers;

  constructor(request) {
    this.request = request;
  }

  async step(title, stepToRun) {
    return await testStep(title, stepToRun);
  }

  parseStatus(response) {
    return response.status();
  }

  async parseBody(response) {
    return await response.json();
  }

  async parseIdFromBody(response) {
    const body = await this.parseBody(response);

    return body.id;
  }

  async parseTitleFromBody(response) {
    const body = await this.parseBody(response);

    return body.title;
  }

  async parsePriceFromBody(response) {
    const body = await this.parseBody(response);

    return body.price;
  }

  async parseDescriptionFromBody(response) {
    const body = await this.parseBody(response);

    return body.description;
  }

  async parseCategoryFromBody(response) {
    const body = await this.parseBody(response);

    return body.category;
  }

  async parseImageFromBody(response) {
    const body = await this.parseBody(response);

    return body.image;
  }

  async assertSuccessResponseCode(response) {
    await this.step(`Assert the code ${SUCCESS_CODE} is returned`, async () => {
      expect(this.parseStatus(response)).toEqual(SUCCESS_CODE);
    });
  }

  async assertBodyIsNotEmpty(response) {
    await this.step(`Assert response body is not empty`, async () => {
      const body = await this.parseBody(response);

      expect(body).not.toEqual([]);
    });
  }

  async assertBodyHasId(response) {
    await this.step(`Assert response body has ID`, async () => {
      const body = await this.parseBody(response);

      expect(Number(body.id) > 0).toBe(true);
    });
  }
}
