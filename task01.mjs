// export function drawTriangle(height){
//     for(let i=0;i<height;i++){
//         for (let j=0;j<i;j++){
//             process.stdout.write("*");
//         }
//         console.log();
//     }
// }

export function drawTriangle(height) {
    for (let i = 1; i <= height; i++) {
        console.log("$".repeat(i));
    }
}
