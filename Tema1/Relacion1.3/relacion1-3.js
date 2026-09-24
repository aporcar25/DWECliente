function ageCalculator(birthYear) {
    let currentYear = new Date().getFullYear();
    let ageMax = currentYear - birthYear;
    let ageMin = ageMax - 1;

    document.write("They are either " + ageMin + " or " + ageMax);
}

function supplyCalculator(currentAge, maxAge, amountPerDay) {
    let yearsLeft = maxAge - currentAge;
    let totalAmount = yearsLeft * 365 * amountPerDay;
    document.write("You will need " + totalAmount + " to last you until the ripe old age of " + maxAge)
}

function circumference(radius) {
    let result = 2 * Math.PI * radius;

    document.write("The circumference is " + result + "<br>");
}

function area(radius) {
    let result = Math.PI * radius * radius;

    document.write("The area is " + result);
}

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    document.write(celsius + "ºC is " + fahrenheit + "ºF<br>");
}

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    document.write(fahrenheit + "°F is " + celsius + "°C");
}