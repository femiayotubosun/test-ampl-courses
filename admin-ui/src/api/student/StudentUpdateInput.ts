import { CourseUpdateManyWithoutStudentsInput } from "./CourseUpdateManyWithoutStudentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentUpdateInput = {
  courses?: CourseUpdateManyWithoutStudentsInput;
  user?: UserWhereUniqueInput | null;
};
