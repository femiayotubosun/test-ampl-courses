import { InstructorWhereUniqueInput } from "../instructor/InstructorWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type CourseUpdateInput = {
  instructor?: InstructorWhereUniqueInput | null;
  name?: string;
  price?: number | null;
  student?: StudentWhereUniqueInput | null;
};
