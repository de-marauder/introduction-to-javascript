const me = {
  name: "Ezike Obiajulu",
  height: "5ft 11''",
  country: "Nigeria",
};

const body = document.querySelector("body");

const elementList = [
  document.createElement("p"),
  document.createElement("p"),
  document.createElement("p"),
];

const [elName, country, height] = elementList;
elName.innerText = `My name is ${me.name}`;
country.innerText = `My country is ${me.country}`;
height.innerText = `My height is ${me.height}`;

body.appendChild(elName);
body.appendChild(country);
body.appendChild(height);


alert(
    `
    My name is ${me.name}\n
    My country is ${me.country}\n
    My height is ${me.height}
    `
)