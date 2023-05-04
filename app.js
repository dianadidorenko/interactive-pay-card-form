const cardNumberHolder = {
  value: 12345678912341,
  items: document.querySelectorAll(
    ".card-item__numberItem:not(.card-item__numberItem:nth-child(5n))"
  ),
  setValue(newValue) {
    this.value = newValue;
    this.render();
  },
  render() {
    const strValue = this.value.toString();

    for (let i = 0; i < strValue.length; i++) {
      let symb = strValue[i];

      if (i >= 4 && i < 12) {
        symb = "*";
      }

      const item = this.items[i];
      item.innerText = symb;
    }

    for (let i = strValue.length; i < this.items.length; i++) {
      const item = this.items[i];
      item.innerText = "#";
    }
  },
};

const cardNumberInput = document.querySelector("#cardNumber");
console.log(cardNumberInput);

cardNumberInput.addEventListener("input", function () {
  cardNumberHolder.setValue(cardNumberInput.value);
});
