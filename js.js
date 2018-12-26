var primos=[];
function verprimos(n){

  nposibles=0;
  primos=[];
  for(var i=2;i<=100;i++){
    divisible=0;
    for(var j=2;j<=i;j++){
      if(i%j==0)
       divisible++;

    }
    if(divisible==1)
     if(nposibles<n){
       primos.push(i);
       nposibles++;
     }
     else break;


  }
}
verprimos(4);
console.log("primos[0]="+primos[0]);
console.log("primos[1]="+primos[1]);
console.log("primos[2]="+primos[2]);
console.log("primos[3]="+primos[3]);
verprimos(3);
console.log("primos[0]="+primos[0]);
console.log("primos[1]="+primos[1]);
console.log("primos[2]="+primos[2]);
