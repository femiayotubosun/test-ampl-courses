import { Instructor } from "../instructor/Instructor";
import { Student } from "../student/Student";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  instructors?: Array<Instructor>;
  lastName: string | null;
  roles: Array<string>;
  students?: Array<Student>;
  updatedAt: Date;
  username: string;
};
