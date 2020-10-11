import React from 'react'
import FilterLink from '../containers/FilterLink'
import OptionsHeroes from '../containers/OptionsHeroes'
import { VisibilityFilters } from '../actions'
import './optionsHeroes.css'

const Footer = () => (
  <div className="footer">
    <span>Show: </span>
    <div className="filterLink">
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>
        All
    </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
        Vivos
    </FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
        Muertos
    </FilterLink>
    </div>
    <OptionsHeroes>
      Clear
    </OptionsHeroes>
  </div>
)

export default Footer