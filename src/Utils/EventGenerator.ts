import { GameEvent } from "../Interfaces/GameEvent";
import events from "./EventBuilder";

function EventGenerator(): GameEvent | null {
  const ranEventIndex = Math.floor(Math.random() * 10);

  return events[ranEventIndex];
}
export default EventGenerator;

function EventChoice(event: GameEvent, pd: playerData ): void {
  pd.total += event.cost;
  if (event.active)
    {
      pd.recurring += event.cost;
    }
    
    pd.completedEvents[pd.completedEvents.indexOf(null)] = event;

}