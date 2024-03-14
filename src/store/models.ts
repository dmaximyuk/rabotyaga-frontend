export enum Platform {
  Android = "material",
  Apple = "apple",
}

export enum Views {
  Home = "main",
  More = "more",
  Earnings = "earnings",
}

export enum Panels {
  Default = "default",
  Entertainment = "entertainment",
  Notifications = "notifications",
  Settings = "settings",
  Achievements = "achievements",
  Bank = "bank",
  Job = "job",
  Business = "business",
  Mining = "mining",
  Investments = "investments",
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
