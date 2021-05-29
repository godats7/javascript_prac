// <!-- script를 head 태그에 위치시킬 수도 있다. 하지만 이 경우는 오류가 발생한다. -->
// window.onload = function(){} 함수는 웹브라우저의 모든 구성요소에 대한 로드가 끝났을 때 브라우저에 의해서 호출되는 함수다. 
// 이러한 것을 이벤트라고 하는데 이벤트는 뒤에서 배울 것이다.

window.onload = function test() {
    var hello = document.getElementById('hello2');
    hello.addEventListener('click', function(){
    alert('Hello world by script2');
})
}
