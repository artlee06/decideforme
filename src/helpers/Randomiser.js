export default function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

export default function randomIndex(array){
    return array[getRandomInt(array.length-1)]; 
}