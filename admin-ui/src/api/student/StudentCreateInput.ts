import { CourseCreateNestedManyWithoutStudentsInput } from "./CourseCreateNestedManyWithoutStudentsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentCreateInput = {
  courses?: CourseCreateNestedManyWithoutStudentsInput;
  user?: UserWhereUniqueInput | null;
};
