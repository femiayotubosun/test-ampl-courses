import { InstructorCreateNestedManyWithoutUsersInput } from "./InstructorCreateNestedManyWithoutUsersInput";
import { StudentCreateNestedManyWithoutUsersInput } from "./StudentCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  instructors?: InstructorCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  students?: StudentCreateNestedManyWithoutUsersInput;
  username: string;
};
