// NLW: Countries
const countries = ['abkhazia', 'afghanistan', 'aland islands', 'albania', 'Algeria', 'american samoa', 'andorra', 'angola', 'anguilla', 'antigua and barbuda', 'argentina', 'armenia', 'aruba', 'australia', 'austria', 'azerbaijan', 'azores islands', 'bahamas', 'bahrain', 'balearic islands', 'bangladesh', 'barbados', 'basque country', 'belarus', 'belgium', 'belize', 'benin', 'bermuda', 'bhutan', 'bolivia', 'bonaire', 'bosnia and herzegovina', 'botswana', 'brazil', 'british columbia', 'british indian ocean territory', 'british virgin islands', 'brunei', 'bulgaria', 'burkina faso', 'burundi', 'cambodia', 'cameroon', 'canada', 'canary islands', 'cape verde', 'cayman islands', 'central african republic', 'ceuta', 'chad', 'chile', 'china', 'cocos island', 'colombia', 'comoros', 'cook islands', 'corsica', 'costa rica', 'croatia', 'cuba', 'curacao', 'cyprus', 'czech republic', 'democratic republic of congo', 'denmark', 'djibouti', 'dominica', 'dominican republic', 'East Timor', 'ecuador', 'egypt', 'el salvador', 'england', 'equatorial guinea', 'eritrea', 'estonia', 'ethiopia', 'european union', 'falkland islands', 'faroe islands', 'fiji', 'finland', 'france', 'french polynesia', 'gabon', 'galapagos islands', 'gambia', 'georgia', 'germany', 'ghana', 'gibraltar', 'greece', 'greenland', 'grenada', 'guam', 'guatemala', 'guernsey', 'guinea bissau', 'guinea', 'guyana', 'haiti', 'hawaii', 'honduras', 'hong kong', 'hungary', 'iceland', 'india', 'indonesia', 'iran', 'iraq', 'ireland', 'isle of man', 'israel', 'italy', 'ivory coast', 'jamaica', 'japan', 'jersey', 'jordan', 'kazakhstan', 'kenya', 'kiribati', 'kosovo', 'kuwait', 'kyrgyzstan', 'laos', 'latvia', 'lebanon', 'lesotho', 'liberia', 'libya', 'liechtenstein', 'lithuania', 'luxembourg', 'macao', 'madagascar', 'madeira', 'malawi', 'malaysia', 'maldives', 'mali', 'malta', 'marshall island', 'martinique', 'mauritania', 'mauritius', 'melilla', 'mexico', 'micronesia', 'moldova', 'monaco', 'mongolia', 'montenegro', 'montserrat', 'morocco', 'mozambique', 'myanmar', 'namibia', 'nato', 'nauru', 'nepal', 'netherlands', 'new zealand', 'nicaragua', 'niger', 'nigeria', 'niue', 'norfolk island', 'north korea', 'northern cyprus', 'northern marianas islands', 'norway', 'oman', 'orkney islands', 'ossetia', 'pakistan', 'palau', 'palestine', 'panama', 'papua new guinea', 'paraguay', 'peru', 'philippines', 'pitcairn islands', 'poland', 'portugal', 'puerto rico', 'qatar', 'Rapa Nui', 'republic of macedonia', 'republic of the congo', 'romania', 'russia', 'rwanda', 'saba island', 'sahrawi arab democratic republic', 'samoa', 'san marino', 'sao tome and prince', 'sardinia', 'saudi arabia', 'scotland', 'senegal', 'serbia', 'seychelles', 'sierra leone', 'singapore', 'sint eustatius', 'sint maarten', 'slovakia', 'slovenia', 'solomon islands', 'somalia', 'somaliland', 'south africa', 'south korea', 'south sudan', 'spain', 'sri lanka', 'st barts', 'st lucia', 'st vincent and the grenadines', 'sudan', 'suriname', 'swaziland', 'sweden', 'switzerland', 'syria', 'taiwan', 'tajikistan', 'tanzania', 'thailand', 'tibet', 'togo', 'tokelau', 'tonga', 'transnistria', 'trinidad and tobago', 'tunisia', 'turkey', 'turkmenistan', 'turks and caicos', 'tuvalu', 'uganda', 'ukraine', 'united arab emirates', 'united kingdom', 'united nations', 'united states', 'uruguay', 'uzbekistán', 'vanuatu', 'vatican city', 'venezuela', 'vietnam', 'virgin islands', 'wales', 'yemen', 'zambia', 'zimbabwe'];

// document.querySelector('#theme');
document.getElementById('theme').addEventListener('change', (event) => {
	const element = document.querySelector('body')
	const value = event.target.value

	element.removeAttribute('class')
	if (value !== 'yellow') element.classList.add(value)

	return
})

// NLW: CreateGame
function createGame(player1, hour, player2) {
	return `
		<li>
			<img src='./assets/countries/icon=${player1}.svg' alt='${player1} Flag' />
			<strong>
				${hour}
			</strong>
			<img src='./assets/countries/icon=${player2}.svg' alt='${player2} Flag' />
		</li>
	`
}

// NLW: CreateCard
let delay = -0.2;
function createCard(date, day, games) {
	delay = delay + 0.2;
	const matchsValue = games * 2;

	let playerOne = -1;
	let playerTwo = matchsValue;
	let formatedMatches = [];

	const matches = randomMatch(countries, matchsValue);
	for (let i = 0; games > i; i++) {
		playerOne = playerOne + 1;
		playerTwo = playerTwo - 1;

		const matchPlayerOne = matches[playerOne];
		const matchPlayerTwo = matches[playerTwo];

		formatedMatches.push(
			createGame(matchPlayerOne, randomTime(), matchPlayerTwo)
		)
	}

	return `
		<div class='card' style='animation-delay: ${delay}s;'>
			<h2>
				${date} <span>${day}</span>
			</h2>
			<ul>
				${formatedMatches.join('')}
			</ul>
		</div>
	`
}

function randomMatch(arr, num) {
	const shuffled = [...arr].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, num);
}

function randomTime() {
	const hours = Math.round(Math.random() * 12);
	return String(`${hours < 10 ? '0' : ''}${hours}:00`);
}

// document.querySelector('#cards');
document.getElementById('cards').innerHTML = `
	${createCard('24/11', 'thursday', 2)}
	${createCard('28/11', 'monday', 3)}
	${createCard('02/12', 'friday', 1)}
	${createCard('04/12', 'sunday', 2)}
`

