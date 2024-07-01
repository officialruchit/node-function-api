const deepCloneModel = require('../utils/deepClone');

exports.deepclone = (req, res) => {
    const result = deepCloneModel.deepClone(req.body.object);
    console.log(req.body.object);
    res.json(result);
};
