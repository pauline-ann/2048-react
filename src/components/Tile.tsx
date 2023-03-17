const Tile = ({ tile }) => {
    let classArray = ['tile'] // Tile class

    classArray.push('tile' + tile.value) // Tile id

    // Note new position of tile if it wasn't merged into (position _#_#)
    if (!tile.mergedInto) {
        classArray.push(`position_${tile.row}_${tile.column}`)
    }

    // If tile has been merged into, add 'merged' class
    if (tile.mergedInto) {
        classArray.push('merged')
    }

    // If tile spawned, add 'new' class
    if (tile.isNew()) {
        classArray.push('new')
    }

    // If tile moved, note from which cell it is moving to and from (row_from_#_to_#, column_from_#_to_#)
    if (tile.hasMoved()) {
        classArray.push(`row_from_${tile.fromRow()}_to_${tile.toRow()}`)
        classArray.push(`column_from_${tile.fromColumn()}_to_${tile.toColumn()}`)
        classArray.push('isMoving')
    }

    let classes = classArray.join(' ')

    return (
        <span className={classes}></span>
    )
}

export default Tile