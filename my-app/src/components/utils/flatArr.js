let results = [];
function flatten(array, depth) {
  if (depth === undefined) {
    depth = 1;
  }

  for (const item of array) {
    if (Array.isArray(item) && depth > 0) {
      flatten(item, depth - 1);
    } else {
      results.push(item);
    }
  }
  return results;
}

export default flatten;
