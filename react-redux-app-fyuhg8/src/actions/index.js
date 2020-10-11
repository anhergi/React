let nextTodoId = 0
export const addHeroe = (nombre, desc) => ({
  type: 'ADD_HEROE',
  id: nextTodoId++,
  nombre,
  desc
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleHeroe = id => ({
  type: 'TOGGLE_HEROE',
  id
})

export const clearHeroes = () => ({
  type: 'CLEAR_HEROES',
})

export const reviveHeroes = () => ({
  type: 'REVIVE_HEROES',
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  CLEAR: 'CLEAR'
}