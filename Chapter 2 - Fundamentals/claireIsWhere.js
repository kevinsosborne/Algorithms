// On New Year's Eve, have fun but don't forget your way home! For this challenge create four functions(reset, moveBy, xLocation, and yLocation) to track the travels of Clair, a wanderer. Calling reset() moves Clair home to the orign(0,0). THe moveBy(xOffset, yOffset) function moves her by those amounts, in those directions. Finally, xLocation() and yLocation() return how far Claire is from home, in X and Y directions respectively. After the calls of reset(), moveBy(1, -2), and moveBy(3, 1), subsequently calling xLocation() and yLocation() should return 4 and -1. 

var claire = [0, 0];

function reset(){
    clair = [0, 0];
}

function moveBy(xOffset, yOffset){
    clair[0] = clair[0] + xOffset;
    clair[1] = clair[1] + yOffset;
}

function xLocation(){
    console.log(clair[0]);
}

function yLocation(){
    console.log(clair[1]);
}

reset();
moveBy(1, -2);
moveBy(3, 1);
xLocation();
yLocation();