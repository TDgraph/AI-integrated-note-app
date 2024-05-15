import {neon, neonConfig} from "@neondatabase/serverless";

import { drizzle } from "drizzle-orm/neon-http";

// cache all colletion so it doesn't reload when we restart the page
neonConfig.fetchConnectionCache = true;

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
}

const sql = neon(process.env.DATABASE_URL);

// the db is how we can interact with things to build sql connection strings!
export const db = drizzle(sql);