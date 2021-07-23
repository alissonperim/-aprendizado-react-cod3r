import React from 'react'
import { DiretaFilho } from './DiretaFilho'

export const DiretaPai = () => {
  return (
    <div>
      <DiretaFilho texto="Filho 1" numero={20} bool={true} />
    </div>
  )
}