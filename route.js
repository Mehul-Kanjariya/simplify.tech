let kid = ["Amsterdam", "Kiev", "Zurich", "Prague", "Berlin", "Barcelona"];
let ticket = ["Paris-Skopje", 
              "Zurich-Amsterdam", 
              "Prague-Zurich", 
              "Barcelona-Berlin",
              "Kiev-Prague", 
              "Skopje-Paris", 
              "Amsterdam-Barcelona", 
              "Berlin-Kiev", 
              "Berlin-Amsterdam"];

let ans="";
let temp="Kiev"
let n;
for(let i=0; i<kid.length; i++){
    for(let j=0; j<ticket.length; j++){
        let b=ticket[j].split("-");
        if(temp==b[0]){
            n=j
            ans=ans+ticket[j]+" > "
            break;
        }
    }
    let c=ticket[n].split("-");
    temp=c[1];
}
console.log(ans);