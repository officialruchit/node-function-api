exports.flattenPart=(ary)=> {
  const stack = [...ary];
  const result = [];

  while (stack.length) {
    const entry = stack.pop();

    if (Array.isArray(entry)) {
      stack.push(...entry);
    } else {
      result.push(entry);
    }
  }

  return result.reverse();
}