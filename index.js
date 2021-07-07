alphabet = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z" ]

item = alphabet[(Math.floor(Math.random() * alphabet.length))] + alphabet[(Math.floor(Math.random() * alphabet.length))] + alphabet[(Math.floor(Math.random() * alphabet.length))] + alphabet[(Math.floor(Math.random() * alphabet.length))] + alphabet[(Math.floor(Math.random() * alphabet.length))];

key = ('__' + (Math.floor((Math.random() * 999999) + 100000)) + '_' + item + '_' + (Math.floor((Math.random() * 999999) + 100000)) + '__');

$('.__rnd_id_item').prop('id', key);

$(`#${key}`).css({'color': 'red', 'font-weight': 'bold'})

console.log($('.__rnd_id_item').prop('id'));