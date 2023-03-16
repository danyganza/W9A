
let age = 22;
let is_subscribed = true;

if (age < 18 && !is_subscribed) {
    console.log("The user is younger than 18 and is not subscribed");
  } else if (age >= 18 && !is_subscribed) {
    console.log("The user is 18 or older and is not subscribed");
  } else if (age < 18 && is_subscribed) {
    console.log("The user is younger than 18 and is subscribed");
  } else {
    console.log("The user is 18 or older and is subscribed");
  }
  