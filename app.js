// start javaScript code
let userInput = document.getElementById("date");

function calculatAge(){
  let birthDate = new Date (userInput.value);
  
  let ms1 = birthDate.getMilliseconds();
  let s1 = birthDate.getSeconds();
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let ms2 = birthDate.getMilliseconds();
  let s2 = birthDate.getSeconds();
  let d2 = birthDate.getDate();
  let m2 = birthDate.getMonth() + 1;
  let y2 = birthDate.getFullYear();

  let ms3 , s3 , d3 , m3 , y3 ;
  y3 = y2 - y1;

  if (m2 >= m1){
    m3 = m2 - m1
  }
  else{
    y3--;
    m3 = 12 + m2 - m1
  }

  if (d2 >= d1){
    d3 = d2 - d1;
  }
  else{
    m3--;
    d3 = getDaysInMonth(y1,m1) + d2 - d1
  }
  if(m3 < 0){
    m3 = 11;
    y3--;
  }

  return document.getElementById("answer").innerHTML = birthDate;


  function getDaysInMonth(year,month){
    return new Date (year , month, 0).getDate();
  }

}