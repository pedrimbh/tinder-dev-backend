const Dev = require('../models/Dev');

module.exports = { 
async store(req, res){
    //console.log(req.params.devId);
   // console.log(req.headers.user);
const {user} = req.headers;
const {devId} = req.params;

const loggedDev = await Dev.findById(user);
const targetDev = await Dev.findById(devId);

if(!targetDev){
    return res.status(400).json({erro: 'Dev not exist'});
    }

loggedDev.dislikes.push(targetDev._id);

await loggedDev.save();

    return res.json(loggedDev);
}
};