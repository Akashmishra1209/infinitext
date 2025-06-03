import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from "./Schema"
const connectionString = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;
if (!connectionString) {
  throw new Error('NEXT_PUBLIC_DRIZZLE_DB_URL environment variable is not set');
}
export const db = drizzle(connectionString,{schema});