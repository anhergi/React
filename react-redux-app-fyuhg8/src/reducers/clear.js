const clear = (state = [], action) => {
    switch (action.type) {
        // case 'CLEAR_HEROES':
        //     // return state.map(heroe => 
        //     //     [{...heroe, muerto: true}]
        //     // )
        //     console.log(state);
            // return state.splice(0, state.length)
        default:
            return state;
    }
}

export default clear