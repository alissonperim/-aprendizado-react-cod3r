import React from 'react'

export const ParOuImpar = (props) => {
  const {
    numero
  } = props

  const isPar = numero % 2 === 0

  return (
    //condicional com ternário
    <div>
      {isPar ? <span>Par</span> : <span>Ímpar</span>}
    </div>
  )
}