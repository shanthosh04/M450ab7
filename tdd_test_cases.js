function formatCurrency(number) {
    formatCurrency = 
  }
  
  function transformArrayToObject(array) {
    const obj = {};
    for (const [key, value] of array) {
      obj[key] = value;
    }
    return obj;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function convertToCamelCase(string) {


  }
  
  module.exports = {
    formatCurrency,
    transformArrayToObject,
    capitalizeFirstLetter,
    convertToCamelCase,
  };
  