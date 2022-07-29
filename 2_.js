//Filtra el string eliminando elmentos que contienen un _
const carta = 'bici coche balón _playstation bici coche peluche'
function listGifts(letter){
  const gifts = letter
		.split(/\s+/)
		.map((gift) => gift.trim())
		.filter((gift) => gift !== '' && !gift.startsWith('_'));
	const countGifts = {};
	gifts.forEach((gift) => {
		countGifts[gift] ??= 0;
		countGifts[gift] += 1;
	});
  
	return countGifts;
/*
  letter = letter.replace(/_[a-z]* /gi, "");
  letter = letter.split(/\s+/);
  const obj = letter.reduce((accumulator, element) => {
    let count = letter.filter(x => x == element).length
    return {...accumulator, [element]: count};
  }, {});
  return obj*/
}