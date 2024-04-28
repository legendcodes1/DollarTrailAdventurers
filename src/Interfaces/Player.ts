import { GameEvent } from "./GameEvent";

export interface Player {
  balance: number;
  completedEvents: GameEvent[];
  recurringCharges: number;
  day: number;
  subCost: number;
  invCost: number;
  subscriptions: [number, number][];
  investments: [number, number][];
  completedEventIndices: number[];
  win: boolean;
  week1Sum:string;
  week2Sum:string;
  week3Sum:string;
  week4Sum:string;
}
