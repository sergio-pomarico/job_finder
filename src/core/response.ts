interface RapidApiResponse<T> {
  status: string;
  request_id: string;
  parameters: Object;
  data: T;
}

export default RapidApiResponse;
