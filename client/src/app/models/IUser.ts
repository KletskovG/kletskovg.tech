export default interface IUser {
  id: string;
  username: string;
  firstName?: string;
  lastName?: string;
  password: string;
  course?: string;
}