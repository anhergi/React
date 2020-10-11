import { connect } from 'react-redux'
import { toggleHeroe } from '../actions'
import HeroesList from '../components/HeroesList'

const getVisibleHeroes = (heroes, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return heroes
    case 'SHOW_COMPLETED':
      return heroes.filter(t => t.muerto)
    case 'SHOW_ACTIVE':
      return heroes.filter(t => !t.muerto)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  heroes: getVisibleHeroes(state.heroes, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  // toggleHeroe: id => dispatch(toggleHeroe(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroesList)