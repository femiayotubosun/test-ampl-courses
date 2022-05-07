import { CourseUpdateManyWithoutInstructorsInput } from "./CourseUpdateManyWithoutInstructorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InstructorUpdateInput = {
  courses?: CourseUpdateManyWithoutInstructorsInput;
  user?: UserWhereUniqueInput | null;
};
