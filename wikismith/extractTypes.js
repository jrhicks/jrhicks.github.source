const extractTypes = (ast, type) => {
  let elements = [];
  if (typeof(ast) === typeof('string')) {
    return elements;
  } else if (ast instanceof Array) {
    for (const a of ast) {
      elements = elements.concat(extractTypes(a, type));
    }
    return elements;
  } else if (ast.type === type) {
    elements = [ast];
  } else {
    if (ast.body !== undefined) {
      elements = extractTypes(ast.body, type);
    } else if (ast.text !== undefined) {
      elements = extractTypes(ast.text, type);
    }
  }
  return elements;
};

module.exports = extractTypes;
