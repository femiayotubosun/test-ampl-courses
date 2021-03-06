/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InstructorWhereUniqueInput } from "../../instructor/base/InstructorWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class InstructorUpdateManyWithoutUsersInput {
  @Field(() => [InstructorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InstructorWhereUniqueInput],
  })
  connect?: Array<InstructorWhereUniqueInput>;

  @Field(() => [InstructorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InstructorWhereUniqueInput],
  })
  disconnect?: Array<InstructorWhereUniqueInput>;

  @Field(() => [InstructorWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InstructorWhereUniqueInput],
  })
  set?: Array<InstructorWhereUniqueInput>;
}
export { InstructorUpdateManyWithoutUsersInput };
