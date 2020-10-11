import React from 'react'
import { connect } from 'react-redux'
import { addHeroe } from '../actions'
import './containers.css'

const AddHeroe = ({ dispatch }) => {
  let input1, input2

  return (
    <div className="form">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input1.value.trim() || !input2.value.trim()) {
          return
        }
        dispatch(addHeroe(input1.value, input2.value))
        input1.value = ''
        input2.value = ''
      }}>
        Nombre: 
        <input ref={node1 => input1 = node1} />
        Descripcion: 
        <input ref={node2 => input2 = node2} />
        <button type="submit">
          Add Heroes
        </button>
      </form>
    </div>
  )
}

export default connect()(AddHeroe)