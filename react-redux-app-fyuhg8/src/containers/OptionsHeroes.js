import React from 'react'
import { clearHeroes, reviveHeroes } from '../actions'
import { connect } from 'react-redux'

const OptionsHeroes = ({ dispatch }) => {

    return (
        <div className="optionsHeroes">
            <button type="button"
                onClick={() => dispatch(clearHeroes())}>
                Matar Heroes
            </button>
            <button type="button"
                onClick={() => dispatch(reviveHeroes())}>
                Revivir Heroes
            </button>
        </div>
    )
}

export default connect()(OptionsHeroes)