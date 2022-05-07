import { StringFilter } from "../../util/StringFilter";
import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type CourseWhereInput = {
  id?: StringFilter;
  instructor?: InstructorWhereUniqueInput;
  name?: StringFilter;
  price?: FloatNullableFilter;
  student?: StudentWhereUniqueInput;
};
