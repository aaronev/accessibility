document.querySelector('form')
.addEventListener('submit', function(e) {
  e.preventDefault();
});

document.querySelector('button')
.addEventListener('click', function(e) {
  e.target.parentNode.children[0].click();
})

document.querySelector('input[type=\'file\']')
.addEventListener('change', function(e) {
  input = e.target;
  input.parentNode.children[2].value = input.value.split('\\').pop();
})
