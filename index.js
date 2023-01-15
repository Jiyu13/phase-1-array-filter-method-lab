// Code your solution here
function findMatching(arr, str) {
    const matchDrivers = arr.filter(driver => driver.toUpperCase() === str.toUpperCase());
    return matchDrivers;
} 


function fuzzyMatch (arr, str) {
    const matchDrivers = arr.filter(driver => driver.startsWith(str));
    return matchDrivers;
}