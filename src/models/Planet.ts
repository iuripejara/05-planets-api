import { pool } from "@/database/pool";

export interface Planet {
    id: number
    name: string
    description: string
    imageUrl: string
}

interface CreatePlanetParams {
    name:string,
    description: string ,
    imageUrl: string
}

export async function getPlanets() {
    const result = await pool.query('SELECT id, name, description, image_url AS "imageUrl" FROM planets;')
    const planets: Planet[] = result.rows;
    return planets
}

export async function createPlanet(params:CreatePlanetParams ) {
    await pool.query(
        "INSERT INTO planets (name, description, image_url) VALUES ($1, $2, $3)",
        [params.name, params.description, params.imageUrl]
    );
}

export async function deletePlanet( id:number ) {
    await pool.query(
        "DELETE FROM planets WHERE id = $1", [id]
    );
}