import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InstructorListRelationFilter } from "../instructor/InstructorListRelationFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  instructors?: InstructorListRelationFilter;
  lastName?: StringNullableFilter;
  students?: StudentListRelationFilter;
  username?: StringFilter;
};
