export default interface IDepartments {
  name: string;
  subordinates?: { name: string }[];
}
