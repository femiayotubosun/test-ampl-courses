import { Instructor } from "../instructor/Instructor";
import { Student } from "../student/Student";

export type Course = {
  createdAt: Date;
  id: string;
  instructor?: Instructor | null;
  name: string;
  price: number | null;
  student?: Student | null;
  updatedAt: Date;
};
