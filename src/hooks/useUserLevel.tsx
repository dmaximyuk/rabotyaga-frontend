interface UserLevelModel {
  level: number;
  percentage: string;
  expFrom: number;
  expTo: number;
}

export const useUserLevel = (userId: number): UserLevelModel => {
  const expFrom: number = 3;
  const expTo: number = 21;
  const level: number = 1;
  const percentage: string = ((expFrom / expTo) * 100).toFixed(2) + "%";

  return {
    expFrom,
    expTo,
    level,
    percentage,
  };
};
