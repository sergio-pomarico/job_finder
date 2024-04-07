import {AxiosHeaders, AxiosRequestConfig} from 'axios';
import {RAPID_API_KEY, RAPID_API_URL, RAPID_API_HOST} from '@env';
import Http from './axios';
import {buidConfig} from './config';
import Job from '../core/job';
import RapidApiResponse from '../core/response';

const rapidApiHeaders = AxiosHeaders.concat({
  'X-RapidAPI-Key': RAPID_API_KEY,
  'X-RapidAPI-Host': RAPID_API_HOST,
});

const _config = buidConfig(RAPID_API_URL, rapidApiHeaders);

class Service extends Http {
  constructor(config: AxiosRequestConfig) {
    super(config);
  }

  search = async (query: string): Promise<Job[]> => {
    const request = await this.get<RapidApiResponse<Job[]>>('/search', {
      params: {
        query: query,
        page: 1,
        num_pages: 1,
      },
    });
    const {data: result} = request.data;
    return result;
  };

  detail = async (id: string): Promise<Job> => {
    console.log('detail', id);
    const request = await this.get<RapidApiResponse<Job[]>>('/job-details', {
      params: {
        job_id: id,
        extended_publisher_details: 'false',
      },
    });
    const {data: result} = request.data;
    return result[0];
  };
}

const Services = new Service(_config);

export default Services;
