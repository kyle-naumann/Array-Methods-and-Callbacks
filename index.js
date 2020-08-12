import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
// let finalInfo = fifaData.filter((item) => {
//     return (item.Year === 2014 && item.Stage === "Final")})
// console.log(finalInfo)
// console.log("Home Team Name: ", finalInfo[0]["Home Team Name"])
// console.log("Away Team Name: ", finalInfo[0]["Away Team Name"])
// console.log("Home Team Goals: ", finalInfo[0]["Home Team Goals"])
// console.log("Away Team Goals: ", finalInfo[0]["Away Team Goals"])
// if (finalInfo[0]["Home Team Goals"] > finalInfo[0]["Away Team Goals"]){
// console.log(finalInfo[0]["Home Team Name"])
// } else {
//     console.log(finalInfo[0]["Away Team Name"])
// }



// /* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
let finalsOnly = data.filter((item) => {
    return (item.Stage === "Final")
}) 

return finalsOnly

};
console.log(getFinals(fifaData))
// /* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(cb1,data) {
    let years = cb1(data).map((item) => {
        return (item.Year)
    }) 
   return years; 

};

console.log(getYears(getFinals,fifaData));

// /* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(cb2,data) {
    let winner = cb2(data).map((item) => {
    if (item["Home Team Goals"] > item["Away Team Goals"]){
        return(item["Home Team Name"])
        } else {
            return(item["Away Team Name"])
        }
})
return winner
}

console.log(getWinners(getFinals, fifaData));

// /* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

// Parameters: 
//  * callback function getWinners
//  * callback function getYears
//  */

function getWinnersByYear(cb3, cb4, cbM, data) {
    let country = cb3(cbM, data);
    let year = cb4(cbM, data)
 let weAreTheChampions = country.forEach((item, index) => {
    console.log(`In ${year[index]}, ${item} won the World Cup!`)
})
}
console.log(getWinnersByYear(getWinners, getYears, getFinals, fifaData));


/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(datagoals) {

    let homeTeamGoals = Math.round(datagoals.reduce((acc, index) => {
            return acc + index["Home Team Goals"]/ datagoals.length}, 0))
    let awayTeamGoals = Math.round(datagoals.reduce((acc, index) => {
            return acc + index["Away Team Goals"]/ datagoals.length}, 0)) 
            
return {home: homeTeamGoals, away: awayTeamGoals}
    }

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();


