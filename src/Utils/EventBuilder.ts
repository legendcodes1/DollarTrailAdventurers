import { GameEvent } from "../Interfaces/GameEvent";

var events: GameEvent[] = [
  {
    description: "The ice cream truck is driving through the neighborhood.  Do you want to spend $3 for an ice cream?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Ice-Cream.png",
    cost: -3,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "A brand new toy just came out that all your friends are talking about.  Do you want to purchase the new toy for $15?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Teddy Bear.png",
    cost: -15,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "Your friends are all going to an amusement park, but you need to buy a ticket to go.  Do you want to buy a ticket for $10 or not go?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Ticket.png",
    cost: -10,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "A cookie salesman has visited your house.  He is willing to sell you up to 12 cookies.  Each cookie costs $1. How many would you like to buy?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Cookie.png",
    cost: -3,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "The bookfair is coming to your school and they have the newest guiness book of world records you want.  Do you want to buy the book for $12 or not?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Book.png",
    cost: -12,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "Your neighbor is having a garage sale.  When you arrive you see that they have a video game console you have wanted for a long time and its much cheaper than its typical price.  Do you want to purchase it for $25?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Video-Game.png",
    cost: -25,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "It's your friends birthday and you want to get them a cool gift.  Your parents said they are willing to pay for $10 of the gift, but the gift you want to give them costs $15.  Do you want to spend $5 to get your friend an even cooler gift or not?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Gift.png",
    cost: -5,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "You have entered an art competition and you think you might have a chance at winning.  The only problem is you need some markers to make the art piece you are imagining.  Do you want to spend $5 for the markers to make the art project you think will win or not.",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Paint-Brush.png",
    cost: -5,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "Everyone at school has been playing this new game that looks really fun.  Do you want to spend $10 to buy the game so you can play with friends?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Video-Game.png",
    cost: -10,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "Your friend started a business of making phone cases.  They offer to sell you a custom phone case they made for just $4. Do you want to buy the phone case?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Phone.png",
    cost: -4,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "You lost your debit card.  It will cost you $5 to replace it. ",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Check-Balance-Button.png",
    cost: -5,
    active: false,
    accepted: true,
    recurring: false,
  },
  {
    description: "In order to watch a show that just came out, a subscription is required. Do you want to subscribe to this live service for $3 every 7 days?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Check-Balance-Button.png",
    cost: -5,
    active: false,
    accepted: false,
    recurring: true,
  },
  {
    description: "You found some old toys do you want to sell them for $10?",
    image: "CCG226/Dollar-Trail-Adventures/src/Images/Teddy Bear.png",
    cost: 10,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "Your neighbor would like you to mow the lawn for $25. Will you do it?",
    image: "[LAWN MOWER INSERT IMAGE HERE]",
    cost: 25,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "You went out to walk and found $5 on the ground. Finders keepers!",
    image: "[FOUND MONEY INSERT IMAGE HERE]",
    cost: 5,
    active: false,
    accepted: false,
    recurring: false,
  },
  {
    description: "You've done all your chores and are rewarded for your efforts for the week.",
    image: "[ALLOWANCE INSERT IMAGE HERE]",
    cost: 25,
    active: false,
    accepted: false,
    recurring: true
  },
  {
    description: "Your parents have asked you to babysit for them for them for $30. Will you do it?",
    image: "[BABYSIT INSERT IMAGE HERE]",
    cost: 30,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "Your neighbors are going on vacation for the weekend and want you to look after their dog/cat for $50. Will you do it?",
    image: "[WALKING DOG ON LEASH INSERT IMAGE HERE]",
    cost: 50,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "You have a school field trip coming up that you want to attend.  However, the cost of the field trip is $10.  Do you want to pay to go or not?",
    image: "Check-Balance-Button.png",
    cost: -10,
    active: true,
    accepted: false,
    recurring: false,
  },
  {
    description: "You were gifted a neat toy from your grandparents.  There is also a cool acessory for the toy.  Do you want to pay $3 for the accessory?",
    image: "Teddy Bear.png",
    cost: -3,
    active: true,
    accepted: false,
    recurring: false,
  },
  {
    description: "Its your birthday, you were given $25!",
    image: "Gift.png",
    cost: 25,
    active: false,
    accepted: true,
    recurring: false
  },
  {
    description: "You accidentally dropped a carton of milk at the grocery store.  Now you have to pay $5.",
    image: "Check-Balance-Button.png",
    cost: -5,
    active: false,
    accepted: true,
    recurring: false
  },
  {
    description: "Your friends are going to the movies.  Do you want to go with them for $8?",
    image: "Check-Balance-Button.png",
    cost: -8,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "The local snowcone shop just got a brand new item. A triple scoop, double dipped, waffle cone that looks delicious.  Do you want to purchase it for $6?",
    image: "Ice-Cream.png",
    cost: -6,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "Oh know! You accidently fell into a dark pattern when clicking around in the app store. You have now lost $5.",
    image: "[SCAMMER INSERT IMAGE HERE]",
    cost: -5,
    active: false,
    accepted: false,
    recurring: false
  },
  {
    description: "You would like to start teaching a skill to another kid after school for $10. Would you like to do this?",
    image: "[TEACHING INSERT IMAGE HERE]",
    cost: 10,
    active: true,
    accepted: false,
    recurring: true
  },
  {
    description: "You would would like to start making extra money and wash a single car for $10. Would you lie to do this?",
    image: "[SPONGE AND CAR INSERT IMAGE HERE]",
    cost: 10,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "You would like to attend a convention for your favorite show. Would you like to do this?",
    image: "[CONVENTION INSERT IMAGE HERE]",
    cost: -15,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "You would like to sell a physical copy of an unplayed video game for $20. Would you like to do this?",
    image: "[USED GAME CONVERTED TO MONEY INSERT IMAGE HERE]",
    cost: 20,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "Grandma/Grandpa came over and was feeling generous. Thanks for the $25!!",
    image: "[GRANDMA/GRANDPA GIVING MONEY]",
    cost: 25,
    active: false,
    accepted: false,
    recurring: false
  },
  {
    description: "Your school is hosting a field trip, and it will cost you $10. Would you like to attend?",
    image: "[SCHOOL BUS INSERT IMAGE HERE]",
    cost: -10,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "You want an instructor to teach you how to play an instrument. Will you pay $10 for a lesson?",
    image: "[GUITAR AND VIOLIN INSERT IMAGE HERE]",
    cost: -20,
    active: true,
    accepted: false,
    recurring: true
  },
  {
    description: "You would like to attend a summer outdoor camping in the future for $20. Would you like to go?",
    image: "[TENT INSERT IMAGE HERE]",
    cost: -20,
    active: true,
    accepted: false,
    recurring: false
  },
  {
    description: "You would like to go to the zoo that costs $10 for a ticket. Would you like to pay?",
    image: "[GIRAFFE INSERT IMAGE HERE]",
    cost: -10,
    active: true,
    accepted: false,
    recurring: false
  },
];


export default events;