let b = fibonacci(15);

function fibonacci(n){
  //let i =0;
  let j=0;
  let a=1;
  while(a<=n){
  	console.log(j);
  	console.log(a);
  		
      j=a+j;
      a=a+j;
  }

}
