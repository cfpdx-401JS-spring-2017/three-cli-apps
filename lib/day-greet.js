
function dayGreet(time, name) {

  let parsedTime = time.replace(':', '');
  let parsedTimeInt = parseInt(parsedTime);
  let greeting = '';

  if(parsedTimeInt <= 1159 ) {
    greeting = 'morning';
  } else if (parsedTimeInt >= 1200 && parsedTimeInt <= 1659) {
    greeting = 'afternoon';
  } else {
    greeting = 'night';
  }
  return `Good ${greeting}, ${name}!`;
  
}

module.exports = dayGreet;