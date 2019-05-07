function even(n){
  var i = 1
  while(i <= n){
    if(i%2 == 0){ // beliebiger Kommentar
      console.log(i)
    }else{
      console.log(i + " ist ungerade :( ")
    }
    i = i + 1
  }
  return i
}

even(20)

function ggT(a,b){
  var min = 0
  var r = 0
  var div = 0
  if(a >= b){
    min = b
  }else{
    min = a
  }
  while(r <= min){
    if(a%r == 0 && b%r == 0){
      div = r
    }
    r++
  }
  console.log(div)
  return div
}

ggT(10,20)
ggT(100,200)
ggT(1000,2000)
ggT(10000,20000)
