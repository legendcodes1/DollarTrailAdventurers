import { GameEvent } from "../Interfaces/GameEvent";

export function EventBuilder() {
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
      description: "Its your friends birthday and you want to get them a cool gift.  Your parents said they are willing to pay for $10 of the gift, but the gift you want to give them costs $15.  Do you want to spend $5 to get your friend an even cooler gift or not?",
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
    },
    {
      
    }

  ];
}
