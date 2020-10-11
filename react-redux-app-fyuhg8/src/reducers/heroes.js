const heroes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HEROE':
      return [
        ...state,
        {
          id: action.id,
          nombre: action.nombre,
          desc: action.desc,
          muerto: false
        }
      ]
    case 'TOGGLE_HEROE':
      return state.map(heroe =>
        (heroe.id === action.id)
          ? { ...heroe, completed: !heroe.completed }
          : heroe
      )
    case 'CLEAR_HEROES':
      return state.map(heroe => 
        (heroe.id % 2 !== 0)
        ? { ...heroe, muerto: true }
        : heroe
      )
    case 'REVIVE_HEROES':
      return state.map(heroe => 
        ({ ...heroe, muerto: false })
    )
    default:
      return state
  }
}

export default heroes