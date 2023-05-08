interface Point {
    x: number
    y: number
    z: number
}

function coordenates(obj: Point) {
    console.log(`My points are ${obj.x}, ${obj.y},${obj.z}`)
}