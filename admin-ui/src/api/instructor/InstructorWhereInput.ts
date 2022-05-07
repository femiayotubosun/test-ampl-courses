import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InstructorWhereInput = {
  courses?: CourseListRelationFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
