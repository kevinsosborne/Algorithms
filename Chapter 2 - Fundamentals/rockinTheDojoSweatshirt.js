/* Ever since you arrived at the Dojo, you wanted one of those cool Coding Dojo sweatshirts -- maybe even more than once. Let's say they cost $20 (including tax), but friendly Josh gives a 9% discount if you buy two, a nice 19% discount if you buy three. or a sweet 35% discount if you buy four or more. He only accepts cash and says he doesn't have coins, so you should round up to the nearest dollar. Build function sweatshirtPricing(num) that, given a number of sweatshirts, returns the cost.
*/

function sweatshirtPricing(num){
    switch(num){
        case 0:
            console.log("No purchase!")
            return 0;
            break;
        case 1:
            console.log("1 Sweatshirt is $20")
            return 20;
            break;
        case 2:
            var amount = Math.ceil((num * 20) - ((num * 20) * .09));
            console.log("2 Sweatshirts are $" + amount);
            return amount;
            break;
        case 3:
            var amount = Math.ceil((num * 20) - ((num * 20) * .19));
            console.log("3 Sweatshirts are $" + amount);
            return amount;
            break;
        case 4:
            var amount = Math.ceil((num * 20) - ((num * 20) * .35));
            console.log(num + " Sweatshirts are $" + amount);
            return amount;
            break;
    }
}
sweatshirtPricing(1);
sweatshirtPricing(2);
sweatshirtPricing(3);
sweatshirtPricing(4);