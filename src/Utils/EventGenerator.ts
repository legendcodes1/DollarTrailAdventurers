import { GameEvent } from "../Interfaces/GameEvent";
import { Player } from "../Interfaces/Player";
import events from "./EventBuilder";

function EventGenerator(): GameEvent | null {
  const ranEventIndex = Math.floor(Math.random() * 10);

  return events[ranEventIndex];
}
export default EventGenerator;

function EventChoice(event: GameEvent, pd: Player ): void {
  pd.balance += event.cost;
  if (event.active)
    {
      pd.recurringCharges += event.cost;
    }
    
    pd.completedEvents.push(event);

}