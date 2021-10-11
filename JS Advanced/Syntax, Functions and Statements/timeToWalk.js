function solve(steps, footprint, speed) {
    let distance = steps * footprint;
    let rests = Math.floor(distance / 500);
    let speedMtrs = speed * 1000 / 3600;
    let time = (distance / speedMtrs) + (rests * 60);
    let hours = Math.trunc(time / 3600) + "";
    let minutes = Math.trunc(time / 60) + "";
    let seconds = Math.round(time % 60) + "";
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
}
console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));