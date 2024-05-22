const router = require('express').Router();
const checkPassword = require('somesalt1-password');
const jwt = require('jsonwebtoken');
const {EDATEAM_JWT_TOKEN}  = require('./key');

const {getUser, _idToId, getResponse} = require('./controllers');

router.post('/sign-in', requiredFields(['email','password'], async (req, res)=>{
    try{
        const user = await getUser(req.body);
        
        checkPassword({password:req.body.password, salt:user.salt},async(err, pass, salt, hash )=>{
            if(err){
                throw new Error(err);
            }
            
            if(user.password === hash){
                const {password, salt:_salt, ...rest} = user;
                const token = jwt.sigin(_idToId(rest), EDATEAM_JWT_TOKEN);
                return res.send(getResponse(null, {token, user:_idToId(rest)}));
            }    
            return res.status(400).send(getResponse('Wrong email or password!'));        
        } )
    }
    catch(error){
        res.status(400).send(getResponse(error.message));
    }
}));

router.post('/sign-up', requiredFields(['email', 'login', 'password']), async (req, res) => {
    let error = null
    const data = await signUp(req.body).catch((e) => error = e.message)
    res.status(error ? 400 : 200).send(getResponse(error, data))
})