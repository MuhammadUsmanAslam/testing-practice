const stringLength = (string) => {
    if(string.length < 1 || string.length > 10){
        throw new Error("String must have length between 1-10")
    }else {
        return string.length;
    }
}

const reverseString = (string) => {
  let temp = string.split("");
  temp = temp.reverse();
  temp = temp.join('');
  return temp;
}

const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

module.exports = {stringLength, reverseString, capitalize}