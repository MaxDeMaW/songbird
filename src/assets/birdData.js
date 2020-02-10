const birdsData =   [ 
    {
        type : 'Разминка',   
        birds : [ 
            {
                id: 1,
                name: 'Ворон',
                species: 'Corvus corax',
                description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
                image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
            },
            {
                id: 2,
                name: 'Журавль',
                species: 'Grus grus',
                description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
                image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
            },
            {
                id: 3,
                name: 'Ласточка',
                species: 'Delichon urbicum',
                description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
                image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
            },
            {
                id: 4,
                name: 'Козодой',
                species: 'Caprimulgus europaeus',
                description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
                image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
            },
            {
                id: 5,
                name: 'Кукушка',
                species: 'Cuculus canorus',
                description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
                image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
            },
            {
                id: 6,
                name: 'Синица',
                species: 'Parus major',
                description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
                image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
            }
        ]
    },
    {
        type : 'Воробьиные',   
        birds : [
            {
                id: 7,
                name: 'Воробей',
                species: 'Passer domesticus',
                description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
                image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
              },
              {
                id: 8,
                name: 'Грач',
                species: 'Corvus frugilegus',
                description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
                image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
              },
              {
                id: 9,
                name: 'Галка',
                species: 'Coloeus monedula',
                description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
                image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
              },
              {
                id: 10,
                name: 'Певчий дрозд',
                species: 'Turdus philomelos',
                description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
                image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
              },
              {
                id: 11,
                name: 'Сорока',
                species: 'Pica pica',
                description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
                image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
              },
              {
                id: 12,
                name: 'Сойка',
                species: 'Garrulus glandarius',
                description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
                image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
              } 
        ]
    },
    {
        type : 'Воробьиные',   
        birds : [
            {
                id: 13,
                name: 'Зяблик',
                species: 'Fringilla coelebs',
                description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
                image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
            },
            {
                id: 14,
                name: 'Клёст',
                species: 'Loxia curvirostra',
                description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
                image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
            },
            {
                id: 15,
                name: 'Горлица',
                species: 'Streptopelia turtur',
                description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
                image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
                audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
            },
                  {
                    id: 16,
                    name: 'Дятел',
                    species: 'Dendrocopos major',
                    description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
                    image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
                    audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
                  },
                  {
                    id: 17,
                    name: 'Удод',
                    species: 'Upupa epops',
                    description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
                    image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
                    audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
                  },
                  {
                    id: 18,
                    name: 'Стриж',
                    species: 'Apus apus',
                    description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
                    image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
                    audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
                  }
        ]
    }
];

export default birdsData;