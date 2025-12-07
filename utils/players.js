
function create_player(name='AI') {
    const player = {
        name,
        hand: [],
        wonPile:[]
    }
    return player
}
export default create_player
