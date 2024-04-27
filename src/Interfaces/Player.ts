import { GameEvent } from "./GameEvent";

export interface Player {
  balance: number;
  completedEvents: GameEvent[];
  recurringCharges: number;
}
