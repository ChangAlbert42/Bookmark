const books = [
    {
        guid: 'b091424f-4254-410f-3e91-4c3dc0240742',
        title: '1984',
        author: 'George Orwell',
        image: 'https://m.media-amazon.com/images/I/71VKQx3ATFL._AC_UY218_.jpg',
        price: 7.99,
        genres: [
          { genre_guid: '35cd6638-f8c4-4923-03e3-e4369a6b6375' },
          { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' }
        ],
        pageCount: 328,
        summary: 'The new novel by George Orwell is the major work towards which all his previous writing has pointed. Critics have hailed it as his "most solid, most brilliant" work. Though the story of Nineteen Eighty-Four takes place thirty-five years hence, it is in every sense timely. The scene is London, where there has been no new housing since 1950 and where the city-wide slums are called Victory Mansions. Science has abandoned Man for the State. As every citizen knows only too well, war is peace. To Winston Smith, a young man who works in the Ministry of Truth (Minitru for short), come two people who transform this life completely. One is Julia, whom he meets after she hands him a slip reading, "I love you." The other is O\'Brien, who tells him, "We shall meet in the place where there is no darkness." The way in which Winston is betrayed by the one and, against his own desires and instincts, ultimately betrays the other, makes a story of mounting drama and suspense.',
        isbn: '0008322066',
        likes: 432,
        dislikes: 189,
        inventory: 200,
        numberSold: 699,
        reviews: [
          { review_guid: '67c14db2-1280-4641-9487-01f9268d7507' },
          { review_guid: '81bbfe37-a1fe-4370-11a9-464e8155796a' },
          { review_guid: '5b9574bf-7028-4d02-480c-8d69afa629b7' },
          { review_guid: '9cc27240-4fe3-4509-b080-e39040e3d0f2' }
        ]
      },

      {
        guid: 'e62c92ed-cd2f-4e82-5635-4aa38ca16ab8',
        title: 'A Court of Mist and Fury',
        author: 'Sarah J. Maas',
        image: 'https://m.media-amazon.com/images/I/81zeVnhDbdL._AC_UL320_.jpg',
        price: 14.5,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 656,
        summary: "Feyre has undergone more trials than one human woman can carry in her heart. Though she's now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people.  As her marriage to Tamlin approaches, Feyre's hollowness and nightmares consume her. She finds herself split into two different people: one who upholds her bargain with Rhysand, High Lord of the feared Night Court, and one who lives out her life in the Spring Court with Tamlin. While Feyre navigates a dark web of politics, passion, and dazzling power, a greater evil looms. She might just be the key to stopping it, but only if she can harness her harrowing gifts, heal her fractured soul, and decide how she wishes to shape her future-and the future of a world in turmoil.",
        isbn: '1635575583',
        likes: 112,
        dislikes: 15,
        inventory: 120,
        numberSold: 313,
        reviews: [
          { review_guid: '23edb15b-9920-4a12-0fd3-a4539a9f65df' },
          { review_guid: '3fb26128-4dd3-4139-0f71-906cec139257' },
          { review_guid: '0669ad71-8ab3-480c-5bac-0cfddc8afb65' }
        ]
      },

      {
        guid: 'eb731d5e-b9f9-4cd6-6667-b32a042d7c10',
        title: 'A Dish to Die for',
        author: 'Lucy Burdette',
        image: 'https://m.media-amazon.com/images/I/91YWwzGrO9L._AC_UL320_.jpg',
        price: 26.99,
        genres: [ { genre_guid: '9dc4b813-f699-4311-99b2-81b9a7de31b0' } ],
        pageCount: 283,
        summary: "Peace and quiet are hard to find in bustling Key West, so Hayley Snow, food critic for Key Zest magazine, is taking the afternoon off for a tranquil lunch with a friend outside of town. As they are enjoying the wild beach and the lunch, she realizes that her husband Nathan's dog, Ziggy, has disappeared. She follows his barking, to find him furiously digging at a shallow grave with a man's body in it. Davis Jager, a local birdwatcher, identifies him as GG Garcia, a rabble-rousing Key West local and developer. Garcia was famous for over-development on the fragile Keys, womanizing, and refusing to follow city rules—so it's no wonder he had a few enemies. When Davis is attacked in the parking lot of a local restaurant after talking to Hayley and her dear friend, the octogenarian Miss Gloria, Hayley is slowly but surely drawn into the case. Hayley's mother, Janet, has been hired to cater GG's memorial service reception at the local Woman's Club, using recipes from their vintage Key West cookbook—and Hayley and Miss Gloria sign on to work with her, hoping to cook up some clues by observing the mourners. But the real clues appear when Hayley begins to study the old cookbook, as whispers of old secrets come to life, dragging the past into the present—with murderous results.",
        isbn: '1639100725',
        likes: 99,
        dislikes: 98,
        inventory: 24,
        numberSold: 276,
        reviews: [
          { review_guid: 'af5c5e31-8b70-4407-8b32-24f474dc2e43' },
          { review_guid: 'c4226761-d56e-4fca-faa1-0fefc2780d80' }
        ]
      },

      {
        guid: 'ac23d527-9f18-42e1-571e-88f2937baeaa',
        title: 'A Scanner Darkly',
        author: 'Philip K. Dick',
        image: 'https://m.media-amazon.com/images/I/512L3POOWVL._AC_UY218_.jpg',
        price: 14.5,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 307,
        summary: "Bob Arctor is a junkie and a drug dealer, both using and selling the mind-altering Substance D. Fred is a law enforcement agent, tasked with bringing Bob down. It sounds like a standard case. The only problem is that Bob and Fred are the same person. Substance D doesn't just alter the mind, it splits it in two, and neither side knows what the other is doing or that it even exists. Now, both sides are growing increasingly paranoid as Bob tries to evade Fred while Fred tries to evade his suspicious bosses. In this dystopian future, friends can become enemies, good trips can turn terrifying, and cops and criminals are two sides of the same coin.",
        isbn: '1407247417',
        likes: 100,
        dislikes: 200,
        inventory: 15,
        numberSold: 360,
        reviews: [
          { review_guid: '8e36888a-09bf-4bcc-91c4-045699acafa4' },
          { review_guid: 'af166f72-28b3-46b8-c05d-81c8b61fbe5c' },
          { review_guid: '55ab9a8e-a416-44e4-c31d-edc65703ce3a' }
        ]
      },

      {
        guid: 'fcdfcdaa-c618-415b-1ea5-16443e92b3f5',
        title: 'A Woman of No Importance: The Untold Story of the American Spy Who Helped Win World War II',
        author: 'Sonia Purnell',
        image: 'https://m.media-amazon.com/images/I/81P1QYnzKWL._AC_UL320_.jpg',
        price: 18,
        genres: [ { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' } ],
        pageCount: 368,
        summary: "In 1942, the Gestapo sent out an urgent transmission: \"She is the most dangerous of all Allied spies. We must find and destroy her.\" This spy was Virginia Hall, a young American woman--rejected from the foreign service because of her gender and her prosthetic leg--who talked her way into the spy organization deemed Churchill's \"ministry of ungentlemanly warfare,\" and, before the United States had even entered the war, became the first woman to deploy to occupied France. Virginia Hall was one of the greatest spies in American history, yet her story remains untold. Just as she did in Clementine, Sonia Purnell uncovers the captivating story of a powerful, influential, yet shockingly overlooked heroine of the Second World War. At a time when sending female secret agents into enemy territory was still strictly forbidden, Virginia Hall came to be known as the \"Madonna of the Resistance,\" coordinating a network of spies to blow up bridges, report on German troop movements, arrange equipment drops for Resistance agents, and recruit and train guerilla fighters. Even as her face covered WANTED posters throughout Europe, Virginia refused order after order to evacuate. She finally escaped with her life in a grueling hike over the Pyrenees into Spain, her cover blown, and her associates all imprisoned or executed. But, adamant that she had \"more lives to save,\" she dove back in as soon as she could, organizing forces to sabotage enemy lines and back up Allied forces landing on Normandy beaches. Told with Purnell's signature insight and novelistic flare, A Woman of No Importance is the breathtaking story of how one woman's fierce persistence helped win the war.",
        isbn: '735225311',
        likes: 12,
        dislikes: 89,
        inventory: 100,
        numberSold: 150,
        reviews: [ { review_guid: 'ffeedfd7-beb1-4221-a4ad-33bba2324325' } ]
      },

      {
        guid: '165084a2-b8f6-40fa-cb06-7f147189522d',
        title: 'After the Ivory Tower Falls: How College Broke the American Dream and Blew Up Our Politics―and How to Fix It',
        author: 'Will Bunch',
        image: 'https://m.media-amazon.com/images/I/816TicD7mEL._AC_UL320_.jpg',
        price: 28.99,
        genres: [ { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' } ],
        pageCount: 315,
        summary: 'In After the Ivory Tower Falls, award-winning journalist Will Bunch embarks on a deeply reported journey to the heart of the American Dream. That journey begins in Gambier, Ohio, home to affluent, liberal Kenyon College, a tiny speck of Democratic blue amidst the vast red swath of white, post-industrial, rural midwestern America. To understand “the college question,” there is no better entry point than Gambier, where a world-class institution caters to elite students amidst a sea of economic despair.',
        isbn: '63076993',
        likes: 287,
        dislikes: 19,
        inventory: 112,
        numberSold: 400,
        reviews: [
          { review_guid: 'd39789a5-0824-44f4-1ae3-3588f7816912' },
          { review_guid: 'ca056f9d-de03-4c29-e4ba-0cbddf7089d0' }
        ]
      },

      {
        guid: 'cb081b48-24c1-4d92-4b7e-f720afc68f82',
        title: 'America, a Redemption Story: Choosing Hope, Creating Unity',
        author: 'Senator Tim Scott',
        image: 'https://m.media-amazon.com/images/I/71lxuPzXCwL._AC_UL320_.jpg',
        price: 28.99,
        genres: [
          { genre_guid: 'fb1adcfd-652c-41bc-10a2-b83d57f0150e' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 256,
        summary: "Now more than ever it's easy to focus on the divisions that plague our nation. It may seem as if our best days are behind us, but bestselling author and senator Tim Scott believes we have yet to realize the fullness of our identity. We are in the midst of a story that's still unfolding. And beautiful opportunities await. In this powerful memoir, Scott recounts formative events of his life alongside the inspiring stories of other Americans who have risen above hardship and embodied the values that make our nation great.",
        isbn: '1400236495',
        likes: 100,
        dislikes: 200,
        inventory: 50,
        numberSold: 400,
        reviews: [
          { review_guid: '87dfc686-6c2b-4fc0-177c-cad3f65d7ac5' },
          { review_guid: 'fb87b3ac-5d25-4a74-d11b-bbb38b8adaed' }
        ]
      },

      {
        guid: '9d233a76-4c87-414f-7546-a9bfea8d9c37',
        title: 'Anatomy of a Murder',
        author: 'Robert Traver',
        image: 'https://m.media-amazon.com/images/I/71UZysDFoiL._AC_UY218_.jpg',
        price: 12.99,
        genres: [ { genre_guid: '9dc4b813-f699-4311-99b2-81b9a7de31b0' } ],
        pageCount: 448,
        summary: 'First published by St. Martin\'s in 1958, Robert Traver\'s Anatomy of a Murder immediately became the number-one bestseller in America, and was subsequently turned into the successful and now classic Otto Preminger film. It is not only the most popular courtroom drama in American fiction, but one of the most popular novels of our time. A gripping tale of deceit, murder, and a sensational trial, Anatomy of a Murder is unmatched in the authenticity of its settings, events, and characters. This new edition should delight both loyal fans of the past and an entire new generation of readers.',
        isbn: '517204452',
        likes: 48,
        dislikes: 42,
        inventory: 100,
        numberSold: 250,
        reviews: [
          { review_guid: '139b0d4d-ebce-4bf2-beac-db6dd6d778a1' },
          { review_guid: '13f46566-3dba-4af0-29ab-b690e7de2132' }
        ]
      },

      {
        guid: 'f9e13771-7355-41a3-53c2-ae1acea02733',
        title: 'Babies Around the World',
        author: 'Puck',
        image: 'https://m.media-amazon.com/images/I/71R0nuE7NBL._AC_UY218_.jpg',
        price: 7.95,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 20,
        summary: 'The journey starts on a sunny day in New York City and ends on a beautiful San Francisco night, with stops in Mexico City, Rio de Janeiro, London, Paris, Cape Town, Cairo, Beijing, and Tokyo. These friendly babies welcome us to their cities with delightful greetings in their original languages (with English translations) in a simple narration that will appeal to any global mini citizen.',
        isbn: '1938093879',
        likes: 118,
        dislikes: 120,
        inventory: 99,
        numberSold: 555,
        reviews: [
          { review_guid: '74014978-356e-453a-4e2a-b14d4a810af7' },
          { review_guid: '834161b1-33c1-49a3-8d7f-f1f1a2e70307' },
          { review_guid: 'e99915fd-2c37-43b0-dccd-dc35b66faa7f' }
        ]
      },

      {
        guid: '05485ff8-f9dd-4a0d-a3d4-e37570b8cb9b',
        title: 'Bad City: Peril and Power in the City of Angels',
        author: 'Paul Pringle',
        image: 'https://m.media-amazon.com/images/I/81wjlf+1Z8L._AC_UL320_.jpg',
        price: 29.99,
        genres: [
          { genre_guid: 'fb1adcfd-652c-41bc-10a2-b83d57f0150e' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 304,
        summary: "For fans of Spotlight and Catch and Kill comes a nonfiction thriller about corruption and betrayal radiating across Los Angeles from one of the region's most powerful institutions, a riveting tale from a Pulitzer-prize winning journalist who investigated the shocking events and helped bring justice in the face of formidable odds.",
        isbn: '1250824087',
        likes: 432,
        dislikes: 189,
        inventory: 200,
        numberSold: 987,
        reviews: [
          { review_guid: '192aba51-a5d2-4c6c-07c2-0298729d06ab' },
          { review_guid: 'fab6887b-3f37-4ead-76de-602b46d24e75' },
          { review_guid: '3cf5a177-954e-4fb8-7681-a3a6c16ca14b' }
        ]
      },

      {
        guid: '383410f9-2bc4-4053-ac85-6ccf4415b66b',
        title: 'Battle for the American Mind: Uprooting a Century of Miseducation',
        author: 'Pete Hegseth',
        image: 'https://m.media-amazon.com/images/I/81tJMFwH-uL._AC_UL320_.jpg',
        price: 28.99,
        genres: [ { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' } ],
        pageCount: 288,
        summary: "Battle for the American Mind is the untold story of the Progressive plan to neutralize the basis of our Republic - by removing the one ingredient that had sustained Western Civilization for thousands of years. Pete Hegseth and David Goodwin explain why, no matter what political skirmishes conservatives win, progressives are winning the war—and control the “supply lines” of future citizens.  Reversing this reality will require parents to radically reorient their children's education; even most homeschooling and Christian schooling are infused with progressive assumptions. We need to recover a lost philosophy of education - grounded in virtue and excellence - that can arm future generations to fight for freedom. It's called classical Christian education. Never heard of it? You're not alone.",
        isbn: '63215047',
        likes: 543,
        dislikes: 111,
        inventory: 191,
        numberSold: 898,
        reviews: [
          { review_guid: '3d88c266-b9d5-43c2-5185-6325ffc12917' },
          { review_guid: '44368c4d-c526-46cf-06e5-d7a69604c552' },
          { review_guid: '9fd0387f-fbcf-4d00-5e86-99f1be9a25eb' }
        ]
      },

      {
        guid: '4e8d5191-2166-4f81-202e-28eacf3ce141',
        title: 'Book Lovers',
        author: 'Emily Henry',
        image: 'https://m.media-amazon.com/images/I/71duwitbLBL._AC_UL320_.jpg',
        price: 17,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 398,
        summary: "One summer. Two rivals. A plot twist they didn't see coming... Nora Stephens' life is books—she's read them all—and she is not that type of heroine. Not the plucky one, not the laidback dream girl, and especially not the sweetheart. In fact, the only people Nora is a heroine for are her clients, for whom she lands enormous deals as a cutthroat literary agent, and her beloved little sister Libby. Which is why she agrees to go to Sunshine Falls, North Carolina for the month of August when Libby begs her for a sisters' trip away—with visions of a small town transformation for Nora, who she's convinced needs to become the heroine in her own story. But instead of picnics in meadows, or run-ins with a handsome country doctor or bulging-forearmed bartender, Nora keeps bumping into Charlie Lastra, a bookish brooding editor from back in the city. It would be a meet-cute if not for the fact that they've met many times and it's never been cute. If Nora knows she's not an ideal heroine, Charlie knows he's nobody's hero, but as they are thrown together again and again—in a series of coincidences no editor worth their salt would allow—what they discover might just unravel the carefully crafted stories they've written about themselves.",
        isbn: '593334833',
        likes: 95,
        dislikes: 43,
        inventory: 113,
        numberSold: 456,
        reviews: [
          { review_guid: 'ae5e3d6c-9e6f-4579-e936-fec997549e1e' },
          { review_guid: 'fcbde85a-9de6-4ca7-b672-39048aac75a0' }
        ]
      },

      {
        guid: '4752bd83-46db-4f71-bfdf-e8c4f9a45f4d',
        title: 'Brave New Worlds (Dystopian Stories)',
        author: 'John Joseph Adams',
        image: 'https://m.media-amazon.com/images/I/71MJgts5m6L._AC_UL320_.jpg',
        price: 17.99,
        genres: [ { genre_guid: 'b653a9fb-3f19-43fd-07d8-7983aed0351f' } ],
        pageCount: 540,
        summary: 'You are being watched. Your every movement is being tracked, your every word recorded. Your spouse may be an informer, your children may be listening at your door, your best friend may be a member of the secret police. You are alone among thousands, among great crowds of the brainwashed, the well-behaved, the loyal. Productivity has never been higher, the media blares, and the army is ever triumphant. One wrong move, one slip-up, and you may find yourself disappeared -- swallowed up by a monstrous bureaucracy, vanished into a shadowy labyrinth of interrogation chambers, show trials, and secret prisons from which no one ever escapes. Welcome to the world of the dystopia, a world of government and society gone horribly, nightmarishly wrong. When the government wields its power against its own people, every citizen becomes an enemy of the state. Will you fight the system, or be ground to dust beneath the boot of tyranny?',
        isbn: '1597804541',
        likes: 321,
        dislikes: 12,
        inventory: 166,
        numberSold: 350,
        reviews: [
          { review_guid: '0fcbb27d-742f-4c00-c333-d70fd4d155e0' }
        ]
      },

      {
        guid: '6a37463d-1f52-4ec1-35a1-921fa9890bbe',
        title: 'Building a Second Brain: A Proven Method to Organize Your Digital Life and Unlock Your Creative Potential',
        author: 'Tiago Forte',
        image: 'https://m.media-amazon.com/images/I/71jhK9zsKEL._AC_UL320_.jpg',
        price: 28,
        genres: [ { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' } ],
        pageCount: 269,
        summary: 'A revolutionary approach to enhancing productivity, creating flow, and vastly increasing your ability to capture, remember, and benefit from the unprecedented amount of information all around us.',
        isbn: '1800812213',
        likes: 180,
        dislikes: 280,
        inventory: 200,
        numberSold: 500,
        reviews: [
          { review_guid: 'd7c005e0-dca7-473c-d4af-4b4601cb1ec8' },
          { review_guid: 'dd6e962b-9113-4230-aee7-d7156c35e184' }
        ]
      },

      {
        guid: 'ea5aea64-78ae-4e03-7091-a331d9a1590e',
        title: 'Burn After Writing',
        author: 'Sharon Jones',
        image: 'https://m.media-amazon.com/images/I/91e4slA32wL._AC_UL320_.jpg',
        price: 14,
        genres: [ { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' } ],
        pageCount: 160,
        summary: "Instagram, WhatsApp, Snapchat, TikTok, VSCO, YouTube...the world has not only become one giant feed, but also one giant confessional. Burn After Writing allows you to spend less time scrolling and more time self-reflecting. Through incisive questions and thought experiments, this journal helps you learn new things while letting others go. Imagine instead of publicly declaring your feelings for others, you privately declared your feelings for yourself? Help your heart by turning off the comments and muting the accounts that drive you into jealousy for a few moments a night. Whether you are going through the ups and downs of growing up, or know a few young people who are, you will flourish by finding free expression--even if through a few tears! Push your limits, reflect on your past, present, and future, and create a secret book that's about you, and just for you. This is not a diary, and there is no posting required. And when you're finished, toss it, hide it, or Burn After Writing.",
        isbn: '593329910',
        likes: 50,
        dislikes: 45,
        inventory: 65,
        numberSold: 200,
        reviews: [
          { review_guid: '606dacfe-0fce-40ba-1dd9-e7e13b88813e' },
          { review_guid: '23f1a3f2-f321-42db-5417-0658666e58b8' }
        ]
      },

      {
        guid: '3d0faf07-987d-4356-3581-ed23c768fa5c',
        title: 'Call Us What We Carry: Poems',
        author: 'Amanda Gorman',
        image: 'https://m.media-amazon.com/images/I/91io14GlrxL._AC_UL320_.jpg',
        price: 24.99,
        genres: [ { genre_guid: '59bf9695-6237-4e4e-45ac-6035d4107cc9' } ],
        pageCount: 240,
        summary: 'Formerly titled The Hill We Climb and Other Poems, the luminous poetry collection by #1 New York Times bestselling author and presidential inaugural poet Amanda Gorman captures a shipwrecked moment in time and transforms it into a lyric of hope and healing. In Call Us What We Carry, Gorman explores history, language, identity, and erasure through an imaginative and intimate collage. Harnessing the collective grief of a global pandemic, this beautifully designed volume features poems in many inventive styles and structures and shines a light on a moment of reckoning. Call Us What We Carry reveals that Gorman has become our messenger from the past, our voice for the future.',
        isbn: '593465067',
        likes: 87,
        dislikes: 78,
        inventory: 15,
        numberSold: 190,
        reviews: [
          { review_guid: '081376b4-2e38-453a-a6a6-783ade2eda87' },
          { review_guid: 'f413d743-e63d-4cd7-e83c-8f3b0853b37d' }
        ]
      },

      {
        guid: '8bcf8878-2cd2-4b25-5250-f1f0cf6b3ef5',
        title: 'Chicka Chicka Boom Boom',
        author: 'Bill Martin Jr.',
        image: 'https://m.media-amazon.com/images/I/811ftjOO5FL._AC_UY218_.jpg',
        price: 5.55,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 36,
        summary: 'In this lively alphabet rhyme, all the letters of the alphabet race each other up the coconut tree. Will there be enough room? Oh, no—Chicka Chicka Boom! Boom!',
        isbn: '9781442450707',
        likes: 96,
        dislikes: 23,
        inventory: 89,
        numberSold: 200,
        reviews: [
          { review_guid: 'c544af3e-3173-4bc5-4581-bf246f713bb6' },
          { review_guid: '6dc0b242-e1db-4887-3004-cc6da9c6bf0b' },
          { review_guid: 'fe7bfd3f-3e72-4820-0f22-dcf2de7d9f04' },
          { review_guid: 'b510cd73-dd33-485b-2e72-9fb4325a3053' }
        ]
      },

      {
        guid: 'e2daa9b2-d88a-4244-6d64-365b77611438',
        title: 'Chrysalis',
        author: 'Lincoln Child',
        image: 'https://m.media-amazon.com/images/I/81SU9ytQqAL._AC_UL320_.jpg',
        price: 29,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 320,
        summary: 'A blockbuster new thriller from #1 New York Times bestselling author Lincoln Child, centered on a dominant tech company—Chrysalis—whose groundbreaking virtual reality technology is redefining the way we live . . . and possibly introducing a catastrophic danger to the world.',
        isbn: '385543670',
        likes: 191,
        dislikes: 46,
        inventory: 78,
        numberSold: 333,
        reviews: [
          { review_guid: '744c9e97-7e11-49a3-7fe6-fd8e67adbfbd' },
          { review_guid: '1c340553-451a-4178-5f20-a39706e07e54' }
        ]
      },

      {
        guid: 'e211d4ec-ecaa-46d2-9996-c373fde088f7',
        title: 'Circe',
        author: 'Madeline Miller',
        image: 'https://m.media-amazon.com/images/I/71fNP7F9p2L._AC_UL320_.jpg',
        price: 16.99,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 433,
        summary: "In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child -- not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power -- the power of witchcraft, which can transform rivals into monsters and menace the gods themselves. Threatened, Zeus banishes her to a deserted island, where she hones her occult craft, tames wild beasts and crosses paths with many of the most famous figures in all of mythology, including the Minotaur, Daedalus and his doomed son Icarus, the murderous Medea, and, of course, wily Odysseus. But there is danger, too, for a woman who stands alone, and Circe unwittingly draws the wrath of both men and gods, ultimately finding herself pitted against one of the most terrifying and vengeful of the Olympians. To protect what she loves most, Circe must summon all her strength and choose, once and for all, whether she belongs with the gods she is born from, or the mortals she has come to love. With unforgettably vivid characters, mesmerizing language, and page-turning suspense, Circe is a triumph of storytelling, an intoxicating epic of family rivalry, palace intrigue, love and loss, as well as a celebration of indomitable female strength in a man's world.",
        isbn: '0316556343',
        likes: 111,
        dislikes: 222,
        inventory: 333,
        numberSold: 444,
        reviews: [
          { review_guid: '2a692e81-c385-460e-a35d-70cb56c0b9a8' },
          { review_guid: '0cae3298-4ade-49a7-d843-9f60f1867d03' },
          { review_guid: 'e01a0325-1f33-40c7-4cc3-4db69063feaa' }
        ]
      },

      {
        guid: '1bfb6d6d-1a7d-4071-b13b-a2cbe6f5bc22',
        title: 'Cloudbuster Nine: The Untold Story of Ted Williams and the Baseball Team That Helped Win World War II',
        author: 'Anne R. Keene',
        image: 'https://m.media-amazon.com/images/I/71vZnuSYj5L._AC_UL320_.jpg',
        price: 17.99,
        genres: [ { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' } ],
        pageCount: 408,
        summary: `In 1943, while the New York Yankees and St. Louis Cardinals were winning pennants and meeting in that year's World Series, one of the nation's strongest baseball teams practiced on a skinned-out college field in the heart of North Carolina. Ted Williams, Johnny Pesky, and Johnny Sain were among a cadre of fighter-pilot cadets who wore the Cloudbuster Nine baseball jersey at an elite Navy training school at the University of North Carolina at Chapel Hill. As a child, Anne Keene's father, Jim Raugh, suited up as the team batboy and mascot. He got to know his baseball heroes personally, watching players hit the road on cramped, tin-can buses, dazzling factory workers, kids, and service members at dozens of games, including a war-bond exhibition with Babe Ruth at Yankee Stadium. Jimmy followed his baseball dreams as a college All-American, but was crushed later in life by a failed major-league bid with the Detroit Tigers. He would have carried this story to his grave had Anne not discovered his scrapbook from a Navy school that shaped America's greatest heroes including George H.W. Bush, Gerald Ford, John Glenn, and Paul "Bear" Bryant."`,
        isbn: '1683583620',
        likes: 41,
        dislikes: 51,
        inventory: 61,
        numberSold: 111,
        reviews: [
          { review_guid: 'fd5a652d-0e99-47ea-2c95-97234f5516e1' },
          { review_guid: '221290f2-1e8b-4cc3-5bf7-7aa5d8bad527' }
        ]
      },

      {
        guid: '1f81eba4-67ac-4e95-e15b-89eeaf178a47',
        title: 'Court',
        author: 'Tracy Wolff',
        image: 'https://m.media-amazon.com/images/I/81lhR6VVcCL._AC_UL320_.jpg',
        price: 19.99,
        genres: [ { genre_guid: '20289d26-4572-42c5-5fce-34e77eff62cc' } ],
        pageCount: 720,
        summary: "No one survived the last battle unscathed. Flint is angry at the world, Jaxon is turning into something I don't recognize, and Hudson has put up a wall I'm not sure I'll ever break through. Now war is coming, and we're not ready. We're going to need an army to have any hope of winning. But first, there are questions about my ancestors that need answers. Answers that might just reveal who the real monster is among us. And that's saying something in a world filled with bloodthirsty vampires, immortal gargoyles, and an ancient battle between two gods. There's no guarantee that anyone will be left standing when the dust settles, but if we want to save this world, I have no choice. I'll have to embrace every part of me...even the parts I fear the most.",
        isbn: '1649370601',
        likes: 2,
        dislikes: 3,
        inventory: 90,
        numberSold: 100,
        reviews: [
          { review_guid: '69bd8ed2-f3a5-4dae-8706-5c904a017bfa' },
          { review_guid: 'c3413683-aead-4ef7-eee0-23e48dde3568' }
        ]
      },

      {
        guid: '94a207d5-6312-456c-e1da-d0a96a66c9cc',
        title: 'Crossfire',
        author: 'Lynette Eason',
        image: 'https://m.media-amazon.com/images/I/81-vgyAquIL._AC_UL320_.jpg',
        price: 16.99,
        genres: [ { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' } ],
        pageCount: 315,
        summary: "FBI special agent Julianna Jameson is a top-notch negotiator who has never lost a hostage. Surely she can manage to take care of her much younger sister, Dottie, who showed up unannounced to live with Julianna while she finished her senior year of high school. A former sniper with the 75th Ranger Regiment, Clay Fox left the army after a tragic incident that he can't get past. Now he's working as a high school resource officer until he can figure out what to do with the rest of his life. Their paths cross when Julianna is called in to negotiate a courtroom hostage situation involving Clay's sister. Impressed and a bit intimidated by the calm, capable woman with the dark hair and blue eyes, Clay invites her to speak at his school. Dottie's school. But as the anniversary of a school shooting from Julianna's past approaches, it becomes clear that her perfect record is about to be tested and that Dottie is at risk. If Julianna and Clay can't figure out who's behind the attacks, more innocent people will die--and Dottie is next in line.",
        isbn: '800737350',
        likes: 18,
        dislikes: 20,
        inventory: 60,
        numberSold: 200,
        reviews: [ { review_guid: '3b6efca2-323d-4786-2dfc-cad53b689c11' } ]
      },

      {
        guid: '4fd420f2-b9e2-4a11-bb05-b7114942f696',
        title: 'Crying in H Mart: A Memoir',
        author: 'Michelle Zauner',
        image: 'https://m.media-amazon.com/images/I/811Hq4sgpSL._AC_UL320_.jpg',
        price: 26.95,
        genres: [ { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' } ],
        pageCount: 416,
        summary: "In this exquisite story of family, food, grief, and endurance, Michelle Zauner proves herself far more than a dazzling singer, songwriter, and guitarist. With humor and heart, she tells of growing up one of the few Asian American kids at her school in Eugene, Oregon; of struggling with her mother's particular, high expectations of her; of a painful adolescence; of treasured months spent in her grandmother's tiny apartment in Seoul, where she and her mother would bond, late at night, over heaping plates of food. As she grew up, moving to the East Coast for college, finding work in the restaurant industry, and performing gigs with her fledgling band--and meeting the man who would become her husband--her Koreanness began to feel ever more distant, even as she found the life she wanted to live. It was her mother's diagnosis of terminal cancer, when Michelle was twenty-five, that forced a reckoning with her identity and brought her to reclaim the gifts of taste, language, and history her mother had given her. Vivacious and plainspoken, lyrical and honest, Zauner's voice is as radiantly alive on the page as it is onstage. Rich with intimate anecdotes that will resonate widely, and complete with family photos, Crying in H Mart is a book to cherish, share, and reread.",
        isbn: '593396596',
        likes: 99,
        dislikes: 89,
        inventory: 79,
        numberSold: 239,
        reviews: [
          { review_guid: '759ba34c-d813-4c66-67c4-2cbe96dc1d0a' },
          { review_guid: 'e09d060f-ef38-4762-9512-781ea2d77afd' }
        ]
      },

      {
        guid: 'c7ae2565-0088-4802-b298-548a3b36660e',
        title: 'Death Note Short Stories',
        author: 'Tsugumi Ohba',
        image: 'https://m.media-amazon.com/images/I/81mYG45+twL._AC_UL320_.jpg',
        price: 14.99,
        genres: [ { genre_guid: '38183d52-f5bb-4d41-099d-e47df1566abd' } ],
        pageCount: 226,
        summary: "Is Kira's story truly over, or does his influence linger? Death Note's story continues in this collection of short stories penned by the series' creators.",
        isbn: '1974730735',
        likes: 44,
        dislikes: 55,
        inventory: 66,
        numberSold: 112,
        reviews: [ { review_guid: '49d2e08b-888e-48a8-e20c-01fb1225210e' } ]
      },

      {
        guid: '90220899-eb12-4834-2f06-7b3d421d790e',
        title: 'Devil in a Blue Dress',
        author: 'Walter Mosley',
        image: 'https://m.media-amazon.com/images/I/71pZXEW+GAL._AC_UY218_.jpg',
        price: 12.99,
        genres: [ { genre_guid: '9dc4b813-f699-4311-99b2-81b9a7de31b0' } ],
        pageCount: 240,
        summary: "he year is 1948, the town is Los Angeles. Easy Rawlins, a black war veteran, has just been fired from his job at a defense factory plant. Drinking in his friend's bar, he's wondering how he'll manage to make ends meet, when a white man in a linen suit approaches him and offers him good money if Easy will simply locate Miss Daphne Money, a missing blonde beauty known to frequent black jazz clubs. Easy has no idea that by taking this job, his life is about to change forever.",
        isbn: '1982150343',
        likes: 33,
        dislikes: 11,
        inventory: 66,
        numberSold: 99,
        reviews: [
          { review_guid: '08a395c8-414b-42ae-d688-01c859a9afe9' },
          { review_guid: '3bc78d2a-a9a9-4172-2039-af9f7fe4912c' }
        ]
      },

      {
        guid: '1caa9dc7-8c09-4057-9170-58cafce2fec3',
        title: 'Devotions: The Selected Poems of Mary Oliver',
        author: 'Mary Oliver',
        image: 'https://m.media-amazon.com/images/I/81cFRUt5JVL._AC_UL320_.jpg',
        price: 20,
        genres: [ { genre_guid: '59bf9695-6237-4e4e-45ac-6035d4107cc9' } ],
        pageCount: 480,
        summary: 'Pulitzer Prize-winning poet Mary Oliver presents a personal selection of her best work in this definitive collection spanning more than five decades of her esteemed literary career.',
        isbn: '399563261',
        likes: 88,
        dislikes: 12,
        inventory: 99,
        numberSold: 234,
        reviews: [
          { review_guid: '7574026b-0a71-4c69-0ab9-b32b13d10e73' },
          { review_guid: '6baa535b-6c8a-43f9-d8b4-00d59186849f' },
          { review_guid: '4f678eda-5c87-4b73-d1ae-129106719e1d' }
        ]
      },

      {
        guid: 'efbe4f7b-d439-4fac-5732-221d3523f20c',
        title: 'Diamonds and Deadlines: A Tale of Greed, Deceit, and a Female Tycoon in the Gilded Age',
        author: 'Betsy Prioleau',
        image: 'https://m.media-amazon.com/images/I/61nREphG0BL._AC_UL320_.jpg',
        price: 30,
        genres: [
          { genre_guid: 'fb1adcfd-652c-41bc-10a2-b83d57f0150e' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 368,
        summary: "The first major biography of the glamorous and scandalous Miriam Leslie, titan of publishing and an unsung hero of women's suffrage",
        isbn: '1468314505',
        likes: 99,
        dislikes: 14,
        inventory: 50,
        numberSold: 250,
        reviews: [
          { review_guid: 'e161b6ac-1adb-4362-1ccb-d71b0af9e65b' },
          { review_guid: '2d09a5c2-967f-4423-2d7f-21cda161b003' }
        ]
      },

      {
        guid: '7d177130-e7dd-4201-aead-41be55e4e6a8',
        title: 'Dream Big, Little One',
        author: 'Vashti Harrison',
        image: 'https://m.media-amazon.com/images/I/718Ak9PDjEL._AC_UY218_.jpg',
        price: 6.99,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 26,
        summary: "Featuring 18 trailblazing black women in American history, Dream Big, Little One is the irresistible board book adaptation of Little Leaders: Bold Women in Black History. Among these women, you'll find heroes, role models, and everyday women who did extraordinary things - bold women whose actions and beliefs contributed to making the world better for generations of girls and women to come. Whether they were putting pen to paper, soaring through the air or speaking up for the rights of others, the women profiled in these pages were all taking a stand against a world that didn't always accept them. The leaders in this book may be little, but they all did something big and amazing, inspiring generations to come.",
        isbn: '316475092',
        likes: 114,
        dislikes: 40,
        inventory: 20,
        numberSold: 500,
        reviews: [
          { review_guid: 'dd1be17b-abde-43a1-795f-dd9b1d28f9e9' },
          { review_guid: '6ade5597-5cd3-4f8b-b22d-30e0487ed25f' },
          { review_guid: 'ef42032f-f294-4c39-6ebe-b9532d379d80' }
        ]
      },

      {
        guid: '9a97e70b-59de-4a3b-5a21-a04df2bf25e1',
        title: 'Dune',
        author: 'Frank Herbert',
        image: 'https://m.media-amazon.com/images/I/910N36lR+kL._AC_UY218_.jpg',
        price: 9.99,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 896,
        summary: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for.... When House Atreides is betrayed, the destruction of Paul's family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad'Dib, he will bring to fruition humankinds most ancient and unattainable dream.",
        isbn: '441172717',
        likes: 100,
        dislikes: 200,
        inventory: 20,
        numberSold: 500,
        reviews: [
          { review_guid: '7ee7bdb6-46b7-4764-93e8-631c8d1d16e9' },
          { review_guid: 'da7a90d9-6231-4654-d832-1cf507c86184' },
          { review_guid: 'b5ae864f-215e-4b51-7f9b-cd02bbd58509' }
        ]
      },

      {
        guid: '35617fb2-0f62-43c2-9a7a-df95ee19514b',
        title: 'Encyclopedia of Demons in World Religions and Cultures',
        author: 'Theresa Bane',
        image: 'https://m.media-amazon.com/images/I/813qeHAUIBS._AC_UL320_.jpg',
        price: 39.95,
        genres: [ { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' } ],
        pageCount: 416,
        summary: "This exhaustive volume catalogs nearly three thousand demons in the mythologies and lore of virtually every ancient society and most religions. From Aamon, the demon of life and reproduction with the head of a serpent and the body of a wolf in Christian demonology, to Zu, the half-man, half-bird personification of the southern wind and thunder clouds in Sumero-Akkadian mythology, entries offer descriptions of each demon's origins, appearance and cultural significance. Also included are descriptions of the demonic and diabolical members making up the hierarchy of Hell and the numerous species of demons that, according to various folklores, mythologies, and religions, populate the earth and plague mankind. Very thoroughly indexed.",
        isbn: '786463600',
        likes: 49,
        dislikes: 59,
        inventory: 100,
        numberSold: 432,
        reviews: [ { review_guid: '2a9a2cf1-2c93-42e2-5d18-6e42db823968' } ]
      },

      {
        guid: '15d97cc9-4d15-4620-72a2-7c952c7fecfc',
        title: "Ender's Game",
        author: 'Orson Scott Card',
        image: 'https://m.media-amazon.com/images/I/91T-14y8aTL._AC_UY218_.jpg',
        price: 13.5,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 352,
        summary: `In order to develop a secure defense against a hostile alien race's next attack, government agencies breed child geniuses and train them as soldiers. A brilliant young boy, Andrew "Ender" Wiggin lives with his kind but distant parents, his sadistic brother Peter, and the person he loves more than anyone else, his sister Valentine. Peter and Valentine were candidates for the soldier-training program but didn't make the cut--young Ender is the Wiggin drafted to the orbiting Battle School for rigorous military training.`,
        isbn: '812550706',
        likes: 86,
        dislikes: 54,
        inventory: 50,
        numberSold: 200,
        reviews: [
          { review_guid: '98963562-b13b-4b4a-9615-5d2527274a79' },
          { review_guid: '61d34ec4-ae3b-4701-39ea-07e0c9c0d328' }
        ]
      },

      {
        guid: '42720f79-2b9c-439d-734f-1c772b6c6d27',
        title: 'Every Summer After',
        author: 'Carley Fortune',
        image: 'https://m.media-amazon.com/images/I/81sSQixvtBL._AC_UL320_.jpg',
        price: 16,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 320,
        summary: "They say you can never go home again, and for Persephone Fraser, ever since she made the biggest mistake of her life a decade ago, that has felt too true. Instead of glittering summers on the lakeshore of her childhood, she spends them in a stylish apartment in the city, going out with friends, and keeping everyone a safe distance from her heart. Until she receives the call that sends her racing back to Barry's Bay and into the orbit of Sam Florek—the man she never thought she'd have to live without. For six summers, through hazy afternoons on the water and warm summer nights working in his family's restaurant and curling up together with books—medical textbooks for him and work-in-progress horror short stories for her—Percy and Sam had been inseparable. Eventually that friendship turned into something breathtakingly more, before it fell spectacularly apart. When Percy returns to the lake for Sam's mother's funeral, their connection is as undeniable as it had always been. But until Percy can confront the decisions she made and the years she's spent punishing herself for them, they'll never know whether their love might be bigger than the biggest mistakes of their past.  Told over the course of six years and one weekend, Every Summer After is a big, sweeping nostalgic story of love and the people and choices that mark us forever.",
        isbn: '593438531',
        likes: 19,
        dislikes: 64,
        inventory: 43,
        numberSold: 215,
        reviews: [
          { review_guid: '60a7ce90-359d-429d-0d16-61786333be4b' },
          { review_guid: 'fa0c7b8f-45ab-49e1-d5e6-5e9cfac82632' }
        ]
      },

      {
        guid: '33248749-6c27-4c51-52d3-42bbe2b4723f',
        title: 'Fifty Words for Rain: A Novel',
        author: 'Asha Lemmie',
        image: 'https://m.media-amazon.com/images/I/81oR1wKpBNL._AC_UL320_.jpg',
        price: 17,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 464,
        summary: "Kyoto, Japan, 1948. “Do not question. Do not fight. Do not resist.” Such is eight-year-old Noriko “Nori” Kamiza's first lesson. She will not question why her mother abandoned her with only these final words. She will not fight her confinement to the attic of her grandparents' imperial estate. And she will not resist the scalding chemical baths she receives daily to lighten her skin. The child of a married Japanese aristocrat and her African American GI lover, Nori is an outsider from birth. Her grandparents take her in, only to conceal her, fearful of a stain on the royal pedigree that they are desperate to uphold in a changing Japan. Obedient to a fault, Nori accepts her solitary life, despite her natural intellect and curiosity. But when chance brings her older half-brother, Akira, to the estate that is his inheritance and destiny, Nori finds in him an unlikely ally with whom she forms a powerful bond—a bond their formidable grandparents cannot allow and that will irrevocably change the lives they were always meant to lead. Because now that Nori has glimpsed a world in which perhaps there is a place for her after all, she is ready to fight to be a part of it—a battle that just might cost her everything. Spanning decades and continents, Fifty Words for Rain is a dazzling epic about the ties that bind, the ties that give you strength, and what it means to be free.",
        isbn: '1524746380',
        likes: 96,
        dislikes: 46,
        inventory: 100,
        numberSold: 333,
        reviews: [
          { review_guid: '17d5140f-a589-424b-9675-3a09ac66b913' },
          { review_guid: 'fc98245b-13bc-4feb-47b3-f446e0b47ae1' }
        ]
      },

      {
        guid: '7ad047c8-d300-494b-d83b-0e353e6eb3fe',
        title: 'Frankenstein',
        author: 'Mary Shelley',
        image: 'https://m.media-amazon.com/images/I/81F6mF9efaL._AC_UL320_.jpg',
        price: 6.99,
        genres: [
          { genre_guid: '35cd6638-f8c4-4923-03e3-e4369a6b6375' },
          { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' }
        ],
        pageCount: 166,
        summary: "Few creatures of horror have seized readers' imaginations and held them for so long as the anguished monster of Mary Shelley's Frankenstein. The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the gothic novel's enduring success, it is remarkable that it began merely as a whim of Lord Byron's.",
        isbn: '486282112',
        likes: 17,
        dislikes: 11,
        inventory: 50,
        numberSold: 100,
        reviews: [
          { review_guid: 'cb5035eb-92b4-4eb3-dc7a-418b2b707e33' },
          { review_guid: '9c2b0a70-029c-43e4-8252-3e8ff2d9adac' },
          { review_guid: 'a33e75f8-e174-4577-63c8-afede80b9e70' },
          { review_guid: '758d95d0-a7db-441a-a0e0-c93486e35199' }
        ]
      },

      {
        guid: 'cdd4953a-72e2-47b6-0baf-982466f85224',
        title: 'From the Core: A New Masculine Paradigm for Leading with Love, Living Your Truth, and Healing the World',
        author: 'John Wineland',
        image: 'https://m.media-amazon.com/images/I/81XdSe5d6lL._AC_UL320_.jpg',
        price: 18.99,
        genres: [ { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' } ],
        pageCount: 224,
        summary: "Men today face a crisis of identity. While we can see how the old paradigm of patriarchal dominance needs to go, is the solution really to deconstruct the very idea of masculinity out of existence? No―that's not the answer. As John Wineland writes, “We need a generation of conscious men who can provide guidance and direction in their communities, just as we need to support and encourage women to do the same.” With From the Core, Wineland sets out a clear roadmap for men who want to live, love, and lead from the most profound places within them.",
        isbn: '1683649109',
        likes: 18,
        dislikes: 22,
        inventory: 25,
        numberSold: 78,
        reviews: [
          { review_guid: '2640c85d-eb4d-4062-7c9d-56f6b231213c' },
          { review_guid: '48adf486-26f0-401f-1c9e-b14e6346be7a' }
        ]
      },

      {
        guid: '17ad2746-e4d2-42de-3828-b1bd53495abd',
        title: 'From Trauma to Transformation: A Path to Healing and Growth',
        author: 'Debra Laaser',
        image: 'https://m.media-amazon.com/images/I/615M-EAru2L._AC_UL320_.jpg',
        price: 16.99,
        genres: [
          { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' },
          { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' }
        ],
        pageCount: 208,
        summary: `We have all heard of post traumatic stress, but few of us think about the possibility of post traumatic growth--the positive ways in which we can be transformed by our trauma. Yet this is precisely what can happen when we face our hurts, struggle through the rubble of our broken relationships, and unearth the ways God wants to use our trials to refine and mature us. With compassion born from personal experience and insights gathered from years of counseling others, licensed marriage and family therapist Debra Laaser helps you stop asking ""Why me?"" and start asking ""Lord, what would you have me learn from this?"" She offers tangible steps you can take to move beyond daily survival toward a future in which you can thrive. God does not waste our pain. With Laaser's expert guidance, you can experience positive life change not in spite of the hurt, loss, or betrayal you have undergone but because of it.`,
        isbn: '800738039',
        likes: 42,
        dislikes: 2,
        inventory: 45,
        numberSold: 66,
        reviews: [ { review_guid: '98fe5d89-622c-42b1-2da9-b923d6f15bff' } ]
      },

      {
        guid: '191bb8a6-be3e-43cc-5394-4322a3782fde',
        title: 'Girl in Pieces',
        author: 'Kathleen Glasgow',
        image: 'https://m.media-amazon.com/images/I/71x0wGoayfL._AC_UL320_.jpg',
        price: 10.99,
        genres: [ { genre_guid: '20289d26-4572-42c5-5fce-34e77eff62cc' } ],
        pageCount: 448,
        summary: "A deeply moving portrait of a girl in a world that owes her nothing, and has taken so much, and the journey she undergoes to put herself back together. Kathleen Glasgow's debut is heartbreakingly real and unflinchingly honest. It's a story you won't be able to look away from.",
        isbn: '1101934743',
        likes: 89,
        dislikes: 21,
        inventory: 56,
        numberSold: 156,
        reviews: [
          { review_guid: '70742b9c-5956-4269-3c25-a6dc359bc207' },
          { review_guid: '474a2392-cfa9-41ee-755d-8f3296d7af76' }
        ]
      },

      {
        guid: 'f9e36f23-2fac-4b67-f6c0-87acfaa29657',
        title: 'Girl, Alone',
        author: 'Blake Pierce',
        image: 'https://m.media-amazon.com/images/I/810fMTMuZML._AC_UL320_.jpg',
        price: 8.99,
        genres: [ { genre_guid: '9dc4b813-f699-4311-99b2-81b9a7de31b0' } ],
        pageCount: 211,
        summary: 'FBI Agent Ella Dark has studied serial killers from the time she could read, devastated by the murder of her own sister. With her photographic memory, she has obtained an encyclopedic knowledge of every serial killer, every victim and every case. But when a serial killer strikes in the swamps of Louisiana, Ella soon comes to learn that the real thing is like nothing she ever expected.',
        isbn: '1094373567',
        likes: 42,
        dislikes: 12,
        inventory: 10,
        numberSold: 99,
        reviews: [
          { review_guid: 'aa6893c2-0688-438c-bf19-0accc1fd1d3c' },
          { review_guid: '46005128-a798-407b-436c-642c1c52cff7' },
          { review_guid: '12600e55-dc85-416d-0488-fdc4be36909b' }
        ]
      },

      {
        guid: 'eb909f86-0229-4d75-ae76-e16e28b7a21e',
        title: 'Gone Girl',
        author: 'Gillian Flynn',
        image: 'https://m.media-amazon.com/images/I/71jZzl2qXEL._AC_UY218_.jpg',
        price: 12.99,
        genres: [ { genre_guid: '9dc4b813-f699-4311-99b2-81b9a7de31b0' } ],
        pageCount: 422,
        summary: "On a warm summer morning in North Carthage, Missouri, it is Nick and Amy Dunne's fifth wedding anniversary. Presents are being wrapped and reservations are being made when Nick's clever and beautiful wife disappears. Husband-of-the-Year Nick isn't doing himself any favors with cringe-worthy daydreams about the slope and shape of his wife's head, but passages from Amy's diary reveal the alpha-girl perfectionist could have put anyone dangerously on edge. Under mounting pressure from the police and the media—as well as Amy's fiercely doting parents—the town golden boy parades an endless series of lies, deceits, and inappropriate behavior. Nick is oddly evasive, and he's definitely bitter—but is he really a killer?",
        isbn: '307588378',
        likes: 99,
        dislikes: 22,
        inventory: 10,
        numberSold: 157,
        reviews: [
          { review_guid: 'a1504121-c1d6-4ed0-42e1-659f8931a9bd' },
          { review_guid: '7540d28a-0138-43b4-26ed-6c6554b1a60c' },
          { review_guid: 'ae1347f5-786e-455f-16d7-69604b2ed0a3' }
        ]
      },

      {
        guid: 'bd7d1c73-7357-4b7c-e344-5562e7fb21f2',
        title: 'Goodnight Moon',
        author: 'Margaret Wise Brown',
        image: 'https://m.media-amazon.com/images/I/81t-IstQ+ZL._AC_UY218_.jpg',
        price: 5.55,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 30,
        summary: 'In a great green room, tucked away in bed, is a little bunny. ""Goodnight room, goodnight moon."" And to all the familiar things in the softly lit room—to the picture of the three little bears sitting on chairs, to the clocks and his socks, to the mittens and the kittens, to everything one by one—the little bunny says goodnight. One of the most beloved books of all time, Goodnight Moon is a must for every bookshelf. This board book edition is the right size for little hands and is the perfect gift for baby showers, toddler birthday parties, and holidays.',
        isbn: '694003611',
        likes: 53,
        dislikes: 3,
        inventory: 10,
        numberSold: 100,
        reviews: [
          { review_guid: '6e6af407-f06c-40e1-f5b8-93fa1a07c536' },
          { review_guid: '0a8f761b-1ba3-477a-bdfd-6508bfaba4c0' },
          { review_guid: '217d0d7d-0d17-4759-3635-43569254df47' }
        ]
      },

      {
        guid: '51b48079-2626-4cda-e421-454cc93b536a',
        title: 'Grace Under Fire',
        author: 'Julie Garwood',
        image: 'https://m.media-amazon.com/images/I/814drNG3aOL._AC_UL320_.jpg',
        price: 28,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 443,
        summary: "Grace Isabel MacKenna has a hundred things to do today. Killing someone isn't one of them. It is supposed to be a quick visit to Boston for the Buchanan anniversary party, then on to Scotland to collect an inheritance. She checks into her hotel and then decides to go for a brisk walk. But after getting lost, she ends up with a wounded man stumbling into her arms—and his shooter coming after them both. When she fires back in self-defense, she doesn't expect him to drop dead. After Isabel endures an interrogation by police, she is free to go, thanks to the Buchanans dispatching former Navy SEAL and now lawyer Michael Buchanan to assist her. Isabel knows she should be grateful for Michael's help, but since she's harbored an extreme dislike for him for years, gratitude is difficult to muster. Michael has appointed himself her de facto guardian, and she's stuck with him despite their constant bickering and sizzling attraction. Even when Isabel goes to Scotland to claim her inheritance, Michael follows her—but he isn't the only thing she can't shake. Mysterious threats against Isabel surface, and before they can deal with their growing feelings for each other, Michael and Isabel must first survive.",
        isbn: '593546296',
        likes: 56,
        dislikes: 12,
        inventory: 20,
        numberSold: 100,
        reviews: [
          { review_guid: '7a9706e7-fa66-4c42-30ff-6205ca535025' },
          { review_guid: '06b95553-9bcb-4164-cd3b-98c082074add' }
        ]
      },

      {
        guid: 'd06d27ed-003c-4257-c282-005188072b2a',
        title: 'Had I Known: Collected Essays',
        author: 'Barbara Ehrenreich',
        image: 'https://m.media-amazon.com/images/I/41bm4pqr9SL._AC_UL320_.jpg',
        price: 28,
        genres: [ { genre_guid: '536d99f1-7d99-4bb0-1495-a23a59ee4fbc' } ],
        pageCount: 402,
        summary: 'Winner of the 2021 PEN/Diamonstein-Spielvogel Award for the Art of the Essay, HAD I KNOWN contains the most provocative, incendiary, and career-making pieces by bestselling author, essayist, political activist, and "veteran muckraker" Barbara Ehrenreich',
        isbn: '1455543691',
        likes: 561,
        dislikes: 12,
        inventory: 200,
        numberSold: 600,
        reviews: [
          { review_guid: '2acdec83-f63e-4f7a-ff8d-d4ede8d52eed' },
          { review_guid: '4a7659a8-0b61-4044-7f68-d48dd5ca4fa8' }
        ]
      },

      {
        guid: 'e973d6e8-1505-4e9c-6c63-a7ab0a92c48b',
        title: 'Heart Bones',
        author: 'Colleen Hoover',
        image: 'https://m.media-amazon.com/images/I/71R3Rkf41tL._AC_UL320_.jpg',
        price: 14.99,
        genres: [
          { genre_guid: 'bf6a5200-220e-43a6-e8c3-87df08ebddf4' },
          { genre_guid: '20289d26-4572-42c5-5fce-34e77eff62cc' }
        ],
        pageCount: 336,
        summary: 'The #1 New York Times bestselling author of Verity and Regretting You delivers another breathtaking romance with a magnetic suspense that will keep you glued to the pages.',
        isbn: '1713594021',
        likes: 456,
        dislikes: 12,
        inventory: 30,
        numberSold: 600,
        reviews: [
          { review_guid: '1cfdc8d6-cf39-45b0-f7ec-bd0f2aa362fc' },
          { review_guid: '091b266d-4f84-4c06-61aa-29cff44085f6' },
          { review_guid: 'f0fb8c98-476b-4cb8-338a-42333c416df0' },
          { review_guid: '69ca92dd-1ab1-4bb6-1758-88a8e5cef546' }
        ]
      },

      {
        guid: '430c42e3-09ff-4823-c643-245f04b871d5',
        title: 'Home Body',
        author: 'Rupi Kaur',
        image: 'https://m.media-amazon.com/images/I/71cA1NMiI5L._AC_UL320_.jpg',
        price: 16.99,
        genres: [ { genre_guid: '59bf9695-6237-4e4e-45ac-6035d4107cc9' } ],
        pageCount: 122,
        summary: 'From the #1 New York Times bestselling author of milk and honey and the sun and her flowers comes her greatly anticipated third collection of poetry.',
        isbn: '1471196720',
        likes: 43,
        dislikes: 10,
        inventory: 25,
        numberSold: 234,
        reviews: [
          { review_guid: '6b818840-5331-40bb-bd32-95ec9f679cdf' },
          { review_guid: '6ac08195-aee1-4b56-6004-5f9da08a5748' }
        ]
      },

      {
        guid: '8af46ea7-d2e5-40b9-8efc-eb9961fd9100',
        title: "How the World Really Works: The Science Behind How We Got Here and Where We're Going",
        author: 'Vaclav Smil',
        image: 'https://m.media-amazon.com/images/I/71YItEdccVL._AC_UL320_.jpg',
        price: 28,
        genres: [ { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' } ],
        pageCount: 326,
        summary: "An essential analysis of the modern science and technology that makes our twenty-first century lives possible—a scientist's investigation into what science really does, and does not, accomplish.",
        isbn: '241454409',
        likes: 433,
        dislikes: 103,
        inventory: 253,
        numberSold: 834,
        reviews: [
          { review_guid: '3f3b66fc-4efd-4665-02f8-5c282941345b' },
          { review_guid: '6c91de5b-1efe-4cee-fcae-a78ace7a0305' }
        ]
      },

      {
        guid: '15185908-0da4-4d5c-bb65-d2d6454c65bc',
        title: 'How to Read Now: Essays',
        author: 'Elaine Castillo',
        image: 'https://m.media-amazon.com/images/I/71EDm+KTB8L._AC_UL320_.jpg',
        price: 27,
        genres: [ { genre_guid: '536d99f1-7d99-4bb0-1495-a23a59ee4fbc' } ],
        pageCount: 351,
        summary: 'How to Read Now explores the politics and ethics of reading, and insists that we are capable of something better: a more engaged relationship not just with our fiction and our art, but with our buried and entangled histories.',
        isbn: '593489632',
        likes: 33,
        dislikes: 20,
        inventory: 75,
        numberSold: 534,
        reviews: [ { review_guid: '5e295b84-8eff-4098-0c33-248a958f5fd7' } ]
      },

      {
        guid: 'e7172387-5487-44d2-ccf3-940484e7ea35',
        title: 'I Must Betray You',
        author: 'Ruta Sepetys',
        image: 'https://m.media-amazon.com/images/I/81Mqxn2fIEL._AC_UL320_.jpg',
        price: 18.99,
        genres: [ { genre_guid: '20289d26-4572-42c5-5fce-34e77eff62cc' } ],
        pageCount: 335,
        summary: 'A gut-wrenching, startling historical thriller about communist Romania and the citizen spy network that devastated a nation, from the #1 New York Times bestselling, award-winning author of Salt to the Sea and Between Shades of Gray.',
        isbn: '1984836048',
        likes: 53,
        dislikes: 20,
        inventory: 55,
        numberSold: 834,
        reviews: [
          { review_guid: '01d2ad28-acf6-4006-32db-421dfe94ebff' },
          { review_guid: '7aab36ff-bb4a-4b09-133e-d593f64df5de' }
        ]
      },

      {
        guid: '7fe307ed-c6de-42b1-90a9-bf34c9710f39',
        title: 'If He Had Been with Me',
        author: 'Laura Nowlin',
        image: 'https://m.media-amazon.com/images/I/81GNCzI3CJL._AC_UL320_.jpg',
        price: 10.99,
        genres: [
          { genre_guid: 'bf6a5200-220e-43a6-e8c3-87df08ebddf4' },
          { genre_guid: '20289d26-4572-42c5-5fce-34e77eff62cc' }
        ],
        pageCount: 400,
        summary: "Autumn and Finn used to be inseparable. But then something changed. Or they changed. Now, they do their best to ignore each other. Autumn has her boyfriend Jamie, and her close-knit group of friends. And Finn has become that boy at school, the one everyone wants to be around. That still doesn't stop the way Autumn feels every time she and Finn cross paths, and the growing, nagging thought that maybe things could have been different. Maybe they should be together. But come August, things will change forever. And as time passes, Autumn will be forced to confront how else life might have been different if they had never parted ways...",
        isbn: '1728205484',
        likes: 93,
        dislikes: 6,
        inventory: 29,
        numberSold: 434,
        reviews: [
          { review_guid: '29601e79-eca2-422a-d871-43b34447a265' },
          { review_guid: 'd57026b4-0602-48de-a55c-d74c9b2f3a97' },
          { review_guid: '027f3d2e-7c4c-496e-9246-2e3eb48ae79d' },
          { review_guid: '9d489bd1-6982-452e-bd23-d586db9ea4b8' }
        ]
      },

      {
        guid: 'beaf70fa-115e-4a34-498f-be543cfb40fe',
        title: 'If You Tell: A True Story of Murder, Family Secrets, and the Unbreakable Bond of Sisterhood',
        author: 'Gregg Olsen',
        image: 'https://m.media-amazon.com/images/I/617bA4D4gTL._AC_UL320_.jpg',
        price: 15.95,
        genres: [ { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' } ],
        pageCount: 429,
        summary: "#1 New York Times bestselling author Gregg Olsen's shocking and empowering true-crime story of three sisters determined to survive their mother's house of horrors.",
        isbn: '1542005221',
        likes: 43,
        dislikes: 10,
        inventory: 25,
        numberSold: 234,
        reviews: [
          { review_guid: 'eec65faa-cf3d-443c-6632-befe521c3023' },
          { review_guid: 'ed36d19e-c636-4b47-7972-1744e97a6d70' }
        ]
      },

      {
        guid: 'fd07feb0-2750-4cce-71af-603217902d94',
        title: 'Ikigai: The Japanese Secret to a Long and Happy Life',
        author: 'Hector Garcia',
        image: 'https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UL320_.jpg',
        price: 22,
        genres: [ { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' } ],
        pageCount: 208,
        summary: "According to the Japanese, everyone has an ikigai—a reason for living. And according to the residents of the Japanese village with the world's longest-living people, finding it is the key to a happier and longer life. Having a strong sense of ikigai—where what you love, what you're good at, what you can get paid for, and what the world needs all overlap—means that each day is infused with meaning. It's the reason we get up in the morning. It's also the reason many Japanese never really retire (in fact there's no word in Japanese that means retire in the sense it does in English): They remain active and work at what they enjoy, because they've found a real purpose in life—the happiness of always being busy. In researching this book, the authors interviewed the residents of the Japanese village with the highest percentage of 100-year-olds—one of the world's Blue Zones. Ikigai reveals the secrets to their longevity and happiness: how they eat, how they move, how they work, how they foster collaboration and community, and—their best-kept secret—how they find the ikigai that brings satisfaction to their lives. And it provides practical tools to help you discover your own ikigai. Because who doesn't want to find happiness in every day?",
        isbn: '143130722',
        likes: 43,
        dislikes: 10,
        inventory: 25,
        numberSold: 234,
        reviews: [
          { review_guid: 'afef2625-8be8-4ecc-ca89-4227d3fb8498' },
          { review_guid: '91b93549-5fd4-4b66-084d-0ee65138b7a2' },
          { review_guid: '821197b4-c8ba-4cef-42ed-99db08b99111' }
        ]
      },

      {
        guid: '4cad9958-ba32-47aa-2a55-940ffb42102c',
        title: 'In Cold Blood',
        author: 'Truman Capote',
        image: 'https://m.media-amazon.com/images/I/71KYUTo4zQL._AC_UY218_.jpg',
        price: 10.99,
        genres: [ { genre_guid: '9dc4b813-f699-4311-99b2-81b9a7de31b0' } ],
        pageCount: 343,
        summary: 'On November 15, 1959, in the small town of Holcomb, Kansas, four members of the Clutter family were savagely murdered by blasts from a shotgun held a few inches from their faces. There was no apparent motive for the crime, and there were almost no clues.',
        isbn: '679745580',
        likes: 93,
        dislikes: 18,
        inventory: 55,
        numberSold: 834,
        reviews: [
          { review_guid: '8417bf87-9938-4e12-a18d-1de83238cd0c' },
          { review_guid: 'ac4d9158-263f-4f90-7788-e093d94bdff0' }
        ]
      },

      {
        guid: 'c695454c-74e0-4b29-4e1b-c343ef976bb3',
        title: 'Intimations: Six Essays',
        author: 'Zadie Smith',
        image: 'https://m.media-amazon.com/images/I/81+0TbS7+lL._AC_UL320_.jpg',
        price: 10.95,
        genres: [ { genre_guid: '536d99f1-7d99-4bb0-1495-a23a59ee4fbc' } ],
        pageCount: 111,
        summary: 'Written during the early months of lockdown, Intimations explores ideas and questions prompted by an unprecedented situation. What does it mean to submit to a new reality--or to resist it? How do we compare relative sufferings? What is the relationship between time and work? In our isolation, what do other people mean to us? How do we think about them? What is the ratio of contempt to compassion in a crisis? When an unfamiliar world arrives, what does it reveal about the world that came before it?',
        isbn: '593297610',
        likes: 93,
        dislikes: 18,
        inventory: 55,
        numberSold: 834,
        reviews: [
          { review_guid: '80b81041-142b-453f-8019-f4ec42d8bd6c' },
          { review_guid: '599ad932-4cbf-41df-1573-0f20172aaea0' }
        ]
      },

      {
        guid: 'fb622977-dfb1-4b81-abbc-bc17aef9cc58',
        title: 'Inventor of the Future: The Visionary Life of Buckminster Fuller',
        author: 'Alec Nevala-Lee',
        image: 'https://m.media-amazon.com/images/I/71X+3CltxYL._AC_UL320_.jpg',
        price: 35,
        genres: [
          { genre_guid: 'fb1adcfd-652c-41bc-10a2-b83d57f0150e' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 672,
        summary: "During his lifetime, Buckminster Fuller was hailed as one of the greatest geniuses of the twentieth century. As the architectural designer and futurist best known for the geodesic dome, he enthralled a vast popular audience, inspired devotion from both the counterculture and the establishment, and was praised as a modern Leonardo da Vinci. To his admirers, he exemplified what one man could accomplish by approaching urgent design problems using a radically unconventional set of strategies, which he based on a mystical conception of the universe's geometry. His views on sustainability, as embodied in the image of Spaceship Earth, convinced him that it was possible to provide for all humanity through the efficient use of planetary resources. From Epcot Center to the molecule named in his honor as the buckyball, Fuller's legacy endures to this day, and his belief in the transformative potential of technology profoundly influenced the founders of Silicon Valley.",
        isbn: '62947222',
        likes: 93,
        dislikes: 18,
        inventory: 55,
        numberSold: 834,
        reviews: [ { review_guid: 'dba0f8b6-876b-46ad-a637-2f475bb1f5fa' } ]
      },

      {
        guid: 'ec1b0e1d-2afe-431a-a9b6-b7dd0e768deb',
        title: 'It Ends with Us',
        author: 'Colleen Hoover',
        image: 'https://m.media-amazon.com/images/I/71j0FLAauxL._AC_UL320_.jpg',
        price: 16.99,
        genres: [ { genre_guid: 'bf6a5200-220e-43a6-e8c3-87df08ebddf4' } ],
        pageCount: 384,
        summary: "Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town where she grew up—she graduated from college, moved to Boston, and started her own business. And when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life seems too good to be true. Ryle is assertive, stubborn, maybe even a little arrogant. He's also sensitive, brilliant, and has a total soft spot for Lily. And the way he looks in scrubs certainly doesn't hurt. Lily can't get him out of her head. But Ryle's complete aversion to relationships is disturbing. Even as Lily finds herself becoming the exception to his “no dating” rule, she can't help but wonder what made him that way in the first place. As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan—her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.",
        isbn: '1501110365',
        likes: 93,
        dislikes: 18,
        inventory: 55,
        numberSold: 834,
        reviews: [
          { review_guid: 'c22d326a-a7d3-4644-2828-95bec3d0ca2f' },
          { review_guid: 'f0d501d2-b0ca-42e9-e09a-d12b91a0f138' },
          { review_guid: '173dba09-3d99-4a2b-8ef8-f5bb6c25a5e4' },
          { review_guid: 'b872b472-36f1-46aa-fc01-09ab0c83fadf' }
        ]
      },

      {
        guid: '335e08f9-04af-4241-084c-e5f3cab6e5bc',
        title: "It's Not Summer Without You",
        author: 'Jenny Han',
        image: 'https://m.media-amazon.com/images/I/71Mx-bE91+L._AC_UL320_.jpg',
        price: 11.99,
        genres: [ { genre_guid: '20289d26-4572-42c5-5fce-34e77eff62cc' } ],
        pageCount: 320,
        summary: 'It used to be that Belly counted the days until summer, until she was back at Cousins Beach with Conrad and Jeremiah. But not this year. Not after Susannah got sick again and Conrad stopped caring. Everything that was right and good has fallen apart, leaving Belly wishing summer would never come. But when Jeremiah calls saying Conrad has disappeared, Belly knows what she must do to make things right again. And it can only happen back at the beach house, the three of them together, the way things used to be. If this summer really and truly is the last summer, it should end the way it started—at Cousins Beach.',
        isbn: '9781416995562',
        likes: 193,
        dislikes: 38,
        inventory: 25,
        numberSold: 534,
        reviews: [
          { review_guid: '3d108f9c-5df4-4d86-47bb-8abea7886d39' },
          { review_guid: 'e1f80c34-f2ce-4457-71c4-95eb05f8f89e' }
        ]
      },

      {
        guid: '04f5307a-8cb3-4f30-6b1c-197d07172672',
        title: 'James Patterson by James Patterson: The Stories of My Life',
        author: 'James Patterson',
        image: 'https://m.media-amazon.com/images/I/817P2FxyJdL._AC_UL320_.jpg',
        price: 29,
        genres: [
          { genre_guid: 'fb1adcfd-652c-41bc-10a2-b83d57f0150e' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 368,
        summary: "These are the stories of James Patterson's life: the most anticipated memoir of 2022.",
        isbn: '316397539',
        likes: 193,
        dislikes: 38,
        inventory: 25,
        numberSold: 534,
        reviews: [
          { review_guid: '4a966f86-e851-4175-c522-14aaefd218ce' },
          { review_guid: '8581f2cd-4c39-4b2d-6a9a-ab174b52990e' }
        ]
      },

      {
        guid: 'e50def7e-40a5-4c0a-80dd-aba93fbf80ab',
        title: 'Killing the Killers: The Secret War Against Terrorists',
        author: "Bill O'Reilly",
        image: 'https://m.media-amazon.com/images/I/81d8nXPeJwL._AC_UL320_.jpg',
        price: 30,
        genres: [ { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' } ],
        pageCount: 288,
        summary: "In the eleventh book in the multimillion-selling Killing series, Bill O'Reilly and Martin Dugard reveal the startling, dramatic story of the global war against terrorists.",
        isbn: '1250279259',
        likes: 193,
        dislikes: 38,
        inventory: 25,
        numberSold: 534,
        reviews: [
          { review_guid: '77a698d3-478c-44d9-dbde-c259668ee1ec' },
          { review_guid: '16df0a57-7e66-42e4-f89f-41acc713293e' },
          { review_guid: '41a3aa7a-011c-4c3f-6657-926fcffe28fb' }
        ]
      },

      {
        guid: 'a4fd97b8-ba4c-437e-11f0-fbce09949738',
        title: 'Klara and the Sun',
        author: 'Kazuo Ishiguro',
        image: 'https://m.media-amazon.com/images/I/713frTnv03L._AC_UL320_.jpg',
        price: 16.95,
        genres: [ { genre_guid: 'b653a9fb-3f19-43fd-07d8-7983aed0351f' } ],
        pageCount: 418,
        summary: 'Here is the story of Klara, an Artificial Friend with outstanding observational qualities, who, from her place in the store, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside. She remains hopeful that a customer will soon choose her. Klara and the Sun is a thrilling book that offers a look at our changing world through the eyes of an unforgettable narrator, and one that explores the fundamental question: what does it mean to love?',
        isbn: '593318170',
        likes: 193,
        dislikes: 38,
        inventory: 25,
        numberSold: 534,
        reviews: [
          { review_guid: 'cd902495-72c9-4871-cadd-79e3174a4633' },
          { review_guid: '5393bf37-cb4a-4e26-b02e-1ef26edd059d' }
        ]
      },

      {
        guid: 'b305720f-de2b-48b1-8b64-012e84791348',
        title: 'Languages of Truth: Essays 2003-2020',
        author: 'Salman Rushdie',
        image: 'https://m.media-amazon.com/images/I/812Mi7HEJCL._AC_UL320_.jpg',
        price: 28,
        genres: [ { genre_guid: '536d99f1-7d99-4bb0-1495-a23a59ee4fbc' } ],
        pageCount: 350,
        summary: "Enlivened on every page by Rushdie's signature wit and dazzling voice, Languages of Truth offers the author's most piercingly analytical views yet on the evolution of literature and culture even as he takes us on an exhilarating tour of his own exuberant and fearless imagination.",
        isbn: '593133196',
        likes: 89,
        dislikes: 9,
        inventory: 56,
        numberSold: 400,
        reviews: [ { review_guid: '624c6102-2210-423a-519f-2b1934287dfa' } ]
      },

      {
        guid: 'cd419f94-ebcd-4042-3f5f-ec8c60fd35e9',
        title: 'Leadership: Six Studies in World Strategy',
        author: 'Henry Kissinger',
        image: 'https://m.media-amazon.com/images/I/61kg04XeivL._AC_UL320_.jpg',
        price: 36,
        genres: [
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' },
          { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' }
        ],
        pageCount: 528,
        summary: 'Henry Kissinger, consummate diplomat and statesman, examines the strategies of six great twentieth-century figures and brings to life a unifying theory of leadership and diplomacy',
        isbn: '593489446',
        likes: 89,
        dislikes: 9,
        inventory: 56,
        numberSold: 400,
        reviews: [ { review_guid: 'b0c10673-eafa-4e97-d9e2-ec6bce5b2fd9' } ]
      },

      {
        guid: '72c2a275-8767-4607-4312-548fd7350a66',
        title: 'Living Untethered: Beyond the Human Predicament',
        author: 'Michael A. Singer',
        image: 'https://m.media-amazon.com/images/I/71YKVU+-KDL._AC_UL320_.jpg',
        price: 18.95,
        genres: [ { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' } ],
        pageCount: 200,
        summary: 'The book you need right now is finally here! From beloved spiritual teacher Michael A. Singer—author of the #1 New York Times bestseller, The Untethered Soul—this transformative and highly anticipated guide will be your compass on an exciting new journey toward self-realization and unconditional happiness.',
        isbn: '1648480934',
        likes: 89,
        dislikes: 9,
        inventory: 56,
        numberSold: 400,
        reviews: [
          { review_guid: 'c376e16f-b05f-40aa-8b68-34816800e9f9' },
          { review_guid: '132b1a9f-ac04-407a-b926-f53f6cdcfc37' }
        ]
      },

      {
        guid: '7332bb72-9b4a-49ec-7cec-4ba55ea9dde7',
        title: 'Llama Llama Red Pajama',
        author: 'Anna Dewdney',
        image: 'https://m.media-amazon.com/images/I/51a4SINvoUL._AC_UY218_.jpg',
        price: 10.99,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 40,
        summary: "In this infectious rhyming picture book, Baby Llama turns bedtime into an all-out llama drama! Tucked into bed by his mama, Baby Llama immediately starts worrying when she goes downstairs, and his soft whimpers turn to hollers when she doesn't come right back. But just in time, Mama returns to set things right.",
        isbn: '451469909',
        likes: 89,
        dislikes: 9,
        inventory: 56,
        numberSold: 400,
        reviews: [
          { review_guid: '7b4ddf23-fc51-474c-8781-4015502b1500' },
          { review_guid: 'ebbc277e-2470-40d1-bc28-7f70eec26234' },
          { review_guid: '53c6bc55-39f4-4b5a-56dd-41bf11ef8495' }
        ]
      },

      {
        guid: 'b82b6d8b-420e-4c2f-2f74-2b8d5a5f8d40',
        title: 'Lord of the Flies',
        author: 'William Golding',
        image: 'https://m.media-amazon.com/images/I/81WUAoL-wFL._AC_UL320_.jpg',
        price: 11,
        genres: [ { genre_guid: '35cd6638-f8c4-4923-03e3-e4369a6b6375' } ],
        pageCount: 377,
        summary: 'A plane crashes on an uncharted island during the start of the next world war, stranding a bunch of schoolboys. At first, their independence is something to rejoice over because they have no parental oversight. They may do whatever they want because they are so far away from civilisation. Anything. But when order crumbles, weird howls reverberate through the night, and panic takes hold, the prospect of adventure appears as remote as the prospect of being rescued.',
        isbn: '143124293',
        likes: 869,
        dislikes: 29,
        inventory: 111,
        numberSold: 946,
        reviews: [
          { review_guid: '1d72720b-cf6f-47e5-1508-42784674b63d' },
          { review_guid: '722d3609-092c-4b5c-d39b-affa543e5ace' },
          { review_guid: 'fa1b99e2-0978-451e-491b-96780e78acc7' },
          { review_guid: '3476c28b-209a-4a26-45c3-d20844642fed' },
          { review_guid: '9acfbc4b-7515-465a-f81d-9ff09f54b96d' }
        ]
      },

      {
        guid: '5240b652-605e-46da-9ea0-ce7da1752979',
        title: 'Make Room: Take Control of Your Space, Time, Energy, and Money to Live on Purpose',
        author: 'Ford Berry',
        image: 'https://m.media-amazon.com/images/I/71BRFjhMDcL._AC_UL320_.jpg',
        price: 16.99,
        genres: [ { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' } ],
        pageCount: 160,
        summary: 'Stuff. We have too much of it. Clothing, kitchen gadgets, electronics, home decor. And more of it arrives on our doorstep all the time. Our stuff takes up an incredible amount of our space, time, energy, and money. But do all these possessions truly make us happier? Certified professional organizer and bestselling author Jennifer Ford Berry says no. Rather than living for our stuff, what actually gives us joy is knowing and living out our purpose in life.',
        isbn: '1540902153',
        likes: 64,
        dislikes: 29,
        inventory: 111,
        numberSold: 532,
        reviews: [ { review_guid: '00de2d88-6a56-4f71-e8aa-6edc4c3b1690' } ]
      },

      {
        guid: 'a9bd86ef-20b0-4089-4dda-9225b110ce3b',
        title: "Man's Search for Meaning",
        author: 'Viktor E. Frankl',
        image: 'https://m.media-amazon.com/images/I/71fS3+Frz4L._AC_UL320_.jpg',
        price: 15,
        genres: [ { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' } ],
        pageCount: 188,
        summary: `Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Between 1942 and 1945 Frankl labored in four different camps, including Auschwitz, while his parents, brother, and pregnant wife perished. Based on his own experience and the experiences of others he treated later in his practice, Frankl argues that we cannot avoid suffering but we can choose how to cope with it, find meaning in it, and move forward with renewed purpose. Frankl's theory-known as logotherapy, from the Greek word logos ("meaning")-holds that our primary drive in life is not pleasure, as Freud maintained, but the discovery and pursuit of what we personally find meaningful.`,
        isbn: '9780807014271',
        likes: 64,
        dislikes: 29,
        inventory: 111,
        numberSold: 532,
        reviews: [
          { review_guid: '75ed27d7-5f49-4798-a222-900f6367a767' },
          { review_guid: '0fbf3e2f-ff47-4a15-6c2b-2717aaece554' }
        ]
      },

      {
        guid: 'b94d0121-382e-4b03-1430-2db840c84269',
        title: 'Meditations: A New Translation',
        author: 'Marcus Aurelius',
        image: 'https://m.media-amazon.com/images/I/81T-PQ9HFTL._AC_UL320_.jpg',
        price: 11,
        genres: [ { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' } ],
        pageCount: 256,
        summary: "In Gregory Hays's new translation—the first in thirty-five years—Marcus's thoughts speak with a new immediacy. In fresh and unencumbered English, Hays vividly conveys the spareness and compression of the original Greek text. Never before have Marcus's insights been so directly and powerfully presented.",
        isbn: '9780812968255',
        likes: 64,
        dislikes: 29,
        inventory: 111,
        numberSold: 532,
        reviews: [
          { review_guid: 'f58063dc-0380-43ed-dde6-fc27cf2ba84d' },
          { review_guid: '584923c0-5608-431f-07e5-507e0a0fdb47' },
          { review_guid: '571e2901-1863-4dbe-2f95-61261b1f6112' }
        ]
      },

      {
        guid: 'ce9c0efa-ed5d-4990-192a-88c5e2f38ad1',
        title: 'Milk and Honey',
        author: 'Rupi Kaur',
        image: 'https://m.media-amazon.com/images/I/71Eq55V2AvL._AC_UL320_.jpg',
        price: 14.99,
        genres: [ { genre_guid: '59bf9695-6237-4e4e-45ac-6035d4107cc9' } ],
        pageCount: 208,
        summary: 'The book is divided into four chapters, and each chapter serves a different purpose. Deals with a different pain. Heals a different heartache. milk and honey takes readers through a journey of the most bitter moments in life and finds sweetness in them because there is sweetness everywhere if you are just willing to look.',
        isbn: '9781449474256',
        likes: 264,
        dislikes: 29,
        inventory: 111,
        numberSold: 732,
        reviews: [
          { review_guid: '72488908-243d-41fb-4761-75119e1fc2e5' },
          { review_guid: '864b5a9f-1321-4964-0c65-084baa4d5e3d' },
          { review_guid: 'e3c763a8-a37f-41b8-3fb7-ce9afcbacfa5' }
        ]
      },

      {
        guid: 'a6d7b05f-2187-40c3-764e-54b8a4baaab5',
        title: 'My Little Golden Book About Betty White',
        author: 'Deborah Hopkinson',
        image: 'https://m.media-amazon.com/images/I/81gtzoeueoS._AC_UL320_.jpg',
        price: 5.99,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 24,
        summary: "Help your little one dream big with a Little Golden Book biography about America's First Lady of Television, Betty White! The perfect introduction to nonfiction for preschoolers!",
        isbn: '593433521',
        likes: 364,
        dislikes: 69,
        inventory: 111,
        numberSold: 932,
        reviews: [
          { review_guid: '38a55cd4-e435-4cd5-25c5-4470966abd3f' },
          { review_guid: '242f0508-09de-40df-f67d-1de9bb1dd648' }
        ]
      },

      {
        guid: '7699d968-ed6d-4b8b-8ab2-1adadee43182',
        title: 'Never: A Novel',
        author: 'Ken Follett',
        image: 'https://m.media-amazon.com/images/I/91OlkNx-VpL._AC_UL320_.jpg',
        price: 20,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 816,
        summary: "The new must-read epic from master storyteller Ken Follett: more than a thriller, it's an action-packed, globe-spanning drama set in the present day.",
        isbn: '593300033',
        likes: 164,
        dislikes: 69,
        inventory: 111,
        numberSold: 532,
        reviews: [
          { review_guid: 'ee27a479-a2d0-4b7c-08df-d13836b2a201' },
          { review_guid: 'c063ed8f-a7f6-47ad-c8ea-c705bf8f0f36' }
        ]
      },

      {
        guid: 'fac3f427-5c40-4dd2-2a0a-66c009080e28',
        title: 'No One Crosses the Wolf: A Memoir',
        author: 'Lisa Nikolidakis',
        image: 'https://m.media-amazon.com/images/I/919AEm1QgTL._AC_UL320_.jpg',
        price: 24.95,
        genres: [
          { genre_guid: 'fb1adcfd-652c-41bc-10a2-b83d57f0150e' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 283,
        summary: "Growing up, Lisa Nikolidakis tried to make sense of her childhood, which was scarred by abuse, violence, and psychological terrors so extreme that her relationship with her father was cleaved beyond repair. Having finally been able to leave that relationship behind, surviving meant forgetting. For years, “I'm fine” was a lie Nikolidakis repeated. Then, on her twenty-seventh birthday, Nikolidakis's father murdered his girlfriend and her daughter, and turned the gun on himself. Nikolidakis's world cracked open, followed by conflicted emotions: shock, grief, mourning for the innocent victims, and relief that she had escaped the same fate. In the tragedy's wake, questions lingered: Who was this man, and why had he inflicted such horrors on her and his last victims? For answers, Nikolidakis embarked on a quest to Greece to find her father's estranged family and a reckoning with the past she never expected. In her gripping and moving memoir, Nikolidakis explores not only the making of a killer but her own liberation from the demons that haunted her and her profound self-restoration in the face of unimaginable crimes.",
        isbn: '1542037700',
        likes: 111,
        dislikes: 65,
        inventory: 25,
        numberSold: 654,
        reviews: [
          { review_guid: 'bd1060f2-42ee-4a0b-13d2-1d057ba20838' },
          { review_guid: '20c5a980-6dba-4b7c-b594-6b6bd83f8a6c' }
        ]
      },

      {
        guid: '5e741238-a756-42c3-dc3c-eb57c604ede0',
        title: 'No, David!',
        author: 'David Shannon',
        image: 'https://m.media-amazon.com/images/I/71rbhDit+WL._AC_UY218_.jpg',
        price: 6.99,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 32,
        summary: 'When David Shannon was five years old, he wrote and illustrated his first book. On every page were these words: NO, DAVID! . . . and a picture of David doing things he was not supposed to do. Now David is all grown up. But some things never change. . . . ',
        isbn: '1338269046',
        likes: 111,
        dislikes: 65,
        inventory: 25,
        numberSold: 654,
        reviews: [
          { review_guid: '5e6bb6c6-dacf-4947-05ce-08841daeffe4' },
          { review_guid: '24cca717-556a-46e9-2fee-02a4b8ae6a17' },
          { review_guid: '3fd0bc3a-91a3-4064-e570-fdfd4bf4ebb4' }
        ]
      },

      {
        guid: '036fd1ce-785d-4e56-9bd1-14d9eaf5cc76',
        title: 'Not My First Rodeo: Lessons from the Heartland',
        author: 'Kristi Noem',
        image: 'https://m.media-amazon.com/images/I/81pYnwqHtHL._AC_UL320_.jpg',
        price: 30,
        genres: [ { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' } ],
        pageCount: 289,
        summary: 'South Dakota governor Kristi Noem tells her rough and tumble story of growing up on a ranch, and how a blessed life of true grit taught her how to lead.',
        isbn: '1538707055',
        likes: 111,
        dislikes: 65,
        inventory: 25,
        numberSold: 654,
        reviews: [
          { review_guid: 'bcc1638a-7e5b-4438-cef2-bb96fd3e61a4' },
          { review_guid: 'cb9a6970-62d9-41a4-50c7-a3070beebd86' }
        ]
      },

      {
        guid: '5aa44503-70b2-40aa-8977-f17efe78f83b',
        title: 'Of Mice and Men',
        author: 'John Steinbeck',
        image: 'https://m.media-amazon.com/images/I/71H0EUnl5QL._AC_UL320_.jpg',
        price: 12,
        genres: [ { genre_guid: '35cd6638-f8c4-4923-03e3-e4369a6b6375' } ],
        pageCount: 105,
        summary: 'A controversial tale of friendship and tragedy during the Great Depression',
        isbn: '140186425',
        likes: 111,
        dislikes: 65,
        inventory: 25,
        numberSold: 654,
        reviews: [
          { review_guid: '044f943c-4313-4f86-d23a-0fdc3a508395' },
          { review_guid: '49dec475-1383-4376-e76e-d4f80137a262' },
          { review_guid: '24c99fbd-a678-4c08-eaba-caebbe655cf7' },
          { review_guid: 'c3d19212-567f-4726-65a0-4721c3944a3a' }
        ]
      },

      {
        guid: 'c1d8c770-1057-4eca-b1e5-67351d386b78',
        title: 'Path Lit by Lightning: The Life of Jim Thorpe',
        author: 'David Maraniss',
        image: 'https://m.media-amazon.com/images/I/71Vso2SbwjL._AC_UL320_.jpg',
        price: 32.5,
        genres: [
          { genre_guid: 'fb1adcfd-652c-41bc-10a2-b83d57f0150e' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 672,
        summary: "Jim Thorpe rose to world fame as a mythic talent who excelled at every sport. He won gold medals in the decathlon and pentathlon at the 1912 Stockholm Olympics, was an All-American football player at the Carlisle Indian School, the star of the first class of the Pro Football Hall of Fame, and played major league baseball for John McGraw's New York Giants. Even in a golden age of sports celebrities, he was one of a kind. But despite his colossal skills, Thorpe's life was a struggle against the odds. As a member of the Sac and Fox Nation, he encountered duplicitous authorities who turned away from him when their reputations were at risk. At Carlisle, he dealt with the racist assimilationist philosophy “Kill the Indian, Save the Man.” His gold medals were unfairly rescinded because he had played minor league baseball. His later life was troubled by alcohol, broken marriages, and financial distress. He roamed from state to state and took bit parts in Hollywood, but even the film of his own life failed to improve his fortunes. But for all his travails, Thorpe did not succumb. The man survived, complications and all, and so did the myth.",
        isbn: '1476748411',
        likes: 10,
        dislikes: 2,
        inventory: 15,
        numberSold: 56,
        reviews: [
          { review_guid: '94100654-0e79-4287-3ee5-be6085bd0534' },
          { review_guid: '911f601f-7744-4a83-75c7-dd709a66ab98' }
        ]
      },

      {
        guid: 'cf947e40-90db-4140-03e6-e7f7e60004aa',
        title: 'Pillow Thoughts',
        author: 'Courtney Peppernell',
        image: 'https://m.media-amazon.com/images/I/71bUf4gWhnL._AC_UL320_.jpg',
        price: 16.99,
        genres: [ { genre_guid: '59bf9695-6237-4e4e-45ac-6035d4107cc9' } ],
        pageCount: 272,
        summary: 'Pillow Thoughts is a collection of poetry and prose about heartbreak, love, and raw emotions. It is divided into sections to read when you feel you need them most.',
        isbn: '1449489753',
        likes: 10,
        dislikes: 2,
        inventory: 15,
        numberSold: 56,
        reviews: [
          { review_guid: 'a946d8dc-7edd-4bab-e7cc-8d1a6d8c8ca5' },
          { review_guid: '80d2810d-2956-4520-d021-3c6926af4917' },
          { review_guid: '41053cd2-df76-4c83-5be6-531e301aaba6' }
        ]
      },

      {
        guid: 'aed7f38b-0ccf-464d-725e-19d99809d85c',
        title: 'Priest: A Love Story',
        author: 'Sierra Simone',
        image: 'https://m.media-amazon.com/images/I/81Fod5beMiL._AC_UL320_.jpg',
        price: 17.99,
        genres: [ { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' } ],
        pageCount: 354,
        summary: "There are many rules a priest can't break. A priest cannot marry. A priest cannot abandon his flock. A priest cannot forsake his God. I've always been good at following rules.  Until she came. Then I learned new rules. My name is Tyler Anselm Bell. I'm twenty-nine years old. Six months ago, I broke my vow of celibacy on the altar of my own church, and God help me, I would do it again. I am a priest and this is my confession.",
        isbn: '1949364240',
        likes: 10,
        dislikes: 2,
        inventory: 15,
        numberSold: 56,
        reviews: [
          { review_guid: '8370254a-4e3c-4980-6a59-36664b62b245' },
          { review_guid: '746d397b-f480-4c5f-9c8f-d6bc5b8bca2b' },
          { review_guid: '7f9dcac1-8402-4fc1-555d-d1a3d8496636' }
        ]
      },

      {
        guid: 'bfe60291-b929-4437-9659-39e6b18b2fd8',
        title: 'Principles for Dealing with the Changing World Order: Why Nations Succeed and Fail',
        author: 'Ray Dalio',
        image: 'https://m.media-amazon.com/images/I/61R4llNQbkL._AC_UL320_.jpg',
        price: 35,
        genres: [
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' },
          { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' }
        ],
        pageCount: 576,
        summary: "From legendary investor Ray Dalio, author of the #1 New York Times bestseller Principles, who has spent half a century studying global economies and markets, Principles for Dealing with the Changing World Order examines history's most turbulent economic and political periods to reveal why the times ahead will likely be radically different from those we've experienced in our lifetimes—and to offer practical advice on how to navigate them well.",
        isbn: '1982160276',
        likes: 10,
        dislikes: 2,
        inventory: 15,
        numberSold: 56,
        reviews: [ { review_guid: 'e5ce0a1c-0f45-4982-2939-945f2f72c53b' } ]
      },

      {
        guid: '859778b9-fb9d-4875-8baf-1f1b5018e2bd',
        title: 'Pulphead: Essays',
        author: 'John Jeremiah Sullivan',
        image: 'https://m.media-amazon.com/images/I/71QjD3O+nXL._AC_UL320_.jpg',
        price: 18,
        genres: [ { genre_guid: '536d99f1-7d99-4bb0-1495-a23a59ee4fbc' } ],
        pageCount: 369,
        summary: "In Pulphead, John Jeremiah Sullivan takes us on an exhilarating tour of our popular, unpopular, and at times completely forgotten culture. Simultaneously channeling the gonzo energy of Hunter S. Thompson and the wit and insight of Joan Didion, Sullivan shows us—with a laidback, erudite Southern charm that's all his own—how we really (no, really) live now.",
        isbn: '374532907',
        likes: 20,
        dislikes: 22,
        inventory: 25,
        numberSold: 96,
        reviews: [
          { review_guid: '21fd720f-3fc3-49b8-e3af-4514510c3236' },
          { review_guid: 'f6713ee9-1e58-464f-2eb2-b20999a5d22a' }
        ]
      },

      {
        guid: 'e3254bb7-c1b4-4339-9827-4f44d856c3d6',
        title: 'Quarterlife: The Search for Self in Early Adulthood',
        author: 'Satya Doyle Byock',
        image: 'https://m.media-amazon.com/images/I/61u6VQtbckL._AC_UL320_.jpg',
        price: 27,
        genres: [ { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' } ],
        pageCount: 240,
        summary: 'An innovative psychotherapist tackles the overlooked stage of Quarterlife—the years between adolescence and midlife—and provides a “fascinating” guide “on how to navigate and thrive—rather than just survive—these odd years”',
        isbn: '525511660',
        likes: 20,
        dislikes: 22,
        inventory: 25,
        numberSold: 96,
        reviews: [ { review_guid: '96fb772b-bd74-4489-02ea-0517b70d66ab' } ]
      },

      {
        guid: '04552e13-0414-42e7-1936-41ad791bc990',
        title: 'Reminders of Him: A Novel',
        author: 'Colleen Hoover',
        image: 'https://m.media-amazon.com/images/I/617uZq23IPL._AC_UL320_.jpg',
        price: 15.95,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 335,
        summary: "After serving five years in prison for a tragic mistake, Kenna Rowan returns to the town where it all went wrong, hoping to reunite with her four-year-old daughter. But the bridges Kenna burned are proving impossible to rebuild. Everyone in her daughter's life is determined to shut Kenna out, no matter how hard she works to prove herself. The only person who hasn't closed the door on her completely is Ledger Ward, a local bar owner and one of the few remaining links to Kenna's daughter. But if anyone were to discover how Ledger is slowly becoming an important part of Kenna's life, both would risk losing the trust of everyone important to them. The two form a connection despite the pressure surrounding them, but as their romance grows, so does the risk. Kenna must find a way to absolve the mistakes of her past in order to build a future out of hope and healing.",
        isbn: '1542025605',
        likes: 20,
        dislikes: 22,
        inventory: 25,
        numberSold: 96,
        reviews: [
          { review_guid: '440c4540-8e31-4743-4509-4038a3590b52' },
          { review_guid: '320850ff-3b5c-4a1d-f757-de5a7512c162' },
          { review_guid: '447e7102-5a7d-4edf-f6f5-50ce13bb0940' }
        ]
      },

      {
        guid: '576ad2d1-ec6e-49c4-75f2-f415bdbc2770',
        title: 'Results: Getting Beyond Politics to Get Important Work Done',
        author: 'Charlie Baker',
        image: 'https://m.media-amazon.com/images/I/71pvSrpLiML._AC_UL320_.jpg',
        price: 30,
        genres: [ { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' } ],
        pageCount: 287,
        summary: "Results is not only about getting things done, but about renewing people's faith in public service. Empty promises feed disengagement when instead we need confidence in our government and the services it delivers. When a mob attacked the US Capitol Building on January 6, 2021, the very core of our democracy and our sense of government were threatened. Demonstrating that government can work—the goal of this book—is vital to ensuring the future of our democracy.",
        isbn: '1647821800',
        likes: 20,
        dislikes: 22,
        inventory: 25,
        numberSold: 96,
        reviews: [
          { review_guid: '2829c6a5-97ee-4fb8-9508-6bf8e94f59f4' },
          { review_guid: '75fa609c-c2c4-4167-05de-cbc6ba637e2f' }
        ]
      },

      {
        guid: '3ac58f16-26af-4bae-c78f-7f05e121e315',
        title: 'River of the Gods: Genius, Courage, and Betrayal in the Search for the Source of the Nile',
        author: 'Candice Millard',
        image: 'https://m.media-amazon.com/images/I/81wo+l35q0L._AC_UL320_.jpg',
        price: 32.5,
        genres: [
          { genre_guid: 'fb1adcfd-652c-41bc-10a2-b83d57f0150e' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 560,
        summary: 'In RIVER OF THE GODS Candice Millard has written another peerless story of courage and adventure, set against the backdrop of the race to exploit Africa by the colonial powers.',
        isbn: '593607813',
        likes: 20,
        dislikes: 22,
        inventory: 25,
        numberSold: 96,
        reviews: [
          { review_guid: '22f398b2-fc2d-466d-e79d-1c84bb655dd8' },
          { review_guid: 'e7d446fd-089e-4f9f-e320-74baadd2a81e' },
          { review_guid: '953575d6-9dd1-4bbf-7203-ec342fa739ce' }
        ]
      },

      {
        guid: '1a86a0a2-fc61-4aa6-3f65-2ed1a2ed16f0',
        title: 'Saving Proxima',
        author: 'Travis S. Taylor',
        image: 'https://m.media-amazon.com/images/I/81o0ZLxa4cL._AC_UL320_.jpg',
        price: 8.99,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 336,
        summary: 'A message from space leads to a desperate race against time and across space to our nearest stellar neighbor in a new hard science fiction thriller from Travis S. Taylor and Les Johnson.',
        isbn: '1982125500',
        likes: 220,
        dislikes: 24,
        inventory: 35,
        numberSold: 432,
        reviews: [
          { review_guid: 'ac5223d8-ae66-484c-212e-d20bf252997f' },
          { review_guid: '400cbc3c-a3d4-433e-8637-4da21195fc2a' }
        ]
      },

      {
        guid: '6f75fd1f-d3cf-46d3-d3c0-42ad36d3587a',
        title: 'Self Love Poetry: For Thinkers & Feelers',
        author: 'Melody Godfred',
        image: 'https://m.media-amazon.com/images/I/71RD+pEvvlL._AC_UL320_.jpg',
        price: 14.99,
        genres: [ { genre_guid: '59bf9695-6237-4e4e-45ac-6035d4107cc9' } ],
        pageCount: 208,
        summary: `In Self Love Poetry, Godfred explores concepts like authenticity, surrender, resilience, gratitude, believing in yourself, and of course, love, through 100 pairs of poems, each dedicated to a central theme. On the left side of the book are "thinker" poems that light up the analytical, more literal, left side of the brain, and on the right side are companion "feeler" poems that speak to the creative, more emotional right side of the brain. Combined, the poems electrify the mind, body and soul through a completely unique poetry experience that inspires each of us to embrace all parts of ourselves. This empowering poetry book will not only engage you to think and feel, but will make you feel seen, show you how to love yourself, and encourage you to seek out the hope and beauty in the world … and in yourself. It's the perfect gift for yourself or someone you love, especially after a most difficult year.`,
        isbn: '1524871222',
        likes: 220,
        dislikes: 24,
        inventory: 35,
        numberSold: 432,
        reviews: [
          { review_guid: 'e0eced34-7e28-43c0-4862-9e765acc3d62' },
          { review_guid: 'fc1145a8-3f16-41f9-6214-68848c3898dc' },
          { review_guid: '7e190f12-b903-4e18-3b79-620f01c4bd86' }
        ]
      },

      {
        guid: 'fb524c9a-ae5e-41e5-a58a-e33c9a544b0c',
        title: 'Self-Help (Vintage Contemporaries)',
        author: 'Lorrie Moore',
        image: 'https://m.media-amazon.com/images/I/51x+vMg-YnL._AC_UL320_.jpg',
        price: 15.95,
        genres: [ { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' } ],
        pageCount: 180,
        summary: 'In these tales of loss and pleasure, lovers and family, a woman learns to conduct an affair, a child of divorce dances with her mother, and a woman with a terminal illness contemplates her exit. Filled with the sharp humor, emotional acuity, and joyful language Moore has become famous for, these nine glittering talesmarked the introduction of an extravagantly gifted writer.',
        isbn: '571322719',
        likes: 220,
        dislikes: 24,
        inventory: 35,
        numberSold: 432,
        reviews: [
          { review_guid: '2871d71d-12f3-4ab2-2d3a-648e3b519aea' },
          { review_guid: 'b760acc6-9e30-4787-6656-9c1922e1ac21' }
        ]
      },

      {
        guid: 'c417b08a-e109-4cc0-2ceb-a8ed7eae8c0d',
        title: 'Self-Love Workbook for Women: Release Self-Doubt, Build Self-Compassion, and Embrace Who You Are',
        author: 'Megan Logan MSW LCSW',
        image: 'https://m.media-amazon.com/images/I/81k17unItGL._AC_UL320_.jpg',
        price: 15.99,
        genres: [ { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' } ],
        pageCount: 174,
        summary: "Discover how much there is to love about yourself using this practical workbook for women of all ages. You'll embark on your journey of self-discovery by learning what self-love is and then immersing yourself in exercises to help you build your self-esteem and improve your relationships.",
        isbn: '1647397294',
        likes: 222,
        dislikes: 24,
        inventory: 35,
        numberSold: 432,
        reviews: [ { review_guid: '91b90e79-b4c4-4dc3-488f-8084feefa93a' } ]
      },

      {
        guid: '7874339f-15b4-46bc-f5e7-620ddf2aa35e',
        title: 'Short Stories in Spanish for Beginners',
        author: 'Olly Richards',
        image: 'https://m.media-amazon.com/images/I/71t4wKu-WeL._AC_UL320_.jpg',
        price: 14.99,
        genres: [ { genre_guid: '38183d52-f5bb-4d41-099d-e47df1566abd' } ],
        pageCount: 238,
        summary: 'Short Stories in Spanish for Beginners has been written especially for students from beginner to intermediate level, designed to give a sense of achievement, and most importantly - enjoyment! Mapped to A2-B1 on the Common European Framework of Reference, these eight captivating stories will both entertain you, and give you a feeling of progress when reading.',
        isbn: '9781473683259',
        likes: 104,
        dislikes: 18,
        inventory: 35,
        numberSold: 532,
        reviews: [
          { review_guid: '4eba57e3-42ab-45f4-7c1b-8b3ff6e7649a' },
          { review_guid: '77d83254-14fd-48a7-3e0f-55fbb6c7f0bf' }
        ]
      },

      {
        guid: '8276957f-d104-418d-6be1-2baf1a5bb04f',
        title: 'Slouching Towards Bethlehem: Essays',
        author: 'Joan Didion',
        image: 'https://m.media-amazon.com/images/I/71vgJlodw8L._AC_UL320_.jpg',
        price: 17,
        genres: [ { genre_guid: '536d99f1-7d99-4bb0-1495-a23a59ee4fbc' } ],
        pageCount: 256,
        summary: "More than perhaps any other book, this collection by one of the most distinctive prose stylists of our era captures the unique time and place of Joan Didion's focus, exploring subjects such as John Wayne and Howard Hughes, growing up in California and the nature of good and evil in a Death Valley motel room, and, especially, the essence of San Francisco's Haight-Ashbury, the heart of the counterculture. As Joyce Carol Oates remarked: “[Didion] has been an articulate witness to the most stubborn and intractable truths of our time, a memorable voice, partly eulogistic, partly despairing; always in control.”",
        isbn: '374531382',
        likes: 104,
        dislikes: 18,
        inventory: 35,
        numberSold: 532,
        reviews: [
          { review_guid: '33903321-c8b4-431c-f9fd-1d61a11b836b' },
          { review_guid: '3d6b6485-c3b2-4dc8-f592-0ffeba59ca82' }
        ]
      },

      {
        guid: '18b4a7e9-d93b-4be3-5723-10966c2000c1',
        title: 'Snow Family',
        author: 'Daniel Kirk',
        image: 'https://m.media-amazon.com/images/I/51TvZG9y0qL._AC_UY218_.jpg',
        price: 14.55,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 32,
        summary: "Discovering a merry band of snow children scurring past his parents' barn, a little boy joins them in their adventures through a wintry land of mischief, lost scarves, and carrot noses, in a story told through gentle verse and detailed imagery.",
        isbn: '786803045',
        likes: 104,
        dislikes: 18,
        inventory: 35,
        numberSold: 532,
        reviews: [
          { review_guid: '6ecbf33b-cfe0-4785-5a63-9b0d4b93b50b' },
          { review_guid: '5acf755d-709f-4ff6-7921-0eacb044402d' },
          { review_guid: 'da9d8210-0bc4-49b4-31bb-8dc6d99f9128' }
        ]
      },

      {
        guid: '4a54e396-b91a-4c48-3a9f-f3fa337756fe',
        title: 'Sparring Partners: Novellas',
        author: 'John Grisham',
        image: 'https://m.media-amazon.com/images/I/71tMBXuKM7L._AC_UL320_.jpg',
        price: 28.95,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 416,
        summary: "John Grisham is the acknowledged master of the legal thriller. In his first collection of novellas, law is a common thread, but America's favorite storyteller has several surprises in store.",
        isbn: '593632362',
        likes: 104,
        dislikes: 18,
        inventory: 35,
        numberSold: 532,
        reviews: [
          { review_guid: 'c94db205-b73f-491b-c307-31b84cb08df1' },
          { review_guid: '98ab8c25-bef9-4dd4-575c-78a964e8319d' }
        ]
      },

      {
        guid: '7684c23a-091c-4dc5-e3d5-bb6306a6e243',
        title: 'Stella Keeps the Sun Up',
        author: 'Clothilde Ewing',
        image: 'https://m.media-amazon.com/images/I/719UOwB7ysL._AC_UL320_.jpg',
        price: 17.99,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 48,
        summary: 'In this incandescently fun, hijinks-filled picture book, a young girl schemes to keep the sun up in the sky so she never has to go to bed.',
        isbn: '1534487859',
        likes: 104,
        dislikes: 18,
        inventory: 35,
        numberSold: 532,
        reviews: [
          { review_guid: '91342251-93bd-4014-d104-b06737d01593' },
          { review_guid: '4acf57b1-8c1a-4792-51db-c2a2af829cde' }
        ]
      },

      {
        guid: '0c21fd38-1826-4017-e274-92d3e5f3272b',
        title: 'Tea Time Self-Talk: A Little Afternoon Bliss for Living Your Magical Life',
        author: 'Kristen Helmstetter',
        image: 'https://m.media-amazon.com/images/I/61pGjkJNslL._AC_UL320_.jpg',
        price: 16.99,
        genres: [ { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' } ],
        pageCount: 202,
        summary: 'Tea Time Self-Talk is the perfect 5-minute, afternoon break companion, designed to give you a blissful moment to yourself for reflection and motivation. To help energize your afternoon and your life. This wonderful book will help you live your most delightful life as you discover happiness, inspiration, and motivation with your afternoon cup of tea.',
        isbn: '1958625019',
        likes: 24,
        dislikes: 18,
        inventory: 15,
        numberSold: 89,
        reviews: [ { review_guid: 'fc158387-960b-4a22-8e4a-aafc816abfa7' } ]
      },

      {
        guid: '120d25e0-24ab-4933-261b-211276808c58',
        title: "Thank You for Your Servitude: Donald Trump's Washington and the Price of Submission",
        author: 'Mark Leibovich',
        image: 'https://m.media-amazon.com/images/I/91fdot5+xOL._AC_UL320_.jpg',
        price: 29,
        genres: [ { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' } ],
        pageCount: 351,
        summary: "Thank You for Your Servitude is Mark Leibovich's unflinching account of the moral rout of a major American political party, tracking the transformation of Rubio, Cruz, Graham, and their ilk into the administration's chief enablers, and the swamp's lesser lights into frantic chasers of the grift. What would these politicos do to preserve their place in the sun, or at least the orbit of the spray tan? What would they do to preserve their “relevance”? Almost anything, it turns out. Trump's savage bullying of everyone in his circle, along with his singular command of his political base, created a dangerous culture of submission in the Republican Party. Meanwhile, many of the most alpha of the lapdogs happily conceded to Mark Leibovich that they were “in on the joke.” As Lindsey Graham told the author, his supporters in South Carolina generally don't read The New York Times, and they won't read this book, either. All that cynicism, shading into nihilism, led to a country truly unhinged from reality, and to the events of January 6, 2021. It's a vista that makes the Washington of This Town seem like a comedy of manners in comparison.",
        isbn: '593296311',
        likes: 24,
        dislikes: 18,
        inventory: 15,
        numberSold: 89,
        reviews: [
          { review_guid: '5bd0309b-622e-40a6-dba6-b33aa3b38cab' },
          { review_guid: 'eea0c4cb-34b6-4047-8920-f2f2a8556a2d' },
          { review_guid: '112b0ad4-8482-4d81-8119-ff8b420df5a3' }
        ]
      },

      {
        guid: '7a0f9c7b-b640-4b5a-9908-105a8d7a1a40',
        title: 'The 48 Laws of Power',
        author: 'Robert Greene',
        image: 'https://m.media-amazon.com/images/I/71aG+xDKSYL._AC_UL320_.jpg',
        price: 26,
        genres: [
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' },
          { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' }
        ],
        pageCount: 480,
        summary: 'In the book that People magazine proclaimed “beguiling” and “fascinating,” Robert Greene and Joost Elffers have distilled three thousand years of the history of power into 48 essential laws by drawing from the philosophies of Machiavelli, Sun Tzu, and Carl Von Clausewitz and also from the lives of figures ranging from Henry Kissinger to P.T. Barnum. Some laws teach the need for prudence (“Law 1: Never Outshine the Master”), others teach the value of confidence (“Law 28: Enter Action with Boldness”), and many recommend absolute self-preservation (“Law 15: Crush Your Enemy Totally”). Every law, though, has one thing in common: an interest in total domination. In a bold and arresting two-color package, The 48 Laws of Power is ideal whether your aim is conquest, self-defense, or simply to understand the rules of the game.',
        isbn: '670881465',
        likes: 24,
        dislikes: 18,
        inventory: 15,
        numberSold: 89,
        reviews: [
          { review_guid: 'fec6872d-fecf-4d73-f119-d5031ee3edbd' },
          { review_guid: '13247a8b-a7a9-4bb9-e75c-8160324e303a' },
          { review_guid: 'b4b6a3ef-da41-419e-ab4d-fc27de157295' }
        ]
      },

      {
        guid: '196cf8ee-c496-4edd-321f-ed629424b088',
        title: 'The Alchemist, 25th Anniversary: A Fable About Following Your Dream',
        author: 'Paulo Coelho',
        image: 'https://m.media-amazon.com/images/I/51kcX5PpaZL._AC_UL320_.jpg',
        price: 17.99,
        genres: [ { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' } ],
        pageCount: 208,
        summary: "Paulo Coelho's masterpiece tells the mystical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure. His quest will lead him to riches far different—and far more satisfying—than he ever imagined. Santiago's journey teaches us about the essential wisdom of listening to our hearts, of recognizing opportunity and learning to read the omens strewn along life's path, and, most importantly, to follow our dreams.",
        isbn: '62315005',
        likes: 24,
        dislikes: 18,
        inventory: 15,
        numberSold: 89,
        reviews: [
          { review_guid: '657915fd-2764-407b-a1e9-ce04f414cdef' },
          { review_guid: '307e9d22-ddf9-4823-092b-6c2011b0b3d2' },
          { review_guid: '1d991f7e-528c-4dc5-e97f-aed5200f4f64' }
        ]
      },

      {
        guid: 'dbdca9c4-4668-473e-604b-74ae224d5fd9',
        title: 'The Art of the Personal Essay: An Anthology from the Classical Era to the Present',
        author: 'Phillip Lopate',
        image: 'https://m.media-amazon.com/images/I/91BxBkZXMML._AC_UL320_.jpg',
        price: 23.00,
        genres: [ { genre_guid: '536d99f1-7d99-4bb0-1495-a23a59ee4fbc' } ],
        pageCount: 777,
        summary: 'For more than four hundred years, the personal  essay has been one of the richest and most vibrant  of all literary forms. Distinguished from the  detached formal essay by its friendly, conversational  tone, its loose structure, and its drive toward  candor and self-disclosure, the personal essay  seizes on the minutiae of daily life-vanities,  fashions, foibles, oddballs, seasonal rituals, love and  disappointment, the pleasures of solitude,  reading, taking a walk -- to offer insight into the  human condition and the great social and political  issues of the day. The Art of the Personal Essay is  the first anthology to celebrate this fertile  genre. By presenting more than seventy-five personal  essays, including influential forerunners from  ancient Greece, Rome, and the Far East,  masterpieces from the dawn of the personal essay in the  sixteenth century, and a wealth of the finest  personal essays from the last four centuries, editor  Phillip Lopate, himself an acclaimed essayist,  displays the tradition of the personal essay in all  its historical grandeur, depth, and  diversity.',
        isbn: '385423390',
        likes: 24,
        dislikes: 18,
        inventory: 15,
        numberSold: 89,
        reviews: [ { review_guid: 'f721c9bf-666a-4b1d-e5aa-f6f0afdabcf0' } ]
      },

      {
        guid: '72e297a3-7b43-4d2d-2eb3-305e3d82f4f2',
        title: "The Berenstain Bears' Big Book of Science and Nature",
        author: 'Stan Berenstain',
        image: 'https://m.media-amazon.com/images/I/913N8OA8BVL._AC_UL320_.jpg',
        price: 14.99,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 192,
        summary: 'Discover fun facts about the natural world in the company of the Berenstain Bears and their friend, Professor Actual Factual, the foremost bear scientist of his time! This treasury of knowledge includes a complete almanac of the seasons and intriguing information about animals, plants, insects, and fish — plus fun for the whole family with simple science projects.',
        isbn: '486498344',
        likes: 25,
        dislikes: 18,
        inventory: 15,
        numberSold: 97,
        reviews: [
          { review_guid: 'edce687d-e922-4f50-4122-0036192ef5b7' },
          { review_guid: 'e2d192fa-3803-4eae-968d-b60ea6284413' }
        ]
      },

      {
        guid: '8e8744f3-28f5-46c7-3d24-ad8d9b226c5a',
        title: 'The Best American Short Stories of the Century',
        author: 'John Updike',
        image: 'https://m.media-amazon.com/images/I/71jSOn7KzTL._AC_UL320_.jpg',
        price: 22.99,
        genres: [ { genre_guid: '38183d52-f5bb-4d41-099d-e47df1566abd' } ],
        pageCount: 864,
        summary: "Since the series' inception in 1915, the annual volumes of The Best American Short Stories have launched literary careers, showcased the most compelling stories of each year, and confirmed for all time the significance of the short story in our national literature. Now THE BEST AMERICAN SHORT STORIES OF THE CENTURY brings together the best of the best - fifty-five extraordinary stories that represent a century's worth of unsurpassed accomplishments in this quintessentially American literary genre. Here are the stories that have endured the test of time: masterworks by such writers as Ernest Hemingway, William Faulkner, Willa Cather, F. Scott Fitzgerald, William Saroyan, Flannery O'Connor, John Cheever, Eudora Welty, Philip Roth, Joyce Carol Oates, Raymond Carver, Cynthia Ozick, and scores of others. These are the writers who have shaped and defined the landscape of the American short story, who have unflinchingly explored all aspects of the human condition, and whose works will continue to speak to us as we enter the next century. Their artistry is represented splendidly in these pages. THE BEST AMERICAN SHORT STORIES series has also always been known for making literary discoveries, and discovery proved to be an essential part of selecting the stories for this volume too. Collections from years past yielded a rich harvest of surprises, stories that may have been forgotten but still retain their relevance and luster. The result is a volume that not only gathers some of the most significant stories of our century between two covers but resurrects a handful of lost literary gems as well. Of all the great writers whose work has appeared in the series, only John Updike's contributions have spanned five consecutive decades, from his first appearance, in 1959. Updike worked with coeditor Katrina Kenison to choose stories from each decade that meet his own high standards of literary quality.",
        isbn: '395843677',
        likes: 25,
        dislikes: 18,
        inventory: 15,
        numberSold: 97,
        reviews: [
          { review_guid: '0f9089ee-623e-4384-fa76-8968bad1e354' },
          { review_guid: 'ed657f36-5b87-4446-3951-a87a03ff7007' }
        ]
      },

      {
        guid: '02ccb5d2-0218-4ae3-f670-245a1a046cd9',
        title: 'The Best Short Stories of Fyodor Dostoevsky',
        author: 'Fyodor Dostoevsky',
        image: 'https://m.media-amazon.com/images/I/81LMQtVW2CL._AC_UL320_.jpg',
        price: 17,
        genres: [ { genre_guid: '38183d52-f5bb-4d41-099d-e47df1566abd' } ],
        pageCount: 320,
        summary: "This collection, unique to the Modern Library, gathers seven of Dostoevsky's key works and shows him to be equally adept at the short story as with the novel. Exploring many of the same themes as in his longer works, these small masterpieces move from the tender and romantic White Nights, an archetypal nineteenth-century morality tale of pathos and loss, to the famous Notes from the Underground, a story of guilt, ineffectiveness, and uncompromising cynicism, and the first major work of existential literature. Among Dostoevsky's prototypical characters is Yemelyan in The Honest Thief, whose tragedy turns on an inability to resist crime. Presented in chronological order, in David Magarshack's celebrated translation, this is the definitive edition of Dostoevsky's best stories.",
        isbn: '375756884',
        likes: 25,
        dislikes: 18,
        inventory: 15,
        numberSold: 97,
        reviews: [
          { review_guid: '50c92b5a-e560-4185-3193-3f718bbed047' },
          { review_guid: '213727d6-9b5a-4ba7-f103-fca4d6d4e863' },
          { review_guid: '47c6c983-758c-41fe-87fe-26dc2ac26d01' }
        ]
      },

      {
        guid: '38a15a4c-226d-4ea3-c9da-f2377adb9bbe',
        title: 'The Big Book of Science Fiction',
        author: 'Jeff VanderMeer',
        image: 'https://m.media-amazon.com/images/I/A1Tqvb3uoLL._AC_UL320_.jpg',
        price: 26,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 1218,
        summary: "What if life was neverending? What if you could change your body to adapt to an alien ecology? What if the pope were a robot? Spanning galaxies and millennia, this must-have anthology showcases classic contributions from H. G. Wells, Arthur C. Clarke, Octavia E. Butler, and Kurt Vonnegut, alongside a century of the eccentrics, rebels, and visionaries who have inspired generations of readers. Within its pages, you'll find beloved worlds of space opera, hard SF, cyberpunk, the New Wave, and more. Learn about the secret history of science fiction, from titans of literature who also wrote SF to less well-known authors from more than twenty-five countries, some never before translated into English. In The Big Book of Science Fiction, literary power couple Ann and Jeff VanderMeer transport readers from Mars to Mechanopolis, planet Earth to parts unknown. Immerse yourself in the genre that predicted electric cars, space tourism, and smartphones. Sit back, buckle up, and dial in the coordinates, as this stellar anthology has got worlds within worlds.",
        isbn: '9781101910092',
        likes: 25,
        dislikes: 18,
        inventory: 15,
        numberSold: 97,
        reviews: [ { review_guid: '7c1f09fa-bdb6-4833-2bf3-e71b008ee0f6' } ]
      },

      {
        guid: '0555e63a-8b8d-4a3b-83a4-e42cc3e18068',
        title: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma',
        author: 'Bessel van der Kolk M.D.',
        image: 'https://m.media-amazon.com/images/I/61NdJMwAThS._AC_UL320_.jpg',
        price: 19,
        genres: [ { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' } ],
        pageCount: 464,
        summary: 'A pioneering researcher transforms our understanding of trauma and offers a bold new paradigm for healing in this New York Times bestseller',
        isbn: '143127748',
        likes: 25,
        dislikes: 18,
        inventory: 15,
        numberSold: 97,
        reviews: [
          { review_guid: 'e146867a-827c-4aaa-ee35-ee2770024bdd' },
          { review_guid: '0f8744cd-94db-4e8b-89a4-8dcffaabfc32' }
        ]
      },

      {
        guid: 'fd62ddc8-f069-4f32-c402-4f68a6f49f6a',
        title: 'The Complete Short Stories of Ernest Hemingway: The Finca Vigia Edition',
        author: 'Ernest Hemingway',
        image: 'https://m.media-amazon.com/images/I/71AJSnhMN8S._AC_UL320_.jpg',
        price: 22,
        genres: [ { genre_guid: '38183d52-f5bb-4d41-099d-e47df1566abd' } ],
        pageCount: 650,
        summary: `In this definitive collection of the Nobel Prize-winning author's short stories, readers will delight in Hemingway's most beloved classics such as "The Snows of Kilimanjaro," "Hills Like White Elephants," and "A Clean, Well-Lighted Place," and will discover seven new tales published for the first time in this collection, totaling in sixty stories. This collection demonstrates Hemingway's ability to write beautiful prose for each distinct story, with plots that range from experiences of World War II to beautifully touching moments between a father and son. For Hemingway fans, The Complete Short Stories is an invaluable treasury.`,
        isbn: '9780684843322',
        likes: 125,
        dislikes: 46,
        inventory: 45,
        numberSold: 254,
        reviews: [
          { review_guid: '78fc3e15-d8c7-4643-7c30-4c222c3c5a5f' },
          { review_guid: '64503606-2036-4940-f72e-e41d3641c4ac' },
          { review_guid: 'a64388aa-2734-4aa6-75c3-6a3c0845a3dd' }
        ]
      },

      {
        guid: 'e5d54baa-7ee7-4d02-5bc3-770ce8144976',
        title: 'The Daughter of Doctor Moreau',
        author: 'Silvia Moreno-Garcia',
        image: 'https://m.media-amazon.com/images/I/A15j6IChyAL._AC_UL320_.jpg',
        price: 28,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 320,
        summary: "Carlota Moreau: a young woman, growing up in a distant and luxuriant estate, safe from the conflict and strife of the Yucatán peninsula. The only daughter of either a genius, or a madman. Montgomery Laughton: a melancholic overseer with a tragic past and a propensity for alcohol. An outcast who assists Dr. Moreau with his scientific experiments, which are financed by the Lizaldes, owners of magnificent haciendas and plentiful coffers. The hybrids: the fruits of the Doctor's labor, destined to blindly obey their creator and remain in the shadows. A motley group of part human, part animal monstrosities. All of them living in a perfectly balanced and static world, which is jolted by the abrupt arrival of Eduardo Lizalde, the charming and careless son of Doctor Moreau's patron, who will unwittingly begin a dangerous chain reaction. For Moreau keeps secrets, Carlota has questions, and in the sweltering heat of the jungle, passions may ignite.",
        isbn: '593355334',
        likes: 125,
        dislikes: 46,
        inventory: 45,
        numberSold: 254,
        reviews: [
          { review_guid: '6bba0484-fa7c-47d1-929f-95f89aa1528e' },
          { review_guid: '87cd216a-3906-43f3-6b16-7406ac725b15' }
        ]
      },

      {
        guid: '7de618c7-dd2b-425a-32b1-543aa969001d',
        title: 'The Essay: A Novel',
        author: 'Robin Yocum',
        image: 'https://m.media-amazon.com/images/I/81YRj1xBXbL._AC_UL320_.jpg',
        price: 17.99,
        genres: [ { genre_guid: '536d99f1-7d99-4bb0-1495-a23a59ee4fbc' } ],
        pageCount: 257,
        summary: 'Born to family of troublemakers, an Ohio boy defiantly carves out his own destiny in “a book that young adults and veteran readers alike are going to love”',
        isbn: '1628727179',
        likes: 125,
        dislikes: 46,
        inventory: 45,
        numberSold: 254,
        reviews: [
          { review_guid: '5bbc738a-62c4-41f1-efc4-65f56dd88178' },
          { review_guid: '8dbf1c3f-2ca9-44a6-77a6-000fa500b476' }
        ]
      },

      {
        guid: '0bd69f62-8452-41c0-24ef-167abef0be4c',
        title: 'The Fascinating Science Book for Kids: 500 Amazing Facts!',
        author: 'Kevin Kurtz MA',
        image: 'https://m.media-amazon.com/images/I/911PmVaeCtL._AC_UL320_.jpg',
        price: 15.99,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 212,
        summary: "Do you love dinosaurs and dolphins, mountains and meteors? The Fascinating Science Book for Kids has it all! This fun facts book for kids includes 500 stupendous science facts that offer hours of learning for ages 9 to 12. Alongside full-color pictures on every page, you'll find weird and wonderful facts about topics like prehistoric life, the deep sea, weather, minerals, the human body, the solar system―and even your own backyard!",
        isbn: '1647398703',
        likes: 125,
        dislikes: 46,
        inventory: 45,
        numberSold: 254,
        reviews: [
          { review_guid: '5b8f5e91-dd7e-4313-2b05-59cc7be8adfb' },
          { review_guid: 'fce25700-054a-468e-7744-db8d19a9b5aa' }
        ]
      },

      {
        guid: '63189d72-d572-45f5-d079-6c95a485f3b2',
        title: "The Handmaid's Tale",
        author: 'Margaret Atwood',
        image: 'https://m.media-amazon.com/images/I/91XT4tkFFeL._AC_UY218_.jpg',
        price: 14.5,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 320,
        summary: "The Handmaid's Tale is a novel of such power that the reader will be unable to forget its image and its forecast. Set in the near future, it describes life in what was once the United States and is now called the Republic of Gilead, a monotheocracy that has reacted to social unrest and a sharply declining birthrate by reverting to, and going beyond, the repressive intolerance of the original Puritans. The Handmaid's Tale is funny, unexpected, horrifying, and altogether convincing. It is at once scathing satire, dire warning, and a tour de force.",
        isbn: '358346290',
        likes: 645,
        dislikes: 24,
        inventory: 100,
        numberSold: 888,
        reviews: [
          { review_guid: '57cd4a9c-386f-45c2-f8aa-c8b88a9fe79a' },
          { review_guid: 'b3d1fb3b-ec9f-4751-1b1c-d903786208d0' },
          { review_guid: '5b48c3a3-2ceb-404d-f297-69b91f6c810c' },
          { review_guid: '0f59f7e9-1c21-441d-3c26-db10dd8e8fb3' },
          { review_guid: 'd97b7c9e-a534-484c-db0b-cfd8ca35407b' }
        ]
      },

      {
        guid: 'dae3554e-0a17-4737-510f-4fa1884c9667',
        title: 'The Hound of the Baskervilles',
        author: 'Sir Arthur Conan Doyle',
        image: 'https://m.media-amazon.com/images/I/71HXXGDSraL._AC_UY218_.jpg',
        price: 6.99,
        genres: [
          { genre_guid: '35cd6638-f8c4-4923-03e3-e4369a6b6375' },
          { genre_guid: '9dc4b813-f699-4311-99b2-81b9a7de31b0' }
        ],
        pageCount: 128,
        summary: 'At Baskerville Hall on the grim moors of Devonshire, a legendary curse has apparently claimed one more victim. Sir Charles Baskerville has been found dead. There are no signs of violence, but his face is hideously distorted with terror. Years earlier, a hound-like beast with blazing eyes and dripping jaws was reported to have torn out the throat of Hugo Baskerville. Has the spectral destroyer struck again? More important, is Sir Henry Baskerville, younger heir to the estate, now in danger? Enter Sherlock Holmes, summoned to protect Sir Henry from the fate that has threatened the Baskerville family. As Holmes and Watson begin to investigate, a blood-chilling howl from the fog-shrouded edges of the great Grimpen Mire signals that the legendary hound of the Baskervilles is poised for yet another murderous attack. The Hound of the Baskervilles first appeared as a serial in The Strand Magazine in 1901. By the time of its publication in book form eight months later, this brilliantly plotted, richly atmospheric detective story had already achieved the status of a classic. It has often been called the best detective story ever written. It remains a thrilling tale of suspense, must reading for every lover of detective fiction.',
        isbn: '486282147',
        likes: 643,
        dislikes: 67,
        inventory: 100,
        numberSold: 788,
        reviews: [
          { review_guid: 'b6a9a91b-3b51-452c-d086-feeae6a50093' },
          { review_guid: '9a5e31be-d34d-4a7d-f06e-d5a0b4be2d31' },
          { review_guid: 'db0609e2-9124-43e1-bc4c-cd3eaa7f4b6b' }
        ]
      },

      {
        guid: '69314908-b69a-4421-a4cd-1f5d64a0a9a8',
        title: "The Lady's Mine: A Lighthearted Christian Romance Novel set in the 1870's California Gold Rush",
        author: 'Francine Rivers',
        image: 'https://m.media-amazon.com/images/I/91qNo-d-JKS._AC_UL320_.jpg',
        price: 27.99,
        genres: [ { genre_guid: 'bf6a5200-220e-43a6-e8c3-87df08ebddf4' } ],
        pageCount: 453,
        summary: "1875. When Kathryn Walsh arrives in tiny Calvada, a mining town nestled in the Sierra Nevadas, falling in love is the farthest thing from her mind. Banished from Boston by her wealthy stepfather, she has come to claim an inheritance from the uncle she never knew: a defunct newspaper office on a main street overflowing with brothels and saloons, and a seemingly worthless mine. Moved by the oppression of the local miners and their families, Kathryn decides to relaunch her uncle's newspaper—and then finds herself in the middle of a maelstrom, pitted against Calvada's most powerful men. But Kathryn intends to continue to say—and publish—whatever she pleases, especially when she knows she's right. Matthias Beck, owner of a local saloon and hotel, has a special interest in the new lady in town. He instantly recognizes C. T. Walsh's same tenacity in the beautiful and outspoken redhead—and knows all too well how dangerous that family trait can be. While Kathryn may be right about Calvada's problems, her righteousness could also get her killed. But when the handsome hotelier keeps finding himself on the same side of the issues as the opinionated Miss Walsh, Matthias's restless search for purpose becomes all about answering the call of his heart. Everyone may be looking to strike it rich in this lawless boomtown, but it's a love more precious than gold that will ultimately save them all.",
        isbn: '1496463102',
        likes: 64,
        dislikes: 24,
        inventory: 100,
        numberSold: 432,
        reviews: [
          { review_guid: '9f83d3a2-fce1-496d-6bdf-8223845618e8' },
          { review_guid: '552c0925-c815-40dd-c849-827122f6252c' }
        ]
      },

      {
        guid: '6fcc5b93-4334-45e3-7f5b-1c7990e991f2',
        title: 'The Last Thing He Told Me: A Novel',
        author: 'Laura Dave',
        image: 'https://m.media-amazon.com/images/I/81823bTjKHL._AC_UL320_.jpg',
        price: 27,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 316,
        summary: "Before Owen Michaels disappears, he smuggles a note to his beloved wife of one year: Protect her. Despite her confusion and fear, Hannah Hall knows exactly to whom the note refers—Owen's sixteen-year-old daughter, Bailey. Bailey, who lost her mother tragically as a child. Bailey, who wants absolutely nothing to do with her new stepmother. As Hannah's increasingly desperate calls to Owen go unanswered, as the FBI arrests Owen's boss, as a US marshal and federal agents arrive at her Sausalito home unannounced, Hannah quickly realizes her husband isn't who he said he was. And that Bailey just may hold the key to figuring out Owen's true identity—and why he really disappeared. Hannah and Bailey set out to discover the truth. But as they start putting together the pieces of Owen's past, they soon realize they're also building a new future—one neither of them could have anticipated. With its breakneck pacing, dizzying plot twists, and evocative family drama, The Last Thing He Told Me is a riveting mystery, certain to shock you with its final, heartbreaking turn.",
        isbn: '1788169271',
        likes: 64,
        dislikes: 24,
        inventory: 100,
        numberSold: 178,
        reviews: [
          { review_guid: 'c7458be1-1a2e-4c26-3608-7195490838f9' },
          { review_guid: '6a387fa1-6e54-49ca-693f-a2980735d47e' },
          { review_guid: '4c435692-c596-4d7b-7bb0-910fc212ea46' }
        ]
      },

      {
        guid: 'eca27ec0-d74b-43b7-8b0f-c304a519f69e',
        title: 'The Leaf Thief',
        author: 'Alice Hemming',
        image: 'https://m.media-amazon.com/images/I/A1kuBjgawsL._AC_UL320_.jpg',
        price: 17.99,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 32,
        summary: 'Squirrel loves counting the leaves on his tree--red leaves, gold leaves, orange, and more. But hold on! One of his leaves is missing! On a quest to find the missing leaf, Squirrel teams up with his good friend Bird to discover who the leaf thief could be among their forest friends.',
        isbn: '1728235200',
        likes: 64,
        dislikes: 24,
        inventory: 100,
        numberSold: 178,
        reviews: [
          { review_guid: '47de3071-1a02-481f-5ea9-436cf9b9d9a6' },
          { review_guid: 'b02aad05-7ccc-452b-5ab7-b2663aadbac7' }
        ]
      },

      {
        guid: '9ec9c2e5-459b-4122-cb7a-12d17766356b',
        title: 'The League: How Five Rivals Created the NFL and Launched a Sports Empire',
        author: 'John Eisenberg',
        image: 'https://m.media-amazon.com/images/I/61Qtam1Ut+L._AC_UL320_.jpg',
        price: 18.99,
        genres: [ { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' } ],
        pageCount: 416,
        summary: 'The epic tale of the five owners who shepherded the NFL through its tumultuous early decades and built the most popular sport in America',
        isbn: '1541618645',
        likes: 64,
        dislikes: 24,
        inventory: 100,
        numberSold: 178,
        reviews: [
          { review_guid: '9b566539-abe2-4749-13db-15e97dba98a4' },
          { review_guid: '556b5949-4714-47b0-b901-a759e6bdf759' }
        ]
      },

      {
        guid: 'be7d6c3f-aed9-46dd-1d50-33bf61f2a109',
        title: 'The Left Hand of Darkness',
        author: 'Ursula K. Le Guin',
        image: 'https://m.media-amazon.com/images/I/81N0EZVhWyL._AC_UY218_.jpg',
        price: 8.99,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 307,
        summary: "A lone human ambassador is sent to the icebound planet of Winter, a world without sexual prejudice, where the inhabitants' gender is fluid. His goal is to facilitate Winter's inclusion in a growing intergalactic civilization. But to do so he must bridge the gulf between his own views and those of the strange, intriguing culture he encounters...",
        isbn: '9780441478125',
        likes: 64,
        dislikes: 24,
        inventory: 100,
        numberSold: 178,
        reviews: [
          { review_guid: '9ba40f45-9a35-4c73-67dd-e804251c323c' },
          { review_guid: '21f55782-e53f-4ed3-7bdd-d5bf898501c9' },
          { review_guid: '40ed3fc1-4c0d-44e1-94c7-c1e8c38e7b13' }
        ]
      },

      {
        guid: '27fe739d-583a-43bb-c955-9d09138e982d',
        title: 'The Letter Keeper',
        author: 'Charles Martin',
        image: 'https://m.media-amazon.com/images/I/91+KvpgzPDL._AC_UL320_.jpg',
        price: 17.99,
        genres: [ { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' } ],
        pageCount: 313,
        summary: "Murphy Shepherd has made a career of finding those no one else could—survivors of human trafficking. His life's mission is helping others find freedom . . . but then the nightmare strikes too close to home. When his new wife, her daughter, and two other teenage girls are stolen, Murphy is left questioning all he has thought to be true. With more dead ends than leads, he has no idea how to find his loved ones. After everything is stripped away, love is what remains. Hope feels lost, but Murphy is willing to expend his last breath trying to bring them home.",
        isbn: '785230955',
        likes: 68,
        dislikes: 24,
        inventory: 100,
        numberSold: 743,
        reviews: [
          { review_guid: '2dca4710-823e-478d-b68c-e10a94ceaf03' },
          { review_guid: '922517c3-af34-4c5e-a509-f72be98d5dac' },
          { review_guid: 'ecdd7233-6a9e-4b55-5a7d-3387c96b8846' }
        ]
      },

      {
        guid: 'd04db340-d5d3-4317-10b7-7a0245c4b913',
        title: 'The Lincoln Highway: A Novel',
        author: 'Amor Towles',
        image: 'https://m.media-amazon.com/images/I/81GrCFh4oEL._AC_UL320_.jpg',
        price: 30,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 784,
        summary: "In June, 1954, eighteen-year-old Emmett Watson is driven home to Nebraska by the warden of the juvenile work farm where he has just served fifteen months for involuntary manslaughter. His mother long gone, his father recently deceased, and the family farm foreclosed upon by the bank, Emmett's intention is to pick up his eight-year-old brother, Billy, and head to California where they can start their lives anew. But when the warden drives away, Emmett discovers that two friends from the work farm have hidden themselves in the trunk of the warden's car. Together, they have hatched an altogether different plan for Emmett's future, one that will take them all on a fateful journey in the opposite direction—to the City of New York. Spanning just ten days and told from multiple points of view, Towles's third novel will satisfy fans of his multi-layered literary styling while providing them an array of new and richly imagined settings, characters, and themes.",
        isbn: '593459873',
        likes: 111,
        dislikes: 24,
        inventory: 100,
        numberSold: 287,
        reviews: [ { review_guid: '3165e907-bccf-4d0d-910a-77c7da97cf50' } ]
      },

      {
        guid: '5dc3fa05-f2f0-4b3b-8123-27a2169085da',
        title: 'The Maid: A Novel',
        author: 'Nita Prose',
        image: 'https://m.media-amazon.com/images/I/71VTIUNTI0L._AC_UL320_.jpg',
        price: 27,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 280,
        summary: "Molly Gray is not like everyone else. She struggles with social skills and misreads the intentions of others. Her gran used to interpret the world for her, codifying it into simple rules that Molly could live by. Since Gran died a few months ago, twenty-five-year-old Molly has been navigating life's complexities all by herself. No matter—she throws herself with gusto into her work as a hotel maid. Her unique character, along with her obsessive love of cleaning and proper etiquette, make her an ideal fit for the job. She delights in donning her crisp uniform each morning, stocking her cart with miniature soaps and bottles, and returning guest rooms at the Regency Grand Hotel to a state of perfection. But Molly's orderly life is upended the day she enters the suite of the infamous and wealthy Charles Black, only to find it in a state of disarray and Mr. Black himself dead in his bed. Before she knows what's happening, Molly's unusual demeanor has the police targeting her as their lead suspect. She quickly finds herself caught in a web of deception, one she has no idea how to untangle. Fortunately for Molly, friends she never knew she had unite with her in a search for clues to what really happened to Mr. Black—but will they be able to find the real killer before it's too late? A Clue-like, locked-room mystery and a heartwarming journey of the spirit, The Maid explores what it means to be the same as everyone else and yet entirely different—and reveals that all mysteries can be solved through connection to the human heart.",
        isbn: '593510844',
        likes: 64,
        dislikes: 24,
        inventory: 100,
        numberSold: 178,
        reviews: [ { review_guid: '9116f307-caf5-47ef-b94c-401053b55fbf' }  ]
      },

      {
        guid: '810fdb8a-bea0-43e1-296a-7e49b6f3e802',
        title: 'The Murder of Roger Ackroyd',
        author: 'Agatha Christie',
        image: 'https://m.media-amazon.com/images/I/61syI+LoSLL._AC_UL320_.jpg',
        price: 8.95,
        genres: [ { genre_guid: '9dc4b813-f699-4311-99b2-81b9a7de31b0' } ],
        pageCount: 288,
        summary: "The villagers of King's Abbot are shocked when a wealthy local widow commits suicide and the very next day her fiancé, Roger Ackroyd, is stabbed to death. Dr. James Sheppard, the local physician, discovers the body of his friend and narrates the ensuing hunt for the killer. All the guests and staff at Ackroyd's country house seem to have solid alibis—except for his missing stepson. But as the authorities home in on their most obvious suspect, the recently retired detective Hercule Poirot unexpectedly turns up and joins the fray. Dr. Sheppard gamely assists the legendary Poirot as he untangles one of the most fiendish mysteries in Christie's extensive oeuvre.",
        isbn: '593466365',
        likes: 54,
        dislikes: 24,
        inventory: 100,
        numberSold: 163,
        reviews: [
          { review_guid: '3b528f26-6ed2-4e3a-ab30-fc4f9f8bce88' },
          { review_guid: 'e31b4ebd-a0ea-4eb6-36d2-8818ac33e8c5' },
          { review_guid: '8ce4d5c2-badd-4f09-44b7-b831f33c7f85' }
        ]
      },

      {
        guid: '6420efd0-2e14-47fe-16b4-6a3aa9dc36b1',
        title: 'The Penguin Anthology of Twentieth-Century American Poetry',
        author: 'Rita Dove',
        image: 'https://m.media-amazon.com/images/I/81902pLkBzL._AC_UL320_.jpg',
        price: 30,
        genres: [ { genre_guid: '59bf9695-6237-4e4e-45ac-6035d4107cc9' } ],
        pageCount: 599,
        summary: "Penguin's landmark poetry anthology, perfect for learning poems by heart in the age of ephemeral media",
        isbn: '143121480',
        likes: 20,
        dislikes: 89,
        inventory: 54,
        numberSold: 222,
        reviews: [
          { review_guid: 'e6a76008-1dea-4f45-2a48-402cfb2fe913' },
          { review_guid: 'e2a13776-2453-4c3c-e17c-11b93c3501b5' }
        ]
      },

      {
        guid: '061a45ac-66df-4ace-8986-5533cbc84cd7',
        title: 'The Pope at War: The Secret History of Pius XII, Mussolini, and Hitler',
        author: 'David I. Kertzer',
        image: 'https://m.media-amazon.com/images/I/A1FFZERYqtL._AC_UL320_.jpg',
        price: 37.5,
        genres: [ { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' } ],
        pageCount: 641,
        summary: 'Based on newly opened Vatican archives, a groundbreaking, explosive, and riveting book about Pope Pius XII and his actions during World War II, including how he responded to the Holocaust, by the Pulitzer Prize-winning author of The Pope and Mussolini',
        isbn: '812989945',
        likes: 20,
        dislikes: 89,
        inventory: 54,
        numberSold: 222,
        reviews: [
          { review_guid: '8ecc6986-5035-4ed9-5ff1-cf913c4294a1' },
          { review_guid: '00b58cb1-1841-4cde-c798-6677033add1d' }
        ]
      },

      {
        guid: '2ffa0994-ba9a-492f-41f4-1eccd4faa4ba',
        title: 'The Power of Now: A Guide to Spiritual Enlightenment',
        author: 'Eckhart Tolle',
        image: 'https://m.media-amazon.com/images/I/714FbKtXS+L._AC_UL320_.jpg',
        price: 17,
        genres: [
          { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' },
          { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' }
        ],
        pageCount: 236,
        summary: "To make the journey into the Now we will need to leave our analytical mind and its false created self, the ego, behind. From the very first page of Eckhart Tolle's extraordinary book, we move rapidly into a significantly higher altitude where we breathe a lighter air. We become connected to the indestructible essence of our Being, “The eternal, ever present One Life beyond the myriad forms of life that are subject to birth and death.” Although the journey is challenging, Eckhart Tolle uses simple language and an easy question and answer format to guide us.",
        isbn: '1577314808',
        likes: 20,
        dislikes: 89,
        inventory: 54,
        numberSold: 222,
        reviews: [
          { review_guid: 'c8c7ee93-6e6d-462a-cdcf-011324c36e4d' },
          { review_guid: 'ae2ad5c2-a91e-440e-fd54-7a2345658999' },
          { review_guid: '469a56f4-e755-44a0-aa78-002fa7c0d50c' },
          { review_guid: 'fa1aee61-5bc5-4c68-ebd3-11d857e21c0c' }
        ]
      },

      {
        guid: '02894e80-9b18-42df-4ba9-261792839448',
        title: 'The Redhead of Auschwitz: A True Story (Holocaust Survivor True Stories WWII)',
        author: 'Nechama Birnbaum',
        image: 'https://m.media-amazon.com/images/I/61tBJbNJTbL._AC_UL320_.jpg',
        price: 17.95,
        genres: [ { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' } ],
        pageCount: 278,
        summary: "Rosie was always told her red hair was a curse, but she never believed it. She often dreamed what it would look like under a white veil with the man of her dreams by her side. However, her life takes a harrowing turn in 1944 when she is forced out of her home and sent to the most gruesome of places: Auschwitz. Upon arrival, Rosie's head is shaved and along with the loss of her beautiful hair, she loses the life she once cherished. Among the chaos and surrounded by hopelessness, Rosie realizes the only thing the Nazis cannot take away from her is the fierce redhead resilience in her spirit. When all of her friends conclude they are going to heaven from Auschwitz, she remains determined to get home. She summons all of her courage, through death camps and death marches to do just that. This victorious biography, written by Nechama Birnbaum in honor of her grandmother, is as full of life as it is of death. It is about the intricacies of Jewish culture that still exist today and the tender experiences that are universal to all humanity: family, coming of age, and first love. It is a story that celebrates believing in yourself no matter the odds. This is a story about the little redheaded girl who thought she could, and so she did.",
        isbn: '9493231798',
        likes: 20,
        dislikes: 89,
        inventory: 54,
        numberSold: 222,
        reviews: [
          { review_guid: '050a5d8c-c8ca-4d3b-9eb1-fd9e65c06d35' },
          { review_guid: '70319f92-9289-4c8e-4b6a-779d52e830c7' },
          { review_guid: '9ca12bb5-bb78-445a-ebd2-aedf78d32f5b' },
          { review_guid: '3a7745c4-a5fe-421d-59f8-5db2a7388604' }
        ]
      },

      {
        guid: '971e1e1e-57b5-4f70-b92c-5cc26e8d53e5',
        title: "The Return: Trump's Big 2024 Comeback",
        author: 'Dick Morris',
        image: 'https://m.media-amazon.com/images/I/71lwvQIGI8L._AC_UL320_.jpg',
        price: 27.99,
        genres: [ { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' } ],
        pageCount: 262,
        summary: 'In THE RETURN Morris reveals how to beat the Democrats and the radical left at their own game - and getting freedom-loving Americans to rise up for Trump and our democracy.',
        isbn: '1630062073',
        likes: 200,
        dislikes: 24,
        inventory: 76,
        numberSold: 333,
        reviews: [
          { review_guid: 'f1a3ecb7-7b8c-4fe9-1ced-620a4f60b1ce' },
          { review_guid: '60ca9737-04f0-468d-6246-50b2e59a7c46' },
          { review_guid: '3afe8598-7bb0-441a-3110-5c7208413233' }
        ]
      },

      {
        guid: '5be74513-7e56-438f-5a42-4838e7ec593b',
        title: 'The Saints of Swallow Hill: A Fascinating Depression Era Historical Novel',
        author: 'Donna Everhart',
        image: 'https://m.media-amazon.com/images/I/81qYyfUILxL._AC_UL320_.jpg',
        price: 15.95,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 376,
        summary: `It takes courage to save yourself... In the dense pine forests of North Carolina, turpentiners labor, hacking into tree trunks to draw out the sticky sap that gives the Tar Heel State its nickname, and hauling the resin to stills to be refined. Among them is Rae Lynn Cobb and her husband, Warren, who run a small turpentine farm together. Though the work is hard and often dangerous, Rae Lynn, who spent her childhood in an orphanage, is thankful for it--and for her kind if careless husband. When Warren falls victim to his own negligence, Rae Lynn undertakes a desperate act of mercy. To keep herself from jail, she disguises herself as a man named ""Ray"" and heads to the only place she can think of that might offer anonymity--a turpentine camp in Georgia named Swallow Hill. Swallow Hill is no easy haven. The camp is isolated and squalid, and commissary owner Otis Riddle takes out his frustrations on his browbeaten wife, Cornelia. Although Rae Lynn works tirelessly, she becomes a target for Crow, the ever-watchful woods rider who checks each laborer's tally. Delwood Reese, who's come to Swallow Hill hoping for his own redemption, offers ""Ray"" a small measure of protection, and is determined to improve their conditions. As Rae Lynn forges a deeper friendship with both Del and Cornelia, she begins to envision a path out of the camp. But she will have to come to terms with her past, with all its pain and beauty, before she can open herself to a new life and seize the chance to begin again.`,
        isbn: '1496733320',
        likes: 200,
        dislikes: 24,
        inventory: 76,
        numberSold: 333,
        reviews: [
          { review_guid: 'eac2224f-274b-4890-e361-70c06b6765fc' },
          { review_guid: '22e86029-c1a5-4a8d-6e48-07d7a74d74f0' }
        ]
      },

      {
        guid: 'cf1bdaed-2288-423f-19b8-c9fd88d2784c',
        title: 'The Second Mrs. Astor: A Heartbreaking Historical Novel of the Titanic',
        author: 'Shana Abe',
        image: 'https://m.media-amazon.com/images/I/71rkaxiZ4mS._AC_UL320_.jpg',
        price: 14.5,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 336,
        summary: 'Perfect for fans of Jennifer Chiaverini and Marie Benedict, this riveting novel takes you inside the scandalous courtship and catastrophic honeymoon aboard the Titanic of the most famous couple of their time—John Jacob Astor and Madeleine Force. Told in rich detail, this novel of sweeping historical fiction will stay with readers long after turning the last page.',
        isbn: '1496732049',
        likes: 200,
        dislikes: 24,
        inventory: 76,
        numberSold: 333,
        reviews: [
          { review_guid: 'ae3248ed-e9b9-4db7-e6c8-4ea4cd0aa069' },
          { review_guid: '35b6ee0e-529f-402f-f205-829f2e7e0bab' },
          { review_guid: 'e30a2c10-79c1-42a2-26f8-40a5b9c98cee' }
        ]
      },

      {
        guid: 'b6ba3154-1ac4-4da2-7a94-e13a5176cec3',
        title: 'The Self-Healing Mind: An Essential Five-Step Practice for Overcoming Anxiety and Depression, and Revitalizing Your Life',
        author: 'Gregory Scott Brown M.D.',
        image: 'https://m.media-amazon.com/images/I/71ynEJX00SL._AC_UL320_.jpg',
        price: 27.99,
        genres: [ { genre_guid: 'c59058f1-f47e-4e0f-dd2b-5e20264ee069' } ],
        pageCount: 297,
        summary: 'The Self-Healing Mind is a holistic approach to emotional and psychological healing that focuses on how evidence-based self-care strategies can be used to improve and sustain mental health. Dr. Brown challenges the current state of mental health care and the messaging around it, showing us how to move past outdated notions of “broken” brains and chemical imbalances. While he agrees that prescription drugs and talk therapy in many cases are important for healing, his personal and professional experience has taught him that lifestyle interventions are also key to sustainable mental wellness.',
        isbn: '63295563',
        likes: 20,
        dislikes: 24,
        inventory: 76,
        numberSold: 58,
        reviews: [
          { review_guid: '21138687-5ca9-4274-1440-379ae7cd87ed' },
          { review_guid: '27b4e1de-c810-46fa-fb5b-593bf9b0f4c3' }
        ]
      },

      {
        guid: 'e45a68f9-0ea8-4f05-611c-4ef71c613fe3',
        title: 'The Seven Husbands of Evelyn Hugo',
        author: 'Taylor Jenkins Reid',
        image: 'https://m.media-amazon.com/images/I/71HuyKCcs4L._AC_UL320_.jpg',
        price: 17,
        genres: [
          { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' },
          { genre_guid: 'bf6a5200-220e-43a6-e8c3-87df08ebddf4' }
        ],
        pageCount: 400,
        summary: "Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself. Why her? Why now? Monique is not exactly on top of the world. Her husband has left her, and her professional life is going nowhere. Regardless of why Evelyn has selected her to write her biography, Monique is determined to use this opportunity to jumpstart her career. Summoned to Evelyn's luxurious apartment, Monique listens in fascination as the actress tells her story. From making her way to Los Angeles in the 1950s to her decision to leave show business in the '80s, and, of course, the seven husbands along the way, Evelyn unspools a tale of ruthless ambition, unexpected friendship, and a great forbidden love. Monique begins to feel a very real connection to the legendary star, but as Evelyn's story near its conclusion, it becomes clear that her life intersects with Monique's own in tragic and irreversible ways.",
        isbn: '1501161938',
        likes: 20,
        dislikes: 24,
        inventory: 76,
        numberSold: 58,
        reviews: [
          { review_guid: '37d73ea2-b78c-43f9-a9b4-9d66287ca4ba' },
          { review_guid: '3670d544-797e-4e67-f7e7-8951ed7a671f' },
          { review_guid: '7dd61f80-d755-4c80-42ef-0975cd89ce65' },
          { review_guid: '1f8befba-6fc0-4add-462b-d5c186b1f97b' }
        ]
      },

      {
        guid: '786f11c3-6952-432f-20df-292ae0ccd528',
        title: 'The Splendid and the Vile: A Saga of Churchill, Family, and Defiance During the Blitz',
        author: 'Erik Larson',
        image: 'https://m.media-amazon.com/images/I/81d4z08oynL._AC_UL320_.jpg',
        price: 20,
        genres: [
          { genre_guid: 'fb1adcfd-652c-41bc-10a2-b83d57f0150e' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 624,
        summary: "In The Splendid and the Vile, Erik Larson shows, in cinematic detail, how Churchill taught the British people “the art of being fearless.” It is a story of political brinkmanship, but it's also an intimate domestic drama, set against the backdrop of Churchill's prime-ministerial country home, Chequers; his wartime retreat, Ditchley, where he and his entourage go when the moon is brightest and the bombing threat is highest; and of course 10 Downing Street in London. Drawing on diaries, original archival documents, and once-secret intelligence reports—some released only recently—Larson provides a new lens on London's darkest year through the day-to-day experience of Churchill and his family: his wife, Clementine; their youngest daughter, Mary, who chafes against her parents' wartime protectiveness; their son, Randolph, and his beautiful, unhappy wife, Pamela; Pamela's illicit lover, a dashing American emissary; and the advisers in Churchill's “Secret Circle,” to whom he turns in the hardest moments.",
        isbn: '385348738',
        likes: 20,
        dislikes: 24,
        inventory: 76,
        numberSold: 58,
        reviews: [
          { review_guid: 'ab1aa52c-f6a0-4c1e-1cd2-31e58263fc66' },
          { review_guid: '8ca61691-ca78-4bcc-7c92-b210ab05eff9' }
        ]
      },

      {
        guid: 'e8fdac0d-f0db-4163-60cb-905a1f58b79f',
        title: 'The Story of Jane Goodall: A Biography Book for New Readers',
        author: 'Susan B. Katz',
        image: 'https://m.media-amazon.com/images/I/813KMg4feQL._AC_UL320_.jpg',
        price: 6.99,
        genres: [
          { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 64,
        summary: 'Jane Goodall is a celebrated scientist for her studies of chimpanzees in the forests of Africa. Before she observed chimps and helped save them from losing their home, Jane was a curious kid who loved learning about animals. She showed people that women could be scientists, just like men, and fought to follow her dream of working with wild chimps. Explore how Jane Goodall went from being a young nature lover in England to the most important chimpanzee expert in the world.',
        isbn: '1646118731',
        likes: 20,
        dislikes: 24,
        inventory: 76,
        numberSold: 58,
        reviews: [
          { review_guid: '7f106d79-baa6-4d75-c707-95facbed3f83' },
          { review_guid: '4da55273-c37e-4b7e-1141-36290794cae1' },
          { review_guid: '93c5ad7d-9503-442e-d041-b59327bc63ea' }
        ]
      },

      {
        guid: '0d32068c-da7f-470b-d2d3-e6a509abe63e',
        title: 'The Story of Jesus',
        author: 'Jane Werner Watson',
        image: 'https://m.media-amazon.com/images/I/A19WGwnYulL._AC_UL320_.jpg',
        price: 4.99,
        genres: [
          { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' },
          { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' }
        ],
        pageCount: 24,
        summary: 'An introduction to Jesus for very young children -- a perfect gift for the holiday season!',
        isbn: '375839410',
        likes: 60,
        dislikes: 34,
        inventory: 45,
        numberSold: 254,
        reviews: [
          { review_guid: '64a3b399-7ba9-4a96-a661-7d8bcea5917f' },
          { review_guid: '8e9fd976-eb0f-45d0-3dca-a1c3b46a87ba' }
        ]
      },

      {
        guid: 'a4e8441b-2a39-4995-8ae7-a13137d27394',
        title: 'The Stranger in the Lifeboat: A Novel',
        author: 'Mitch Albom',
        image: 'https://m.media-amazon.com/images/I/71Rde+ynASL._AC_UL320_.jpg',
        price: 23.99,
        genres: [
          { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' },
          { genre_guid: '29f3cea7-c19e-4d3c-3ba1-6561d5907b9a' }
        ],
        pageCount: 288,
        summary: "What would happen if we called on God for help and God actually appeared? In Mitch Albom's profound new novel of hope and faith, a group of shipwrecked passengers pull a strange man from the sea. He claims to be “the Lord.” And he says he can only save them if they all believe in him.",
        isbn: '62888366',
        likes: 60,
        dislikes: 34,
        inventory: 45,
        numberSold: 254,
        reviews: [
          { review_guid: 'cfebdd52-1217-478b-333c-4d17bb75fd14' },
          { review_guid: '66661cc4-05a5-4d15-1368-fe2461344842' },
          { review_guid: '3cd0de8f-2531-41d7-2261-8f02d7ded363' }
        ]
      },

      {
        guid: '9e7dd587-edd5-4ca3-6b5d-98c71ada2e1b',
        title: 'The Summer of Broken Rules',
        author: 'K. L. Walther',
        image: 'https://m.media-amazon.com/images/I/71vBl2C2CiL._AC_UL320_.jpg',
        price: 10.99,
        genres: [ { genre_guid: '20289d26-4572-42c5-5fce-34e77eff62cc' } ],
        pageCount: 384,
        summary: "Meredith's family's annual game of assassin at Martha's Vineyard during a summer wedding is the perfect chance to honor her sister's legacy, and finally join the world again. But when she forms an alliance with a cute groomsman, she's at risk of losing both the game ... and her heart.",
        isbn: '1728210291',
        likes: 60,
        dislikes: 34,
        inventory: 45,
        numberSold: 254,
        reviews: [
          { review_guid: 'ae0048e4-a356-44f8-9847-2feeea27bda8' },
          { review_guid: '57bfc24d-fedd-4a00-72e7-4945f3dc9145' }
        ]
      },

      {
        guid: 'f32b7d9f-cfec-4fce-cd3d-54f5e5600bb2',
        title: 'The Sweetness of Water: A Novel',
        author: 'Nathan Harris',
        image: 'https://m.media-amazon.com/images/I/91aFcehdq1L._AC_UL320_.jpg',
        price: 17.99,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 368,
        summary: 'In the spirit of The Known World and The Underground Railroad, an award-winning “miraculous debut” (Washington Post) about the unlikely bond between two freedmen who are brothers and the Georgia farmer whose alliance will alter their lives, and his, forever',
        isbn: '316461245',
        likes: 60,
        dislikes: 34,
        inventory: 45,
        numberSold: 254,
        reviews: [
          { review_guid: '48dfa59b-19dd-4131-0a34-2baa688a5874' },
          { review_guid: 'ce8c30a7-3aeb-41f3-daf8-1a462fd33853' },
          { review_guid: '047a162c-5a5c-47c9-2ce0-89b887d52f05' }
        ]
      },

      {
        guid: '9bcf6e22-1189-4486-fc47-c3ed2ee0ca51',
        title: 'The System: Who Rigged It, How We Fix It',
        author: 'Robert B. Reich',
        image: 'https://m.media-amazon.com/images/I/81YDfn+La0L._AC_UL320_.jpg',
        price: 26,
        genres: [ { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' } ],
        pageCount: 225,
        summary: 'There is a mounting sense that our political-economic system is no longer working, but what is the core problem and how do we remedy it? With the characteristic clarity and passion that have made him a central civil voice, bestselling author of Saving Capitalism and The Common Good Robert B. Reich shows how wealth and power have combined to install an oligarchy and undermine democracy. Reich exposes the myths of meritocracy, national competitiveness, corporate social responsibility, the “free market,” and the political “center,” all of which are used by those at the top to divert attention from their takeover of the system and to justify their accumulation of even more wealth and power. In demystifying the current system, Reich reveals where power actually lies and how it is wielded, and invites us to reclaim power and remake the system for all.',
        isbn: '1529043727',
        likes: 60,
        dislikes: 34,
        inventory: 45,
        numberSold: 118,
        reviews: [
          { review_guid: '3feeb3a4-8dd5-4732-903c-e6e881bd77d1' },
          { review_guid: 'df85aefe-d7dd-49ff-7bf9-0b52cc50adc3' }
        ]
      },

      {
        guid: 'f5c9c7d3-8199-4f54-438b-b724f881e47d',
        title: 'The Time Machine',
        author: 'H. G. Wells',
        image: 'https://m.media-amazon.com/images/I/718L-O0yxtL._AC_UY218_.jpg',
        price: 6.99,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 128,
        summary: 'When the Time Traveller courageously stepped out of his machine for the first time, he found himself in the year 802,700—and everything had changed. In this unfamiliar, utopian age creatures seemed to dwell together in perfect harmony. The Time Traveller thought he could study these marvelous beings—unearth their secret and then return to his own time—until he discovered that his invention, his only avenue of escape, had been stolen.',
        isbn: '553213512',
        likes: 100,
        dislikes: 50,
        inventory: 45,
        numberSold: 300,
        reviews: [
          { review_guid: 'cbd2f218-5525-4ff3-5e44-daf5f2c66b2c' },
          { review_guid: 'ce06adf8-a330-4202-b2b8-f21bb57cf748' },
          { review_guid: '9b490299-4984-46b1-fdd4-7035bc083540' },
          { review_guid: 'efd847bf-adab-4e61-bf12-ebe653218b6b' }
        ]
      },

      {
        guid: 'ab7bffd8-4520-4a4e-db10-3dc6c4be6f9e',
        title: 'The Trials of Harry S. Truman: The Extraordinary Presidency of an Ordinary Man, 1945-1953',
        author: 'Jeffrey Frank',
        image: 'https://m.media-amazon.com/images/I/71Bg+9ESlhL._AC_UL320_.jpg',
        price: 32.5,
        genres: [
          { genre_guid: 'fb1adcfd-652c-41bc-10a2-b83d57f0150e' },
          { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' }
        ],
        pageCount: 576,
        summary: 'Jeffrey Frank, author of the bestselling Ike and Dick, returns with the first full account of the Truman presidency in nearly thirty years, recounting how so ordinary a man met the extraordinary challenge of leading America through the pivotal years of the mid-20th century.',
        isbn: '1501102893',
        likes: 100,
        dislikes: 50,
        inventory: 45,
        numberSold: 300,
        reviews: [
          { review_guid: 'b24bbd8e-028f-40b1-923d-1494800bd9eb' },
          { review_guid: '3e9cd7e3-870a-4a1f-ac7e-35a057ef8c01' },
          { review_guid: 'c4db7b8c-62ef-496b-1f89-c4bd0ccfab72' }
        ]
      },

      {
        guid: 'a8387fad-93bd-430d-a9ab-1c2f12f9879b',
        title: 'The Very Hugry Caterpillar',
        author: 'Eric Carle',
        image: 'https://m.media-amazon.com/images/I/91O7KhV+03S._AC_UY218_.jpg',
        price: 6.99,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 26,
        summary: 'A small caterpillar is born hungry and eats everything in sight until it gets a stomach ache. After that experience, he eats a leaf and it helps him to become a beautiful butterfly. The Very Hungry Caterpillar is a story about a small caterpillar who emerges from an egg and begins eating everything in sight.',
        isbn: '399226907',
        likes: 100,
        dislikes: 50,
        inventory: 45,
        numberSold: 300,
        reviews: [
          { review_guid: '7bd2d01b-2329-4f95-2d82-9513bffe8ce4' },
          { review_guid: '65bcecf6-67f0-4cba-ff35-d4fb916f6509' },
          { review_guid: '09bc66fa-4fa3-413f-72fe-cab934e23d59' },
          { review_guid: '5350545e-7a1b-4a74-200c-e859b6b09663' }
        ]
      },

      {
        guid: '86bc0990-83f9-40f8-7617-7dde6d449cb7',
        title: 'The Woman in White',
        author: 'Wilkie Collins',
        image: 'https://m.media-amazon.com/images/I/61KOJlEUepL._AC_UY218_.jpg',
        price: 9.99,
        genres: [
          { genre_guid: '35cd6638-f8c4-4923-03e3-e4369a6b6375' },
          { genre_guid: '9dc4b813-f699-4311-99b2-81b9a7de31b0' }
        ],
        pageCount: 672,
        summary: "Late one night, a drawing teacher meets a mysterious woman dressed in white. Who is she, and what is her connection to the teacher's new pupil, a beautiful heiress?",
        isbn: '1537054570',
        likes: 100,
        dislikes: 50,
        inventory: 45,
        numberSold: 300,
        reviews: [
          { review_guid: '1292c723-b03e-463b-1e4a-2b7c47cc9ef7' },
          { review_guid: '39f840be-0351-4a18-1df3-aeac95f5b1bd' },
          { review_guid: 'dc854d1b-a506-46f8-4bed-717d0161097c' }
        ]
      },

      {
        guid: 'bae0c5df-c03c-4b82-b36e-5067c43444c2',
        title: "The Yiddish Policeman's Union",
        author: 'Michael Chabon',
        image: 'https://m.media-amazon.com/images/I/51T-2dDILRL._AC_UY218_.jpg',
        price: 12.99,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 436,
        summary: 'For sixty years Jewish refugees and their descendants have prospered in the Federal District of Sitka, a "temporary" safe haven created in the wake of the Holocaust and the shocking 1948 collapse of the fledgling state of Israel. The Jews of the Sitka District have created their own little world in the Alaskan panhandle, a vibrant and complex frontier city that moves to the music of Yiddish. But now the District is set to revert to Alaskan control, and their dream is coming to an end. Homicide detective Meyer Landsman of the District Police has enough problems without worrying about the upcoming Reversion. His life is a shambles, his marriage a wreck, his career a disaster. And in the cheap hotel where Landsman has washed up, someone has just committed a murder—right under his nose. When he begins to investigate the killing of his neighbor, a former chess prodigy, word comes down from on high that the case is to be dropped immediately, and Landsman finds himself contending with all the powerful forces of faith, obsession, evil, and salvation that are his heritage.',
        isbn: '7149832',
        likes: 100,
        dislikes: 50,
        inventory: 45,
        numberSold: 300,
        reviews: [
          { review_guid: 'bb52933f-da42-49f8-dc95-61dd90398e0b' },
          { review_guid: '666a0813-fb9b-4b4b-f8cf-4469ddac2819' },
          { review_guid: 'e23bd7c7-2453-49c6-a250-0b1e1ce1b964' }
        ]
      },

      {
        guid: 'a800a03d-3316-4cf7-d109-306a0e04f289',
        title: 'They Want to Kill Americans: The Militias, Terrorists, and Deranged Ideology of the Trump Insurgency',
        author: 'Malcolm Nance',
        image: 'https://m.media-amazon.com/images/I/81OrbYfJ0QL._AC_UL320_.jpg',
        price: 29.99,
        genres: [ { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' } ],
        pageCount: 309,
        summary: 'They Want to Kill Americans is the first detailed look into the heart of the active Trump-led insurgency, setting the stage for a second nation-wide rebellion on American soil. This is a chilling and deeply researched early warning to the nation from a counterterrorism intelligence professional: America is primed for a possible explosive wave of terrorist attacks and armed confrontations that aim to bring about a Donald Trump led dictatorship.',
        isbn: '1250279003',
        likes: 100,
        dislikes: 50,
        inventory: 45,
        numberSold: 300,
        reviews: [
          { review_guid: '8d5d7cc4-54e1-4cba-1249-0c1fb784cfca' },
          { review_guid: '2bdb52e1-13f3-4df8-89d4-dc896fcc83d7' }
        ]
      },

      {
        guid: '3154fe4b-6c83-4407-967f-9a7ba67629cb',
        title: 'Things We Never Got Over',
        author: 'Lucy Score',
        image: 'https://m.media-amazon.com/images/I/71dDj1W87kL._AC_UL320_.jpg',
        price: 18.99,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 570,
        summary: "Naomi wasn't just running away from her wedding. She was riding to the rescue of her estranged twin to Knockemout, Virginia, a rough-around-the-edges town where disputes are settled the old-fashioned way…with fists and beer. Usually in that order. Too bad for Naomi her evil twin hasn't changed at all. After helping herself to Naomi's car and cash, Tina leaves her with something unexpected. The niece Naomi didn't know she had. Now she's stuck in town with no car, no job, no plan, and no home with an 11-year-old going on thirty to take care of. There's a reason Knox doesn't do complications or high-maintenance women, especially not the romantic ones. But since Naomi's life imploded right in front of him, the least he can do is help her out of her jam. And just as soon as she stops getting into new trouble he can leave her alone and get back to his peaceful, solitary life. At least, that's the plan until the trouble turns to real danger.",
        isbn: '1945631830',
        likes: 10,
        dislikes: 50,
        inventory: 35,
        numberSold: 87,
        reviews: [
          { review_guid: '155f4e11-2b69-4ffc-490e-54f27683de29' },
          { review_guid: '4f14aea9-abd9-4973-40a5-5151a7e1f4f3' },
          { review_guid: '50338089-2e9f-47e9-7fe5-0907e744bd4e' }
        ]
      },

      {
        guid: '8885d6c8-9a37-4aed-f3ee-7bc165906baf',
        title: 'Twenty Thousand Leagues Under the Sea',
        author: 'Jules Verne',
        image: 'https://m.media-amazon.com/images/I/71-Mwo0RuEL._AC_UY218_.jpg',
        price: 6.99,
        genres: [
          { genre_guid: '35cd6638-f8c4-4923-03e3-e4369a6b6375' },
          { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' }
        ],
        pageCount: 172,
        summary: "Twenty Thousand Leagues Under the Sea is a classic science fiction novel by French writer Jules Verne published in 1870. When an unidentified “monster” threatens international shipping, French oceanographer Pierre Aronnax and his unflappable assistant Conseil join an expedition organized by the US Navy to hunt down and destroy the menace. After months of fruitless searching, they finally grapple with their quarry, but Aronnax, Conseil, and the brash Canadian harpooner Ned Land are thrown overboard in the attack, only to find that the “monster” is actually a futuristic submarine, the Nautilus, commanded by a shadowy, mystical, preternaturally imposing man who calls himself Captain Nemo. Thus begins a journey of 20,000 leagues—nearly 50,000 miles—that will take Captain Nemo, his crew, and these three adventurers on a journey of discovery through undersea forests, coral graveyards, miles-deep trenches, and even the sunken ruins of Atlantis. Jules Verne's novel of undersea exploration has been captivating readers ever since its first publication in 1870, and Frederick Paul Walter's reader-friendly, scientifically meticulous translation of this visionary science fiction classic is complete and unabridged down to the smallest substantive detail.",
        isbn: '1514680459',
        likes: 444,
        dislikes: 33,
        inventory: 86,
        numberSold: 754,
        reviews: [
          { review_guid: '866eb948-fd16-4e77-5e30-f45d58a7e351' },
          { review_guid: '931ed7ac-272f-4b4b-28e3-88568982b0ff' },
          { review_guid: '1d15e341-21c2-4a82-caf5-18ee76ed7b57' },
          { review_guid: '1691b9ac-ee72-4417-6e5f-3794b1a75d26' }
        ]
      },

      {
        guid: 'e97c8b68-d72d-46a9-5f11-f8f559f1df17',
        title: 'Two Can Keep a Secret',
        author: 'Karen M. McManus',
        image: 'https://m.media-amazon.com/images/I/91sCsAAPfWL._AC_UL320_.jpg',
        price: 6.99,
        genres: [ { genre_guid: '20289d26-4572-42c5-5fce-34e77eff62cc' } ],
        pageCount: 352,
        summary: "Echo Ridge is small-town America. Ellery's never been there, but she's heard all about it. Her aunt went missing there at age seventeen. And only five years ago, a homecoming queen put the town on the map when she was killed. Now Ellery has to move there to live with a grandmother she barely knows. The town is picture-perfect, but it's hiding secrets. And before school even begins for Ellery, someone has declared open season on homecoming, promising to make it as dangerous as it was five years ago. Then, almost as if to prove it, another girl goes missing. Ellery knows all about secrets. Her mother has them; her grandmother does too. And the longer she's in Echo Ridge, the clearer it becomes that everyone there is hiding something. The thing is, secrets are dangerous--and most people aren't good at keeping them. Which is why in Echo Ridge, it's safest to keep your secrets to yourself.",
        isbn: '593567188',
        likes: 10,
        dislikes: 50,
        inventory: 35,
        numberSold: 87,
        reviews: [
          { review_guid: '656a6c37-f899-40a1-2e9c-7a13bf7a6d58' },
          { review_guid: 'cee26298-42a1-4236-57b0-0f44761ad6c8' }
        ]
      },

      {
        guid: '24f03bd9-88b7-4227-9397-c5562687ae25',
        title: 'Ugly Love: A Novel',
        author: 'Colleen Hoover',
        image: 'https://m.media-amazon.com/images/I/613KCs7szvL._AC_UL320_.jpg',
        price: 16.99,
        genres: [ { genre_guid: 'f4f50593-f124-4d75-5764-7a38a6b49eb4' } ],
        pageCount: 336,
        summary: "When Tate Collins meets airline pilot Miles Archer, she doesn't think it's love at first sight. They wouldn't even go so far as to consider themselves friends. The only thing Tate and Miles have in common is an undeniable mutual attraction. Once their desires are out in the open, they realize they have the perfect set-up. He doesn't want love, she doesn't have time for love, so that just leaves the sex. Their arrangement could be surprisingly seamless, as long as Tate can stick to the only two rules Miles has for her. Never ask about the past. Don't expect a future. They think they can handle it, but realize almost immediately they can't handle it at all.",
        isbn: '1476753180',
        likes: 10,
        dislikes: 50,
        inventory: 35,
        numberSold: 87,
        reviews: [
          { review_guid: '778a2581-fcdb-4ec6-18f8-aa706cfce0c0' },
          { review_guid: '190c4b86-0b42-46e8-e3e8-548ddaa9e6f9' },
          { review_guid: '0c7826df-5c91-4f5c-0dce-6c74b7fa94a3' }
        ]
      },

      {
        guid: '79a0997b-13ae-4a61-e374-5e75bc2fae5d',
        title: 'Verity',
        author: 'Colleen Hoover',
        image: 'https://m.media-amazon.com/images/I/61tqfa+xbWL._AC_UL320_.jpg',
        price: 16.99,
        genres: [ { genre_guid: 'bf6a5200-220e-43a6-e8c3-87df08ebddf4' } ],
        pageCount: 336,
        summary: "Lowen Ashleigh is a struggling writer on the brink of financial ruin when she accepts the job offer of a lifetime. Jeremy Crawford, husband of bestselling author Verity Crawford, has hired Lowen to complete the remaining books in a successful series his injured wife is unable to finish. Lowen arrives at the Crawford home, ready to sort through years of Verity's notes and outlines, hoping to find enough material to get her started. What Lowen doesn't expect to uncover in the chaotic office is an unfinished autobiography Verity never intended for anyone to read. Page after page of bone-chilling admissions, including Verity's recollection of the night her family was forever altered. Lowen decides to keep the manuscript hidden from Jeremy, knowing its contents could devastate the already grieving father. But as Lowen's feelings for Jeremy begin to intensify, she recognizes all the ways she could benefit if he were to read his wife's words. After all, no matter how devoted Jeremy is to his injured wife, a truth this horrifying would make it impossible for him to continue loving her.",
        isbn: '1538724731',
        likes: 87,
        dislikes: 34,
        inventory: 25,
        numberSold: 222,
        reviews: [ { review_guid: 'faca00e4-6801-4e6e-8c5f-deaa289dda1c' } ]
      },

      {
        guid: 'f04074f0-6465-4a3e-d416-c7fe3cdb0972',
        title: "We'll Always Have Summer",
        author: 'Jenny Han',
        image: 'https://m.media-amazon.com/images/I/71Yikzkkk4L._AC_UL320_.jpg',
        price: 11.99,
        genres: [ { genre_guid: '20289d26-4572-42c5-5fce-34e77eff62cc' } ],
        pageCount: 320,
        summary: "Belly has only ever been in love with two boys, both with the last name Fisher. And after being with Jeremiah for the last two years, she's almost positive he is her soul mate. Almost. While Conrad has not gotten over the mistake of letting Belly go, Jeremiah has always known that Belly is the girl for him. So when Belly and Jeremiah decide to make things forever, Conrad realizes that it's now or never—tell Belly he loves her, or lose her for good. Belly will have to confront her feelings for Jeremiah and Conrad and face the inevitable: She will have to break one of their hearts.",
        isbn: '1416995595',
        likes: 87,
        dislikes: 34,
        inventory: 25,
        numberSold: 222,
        reviews: [
          { review_guid: 'a4cd985c-4789-42b2-9816-a11b01efe9c2' },
          { review_guid: '197d59ab-e63d-4a4d-be66-29586e4904de' }
        ]
      },

      {
        guid: 'eaca0379-9165-404f-981c-2cc3d5f31640',
        title: 'Why We Did It: A Travelogue from the Republican Road to Hell',
        author: 'Tim Miller',
        image: 'https://m.media-amazon.com/images/I/61s4dIwet9L._AC_UL320_.jpg',
        price: 26.99,
        genres: [ { genre_guid: 'f9e3d9dd-0318-429b-dc1f-41814c3c5520' } ],
        pageCount: 288,
        summary: 'Former Republican political operative Tim Miller answers the question no one else has fully grappled with: Why did normal people go along with the worst of Trumpism?',
        isbn: '63161478',
        likes: 87,
        dislikes: 34,
        inventory: 25,
        numberSold: 222,
        reviews: [
          { review_guid: '1840dc1f-0fd4-4792-9a74-095d6e811183' },
          { review_guid: '099090a6-3e59-4d5f-9a4a-f982b9b02186' },
          { review_guid: 'b3f075dd-a56b-4f07-42f9-7b4ce28e4b4f' }
        ]
      },

      {
        guid: 'e5a9912d-b6bd-4bb0-f602-332fb0932493',
        title: 'Writing Sci-Fi, Fantasy, & Horror For Dummies',
        author: 'Rick Dakan',
        image: 'https://m.media-amazon.com/images/I/5195NdrOm1L._AC_UL320_.jpg',
        price: 24.99,
        genres: [ { genre_guid: 'b098dc11-5f80-4866-c6af-ddc407a9e624' } ],
        pageCount: 432,
        summary: "Writing Sci-Fi, Fantasy, & Horror For Dummies is your skeleton key to creating the kind of fiction that grips readers and compels them to keep turning pages (even if it's well past their bedtime!)",
        isbn: '1119839092',
        likes: 87,
        dislikes: 34,
        inventory: 25,
        numberSold: 222,
        reviews: [ { review_guid: '5c9ed47c-cd2b-42b1-b63b-7a167f1930dc' } ]
      },

      {
        guid: '97944278-d0ed-43ab-f03b-d837df176ce1',
        title: 'Wuthering Heights',
        author: 'Emily Bronte',
        image: 'https://m.media-amazon.com/images/I/51ZKox7zBKL._AC_UL320_.jpg',
        price: 6.99,
        genres: [ { genre_guid: '35cd6638-f8c4-4923-03e3-e4369a6b6375' } ],
        pageCount: 230,
        summary: "Wuthering Heights is the name of the farmhouse where the story unfolds. The book's core theme is the destructive effect of jealousy and vengefulness both on the jealous or vengeful individuals and on their communities.",
        isbn: '1505313490',
        likes: 333,
        dislikes: 49,
        inventory: 65,
        numberSold: 500,
        reviews: [
          { review_guid: '14a744c1-d951-421e-000f-f1c92df84e9b' },
          { review_guid: '258c33de-9126-484f-a4ed-1121c5e075c1' },
          { review_guid: '06f0e3f8-d144-4867-a02b-3fbbea6bacd8' }
        ]
      },

      {
        guid: 'bddfc8a5-0bc6-4308-451c-90b74915c3dd',
        title: "You'd Be Home Now",
        author: 'Kathleen Glasgow',
        image: 'https://m.media-amazon.com/images/I/81YHCsR0Q-L._AC_UL320_.jpg',
        price: 18.99,
        genres: [ { genre_guid: '20289d26-4572-42c5-5fce-34e77eff62cc' } ],
        pageCount: 416,
        summary: "A journey of one sister, one brother, one family, to finally recognize and love each other for who they are, not who they are supposed to be, You'd Be Home Now is Kathleen Glasgow's glorious and heartbreaking story about the opioid crisis, and how it touches all of us.",
        isbn: '525708073',
        likes: 33,
        dislikes: 49,
        inventory: 65,
        numberSold: 100,
        reviews: [ { review_guid: '075c3b03-6349-4514-5ccd-95b6809405c5' } ]
      },

      {
        guid: '52577c64-9d46-4583-720d-63d8dac5ac68',
        title: "You're Always Enough: And More Than I Hoped For",
        author: 'Emily Ley',
        image: 'https://m.media-amazon.com/images/I/91GZfkZ390L._AC_UL320_.jpg',
        price: 18.99,
        genres: [ { genre_guid: '6971d17f-41c3-4c4f-148c-7e0dafa11bc2' } ],
        pageCount: 32,
        summary: "Kids often learn to fear messing up and worry about not being good enough. Combat perfectionism and build your children's self-confidence with this sweet, inspirational picture book from Emily Ley.",
        isbn: '1400231523',
        likes: 15,
        dislikes: 5,
        inventory: 10,
        numberSold: 78,
        reviews: [ { review_guid: '79ed737c-2430-42ea-f12e-a92f5b3e34aa' } ]
      },

      {
        guid: '93efc7e6-3a60-4a89-13fd-b98432ea60b9',
        title: 'Zero Fail: The Rise and Fall of the Secret Service',
        author: 'Carol Leonnig',
        image: 'https://m.media-amazon.com/images/I/81RKC5lFWVL._AC_UL320_.jpg',
        price: 20,
        genres: [ { genre_guid: '4460b200-9f70-48bd-bab0-d38a150b7b69' } ],
        pageCount: 526,
        summary: 'The first definitive account of the rise and fall of the Secret Service, from the Kennedy assassination to the alarming mismanagement of the Obama and Trump years, right up to the insurrection at the Capitol on January 6—by the Pulitzer Prize winner and #1 New York Times bestselling co-author of A Very Stable Genius and I Alone Can Fix It',
        isbn: '399589031',
        likes: 89,
        dislikes: 45,
        inventory: 19,
        numberSold: 111,
        reviews: [
          { review_guid: 'a695d8a6-27cd-4891-02b8-555159ccb8c1' },
          { review_guid: '574bf17c-c2c0-448a-e51e-1e3a8021efb1' }
        ]
      }
      
];

module.exports = {
    books
};