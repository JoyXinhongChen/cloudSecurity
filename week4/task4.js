function calc() {
  let p = document.getElementById('p').value;
  let q = document.getElementById('q').value;

if (!testPrime(q)) {
  alert('q is not a prime number');return;
}
if (!testPrime(p)) {
  alert('p is not a prime number');return;
}

  document.getElementById('n').innerHTML = p * q;
  document.getElementById('phi').innerHTML = (p - 1) * (q - 1);
}

function testPrime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}
function calcE() {
  calc();
  let n = document.getElementById('n').textContent;
  let phi = document.getElementById('phi').textContent;
  let e = 0;
  while (e <= 0 || e >= phi || gcd(e, phi) != 1) {
    e = Math.floor(Math.random() * phi);
  }
  document.getElementById('e').innerHTML = e;
  calcD();
}

function calcD() {
  let phi = document.getElementById('phi').textContent;
  let e = document.getElementById('e').textContent;
  let temp = [0, 0, 0];

  temp = xgcd(e, phi);

  let d = temp[0];
  console.log(xgcd(e, phi));
  document.getElementById('d').innerHTML = d;
  if (d < 0) {
    calcE();
  }
}

function sign(){
  let n = document.getElementById('n').textContent;
  let m = document.getElementById('message').value;
  let d = document.getElementById('d').textContent;
  console.log(m+" "+d+" "+n);
  let sign = expmod(m,d,n);
  
  document.getElementById('signature').value = sign;

}

function verify(){
  let n = document.getElementById('n').textContent;
  let e = document.getElementById('e').textContent;
  let s = document.getElementById('signature').value;

  let m=expmod(s,e,n);
  alert('original message: '+m);
}

function expmod(base1, exp, mod) {
  var ans = 1;
  console.log(base1+" "+exp+" "+mod);
  var base = base1%mod;
  while(exp){
      if(exp & 1) {ans = (ans*base)%mod;}
      base = (base*base)%mod;
      exp = exp>> 1;
  }
  console.log(ans);
  return ans;

}

function gcd(a, b) {

  if (a === 0) { return b; }
  if (b === 0) { return a; }

  //recursion
  return gcd(b, a % b);
}

function xgcd(a, b) {
  console.log(a+" "+b);
  if (b == 0) {
    return [1, 0, a];
  }
//recursion
  temp = xgcd(b, a % b);
  x = temp[0];
  y = temp[1];
  d = temp[2];

  
  return [y, x - y * Math.floor(a / b), d];
}