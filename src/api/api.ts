import {AxiosHeaders, AxiosRequestConfig} from 'axios';
import {RAPID_API_KEY, RAPID_API_URL, RAPID_API_HOST} from '@env';
import Http from './axios';
import {buidConfig} from './config';

const rapidApiHeaders = AxiosHeaders.concat({
  'X-RapidAPI-Key': RAPID_API_KEY,
  'X-RapidAPI-Host': RAPID_API_HOST,
});

const _config = buidConfig(RAPID_API_URL, rapidApiHeaders);

class Service extends Http {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  async search(query: string) {
    const result = await this.get('/search', {
      params: {
        query: query,
        page: 1,
        num_pages: 1,
      },
    });
    return result;
  }
}

const Services = new Service(_config);

export default Services;
