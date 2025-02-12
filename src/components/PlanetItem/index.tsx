"use client"
import { deletePlanteAction } from '@/actions/planets-actions';
import styles from './styles.module.css';
import { Planet } from '@/models/Planet';



export interface PlanetItemsProps {
  planet: Planet
}

export function PlanetItem({ planet }: PlanetItemsProps) {
	return (
	  <div className={styles.planet}>
	    <h2>{planet.name}</h2>
	    <img
	      src={planet.imageUrl}
	      alt={planet.name}
	      width={320}
	      height={180}
	      style={{ objectFit: 'cover' }}
	    />
	    <p>{planet.description}</p>
	    <button
	      type="button"
	      className={styles.deleteBtn}
	      onClick={() => deletePlanteAction(planet.id)}
	    >
	      Excluir
	    </button>
	  </div>
	)
}