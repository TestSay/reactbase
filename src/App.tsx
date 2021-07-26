import React, { ReactElement } from 'react'
import './App.css'
import { Dressroom, StatusField, Todos } from './component'

/**
 *
 *@return {JSX.Element}: The JSX Code for
 */
function App(): ReactElement {
  return (
    <div className="App">
      <div>
        <Todos />
      </div>
      <div>
        <Dressroom />
      </div>
      <div>
        <StatusField />
      </div>
    </div>
  )
}

export default App
