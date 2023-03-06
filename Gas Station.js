/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
//      let l=gas.length
// let start=0;
// let tank=0
// let total=0
// for(let i=0;i<l;i++){
//  tank+=gas[i]-cost[i];
//  if(tank<0){
//      start=i+1;
//      total+=tank;
//      tank=0.
//  }
// }
//   return  tank+total>=0?start:-1  

let l=gas.length;
let start=0;
let tank=0;
let total=0;
for(let i=0;i<l;i++){
    tank+=gas[i]-cost[i];
    if(tank<0){
        start=i+1
        total+=tank;
        tank=0;
    }
}
return tank+total>=0?start:-1
};