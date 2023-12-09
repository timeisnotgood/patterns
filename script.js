
function patter1(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '
    for(let j =1; j<=n;j++){
      patern += "* "
    }
    console.log(patern);
  }
}

function patter2(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '

    
    for(let j =1; j<=i;j++){
      patern += "* "
    }
    console.log(patern);
  }
}

function patter3(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '
    for(let j =1; j<=i;j++){
      patern += j
    }
    console.log(patern);
  }
}

function patter4(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '
    for(let j =1; j<=i;j++){
      patern += i
    }
    console.log(patern);
  }
}

function patter5(n){
  for (let i =0 ; i<n;i++){
    let patern = ' '
    for(let j =1; j<=n-i;j++){
      patern += "* "
    }
    console.log(patern);
  }
}

function patter6(n){
  for (let i =0 ; i<n;i++){
    let patern = ' '
    for(let j =1; j<=n-i;j++){
      patern += j
    }
    console.log(patern);
  }
}

function patter7(n){
  for (let i =0 ; i<n;i++){
    let patern = ""
    for(let o = 0; o<n-i-1;o++){
      patern += "  "
    }
    for(let j =1; j<= 2 * i+1 ;j++){
      patern += " *"
    }
    console.log(patern);
  }
}

function patter8(n){
  for (let i =0 ; i<n;i++){
    let patern = ''
    let m = 2 * i +1
    for(let s = 1; s<=i;s++){
      patern += "  "
    }
    for(let j =1; j<=2*n-m;j++){
      patern += " *"
    }
    console.log(patern);
  }
}

function patter9(n){
  patter7(n)
  patter8(n)
}

function patter10(n){
  for (let i =1 ; i<n;i++){
    let alter = i
    let patern = ' '
    if(i > 5 ){
      alter = n -i
    }
    for(let j =1; j<= alter;j++){
      patern += "*"

    }
    console.log(patern);
  }
}


(()=>{
  // patter10(10)
})()