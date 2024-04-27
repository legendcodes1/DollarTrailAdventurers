import { GameEvent } from "../Interfaces/GameEvent";
import events from "./EventBuilder";

function EventGenerator(): GameEvent | null {
  const ranEventIndex = Math.floor(Math.random() * 10);

  return events[ranEventIndex];
}
export default EventGenerator;
