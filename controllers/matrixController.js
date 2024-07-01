const MatrixModel = require('../utils/rotateMatrix');

exports.rotateMatrix = (req, res) => {
    const result = MatrixModel.rotateMatrix(req.body.matrix);
    res.json(result);
};
