function celsiumToFahrenheit(input){
    const celsium = Number(input[0]);
    const fahrenheit = (celsium*1.8) + 32;
    console.log(fahrenheit.toFixed(2));
}
