let p = $('#test');
let div = $('.my-class')
let ul = $('ul')

console.log(p);
console.log(div);
console.log(ul);
console.log(p.text());
p.text('New Text')

$('input').attr('placeholder', 'Placeholder text')

div.prepend('<p>Prepended paragraph</p>');;
div.append('<p>Appended paragraph</p>');
div.before('<p>Before the div');
div.after('<p>After the div');

div.empty();
ul.remove();

$('input').hide();
setTimeout(() => $('input').show(), 2000)