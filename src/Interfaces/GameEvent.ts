export interface GameEvent {
  description: string;
  label: string;
  image: string;
  cost: number;
  active: boolean;
  accepted: boolean;
  recurring: boolean;
}
