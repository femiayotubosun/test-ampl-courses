import { CourseCreateNestedManyWithoutInstructorsInput } from "./CourseCreateNestedManyWithoutInstructorsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InstructorCreateInput = {
  courses?: CourseCreateNestedManyWithoutInstructorsInput;
  user?: UserWhereUniqueInput | null;
};
