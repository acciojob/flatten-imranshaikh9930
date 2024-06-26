//your JS code here. If required.
function flatten(value) {

	if (Array.isArray(value)) {
    // Flatten array
    return value.reduce((acc, item) => acc.concat(flatten(item)), []);
  } else if (typeof value === 'object' && value !== null) {
    // Flatten object
    let flattenedObject = {};
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        let flatValue = flatten(value[key]);
        if (typeof flatValue === 'object' && !Array.isArray(flatValue)) {
          for (let subKey in flatValue) {
            if (flatValue.hasOwnProperty(subKey)) {
              flattenedObject[subKey] = flatValue[subKey];
            }
          }
        } else {
          flattenedObject[key] = flatValue;
        }
      }
    }
    return flattenedObject;
  } else {
    // Return the value if it's not an array or object
    return value;
  }
}

module.exports=flatten;
