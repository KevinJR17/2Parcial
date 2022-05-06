import React from 'react'
import { primer_componente } from './primer_componente'
import { segundo_componente } from './segundo_componente'
function tercer_componente(props) {
    const back=props.back
  return (
    <div class="tercer_componente">
    <primer_componente back={back}/>
    <segundo_componente/>
</div>
  )
}

export {tercer_componente} 