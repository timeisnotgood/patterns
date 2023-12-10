
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

function patter11(n){
  for (let i =0 ; i<n;i++){
    let patern = ' '
    let start = 0
    if(i % 2 ==0) start = 0
    else start = 1
    for(let j =0 ; j<=i ;j++){
      start = 1- start
      patern += start
    }
    console.log(patern);
  }
}


function patter12(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '
    for(let j =1 ; j<=i ;j++){
      patern += j
    }

    let space = 2 *n -i-i
    for(let s = 1;s<=space;s++){
      patern += " "
    }

    for(let k = 1;k<=i;k++){
      let n = i-k+1
      patern += n
    }
    console.log(patern);
  }
}


function patter13(n){
  for (let i =1 ; i<=n;i++){
    let patern = ' '
    let start = 1
    if( i == 4) start = 3
    else if ( i==5) start =6

    for(let j = 0;j<i;j++){
      if(i > 2){
        patern += i+j+start
      }else{
      patern += i+j
      }
    }
    console.log(patern);
  }
}



(()=>{
  patter13(5)
})()