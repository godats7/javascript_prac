// js를 별도의 파일로 분리할 수도 있다. 
// 장점은 보다 엄격하게 정보와 제어를 분리할 수 있다. 
// 하나의 js 파일을 여러 웹페이지에서 로드함으로서 js의 재활용성을 높일 수 있다. 
// 캐쉬를 통해서 속도의 향상, 전송량의 경량화를 도모할 수 있다

var hello = document.getElementById('hello2');
hello.addEventListener('click', function(){
    alert('Hello world by script2');
})