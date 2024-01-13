export enum Views {
  Home = "main",
  Events = "events",
  More = "more",
}

export enum Panels {
  Default = "default",
  Notifications = "notifications",
  Settings = "settings",
  Achievements = "achievements",
  Bank = "bank",
  Job = "job",
  Earnings = "earnings",
  Business = "business",
  Mining = "mining",
  Investments = "investments",
  Entertainment = "entertainment",
  Quests = "quests",
  Present = "present",
  Bonus = "bonus",
  Community = "community",
  Help = "help",
  PremiumStore = "premium_store",
  Auction = "auction",
  Market = "market",
  Shop = "shop",
}

export enum Modals {}

export enum Theme {
  Dark = "dark",
  Light = "light",
}

export interface ExpModel {
  from: number;
  to: number;
  current: number;
}

export interface UserModel {
  fullName: string;
  firstName: string;
  lastName: string;
  id: number | string;
  photo: string;
  exp: ExpModel;
}

export interface UserLevelModel {
  level: number;
  percentage: string;
  exp: ExpModel;
}

export enum NewsEventsModel {
  Update = "update",
  Important = "important",
  Message = "message",
  Congratulation = "congratulation",

  PromoCode = "promo-code",
  Rating = "rating",
}

export interface EventNewsModel {
  type: NewsEventsModel;

  title: string;
  text: string;

  promoActivatedCount?: number;
  promoActiveCount?: number;
  promoCode?: string;

  createdAt?: number;
  expiredAt?: number;
  deletedAt?: number;
}
