function extractSurname(data) {
  let newData = [],
    names = [],
    newNames = [];

  // Tratament prounomns: Mr. Mrs. Miss Ms. Sir Madam Ma'am
  let treatmentPronoums = [
    "Mr.",
    "Mrs.",
    "Miss",
    "Ms.",
    "Sir",
    "Madam",
    `Ma'am`,
  ];

  data.forEach(user => {
    names.push(user["name"].split(" "));
  });

  names.forEach(name => {
    let firstName = "";
    let surname = "";
    let hasPronoum = false;

    name.forEach((singleName, index) => {
      if (
        treatmentPronoums.includes(singleName) ||
        treatmentPronoums.includes(singleName + ".")
      ) {
        firstName += singleName + " ";
        firstName += name[1];
        hasPronoum = true;
      }
      if (index === 0 && hasPronoum === false) {
        firstName = singleName;
      } else if (index > 0 && !firstName.includes(singleName)) {
        surname += singleName + " ";
      }
      hasPronoum = false;
    });
    newNames.push(firstName, surname);
  });

  let cont = 0;

  data.map(user => {
    user.name = newNames[cont];
    user.surname = newNames[cont + 1];
    newData.push(user);
    cont += 2;
  });

  return newData;
}

export default extractSurname;
