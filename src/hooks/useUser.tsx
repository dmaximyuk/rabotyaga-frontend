interface UserModel {
  fullName: string;
  firstName: string;
  lastName: string;
  id: number | string;
  photo: string;
}

export const useUser = (userId: number): UserModel => {
  const fullName: string = "Dmitry Maximyuk";
  const firstName: string = "Dmitry";
  const lastName: string = "Maximyuk";
  const id: string = "id419149056";
  const photo: string = "https://i.ytimg.com/vi/odHQSnrs5wI/maxresdefault.jpg";

  return {
    fullName,
    firstName,
    lastName,
    id,
    photo,
  };
};
