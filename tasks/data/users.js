const users = [
    //regular user
    {
        guid: '3295f71e-cf67-4a7a-7d6d-a7a0eb8d4734',
        username: 'bookworm',
        password: 'lovestoread247',
        profile_summary: 'hi test test',
        type: 0,
        purchases: [
            {
                isbn: '1713594021',
                review_id: '1cfdc8d6-cf39-45b0-f7ec-bd0f2aa362fc'
            },
            {
                isbn: '1476753180',
                review_id: '190c4b86-0b42-46e8-e3e8-548ddaa9e6f9'
            },
            {
                isbn: '316556327',
                review_id: '2a692e81-c385-460e-a35d-70cb56c0b9a8'
            }
        ],
        favorites: [
            '1713594021',
            '1501110365',
            '1542025605',
            '1476753180',
            '1538724731',
            '0008322066',
            '0316556343',
            '9780441478125',
            '143121480',
            '1496732049',
            '1501102893',
            '1505313490',
            '399589031'
        ],
        shoppingcart: [
            '1542025605',
            '1476753180',
            '1538724731',
            '0008322066'
        ]
    },

    //regular user
    {
        guid: '2b1bb57a-6047-4009-5ed6-284d0c47eb50',
        username: 'classicslover',
        password: 'ecstatic4classics',
        type: 0,
        purchases: [
            {
                isbn: '486282112',
                review_id: 'cb5035eb-92b4-4eb3-dc7a-418b2b707e33'
            },
            {
                isbn: '486282147',
                review_id: 'b6a9a91b-3b51-452c-d086-feeae6a50093'
            }
        ],
        favorites: [
            '0008322066',
            '486282112',
            '486282147',
            '1537054570',
            '1514680459',
            '1505313490'
        ]
    },

    //regular user
    {
        guid: '8785b878-8874-4e63-7f28-5ab6b29846eb',
        username: 'helplessromantic',
        password: 'lovebug365',
        type: 0,
        purchases: [
            {
                isbn: '1538724731',
                review_id: 'faca00e4-6801-4e6e-8c5f-deaa289dda1c'
            },
            {
                isbn: '1416995595',
                review_id: 'a4cd985c-4789-42b2-9816-a11b01efe9c2'
            },
            {
                isbn: '9781416995562',
                review_id: '3d108f9c-5df4-4d86-47bb-8abea7886d39'
            }
        ],
        favorites: [
            '1713594021',
            '1728205484',
            '1501110365',
            '1496463102'
        ]
    },

    //regular user
    {
        guid: '5f18d9d5-ed01-4ff4-1958-06dac589baad',
        username: 'rookiereader',
        password: 'reading101',
        type: 0,
        purchases: [],
        favorites: []
    },

    //admin account
    {
        guid: 'b771601b-c47d-4f82-9c09-c054d5bb9765',
        username: 'daemon',
        password: 'theadmin999',
        type: 1,
        purchases: [],
        favorites: []
    }

];

module.exports = {
    users
};