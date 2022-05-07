import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { InstructorTitle } from "../instructor/InstructorTitle";
import { StudentTitle } from "../student/StudentTitle";

export const CourseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="instructor.id"
          reference="Instructor"
          label="Instructor"
        >
          <SelectInput optionText={InstructorTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
