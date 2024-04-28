import { GameEvent } from "../Interfaces/GameEvent";
import { Player } from "../Interfaces/Player";
export function EventChoice(event: GameEvent, pd: Player): void {
  pd.balance += event.cost;
  if (event.active) {
    pd.recurringCharges += event.cost;
  }

  pd.completedEvents.push(event);
}
