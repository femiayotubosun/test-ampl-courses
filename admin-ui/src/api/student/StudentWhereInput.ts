import { CourseListRelationFilter } from "../course/CourseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type StudentWhereInput = {
  courses?: CourseListRelationFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
