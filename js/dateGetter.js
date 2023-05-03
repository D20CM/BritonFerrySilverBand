const date = new Date();
// console.log(date.getFullYear());
const year = date.getFullYear();
const copyrightElement = document.getElementById("copyright");
copyrightElement.append("\u00A9" + "Briton Ferry Silver Band " + year);
