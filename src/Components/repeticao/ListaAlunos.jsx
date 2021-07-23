import React from 'react'
import './ListaAlunos.css'
import alunos from '../../data/alunos'


export const ListaAlunos = (props) => {
  const renderAlunos = alunos.map(aluno => {
    return (
      <li key={`alunos -  ${aluno.id}`}>
        {aluno.id}) {aluno.nome} - {aluno.nota}
      </li>
    )
  })
  return (
    <div>
      <ul>
        {renderAlunos}
      </ul>
    </div>
  )
}