//const { default: axios } = require('axios');
const express = require('express');
const data = require('../../data');
const router = express.Router();

const userData = data.users;

router.get('/cart', async (req, res) => {
    try{
        var guid = req.session.user.guid;
        var hUser;
        var hCartItems;

        try
        {
            hUser 			= await userData.getUserByGUID(guid);
            hCartItems      = await userData.getCartByUserGUID(guid);

            res.status(200).render('site/cart', 
                {
                    Profile:
                    {
                        user: hUser,
                        cart: hCartItems
                    }
                });

        } catch (e)
        {
            console.log ("Exception caught in main.js! The following is the exception message:");
            console.log(e);
            res.status(500).json({error: e});
        };
    } catch(e){
        res.status(500).json({error: e});
    }
});

router.patch('/cart/:isbn', async (req, res) => {
    try{
        var guid = req.session.user.guid;
        const { isbn } = req.params;

        try
        {
            console.log(isbn);
            let newUser = await userData.removeCartItemByISBN(guid, isbn);
            if(newUser)
            {
                return res.json({status: "success"});
            }
            throw "Removing cart item failed"
      

        } catch (e)
        {
            console.log ("Exception caught in main.js! The following is the exception message:");
            console.log(e);
            res.status(500).json({error: e});
        };
    } catch(e){
        res.status(500).json({error: e});
    }
});

module.exports = router;