const reviews = [
    //1984
    {
        guid: '67c14db2-1280-4641-9487-01f9268d7507',
        review: "This was the book that started my love affair with the dystopian genre. And maybe indirectly influenced my decision to do a politics degree. I was only 12 years old when I first read it but I suddenly saw how politics could be taken and manipulated to tell one hell of a scary and convincing story. I'm a lot more well-read now but, back then, this was a game-changer. I started to think about things differently. I started to think about 2 + 2 = 5 and I wanted to read more books that explored the idea of control.",
        sentiment: 1
    },

    {
        guid: '81bbfe37-a1fe-4370-11a9-464e8155796a',
        review: "This was an up and down kind of read for me. There were parts that I really enjoyed and parts that I found extremely difficult to maneuver through. I'm glad that I decided to pick it up and give it a go, because it's one that I've been curious about for a long time. I can definitely see why so many people love this book. It explores a lot of things that we see happening in the world today. I can't say I'm leaving it as a massive fan, but I'm sure it's one that I'll continue to think about.",
        sentiment: 0,
    },

    {
        guid: '5b9574bf-7028-4d02-480c-8d69afa629b7',
        review: "I know this is a well loved classic and I definitely enjoyed some parts... but some times I found myself a bit bored",
        sentiment: -1,
    },

    {
        guid: '9cc27240-4fe3-4509-b080-e39040e3d0f2',
        review: 'I wanted to understand the origin of the expression "Big Brother" associated with our modern world, and I immersed myself in 1984 by George Orwell. This novel of anticipation, published in 1949, is striking! We follow with interest the destinies of Winston and Julia in this universe which is reminiscent of ours or what it could become. Of course, it is a fable, but the images strike and remain used for a long time. After reading this cult novel, we look at certain realities differently. It is a detour that is worth it, a must. Why did I wait so long to read it?',
        sentiment: 1,
    },

    //A Court of Mist and Fury
    {
        guid: '23edb15b-9920-4a12-0fd3-a4539a9f65df',
        review: "Oh dang. That was so unexpectedly good. And to think I almost didn't take a chance on this after not loving the first book...",
        sentiment: 1
    },

    {
        guid: '3fb26128-4dd3-4139-0f71-906cec139257',
        review: "The more I think about it, the more I realize I didn't enjoy anything about this book at all.",
        sentiment: -1
    },

    {
        guid: '0669ad71-8ab3-480c-5bac-0cfddc8afb65',
        review: "reread this just so i could say with the upmost confidence and truth that chapter 54 is the greatest chapter ever written in the history of literature and no one can convince me otherwise.",
        sentiment: 1
    },

    //A Dish to Die for
    {
        guid: 'af5c5e31-8b70-4407-8b32-24f474dc2e43',
        review:'Having been a huge fan of this entire series for a long time, I found this book to be exceptionally good. I consider Hayley Snow, food critic for a magazine to be my favorite amateur sleuth of all time.',
        sentiment: 1
    },

    {
        guid: 'c4226761-d56e-4fca-faa1-0fefc2780d80',
        review:'This was a new series for me, and I hadn\'t realized when I requested it that it was part of a series (and not the first book in it). So I did struggle a bit getting into the story, especially since it started off immediately with the impact of the pandemic on tourism in Key West.',
        sentiment: 0
    },

    //A Scanner Darkly
    {
        guid: '8e36888a-09bf-4bcc-91c4-045699acafa4',
        review: "I don't know. When you come right down to it, I just didn't like this. I thought it was shallow and indecisive, with that particular helpless sort of nihilism that I neither respect nor enjoy. Revelations about the nature of identity? Sure, I guess, if you've never, you know, read about that before, ever. Also, it is really hard for me not to laugh at a book when the author informs me that \"There is no moral in this novel: it is not bourgeois.\" I mean, lol.",
        sentiment: -1
    },

    {
        guid: 'af166f72-28b3-46b8-c05d-81c8b61fbe5c',
        review: "I'm continually surprised, now with my third read, how much fun I have with this novel. How much fun I have with the bugs. Or how much fun I have with the missing gears on the bike. Or how much fun I have with Bob, Fred, or whoever the hell the main character is. :) By the end, he is entirely nameless.",
        sentiment: 1
    },

    {
        guid: '55ab9a8e-a416-44e4-c31d-edc65703ce3a',
        review: "Wow. This has got to be one of the most paranoid novels I've ever read. Also one of the most addictive of recent times, which had me reading it in one afternoon.",
        sentiment: 1
    },

    //A Woman of No Importance: The Untold Story of the American Spy Who Helped Win World War II
    {
        guid: 'ffeedfd7-beb1-4221-a4ad-33bba2324325',
        review: "This was an absolutely fascinating story, and I would love to go back in time and have dinner with Virginia Hall and just pump her for stories because damn. She would have some good stories.",
        sentiment: 1
    },

    //After the Ivory Tower Falls: How College Broke the American Dream and Blew Up Our Politics―and How to Fix It
    {
        guid: 'd39789a5-0824-44f4-1ae3-3588f7816912',
        review: "I thought it was just amazing.",
        sentiment: 1
    },

    {
        guid: 'ca056f9d-de03-4c29-e4ba-0cbddf7089d0',
        review: "Good, punchy look at what we did wrong, what we did right and how we ended up here.",
        sentiment: 1
    },

    //America, a Redemption Story: Choosing Hope, Creating Unity
    {
        guid: '87dfc686-6c2b-4fc0-177c-cad3f65d7ac5',
        review: "This book was boring. I did not enjoy it.",
        sentiment: -1
    },

    {
        guid: 'fb87b3ac-5d25-4a74-d11b-bbb38b8adaed',
        review: "I liked this book but I felt it often went off on side tangents.",
        sentiment: 0
    },

    //Anatomy of a Murder
    {
        guid: "139b0d4d-ebce-4bf2-beac-db6dd6d778a1",
        review: "It was interesting, and definitely edgy for 1958, but it was written in this pedantic, good old boys, kind of style that drive me mad.",
        sentiment: -1
    },

    {
        guid: "13f46566-3dba-4af0-29ab-b690e7de2132",
        review: "I had heard of this novel most of my life, and I finally decided to see what all the fuss was about back in its day. I was fascinated by the approach it took to a murder, knowing guilt at the outset, then truly hoping that innocence by means of insanity would be proven. We learn a lot about human nature, especially our own, by the time we reach the end. Equally fascinating is to compare that time, 50 years ago, to today. Maybe it's best I waited so long.",
        sentiment: 1
    },

    //Babies Around the World
    {
        guid: "74014978-356e-453a-4e2a-b14d4a810af7",
        review: "I think this is one of those books where the idea is better than the execution. I found this one boring, uninspiring, and kind of confusing. There's no pronunciation guide, so who knows if you're teaching kids the right way to say these greetings?",
        sentiment: -1
    },

    {
        guid: "834161b1-33c1-49a3-8d7f-f1f1a2e70307",
        review: "Cute illustrations. Fun way to introduce toddlers to other cultures/languages.",
        sentiment: 0
    },

    {
        guid: "e99915fd-2c37-43b0-dccd-dc35b66faa7f",
        review: "Sweet book celebrating babies all around the world. Illustrated. Includes text in various languages. but pronunciation help is not included. Board book nice for little hands, but too small for a large storytime setting unless enlarged.",
        sentiment: 0
    },

    //Bad City: Peril and Power in the City of Angels
    {
        guid: '192aba51-a5d2-4c6c-07c2-0298729d06ab',
        review: "Unfreakinbelievable! If you thought that there's no corruption in those elite universities and public service organizations, think again. Best get rid of those rose colored glasses and face the harsh reality of “I scratch your back, you'll scratch my back” mentality.",
        sentiment: 1
    },

    {
        guid: 'fab6887b-3f37-4ead-76de-602b46d24e75',
        review: "When I saw this book being described as \"for fans of Spotlight and Catch and Kill\", I immediately knew that I needed it. Part nonfiction thriller and part true crime memoir, this was gripping, brilliant and illuminating all at once.",
        sentiment: 1
    },

    {
        guid: '3cf5a177-954e-4fb8-7681-a3a6c16ca14b',
        review: "Overall, I enjoyed this book, however I would have preferred if Pringle had focused solely on the Puliafito case. I felt like the Tyndall and Varsity Blues scandal were hurriedly discussed and felt like a completely different story from the Puliafito scandal.",
        sentiment: 0
    },

    //Battle for the American Mind: Uprooting a Century of Miseducation
    {
        guid: '3d88c266-b9d5-43c2-5185-6325ffc12917',
        review: "This is hogwash. Completely irrational garbage. This writer is clearly only spewing nonsense and not reality. More of the propaganda channel ridiculous attacks on education.",
        sentiment: -1
    },

    {
        guid: '44368c4d-c526-46cf-06e5-d7a69604c552',
        review: "This is truly horribly written. I hesitate to even review it because I don’t want people to know I read it. Scare tactics, propaganda, and hardly any cited sources at all.",
        sentiment: -1
    },

    {
        guid: '9fd0387f-fbcf-4d00-5e86-99f1be9a25eb',
        review: "One of the best books of 2022! Highly recommended!",
        sentiment: 1
    },

    //Book Lovers
    {
        guid: 'ae5e3d6c-9e6f-4579-e936-fec997549e1e',
        review: "i didn't like this :(",
        sentiment: -1
    },

    {
        guid: 'fcbde85a-9de6-4ca7-b672-39048aac75a0',
        review: "i\'m already convinced Emily henry personally writes to me in her books and this book just proved it. this book is made for book lovers by a book lover. and it is especially made for the older sister who has a younger sister.",
        sentiment: 1
    },

    //Brave New Worlds (Dystopian Stories)
    {
        guid: '0fcbb27d-742f-4c00-c333-d70fd4d155e0',
        review: "Better-than-average anthology, which admittedly isn't saying much.",
        sentiment: 0
    },

    //Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential
    {
        guid: 'd7c005e0-dca7-473c-d4af-4b4601cb1ec8',
        review: "What a waste of time that was. A few good nuggets in there but this whole thing should’ve been a blog post. Endless filler, entire chapters that contribute nothing, banal examples, even felt condescending at times. The essential point? Take more notes. Huzzah.",
        sentiment: -1
    },

    {
        guid: 'dd6e962b-9113-4230-aee7-d7156c35e184',
        review: "I found Building a Second Brain by Tiago Forte quite useful. There are a lot of helpful tips which can be used by people depending upon their work, the amount of reading they do, how much data they save and amount of time they have to implement the ideas given in the book.",
        sentiment: 1
    },

    //Burn After Writing
    {
        guid: '606dacfe-0fce-40ba-1dd9-e7e13b88813e',
        review: "I enjoyed this book and I liked the self reflection element with the prompted questions etc.",
        sentiment: 1
    },

    {
        guid: '23f1a3f2-f321-42db-5417-0658666e58b8',
        review: "Burn After Writing by Sharon Jones, a journal which is as person and close to you as your own soul. It has some very intriguing questions and prompts to answer and reflect on your own thoughts and actions.",
        sentiment: 1
    },

    //Call Us What We Carry: Poems
    {
        guid: '081376b4-2e38-453a-a6a6-783ade2eda87',
        review: "What an astounding collection of poems! Amanda Gorman is brilliant and insightful, and writes with so much clarity and passion. Her way with words is playful and yet oh so impactful.",
        sentiment: 1
    },

    {
        guid: 'f413d743-e63d-4cd7-e83c-8f3b0853b37d',
        review: "My friend gave me this book. She said she isn't a reader. I always find that hard to understand.",
        sentiment: 0
    },

    //Chicka Chicka Boom Boom
    {
        guid: 'c544af3e-3173-4bc5-4581-bf246f713bb6',
        review: "This is one of my favorite children's books ever! It is a classic every single child needs to have on their bookshelf. My grandma read this book to me when I was little, and it brought me such joy! I have a lot of good memories surrounding this book.",
        sentiment: 1
    },

    {
        guid: '6dc0b242-e1db-4887-3004-cc6da9c6bf0b',
        review: "Chicka Chicka Boom Boom is an alphabet learning book and waaay below my 6-year-old niece's reading level, but we enjoyed the heck out of it anyway!",
        sentiment: 1
    },

    {
        guid: 'fe7bfd3f-3e72-4820-0f22-dcf2de7d9f04',
        review: "Quick and fun read with the kids!",
        sentiment: 1
    },

    {
        guid: 'b510cd73-dd33-485b-2e72-9fb4325a3053',
        review: "I don't know who bought this for my son or when they did but he ignored it for a very long time until I found it under the couch a few days ago. Since then, I've read it at least five times a day.",
        sentiment: 1
    },

    //Chrysalis
    {
        guid: '744c9e97-7e11-49a3-7fe6-fd8e67adbfbd',
        review: "what the heck did I just read?",
        sentiment: -1
    },

    {
        guid: '1c340553-451a-4178-5f20-a39706e07e54',
        review: "Absolutely one of my favorite authors. Absolutely one of my favorite series. Absolutely no idea what was happening most of the time.",
        sentiment: 0
    },

    //Circe
    {
        guid: '2a692e81-c385-460e-a35d-70cb56c0b9a8',
        review: "Spellbinding.",
        sentiment: 1
    },

    {
        guid: '0cae3298-4ade-49a7-d843-9f60f1867d03',
        review: "Absolutely beautiful!",
        sentiment: 1
    },

    {
        guid: 'e01a0325-1f33-40c7-4cc3-4db69063feaa',
        review: "Where do I even begin? This was one of the most amazing, beautiful, intricate, captivating books I have had the pleasure of reading in my entire life. I have been a bookworm since I was barely walking, and yet this book, this gorgeous retelling, has impacted me so profoundly that I genuinely do not know if I will ever be entirely the same.",
        sentiment: 1
    },

    //Cloudbuster Nine: The Untold Story of Ted Williams and the Baseball Team That Helped Win World War II
    {
        guid: "fd5a652d-0e99-47ea-2c95-97234f5516e1",
        review: "Wow this was a great story. At first I thought it was going to be boring but itvwas not boring at all written by Ted Williams daughter and his pilot training and also playing for the baseball team during the war yeas great story",
        sentiment: 1
    },

    {
        guid: "221290f2-1e8b-4cc3-5bf7-7aa5d8bad527",
        review: "This was a fun read. I've been an avid baseball fan since my childhood. And I have an interest in WWII history. Put the two together, let alone my admiration for Ted Williams (passed on to me by my father) and you have a great reading experience!",
        sentiment: 1
    },

    //Court
    {
        guid: '69bd8ed2-f3a5-4dae-8706-5c904a017bfa',
        review: "This book was criminally long. The plot was insane but I wasn't in it for that, feed me more romance crumbles pls I’m starving. The author is throwing new concepts at the reader so many times, I simply lost interest in the world building.",
        sentiment: 0
    },

    {
        guid: 'c3413683-aead-4ef7-eee0-23e48dde3568',
        review: "Oh. My. GODS! This book was absolutely incredible. I love how Tracy pulled things from book 1, just proving her gift of foreshadowing is phenomenal. This book had me laughing, crying, and on the edge of my seat! Absolutely incredible, and I cannot WAIT for Charm and Cherish to come out later this year!",
        sentiment: 1
    },

    //Crossfire
    {
        guid: '3b6efca2-323d-4786-2dfc-cad53b689c11',
        review: "Love the connection that ties the main characters of each book in the series together. All four young women got into trouble as youth and had a strong female Christian to lead them to a better path.",
        sentiment: 1
    },

    //Crying in H Mart: A Memoir
    {
        guid: "759ba34c-d813-4c66-67c4-2cbe96dc1d0a",
        review: "It pains me to not really like this memoir. I had such high expectations and I feel really guilty for not liking the story Michelle Zauner told. There were definitely beautiful moments, but overall I did not enjoy the writing or the way the story was told. I know I am definitely in the minority and that a lot of people like this book, so I would say to read it if you are intrigued by it. But, it did not work for me.",
        sentiment: -1
    },

    {
        guid: "e09d060f-ef38-4762-9512-781ea2d77afd",
        review: "this book is so good also it sent me into a depressive spiral",
        sentiment: 1
    },

    //Death Note Short Stories
    {
        guid: "49d2e08b-888e-48a8-e20c-01fb1225210e",
        review: "Death Note is back with a short story collection. I was so overjoyed to be back in that world, I never wanted to leave. Please come back Ryuk! We miss you!",
        sentiment: 1
    },

    //Devil in a Blue Dress
    {
        guid: "08a395c8-414b-42ae-d688-01c859a9afe9",
        review: "This was a great start for me. I can't wait to get to the second Easy Rawlins. The best thing about this novel was the ambiance and the character of Easy Rawlins. So well done! I want to watch the movie to compare.",
        sentiment: 1
    },

    {
        guid: "3bc78d2a-a9a9-4172-2039-af9f7fe4912c",
        review: "I absolutely loved this book!",
        sentiment: 1
    },

    //Devotions: The Selected Poems of Mary Oliver
    {
        guid: '7574026b-0a71-4c69-0ab9-b32b13d10e73',
        review: "This is a beautiful collection of poetry from Mary Oliver. I finished it with a tear in my eye knowing there won't be anything more from her. She just passed away this year. There is something about her poetry that is comforting to me. I'm sorry she is gone.",
        sentiment: 1
    },

    {
        guid: '6baa535b-6c8a-43f9-d8b4-00d59186849f',
        review: "These poems feel like exhaling, when you didn't realize you were holding your breath.",
        sentiment: 1
    },

    {
        guid: '4f678eda-5c87-4b73-d1ae-129106719e1d',
        review: "I cannot give these poems any accolades for their craft or uniqueness. They reminded me of the old Swanson TV dinners in foil trays: uniformly prepared and only requiring heating. Nothing is demanded of the reader; it is there for easy consumption and no more.",
        sentiment: -1
    },

    //Diamonds and Deadlines: A Tale of Greed, Deceit, and a Female Tycoon in the Gilded Age
    {
        guid: "e161b6ac-1adb-4362-1ccb-d71b0af9e65b",
        review: "Gotta love a book, whether fiction or nonfiction, that allows its woman protagonist to be what most of us actually are: complicated.",
        sentiment: 1
    },

    {
        guid: "2d09a5c2-967f-4423-2d7f-21cda161b003",
        review: "This woman is fascinating. I really enjoyed reading the beginning ~ 50 and last ~ 50 pages. I found it a little rough through the middle as it felt like a lot of repetitive descriptions of Miriam Leslie’s dress and deceit (I think a large point of the book). Her legacy we largely don’t understand and I’m so grateful to the author for sharing it with us!",
        sentiment: 0
    },

    //Dream Big, Little One
    {
        guid: 'dd1be17b-abde-43a1-795f-dd9b1d28f9e9',
        review: "Definitely not for toddlers, which is the age group I teach, but a good intro for pre-k on up to black women who have been influential in both historical and contemporary times. It's a little too fact based and not rhythmic or engaging enough for the younger children but the pictures are well done and allow black youngsters to see themselves reflected in a positive light.",
        sentiment: 0
    },

    {
        guid: '6ade5597-5cd3-4f8b-b22d-30e0487ed25f',
        review: "Excellent! Well done! I love that we've read widely and several names my children were familiar with.",
        sentiment: 1
    },

    {
        guid: 'ef42032f-f294-4c39-6ebe-b9532d379d80',
        review: "I adore Vashti Harrison's illustrations & this board book is so sweet with an empowering message.",
        sentiment: 1
    },

    //Dune
    {
        guid: '7ee7bdb6-46b7-4764-93e8-631c8d1d16e9',
        review: "I don't doubt Dune was something special when it first came out in the 1960s. But reading it for the first time today, it feels horribly outdated to me and at times almost incomprehensible.",
        sentiment: -1
    },

    {
        guid: 'da7a90d9-6231-4654-d832-1cf507c86184',
        review: "Dune.  No other single syllable means as much to the science fiction genre, a single word that conjures images of sandworms, spice wars, great battles between rival dynastic families and a massively detailed and intricately crafted universe. No wonder this is widely regarded as not just a Science Fiction masterpiece, but a literary achievement as well.",
        sentiment: 1
    },

    {
        guid: 'b5ae864f-215e-4b51-7f9b-cd02bbd58509',
        review: "I cannot get over how beautiful this book is. Still my favorite after all these years. It only gets better with every re-read.",
        sentiment: 1
    },

    //Encyclopedia of Demons in World Religions and Cultures
    {
        guid: '2a9a2cf1-2c93-42e2-5d18-6e42db823968',
        review: "A great reference for those interested in such things.",
        sentiment: 1
    },

    //Ender's Game
    {
        guid: '98963562-b13b-4b4a-9615-5d2527274a79',
        review: "It pains me to say it, as a hardcore fangirl of science fiction, that one of sci-fi's most beloved and highly regarded novels did not do it for me. Actually, that is understating it. While I'm at it, I'll just duck and blurt it out: I loathed Ender's Game.",
        sentiment: -1
    },

    {
        guid: '61d34ec4-ae3b-4701-39ea-07e0c9c0d328',
        review: "I read it, was hugely entertained, and went on to read three or four of the sequels.",
        sentiment: 1
    },

    //Every Summer After
    {
        guid: '60a7ce90-359d-429d-0d16-61786333be4b',
        review: "I had a feeling when I first saw the cover for this, I was going to love it. I wasn't prepared for just how much! I think I left a piece of my heart on every page!",
        sentiment: 1
    },

    {
        guid: 'fa0c7b8f-45ab-49e1-d5e6-5e9cfac82632',
        review: "This may be a case of false marketing, but I'm still mad about it regardless. I don't want to take away from the people who loved this book and future readers who might love it as well, but I did not vibe with it at all.",
        sentiment: -1
    },

    //Fifty Words for Rain: A Novel
    {
        guid: '17d5140f-a589-424b-9675-3a09ac66b913',
        review: "I didn't enjoy this as much as I thought I would.",
        sentiment: -1
    },

    {
        guid: 'fc98245b-13bc-4feb-47b3-f446e0b47ae1',
        review: "I'm floored by the overwhelming praise for this book. I wanted to like it, but I found the writing childlike and the abuse-at-every-turn exhausting. Most of the characterization is paper-thin and many of the people in the book seem like stereotypes. At the end of the story, Nori's life-changing decisions seem rushed. There's nothing to add to the reader's understanding of why she does what she does. I finished the book but I was very disappointed. In the end, it was formulaic and not a story I will remember or think about.",
        sentiment: -1
    },

    //Frankenstein
    {
        guid: 'cb5035eb-92b4-4eb3-dc7a-418b2b707e33',
        review: "This book rules.",
        sentiment: 1
    },

    {
        guid: '9c2b0a70-029c-43e4-8252-3e8ff2d9adac',
        review: "I picked up the tragically wonderful Frankenstein for a fifth time this week, and I was totally mesmerised by the descriptive language used to describe the natural world..",
        sentiment: 1
    },

    {
        guid: 'a33e75f8-e174-4577-63c8-afede80b9e70',
        review: "The writing is beautiful, but dang the part where the monster tells you his life is boooooring!",
        sentiment: 0
    },

    {
        guid: '758d95d0-a7db-441a-a0e0-c93486e35199',
        review: "It's over 200 years since Frankenstein was first published in 1818, and it is a remarkable achievement that we're still reading this book today, in a genre that has exploded in literature and film. Certainly one of the greatest monster stories of all time and credited for creating the mad scientist and being the first science fiction story.",
        sentiment: 1
    },

    //From the Core: A new Masculine Paradigm for Leading with Love, Living Your Truth, and Healing the World
    {
        guid: '2640c85d-eb4d-4062-7c9d-56f6b231213c',
        review: "John is a beautiful mind with a big heart. He unpacks the complex and murky waters of modern day masculinity in a profound way. Deep respect for who he is and what he brings to the conversation of deepened intimacy",
        sentiment: 1
    },

    {
        guid: '48adf486-26f0-401f-1c9e-b14e6346be7a',
        review: "One of John's gifts is his ability to bring the esoteric into real life and make it understandable and doable. Underneath this gift is is own exploration of all these topics - he teaches what he lives and lives what he teaches.",
        sentiment: 1
    },

    //From Trauma to Transformation: A Path to Healing and Growth
    {
        guid: '98fe5d89-622c-42b1-2da9-b923d6f15bff',
        review: "This book really helped me.",
        sentiment: 1
    },

    //Girl in Pieces
    {
        guid: '70742b9c-5956-4269-3c25-a6dc359bc207',
        review: "I'm normally very easily annoyed by characters who pity themselves all the time. But this wasn't the case with Charlie and I can't really explain why. It didn't really feel forced but natural and understandable how she felt and acted. I pretty much liked everything about this book except for the ending. It was overdone and extremely unrealistic.",
        sentiment: 1
    },

    {
        guid: '474a2392-cfa9-41ee-755d-8f3296d7af76',
        review: "It took me a minute to get into this story. The style and narrative are unlike anything I usually read. I quite enjoyed this book and I would like follow up to see how the characters evolved.",
        sentiment: 1
    },

    //Girl, Alone
    {
        guid: 'aa6893c2-0688-438c-bf19-0accc1fd1d3c',
        review: "Whoa! Mysterious! An unbelievably suspenseful and complicated tale! Especially when someone get's it wrong! This is AWESOME!",
        sentiment: 1
    },

    {
        guid: '46005128-a798-407b-436c-642c1c52cff7',
        review: "The assumptions and the analyses of the crimes made by the two main female characters was completely unbelievable. You have the experience and track record of a semi-famous investigator pitted against the ruminations of a rookie...and the rookie manages to outthink the seasoned and talented investigator??? I'm sorry, but that's just stupid. The crimes themselves were interesting, but not to the extent that I could finish the book.",
        sentiment: -1
    },

    {
        guid: '12600e55-dc85-416d-0488-fdc4be36909b',
        review: "girl, alone was a great book! with its incorporation of real serial killer cases throughout the story for the copycat killer to modernize as their own, it was interesting as a true crime fan to see. the plot was well executed, but the book feels empty in some respects. i wish we would have gotten more of a backstory into Dark or Ripley. both of their characters still feel a little foreign to me, but i hope that the author gives them more of a story as the series continues on.",
        sentiment: 0
    },

    //Gone Girl
    {
        guid: 'a1504121-c1d6-4ed0-42e1-659f8931a9bd',
        review: "This was such an unpleasant read that I started taking notes of all the ridiculous parts. It also didn't help matters that I figured out the ending before page 100.",
        sentiment: -1
    },

    {
        guid: '7540d28a-0138-43b4-26ed-6c6554b1a60c',
        review: "This book was just way too much fun - and I mean that in a good way. I'm taking a leisurely drive down the garden path of the story, when BAM - right in the middle it makes a u-turn and we are on the highway doing 90 miles an hour (commonly referred to as a plot twist). Sweet Mother of Mercy!",
        sentiment: 1
    },

    {
        guid: 'ae1347f5-786e-455f-16d7-69604b2ed0a3',
        review: "Quite simply, this is one of the best novels of the year. It's a thriller in the best tradition of Alfred Hitchcock and layered with brilliantly written characters; it's the kind of book that's nearly impossible to put down. The surprises and twists keep the reader guessing up until the final page, and my first thought upon finishing the novel was that I wanted to read it a second time.",
        sentiment: 1
    },

    //Goodnight Moon
    {
        guid: '6e6af407-f06c-40e1-f5b8-93fa1a07c536',
        review: "Who doesn't love rhyming verse? A delightful and enchanting night-time poetry book to calm the soul. Goodnight mittens, kittens, and the red balloon!",
        sentiment: 1
    },

    {
        guid: '0a8f761b-1ba3-477a-bdfd-6508bfaba4c0',
        review: "why do people like this book? finding the little mouse on each page is fun, but other than that it's just a dumb book. there is a lame attempt to rhyme...sometimes. there's no rhythm. i don't get it.",
        sentiment: -1
    },

    {
        guid: '217d0d7d-0d17-4759-3635-43569254df47',
        review: "Wonderful book that makes you feel that everything will be fresh and new in the morning. This is THE bedtime story! I also think this book could be very helpful if you have a small child is afraid of the dark; by reassuring the child that everything is the same even when the lights are out it may be just the story to help them overcome their fear.",
        sentiment: 1
    },

    //Grace Under Fire
    {
        guid: '7a9706e7-fa66-4c42-30ff-6205ca535025',
        review: "This was part romance, part suspense/mystery combined. This was a good contemporary romance. But I was left with wanting a little more in the romance department.",
        sentiment: 0
    },

    {
        guid: '06b95553-9bcb-4164-cd3b-98c082074add',
        review: "This novel is quite lengthy, and as a result, we don't get just the suspense and romance plotlines, but we also get a lot of backstory into the heroine, Isabel, and her love of music. I really loved this plotline, and it provided a nice beginning to the story, which eventually grew more and more suspenseful as the book progressed. That said, while we get a bit of insight into Michael's past, I would have liked for that to have been fleshed out more. I don't quite remember the details of the previous books, so maybe we should remember more about him from those-but this is a standalone, so I would expect a bit more digging into his history in this book.",
        sentiment: 0
    },

    //Had I Known: Collected Essays
    {
        guid: '2acdec83-f63e-4f7a-ff8d-d4ede8d52eed',
        review: "A great encapsulation of the incisive, skeptical, wry, wide-ranging writings of Barbara Ehrenreich. Essays in here range from the mid-1980s to 2018, and cover a lot of ground: poverty and wealth inequality in America, gender and social dynamics, religion and culture, and the insidious qualities of pop psychology. Written with a lot of wit and insight.",
        sentiment:  1
    },

    {
        guid: '4a7659a8-0b61-4044-7f68-d48dd5ca4fa8',
        review: "I love Barbara Ehrenreich's writing. This collection obviously has that spark, but I did not love it.",
        sentiment: 0
    },

    //Heart Bones
    {
        guid: '1cfdc8d6-cf39-45b0-f7ec-bd0f2aa362fc',
        review: "OMG! I just finished it and.........................................................yes, first time in my life, I'm speechless! My heart is broken into million pieces. It hurts! But I also keep smiling.....",
        sentiment: 1
    },

    {
        guid: '091b266d-4f84-4c06-61aa-29cff44085f6',
        review: "if it wasnt official before, it certainly is now - CoHo can do no wrong.",
        sentiment: 1
    },

    {
        guid: 'f0fb8c98-476b-4cb8-338a-42333c416df0',
        review: "i can't believe i liked 2 colleen hoover books in a row honestly. but i thought this was very well done and didn't have any cheesy twists which rocks.",
        sentiment: 1
    },

    {
        guid: '69ca92dd-1ab1-4bb6-1758-88a8e5cef546',
        review: "Heart Bones was such a wonderful, emotional, but also touching YA/NA contemporary romance.",
        sentiment: 1
    },

    //Home Body
    {
        guid: '6b818840-5331-40bb-bd32-95ec9f679cdf',
        review: "I finished this in a day! Not because it was so enchanting & fantastic, but simply because the poems were SO. SHORT. As a fan of Rupi's long-form poetry, I'm disappointed with this collection honestly. It felt rushed. I felt like she *touched* on many deep topics, but did not dig that much into them.",
        sentiment: -1
    },

    {
        guid: '6ac08195-aee1-4b56-6004-5f9da08a5748',
        review: "Having shamelessly really enjoyed Rupi's first two collections, I was sad that this one fell really flat. There were some poems scattered throughout that really spoke to me, but the majority of this felt unoriginal. It felt very heavy handed and too on-the-nose with its commentary on capitalism and white feminism - important topics to explore through poetry, definitely, but ones that really lacked artistic handling in this collection.",
        sentiment: -1
    },

    //How the World Really Works: The Science Behind How We Got Here and Where We're Going
    {
        guid: '3f3b66fc-4efd-4665-02f8-5c282941345b',
        review: "Same as his old books. Vaclav is good at numbers, he connects the numbers and constructs a narrative; at the end of the day its a statistics book masqueraded as a coherent english book.",
        sentiment: 0
    },

    {
        guid: '6c91de5b-1efe-4cee-fcae-a78ace7a0305',
        review: "Vaclav Smil has always been a detail-oriented thinker and writer, and his books have been dense volumes filled with every tidbit of information about the subject matter covered. However, in this book, he simplifies his previous research into seven easily digestible chapters that allow us to think about the future rationally while avoiding hyperbole and bias.",
        sentiment: 1
    },

    //How to Read Now: Essays
    {
        guid: '5e295b84-8eff-4098-0c33-248a958f5fd7',
        review: "I found this novel extremely difficult to get into as the writing was a bit arrogant to begin with and very annoying.",
        sentiment: -1
    },

    //I Must Betray You
    {
        guid: '01d2ad28-acf6-4006-32db-421dfe94ebff',
        review: "powerful and haunting. a story to give proper justice to an often forgotten memory.",
        sentiment: 1
    },

    {
        guid: '7aab36ff-bb4a-4b09-133e-d593f64df5de',
        review: "I Must Betray You is an outstanding book - one I finished reading several days ago, and yet I'm still a jumble of feelings. A perfect example of historical fiction at its best!",
        sentiment: 1
    },

    //If He Had Been with Me
    {
        guid: '29601e79-eca2-422a-d871-43b34447a265',
        review: "This book was so uncomfortable to read. The metamorphosis of Autumn runs parallel to my own teen years but I loved it!",
        sentiment: 1
    },

    {
        guid: 'd57026b4-0602-48de-a55c-d74c9b2f3a97',
        review: "I was unprepared for just how good this book is, easily my favourite YA book of the year so far and it now sits on my favourites shelf.",
        sentiment: 1
    },

    {
        guid: '027f3d2e-7c4c-496e-9246-2e3eb48ae79d',
        review: "The beautiful cover and the description of this book lured me in and I couldn't wait to read this story. I knew from the description, that a tragedy would occur. I was more than prepared to take the journey and meet Autumn and Finny. The part that I wasn't prepared for was the abrupt anticlimactic ending.",
        sentiment: 0
    },

    {
        guid: '9d489bd1-6982-452e-bd23-d586db9ea4b8',
        review: "I'm really confused as to how this book has such a high reviews. It was mundane and repetitious, the main character was annoying, and the writing wasn't very good.",
        sentiment: -1
    },

    //If You Tell: A True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood
    {
        guid: 'eec65faa-cf3d-443c-6632-befe521c3023',
        review: "This was a disturbing book. Sometimes things that really have happened are far worse than anything one can dream up in their mind. This is a tale of abuse, manipulation, and complete and utter disregard for human suffering. Where one woman got off on the emotional and physical pain she could inflict on others - mainly her children and those closest to her. How she got away with this for so long is a mystery.",
        sentiment: 0
    },

    {
        guid: 'ed36d19e-c636-4b47-7972-1744e97a6d70',
        review: "I found it difficult to engage with the story. I understand that the author has had to cobble together, many different points of view and try to create a coherent timeline for the story, but if found it clunky and sadly lacking in depth.",
        sentiment: -1
    },

    //Ikigai: The Japanese Secret to a Long and Happy Life
    {
        guid: 'afef2625-8be8-4ecc-ca89-4227d3fb8498',
        review: "I liked the message of this book and the concept of ikigai, but I found the book focused more on longevity and how centenarians claim they were able to live so long. It was mashed together strangely and didn't flow well.",
        sentiment: -1
    },

    {
        guid: '91b93549-5fd4-4b66-084d-0ee65138b7a2',
        review: "Seems like the writers were not in the \"flow\" while writing this one. It seemed like a very superficial and incoherent attempt in trying to figure something out, which eventually they don't.",
        sentiment: -1
    },

    {
        guid: '821197b4-c8ba-4cef-42ed-99db08b99111',
        review: "The idea of the book is good. I can understand the appeal. And the idea of ikigai is also good in a common sense kind of way. The structure is a bit of a mess though. It surfs above some areas and goes into so much detail in others, that it hurts the flow of the reading. The book does not succeed in providing more than observations around behaviour and seems to jump feet first into the \"correlation equals causality\"-trap.",
        sentiment: -1
    },

    //In Cold Blood
    {
        guid: '8417bf87-9938-4e12-a18d-1de83238cd0c',
        review: "An absolute masterpiece of True Crime literature, In Cold Blood is both gritty and intelligent.",
        sentiment: 1
    },

    {
        guid: 'ac4d9158-263f-4f90-7788-e093d94bdff0',
        review: "I just wonder why it took me so long to get this masterpiece on my currently-reading shelf. What a breathtaking story! And told in the most amazing novelistic style",
        sentiment: 1
    },

    //Intimations: Six Essays
    {
        guid: '80b81041-142b-453f-8019-f4ec42d8bd6c',
        review: "There are a few good essays in here but nothing that wow-ed me. I just wish Zadie would get back to writing good fiction. Everything she seems to be releasing is just ok.",
        sentiment: 0
    },

    {
        guid: '599ad932-4cbf-41df-1573-0f20172aaea0',
        review: "As usual, Smith helps me see more deeply. This slim collection is mostly about the pandemic and is more accessible than many of her essay collections. The essay on contempt as a virus is especially profound.",
        sentiment: 1
    },

    //Inventor of the Future: The Visionary Life of Buckminster Fuller
    {
        guid: 'dba0f8b6-876b-46ad-a637-2f475bb1f5fa',
        review: "This book was mostly way over my head. Im sure \"bucky\" was a very smart man and a revolutionary of his time, but with all the geometry and philosophical talk, I just couldnt understand his level of thinking.",
        sentiment: 0
    },

    //It Ends with Us
    {
        guid: 'c22d326a-a7d3-4644-2828-95bec3d0ca2f',
        review: "HOLY WOW! It Ends With Us is one of the most powerful books of 2016 and one of the most raw, honest, inspiring, and profoundly beautiful stories I've ever read. It wasn't anything like what I expected, but it delivered so much more than I ever hoped for.",
        sentiment: 1
    },

    {
        guid: 'f0d501d2-b0ca-42e9-e09a-d12b91a0f138',
        review: "Want the naked truth about It Ends with Us? Reading this book will change your life. It's so different from any of Colleen Hoover's other books. You can tell it's heavier, more personal, just more. This book is deep. It's profound. It's a book that needs to be read. I'll repeat: THIS IS A BOOK THAT NEEDS TO BE READ!",
        sentiment: 1
    },

    {
        guid: '173dba09-3d99-4a2b-8ef8-f5bb6c25a5e4',
        review: "This book sends a really important and worthwhile message, but it's not necessarily enjoyable.",
        sentiment: 0
    },

    {
        guid: 'b872b472-36f1-46aa-fc01-09ab0c83fadf',
        review: "This book will make you fall in love, rip your heart out and force you to reconsider your preconceived ideas about abuse. This is the most moving book that I've read in a LONG time. It was absolutely addicting, but so difficult at times. I don't cry very often, but this one had me crying big, fat tears.",
        sentiment: 1
    },

    //It's Not Summer Without You
    {
        guid: '3d108f9c-5df4-4d86-47bb-8abea7886d39',
        review: "These books are terrible and yet I cannot stop reading them.",
        sentiment: 1
    },

    {
        guid: 'e1f80c34-f2ce-4457-71c4-95eb05f8f89e',
        review: "Belly is stupid. Conrad is annoying. Jeremiah is pathetic.",
        sentiment: -1
    },

    //James Patterson by James Patterson: The Stories of My Life
    {
        guid: '4a966f86-e851-4175-c522-14aaefd218ce',
        review: "I very much enjoyed my hours reading James Pattersons thoughts. The short chapters were absolutely perfect!!",
        sentiment: -1
    },

    {
        guid: '8581f2cd-4c39-4b2d-6a9a-ab174b52990e',
        review: "The master of the Thriller/Mystery genre has written an autobiography. Opening up this book feels like sitting in James Patterson's office across from his desk and he casually tells you the story of his life. There's such a comfortable style to his writing of his own autobiography that makes it truly enjoyable to read.",
        sentiment: 1
    },

    //Killing the Killers: The Secret War Against Terrorists
    {
        guid: '77a698d3-478c-44d9-dbde-c259668ee1ec',
        review: "Like his other books it's really fast read that I did it in one day and I love every second I was doing it.",
        sentiment: 1
    },

    {
        guid: '16df0a57-7e66-42e4-f89f-41acc713293e',
        review: "This is probably my least favorite book of Bill O'Reilly's \"Killing\" series. It was so depressing. So graphic. So many horrible stories that I just feel like I didn't need to know about. Its like you want to think there is more good than bad but then you hear stories like this (I still think there is more good than bad but still....)",
        sentiment: -1
    },

    {
        guid: '41a3aa7a-011c-4c3f-6657-926fcffe28fb',
        review: "It started out fine but then the authors' biases started showing through way more than I remember in any of the other books of theirs I have read. I will admit that I do not care for O'Reilly and rarely agree with him on most issues; however, I have appreciated the research and insights in his killing series. This book though I skimmed through most of because I was super annoyed with the clear bias.",
        sentiment: -1
    },

    //Klara and the Sun
    {
        guid: 'cd902495-72c9-4871-cadd-79e3174a4633',
        review: "This seems to be quite a polarizing book, with everyone either loving it or hating it. But Klara and the Sun didn't elicit such strong emotions in me. It didn't wow me in any way, but I didn't hate it either. I fell squarely in the meh-meh middle.",
        sentiment: 0
    },

    {
        guid: '5393bf37-cb4a-4e26-b02e-1ef26edd059d',
        review: "This book could have been great, but it was B O R I N G and S L O W! It didn't even have chapters. It had Parts. The prose was horrible. It was very staccato because it was supposed to sound like a robot. \"I did this. I did this. I did this.\"",
        sentiment: -1
    },

    //Languages of Truth: Essays 2003-2020
    {
        guid: '624c6102-2210-423a-519f-2b1934287dfa',
        review: "An erudite book which rockets you in several directions, discovering new authors, artists and deliciously plumbing new depths of stupidity in politics. As records of speeches it brings Rushdie into your reading room in a direct vivid manner, something lockdown has lacked and connects writer to reader immediately.",
        sentiment: 1
    },

    //Leadership: Six Studies in World Strategy
    {
        guid: 'b0c10673-eafa-4e97-d9e2-ec6bce5b2fd9',
        review: "This was an okay book. I learned some interesting leadership facts.",
        sentiment: 0
    },

    //Living Untethered: Beyond the Human Predicament
    {
        guid: "c376e16f-b05f-40aa-8b68-34816800e9f9",
        review: "This follows the same theme as his other books...",
        sentiment: 0
    },

    {
        guid: "132b1a9f-ac04-407a-b926-f53f6cdcfc37",
        review: 'this book blew me away. It was truly life-changing and it came into my life at the perfect time. I learned a lot from this novel about the heart, the mind, emotions and moods. It really gave me an insight as to how to experience happiness without depending on the outside world for it, such as people and objects.',
        sentiment: 1
    },

    //LLama LLama Red Pajama
    {
        guid: '7b4ddf23-fc51-474c-8781-4015502b1500',
        review: "A sweet little ball of fur it was. Adorable characters - Llama Llama and Mama Llama. Teaches small readers to have patience with absorbing illustrations. Suggested for young learners.",
        sentiment: 1
    },

    {
        guid: 'ebbc277e-2470-40d1-bc28-7f70eec26234',
        review: "I was gifted this book shortly after my daughter was born...And we love it! The whole Llama Llama series is adorable! We have 3 of the llama llama books so far!",
        sentiment: 1
    },

    {
        guid: '53c6bc55-39f4-4b5a-56dd-41bf11ef8495',
        review: "I absolutely love reading this one aloud to my daughter, Therese! The rhyming is so perfectly cadenced and she always giggles at the scrunched up mad face little llama makes when he is sooooo tired of waiting on his mama. A fun, fun read and good to remind \"baby llamas\" that mama is always there.",
        sentiment: 1
    },

    //Lord of the Flies
    {
        guid: '1d72720b-cf6f-47e5-1508-42784674b63d',
        review: "I read this book a long time ago, long enough to where I barely remembered anything past the basic premise. So I picked it up again, only to wish I hadn't. There's a reason why they teach this book in middle school--in order to enjoy this book, one's intellectual cognizance must be that of a child, because otherwise you'll spend the entire time picking out everything that's wrong with the book. And there's a lot to pick out.",
        sentiment: -1
    },

    {
        guid: '722d3609-092c-4b5c-d39b-affa543e5ace',
        review: "Lord Of The Flies is equally powerful - shocking, even by today's standards. And it's all very efficiently done.",
        sentiment: 1
    },

    {
        guid: 'fa1b99e2-0978-451e-491b-96780e78acc7',
        review: "This was a great read in my opinion. I enjoyed it from the first to the last page. The story explores group polarization as the stranded youths slowly regress into a primitive state. Frictions demonstrate the social pressure as division occurs and give rise to the psychological dilemma of 'the power of the situation'. The book also explores irrational fear and imagination as it relates to the group-think concept.",
        sentiment: 1
    },

    {
        guid: '3476c28b-209a-4a26-45c3-d20844642fed',
        review: "I think reading this book as an adult affects me more. You come to realize that things and circumstances can change drastically with no rules or repercussions. I really loved Lord of the Flies and think everyone should read this one day. It's not a long book but it will make an impression on you.",
        sentiment: 1
    },

    {
        guid: '9acfbc4b-7515-465a-f81d-9ff09f54b96d',
        review: "Wow. What a profound, yet horrifying look into the worst part of people. I understand now why this is a classic - and why it's been challenged. It is a slap in the face on the savagery of people, and people are uncomfortable when they're shown what they could do. But I do feel that it needs to be seen. That people aren't good and smart and decent, and could descend into madness.",
        sentiment: 1
    },

    //Make Room: Take Control of Your Space, Time, Energy, and Money to Live on Purpose
    {
        guid: '00de2d88-6a56-4f71-e8aa-6edc4c3b1690',
        review: "Insightful and super helpful!",
        sentiment: 1
    },

    //Man's Search for Meaning
    {
        guid: '75ed27d7-5f49-4798-a222-900f6367a767',
        review: 'How is it possible to write dispassionately of life in a concentration camp in such a way as to engender great feeling in the reader? This is how Frankl dealt with his experience of those terrible years. The dispassionate writing makes the horrors of the camp extremely distressing, more so than writing that is more emotionally involved. It is almost reportage. The first half of the book is equal in its telling to The Diary of a Young Girl in furthering our understanding of those dreadful times.',
        sentiment: 1
    },

    {
        guid: '0fbf3e2f-ff47-4a15-6c2b-2717aaece554',
        review: "For most of the book, I felt as dumbfounded as I would have been if I were browsing through a psychiatric journal. Filled with references and technical terms and statistics, it was mostly a book-long affirmation of the then innovative technique called 'logo-therapy'. I do not understand how this book is still relevant and found in most popular book stores. It might have been that the book was popular in the sixties and seventies as it offered a powerful and logical argument against the reductionist approach that leads inevitably to existential nihilism, but is that still relevant today? It also attempts to free psychiatry from the belief that 'eros' was the cause of all neurosis and turns the flashlight on repressed 'logos' - which forms the premise of the book and the title.",
        sentiment: -1
    },

    //Meditations: A New Translation
    {
        guid: 'f58063dc-0380-43ed-dde6-fc27cf2ba84d',
        review: "Marcus Aurelius is full of logic and revealing comments about life, death and the universe. His meditations are very open and very honest. And I found them quite touching. The history of his reign as Roman Emperor is impressive, but behind all his success was a very human person struggling and suffering with the same problems that plague all of us. He comes to terms with his mortality and his insignificance in the face of history and time. We are all of us only here a brief time, and we need to make the most of it.",
        sentiment: 1
    },

    {
        guid: '584923c0-5608-431f-07e5-507e0a0fdb47',
        review: "This basically consists of Marcus Aurelius repeating, \"Get it together, Marcus\" to himself over and over again over the course of 12 chapters.",
        sentiment: 0
    },

    {
        guid: '571e2901-1863-4dbe-2f95-61261b1f6112',
        review: "If you read this book patiently, giving it enough time for the lightly mentioned yet very deeply meant to absorb thoroughly, you will find this to be one of the most enlightening experiences one will ever have.",
        sentiment: 1
    },

    //Milk and Honey
    {
        guid: '72488908-243d-41fb-4761-75119e1fc2e5',
        review: "This whole book felt like those instagram quotes minus the inspirational photograph. Does that even count?",
        sentiment: 0
    },

    {
        guid: '864b5a9f-1321-4964-0c65-084baa4d5e3d',
        review: "milk and honey tore through my analytical mind and burrowed deep into my ultra-sensitive soul. It slayed all my emotions, my feminist desires, and my love for vulnerable writing. I may not know a lot about poetry, but I do know a decent amount about feelings, and Rupi Kaur brought all my feelings tumbling out with this gorgeous collection of poems.",
        sentiment: 1
    },

    {
        guid: 'e3c763a8-a37f-41b8-3fb7-ce9afcbacfa5',
        review: "It's difficult trying to review this because every poem is extremely personal, tender and exquisite in its own way.",
        sentiment: 1
    },

    //My Little Golden Book About Betty White
    {
        guid: '38a55cd4-e435-4cd5-25c5-4470966abd3f',
        review: "I have loved Betty White since I was a kid along with The Golden Girls and am heartbroken about her passing. A good friend of mine surprised me with this cute little book! Of course it's quick and short but it's so sweet! I recommend it for anyone who loves Betty as much as I do.",
        sentiment: 1
    },

    {
        guid: '242f0508-09de-40df-f67d-1de9bb1dd648',
        review: "An excellent picture book about the life of Betty White! It would be a great picture book for kids interested in learning more about such a fabulous, iconic woman.",
        sentiment: 1
    },

    //Never: A Novel
    {
        guid: 'ee27a479-a2d0-4b7c-08df-d13836b2a201',
        review: "I was so excited for this book. I love Ken Follett and have read almost all of his books. But this one is as if he went and did a Find/Replace to make everyone a \"woke\" character. I really wish authors would leave politics out of fiction - the way to write a great book is to take reality and alter it slightly to fit the story. Each character, taken alone in a vacuum, is fine. But when you put them all together, it's like he's trying to shove a political statement down our throats.",
        sentiment: -1
    },

    {
        guid: 'c063ed8f-a7f6-47ad-c8ea-c705bf8f0f36',
        review: "Follett does not disappoint. This novel is relentlessly entertaining, moves at a very quick pace, and is difficult to put down. I could not stop reading it until I finished the last page.",
        sentiment: 1
    },

    //No One Crosses the Wolf: A Memoir
    {
        guid: 'bd1060f2-42ee-4a0b-13d2-1d057ba20838',
        review: "A beautifully written, extraordinary memoir that situates you in a place and time with fearless honesty, and brings you forward into amelioration. Highly recommended.",
        sentiment: 1
    },

    {
        guid: '20c5a980-6dba-4b7c-b594-6b6bd83f8a6c',
        review: "The best books are those that make you feel. The best memoirs are those that make you remember your own experiences and, despite your differences, leaves you able to understand and empathize with the writer. NOONE CROSSES THE WOLF: A MEMOIR, does all of that.",
        sentiment: 1
    },

    //No, David!
    {
        guid: '5e6bb6c6-dacf-4947-05ce-08841daeffe4',
        review: "MY NAME IS DAVID AND I LOATHE THIS BOOK.",
        sentiment: -1
    },

    {
        guid: '24cca717-556a-46e9-2fee-02a4b8ae6a17',
        review: "One of my favorite children's stories, probably because it reminds of me of my oldest son when he was small. David seems prone to get in trouble, and even though he seems to have trouble behaving, his mommy loves him unconditionally. We love the illustrations; my grand daughter got the biggest kick out of the one where he has escaped down the street after his bath, running butt-naked. : )",
        sentiment: 1
    },

    {
        guid: '3fd0bc3a-91a3-4064-e570-fdfd4bf4ebb4',
        review: "My middle son's favorite book as a child. The little stinker - he especially loved the part when David ran naked down the street to avoid a bath. We giggled and giggled everytime we read this book together.",
        sentiment: 1
    },

    //Not My First Rodeo: Lessons from the Heartland
    {
        guid: 'bcc1638a-7e5b-4438-cef2-bb96fd3e61a4',
        review: "Great memoir. South Dakota governor Kristi Noem tells about her childhood on a ranch, her father's tragic death in a farm accident, and how she became involved in politics. The hard work and grit she learned growing up have helped her stand up for South Dakotans, including refusing to require mask and vaccine mandates during Covid (mandates which have proven to be useless and sometimes even harmful). Noem is an admirable woman and leader.",
        sentiment: 1
    },

    {
        guid: 'cb9a6970-62d9-41a4-50c7-a3070beebd86',
        review: "Good read about an incredible leader born and raised in South Dakot",
        sentiment: 1
    },

    //Of Mice and Men
    {
        guid: '044f943c-4313-4f86-d23a-0fdc3a508395',
        review: "Breathtaking prose, touching characters and a heart breaking ending. Who said only lengthy novel can make an impact?",
        sentiment: 1
    },

    {
        guid: '49dec475-1383-4376-e76e-d4f80137a262',
        review: "I can sum it up by saying that Steinbeck can write (and that is an understatement)! I have loved every book I have read by him. The descriptions are vivid, the characters are richly developed, and stories are powerful. Of Mice and Men is no exception. In fact, if you have been wanting to try Steinbeck but find the size of Grapes of Wrath or East of Eden daunting, this is a great place to start.",
        sentiment: 1
    },

    {
        guid: '24c99fbd-a678-4c08-eaba-caebbe655cf7',
        review: "Such an iconic staple of American literature.",
        sentiment: 1
    },

    {
        guid: 'c3d19212-567f-4726-65a0-4721c3944a3a',
        review: "If you want to feel real sad, absorb Steinbeck's pitch perfect prose right to your dome. A worthwhile bummer of a great book.",
        sentiment: 1
    },

    //Path Lit by Lightning: The Life of Jim Thorpe
    {
        guid: '94100654-0e79-4287-3ee5-be6085bd0534',
        review: "This was so long and detailed that I couldn't finish it. I was looking for an inspiring story of an amazing athlete, and wasn't expecting all the historical research and politics that were included. I will looker for a lighter read that is more focused on Jim Thorpe. ",
        sentiment: 0
    },

    {
        guid: '911f601f-7744-4a83-75c7-dd709a66ab98',
        review: "This is an excellent biography of Jim Thorpe who is considered by many to be the greatest and most gifted athlete in our country's history. It covers in detail the highs and lows of his life while giving a good understanding through background information of why he lived the life that he did. I recommend this book to anyone who wants a better understanding of the man, the myth and the legend that is Jim Thorpe.",
        sentiment: 1
    },

    //Pillow Thoughts
    {
        guid: 'a946d8dc-7edd-4bab-e7cc-8d1a6d8c8ca5',
        review: "Sadly, I didn't enjoy this poetry collection as much as I wanted to. They're like rundown sentences, often times cheesy and it lacks substance especially on the first half of this collection. I like some pieces on the second half but it's forgettable and it didn't leave a huge impact on me.",
        sentiment: -1
    },

    {
        guid: '80d2810d-2956-4520-d021-3c6926af4917',
        review: "Truth be told, I can probably go on and on about how mediocre and embarrassing this literary monstrosity is because God knows I never thought I'd ever find a poetry book that I would end up loathing more than the collections written by Lang Leav. However, there are much more important things for me to accomplish than to waste so many words on a book that shouldn't even warrant any positive attention.",
        sentiment: -1
    },

    {
        guid: '41053cd2-df76-4c83-5be6-531e301aaba6',
        review: "i'm so weak when it comes to sapphic poetry but i got to be objective, this wasn't that good",
        sentiment: -1
    },

    //Priest: A Love Story
    {
        guid: '8370254a-4e3c-4980-6a59-36664b62b245',
        review: "Priest is definitely a forbidden erotic romance, but it's more than that. It's a story of love, sacrifice and dare I say religion. Tyler Bell is a 29 year old man who has been a priest for the last 3 years. He has his reasons for going into the priesthood and these reasons are important to him. He's spent the last 3 years doing things by the book. He's not an immoral guy or a guy who breaks his vows. Then he meets Poppy. And everything changes.",
        sentiment: 0
    },

    {
        guid: '746d397b-f480-4c5f-9c8f-d6bc5b8bca2b',
        review: "Not only was the hotness factor there but the storyline was intriguing. Being in Father Bell's head was sinful and amazing. We got to see his struggle with temptation, the need to control his feelings, the reason he became a priest and his struggle to keep his vow to God and his church. It was a great read! I did not want to put in down and finished in a day.",
        sentiment: 1
    },

    {
        guid: '7f9dcac1-8402-4fc1-555d-d1a3d8496636',
        review: "I was one of the many who was intrigued by the forbidden aspect of the book. That was the catch. But my problem was, apart from the obvious reasons of him being a priest, I found the forbidden aspect of the story weak.",
        sentiment: -1
    },

    //Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail
    {
        guid: 'e5ce0a1c-0f45-4982-2939-945f2f72c53b',
        review: "This book is nothing but thousands of statistics in charts and graphs all researched and put together by his huge staff to torture the data for his own self-serving interests for the purpose of a book. I got through about 150 pages, skimmed the rest and could find no intelligent discussion except what supported his position. It has some good points but all speaking to the obvious. Nothing to do with critical thinking here.",
        sentiment: -1
    },

    //Pulphead: Essays
    {
        guid: '21fd720f-3fc3-49b8-e3af-4514510c3236',
        review: "Uneven collection of essays, but when they're great, they're especially great.",
        sentiment: 0
    },

    {
        guid: 'f6713ee9-1e58-464f-2eb2-b20999a5d22a',
        review: "This book, without going overboard, exploded my brain. In one of my progress updates, I said it was like an album where every song is perfect and the sequencing is exactly right. And that's still how I feel about it.",
        sentiment: 1
    },

    //Quarterlife: The Search for Self in Early Adulthood
    {
        guid: '96fb772b-bd74-4489-02ea-0517b70d66ab',
        review: "Although I found the stories about the author's therapy clients interesting, I couldn't help but think that this book could have benefited from more fleshed out chapters.",
        sentiment: 0
    },

    //Reminders of Him: A Novel
    {
        guid: '440c4540-8e31-4743-4509-4038a3590b52',
        review: "my favorite thing about these books are the writing and characters. without even really noticing it, i found myself relating to Kenna (mc) and the emotions she went through. her growth and self forgiveness was the best thing to read through out the novel. she proves people make bad decisions but that doesn’t mean they are bad people. she shows that in her selflessness and fight.",
        sentiment: 1
    },

    {
        guid: '320850ff-3b5c-4a1d-f757-de5a7512c162',
        review: "i felt different reading this one. instead of the usual butterflies and heart flutters her books normally give me, this feels very raw and heavy. its definitely a life story more than it is a love story.",
        sentiment: 0
    },

    {
        guid: '447e7102-5a7d-4edf-f6f5-50ce13bb0940',
        review: 'This is one of those books that\'s very hard to put down once you start and I AM CRYING. AGAIN. THANKS COLLEEN.',
        sentiment: 1
    },

    //Results: Getting Beyong Politics to Get Important Work Done
    {
        guid: '2829c6a5-97ee-4fb8-9508-6bf8e94f59f4',
        review: "I highly recommend this book. The stakes for making government work better and the stakes for demonstrating the value of serving the collective good have never been higher - nor has the need to deliver with urgency ever been greater. Godspeed.",
        sentiment: 1
    },

    {
        guid: '75fa609c-c2c4-4167-05de-cbc6ba637e2f',
        review: "It's not often that you find public sector leaders who value the daily grind of making government work. This book is inspirational in its grounding in the practical tools and process that can truly improve the lives of people.",
        sentiment: 1
    },

    //River of the Gods: Genius, Courage, and Betrayal in the Search for the Source of the Nile
    {
        guid: '22f398b2-fc2d-466d-e79d-1c84bb655dd8',
        review: "An amazing book about the search for the sources of the Nile undertaken in the mid-19th century. It never ceases to amaze me how brave explorers were in the times when you could rely merely on your own abilities and courage to make journeys into uncharted territories.",
        sentiment: 1
    },

    {
        guid: 'e7d446fd-089e-4f9f-e320-74baadd2a81e',
        review: "This may be the best book I have read this year and I am finally in the majority of other readers! I had read one other of Millard's works which I thoroughly enjoyed and when I saw the reviews for this one, I knew that it would be equally interesting and well-written. It certainly was!",
        sentiment: 1
    },

    {
        guid: '953575d6-9dd1-4bbf-7203-ec342fa739ce',
        review: "I will honestly state that Candice Millard's River of the Gods admittedly wasn't able to grip me nearly as much as her past works, River of Doubt and Destiny of the Public, were successfully able to.",
        sentiment: 0
    },

    //Saving Proxima
    {
        guid: 'ac5223d8-ae66-484c-212e-d20bf252997f',
        review: "I thought the book started out very slow. There were a few important events in the first half of the book, but events seemed to drag until the expedition actually started on its way. After that things do pick up, with new discoveries, dangerous plots, and outright mysteries. In the end, it's obvious the story is not complete so I expect a sequel at some point",
        sentiment: 0
    },

    {
        guid: '400cbc3c-a3d4-433e-8637-4da21195fc2a',
        review: "It took awhile to get into the plot, but then I was hooked. My physics knowledge is abysmal, so I can only hope the science was mostly right. But here's why I held back my praise, just when I thought I was turning the page of the next chapter, the book ended!",
        sentiment: 1
    },

    //Self Love Poetry: For Thinkers & Feelers
    {
        guid: 'e0eced34-7e28-43c0-4862-9e765acc3d62',
        review: "Without a question, this is one of my favorite poetry collections of 2021. The major concept of this poetry is SELF LOVE, and I love how the words were elegantly shown and poetry was created from it. Furthermore, this book introduces a novel concept of thinkers and feelers.",
        sentiment: 1
    },

    {
        guid: 'fc1145a8-3f16-41f9-6214-68848c3898dc',
        review: "I found it really interesting that she would basically write one poem twice - a version for the \"thinkers\" and the \"feelers\". I've never seen that before and really enjoyed it!",
        sentiment: 1
    },

    {
        guid: '7e190f12-b903-4e18-3b79-620f01c4bd86',
        review: "Loved this book. Very therapeutic. I feel like it would need to be read in context of her other books for the philosophy to be internalized, but it's a great feel good book that reminds you to slow down and love yourself.",
        sentiment: 1
    },

    //Self-Help (Vintage Contemporaries)
    {
        guid: '2871d71d-12f3-4ab2-2d3a-648e3b519aea',
        review: "I found this book boring. I had a really hard time getting through it. The plot was thin and the short stories didn't leave you invested.",
        sentiment: -1
    },

    {
        guid: 'b760acc6-9e30-4787-6656-9c1922e1ac21',
        review: "So, I read this book slowly through this year, and I must say, it is one of my favorite reads of this year. It's an interesting compilation of short stories that can make you laugh on one page and cry on the next. Well written and well organized. Great book.",
        sentiment: 1
    },

    //Self-Love Workbook for Women: Release Self-Doubt, Build Self-Compassion, and Embrace Who You Are
    {
        guid: '91b90e79-b4c4-4dc3-488f-8084feefa93a',
        review: "This was a good, shall I say, “entry-level” exploration into self-love and positive self talk. Some of the mantras and passages were too basic or general to truly illicit a deep dive into the foundation of one's negative self-talk. Overall, I enjoyed it.",
        sentiment: 1
    },

    //Short Stories in Spanish for Beginners
    {
        guid: '4eba57e3-42ab-45f4-7c1b-8b3ff6e7649a',
        review: "It's painfully obvious that the author is not a writer. The stories are dull and lack imagination. Thus, \"Learn Spanish the fun way\" is most definitely an overstatement.",
        sentiment: -1
    },

    {
        guid: '77d83254-14fd-48a7-3e0f-55fbb6c7f0bf',
        review: "This is a great tool for taking your beginner Spanish to the next level. I definitely felt a sense of accomplishment when I finished each chapter and got the questions right! The big downside is the stories are silly and not as enjoyable as I'd hoped. They definitely feel like they're out of a kid's early reader, and this feels like a text book. I was looking for a more casual reading experience that didn't necessarily feel like I was supposed to be learning as I read. I'll certainly keep this on hand and revisit when my Spanish skills improve. I already have the second book in this series so I'll give it a try. At least I know what to expect this time.",
        sentiment: 0
    },

    //Slouching Towards Bethlehem: Essays
    {
        guid: '33903321-c8b4-431c-f9fd-1d61a11b836b',
        review: "Just unbelievably good. I'm not the right person to write about Joan Didion, but my God, she is real and she can write.",
        sentiment: 1
    },

    {
        guid: '3d6b6485-c3b2-4dc8-f592-0ffeba59ca82',
        review: "like with any didion work, she always approaches her subjects with such precision and purpose. every language choice is intentional, every sentence is so eloquent, every detail is meticulously written. she perfectly captures the essence of 1960s california and its cultural politics, somehow making me nostalgic for a place and time i never even experienced. i haven't read much else on the subject, but i can't imagine anyone writing about california as well as joan didion.",
        sentiment: 1
    },

    //Snow Family
    {
        guid: '6ecbf33b-cfe0-4785-5a63-9b0d4b93b50b',
        review: "Cute story, fantastic illustrations.",
        sentiment: 1
    },

    {
        guid: '5acf755d-709f-4ff6-7921-0eacb044402d',
        review: "my daughter really liked this book. very cute",
        sentiment: 1
    },

    {
        guid: 'da9d8210-0bc4-49b4-31bb-8dc6d99f9128',
        review: "A cute book. My kindergarteners like it, but I can't see children older than 2nd liking it. The illustrations are nice.",
        sentiment: 1
    },

    //Sparring Partners: Novellas
    {
        guid: 'c94db205-b73f-491b-c307-31b84cb08df1',
        review: "It has been a while since I enjoyed a book as much as I enjoyed this one. I think it could have been a little longer, but then perhaps there's a sequel.",
        sentiment: 1
    },

    {
        guid: '98ab8c25-bef9-4dd4-575c-78a964e8319d',
        review: "This just left me disappointed as I've really enjoyed the majority of his previous novels. Hopefully his next book will get back to form.",
        sentiment: -1
    },

    //Stella Keeps the Sun Up
    {
        guid: '91342251-93bd-4014-d104-b06737d01593',
        review: "This is the first in a picture book series. In addition to the sweet story, I absolutely loved the art and the endpapers. The illustrator's attention to detail, with Stella and Roger, made the book sparkle. I thought the premise was so fun, especially for kids. I love kids' determination when they genuinely believe if they just try hard enough at something, they can make it happen. The sense of awe and wonder and determination to realize what they think should happen, it's amazing to see.",
        sentiment: 1
    },

    {
        guid: '4acf57b1-8c1a-4792-51db-c2a2af829cde',
        review: "Mmm, interesting story about a girl and her talking stuffed animal not wanting to sleep at night, so deciding to try to keep the sun up in the sky. Not my favourite plot, and the talking animal is a bit strange, but it resolves ok.",
        sentiment: 0
    },

    //Tea Time Self-Talk: A Little Afternoon Bliss for Living Your Magical Life
    {
        guid: 'fc158387-960b-4a22-8e4a-aafc816abfa7',
        review: "This book speaks to me more. I am a tea drinker but that's not why. The positive self talk is the best.",
        sentiment: 1
    },

    //Thank You for Your Servitude: Donald Trump's Washington and the Price of Submission
    {
        guid: '5bd0309b-622e-40a6-dba6-b33aa3b38cab',
        review: "i dont know why i read books like this",
        sentiment: -1
    },

    {
        guid: 'eea0c4cb-34b6-4047-8920-f2f2a8556a2d',
        review: "Unfortunately this book is a cluster of lies. It is written with such a air of hatred and close mindedness it’s just bad period.",
        sentiment: -1
    },

    {
        guid: '112b0ad4-8482-4d81-8119-ff8b420df5a3',
        review: "There is nothing you didn't already know, just a new twist. The story tries to explain the ridiculous, blind, self-serving people who sacrificed themselves at the altar of Trump.",
        sentiment: 0
    },

    //The 48 Laws of Power
    {
        guid: 'fec6872d-fecf-4d73-f119-d5031ee3edbd',
        review: "I think this is a horrible book. Written well enough, sure, whatever, but just so very, very wrong, unless you have no morals. At least with Machiavelli you could make the excuse that he wasn't so much advocating what he said, but merely describing reality. This guy is advocating evil. As I read it I couldn't help wondering how many politicians actually think this way.",
        sentiment: -1
    },

    {
        guid: '13247a8b-a7a9-4bb9-e75c-8160324e303a',
        review: "If the author is evil for writing this...am I evil for enjoying it?",
        sentiment: 1
    },

    {
        guid: 'b4b6a3ef-da41-419e-ab4d-fc27de157295',
        review: "Although many of the rules might seem devilish, they'd better be considered as lessons to be aware of in perilous social life. This book is unspeakably well written. Everyone can definitely benefit having it read for its lessons are ones that have been tested and utilized throughout the history by bold figures.",
        sentiment: 1
    },

    //The Alchemist, 25th Anniversary: A Fable About Following Your Dream
    {
        guid: '657915fd-2764-407b-a1e9-ce04f414cdef',
        review: "I'm not done reading it yet, but when I started. I read like the first 80 pages nonstop. Really soak in the message and lessons. I can't wait to finish this book.",
        sentiment: 1
    },

    {
        guid: '307e9d22-ddf9-4823-092b-6c2011b0b3d2',
        review: "This book was a poorly written schlock of new age rubbish. It started out ok but then about the 10th time “Personal Legend” was referenced it lost me. The narrative is ok until the boy leaves the crystal store and then it's just unreadable. I really don't see anything deep or profound here other than persevere I guess and you'll get what you want. Whatever.",
        sentiment: -1
    },

    {
        guid: '1d991f7e-528c-4dc5-e97f-aed5200f4f64',
        review: "There are too many things one can learn from “The Alchemist”. Its all about following your dream and about taking the risk of following your dreams, which is actually so difficult to do and there are very few people in this world who actually do, I mean risk it all, just to follow your heart and your dream. Beauty is, the author is so right in saying that when u decide to follow your dreams the entire universe conspires in your favour which he called as the “beginners luck” and we all have been witness to this beginners luck at one or other point in our lives.Also, he talks about a stage in our journey towards realizing our dreams, where everything just goes haywire and there is everything working against us and it almost takes us to the brink of abandoning everything and just getting back to what was so familiar and comfortable.",
        sentiment: 1
    },

    //The Art of the Personal Essay: An Anthology from the Classical Era to the Present
    {
        guid: 'f721c9bf-666a-4b1d-e5aa-f6f0afdabcf0',
        review: "So many great essays in this anthology that it would be worthy for that reason alone, but Lopate's organizational principles make this especially useful for the essayist in search of models, or for the reader who is chasing the many forms of a specific type of essay, or for anyone who enjoys reading personal nonfiction. I never fail to feel a buzz of anticipatory joy when I pick this volume up.",
        sentiment: 1
    },

    //The Bernstein Bears' Big Book of Science and Nature
    {
        guid: 'edce687d-e922-4f50-4122-0036192ef5b7',
        review: "The science is good, and it's cute...added bonus is that my daughter has been devouring it telling me what page she's on constantly! She's age 10, but she has reading challenges & she's finding this book very engaging.",
        sentiment: 1
    },

    {
        guid: 'e2d192fa-3803-4eae-968d-b60ea6284413',
        review: "It is a very great book to read. I am a berestain bear fan. I love this book because it took the view into nature.",
        sentiment: 1
    },

    //The Best American Short Stories of the Century
    {
        guid: '0f9089ee-623e-4384-fa76-8968bad1e354',
        review: "An incredibly un-putdownable selection of the best short fiction writing of the 20th century. It's rare I consider short story collections page turners, but there was just one masterful read after another.",
        sentiment: 1
    },

    {
        guid: 'ed657f36-5b87-4446-3951-a87a03ff7007',
        review: "There a few great short stories here, but most of them are mediocre at best. This is most definitely NOT a collection of the best American short stories.",
        sentiment: 0
    },

    //The Best Short Stories of Fyodor Dostoevsky
    {
        guid: '50c92b5a-e560-4185-3193-3f718bbed047',
        review: "It was good but nothing great either. Sometimes a little draggy.",
        sentiment: 0
    },

    {
        guid: '213727d6-9b5a-4ba7-f103-fca4d6d4e863',
        review: "Been revisiting this particular collection since 9th grade. Dostoevsky is a master, plain and simple, who understood psychology and suffering like few others ever have. This anthology represents the very best of his shorter works, an excellent introduction to a genius we need to find again.",
        sentiment: 1
    },

    {
        guid: '47c6c983-758c-41fe-87fe-26dc2ac26d01',
        review: "Stunning. I enjoyed all of the stories even though they were not the happiest.",
        sentiment: 1
    },

    //The Big Book of Science Fiction
    {
        guid: '7c1f09fa-bdb6-4833-2bf3-e71b008ee0f6',
        review: "I'll keep it simple. If you either read much speculative fiction or write, this is kinda a MANDATORY book for you to own. It is a Bible of science fiction short stories and probably weighs as much as a Guttenberg. I have not had such a sense of accomplishment in finishing a book from cover to cover since I finished reading James Joyce in high school. So very worth it.",
        sentiment: 1
    },

    //The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma
    {
        guid: 'e146867a-827c-4aaa-ee35-ee2770024bdd',
        review: "The Body Keeps Score is my jam. It's better than that. It's like my slammajam. This is my fave book of the year so far, by a bunch.",
        sentiment: 1
    },

    {
        guid: '0f8744cd-94db-4e8b-89a4-8dcffaabfc32',
        review: "As a survivor of sexual abuse and trauma, I found this book triggering and lacking the enlightenment I expected, given the reviews. I felt the author showed more compassion for the soldiers who raped and murdered than the rape victims, and the ways in which he discussed the two left me feeling the women weren't as well humanized.",
        sentiment: -1
    },

    //The Complete Short Stories of Ernest Hemingway: The Finca Vigia Edition
    {
        guid: '78fc3e15-d8c7-4643-7c30-4c222c3c5a5f',
        review: "Nobody does short stories like Hemingway. Moving between African savannahs, Spanish and French cities and various American settings, he always gets to the point. Human hope and happiness followed by disappointment and loss.",
        sentiment: 1
    },

    {
        guid: '64503606-2036-4940-f72e-e41d3641c4ac',
        review: "It is hard to overstate how absolutely wonderful and powerful a writer of short stories that Hemingway was. This collection contains so many wonderful sketches full of spit, vinegar, blood, and whiskey stains. Through them we experience attempted murder on a train, the Spanish Civil War in Madrid, the First and Second World Wars in Italy and France respectively, fishing, hunting, and drinking. The prose is always terse but incredibly saturated in description and meaning.",
        sentiment: 1
    },

    {
        guid: 'a64388aa-2734-4aa6-75c3-6a3c0845a3dd',
        review: "I'm a huge fan of all of Hemingway's works, but this one takes the top. The stories in here are so moving, so real, vividly portraying all kinds of manifestations of human nature.",
        sentiment: 1
    },

    //The Daughter of Doctor Moreau
    {
        guid: '6bba0484-fa7c-47d1-929f-95f89aa1528e',
        review: "Finally a brand new, refreshing, creative retelling of H. G. Wells' “The island of Dr. Moreau” with feminism vibes, taking place in Yucatan peninsula during the war of Maya people who fight for their freedom against Mexican tyrants.",
        sentiment: 1
    },

    {
        guid: '87cd216a-3906-43f3-6b16-7406ac725b15',
        review: "Well, that was out of my comfort zone!",
        sentiment: 0
    },

    //The Essay: A Novel
    {
        guid: '5bbc738a-62c4-41f1-efc4-65f56dd88178',
        review: "This book was recommended to me by a dear fellow reader. I thoroughly enjoyed the great combination of diversity and gumption. Definitely recommendable for those seeking a five star success story.",
        sentiment: 1
    },

    {
        guid: '8dbf1c3f-2ca9-44a6-77a6-000fa500b476',
        review: "Oh. My. Goodness. This book! I love it so much. Very very few books have made me cry, and this one did about halfway through. I knew then that this book was something special. The writing is beautiful. Every moment of this book is worth your time, touching your soul and reminding us how to love and care and stand up for others. Just read it. Seriously. Now in my list of favorite books of all time.",
        sentiment: 1
    },

    //The Fascinating Science Book for Kids: 500 Amazing Facts!
    {
        guid: '5b8f5e91-dd7e-4313-2b05-59cc7be8adfb',
        review: "Good book. I enjoyed it. I liked how it had different sections about things. I definitely recommend it if you like science.",
        sentiment: 1
    },

    {
        guid: 'fce25700-054a-468e-7744-db8d19a9b5aa',
        review: "Bite-size facts, easy to read. No fluff. Good illustrations. I learned a lot.",
        sentiment: 1
    },

    //The Handmaid's Tale
    {
        guid: '57cd4a9c-386f-45c2-f8aa-c8b88a9fe79a',
        review: "I've been moved by books in the past, many times, but I've never before read a book that has emotionally drained me to such a degree. This is frightening and powerful.",
        sentiment: 1
    },

    {
        guid: 'b3d1fb3b-ec9f-4751-1b1c-d903786208d0',
        review: "I was not able to connect with the Characters in the book at all. It was a task to completely finish this book at all. I know I am in the minority, but I don't know what all the hype was with this book. I think that Atwood was long winded in her writing style and did not help with the connections with the Characters.",
        sentiment: -1
    },

    {
        guid: '5b48c3a3-2ceb-404d-f297-69b91f6c810c',
        review: "What can I even say about this masterpiece of a book? What can I even say that hasn't already been said? I'm awed to my core, this book is a prediction, a revelation, a hymn.",
        sentiment: 1
    },

    {
        guid: '0f59f7e9-1c21-441d-3c26-db10dd8e8fb3',
        review: "The Handmaid's Tale by Margaret Atwood is a brilliant, endearing, scary as heck book.",
        sentiment: 1
    },

    {
        guid: 'd97b7c9e-a534-484c-db0b-cfd8ca35407b',
        review: "After reading 'The Handmaid's Tale', I can see why this dystopian classic has made such an impression on so many. This is a book that definitely hangs with you, haunting your thoughts, long after you finish the book. It is thought-provoking and terrifying.",
        sentiment: 1
    },

    //The Hound of the Baskervilles
    {
        guid: 'b6a9a91b-3b51-452c-d086-feeae6a50093',
        review: "I think this is my favorite Arthur Conan Doyle story.",
        sentiment: 1
    },

    {
        guid: '9a5e31be-d34d-4a7d-f06e-d5a0b4be2d31',
        review: "While reading the novel, I had the same feeling that I have while watching an Alfred Hitchcock movie - keeps me thoroughly engaged, boggles the mind, swooning it with fright, and makes me fall off my seat with an admiration so profound that I find it impossible to resist to read/watch another one of it.",
        sentiment: 1
    },

    {
        guid: 'db0609e2-9124-43e1-bc4c-cd3eaa7f4b6b',
        review: "I really enjoyed this mystery, which was quite surprising as Doyle's literary style is what I would describe as intricate, 'old-fashioned' and very flowery.",
        sentiment: 1
    },

    //The Lady's Mine: A Lighthearted Christian Romance Novel set in the 1870's California Gold Rush
    {
        guid: '9f83d3a2-fce1-496d-6bdf-8223845618e8',
        review: "This book is another great book by Francine Rivers! This is not nearly as heavy as some of her other books. There is a lot of humor and a well developed story. I read it the first time fairly quickly and thought, wow, this is definitely not like Redeeming Love or The Atonement Child.",
        sentiment: 1
    },

    {
        guid: '552c0925-c815-40dd-c849-827122f6252c',
        review: "This book is not near as good as previous books. Too much conversation that is hard to follow and it has too much emphasis on ancillary characters. The title is deceptive. Very disappointed!",
        sentiment: -1
    },

    //The Last Thing He Told Me: A Novel
    {
        guid: 'c7458be1-1a2e-4c26-3608-7195490838f9',
        review: "This is another book that explores how we remember things and what triggers those memories. That is always intriguing to me, so this book was enjoyable and kept me engaged to the end.",
        sentiment: 1
    },

    {
        guid: '6a387fa1-6e54-49ca-693f-a2980735d47e',
        review: 'Loved the pace and mystery! As a matter of fact, I went and purchased another book by the same author because I enjoyed this one so much!',
        sentiment: 1
    },

    {
        guid: '4c435692-c596-4d7b-7bb0-910fc212ea46',
        review: "Soooo good! Page turner. Never slows down. Kept me curious & guessing.",
        sentiment: 1
    },

    //The Leaf Thief
    {
        guid: '47de3071-1a02-481f-5ea9-436cf9b9d9a6',
        review: "A very cute children's book explaining Fall with a squirrel who tries to find missing leaves from his tree.",
        sentiment: 1
    },

    {
        guid: 'b02aad05-7ccc-452b-5ab7-b2663aadbac7',
        review: "This was really cute and funny! It's sweet that Squirrel's friend Bird explains autumn to him, but in a slightly more understanding way would have been a little better.",
        sentiment: 1
    },

    //The League: How Five Rivals Created the NFL and Launched a Sports Empire
    {
        guid: '9b566539-abe2-4749-13db-15e97dba98a4',
        review: "If you're a fan of history and the National Football League, this is the book for you!",
        sentiment: 1
    },

    {
        guid: '556b5949-4714-47b0-b901-a759e6bdf759',
        review: "A great book, providing an early history of the National Football League.",
        sentiment: 1
    },

    //The Left Hand of Darkness
    {
        guid: '9ba40f45-9a35-4c73-67dd-e804251c323c',
        review: "This is my second Ursula Le Guin novel, and I can tell she's not really the kind of writer that appeals to me. There's a rarified style to her writing that prevents me from connecting to the characters.",
        sentiment: -1
    },

    {
        guid: '21f55782-e53f-4ed3-7bdd-d5bf898501c9',
        review: "Sublime in tone and voice. There's not a superfluous line in it. Beautiful.",
        sentiment: 1
    },

    {
        guid: '40ed3fc1-4c0d-44e1-94c7-c1e8c38e7b13',
        review: "There is a bit of suffering involved in the reading of The Left Hand of Darkness. I took on the book at a time in which I was too busy to give it its proper due and conjuring a winter wasteland is painful when the summer's sunlight lands across the book's pages. It's a book that's more satisfying in the abstract than appealing during the actual reading. As an academic exploration of classic sci-fi, it fits the bill even if it doesn't make for an enjoyable experience overall.",
        sentiment: 0
    },

    //The Letter Keeper
    {
        guid: '2dca4710-823e-478d-b68c-e10a94ceaf03',
        review: "For me, this was the perfect recipe for the second book of a trilogy. The first one was firing on all cylinders. There was. So. Much. Action. In this second book, Murphy returns to Freetown with the four women he rescued in 'The Water Keeper.' This is not 'happy ever after,' but there is hope.",
        sentiment: 1
    },

    {
        guid: '922517c3-af34-4c5e-a509-f72be98d5dac',
        review: "The start was good. The end was good. The middle lasted too long.",
        sentiment: 0
    },

    {
        guid: 'ecdd7233-6a9e-4b55-5a7d-3387c96b8846',
        review: "Lots of background details. Action packed at the end.",
        sentiment: 0
    },

    //The Lincoln Highway: A Novel
    {
        guid: '3165e907-bccf-4d0d-910a-77c7da97cf50',
        review: "Interesting, one of a kind plot. Writing didn't hold my interest from cover to cover. Too bad,maybe a few too many character changes? Worth reading despite being draggy.",
        sentiment: 0
    },

    //The Maid: A Novel
    {
        guid: '9116f307-caf5-47ef-b94c-401053b55fbf',
        review: "The reading world is divided on this novel and after finishing I see why. Molly is very gullable and while I think the reader is supposed to find that endearing and her quirks humorous. She became intolerable very quickly. The twist at the end was good, but I found the majority of the story very aggravating.",
        sentiment: 0
    },

    //The Murder of Roger Ackroyd
    {
        guid: '3b528f26-6ed2-4e3a-ab30-fc4f9f8bce88',
        review: "That was really good. Very solid mystery, did not see the end coming until the last second. I want to reread it right away to see everything I missed the first time.",
        sentiment: 1
    },

    {
        guid: 'e31b4ebd-a0ea-4eb6-36d2-8818ac33e8c5',
        review: "When you figure out who the killer is before the murder even takes place…",
        sentiment: -1
    },

    {
        guid: '8ce4d5c2-badd-4f09-44b7-b831f33c7f85',
        review: "This is iconic enough to be on all those lists for a reason... and re-reading it shows just how deft Christie is. With secrets uncovered, a wonderfully nosy Caroline and Poirot trying to grow prize marrows, there's so much to enjoy here. And oh, *that* ending!",
        sentiment: 1
    },

    //The Penguin Anthology of Twentieth-Century American Poetry
    {
        guid: 'e6a76008-1dea-4f45-2a48-402cfb2fe913',
        review: "This is a beautiful book. I heard Dove interviewed by Bill Moyers, and immediately bought the book. I have been ending the day at school reading a poem twice. Not talking about it, as Dove requested, just reading it. The poems selected in the volume have a range and depth to them. Dove's notes on each author are helpful insights to the poems.",
        sentiment: 1
    },

    {
        guid: 'e2a13776-2453-4c3c-e17c-11b93c3501b5',
        review: "Omg I spent so much effort to find out that the best examples of American poetry mostly stink!",
        sentiment: -1
    },

    //The Pope at War: The Secret History of Pius XII, Mussolini, and Hitler
    {
        guid: '8ecc6986-5035-4ed9-5ff1-cf913c4294a1',
        review: "This is the first book that I have read by this author, and it most certainly won't be the last. Truly fascinating and eye-opening. The amount of things that happen behind closed doors is astounding.",
        sentiment: 1
    },

    {
        guid: '00b58cb1-1841-4cde-c798-6677033add1d',
        review: "Well researched and insightful read that sheds new light on the Vatican during WWII. Older WWII books often vary in their treatment of the Vatican during this period and this book draws directly on Vatican papers to settle a lot of those questions.",
        sentiment: 1
    },

    //The Power of Now: A Guide to Spiritual Enlightenment
    {
        guid: 'c8c7ee93-6e6d-462a-cdcf-011324c36e4d',
        review: "It would be easy to dismiss this book as a fruit-salad of New Age and pseudo-buddhist clichés, mashed to a fine purée of nonsense and sold as a cure for what ails you in our age of secular alienation. In fact, that is what it is and that is what I'll do.",
        sentiment: -1
    },

    {
        guid: 'ae2ad5c2-a91e-440e-fd54-7a2345658999',
        review: "There is no nice way to say this. I hated this book with a fiery passion. It did not make me feel at peace.",
        sentiment: -1
    },

    {
        guid: '469a56f4-e755-44a0-aa78-002fa7c0d50c',
        review: "It's the way this book made me feel like I was in a University lecture",
        sentiment: 0
    },

    {
        guid: 'fa1aee61-5bc5-4c68-ebd3-11d857e21c0c',
        review: "This is an amazing book. Try not making any of your religious beliefs the reason for not reading this book. Being a Buddhist myself, I can see how Buddhists might not give this book any chance due to the word 'Enlightenment' in its title. Give this book a try and it'll sure to be at least an eye-opener for you in ways one cannot imagine.",
        sentiment: 1
    },

    //The Redhead of Auschwitz: A True Story (Holocaust Survivor True Stories WWII)
    {
        guid: '050a5d8c-c8ca-4d3b-9eb1-fd9e65c06d35',
        review: "This was a tear jerker! Rosie's true story is one I'll never forget. Heart breaking and beautiful story of resilience and courage that we must never forget.",
        sentiment: 1
    },

    {
        guid: '70319f92-9289-4c8e-4b6a-779d52e830c7',
        review: "Once I started reading this book I couldn't put it down, I finished it in two nights!",
        sentiment: 1
    },

    {
        guid: '9ca12bb5-bb78-445a-ebd2-aedf78d32f5b',
        review: "We shall never forget. What an amazing and courageous woman. Everyone should read this book",
        sentiment: 1
    },

    {
        guid: '3a7745c4-a5fe-421d-59f8-5db2a7388604',
        review: "As soon as I closed this book, I balled my eyes out. I so appreciated this story and I think everyone should read it. I really cherished Rosie's child-like spirit while also being courageous as hell. She's also taught me a lot about faith.",
        sentiment: 1
    },

    //The Return: Trump's Big 2024 Comeback
    {
        guid: 'f1a3ecb7-7b8c-4fe9-1ced-620a4f60b1ce',
        review: "This is a real easy read outlining how we can participate in reclaiming the America our forefathers invisioned for this great country. The left have got to be stopped in 2022 and 2024 or there will be nothing left for our future generations definitely not a constitution if the brainless left have any say about it. Thank you Dick Morris I love this book!!",
        sentiment: 1
    },

    {
        guid: '60ca9737-04f0-468d-6246-50b2e59a7c46',
        review: "Radical right wing propaganda, this will end up like his prediction of the 2012 election. Cult of personality and identity politics will be the death of this country. If you care about any woman or person of color then you cannot in good conscience support either of these men. Dick was an advisor to Clinton and has helped countless evil politicians since then.",
        sentiment: -1
    },

    {
        guid: '3afe8598-7bb0-441a-3110-5c7208413233',
        review: "I was enlightened in many areas of our govt by reading this book. I always wondered how Dick Morris switched from supporting democrats to supporting President Trump. This was a very good read.",
        sentiment: 1
    },

    //The Saints of Swallow Hill: A Fascinating Depression Era Historical Novel
    {
        guid: 'eac2224f-274b-4890-e361-70c06b6765fc',
        review: "I was not bored with useless details and so enjoyed this story of characters who I hoped would succeed in life and love. Great book to read. Could not put it down.",
        sentiment: 1
    },

    {
        guid: '22e86029-c1a5-4a8d-6e48-07d7a74d74f0',
        review: "As to like or dislike, there was nothing to dislike.The story captures the reader and the history gives a solid base for the story. Writing is VERY good and the use of dialect and vernacular well done.",
        sentiment: 1
    },

    //The Second Mrs. Astor; A Heartbreaking Historical Novel of the Titanic
    {
        guid: 'ae3248ed-e9b9-4db7-e6c8-4ea4cd0aa069',
        review: "Who doesn't like a book about the Titanic?",
        sentiment: 1
    },

    {
        guid: '35b6ee0e-529f-402f-f205-829f2e7e0bab',
        review: "I love anything with Titanic! And you add a great love story and I'm totally captivied.",
        sentiment: 1
    },

    {
        guid: 'e30a2c10-79c1-42a2-26f8-40a5b9c98cee',
        review: "The book was okay. The writing in my opinion was weak. Too romanticized considering the heavy topic it covered.",
        sentiment: 0
    },

    //The Self-Healing Mind: An Essential Five-Step Practice for Overcoming Anxiety and Depression, and Revitalizing Your Life
    {
        guid: '21138687-5ca9-4274-1440-379ae7cd87ed',
        review: "I loved this because it was not a self help book but a gentle reminder book on the importance of self care. I like the author's writing style.",
        sentiment: 1
    },

    {
        guid: '27b4e1de-c810-46fa-fb5b-593bf9b0f4c3',
        review: "This was really a great book. The personal stories, including Dr. Brown's own story, were helpful and the self-care strategies were doable. I look forward to sharing this book with my friends",
        sentiment: 1
    },

    //The Seven Husbands of Evelyn Hugo
    {
        guid: '37d73ea2-b78c-43f9-a9b4-9d66287ca4ba',
        review: "This book was so, so, so GOOD!! I swear I was barely two pages in and already knew that I'd love it with all my heart! <3 There's just something about that golden Hollywood era that captivated me right from the beginning and once Evelyn entered the scene I was a goner. I just loved the way her story was told!",
        sentiment: 1
    },

    {
        guid: '3670d544-797e-4e67-f7e7-8951ed7a671f',
        review: "This right here. This is why I read. For the joy and privilege of coming across an exquisite story like this and being swept up in its magic.",
        sentiment: 1
    },

    {
        guid: '7dd61f80-d755-4c80-42ef-0975cd89ce65',
        review: "This is genuinely one of the most remarkable novels I have ever read. It is a favorite of the year, it will be a favorite of all time. I am wholly enchanted by The Seven Husbands of Evelyn Hugo and I will never forget how much I adore this book.",
        sentiment: 1
    },

    {
        guid: '1f8befba-6fc0-4add-462b-d5c186b1f97b',
        review: "I loved how easy it was to become immersed in this story and the effortless diversity!",
        sentiment: 1
    },

    //The Splendid and the Vile: A Saga of Churchill, Family, and Defiance During the Blitz
    {
        guid: 'ab1aa52c-f6a0-4c1e-1cd2-31e58263fc66',
        review: "What a poignant read for the times we are in as the world is fighting a different type of war without the guns and bombs and those in government must make the tough decisions to keep us safe. A few Winston Churchills wouldn't go amiss in heading the Governments of today.",
        sentiment: 1
    },

    {
        guid: '8ca61691-ca78-4bcc-7c92-b210ab05eff9',
        review: "Finally! I absolutely love Erik Larson's other works, but I could not seem to get interested in this one. And, I couldn't figure out why until almost the very end. There were too many story lines, centered around too many people that I found uninteresting, for me to stay with it for more than a few pages at a time. And, having read “In The Garden of Beasts” - which I loved - it seemed like this story was a result of all of the research and notes compiled and left over from that book. Anyway, I'll read anything Larson writes, but this one fell way, way short.",
        sentiment: -1
    },

    //The Story of Jane Goodall: A Biography Book for New Readers
    {
        guid: '7f106d79-baa6-4d75-c707-95facbed3f83',
        review: "I really enjoyed this. The text was easy to understand, and I could envision teachers and parents reading this aloud with ease. I especially liked the extra features, including the glossary, \"think tank\" questions for further inquiry, timelines, and annotated maps. The extra features did not distract from the story at all and certainly enhanced my reading of it. I would definitely recommend this book.",
        sentiment: 1
    },

    {
        guid: '4da55273-c37e-4b7e-1141-36290794cae1',
        review: "This is a nicely illustrated biography of the illustrious Jane Goodall geared toward new readers. It has great facts, and I love that it includes a photo of Jane and Jubilee. While this book might be a good introduction to a textbook-feel, I worry that for a person who's just learning to read, the pull quotes, sidebars, timelines, etc. that break up the text will be more of a distraction than a cool feature. I'll have to test it out on some kids and see what they think! I like that there's a quiz at the end, and overall, I find the book engaging and fun!",
        sentiment: 0
    },

    {
        guid: '93c5ad7d-9503-442e-d041-b59327bc63ea',
        review: "A great biography for beginning readers, featuring discussion questions throughout, a timeline at the end of each chapter, maps, a glossary of words and terms used, a quiz, a bibliography, and lovely illustrations that accent the text well. Jane Goodall is an excellent, inspirational choice for a children's biography, and I'm sure her work will interest many youngsters!",
        sentiment: 1
    },

    //The Story of Jesus
    {
        guid: '64a3b399-7ba9-4a96-a661-7d8bcea5917f',
        review: "This book depicts Jesus as a good man who did some miracles, but completely misses the gospel and his resurrection as the son of God sent to take our place and die for our sins.",
        sentiment: -1
    },

    {
        guid: '8e9fd976-eb0f-45d0-3dca-a1c3b46a87ba',
        review: "Our daughter loves it! I have witnessed her flipping the pages and recounting the stories based on the beautiful illustrations.",
        sentiment: 1
    },

    //The Stranger in the Lifeboat: A Novel
    {
        guid: 'cfebdd52-1217-478b-333c-4d17bb75fd14',
        review: "Oh my gosh — I thought this was dreadful!!",
        sentiment: -1
    },

    {
        guid: '66661cc4-05a5-4d15-1368-fe2461344842',
        review: "In a Nutshell: Intriguing concept, detached implementation. Add to this a reader with zero philosophical understanding and the result is utter confusion.",
        sentiment: -1
    },

    {
        guid: '3cd0de8f-2531-41d7-2261-8f02d7ded363',
        review: "It's truly an outstanding book. In many ways it brings out with how do people deal with death.",
        sentiment: 1
    },

    //The Summer of Broken Rules
    {
        guid: 'ae0048e4-a356-44f8-9847-2feeea27bda8',
        review: "This book was soooo good!! Perfect for a summer romance. The characters are SO cute together and have such good chemistry. I also loved that this book isn't just a light romance, but it also has a ton of depth and follows the main character dealing with the loss of her sister.",
        sentiment: 1
    },

    {
        guid: '57bfc24d-fedd-4a00-72e7-4945f3dc9145',
        review: "I loved the story, the premise, and most of all the characters. I've always loved the idea of long standing family traditions, and vacations that included huge families, with multiple cousins and friends. A paradise for kids and teens with weeks of games, get togethers, eating and chatting.",
        sentiment: 1
    },

    //The Sweetness of Water: A Novel
    {
        guid: '48dfa59b-19dd-4131-0a34-2baa688a5874',
        review: "This is a heartbreaking but hopeful novel .. written so beautifully.. and this is one that I went into blind.. and enjoyed it so much.",
        sentiment: 1
    },

    {
        guid: 'ce8c30a7-3aeb-41f3-daf8-1a462fd33853',
        review: "This is a fabulous debut novel from Nathan Harris. With sparkling prose, Harris tells a compelling story set in the early days of Reconstruction in Georgia. The Walker family is front and center - a white family, descended from northerners, who are sympathetic to the newly freed slaves. Prentiss and Landry, brothers and freedmen, work with the Walkers after Emancipation. This is a story about good people doing their best in the face of a systemically racist and corrupt society - undoubtedly on point and relevant today",
        sentiment: 1
    },

    {
        guid: '047a162c-5a5c-47c9-2ce0-89b887d52f05',
        review: "The Sweetness of Water is full of surprises. It is a debut novel and one of the most unevenly written books I have read.",
        sentiment: -1
    },

    //The System: Who Rigged It, How We Fix It
    {
        guid: '3feeb3a4-8dd5-4732-903c-e6e881bd77d1',
        review: "I was annoyed early on in this book because it felt like a regurgitation of all the things you'd already know if you've been paying attention, but then I got it. He is making a wholistic case for reform. It's a tight book and just about the right length to explain the problem and offer solutions.",
        sentiment: 0
    },

    {
        guid: 'df85aefe-d7dd-49ff-7bf9-0b52cc50adc3',
        review: "Excellent book all caring Americans should read. This is the latest in Robert Reich's series of books about the truth and how we have all been duped. He resolutely documents and explains his arguments which include the fallacy of party politics, capitalism, and \"left vs. right\".",
        sentiment: 1
    },

    //The Time Machine
    {
        guid: 'cbd2f218-5525-4ff3-5e44-daf5f2c66b2c',
        review: "I just could not buy into the story here. It is so very underwhelming. It's one of those pieces of writing in which the idea behind it causes the work to be celebrated but the actual thing itself, the language, the plot and the characters, are as dull as dishwater. It is mechanical, clunky and overly descriptive. There are long drawn out sections on scientific theory and mathematical formula. All in all, it's just not very engaging.",
        sentiment: -1
    },

    {
        guid: 'ce06adf8-a330-4202-b2b8-f21bb57cf748',
        review: "An EXCELLENT adventure!",
        sentiment: 1
    },

    {
        guid: '9b490299-4984-46b1-fdd4-7035bc083540',
        review: "One will have to admit that Mr Wells was well ahead of his time. He could conceive some of the ideas that are still fresh and new and ever-widening. I enjoyed reading this when I was young and I found many new aspects when I read this recently. Science fiction's initial attempt that opened a new dimension for the authors to explore.",
        sentiment: 1
    },

    {
        guid: 'efd847bf-adab-4e61-bf12-ebe653218b6b',
        review: "Given I'm not a science fiction reader normally, I was quite surprised how much I enjoyed this. I was also surprised to realize there are a lot of similarities between this book and Mary Doria Russell's The Sparrow. That's probably why I enjoyed this one so much, actually! (I loved The Sparrow.)",
        sentiment: 1
    },

    //The Trials of Harry S. Truman: The Extraordinary Presidency of an Ordinary Man, 1945-1953
    {
        guid: 'b24bbd8e-028f-40b1-923d-1494800bd9eb',
        review: "Well told and an entertaining overview of Truman's tumultuous years in office. Frank is an engaging writer and this touches on most of the key moments in Truman's presidency. It's a respectable choice if you want to get the gist of this period.",
        sentiment: 1
    },

    {
        guid: '3e9cd7e3-870a-4a1f-ac7e-35a057ef8c01',
        review: "I've read a few books about Harry Truman. By the way he is probably my favorite President. About this book: first it's not a biography but about the man who was President of the United States during one of the most important times in our Country's history. I'm not qualified to review it, but I did like it.",
        sentiment: 1
    },

    {
        guid: 'c4db7b8c-62ef-496b-1f89-c4bd0ccfab72',
        review: "An interesting and eminently readable account of Truman's time as President, delving into the personality, foibles and inconsistencies that marked the real President Harry Truman as opposed to the post-Presidential persona that has become the conventional image attributed to him, and largely invented by him.",
        sentiment: 0
    },

    //The Very Hungry Caterpillar
    {
        guid: '7bd2d01b-2329-4f95-2d82-9513bffe8ce4',
        review: "The first time my baby ever laughed was while we were looking at the butterfly on the last page and I was talking to him about butterflies. Instant fave.",
        sentiment: 1
    },

    {
        guid: '65bcecf6-67f0-4cba-ff35-d4fb916f6509',
        review: "A favourite of both my children!",
        sentiment: 1
    },

    {
        guid: '09bc66fa-4fa3-413f-72fe-cab934e23d59',
        review: "So simple and clever as it not only teaches children to count but also explains a part of the animal kingdom around them.",
        sentiment: 1
    },

    {
        guid: '5350545e-7a1b-4a74-200c-e859b6b09663',
        review: "Mr. H, my grandson, loves this book so much he turned it into a play. Great show!",
        sentiment: 1
    },

    //The Woman in White
    {
        guid: '1292c723-b03e-463b-1e4a-2b7c47cc9ef7',
        review: "I loved, loved, loved the first bits of the book!",
        sentiment: 1
    },

    {
        guid: '39f840be-0351-4a18-1df3-aeac95f5b1bd',
        review: "The first hundred pages of the book are gripping and intense. Wilkie Collins begins with an atmospheric mystery that is exciting and almost haunting. I really wanted to know all the secrets the story had to offer.",
        sentiment: 0
    },

    {
        guid: 'dc854d1b-a506-46f8-4bed-717d0161097c',
        review: "I found it long but very rewarding. 600+ pages of different POV's (a novel concept then, but now widely utilized); two concrete settings; only five main characters (perhaps not more than 15 in all)... and it is all choreographed so beautifully. The settings are spooky; the motives of characters, although well known from the very start and from the intense descriptions throughout, still manage to surprise. No matter that The Secret deals with money & family skeletons-in-the-closet... & a bunch of classicist European stuff. All the elements I adore are here. It's Gothic, & the writer is like some British Hawthorne",
        sentiment: 1
    },

    //The Yiddish Policeman's Union
    {
        guid: 'bb52933f-da42-49f8-dc95-61dd90398e0b',
        review: "It starts well and gets interesting in the middle, but the ending's an afterthought and the text is befuddlingly flowery.",
        sentiment: 0
    },

    {
        guid: '666a0813-fb9b-4b4b-f8cf-4469ddac2819',
        review: "This would make my short list for the most overwritten novel I've ever read. It's Michael Chabon so of course there are some fabulous lines. But at times I felt like I was reading Thomas Pynchon or Nabokov fan fiction.",
        sentiment: -1
    },

    {
        guid: 'e23bd7c7-2453-49c6-a250-0b1e1ce1b964',
        review: "There's no denying it . . . Chabon plays well with words; crafting sentences of such loveliness, you go back and read them again and again, committing them to memory, and savoring them later.",
        sentiment: 1
    },

    //They Want to Kill Americans: The Militias, Terrorists, and Deranged Ideology of the Trump Insurgency
    {
        guid: '8d5d7cc4-54e1-4cba-1249-0c1fb784cfca',
        review: "Well, this is all too informative about how we got here, where we're heading, and what is coming our way if we don't make some changes. The problem is how to change when huge swaths of the population refuse to engage in meaningful discussions? And I mean that seriously. Malcolm Nance clearly outlines every single aspect of what brought us to this point. And he does so with a multitude of cited sources that can easily be verified.",
        sentiment: 1
    },

    {
        guid: '2bdb52e1-13f3-4df8-89d4-dc896fcc83d7',
        review: "Wow. Malcolm Nance provides a thoroughly researched and cited look into what led to the Trump Insurgency movement and the possible future ahead. It's absolutely terrifying how many people have fallen prey to and joined this radicalized fellowship and how violent their hate has been shown to be.",
        sentiment: 1
    },

    //Things We Never Got Over
    {
        guid: '155f4e11-2b69-4ffc-490e-54f27683de29',
        review: "Things We Never Got Over was an entertaining hate to love saga. Considering this is a long book involving a mistaken identity, an irritated Viking and a whole lot of family drama, it kept me amused and engaged.",
        sentiment: 1
    },

    {
        guid: '4f14aea9-abd9-4973-40a5-5151a7e1f4f3',
        review: "This book was a lot of fun for me to read! I adored it on so many levels and I had a lot of fun reading it, mostly because it reminded me a lot of a Telenovela. I felt like an almost every chapter we were getting new information and twist interns and it was just really fun to watch and read along.",
        sentiment: 1
    },

    {
        guid: '50338089-2e9f-47e9-7fe5-0907e744bd4e',
        review: "god I've never been happier to finish a book this was just a no for me and I'm hella sad about it bc I was really excited to read this book.",
        sentiment: -1
    },

    //Twenty Thousand Leagues Under the Sea
    {
        guid: '866eb948-fd16-4e77-5e30-f45d58a7e351',
        review: "I mean, there's boring and then there's mind-numbing. 20,000 Leagues Under the Sea is definitely the latter.",
        sentiment: -1
    },

    {
        guid: '931ed7ac-272f-4b4b-28e3-88568982b0ff',
        review: "I did enjoy this but you could definitely tell it was written in the 19th century during an age of colonialism. Some of the chapters were difficult to read because of the incredibly dated and exclusivist language. Though, for this reason, it was also quite interesting to read critically.",
        sentiment: 0
    },

    {
        guid: '1d15e341-21c2-4a82-caf5-18ee76ed7b57',
        review: "This is definitely one of the best classic science fiction I've read so far. I was amazed that Verne might have started the idea of the submarine and the under the sea explorations. While I was reading this, I was contemplating where he got his ideas or whether silly it might be, he could have time traveled from his time to the future or vice versa.",
        sentiment: 1
    },

    {
        guid: '1691b9ac-ee72-4417-6e5f-3794b1a75d26',
        review: "Tremendous research by the author to provide many examples of the flora and fauna found in all the seas around the world.",
        sentiment: 1
    },

    //Two Can Keep a Secret
    {
        guid: '656a6c37-f899-40a1-2e9c-7a13bf7a6d58',
        review: "This was a mediocre YA mystery. No real complaints about it but I can't say it kept me on my toes or that I didn't see the twists coming.",
        sentiment: 0
    },

    {
        guid: 'cee26298-42a1-4236-57b0-0f44761ad6c8',
        review: "This book has fallen victim to the “Loved the last book so I had high expectations” syndrome. I thought One of Us Is Lying was great, Two Can Keep a Secret was just okay.",
        sentiment: 0
    },

    //Ugly Love: A Novel
    {
        guid: '778a2581-fcdb-4ec6-18f8-aa706cfce0c0',
        review: "Very rinse and repeat.... Dude with a tragic past cant let anyone in or love him blah blah blah... Girl who falls in love with blah blah blah... Rolled my eyes 52 times!",
        sentiment: -1
    },

    {
        guid: '190c4b86-0b42-46e8-e3e8-548ddaa9e6f9',
        review: "I like the story here and the characterisation. Well written, nicely paced and interesting.",
        sentiment: 1
    },

    {
        guid: '0c7826df-5c91-4f5c-0dce-6c74b7fa94a3',
        review: "Ugly Love has not only stolen a little piece of my heart but maybe the whole damn thing. I was completely swept up in Miles and Tate's amazing story. I fell in love with the way Colleen completely shattered my heart and then slowly pieced it back together, I love that I lost myself in all that was unfolding before my eyes and like a starved animal, I devoured it all. Every. Last. Word.",
        sentiment: 1
    },

    //Verity
    {
        guid: 'faca00e4-6801-4e6e-8c5f-deaa289dda1c',
        review: "What I've come to appreciate most about Colleen Hoover's work—whether it's an emotionally charged love story or in this case, her first go at suspense—is her penchant for pushing boundaries. For telling the unexpected story.",
        sentiment: 1
    },

    //We'll Always Have Summer
    {
        guid: 'a4cd985c-4789-42b2-9816-a11b01efe9c2',
        review: "All I can think to say is that I loved it. I cried more times than I'd like to admit reading this book. Susannah always knew who Belly would marry. If only Susannah had known how she would get there! This book started out STRONG. And I mean chest clenching, life altering strong. I've never smiled and cried so much in my life.",
        sentiment: 1
    },

    {
        guid: '197d59ab-e63d-4a4d-be66-29586e4904de',
        review: "I feel so let down by this book.",
        sentiment: -1
    },

    //Why We Did It: A Travelogue from the Republican Road to Hell
    {
        guid: '1840dc1f-0fd4-4792-9a74-095d6e811183',
        review: "Trump is a psychotic monster. The author gets that and says that.",
        sentiment: 1
    },

    {
        guid: '099090a6-3e59-4d5f-9a4a-f982b9b02186',
        review: "This is a strange and frustrating book. The tone is a little uneven - sometimes it seems to be very much appealing to younger readers (not in a YA sense, but in the slang employed, and Very Online terminology on occasion). This trivialized some of what Miller was trying to say, and often the best and most insightful content feels secondary.",
        sentiment: 0
    },

    {
        guid: 'b3f075dd-a56b-4f07-42f9-7b4ce28e4b4f',
        review: "I will write more later, but for now I'll simply say: This is the book I've been searching for, all these years of reading books by Republicans and trying to understand what is happening to this country! Kudos to Tim Miller for coming clean and finally saying the quiet part out loud. Without a doubt, this will be one of the best books I read this year.",
        sentiment: 1
    },

    //Writing Sci-Fi, Fantasy, & Horror For Dummies
    {
        guid: '5c9ed47c-cd2b-42b1-b63b-7a167f1930dc',
        review: "I found this book helpful.",
        sentiment: 0
    },

    //Wuthering Heights
    {
        guid: '14a744c1-d951-421e-000f-f1c92df84e9b',
        review: "I am just on fire with so much admiration for Emily Brontë right now. Wuthering Heights is a beautiful, devastating, and profoundly haunting experience that reminded me of what literature is for. I felt this story like an itching beneath the skin and thought about it so often in the past few days there was hardly any space left in my mind for anything else.",
        sentiment: 1
    },

    {
        guid: '258c33de-9126-484f-a4ed-1121c5e075c1',
        review: "I've tried it three times. I know people are obsessed with it. I hate everyone in the book - and I just can't care about a book where I actually hate the characters.",
        sentiment: -1
    },

    {
        guid: '06f0e3f8-d144-4867-a02b-3fbbea6bacd8',
        review: "A classic revenge story with two characters with bad temperaments...I'm not sure how I feel about this book. It's dark, it's pretty messed up and definitely not romantic",
        sentiment: 0
    },

    //You'd Be Home Now
    {
        guid: '075c3b03-6349-4514-5ccd-95b6809405c5',
        review: "Well, I am officially a Girl in Pieces after reading this heart-wrenching, beautiful, and authentic book!",
        sentiment: 1
    },

    //You're Always Enough: And More Than I Hoped For
    {
        guid: '79ed737c-2430-42ea-f12e-a92f5b3e34aa',
        review: "You're Always Enough is a simple but sweet, rhyming book for children to teach them that no matter what they do, what place they come etc they will always be loved and always be more than enough to those who love and cherish them. This is a really sweet story to share at bedtime with your child to make them feel special, lived and enough before they drift off to sleep.",
        sentiment: 0
    },

    //Zero Fail: The Rise and Fall of the Secret Service
    {
        guid: 'a695d8a6-27cd-4891-02b8-555159ccb8c1',
        review: "This is one of the most well-written, fascinating, and thorough political books I've read in years. It will leave you absolutely jaw-dropped at how genuinely at-risk the most senior leaders in our government are and have been. The details provided are just mind blowing.",
        sentiment: 1
    },

    {
        guid: '574bf17c-c2c0-448a-e51e-1e3a8021efb1',
        review: "This was an excellent book about the Secret Service from the time of John F Kennedy through Trump. I learned so much from this book, written by a 3-time Pulitzer Prize winning investigative journalist. She wrote about so many detailed incidents regarding danger to the Presidents that she could only have learned from insider knowledge. The book was fascinating and I highly recommend it.",
        sentiment: 1
    }


];

module.exports = {
    reviews
};