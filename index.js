var recipes = {};
function UpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({},obj,{[key]:value})
}  
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}