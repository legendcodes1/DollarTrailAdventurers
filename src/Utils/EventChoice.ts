import { GameEvent } from "../Interfaces/GameEvent";
import { Player } from "../Interfaces/Player";
export function EventChoice(
  event: GameEvent,
  pd: Player,
  currentDay: number
): void {
  if (event.accepted) {
    pd.balance += event.cost;

    if (event.recurring) {
      pd.recurringCharges += event.cost;

      pd.day = currentDay;
      if (event.cost > 0) {
        pd.invCost += event.cost;
        pd.investments.push([currentDay + 7, event.cost]);
      } else {
        pd.subCost = pd.subCost + event.cost * -1;
        pd.subscriptions.push([currentDay + 7, event.cost * -1]);
      }
    }
  }
  pd.completedEvents.push(event);
}
