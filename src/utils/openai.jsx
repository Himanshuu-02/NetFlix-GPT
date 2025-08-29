import OpenAI from 'openai';
import { OPENAI_key } from './constants';

const client = new OpenAI({
  apiKey: OPENAI_key, // This is the default and can be omitted
dangerouslyAllowBrowser:true
});

export default client;