import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  instructorId?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
