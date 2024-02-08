function removeTags(array) {
  let newElement = "";
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    element == " " || element == "." ? null : (newElement += element);
  }
  return console.log(newElement);
}

const a = "04192.10075 08561.350003 00460.240831 2 96270000029044";

removeTags(a);
