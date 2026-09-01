const b = document.querySelector('#b');
b.addEventListener('click',()=>{
  const i = document.querySelector('#i').value;
  location.href = `https://ko-math.github.io/THE_CONSOLE_GAME/${i}.html`;
});
