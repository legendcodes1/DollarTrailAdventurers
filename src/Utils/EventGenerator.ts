import { GameEvent } from "../Interfaces/GameEvent";
import events from "./EventBuilder";

function EventGenerator(): GameEvent | null {
  const ranEventIndex = Math.floor(Math.random() * events.length);

  return events[ranEventIndex];
}
export default EventGenerator;
