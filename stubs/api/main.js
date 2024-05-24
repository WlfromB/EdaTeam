const { getListRecipes , getRecipe} = require('./controllers');

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

module.exports = router;