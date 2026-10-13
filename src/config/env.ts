import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

function required(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing required env variable: ${key}`);
  return value;
}

export const env = {
  baseUrl: required('BASE_URL'),
  envName: process.env.ENV_NAME ?? 'QA',
  headless: (process.env.HEADLESS ?? 'true') === 'true',
  workers: Number(process.env.WORKERS ?? 2),
  retries: Number(process.env.RETRIES ?? 0),
  defaultTimeout: Number(process.env.DEFAULT_TIMEOUT ?? 30000),
  expectTimeout: Number(process.env.EXPECT_TIMEOUT ?? 15000),
  quote: {
    email: required('QUOTE_EMAIL'),
    phone: required('QUOTE_PHONE'),
    username: required('QUOTE_USERNAME'),
    password: required('QUOTE_PASSWORD'),
  },
};
