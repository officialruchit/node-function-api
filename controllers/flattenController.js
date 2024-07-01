let flatten=require('../utils/flatten')

exports.flatten=(req,res)=>{
    try {
        const flattenedArray = flatten.flattenPart(req.body.fla);
        res.json(flattenedArray);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}