import React from 'react'
import produtos from '../../data/produtos'
import './styles.css'

export const RepeticaoDesafio = () => {

  function renderProducts(product, index) {
    return (
      <>
        <tr key={product.id} className={index % 2 === 0 ? "par" : "impar"}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.amount}</td>
          <td>{product.price.toFixed(2).replace('.', ',')}</td>
        </tr>
      </>
    )
  }

  return (
    <table className="tabela-produtos">
      <thead className="tabela-produtos-head">
        <tr>
          <th>Referência</th>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map(renderProducts)}
      </tbody>
    </table>
  )
}