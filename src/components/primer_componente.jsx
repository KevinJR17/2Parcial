import React from 'react'
import '../styles/App.css'

function primer_componente(props) {

    const back="primer_componente "+ props.back
    return (
      <div class={back}>
      <div class="Card-top-1">
          <div class="Cardt-1">
              <span>1</span>
          </div>
          <div class="Cardt-2">
              <span>Agenda/Topic</span>
          </div>
      </div>
      <div class="Card-top-2">
          <div class="Cardt-3">
              <span>SAAS-0000</span>
          </div>
          <img></img>
      </div>
  </div>
    )
}
export {primer_componente} 