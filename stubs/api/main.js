const { getListRecipes , getRecipe, addFavorite , getFavorites} = require('./controllers');

const router = require('express').Router();

router.get('/recipes', async (req, res) => { 
    try {
        const result = await getListRecipes();
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error('Error in GET /recipes:', error.message);
        return res.status(500).json({ success: false, message: error.message });
    }
});

router.post('/recipe', async(req,res)=>{
    try{
        const result = await getRecipe(req.body);

        return res.status(200).json({success:true, data: result});
    }
    catch(error){
        console.error('Error in GET /recipes:', error.message);
        return res.status(500).json({ success: false, message: error.message });
    }
})

router.post('/favorites', async (req, res) => {
    try {
        
        const { userId, recipeId } = req.body;
        const result = await addFavorite(userId, recipeId);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error('Error in POST /favorites:', error.message);
        return res.status(500).json({ success: false, message: error.message });
    }
});

router.post('/get-favorites', async(req,res) =>{
    try {
        const { userId } = req.body;
        const result = await getFavorites(userId);
        return res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error('Error in POST /get-favorites:', error.message);
        return res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;