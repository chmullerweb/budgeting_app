//total Balance
const balanceElement = document.getElementById("balance");

// Value input
const valueInputElement = document.querySelector("input");

// Income/expense
const selectElement = document.querySelector("select");

// addition button - sélectionne le bouton dans le footer
const additionButtonElement = document.querySelector("footer button");

// entry list - sélectionne la liste ul dans section
const entryListElement = document.querySelector("section ul");

function addEntry(amount, operation) {
  const listEntry = document.createElement("li");
  listEntry.classList.add(operation);

  const listEntryValue = document.createElement("strong");
  listEntryValue.innerText = amount + "$";

  const listEntryDescription = document.createElement("em");
  listEntryDescription.innerText = "Description";

  const listEntryOperator = document.createElement("span");
  if (operation === "income") {
    listEntryOperator.innerText = "+";
  } else if (operation === "expense") {
    listEntryOperator.innerText = "-";
  }

  listEntry.appendChild(listEntryDescription);
  listEntry.appendChild(listEntryOperator);
  listEntry.appendChild(listEntryValue);
  entryListElement.appendChild(listEntry);
}

function updateBalance() {
  let total = 0;
  for (let item of entryListElement.children) {
    const itemValue = item.querySelector("strong");
    const operationElement = item.querySelector("span");

    const figureValue = parseInt(itemValue.innerText);
    const operation = operationElement.innerText;

    if (operation === "+") {
      total = total + figureValue;
    } else if (operation === "-") {
      total = total - figureValue;
    }
  }
  balanceElement.innerText = total + "$";
}

additionButtonElement.onclick = function() {
  const amount = valueInputElement.value;
  const operation = selectElement.value;

  addEntry(amount, operation);

  valueInputElement.value = "";

  updateBalance();
};
