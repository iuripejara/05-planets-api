import { createPlanetAction } from '@/actions/planets-actions';
import styles from './styles.module.css';

export function PlanetForm() {
  return (
    <form className={styles.planetForm} action={createPlanetAction} >
      <div>
        <label htmlFor='name'>Nome</label>
        <input type='text' name='name' id='name' required />
      </div>

      <div>
        <label htmlFor='description'>Descrição</label>
        <textarea name='description' id='description' required></textarea>
      </div>

      <div>
        <label htmlFor='imageUrl'>Imagem (URL)</label>
        <input type='text' name='imageUrl' id='imageUrl' required />
      </div>

      <div>
        <button type='submit'>Adicionar Planeta</button>
      </div>
    </form>
  )
}