 "use server"

import { revalidatePath } from "next/cache";
import * as Planet from "@/models/Planet";


export async function createPlanetAction( previaouState: any, formData:FormData) {
    const name = formData.get('name');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');

    if (typeof name !== "string" || name.length === 0 || typeof description !== "string" || typeof imageUrl !== "string" ) {
        return { message: "Todos os campos sao obrigatorios"};
    }

    await Planet.createPlanet({name,description,imageUrl})

    revalidatePath("/")
}

export async function deletePlanteAction(id: number) {
    await Planet.deletePlanet(id);
    
    revalidatePath("/");
}