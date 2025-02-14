"use client"

import { createPlanetAction } from '@/actions/planets-actions';
import styles from './styles.module.css';
import { useActionState } from 'react';

// function wait(ms:number) {
//   return new Promise(resolve =>{
//       setTimeout(() => resolve (true), ms);
//   });
// }

export  function PlanetForm() {
  const [state,action,pending] = useActionState(createPlanetAction, { message: "" })
  // await wait(4000)
  
  return (
    
    <form className={styles.planetForm} action={action} >

      <p>
        {state?.message}
      </p>

      <div>
        <label htmlFor='name'>Nome</label>
        <input type='text' name='name' id='name'  />
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
        <button type='submit' disabled={pending} >Adicionar Planeta</button>
      </div>
    </form>
  )
}