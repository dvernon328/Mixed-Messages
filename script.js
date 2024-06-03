let sign = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'];
let loveMessage = ['Your soulmate is near you.', 'Love will surprise you soon.', 'Your partner will not be in your life forever.', 'Your secret admirer will reach out soon.', 'There are other fish in the sea.', 'Look your best this week, an engagement is on the way.'];
let moneyMessage = ['You will find money this week.', 'Your fortune is good, buy a lottery ticket.', 'You will have a promotion soon.', 'Be careful around relatives, they will ask for money.', 'Do not move forward on big purchases this week.', 'You will get scammed by a stranger in the next 48 hours.'];
let healthMessage = ['Go to the doctor, you have cancer.', 'You or your partner will be pregnant soon.', 'You will find a sudden burst of energy with the change in weather.', 'A loved one will perish soon.', 'Watch your feet to avoid being tripped.', 'Your health will improve drastically with more exercise.'];
let spiritMessage = ['Be mindful of the energy you surround yourself with.', 'Exude kindness and it will be returned to you.', 'Get rid of the toxic energy around you.', 'Take time to explore nature and you may find yourself.', 'Take time to meditate this week, your guardian spirits have a message for you.', 'Spending time with animals will lift your spirits.'];

function signNum() {
  let num = Math.floor(Math.random()*12);
  return num;
}
function messageNum() {
  let mesNum = Math.floor(Math.random()*6);
  return mesNum;
}
function horoscope() {
  console.log(`The horoscope for ${sign[signNum()]} today:`);
  console.log(`Your love fortune is:
    ${loveMessage[messageNum()]} 
Your money fortune is:
    ${moneyMessage[messageNum()]} 
Your health fortune is:
    ${healthMessage[messageNum()]} 
Your spirit fortune is:
    ${spiritMessage[messageNum()]}`);
}
