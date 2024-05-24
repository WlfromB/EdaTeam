const { requiredFields , getFavorites, addRecipe} = require('./controllers');

const router = require('express').Router();

router.post('/favorites', requiredFields('id'), async(req,res)=>{
    try{
        const recipes = await getFavorites(req.body);
        res.status(200).send(getResponse(recipes));
    }
    catch(error){
        res.status(400).send(getResponse(error.message));
    }
})

router.post('/add-recept', async (req, res) => {
    let error = null;
    let result = null;

    try {
        result = await addRecipe(req.body);
    } catch (e) {
        error = e.message;
    }

    if (error) {
        console.error(`Error in POST /add-recept: ${error}`);
    }

    return res.status(error ? 500 : 201).json({
        message: error ? error : 'Recipe added successfully',
        id: result?.id
    });
});

module.exports = router;