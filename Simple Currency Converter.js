const input = require('sync-input');
const currencies = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};

function convert() {
    console.log("What do you want to convert?");
    let from = input("From: ").toUpperCase();
    if (!(from in currencies)) console.log('Unknown currency');
    else {
        let to = input("To: ").toUpperCase();
        if (!(to in currencies) || !(from in currencies)) console.log('Unknown currency');
        else {
            let amount = Number(input('Amount:'));
            if (amount < 1) console.log('The amount cannot be less than 1');
            else if (isNaN(amount)) console.log("The amount has to be a number");
            else console.log(`Result: ${amount} ${from} equals ${(amount * currencies[to] / currencies[from]).toFixed(4)} ${to}`);
        }
    }

}

console.log(`Welcome to Currency Converter!
1 USD equals ${currencies['USD']} USD
1 USD equals ${currencies['JPY']} JPY
1 USD equals ${currencies['EUR']} EUR
1 USD equals ${currencies['RUB']} RUB
1 USD equals ${currencies['GBP']} GBP
What do you want to do?
1-Convert currencies 2-Exit program`);

let choice = input("");

while (choice !== "2") {
    if (choice === "1") convert();
    else console.log("Unknown input");
    console.log("What do you want to do?");
    console.log("1-Convert currencies 2-Exit program");
    choice = input("");
}
console.log("Have a nice day!")

