export default function randomIndex(array){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    return array[getRandomInt(array.length-1)]; 
}