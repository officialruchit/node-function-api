const { throttle, saveChangesToDb } = require('../utils/throttle');

// Throttle the saveChangesToDb function
const throttledSaveChanges = throttle(saveChangesToDb, 7000);

// Controller function to be called from route
exports.saveChanges = (req, res) => {
  const { changes } = req.body;
  throttledSaveChanges(changes);
  res.status(200).json({ message: 'Changes saved' });
};
