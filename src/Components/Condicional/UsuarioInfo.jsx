import React from 'react'
import { If } from "./If"

export const UsuarioInfo = (props) => {
  const {
    usuario
  } = props
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem vindo <strong>Fulano da Silva</strong>
      </If>
    </div>
  )
}