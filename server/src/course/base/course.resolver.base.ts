/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreateCourseArgs } from "./CreateCourseArgs";
import { UpdateCourseArgs } from "./UpdateCourseArgs";
import { DeleteCourseArgs } from "./DeleteCourseArgs";
import { CourseFindManyArgs } from "./CourseFindManyArgs";
import { CourseFindUniqueArgs } from "./CourseFindUniqueArgs";
import { Course } from "./Course";
import { Instructor } from "../../instructor/base/Instructor";
import { Student } from "../../student/base/Student";
import { CourseService } from "../course.service";

@graphql.Resolver(() => Course)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CourseResolverBase {
  constructor(
    protected readonly service: CourseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async _coursesMeta(
    @graphql.Args() args: CourseFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Course])
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "any",
  })
  async courses(@graphql.Args() args: CourseFindManyArgs): Promise<Course[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Course, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "read",
    possession: "own",
  })
  async course(
    @graphql.Args() args: CourseFindUniqueArgs
  ): Promise<Course | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Course)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "create",
    possession: "any",
  })
  async createCourse(@graphql.Args() args: CreateCourseArgs): Promise<Course> {
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        instructor: args.data.instructor
          ? {
              connect: args.data.instructor,
            }
          : undefined,

        student: args.data.student
          ? {
              connect: args.data.student,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Course)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "update",
    possession: "any",
  })
  async updateCourse(
    @graphql.Args() args: UpdateCourseArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Course | null> {
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          instructor: args.data.instructor
            ? {
                connect: args.data.instructor,
              }
            : undefined,

          student: args.data.student
            ? {
                connect: args.data.student,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Course)
  @nestAccessControl.UseRoles({
    resource: "Course",
    action: "delete",
    possession: "any",
  })
  async deleteCourse(
    @graphql.Args() args: DeleteCourseArgs
  ): Promise<Course | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Instructor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Instructor",
    action: "read",
    possession: "any",
  })
  async instructor(
    @graphql.Parent() parent: Course
  ): Promise<Instructor | null> {
    const result = await this.service.getInstructor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Student, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Student",
    action: "read",
    possession: "any",
  })
  async student(@graphql.Parent() parent: Course): Promise<Student | null> {
    const result = await this.service.getStudent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
