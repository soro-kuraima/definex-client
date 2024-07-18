import { restClient } from '@polygon.io/client-js';
const polygonRest = restClient(process.env.POLY_API_KEY);

export { polygonRest };
