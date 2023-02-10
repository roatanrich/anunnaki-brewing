import 'dotenv/config';
import { generateApiKey } from 'generate-api-key';

const keygenLib = generateApiKey({
  method: 'uuidv5',
  name: `${process.env.NODE_ENV}`,
  namespace: '0f3819f3-b417-4c4c-b674-853473800265',
  prefix: `${process.env.API_KEY_PREFIX}`,
});

export default keygenLib;
