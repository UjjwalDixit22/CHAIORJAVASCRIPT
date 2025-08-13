
// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());//Wed Aug 13 2025 19:06:45 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Wed Aug 13 2025
// console.log(myDate.toISOString());//2025-08-13T13:36:45.391Z
// console.log(myDate.toLocaleString());//8/13/2025, 7:06:45 PM
// console.log(myDate.toLocaleDateString());//8/13/2025
// console.log(myDate.toLocaleTimeString());//7:06:45 PM

// console.log(typeof myDate);// object


// //  let myCreatedDate = new Date(2025,7,13); //Wed Aug 13 2025.  // Months are 0-indexed in JavaScript, so 7 represents August
// //  console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2025,7,13,1,35);
// console.log(myCreatedDate.toLocaleString());//8/13/2025, 5:
// let newDate = new Date("01-25-2025");
// console.log(newDate.toDateString());//1/25/2025, 12:00:00 AM

//  let myTimeStamp = Date.now();
// console.log(myTimeStamp); // Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC 

let newwDate = new Date();
// console.log(newwDate.getMonth()+1); // Returns the month (0-11, where 0 is January and 11 is December)
// // Adding 1 to the month to get a more human-readable format
// console.log(newwDate.getDate()); // Returns the day of the month (1-31)
// console.log(newwDate.getFullYear()); // Returns the year (4 digits)
// console.log(newwDate.getHours()); // Returns the hour (0-23)    
// console.log(newwDate.getMinutes()); // Returns the minutes (0-59)
// console.log(newwDate.getSeconds()); // Returns the seconds (0-59)   
// console.log(newwDate.getMilliseconds()); // Returns the milliseconds (0-999)
// console.log(newwDate.getDay()); // Returns the day of the week (0-6, where 0 is Sunday)
// console.log(newwDate.getTime()); // Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC
 
console.log(newwDate.toLocaleString('default',{
    weekdays: 'narrow',
    timeZone: 'Asia/Kolkata',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
}));


// format a lot more in this Locale String

