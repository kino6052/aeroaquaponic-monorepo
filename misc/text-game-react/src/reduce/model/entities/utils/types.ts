export enum EntityId {
  World = "World",
  Status = "Status",
  Help = "Help",
  Todo = "Todo",
  Internet = "Internet",
  SelfSufficiencyWebsite = "SelfSufficiencyWebsite",
  Clear = "Clear",
  TodoQuest001Task001LearnAboutSelfSufficiency = "TodoQuest001Task001LearnAboutSelfSufficiency",
  TodoQuest001Task002FindOutAboutLand = "TodoQuest001Task002FindOutAboutLand",
  LandWebsite001 = "LandWebsite001",
  TodoQuest001Task003CallRealtor = "TodoQuest001Task003CallRealtor",
  Phone = "Phone",
  Friend001 = "Friend001",
  Mom = "Mom",
  Skip = "Skip",
}

export type TEntityType =
  | "world"
  | "quest"
  | "objective"
  | "cli"
  | "misc"
  | "person";

export interface SerializedEntity {
  id: string;
  entities: string[];
  type: TEntityType;
  name: string;
  description: string;
  meta: Record<string, unknown>;
}
