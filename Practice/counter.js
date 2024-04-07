/* html에서 h1 태그와 button태그에 설정된 id 값을 이용해 아래 코드를 입력해 dom 선택
 버튼은 누를 때 증감하는 기능 구현을 위해 해당 상수명에 .onclick을 쓰고 함수 안에 기능 구현*/

 // DOM 선택 ( DOM : 각 태그에 대한 정보를 지니고 있는 JavaScript 객체)
const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

console.log(number);

 // DOM 이벤트 설정
increase.onclick = () => {
    const num = parseInt(number.innerText, 10)  //parseInt : 문자열을 숫자로 변환, 맨 뒤 숫자는 10진수
    number.innerText = num +1 ;
console.log("increase가 클릭됨 ");

decrease.onclick = () => {
    const num = parseInt(number.innerText, 10)  
    number.innerText = num -1 ;
    

 }
}