import { Config } from "drizzle-kit";
import * as dotenv from 'dotenv';

// telling the file where to locate the .env file!
dotenv.config({
    path: ".env",
});

export default {
    driver: 'pg',
    schema: './src/lib/db/schema.ts',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!,
    }

} satisfies Config;