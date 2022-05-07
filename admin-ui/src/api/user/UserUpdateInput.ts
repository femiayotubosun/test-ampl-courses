import { InstructorUpdateManyWithoutUsersInput } from "./InstructorUpdateManyWithoutUsersInput";
import { StudentUpdateManyWithoutUsersInput } from "./StudentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  instructors?: InstructorUpdateManyWithoutUsersInput;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  students?: StudentUpdateManyWithoutUsersInput;
  username?: string;
};
