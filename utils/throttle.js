exports.throttle = (func, timeout = 4000) => {
  let isWaiting = false;
  return function (...args) {
    if (!isWaiting) {
      func.apply(this, args);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, timeout);
    }
  };
};

exports.saveChangesToDb = (changes) => {
  console.log("Saving changes: ", changes);
};
