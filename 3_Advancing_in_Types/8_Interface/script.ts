interface Point  {
    x: number
    y: number
    z: number
};

function showCoord(obj: Point) {
    console.log(`x: ${obj.x}, ${obj.y} and ${obj.z}`)
};

const coordObj:Point = {
    x: 10,
    y: 20,
    z: 30
}

showCoord(coordObj);