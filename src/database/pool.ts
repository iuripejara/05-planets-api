import pg from "pg";
const pool = new pg.Pool({
    connectionString: "postgres://postgres:4554@localhost:5432/nextjs_planets_app"
});

export { pool }