import { Course } from "../course/Course";
import { User } from "../user/User";

export type Student = {
  courses?: Array<Course>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
