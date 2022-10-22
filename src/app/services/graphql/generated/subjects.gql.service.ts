import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
import { gql } from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Careers = {
    __typename?: 'Careers';
    careerId: Scalars['Float'];
    credits: Scalars['String'];
    departments: Departments;
    name: Scalars['String'];
};

export type Category = {
    __typename?: 'Category';
    group_id: Scalars['String'];
    id: Scalars['String'];
    name: Scalars['String'];
    subject_code: Scalars['String'];
    weight: Scalars['Float'];
};

export type CategoryInput = {
    group_id: Scalars['String'];
    name: Scalars['String'];
    subject_code: Scalars['String'];
    weight: Scalars['Float'];
};

export type ClassGroups = {
    __typename?: 'ClassGroups';
    classGroupId: Scalars['String'];
    max_capacity: Scalars['Float'];
    teacher_id: Scalars['String'];
};

export type Data = {
    __typename?: 'Data';
    message?: Maybe<Scalars['String']>;
    name: Scalars['String'];
};

export type Departments = {
    __typename?: 'Departments';
    departmentId: Scalars['Float'];
    faculties: Faculties;
    name: Scalars['String'];
};

export type Enrollment = {
    __typename?: 'Enrollment';
    finalGrade?: Maybe<Scalars['Float']>;
    group: Scalars['String'];
    id: Scalars['String'];
    semester: Scalars['String'];
    subject: Scalars['String'];
    user: Scalars['String'];
};

export type Faculties = {
    __typename?: 'Faculties';
    facultyId: Scalars['Float'];
    name: Scalars['String'];
};

export type Grade = {
    __typename?: 'Grade';
    category_id: Scalars['String'];
    id: Scalars['String'];
    score: Scalars['Float'];
    student_id: Scalars['String'];
};

export type GradeInput = {
    category_id: Scalars['String'];
    score: Scalars['Float'];
    student_id: Scalars['String'];
};

export type Historials = {
    __typename?: 'Historials';
    GPA: Scalars['Float'];
    approved_credits: Scalars['Float'];
    career: Scalars['Float'];
    coursed_credits: Scalars['Float'];
    enrollment_id: Scalars['Float'];
    reprobed_credits: Scalars['Float'];
};

export type Mutation = {
    __typename?: 'Mutation';
    cancelEnrollment: Enrollment;
    createEnrollment: Enrollment;
    createGrade: Scalars['String'];
    createGradingCategory: Scalars['String'];
    deleteGrade: Scalars['String'];
    deleteGradingCategory: Scalars['String'];
    getUserByID: User;
    login: User;
    logout: Scalars['Boolean'];
    register: User;
    updateGrade: Scalars['String'];
    updateGradingCategory: Scalars['String'];
    updateUser: User;
};

export type MutationCancelEnrollmentArgs = {
    semester: Scalars['String'];
    subject: Scalars['String'];
};

export type MutationCreateEnrollmentArgs = {
    group: Scalars['String'];
    semester: Scalars['String'];
    subject: Scalars['String'];
};

export type MutationCreateGradeArgs = {
    grade_input: GradeInput;
};

export type MutationCreateGradingCategoryArgs = {
    category_input: CategoryInput;
};

export type MutationDeleteGradeArgs = {
    id: Scalars['String'];
};

export type MutationDeleteGradingCategoryArgs = {
    id: Scalars['String'];
};

export type MutationGetUserByIdArgs = {
    userID: Scalars['String'];
};

export type MutationLoginArgs = {
    password: Scalars['String'];
    username: Scalars['String'];
};

export type MutationRegisterArgs = {
    password: Scalars['String'];
    role: Scalars['String'];
    username: Scalars['String'];
};

export type MutationUpdateGradeArgs = {
    grade_input: GradeInput;
    id: Scalars['String'];
};

export type MutationUpdateGradingCategoryArgs = {
    category_input: CategoryInput;
    id: Scalars['String'];
};

export type MutationUpdateUserArgs = {
    password: Scalars['String'];
    role: Scalars['String'];
    username: Scalars['String'];
};

export type Profile = {
    __typename?: 'Profile';
    address: Scalars['String'];
    birthdate: Scalars['String'];
    email: Scalars['String'];
    historials: Array<Historials>;
    lastname: Scalars['String'];
    name: Scalars['String'];
    phone_number: Scalars['String'];
    user_id: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    getCareerById: Careers;
    getCareerbyName: Array<Careers>;
    getData: Data;
    getDepartmentById: Departments;
    getDepartmentbyName: Array<Departments>;
    getEnrollmentById: Enrollment;
    getEnrollmentsByFilters: Array<Enrollment>;
    getFacultyById: Faculties;
    getFacultybyName: Array<Faculties>;
    getGrade: Grade;
    getGrades: Array<Grade>;
    getGradingCategories: Array<Category>;
    getGradingCategory: Category;
    getGroupById: ClassGroups;
    getProfiles: Array<Profile>;
    getProfilesById: Profile;
    getSchedule: Array<Enrollment>;
    getScheduleBySemester: Array<Enrollment>;
    getSubjectbyCareer: Array<Subject>;
    getSubjectbyCode: Array<Subject>;
    getSubjectbyName: Array<Subject>;
    myAccount: User;
    ping: Scalars['String'];
    pingAuth: Scalars['String'];
    pingStudent: Scalars['String'];
    pingTeacher: Scalars['String'];
    pong: Scalars['String'];
};

export type QueryGetCareerByIdArgs = {
    careerId: Scalars['Float'];
};

export type QueryGetCareerbyNameArgs = {
    name: Scalars['String'];
};

export type QueryGetDataArgs = {
    msName: Scalars['String'];
};

export type QueryGetDepartmentByIdArgs = {
    departmentId: Scalars['Float'];
};

export type QueryGetDepartmentbyNameArgs = {
    name: Scalars['String'];
};

export type QueryGetEnrollmentByIdArgs = {
    id: Scalars['String'];
};

export type QueryGetEnrollmentsByFiltersArgs = {
    group?: InputMaybe<Scalars['String']>;
    semester?: InputMaybe<Scalars['String']>;
    subject?: InputMaybe<Scalars['String']>;
};

export type QueryGetFacultyByIdArgs = {
    facultyId: Scalars['Float'];
};

export type QueryGetFacultybyNameArgs = {
    name: Scalars['String'];
};

export type QueryGetGradeArgs = {
    id: Scalars['String'];
};

export type QueryGetGradesArgs = {
    category_id?: InputMaybe<Scalars['String']>;
    student_id?: InputMaybe<Scalars['String']>;
};

export type QueryGetGradingCategoriesArgs = {
    group_id?: InputMaybe<Scalars['String']>;
    subject_code?: InputMaybe<Scalars['String']>;
};

export type QueryGetGradingCategoryArgs = {
    id: Scalars['String'];
};

export type QueryGetGroupByIdArgs = {
    classGroupId: Scalars['String'];
};

export type QueryGetProfilesByIdArgs = {
    user_id: Scalars['String'];
};

export type QueryGetScheduleArgs = {
    userId: Scalars['String'];
};

export type QueryGetScheduleBySemesterArgs = {
    semester: Scalars['String'];
    userId: Scalars['String'];
};

export type QueryGetSubjectbyCareerArgs = {
    career: Scalars['Float'];
};

export type QueryGetSubjectbyCodeArgs = {
    code: Scalars['String'];
};

export type QueryGetSubjectbyNameArgs = {
    name: Scalars['String'];
};

export type Subject = {
    __typename?: 'Subject';
    career: Scalars['Float'];
    code: Scalars['String'];
    credits: Scalars['Float'];
    curriculum?: Maybe<Scalars['String']>;
    name: Scalars['String'];
    subject_id: Scalars['Float'];
};

export type User = {
    __typename?: 'User';
    createdAt?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    role: Scalars['String'];
    updatedAt?: Maybe<Scalars['String']>;
    username: Scalars['String'];
};

export type GetSubjectbyNameQueryVariables = Exact<{
    name: Scalars['String'];
}>;

export type GetSubjectbyNameQuery = {
    __typename?: 'Query';
    getSubjectbyName: Array<{
        __typename?: 'Subject';
        subject_id: number;
        name: string;
        curriculum?: string | null;
        credits: number;
        code: string;
        career: number;
    }>;
};

export type GetSubjectbyCodeQueryVariables = Exact<{
    code: Scalars['String'];
}>;

export type GetSubjectbyCodeQuery = {
    __typename?: 'Query';
    getSubjectbyCode: Array<{
        __typename?: 'Subject';
        subject_id: number;
        name: string;
        curriculum?: string | null;
        credits: number;
        code: string;
        career: number;
    }>;
};

export type GetSubjectbyCareerQueryVariables = Exact<{
    career: Scalars['Float'];
}>;

export type GetSubjectbyCareerQuery = {
    __typename?: 'Query';
    getSubjectbyCareer: Array<{
        __typename?: 'Subject';
        subject_id: number;
        name: string;
        curriculum?: string | null;
        credits: number;
        code: string;
        career: number;
    }>;
};

export const GetSubjectbyNameDocument = gql`
    query GetSubjectbyName($name: String!) {
        getSubjectbyName(name: $name) {
            subject_id
            name
            curriculum
            credits
            code
            career
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectbyNameGQL extends Apollo.Query<
    GetSubjectbyNameQuery,
    GetSubjectbyNameQueryVariables
> {
    override document = GetSubjectbyNameDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetSubjectbyCodeDocument = gql`
    query GetSubjectbyCode($code: String!) {
        getSubjectbyCode(code: $code) {
            subject_id
            name
            curriculum
            credits
            code
            career
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectbyCodeGQL extends Apollo.Query<
    GetSubjectbyCodeQuery,
    GetSubjectbyCodeQueryVariables
> {
    override document = GetSubjectbyCodeDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}
export const GetSubjectbyCareerDocument = gql`
    query GetSubjectbyCareer($career: Float!) {
        getSubjectbyCareer(career: $career) {
            subject_id
            name
            curriculum
            credits
            code
            career
        }
    }
`;

@Injectable({
    providedIn: 'root',
})
export class GetSubjectbyCareerGQL extends Apollo.Query<
    GetSubjectbyCareerQuery,
    GetSubjectbyCareerQueryVariables
> {
    override document = GetSubjectbyCareerDocument;

    constructor(apollo: Apollo.Apollo) {
        super(apollo);
    }
}