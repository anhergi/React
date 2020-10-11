import React from 'react'
import PropTypes from 'prop-types'
import Heroe from './Heroe'

const HeroeList = ({ heroes, toggleHeroe }) => (
  <div className="listaHeroes">
    <ul>
      {heroes.map(heroe =>
        <Heroe
          key={heroe.id}
          {...heroe}
        // onClick={() => toggleHeroe(heroe.id)}
        />
      )}
    </ul>
  </div>
)

HeroeList.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    muerto: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  // toggleHeroe: PropTypes.func.isRequired
}

export default HeroeList