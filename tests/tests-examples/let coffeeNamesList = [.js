let coffeeNamesList = [
    'Espresso', //0
    'Espresso Macchiato', //1
    'Cappuccino', //2
    'Mocha',
    'Flat White',
    'Americano',
    'Cafe Latte',
    'Espresso Con Panna',
    'Cafe Breve',
  ];

  console.log(coffeeNamesList[0]);

  let coffeeNames = {
    espresso: 'Espresso', //0
    macchiato: 'Espresso Macchiato', //1

};

{
   private getCoffeeLocator = ()=> (coffeeName, page) => {
    return page.locator(
      `//*[@aria-label="${coffeeName}" and contains(@class, 'cup-body')]`
    );
  };

  public clickOnCup(coffeeName){
    await getCoffeeLocator(coffeeName).click();
  }
}

console.log(coffeeNames.espresso)