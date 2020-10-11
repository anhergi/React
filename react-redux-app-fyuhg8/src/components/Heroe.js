import React from 'react'
import PropTypes from 'prop-types'

const Heroe = ({ onClick, muerto, nombre, desc }) => (
  <li
    // onClick={onClick}
    style={{
      backgroundColor: muerto ? 'red' : 'white',
      listStyle: 'none',
      width: '400px'
    }}
  >
    Nombre: {nombre} , Descripcion: {desc}
  </li>
)

Heroe.propTypes = {
  // onClick: PropTypes.func.isRequired,
  nombre: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  muerto: PropTypes.bool.isRequired
}

export default Heroe