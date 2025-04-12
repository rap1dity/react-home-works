import { apiFactory } from '@src/shared/api/api-factory.js';

export const v1Api = new apiFactory({ urlPrefix: '/api/v1'});
