function generate(){
  let p=document.getElementById('p').value;
  let q=document.getElementById('q').value;

  document.getElementById('n').innerHTML = p * q;
  document.getElementById('phi').innerHTML = (p - 1) * (q - 1);
  let n= p*q;
  let phi=(p - 1) * (q - 1);
  calE(phi,n);}


  function calE(phi,n){
let e= 0;
while (e<=0 || e>=phi||gcd(e,phi) !=1){
e= Math.floor(Math.random() * ((phi-1)-1+1)+1);
}
document.getElementById('e').innerHTML = e;
calD(e,phi,n); }

function gcd(e,phi){
    if(e<0 || phi <0){
        return -1;
    }
    if(phi==0){
        return e;
    }
    return e%phi == 0?phi:gcd(phi,e%phi);
}

function calD(e,phi,n){
    for(var i =1;i<n;i++){
        if((i*e)%phi==1){
            d = i;
            break;
        }
    }
    document.getElementById('d').textContent = d;
    return d;
}

function xgcd(a, b) {
    if (b == 0) {
      return [1, 0, a];
    }
    temp = xgcd(b, a % b);
    x = temp[0];
    y = temp[1];
    d = temp[2];
    return [y, x - y * Math.floor(a / b), d];
  }
