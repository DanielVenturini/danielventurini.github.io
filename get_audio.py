import requests

WORDS = ['arose','awoke','bore','beat','became','befell','begot','began','beheld','bent','bet','bid','bound','bit','bled','blew','broke','bred','built','cast','chose','clung','came','cost','crept','cut','dealt','dug','did','drew','drank','drove','ate','fell','fed','felt','found','fled','flung','flew','forbade','forgot','forgave','froze','got','gave','went','ground','grew','had','heard','hid','hit','held','hurt','kept','knew','laid','led','left','lent','let','lay','lost','made','meant','met','overcame','overtook','paid','put','quit','read','rode','rang','rose','ran','sawed','said','saw',"sought",'sold','sent','set','shook','shed','shone','shot','showed','shrank','shut','sang','sank','sat','slew','slept','slid','slung','spoke','spent','spun','spit','spread','sprang','stood','stole','stuck','stung','stank','struck','strove','swore','swept','swam','swung','took',"taught",'tore','told',"thought",'threw','trod','underwent','understood','upheld','wore','won','wound','wrote']


WORD_LINK = 'https://dictionary.cambridge.org/dictionary/english/{}'
CAMBRIDGE_LINK = 'https://dictionary.cambridge.org'
# /media/english/us_pron/s/saw/saw__/saw.mp3
# /media/english/us_pron/w/wen/went_/went.mp3
# /media/english/us_pron/b/bui/built/built.mp3


# /media/english-portuguese/us_pron/b/beg/began/began_begin.mp3

AUDIO_SRC = '/media/english/us_pron/{}/{}/{}/{}.mp3'


def first_letter(word):
	'''
	Just returns the first letter of the word
	'''
	return word[0]


def first_three_letter(word):
	'''
	It returns the first three letters of the given word
	'''
	return word[0:3]


def word_padded(word):
	'''
	If len(word) is smaller than 3, pad it with '_'
	'''
	return word + ('_' * (5-len(word)))


def get_path(word):
	'''
	Returns the word path at all
	'''
	return AUDIO_SRC.format(
		first_letter(word),
		first_three_letter(word),
		word_padded(word),
		word
		)


def get_url(word):
	'''
	Returns the url to word
	'''
	return CAMBRIDGE_LINK + get_path(word)


WORDS.sort(key=lambda x: len(x))
for word in WORDS:
	if len(word) != 4:
		continue


	res = requests.head(get_url(word),
		headers = {
			'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
			'Accept-Encoding': 'gzip, deflate, br',
			'Accept-Language': 'en-US,en;q=0.5',
			'Cache-Control': 'max-age=0',
			'Connection': 'keep-alive',
			'Cookie': 'amp-access=amp-o0fLevGKmiil2wFEGjLOWw; preferredDictionaries="english,english-portuguese,english-spanish,spanish-english"; _ga=GA1.3.348818348.1608941157; dismissedNotifications=cookiewarning; XSRF-TOKEN=ab49cae7-021b-4047-b6ec-f5aad0660149; loginPopup=6; _gid=GA1.3.73695527.1612201756; ssc=4',
			'Host': 'dictionary.cambridge.org',
			'Upgrade-Insecure-Requests': '1',
			'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0'
		})

	if res.status_code == 200:
		print('{} -> {}'.format(word, get_path(word)))
	else:
		print('--{} -> {}'.format(word, get_path(word)))