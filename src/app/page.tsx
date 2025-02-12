import { PlanetForm } from "@/components/PlanetForm";
import { PlanetItem } from "@/components/PlanetItem";
import styles from '../app/page.module.css';
import { getPlanets } from "@/models/Planet";

export default async function Home() {
  
  const planets = await getPlanets()

  return (
    <div className="flex justify-center  mt-3">
        <h1>
          Planetas
        </h1>
        
      <div className={styles.container}>
        <PlanetForm  />

        <section className={styles.planets}>
           {planets.map((planet) => (
            <PlanetItem key={planet.id} planet={planet}  />
          ))} 
        </section>
      </div>
    </div>
  );
}
