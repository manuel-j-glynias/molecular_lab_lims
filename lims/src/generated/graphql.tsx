import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
};










export type _AssayFilter = {
  AND?: Maybe<Array<_AssayFilter>>;
  OR?: Maybe<Array<_AssayFilter>>;
  case?: Maybe<_CaseFilter>;
  case_in?: Maybe<_CaseFilter>;
  case_not?: Maybe<_CaseFilter>;
  case_not_in?: Maybe<_CaseFilter>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  protocol_steps?: Maybe<_Protocol_StepFilter>;
  protocol_steps_every?: Maybe<_Protocol_StepFilter>;
  protocol_steps_in?: Maybe<_Protocol_StepFilter>;
  protocol_steps_none?: Maybe<_Protocol_StepFilter>;
  protocol_steps_not?: Maybe<_Protocol_StepFilter>;
  protocol_steps_not_in?: Maybe<_Protocol_StepFilter>;
  protocol_steps_single?: Maybe<_Protocol_StepFilter>;
  protocol_steps_some?: Maybe<_Protocol_StepFilter>;
  start?: Maybe<_Protocol_StepFilter>;
  start_in?: Maybe<_Protocol_StepFilter>;
  start_not?: Maybe<_Protocol_StepFilter>;
  start_not_in?: Maybe<_Protocol_StepFilter>;
  test?: Maybe<_Molecular_Lab_TestFilter>;
  test_in?: Maybe<_Molecular_Lab_TestFilter>;
  test_not?: Maybe<_Molecular_Lab_TestFilter>;
  test_not_in?: Maybe<_Molecular_Lab_TestFilter>;
};

export enum _AssayOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _CaseFilter = {
  AND?: Maybe<Array<_CaseFilter>>;
  OR?: Maybe<Array<_CaseFilter>>;
  assays?: Maybe<_AssayFilter>;
  assays_every?: Maybe<_AssayFilter>;
  assays_in?: Maybe<_AssayFilter>;
  assays_none?: Maybe<_AssayFilter>;
  assays_not?: Maybe<_AssayFilter>;
  assays_not_in?: Maybe<_AssayFilter>;
  assays_single?: Maybe<_AssayFilter>;
  assays_some?: Maybe<_AssayFilter>;
  created_by?: Maybe<_Molecular_Lab_UserFilter>;
  created_by_in?: Maybe<_Molecular_Lab_UserFilter>;
  created_by_not?: Maybe<_Molecular_Lab_UserFilter>;
  created_by_not_in?: Maybe<_Molecular_Lab_UserFilter>;
  created_date?: Maybe<Scalars['String']>;
  created_date_contains?: Maybe<Scalars['String']>;
  created_date_ends_with?: Maybe<Scalars['String']>;
  created_date_gt?: Maybe<Scalars['String']>;
  created_date_gte?: Maybe<Scalars['String']>;
  created_date_in?: Maybe<Array<Scalars['String']>>;
  created_date_lt?: Maybe<Scalars['String']>;
  created_date_lte?: Maybe<Scalars['String']>;
  created_date_not?: Maybe<Scalars['String']>;
  created_date_not_contains?: Maybe<Scalars['String']>;
  created_date_not_ends_with?: Maybe<Scalars['String']>;
  created_date_not_in?: Maybe<Array<Scalars['String']>>;
  created_date_not_starts_with?: Maybe<Scalars['String']>;
  created_date_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  order?: Maybe<_OrderFilter>;
  order_in?: Maybe<_OrderFilter>;
  order_not?: Maybe<_OrderFilter>;
  order_not_in?: Maybe<_OrderFilter>;
  sample?: Maybe<_SampleFilter>;
  sample_in?: Maybe<_SampleFilter>;
  sample_not?: Maybe<_SampleFilter>;
  sample_not_in?: Maybe<_SampleFilter>;
};

export enum _CaseOrdering {
  CreatedDateAsc = 'created_date_asc',
  CreatedDateDesc = 'created_date_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _HasStatusFilter = {
  AND?: Maybe<Array<_HasStatusFilter>>;
  OR?: Maybe<Array<_HasStatusFilter>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  status?: Maybe<_StatusUpdateFilter>;
  status_in?: Maybe<_StatusUpdateFilter>;
  status_not?: Maybe<_StatusUpdateFilter>;
  status_not_in?: Maybe<_StatusUpdateFilter>;
};

export enum _HasStatusOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _InstrumentFilter = {
  AND?: Maybe<Array<_InstrumentFilter>>;
  OR?: Maybe<Array<_InstrumentFilter>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  reagents?: Maybe<_ReagentFilter>;
  reagents_every?: Maybe<_ReagentFilter>;
  reagents_in?: Maybe<_ReagentFilter>;
  reagents_none?: Maybe<_ReagentFilter>;
  reagents_not?: Maybe<_ReagentFilter>;
  reagents_not_in?: Maybe<_ReagentFilter>;
  reagents_single?: Maybe<_ReagentFilter>;
  reagents_some?: Maybe<_ReagentFilter>;
  tests?: Maybe<_Molecular_Lab_TestFilter>;
  tests_every?: Maybe<_Molecular_Lab_TestFilter>;
  tests_in?: Maybe<_Molecular_Lab_TestFilter>;
  tests_none?: Maybe<_Molecular_Lab_TestFilter>;
  tests_not?: Maybe<_Molecular_Lab_TestFilter>;
  tests_not_in?: Maybe<_Molecular_Lab_TestFilter>;
  tests_single?: Maybe<_Molecular_Lab_TestFilter>;
  tests_some?: Maybe<_Molecular_Lab_TestFilter>;
};

export enum _InstrumentOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _Molecular_Lab_TestFilter = {
  AND?: Maybe<Array<_Molecular_Lab_TestFilter>>;
  OR?: Maybe<Array<_Molecular_Lab_TestFilter>>;
  acceptable_sample_type?: Maybe<_Sample_TypeFilter>;
  acceptable_sample_type_every?: Maybe<_Sample_TypeFilter>;
  acceptable_sample_type_in?: Maybe<_Sample_TypeFilter>;
  acceptable_sample_type_none?: Maybe<_Sample_TypeFilter>;
  acceptable_sample_type_not?: Maybe<_Sample_TypeFilter>;
  acceptable_sample_type_not_in?: Maybe<_Sample_TypeFilter>;
  acceptable_sample_type_single?: Maybe<_Sample_TypeFilter>;
  acceptable_sample_type_some?: Maybe<_Sample_TypeFilter>;
  assays?: Maybe<_AssayFilter>;
  assays_every?: Maybe<_AssayFilter>;
  assays_in?: Maybe<_AssayFilter>;
  assays_none?: Maybe<_AssayFilter>;
  assays_not?: Maybe<_AssayFilter>;
  assays_not_in?: Maybe<_AssayFilter>;
  assays_single?: Maybe<_AssayFilter>;
  assays_some?: Maybe<_AssayFilter>;
  authorized_diagnoses?: Maybe<Scalars['String']>;
  authorized_diagnoses_contains?: Maybe<Scalars['String']>;
  authorized_diagnoses_ends_with?: Maybe<Scalars['String']>;
  authorized_diagnoses_gt?: Maybe<Scalars['String']>;
  authorized_diagnoses_gte?: Maybe<Scalars['String']>;
  authorized_diagnoses_in?: Maybe<Array<Scalars['String']>>;
  authorized_diagnoses_lt?: Maybe<Scalars['String']>;
  authorized_diagnoses_lte?: Maybe<Scalars['String']>;
  authorized_diagnoses_not?: Maybe<Scalars['String']>;
  authorized_diagnoses_not_contains?: Maybe<Scalars['String']>;
  authorized_diagnoses_not_ends_with?: Maybe<Scalars['String']>;
  authorized_diagnoses_not_in?: Maybe<Array<Scalars['String']>>;
  authorized_diagnoses_not_starts_with?: Maybe<Scalars['String']>;
  authorized_diagnoses_starts_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  instruments?: Maybe<_InstrumentFilter>;
  instruments_every?: Maybe<_InstrumentFilter>;
  instruments_in?: Maybe<_InstrumentFilter>;
  instruments_none?: Maybe<_InstrumentFilter>;
  instruments_not?: Maybe<_InstrumentFilter>;
  instruments_not_in?: Maybe<_InstrumentFilter>;
  instruments_single?: Maybe<_InstrumentFilter>;
  instruments_some?: Maybe<_InstrumentFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lower_contains?: Maybe<Scalars['String']>;
  name_lower_ends_with?: Maybe<Scalars['String']>;
  name_lower_gt?: Maybe<Scalars['String']>;
  name_lower_gte?: Maybe<Scalars['String']>;
  name_lower_in?: Maybe<Array<Scalars['String']>>;
  name_lower_lt?: Maybe<Scalars['String']>;
  name_lower_lte?: Maybe<Scalars['String']>;
  name_lower_not?: Maybe<Scalars['String']>;
  name_lower_not_contains?: Maybe<Scalars['String']>;
  name_lower_not_ends_with?: Maybe<Scalars['String']>;
  name_lower_not_in?: Maybe<Array<Scalars['String']>>;
  name_lower_not_starts_with?: Maybe<Scalars['String']>;
  name_lower_starts_with?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  ngsBased?: Maybe<Scalars['Boolean']>;
  ngsBased_not?: Maybe<Scalars['Boolean']>;
  orders?: Maybe<_OrderFilter>;
  orders_every?: Maybe<_OrderFilter>;
  orders_in?: Maybe<_OrderFilter>;
  orders_none?: Maybe<_OrderFilter>;
  orders_not?: Maybe<_OrderFilter>;
  orders_not_in?: Maybe<_OrderFilter>;
  orders_single?: Maybe<_OrderFilter>;
  orders_some?: Maybe<_OrderFilter>;
};

export enum _Molecular_Lab_TestOrdering {
  AuthorizedDiagnosesAsc = 'authorized_diagnoses_asc',
  AuthorizedDiagnosesDesc = 'authorized_diagnoses_desc',
  DescriptionAsc = 'description_asc',
  DescriptionDesc = 'description_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  NameLowerAsc = 'name_lower_asc',
  NameLowerDesc = 'name_lower_desc',
  NgsBasedAsc = 'ngsBased_asc',
  NgsBasedDesc = 'ngsBased_desc'
}

export type _Molecular_Lab_UserFilter = {
  AND?: Maybe<Array<_Molecular_Lab_UserFilter>>;
  OR?: Maybe<Array<_Molecular_Lab_UserFilter>>;
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagent_not?: Maybe<Scalars['Boolean']>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrders_not?: Maybe<Scalars['Boolean']>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicians_not?: Maybe<Scalars['Boolean']>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTests_not?: Maybe<Scalars['Boolean']>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUsers_not?: Maybe<Scalars['Boolean']>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQC_not?: Maybe<Scalars['Boolean']>;
  first_name?: Maybe<Scalars['String']>;
  first_name_contains?: Maybe<Scalars['String']>;
  first_name_ends_with?: Maybe<Scalars['String']>;
  first_name_gt?: Maybe<Scalars['String']>;
  first_name_gte?: Maybe<Scalars['String']>;
  first_name_in?: Maybe<Array<Scalars['String']>>;
  first_name_lt?: Maybe<Scalars['String']>;
  first_name_lte?: Maybe<Scalars['String']>;
  first_name_not?: Maybe<Scalars['String']>;
  first_name_not_contains?: Maybe<Scalars['String']>;
  first_name_not_ends_with?: Maybe<Scalars['String']>;
  first_name_not_in?: Maybe<Array<Scalars['String']>>;
  first_name_not_starts_with?: Maybe<Scalars['String']>;
  first_name_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  last_name?: Maybe<Scalars['String']>;
  last_name_contains?: Maybe<Scalars['String']>;
  last_name_ends_with?: Maybe<Scalars['String']>;
  last_name_gt?: Maybe<Scalars['String']>;
  last_name_gte?: Maybe<Scalars['String']>;
  last_name_in?: Maybe<Array<Scalars['String']>>;
  last_name_lt?: Maybe<Scalars['String']>;
  last_name_lte?: Maybe<Scalars['String']>;
  last_name_not?: Maybe<Scalars['String']>;
  last_name_not_contains?: Maybe<Scalars['String']>;
  last_name_not_ends_with?: Maybe<Scalars['String']>;
  last_name_not_in?: Maybe<Array<Scalars['String']>>;
  last_name_not_starts_with?: Maybe<Scalars['String']>;
  last_name_starts_with?: Maybe<Scalars['String']>;
  name_lower?: Maybe<Scalars['String']>;
  name_lower_contains?: Maybe<Scalars['String']>;
  name_lower_ends_with?: Maybe<Scalars['String']>;
  name_lower_gt?: Maybe<Scalars['String']>;
  name_lower_gte?: Maybe<Scalars['String']>;
  name_lower_in?: Maybe<Array<Scalars['String']>>;
  name_lower_lt?: Maybe<Scalars['String']>;
  name_lower_lte?: Maybe<Scalars['String']>;
  name_lower_not?: Maybe<Scalars['String']>;
  name_lower_not_contains?: Maybe<Scalars['String']>;
  name_lower_not_ends_with?: Maybe<Scalars['String']>;
  name_lower_not_in?: Maybe<Array<Scalars['String']>>;
  name_lower_not_starts_with?: Maybe<Scalars['String']>;
  name_lower_starts_with?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  password_contains?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_gt?: Maybe<Scalars['String']>;
  password_gte?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_lt?: Maybe<Scalars['String']>;
  password_lte?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  user_name?: Maybe<Scalars['String']>;
  user_name_contains?: Maybe<Scalars['String']>;
  user_name_ends_with?: Maybe<Scalars['String']>;
  user_name_gt?: Maybe<Scalars['String']>;
  user_name_gte?: Maybe<Scalars['String']>;
  user_name_in?: Maybe<Array<Scalars['String']>>;
  user_name_lt?: Maybe<Scalars['String']>;
  user_name_lte?: Maybe<Scalars['String']>;
  user_name_not?: Maybe<Scalars['String']>;
  user_name_not_contains?: Maybe<Scalars['String']>;
  user_name_not_ends_with?: Maybe<Scalars['String']>;
  user_name_not_in?: Maybe<Array<Scalars['String']>>;
  user_name_not_starts_with?: Maybe<Scalars['String']>;
  user_name_starts_with?: Maybe<Scalars['String']>;
};

export enum _Molecular_Lab_UserOrdering {
  CanApproveReagentAsc = 'canApproveReagent_asc',
  CanApproveReagentDesc = 'canApproveReagent_desc',
  CanEditOrdersAsc = 'canEditOrders_asc',
  CanEditOrdersDesc = 'canEditOrders_desc',
  CanEditPhysiciansAsc = 'canEditPhysicians_asc',
  CanEditPhysiciansDesc = 'canEditPhysicians_desc',
  CanEditTestsAsc = 'canEditTests_asc',
  CanEditTestsDesc = 'canEditTests_desc',
  CanEditUsersAsc = 'canEditUsers_asc',
  CanEditUsersDesc = 'canEditUsers_desc',
  CanQcAsc = 'canQC_asc',
  CanQcDesc = 'canQC_desc',
  FirstNameAsc = 'first_name_asc',
  FirstNameDesc = 'first_name_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LastNameAsc = 'last_name_asc',
  LastNameDesc = 'last_name_desc',
  NameLowerAsc = 'name_lower_asc',
  NameLowerDesc = 'name_lower_desc',
  PasswordAsc = 'password_asc',
  PasswordDesc = 'password_desc',
  UserNameAsc = 'user_name_asc',
  UserNameDesc = 'user_name_desc'
}

export type _Order_Information_RequestFilter = {
  AND?: Maybe<Array<_Order_Information_RequestFilter>>;
  OR?: Maybe<Array<_Order_Information_RequestFilter>>;
  field?: Maybe<Order_Information_Request_Fields>;
  field_in?: Maybe<Array<Order_Information_Request_Fields>>;
  field_not?: Maybe<Order_Information_Request_Fields>;
  field_not_in?: Maybe<Array<Order_Information_Request_Fields>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  order?: Maybe<_OrderFilter>;
  order_every?: Maybe<_OrderFilter>;
  order_in?: Maybe<_OrderFilter>;
  order_none?: Maybe<_OrderFilter>;
  order_not?: Maybe<_OrderFilter>;
  order_not_in?: Maybe<_OrderFilter>;
  order_single?: Maybe<_OrderFilter>;
  order_some?: Maybe<_OrderFilter>;
  requested_by?: Maybe<_Molecular_Lab_UserFilter>;
  requested_by_in?: Maybe<_Molecular_Lab_UserFilter>;
  requested_by_not?: Maybe<_Molecular_Lab_UserFilter>;
  requested_by_not_in?: Maybe<_Molecular_Lab_UserFilter>;
  requested_date?: Maybe<Scalars['String']>;
  requested_date_contains?: Maybe<Scalars['String']>;
  requested_date_ends_with?: Maybe<Scalars['String']>;
  requested_date_gt?: Maybe<Scalars['String']>;
  requested_date_gte?: Maybe<Scalars['String']>;
  requested_date_in?: Maybe<Array<Scalars['String']>>;
  requested_date_lt?: Maybe<Scalars['String']>;
  requested_date_lte?: Maybe<Scalars['String']>;
  requested_date_not?: Maybe<Scalars['String']>;
  requested_date_not_contains?: Maybe<Scalars['String']>;
  requested_date_not_ends_with?: Maybe<Scalars['String']>;
  requested_date_not_in?: Maybe<Array<Scalars['String']>>;
  requested_date_not_starts_with?: Maybe<Scalars['String']>;
  requested_date_starts_with?: Maybe<Scalars['String']>;
  resolved_by?: Maybe<_Molecular_Lab_UserFilter>;
  resolved_by_in?: Maybe<_Molecular_Lab_UserFilter>;
  resolved_by_not?: Maybe<_Molecular_Lab_UserFilter>;
  resolved_by_not_in?: Maybe<_Molecular_Lab_UserFilter>;
  resolved_date?: Maybe<Scalars['String']>;
  resolved_date_contains?: Maybe<Scalars['String']>;
  resolved_date_ends_with?: Maybe<Scalars['String']>;
  resolved_date_gt?: Maybe<Scalars['String']>;
  resolved_date_gte?: Maybe<Scalars['String']>;
  resolved_date_in?: Maybe<Array<Scalars['String']>>;
  resolved_date_lt?: Maybe<Scalars['String']>;
  resolved_date_lte?: Maybe<Scalars['String']>;
  resolved_date_not?: Maybe<Scalars['String']>;
  resolved_date_not_contains?: Maybe<Scalars['String']>;
  resolved_date_not_ends_with?: Maybe<Scalars['String']>;
  resolved_date_not_in?: Maybe<Array<Scalars['String']>>;
  resolved_date_not_starts_with?: Maybe<Scalars['String']>;
  resolved_date_starts_with?: Maybe<Scalars['String']>;
};

export enum _Order_Information_RequestOrdering {
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  RequestedDateAsc = 'requested_date_asc',
  RequestedDateDesc = 'requested_date_desc',
  ResolvedDateAsc = 'resolved_date_asc',
  ResolvedDateDesc = 'resolved_date_desc'
}

export type _OrderFilter = {
  AND?: Maybe<Array<_OrderFilter>>;
  OR?: Maybe<Array<_OrderFilter>>;
  attending_physician?: Maybe<_PhysicianFilter>;
  attending_physician_in?: Maybe<_PhysicianFilter>;
  attending_physician_not?: Maybe<_PhysicianFilter>;
  attending_physician_not_in?: Maybe<_PhysicianFilter>;
  case?: Maybe<_CaseFilter>;
  case_in?: Maybe<_CaseFilter>;
  case_not?: Maybe<_CaseFilter>;
  case_not_in?: Maybe<_CaseFilter>;
  comments?: Maybe<Scalars['String']>;
  comments_contains?: Maybe<Scalars['String']>;
  comments_ends_with?: Maybe<Scalars['String']>;
  comments_gt?: Maybe<Scalars['String']>;
  comments_gte?: Maybe<Scalars['String']>;
  comments_in?: Maybe<Array<Scalars['String']>>;
  comments_lt?: Maybe<Scalars['String']>;
  comments_lte?: Maybe<Scalars['String']>;
  comments_not?: Maybe<Scalars['String']>;
  comments_not_contains?: Maybe<Scalars['String']>;
  comments_not_ends_with?: Maybe<Scalars['String']>;
  comments_not_in?: Maybe<Array<Scalars['String']>>;
  comments_not_starts_with?: Maybe<Scalars['String']>;
  comments_starts_with?: Maybe<Scalars['String']>;
  date_of_birth?: Maybe<Scalars['String']>;
  date_of_birth_contains?: Maybe<Scalars['String']>;
  date_of_birth_ends_with?: Maybe<Scalars['String']>;
  date_of_birth_gt?: Maybe<Scalars['String']>;
  date_of_birth_gte?: Maybe<Scalars['String']>;
  date_of_birth_in?: Maybe<Array<Scalars['String']>>;
  date_of_birth_lt?: Maybe<Scalars['String']>;
  date_of_birth_lte?: Maybe<Scalars['String']>;
  date_of_birth_not?: Maybe<Scalars['String']>;
  date_of_birth_not_contains?: Maybe<Scalars['String']>;
  date_of_birth_not_ends_with?: Maybe<Scalars['String']>;
  date_of_birth_not_in?: Maybe<Array<Scalars['String']>>;
  date_of_birth_not_starts_with?: Maybe<Scalars['String']>;
  date_of_birth_starts_with?: Maybe<Scalars['String']>;
  diagnosis?: Maybe<Scalars['String']>;
  diagnosis_contains?: Maybe<Scalars['String']>;
  diagnosis_ends_with?: Maybe<Scalars['String']>;
  diagnosis_gt?: Maybe<Scalars['String']>;
  diagnosis_gte?: Maybe<Scalars['String']>;
  diagnosis_in?: Maybe<Array<Scalars['String']>>;
  diagnosis_lt?: Maybe<Scalars['String']>;
  diagnosis_lte?: Maybe<Scalars['String']>;
  diagnosis_not?: Maybe<Scalars['String']>;
  diagnosis_not_contains?: Maybe<Scalars['String']>;
  diagnosis_not_ends_with?: Maybe<Scalars['String']>;
  diagnosis_not_in?: Maybe<Array<Scalars['String']>>;
  diagnosis_not_starts_with?: Maybe<Scalars['String']>;
  diagnosis_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  information_request?: Maybe<_Order_Information_RequestFilter>;
  information_request_every?: Maybe<_Order_Information_RequestFilter>;
  information_request_in?: Maybe<_Order_Information_RequestFilter>;
  information_request_none?: Maybe<_Order_Information_RequestFilter>;
  information_request_not?: Maybe<_Order_Information_RequestFilter>;
  information_request_not_in?: Maybe<_Order_Information_RequestFilter>;
  information_request_single?: Maybe<_Order_Information_RequestFilter>;
  information_request_some?: Maybe<_Order_Information_RequestFilter>;
  ml_order_id?: Maybe<Scalars['String']>;
  ml_order_id_contains?: Maybe<Scalars['String']>;
  ml_order_id_ends_with?: Maybe<Scalars['String']>;
  ml_order_id_gt?: Maybe<Scalars['String']>;
  ml_order_id_gte?: Maybe<Scalars['String']>;
  ml_order_id_in?: Maybe<Array<Scalars['String']>>;
  ml_order_id_lt?: Maybe<Scalars['String']>;
  ml_order_id_lte?: Maybe<Scalars['String']>;
  ml_order_id_not?: Maybe<Scalars['String']>;
  ml_order_id_not_contains?: Maybe<Scalars['String']>;
  ml_order_id_not_ends_with?: Maybe<Scalars['String']>;
  ml_order_id_not_in?: Maybe<Array<Scalars['String']>>;
  ml_order_id_not_starts_with?: Maybe<Scalars['String']>;
  ml_order_id_starts_with?: Maybe<Scalars['String']>;
  mrn?: Maybe<Scalars['String']>;
  mrn_contains?: Maybe<Scalars['String']>;
  mrn_ends_with?: Maybe<Scalars['String']>;
  mrn_gt?: Maybe<Scalars['String']>;
  mrn_gte?: Maybe<Scalars['String']>;
  mrn_in?: Maybe<Array<Scalars['String']>>;
  mrn_lt?: Maybe<Scalars['String']>;
  mrn_lte?: Maybe<Scalars['String']>;
  mrn_not?: Maybe<Scalars['String']>;
  mrn_not_contains?: Maybe<Scalars['String']>;
  mrn_not_ends_with?: Maybe<Scalars['String']>;
  mrn_not_in?: Maybe<Array<Scalars['String']>>;
  mrn_not_starts_with?: Maybe<Scalars['String']>;
  mrn_starts_with?: Maybe<Scalars['String']>;
  order_date?: Maybe<Scalars['String']>;
  order_date_contains?: Maybe<Scalars['String']>;
  order_date_ends_with?: Maybe<Scalars['String']>;
  order_date_gt?: Maybe<Scalars['String']>;
  order_date_gte?: Maybe<Scalars['String']>;
  order_date_in?: Maybe<Array<Scalars['String']>>;
  order_date_lt?: Maybe<Scalars['String']>;
  order_date_lte?: Maybe<Scalars['String']>;
  order_date_not?: Maybe<Scalars['String']>;
  order_date_not_contains?: Maybe<Scalars['String']>;
  order_date_not_ends_with?: Maybe<Scalars['String']>;
  order_date_not_in?: Maybe<Array<Scalars['String']>>;
  order_date_not_starts_with?: Maybe<Scalars['String']>;
  order_date_starts_with?: Maybe<Scalars['String']>;
  ordered_by?: Maybe<_PhysicianFilter>;
  ordered_by_in?: Maybe<_PhysicianFilter>;
  ordered_by_not?: Maybe<_PhysicianFilter>;
  ordered_by_not_in?: Maybe<_PhysicianFilter>;
  patient_name?: Maybe<Scalars['String']>;
  patient_name_contains?: Maybe<Scalars['String']>;
  patient_name_ends_with?: Maybe<Scalars['String']>;
  patient_name_gt?: Maybe<Scalars['String']>;
  patient_name_gte?: Maybe<Scalars['String']>;
  patient_name_in?: Maybe<Array<Scalars['String']>>;
  patient_name_lt?: Maybe<Scalars['String']>;
  patient_name_lte?: Maybe<Scalars['String']>;
  patient_name_not?: Maybe<Scalars['String']>;
  patient_name_not_contains?: Maybe<Scalars['String']>;
  patient_name_not_ends_with?: Maybe<Scalars['String']>;
  patient_name_not_in?: Maybe<Array<Scalars['String']>>;
  patient_name_not_starts_with?: Maybe<Scalars['String']>;
  patient_name_starts_with?: Maybe<Scalars['String']>;
  received_date?: Maybe<Scalars['String']>;
  received_date_contains?: Maybe<Scalars['String']>;
  received_date_ends_with?: Maybe<Scalars['String']>;
  received_date_gt?: Maybe<Scalars['String']>;
  received_date_gte?: Maybe<Scalars['String']>;
  received_date_in?: Maybe<Array<Scalars['String']>>;
  received_date_lt?: Maybe<Scalars['String']>;
  received_date_lte?: Maybe<Scalars['String']>;
  received_date_not?: Maybe<Scalars['String']>;
  received_date_not_contains?: Maybe<Scalars['String']>;
  received_date_not_ends_with?: Maybe<Scalars['String']>;
  received_date_not_in?: Maybe<Array<Scalars['String']>>;
  received_date_not_starts_with?: Maybe<Scalars['String']>;
  received_date_starts_with?: Maybe<Scalars['String']>;
  received_order_id?: Maybe<Scalars['String']>;
  received_order_id_contains?: Maybe<Scalars['String']>;
  received_order_id_ends_with?: Maybe<Scalars['String']>;
  received_order_id_gt?: Maybe<Scalars['String']>;
  received_order_id_gte?: Maybe<Scalars['String']>;
  received_order_id_in?: Maybe<Array<Scalars['String']>>;
  received_order_id_lt?: Maybe<Scalars['String']>;
  received_order_id_lte?: Maybe<Scalars['String']>;
  received_order_id_not?: Maybe<Scalars['String']>;
  received_order_id_not_contains?: Maybe<Scalars['String']>;
  received_order_id_not_ends_with?: Maybe<Scalars['String']>;
  received_order_id_not_in?: Maybe<Array<Scalars['String']>>;
  received_order_id_not_starts_with?: Maybe<Scalars['String']>;
  received_order_id_starts_with?: Maybe<Scalars['String']>;
  rejected_once?: Maybe<Scalars['Boolean']>;
  rejected_once_not?: Maybe<Scalars['Boolean']>;
  search_string_lower?: Maybe<Scalars['String']>;
  search_string_lower_contains?: Maybe<Scalars['String']>;
  search_string_lower_ends_with?: Maybe<Scalars['String']>;
  search_string_lower_gt?: Maybe<Scalars['String']>;
  search_string_lower_gte?: Maybe<Scalars['String']>;
  search_string_lower_in?: Maybe<Array<Scalars['String']>>;
  search_string_lower_lt?: Maybe<Scalars['String']>;
  search_string_lower_lte?: Maybe<Scalars['String']>;
  search_string_lower_not?: Maybe<Scalars['String']>;
  search_string_lower_not_contains?: Maybe<Scalars['String']>;
  search_string_lower_not_ends_with?: Maybe<Scalars['String']>;
  search_string_lower_not_in?: Maybe<Array<Scalars['String']>>;
  search_string_lower_not_starts_with?: Maybe<Scalars['String']>;
  search_string_lower_starts_with?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['String']>;
  sex_contains?: Maybe<Scalars['String']>;
  sex_ends_with?: Maybe<Scalars['String']>;
  sex_gt?: Maybe<Scalars['String']>;
  sex_gte?: Maybe<Scalars['String']>;
  sex_in?: Maybe<Array<Scalars['String']>>;
  sex_lt?: Maybe<Scalars['String']>;
  sex_lte?: Maybe<Scalars['String']>;
  sex_not?: Maybe<Scalars['String']>;
  sex_not_contains?: Maybe<Scalars['String']>;
  sex_not_ends_with?: Maybe<Scalars['String']>;
  sex_not_in?: Maybe<Array<Scalars['String']>>;
  sex_not_starts_with?: Maybe<Scalars['String']>;
  sex_starts_with?: Maybe<Scalars['String']>;
  status?: Maybe<_StatusUpdateFilter>;
  status_in?: Maybe<_StatusUpdateFilter>;
  status_not?: Maybe<_StatusUpdateFilter>;
  status_not_in?: Maybe<_StatusUpdateFilter>;
  test_ordered?: Maybe<_Molecular_Lab_TestFilter>;
  test_ordered_in?: Maybe<_Molecular_Lab_TestFilter>;
  test_ordered_not?: Maybe<_Molecular_Lab_TestFilter>;
  test_ordered_not_in?: Maybe<_Molecular_Lab_TestFilter>;
};

export enum _OrderOrdering {
  CommentsAsc = 'comments_asc',
  CommentsDesc = 'comments_desc',
  DateOfBirthAsc = 'date_of_birth_asc',
  DateOfBirthDesc = 'date_of_birth_desc',
  DiagnosisAsc = 'diagnosis_asc',
  DiagnosisDesc = 'diagnosis_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  MlOrderIdAsc = 'ml_order_id_asc',
  MlOrderIdDesc = 'ml_order_id_desc',
  MrnAsc = 'mrn_asc',
  MrnDesc = 'mrn_desc',
  OrderDateAsc = 'order_date_asc',
  OrderDateDesc = 'order_date_desc',
  PatientNameAsc = 'patient_name_asc',
  PatientNameDesc = 'patient_name_desc',
  ReceivedDateAsc = 'received_date_asc',
  ReceivedDateDesc = 'received_date_desc',
  ReceivedOrderIdAsc = 'received_order_id_asc',
  ReceivedOrderIdDesc = 'received_order_id_desc',
  RejectedOnceAsc = 'rejected_once_asc',
  RejectedOnceDesc = 'rejected_once_desc',
  SearchStringLowerAsc = 'search_string_lower_asc',
  SearchStringLowerDesc = 'search_string_lower_desc',
  SexAsc = 'sex_asc',
  SexDesc = 'sex_desc'
}

export type _Pathologist_QcFilter = {
  AND?: Maybe<Array<_Pathologist_QcFilter>>;
  OR?: Maybe<Array<_Pathologist_QcFilter>>;
  acceptance_value?: Maybe<Qc_Acceptance_Value>;
  acceptance_value_in?: Maybe<Array<Qc_Acceptance_Value>>;
  acceptance_value_not?: Maybe<Qc_Acceptance_Value>;
  acceptance_value_not_in?: Maybe<Array<Qc_Acceptance_Value>>;
  case?: Maybe<_CaseFilter>;
  case_in?: Maybe<_CaseFilter>;
  case_not?: Maybe<_CaseFilter>;
  case_not_in?: Maybe<_CaseFilter>;
  diagnosis?: Maybe<Scalars['String']>;
  diagnosis_contains?: Maybe<Scalars['String']>;
  diagnosis_ends_with?: Maybe<Scalars['String']>;
  diagnosis_gt?: Maybe<Scalars['String']>;
  diagnosis_gte?: Maybe<Scalars['String']>;
  diagnosis_in?: Maybe<Array<Scalars['String']>>;
  diagnosis_lt?: Maybe<Scalars['String']>;
  diagnosis_lte?: Maybe<Scalars['String']>;
  diagnosis_not?: Maybe<Scalars['String']>;
  diagnosis_not_contains?: Maybe<Scalars['String']>;
  diagnosis_not_ends_with?: Maybe<Scalars['String']>;
  diagnosis_not_in?: Maybe<Array<Scalars['String']>>;
  diagnosis_not_starts_with?: Maybe<Scalars['String']>;
  diagnosis_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  macro_dissection_required?: Maybe<Scalars['Boolean']>;
  macro_dissection_required_not?: Maybe<Scalars['Boolean']>;
  percent_neoplastic_cells?: Maybe<Scalars['Float']>;
  percent_neoplastic_cells_gt?: Maybe<Scalars['Float']>;
  percent_neoplastic_cells_gte?: Maybe<Scalars['Float']>;
  percent_neoplastic_cells_in?: Maybe<Array<Scalars['Float']>>;
  percent_neoplastic_cells_lt?: Maybe<Scalars['Float']>;
  percent_neoplastic_cells_lte?: Maybe<Scalars['Float']>;
  percent_neoplastic_cells_not?: Maybe<Scalars['Float']>;
  percent_neoplastic_cells_not_in?: Maybe<Array<Scalars['Float']>>;
  qc_by?: Maybe<_Molecular_Lab_UserFilter>;
  qc_by_in?: Maybe<_Molecular_Lab_UserFilter>;
  qc_by_not?: Maybe<_Molecular_Lab_UserFilter>;
  qc_by_not_in?: Maybe<_Molecular_Lab_UserFilter>;
  qc_date?: Maybe<Scalars['String']>;
  qc_date_contains?: Maybe<Scalars['String']>;
  qc_date_ends_with?: Maybe<Scalars['String']>;
  qc_date_gt?: Maybe<Scalars['String']>;
  qc_date_gte?: Maybe<Scalars['String']>;
  qc_date_in?: Maybe<Array<Scalars['String']>>;
  qc_date_lt?: Maybe<Scalars['String']>;
  qc_date_lte?: Maybe<Scalars['String']>;
  qc_date_not?: Maybe<Scalars['String']>;
  qc_date_not_contains?: Maybe<Scalars['String']>;
  qc_date_not_ends_with?: Maybe<Scalars['String']>;
  qc_date_not_in?: Maybe<Array<Scalars['String']>>;
  qc_date_not_starts_with?: Maybe<Scalars['String']>;
  qc_date_starts_with?: Maybe<Scalars['String']>;
  sample_size_mm2?: Maybe<Scalars['Float']>;
  sample_size_mm2_gt?: Maybe<Scalars['Float']>;
  sample_size_mm2_gte?: Maybe<Scalars['Float']>;
  sample_size_mm2_in?: Maybe<Array<Scalars['Float']>>;
  sample_size_mm2_lt?: Maybe<Scalars['Float']>;
  sample_size_mm2_lte?: Maybe<Scalars['Float']>;
  sample_size_mm2_not?: Maybe<Scalars['Float']>;
  sample_size_mm2_not_in?: Maybe<Array<Scalars['Float']>>;
};

export enum _Pathologist_QcOrdering {
  AcceptanceValueAsc = 'acceptance_value_asc',
  AcceptanceValueDesc = 'acceptance_value_desc',
  DiagnosisAsc = 'diagnosis_asc',
  DiagnosisDesc = 'diagnosis_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  MacroDissectionRequiredAsc = 'macro_dissection_required_asc',
  MacroDissectionRequiredDesc = 'macro_dissection_required_desc',
  PercentNeoplasticCellsAsc = 'percent_neoplastic_cells_asc',
  PercentNeoplasticCellsDesc = 'percent_neoplastic_cells_desc',
  QcDateAsc = 'qc_date_asc',
  QcDateDesc = 'qc_date_desc',
  SampleSizeMm2Asc = 'sample_size_mm2_asc',
  SampleSizeMm2Desc = 'sample_size_mm2_desc'
}

export type _PhysicianFilter = {
  AND?: Maybe<Array<_PhysicianFilter>>;
  OR?: Maybe<Array<_PhysicianFilter>>;
  badge_id?: Maybe<Scalars['String']>;
  badge_id_contains?: Maybe<Scalars['String']>;
  badge_id_ends_with?: Maybe<Scalars['String']>;
  badge_id_gt?: Maybe<Scalars['String']>;
  badge_id_gte?: Maybe<Scalars['String']>;
  badge_id_in?: Maybe<Array<Scalars['String']>>;
  badge_id_lt?: Maybe<Scalars['String']>;
  badge_id_lte?: Maybe<Scalars['String']>;
  badge_id_not?: Maybe<Scalars['String']>;
  badge_id_not_contains?: Maybe<Scalars['String']>;
  badge_id_not_ends_with?: Maybe<Scalars['String']>;
  badge_id_not_in?: Maybe<Array<Scalars['String']>>;
  badge_id_not_starts_with?: Maybe<Scalars['String']>;
  badge_id_starts_with?: Maybe<Scalars['String']>;
  degrees?: Maybe<Scalars['String']>;
  degrees_contains?: Maybe<Scalars['String']>;
  degrees_ends_with?: Maybe<Scalars['String']>;
  degrees_gt?: Maybe<Scalars['String']>;
  degrees_gte?: Maybe<Scalars['String']>;
  degrees_in?: Maybe<Array<Scalars['String']>>;
  degrees_lt?: Maybe<Scalars['String']>;
  degrees_lte?: Maybe<Scalars['String']>;
  degrees_not?: Maybe<Scalars['String']>;
  degrees_not_contains?: Maybe<Scalars['String']>;
  degrees_not_ends_with?: Maybe<Scalars['String']>;
  degrees_not_in?: Maybe<Array<Scalars['String']>>;
  degrees_not_starts_with?: Maybe<Scalars['String']>;
  degrees_starts_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  first_name_contains?: Maybe<Scalars['String']>;
  first_name_ends_with?: Maybe<Scalars['String']>;
  first_name_gt?: Maybe<Scalars['String']>;
  first_name_gte?: Maybe<Scalars['String']>;
  first_name_in?: Maybe<Array<Scalars['String']>>;
  first_name_lt?: Maybe<Scalars['String']>;
  first_name_lte?: Maybe<Scalars['String']>;
  first_name_not?: Maybe<Scalars['String']>;
  first_name_not_contains?: Maybe<Scalars['String']>;
  first_name_not_ends_with?: Maybe<Scalars['String']>;
  first_name_not_in?: Maybe<Array<Scalars['String']>>;
  first_name_not_starts_with?: Maybe<Scalars['String']>;
  first_name_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  last_name?: Maybe<Scalars['String']>;
  last_name_contains?: Maybe<Scalars['String']>;
  last_name_ends_with?: Maybe<Scalars['String']>;
  last_name_gt?: Maybe<Scalars['String']>;
  last_name_gte?: Maybe<Scalars['String']>;
  last_name_in?: Maybe<Array<Scalars['String']>>;
  last_name_lt?: Maybe<Scalars['String']>;
  last_name_lte?: Maybe<Scalars['String']>;
  last_name_not?: Maybe<Scalars['String']>;
  last_name_not_contains?: Maybe<Scalars['String']>;
  last_name_not_ends_with?: Maybe<Scalars['String']>;
  last_name_not_in?: Maybe<Array<Scalars['String']>>;
  last_name_not_starts_with?: Maybe<Scalars['String']>;
  last_name_starts_with?: Maybe<Scalars['String']>;
  name_lower?: Maybe<Scalars['String']>;
  name_lower_contains?: Maybe<Scalars['String']>;
  name_lower_ends_with?: Maybe<Scalars['String']>;
  name_lower_gt?: Maybe<Scalars['String']>;
  name_lower_gte?: Maybe<Scalars['String']>;
  name_lower_in?: Maybe<Array<Scalars['String']>>;
  name_lower_lt?: Maybe<Scalars['String']>;
  name_lower_lte?: Maybe<Scalars['String']>;
  name_lower_not?: Maybe<Scalars['String']>;
  name_lower_not_contains?: Maybe<Scalars['String']>;
  name_lower_not_ends_with?: Maybe<Scalars['String']>;
  name_lower_not_in?: Maybe<Array<Scalars['String']>>;
  name_lower_not_starts_with?: Maybe<Scalars['String']>;
  name_lower_starts_with?: Maybe<Scalars['String']>;
  orders?: Maybe<_OrderFilter>;
  orders_every?: Maybe<_OrderFilter>;
  orders_in?: Maybe<_OrderFilter>;
  orders_none?: Maybe<_OrderFilter>;
  orders_not?: Maybe<_OrderFilter>;
  orders_not_in?: Maybe<_OrderFilter>;
  orders_single?: Maybe<_OrderFilter>;
  orders_some?: Maybe<_OrderFilter>;
  phone_number?: Maybe<Scalars['String']>;
  phone_number_contains?: Maybe<Scalars['String']>;
  phone_number_ends_with?: Maybe<Scalars['String']>;
  phone_number_gt?: Maybe<Scalars['String']>;
  phone_number_gte?: Maybe<Scalars['String']>;
  phone_number_in?: Maybe<Array<Scalars['String']>>;
  phone_number_lt?: Maybe<Scalars['String']>;
  phone_number_lte?: Maybe<Scalars['String']>;
  phone_number_not?: Maybe<Scalars['String']>;
  phone_number_not_contains?: Maybe<Scalars['String']>;
  phone_number_not_ends_with?: Maybe<Scalars['String']>;
  phone_number_not_in?: Maybe<Array<Scalars['String']>>;
  phone_number_not_starts_with?: Maybe<Scalars['String']>;
  phone_number_starts_with?: Maybe<Scalars['String']>;
};

export enum _PhysicianOrdering {
  BadgeIdAsc = 'badge_id_asc',
  BadgeIdDesc = 'badge_id_desc',
  DegreesAsc = 'degrees_asc',
  DegreesDesc = 'degrees_desc',
  EmailAsc = 'email_asc',
  EmailDesc = 'email_desc',
  FirstNameAsc = 'first_name_asc',
  FirstNameDesc = 'first_name_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LastNameAsc = 'last_name_asc',
  LastNameDesc = 'last_name_desc',
  NameLowerAsc = 'name_lower_asc',
  NameLowerDesc = 'name_lower_desc',
  PhoneNumberAsc = 'phone_number_asc',
  PhoneNumberDesc = 'phone_number_desc'
}

export type _Protocol_StepFilter = {
  AND?: Maybe<Array<_Protocol_StepFilter>>;
  OR?: Maybe<Array<_Protocol_StepFilter>>;
  completed_by?: Maybe<_Molecular_Lab_UserFilter>;
  completed_by_in?: Maybe<_Molecular_Lab_UserFilter>;
  completed_by_not?: Maybe<_Molecular_Lab_UserFilter>;
  completed_by_not_in?: Maybe<_Molecular_Lab_UserFilter>;
  completed_date?: Maybe<Scalars['String']>;
  completed_date_contains?: Maybe<Scalars['String']>;
  completed_date_ends_with?: Maybe<Scalars['String']>;
  completed_date_gt?: Maybe<Scalars['String']>;
  completed_date_gte?: Maybe<Scalars['String']>;
  completed_date_in?: Maybe<Array<Scalars['String']>>;
  completed_date_lt?: Maybe<Scalars['String']>;
  completed_date_lte?: Maybe<Scalars['String']>;
  completed_date_not?: Maybe<Scalars['String']>;
  completed_date_not_contains?: Maybe<Scalars['String']>;
  completed_date_not_ends_with?: Maybe<Scalars['String']>;
  completed_date_not_in?: Maybe<Array<Scalars['String']>>;
  completed_date_not_starts_with?: Maybe<Scalars['String']>;
  completed_date_starts_with?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_gt?: Maybe<Scalars['String']>;
  description_gte?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Scalars['String']>>;
  description_lt?: Maybe<Scalars['String']>;
  description_lte?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_not_in?: Maybe<Array<Scalars['String']>>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  next_step?: Maybe<_Protocol_StepFilter>;
  next_step_in?: Maybe<_Protocol_StepFilter>;
  next_step_not?: Maybe<_Protocol_StepFilter>;
  next_step_not_in?: Maybe<_Protocol_StepFilter>;
  reagentLots_used?: Maybe<_ReagentLotFilter>;
  reagentLots_used_every?: Maybe<_ReagentLotFilter>;
  reagentLots_used_in?: Maybe<_ReagentLotFilter>;
  reagentLots_used_none?: Maybe<_ReagentLotFilter>;
  reagentLots_used_not?: Maybe<_ReagentLotFilter>;
  reagentLots_used_not_in?: Maybe<_ReagentLotFilter>;
  reagentLots_used_single?: Maybe<_ReagentLotFilter>;
  reagentLots_used_some?: Maybe<_ReagentLotFilter>;
  reagents_required?: Maybe<_ReagentFilter>;
  reagents_required_every?: Maybe<_ReagentFilter>;
  reagents_required_in?: Maybe<_ReagentFilter>;
  reagents_required_none?: Maybe<_ReagentFilter>;
  reagents_required_not?: Maybe<_ReagentFilter>;
  reagents_required_not_in?: Maybe<_ReagentFilter>;
  reagents_required_single?: Maybe<_ReagentFilter>;
  reagents_required_some?: Maybe<_ReagentFilter>;
  started_by?: Maybe<_Molecular_Lab_UserFilter>;
  started_by_in?: Maybe<_Molecular_Lab_UserFilter>;
  started_by_not?: Maybe<_Molecular_Lab_UserFilter>;
  started_by_not_in?: Maybe<_Molecular_Lab_UserFilter>;
  started_date?: Maybe<Scalars['String']>;
  started_date_contains?: Maybe<Scalars['String']>;
  started_date_ends_with?: Maybe<Scalars['String']>;
  started_date_gt?: Maybe<Scalars['String']>;
  started_date_gte?: Maybe<Scalars['String']>;
  started_date_in?: Maybe<Array<Scalars['String']>>;
  started_date_lt?: Maybe<Scalars['String']>;
  started_date_lte?: Maybe<Scalars['String']>;
  started_date_not?: Maybe<Scalars['String']>;
  started_date_not_contains?: Maybe<Scalars['String']>;
  started_date_not_ends_with?: Maybe<Scalars['String']>;
  started_date_not_in?: Maybe<Array<Scalars['String']>>;
  started_date_not_starts_with?: Maybe<Scalars['String']>;
  started_date_starts_with?: Maybe<Scalars['String']>;
};

export enum _Protocol_StepOrdering {
  CompletedDateAsc = 'completed_date_asc',
  CompletedDateDesc = 'completed_date_desc',
  DescriptionAsc = 'description_asc',
  DescriptionDesc = 'description_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  StartedDateAsc = 'started_date_asc',
  StartedDateDesc = 'started_date_desc'
}

export type _ReagentFilter = {
  AND?: Maybe<Array<_ReagentFilter>>;
  OR?: Maybe<Array<_ReagentFilter>>;
  current_lot?: Maybe<_ReagentLotFilter>;
  current_lot_in?: Maybe<_ReagentLotFilter>;
  current_lot_not?: Maybe<_ReagentLotFilter>;
  current_lot_not_in?: Maybe<_ReagentLotFilter>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  instrument?: Maybe<_InstrumentFilter>;
  instrument_in?: Maybe<_InstrumentFilter>;
  instrument_not?: Maybe<_InstrumentFilter>;
  instrument_not_in?: Maybe<_InstrumentFilter>;
  lots?: Maybe<_ReagentLotFilter>;
  lots_every?: Maybe<_ReagentLotFilter>;
  lots_in?: Maybe<_ReagentLotFilter>;
  lots_none?: Maybe<_ReagentLotFilter>;
  lots_not?: Maybe<_ReagentLotFilter>;
  lots_not_in?: Maybe<_ReagentLotFilter>;
  lots_single?: Maybe<_ReagentLotFilter>;
  lots_some?: Maybe<_ReagentLotFilter>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  tests?: Maybe<_Molecular_Lab_TestFilter>;
  tests_every?: Maybe<_Molecular_Lab_TestFilter>;
  tests_in?: Maybe<_Molecular_Lab_TestFilter>;
  tests_none?: Maybe<_Molecular_Lab_TestFilter>;
  tests_not?: Maybe<_Molecular_Lab_TestFilter>;
  tests_not_in?: Maybe<_Molecular_Lab_TestFilter>;
  tests_single?: Maybe<_Molecular_Lab_TestFilter>;
  tests_some?: Maybe<_Molecular_Lab_TestFilter>;
};

export type _ReagentLotFilter = {
  AND?: Maybe<Array<_ReagentLotFilter>>;
  OR?: Maybe<Array<_ReagentLotFilter>>;
  approved_by?: Maybe<_Molecular_Lab_UserFilter>;
  approved_by_in?: Maybe<_Molecular_Lab_UserFilter>;
  approved_by_not?: Maybe<_Molecular_Lab_UserFilter>;
  approved_by_not_in?: Maybe<_Molecular_Lab_UserFilter>;
  approved_date?: Maybe<Scalars['String']>;
  approved_date_contains?: Maybe<Scalars['String']>;
  approved_date_ends_with?: Maybe<Scalars['String']>;
  approved_date_gt?: Maybe<Scalars['String']>;
  approved_date_gte?: Maybe<Scalars['String']>;
  approved_date_in?: Maybe<Array<Scalars['String']>>;
  approved_date_lt?: Maybe<Scalars['String']>;
  approved_date_lte?: Maybe<Scalars['String']>;
  approved_date_not?: Maybe<Scalars['String']>;
  approved_date_not_contains?: Maybe<Scalars['String']>;
  approved_date_not_ends_with?: Maybe<Scalars['String']>;
  approved_date_not_in?: Maybe<Array<Scalars['String']>>;
  approved_date_not_starts_with?: Maybe<Scalars['String']>;
  approved_date_starts_with?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['String']>;
  expiration_date_contains?: Maybe<Scalars['String']>;
  expiration_date_ends_with?: Maybe<Scalars['String']>;
  expiration_date_gt?: Maybe<Scalars['String']>;
  expiration_date_gte?: Maybe<Scalars['String']>;
  expiration_date_in?: Maybe<Array<Scalars['String']>>;
  expiration_date_lt?: Maybe<Scalars['String']>;
  expiration_date_lte?: Maybe<Scalars['String']>;
  expiration_date_not?: Maybe<Scalars['String']>;
  expiration_date_not_contains?: Maybe<Scalars['String']>;
  expiration_date_not_ends_with?: Maybe<Scalars['String']>;
  expiration_date_not_in?: Maybe<Array<Scalars['String']>>;
  expiration_date_not_starts_with?: Maybe<Scalars['String']>;
  expiration_date_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  qc_by?: Maybe<_Molecular_Lab_UserFilter>;
  qc_by_in?: Maybe<_Molecular_Lab_UserFilter>;
  qc_by_not?: Maybe<_Molecular_Lab_UserFilter>;
  qc_by_not_in?: Maybe<_Molecular_Lab_UserFilter>;
  qc_date?: Maybe<Scalars['String']>;
  qc_date_contains?: Maybe<Scalars['String']>;
  qc_date_ends_with?: Maybe<Scalars['String']>;
  qc_date_gt?: Maybe<Scalars['String']>;
  qc_date_gte?: Maybe<Scalars['String']>;
  qc_date_in?: Maybe<Array<Scalars['String']>>;
  qc_date_lt?: Maybe<Scalars['String']>;
  qc_date_lte?: Maybe<Scalars['String']>;
  qc_date_not?: Maybe<Scalars['String']>;
  qc_date_not_contains?: Maybe<Scalars['String']>;
  qc_date_not_ends_with?: Maybe<Scalars['String']>;
  qc_date_not_in?: Maybe<Array<Scalars['String']>>;
  qc_date_not_starts_with?: Maybe<Scalars['String']>;
  qc_date_starts_with?: Maybe<Scalars['String']>;
  reagent?: Maybe<_ReagentFilter>;
  reagent_in?: Maybe<_ReagentFilter>;
  reagent_not?: Maybe<_ReagentFilter>;
  reagent_not_in?: Maybe<_ReagentFilter>;
  received_by?: Maybe<_Molecular_Lab_UserFilter>;
  received_by_in?: Maybe<_Molecular_Lab_UserFilter>;
  received_by_not?: Maybe<_Molecular_Lab_UserFilter>;
  received_by_not_in?: Maybe<_Molecular_Lab_UserFilter>;
  received_date?: Maybe<Scalars['String']>;
  received_date_contains?: Maybe<Scalars['String']>;
  received_date_ends_with?: Maybe<Scalars['String']>;
  received_date_gt?: Maybe<Scalars['String']>;
  received_date_gte?: Maybe<Scalars['String']>;
  received_date_in?: Maybe<Array<Scalars['String']>>;
  received_date_lt?: Maybe<Scalars['String']>;
  received_date_lte?: Maybe<Scalars['String']>;
  received_date_not?: Maybe<Scalars['String']>;
  received_date_not_contains?: Maybe<Scalars['String']>;
  received_date_not_ends_with?: Maybe<Scalars['String']>;
  received_date_not_in?: Maybe<Array<Scalars['String']>>;
  received_date_not_starts_with?: Maybe<Scalars['String']>;
  received_date_starts_with?: Maybe<Scalars['String']>;
  status?: Maybe<Reagent_Status>;
  status_in?: Maybe<Array<Reagent_Status>>;
  status_not?: Maybe<Reagent_Status>;
  status_not_in?: Maybe<Array<Reagent_Status>>;
};

export enum _ReagentLotOrdering {
  ApprovedDateAsc = 'approved_date_asc',
  ApprovedDateDesc = 'approved_date_desc',
  ExpirationDateAsc = 'expiration_date_asc',
  ExpirationDateDesc = 'expiration_date_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  QcDateAsc = 'qc_date_asc',
  QcDateDesc = 'qc_date_desc',
  ReceivedDateAsc = 'received_date_asc',
  ReceivedDateDesc = 'received_date_desc',
  StatusAsc = 'status_asc',
  StatusDesc = 'status_desc'
}

export enum _ReagentOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _Sample_TypeFilter = {
  AND?: Maybe<Array<_Sample_TypeFilter>>;
  OR?: Maybe<Array<_Sample_TypeFilter>>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_lt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  requires_pathologist_qc?: Maybe<Scalars['Boolean']>;
  requires_pathologist_qc_not?: Maybe<Scalars['Boolean']>;
};

export enum _Sample_TypeOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  RequiresPathologistQcAsc = 'requires_pathologist_qc_asc',
  RequiresPathologistQcDesc = 'requires_pathologist_qc_desc'
}

export type _SampleFilter = {
  AND?: Maybe<Array<_SampleFilter>>;
  OR?: Maybe<Array<_SampleFilter>>;
  case?: Maybe<_CaseFilter>;
  case_in?: Maybe<_CaseFilter>;
  case_not?: Maybe<_CaseFilter>;
  case_not_in?: Maybe<_CaseFilter>;
  collected_date?: Maybe<Scalars['String']>;
  collected_date_contains?: Maybe<Scalars['String']>;
  collected_date_ends_with?: Maybe<Scalars['String']>;
  collected_date_gt?: Maybe<Scalars['String']>;
  collected_date_gte?: Maybe<Scalars['String']>;
  collected_date_in?: Maybe<Array<Scalars['String']>>;
  collected_date_lt?: Maybe<Scalars['String']>;
  collected_date_lte?: Maybe<Scalars['String']>;
  collected_date_not?: Maybe<Scalars['String']>;
  collected_date_not_contains?: Maybe<Scalars['String']>;
  collected_date_not_ends_with?: Maybe<Scalars['String']>;
  collected_date_not_in?: Maybe<Array<Scalars['String']>>;
  collected_date_not_starts_with?: Maybe<Scalars['String']>;
  collected_date_starts_with?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
  comments_contains?: Maybe<Scalars['String']>;
  comments_ends_with?: Maybe<Scalars['String']>;
  comments_gt?: Maybe<Scalars['String']>;
  comments_gte?: Maybe<Scalars['String']>;
  comments_in?: Maybe<Array<Scalars['String']>>;
  comments_lt?: Maybe<Scalars['String']>;
  comments_lte?: Maybe<Scalars['String']>;
  comments_not?: Maybe<Scalars['String']>;
  comments_not_contains?: Maybe<Scalars['String']>;
  comments_not_ends_with?: Maybe<Scalars['String']>;
  comments_not_in?: Maybe<Array<Scalars['String']>>;
  comments_not_starts_with?: Maybe<Scalars['String']>;
  comments_starts_with?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  ml_order_id?: Maybe<Scalars['String']>;
  ml_order_id_contains?: Maybe<Scalars['String']>;
  ml_order_id_ends_with?: Maybe<Scalars['String']>;
  ml_order_id_gt?: Maybe<Scalars['String']>;
  ml_order_id_gte?: Maybe<Scalars['String']>;
  ml_order_id_in?: Maybe<Array<Scalars['String']>>;
  ml_order_id_lt?: Maybe<Scalars['String']>;
  ml_order_id_lte?: Maybe<Scalars['String']>;
  ml_order_id_not?: Maybe<Scalars['String']>;
  ml_order_id_not_contains?: Maybe<Scalars['String']>;
  ml_order_id_not_ends_with?: Maybe<Scalars['String']>;
  ml_order_id_not_in?: Maybe<Array<Scalars['String']>>;
  ml_order_id_not_starts_with?: Maybe<Scalars['String']>;
  ml_order_id_starts_with?: Maybe<Scalars['String']>;
  mrn?: Maybe<Scalars['String']>;
  mrn_contains?: Maybe<Scalars['String']>;
  mrn_ends_with?: Maybe<Scalars['String']>;
  mrn_gt?: Maybe<Scalars['String']>;
  mrn_gte?: Maybe<Scalars['String']>;
  mrn_in?: Maybe<Array<Scalars['String']>>;
  mrn_lt?: Maybe<Scalars['String']>;
  mrn_lte?: Maybe<Scalars['String']>;
  mrn_not?: Maybe<Scalars['String']>;
  mrn_not_contains?: Maybe<Scalars['String']>;
  mrn_not_ends_with?: Maybe<Scalars['String']>;
  mrn_not_in?: Maybe<Array<Scalars['String']>>;
  mrn_not_starts_with?: Maybe<Scalars['String']>;
  mrn_starts_with?: Maybe<Scalars['String']>;
  ordered_by?: Maybe<_PhysicianFilter>;
  ordered_by_in?: Maybe<_PhysicianFilter>;
  ordered_by_not?: Maybe<_PhysicianFilter>;
  ordered_by_not_in?: Maybe<_PhysicianFilter>;
  pathologist_qc?: Maybe<_Pathologist_QcFilter>;
  pathologist_qc_in?: Maybe<_Pathologist_QcFilter>;
  pathologist_qc_not?: Maybe<_Pathologist_QcFilter>;
  pathologist_qc_not_in?: Maybe<_Pathologist_QcFilter>;
  patient_name?: Maybe<Scalars['String']>;
  patient_name_contains?: Maybe<Scalars['String']>;
  patient_name_ends_with?: Maybe<Scalars['String']>;
  patient_name_gt?: Maybe<Scalars['String']>;
  patient_name_gte?: Maybe<Scalars['String']>;
  patient_name_in?: Maybe<Array<Scalars['String']>>;
  patient_name_lt?: Maybe<Scalars['String']>;
  patient_name_lte?: Maybe<Scalars['String']>;
  patient_name_not?: Maybe<Scalars['String']>;
  patient_name_not_contains?: Maybe<Scalars['String']>;
  patient_name_not_ends_with?: Maybe<Scalars['String']>;
  patient_name_not_in?: Maybe<Array<Scalars['String']>>;
  patient_name_not_starts_with?: Maybe<Scalars['String']>;
  patient_name_starts_with?: Maybe<Scalars['String']>;
  received_date?: Maybe<Scalars['String']>;
  received_date_contains?: Maybe<Scalars['String']>;
  received_date_ends_with?: Maybe<Scalars['String']>;
  received_date_gt?: Maybe<Scalars['String']>;
  received_date_gte?: Maybe<Scalars['String']>;
  received_date_in?: Maybe<Array<Scalars['String']>>;
  received_date_lt?: Maybe<Scalars['String']>;
  received_date_lte?: Maybe<Scalars['String']>;
  received_date_not?: Maybe<Scalars['String']>;
  received_date_not_contains?: Maybe<Scalars['String']>;
  received_date_not_ends_with?: Maybe<Scalars['String']>;
  received_date_not_in?: Maybe<Array<Scalars['String']>>;
  received_date_not_starts_with?: Maybe<Scalars['String']>;
  received_date_starts_with?: Maybe<Scalars['String']>;
  received_order_id?: Maybe<Scalars['String']>;
  received_order_id_contains?: Maybe<Scalars['String']>;
  received_order_id_ends_with?: Maybe<Scalars['String']>;
  received_order_id_gt?: Maybe<Scalars['String']>;
  received_order_id_gte?: Maybe<Scalars['String']>;
  received_order_id_in?: Maybe<Array<Scalars['String']>>;
  received_order_id_lt?: Maybe<Scalars['String']>;
  received_order_id_lte?: Maybe<Scalars['String']>;
  received_order_id_not?: Maybe<Scalars['String']>;
  received_order_id_not_contains?: Maybe<Scalars['String']>;
  received_order_id_not_ends_with?: Maybe<Scalars['String']>;
  received_order_id_not_in?: Maybe<Array<Scalars['String']>>;
  received_order_id_not_starts_with?: Maybe<Scalars['String']>;
  received_order_id_starts_with?: Maybe<Scalars['String']>;
  sample_id?: Maybe<Scalars['String']>;
  sample_id_contains?: Maybe<Scalars['String']>;
  sample_id_ends_with?: Maybe<Scalars['String']>;
  sample_id_gt?: Maybe<Scalars['String']>;
  sample_id_gte?: Maybe<Scalars['String']>;
  sample_id_in?: Maybe<Array<Scalars['String']>>;
  sample_id_lt?: Maybe<Scalars['String']>;
  sample_id_lte?: Maybe<Scalars['String']>;
  sample_id_not?: Maybe<Scalars['String']>;
  sample_id_not_contains?: Maybe<Scalars['String']>;
  sample_id_not_ends_with?: Maybe<Scalars['String']>;
  sample_id_not_in?: Maybe<Array<Scalars['String']>>;
  sample_id_not_starts_with?: Maybe<Scalars['String']>;
  sample_id_starts_with?: Maybe<Scalars['String']>;
  sample_location?: Maybe<Scalars['String']>;
  sample_location_contains?: Maybe<Scalars['String']>;
  sample_location_ends_with?: Maybe<Scalars['String']>;
  sample_location_gt?: Maybe<Scalars['String']>;
  sample_location_gte?: Maybe<Scalars['String']>;
  sample_location_in?: Maybe<Array<Scalars['String']>>;
  sample_location_lt?: Maybe<Scalars['String']>;
  sample_location_lte?: Maybe<Scalars['String']>;
  sample_location_not?: Maybe<Scalars['String']>;
  sample_location_not_contains?: Maybe<Scalars['String']>;
  sample_location_not_ends_with?: Maybe<Scalars['String']>;
  sample_location_not_in?: Maybe<Array<Scalars['String']>>;
  sample_location_not_starts_with?: Maybe<Scalars['String']>;
  sample_location_starts_with?: Maybe<Scalars['String']>;
  sample_type?: Maybe<_Sample_TypeFilter>;
  sample_type_in?: Maybe<_Sample_TypeFilter>;
  sample_type_not?: Maybe<_Sample_TypeFilter>;
  sample_type_not_in?: Maybe<_Sample_TypeFilter>;
  search_string_lower?: Maybe<Scalars['String']>;
  search_string_lower_contains?: Maybe<Scalars['String']>;
  search_string_lower_ends_with?: Maybe<Scalars['String']>;
  search_string_lower_gt?: Maybe<Scalars['String']>;
  search_string_lower_gte?: Maybe<Scalars['String']>;
  search_string_lower_in?: Maybe<Array<Scalars['String']>>;
  search_string_lower_lt?: Maybe<Scalars['String']>;
  search_string_lower_lte?: Maybe<Scalars['String']>;
  search_string_lower_not?: Maybe<Scalars['String']>;
  search_string_lower_not_contains?: Maybe<Scalars['String']>;
  search_string_lower_not_ends_with?: Maybe<Scalars['String']>;
  search_string_lower_not_in?: Maybe<Array<Scalars['String']>>;
  search_string_lower_not_starts_with?: Maybe<Scalars['String']>;
  search_string_lower_starts_with?: Maybe<Scalars['String']>;
  status?: Maybe<_StatusUpdateFilter>;
  status_in?: Maybe<_StatusUpdateFilter>;
  status_not?: Maybe<_StatusUpdateFilter>;
  status_not_in?: Maybe<_StatusUpdateFilter>;
};

export enum _SampleOrdering {
  CollectedDateAsc = 'collected_date_asc',
  CollectedDateDesc = 'collected_date_desc',
  CommentsAsc = 'comments_asc',
  CommentsDesc = 'comments_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  MlOrderIdAsc = 'ml_order_id_asc',
  MlOrderIdDesc = 'ml_order_id_desc',
  MrnAsc = 'mrn_asc',
  MrnDesc = 'mrn_desc',
  PatientNameAsc = 'patient_name_asc',
  PatientNameDesc = 'patient_name_desc',
  ReceivedDateAsc = 'received_date_asc',
  ReceivedDateDesc = 'received_date_desc',
  ReceivedOrderIdAsc = 'received_order_id_asc',
  ReceivedOrderIdDesc = 'received_order_id_desc',
  SampleIdAsc = 'sample_id_asc',
  SampleIdDesc = 'sample_id_desc',
  SampleLocationAsc = 'sample_location_asc',
  SampleLocationDesc = 'sample_location_desc',
  SearchStringLowerAsc = 'search_string_lower_asc',
  SearchStringLowerDesc = 'search_string_lower_desc'
}

export type _StatusUpdateFilter = {
  AND?: Maybe<Array<_StatusUpdateFilter>>;
  OR?: Maybe<Array<_StatusUpdateFilter>>;
  by?: Maybe<_Molecular_Lab_UserFilter>;
  by_in?: Maybe<_Molecular_Lab_UserFilter>;
  by_not?: Maybe<_Molecular_Lab_UserFilter>;
  by_not_in?: Maybe<_Molecular_Lab_UserFilter>;
  comments?: Maybe<Scalars['String']>;
  comments_contains?: Maybe<Scalars['String']>;
  comments_ends_with?: Maybe<Scalars['String']>;
  comments_gt?: Maybe<Scalars['String']>;
  comments_gte?: Maybe<Scalars['String']>;
  comments_in?: Maybe<Array<Scalars['String']>>;
  comments_lt?: Maybe<Scalars['String']>;
  comments_lte?: Maybe<Scalars['String']>;
  comments_not?: Maybe<Scalars['String']>;
  comments_not_contains?: Maybe<Scalars['String']>;
  comments_not_ends_with?: Maybe<Scalars['String']>;
  comments_not_in?: Maybe<Array<Scalars['String']>>;
  comments_not_starts_with?: Maybe<Scalars['String']>;
  comments_starts_with?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  date_contains?: Maybe<Scalars['String']>;
  date_ends_with?: Maybe<Scalars['String']>;
  date_gt?: Maybe<Scalars['String']>;
  date_gte?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Scalars['String']>>;
  date_lt?: Maybe<Scalars['String']>;
  date_lte?: Maybe<Scalars['String']>;
  date_not?: Maybe<Scalars['String']>;
  date_not_contains?: Maybe<Scalars['String']>;
  date_not_ends_with?: Maybe<Scalars['String']>;
  date_not_in?: Maybe<Array<Scalars['String']>>;
  date_not_starts_with?: Maybe<Scalars['String']>;
  date_starts_with?: Maybe<Scalars['String']>;
  hasStatus?: Maybe<_HasStatusFilter>;
  hasStatus_in?: Maybe<_HasStatusFilter>;
  hasStatus_not?: Maybe<_HasStatusFilter>;
  hasStatus_not_in?: Maybe<_HasStatusFilter>;
  id?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  previousStatus?: Maybe<_StatusUpdateFilter>;
  previousStatus_in?: Maybe<_StatusUpdateFilter>;
  previousStatus_not?: Maybe<_StatusUpdateFilter>;
  previousStatus_not_in?: Maybe<_StatusUpdateFilter>;
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
  rejected_reason_in?: Maybe<Array<Sample_Rejection_Reason_Fields>>;
  rejected_reason_not?: Maybe<Sample_Rejection_Reason_Fields>;
  rejected_reason_not_in?: Maybe<Array<Sample_Rejection_Reason_Fields>>;
  status?: Maybe<AcceptedStatus>;
  status_in?: Maybe<Array<AcceptedStatus>>;
  status_not?: Maybe<AcceptedStatus>;
  status_not_in?: Maybe<Array<AcceptedStatus>>;
};

export enum _StatusUpdateOrdering {
  CommentsAsc = 'comments_asc',
  CommentsDesc = 'comments_desc',
  DateAsc = 'date_asc',
  DateDesc = 'date_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  RejectedReasonAsc = 'rejected_reason_asc',
  RejectedReasonDesc = 'rejected_reason_desc',
  StatusAsc = 'status_asc',
  StatusDesc = 'status_desc'
}

export enum AcceptedStatus {
  Accepted = 'accepted',
  CaseCreated = 'case_created',
  NotReady = 'not_ready',
  ReadyForQc = 'ready_for_qc',
  Rejected = 'rejected',
  SampleRejectionResolved = 'sample_rejection_resolved'
}

export type Assay = {
   __typename?: 'Assay';
  _id?: Maybe<Scalars['Long']>;
  case?: Maybe<Case>;
  id: Scalars['ID'];
  name: Scalars['String'];
  protocol_steps: Array<Maybe<Protocol_Step>>;
  start: Protocol_Step;
  test: Molecular_Lab_Test;
};


export type AssayCaseArgs = {
  created_date?: Maybe<Scalars['String']>;
  created_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_CaseFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_CaseOrdering>>>;
};


export type AssayProtocol_StepsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  completed_date?: Maybe<Scalars['String']>;
  completed_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Protocol_StepFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Protocol_StepOrdering>>>;
  started_date?: Maybe<Scalars['String']>;
  started_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type AssayStartArgs = {
  completed_date?: Maybe<Scalars['String']>;
  completed_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Protocol_StepFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Protocol_StepOrdering>>>;
  started_date?: Maybe<Scalars['String']>;
  started_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type AssayTestArgs = {
  authorized_diagnoses?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorized_diagnosess?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  description?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Molecular_Lab_TestFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  ngsBased?: Maybe<Scalars['Boolean']>;
  ngsBaseds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_TestOrdering>>>;
};

export type Case = {
   __typename?: 'Case';
  _id?: Maybe<Scalars['Long']>;
  assays: Array<Maybe<Assay>>;
  created_by: Molecular_Lab_User;
  created_date: Scalars['String'];
  id: Scalars['ID'];
  order: Order;
  sample: Sample;
};


export type CaseAssaysArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AssayFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AssayOrdering>>>;
};


export type CaseCreated_ByArgs = {
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CaseOrderArgs = {
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_of_birth?: Maybe<Scalars['String']>;
  date_of_births?: Maybe<Array<Maybe<Scalars['String']>>>;
  diagnosis?: Maybe<Scalars['String']>;
  diagnosiss?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OrderFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ml_order_id?: Maybe<Scalars['String']>;
  ml_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  mrn?: Maybe<Scalars['String']>;
  mrns?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OrderOrdering>>>;
  order_date?: Maybe<Scalars['String']>;
  order_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  patient_name?: Maybe<Scalars['String']>;
  patient_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_order_id?: Maybe<Scalars['String']>;
  received_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  rejected_once?: Maybe<Scalars['Boolean']>;
  rejected_onces?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  search_string_lower?: Maybe<Scalars['String']>;
  search_string_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  sex?: Maybe<Scalars['String']>;
  sexs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type CaseSampleArgs = {
  collected_date?: Maybe<Scalars['String']>;
  collected_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_SampleFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ml_order_id?: Maybe<Scalars['String']>;
  ml_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  mrn?: Maybe<Scalars['String']>;
  mrns?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_SampleOrdering>>>;
  patient_name?: Maybe<Scalars['String']>;
  patient_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_order_id?: Maybe<Scalars['String']>;
  received_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  sample_id?: Maybe<Scalars['String']>;
  sample_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  sample_location?: Maybe<Scalars['String']>;
  sample_locations?: Maybe<Array<Maybe<Scalars['String']>>>;
  search_string_lower?: Maybe<Scalars['String']>;
  search_string_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type HasStatus = {
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  status: StatusUpdate;
};


export type HasStatusStatusArgs = {
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['String']>;
  dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_StatusUpdateFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_StatusUpdateOrdering>>>;
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
  rejected_reasons?: Maybe<Array<Maybe<Sample_Rejection_Reason_Fields>>>;
  status?: Maybe<AcceptedStatus>;
  statuss?: Maybe<Array<Maybe<AcceptedStatus>>>;
};

export type Instrument = {
   __typename?: 'Instrument';
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  reagents: Array<Maybe<Reagent>>;
  tests: Array<Maybe<Molecular_Lab_Test>>;
};


export type InstrumentReagentsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ReagentFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReagentOrdering>>>;
};


export type InstrumentTestsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  authorized_diagnoses?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorized_diagnosess?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  description?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Molecular_Lab_TestFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  ngsBased?: Maybe<Scalars['Boolean']>;
  ngsBaseds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_TestOrdering>>>;
};


export type Molecular_Lab_Test = {
   __typename?: 'Molecular_Lab_Test';
  _id?: Maybe<Scalars['Long']>;
  acceptable_sample_type: Array<Maybe<Sample_Type>>;
  assays: Array<Maybe<Assay>>;
  authorized_diagnoses: Array<Maybe<Scalars['String']>>;
  description: Scalars['String'];
  id: Scalars['ID'];
  instruments: Array<Maybe<Instrument>>;
  name: Scalars['String'];
  name_lower: Scalars['String'];
  ngsBased: Scalars['Boolean'];
  orders: Array<Maybe<Order>>;
};


export type Molecular_Lab_TestAcceptable_Sample_TypeArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_Sample_TypeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Sample_TypeOrdering>>>;
  requires_pathologist_qc?: Maybe<Scalars['Boolean']>;
  requires_pathologist_qcs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type Molecular_Lab_TestAssaysArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AssayFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AssayOrdering>>>;
};


export type Molecular_Lab_TestInstrumentsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_InstrumentFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_InstrumentOrdering>>>;
};


export type Molecular_Lab_TestOrdersArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_of_birth?: Maybe<Scalars['String']>;
  date_of_births?: Maybe<Array<Maybe<Scalars['String']>>>;
  diagnosis?: Maybe<Scalars['String']>;
  diagnosiss?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OrderFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ml_order_id?: Maybe<Scalars['String']>;
  ml_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  mrn?: Maybe<Scalars['String']>;
  mrns?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OrderOrdering>>>;
  order_date?: Maybe<Scalars['String']>;
  order_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  patient_name?: Maybe<Scalars['String']>;
  patient_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_order_id?: Maybe<Scalars['String']>;
  received_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  rejected_once?: Maybe<Scalars['Boolean']>;
  rejected_onces?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  search_string_lower?: Maybe<Scalars['String']>;
  search_string_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  sex?: Maybe<Scalars['String']>;
  sexs?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Molecular_Lab_User = {
   __typename?: 'Molecular_Lab_User';
  _id?: Maybe<Scalars['Long']>;
  canApproveReagent: Scalars['Boolean'];
  canEditOrders: Scalars['Boolean'];
  canEditPhysicians: Scalars['Boolean'];
  canEditTests: Scalars['Boolean'];
  canEditUsers: Scalars['Boolean'];
  canQC: Scalars['Boolean'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  password: Scalars['String'];
  user_name: Scalars['String'];
};

export type MutationType = {
   __typename?: 'MutationType';
  addAssayCase?: Maybe<Scalars['String']>;
  addAssayProtocol_steps?: Maybe<Scalars['String']>;
  addAssayStart?: Maybe<Scalars['String']>;
  addAssayTest?: Maybe<Scalars['String']>;
  addCaseAssays?: Maybe<Scalars['String']>;
  addCaseCreated_by?: Maybe<Scalars['String']>;
  addCaseOrder?: Maybe<Scalars['String']>;
  addCaseSample?: Maybe<Scalars['String']>;
  addHasStatusStatus?: Maybe<Scalars['String']>;
  addInstrumentReagents?: Maybe<Scalars['String']>;
  addInstrumentTests?: Maybe<Scalars['String']>;
  addMolecular_Lab_TestAcceptable_sample_type?: Maybe<Scalars['String']>;
  addMolecular_Lab_TestAssays?: Maybe<Scalars['String']>;
  addMolecular_Lab_TestInstruments?: Maybe<Scalars['String']>;
  addMolecular_Lab_TestOrders?: Maybe<Scalars['String']>;
  addOrderAttending_physician?: Maybe<Scalars['String']>;
  addOrderCase?: Maybe<Scalars['String']>;
  addOrderInformation_request?: Maybe<Scalars['String']>;
  addOrderOrdered_by?: Maybe<Scalars['String']>;
  addOrderStatus?: Maybe<Scalars['String']>;
  addOrderTest_ordered?: Maybe<Scalars['String']>;
  addOrder_Information_RequestOrder?: Maybe<Scalars['String']>;
  addOrder_Information_RequestRequested_by?: Maybe<Scalars['String']>;
  addOrder_Information_RequestResolved_by?: Maybe<Scalars['String']>;
  addPathologist_QCCase?: Maybe<Scalars['String']>;
  addPathologist_QCQc_by?: Maybe<Scalars['String']>;
  addPhysicianOrders?: Maybe<Scalars['String']>;
  addProtocol_StepCompleted_by?: Maybe<Scalars['String']>;
  addProtocol_StepNext_step?: Maybe<Scalars['String']>;
  addProtocol_StepReagentLots_used?: Maybe<Scalars['String']>;
  addProtocol_StepReagents_required?: Maybe<Scalars['String']>;
  addProtocol_StepStarted_by?: Maybe<Scalars['String']>;
  addReagentCurrent_lot?: Maybe<Scalars['String']>;
  addReagentInstrument?: Maybe<Scalars['String']>;
  addReagentLotApproved_by?: Maybe<Scalars['String']>;
  addReagentLotQc_by?: Maybe<Scalars['String']>;
  addReagentLotReagent?: Maybe<Scalars['String']>;
  addReagentLotReceived_by?: Maybe<Scalars['String']>;
  addReagentLots?: Maybe<Scalars['String']>;
  addReagentTests?: Maybe<Scalars['String']>;
  addSampleCase?: Maybe<Scalars['String']>;
  addSampleOrdered_by?: Maybe<Scalars['String']>;
  addSamplePathologist_qc?: Maybe<Scalars['String']>;
  addSampleSample_type?: Maybe<Scalars['String']>;
  addSampleStatus?: Maybe<Scalars['String']>;
  addStatusUpdateBy?: Maybe<Scalars['String']>;
  addStatusUpdateHasStatus?: Maybe<Scalars['String']>;
  addStatusUpdatePreviousStatus?: Maybe<Scalars['String']>;
  createAssay?: Maybe<Scalars['String']>;
  createCase?: Maybe<Scalars['String']>;
  createHasStatus?: Maybe<Scalars['String']>;
  createInstrument?: Maybe<Scalars['String']>;
  createMolecular_Lab_Test?: Maybe<Scalars['String']>;
  createMolecular_Lab_User?: Maybe<Scalars['String']>;
  createOrder?: Maybe<Scalars['String']>;
  createOrder_Information_Request?: Maybe<Scalars['String']>;
  createPathologist_QC?: Maybe<Scalars['String']>;
  createPhysician?: Maybe<Scalars['String']>;
  createProtocol_Step?: Maybe<Scalars['String']>;
  createReagent?: Maybe<Scalars['String']>;
  createReagentLot?: Maybe<Scalars['String']>;
  createSample?: Maybe<Scalars['String']>;
  createSample_Type?: Maybe<Scalars['String']>;
  createStatusUpdate?: Maybe<Scalars['String']>;
  deleteAssay?: Maybe<Scalars['String']>;
  deleteAssayCase?: Maybe<Scalars['String']>;
  deleteAssayProtocol_steps?: Maybe<Scalars['String']>;
  deleteAssayStart?: Maybe<Scalars['String']>;
  deleteAssayTest?: Maybe<Scalars['String']>;
  deleteCase?: Maybe<Scalars['String']>;
  deleteCaseAssays?: Maybe<Scalars['String']>;
  deleteCaseCreated_by?: Maybe<Scalars['String']>;
  deleteCaseOrder?: Maybe<Scalars['String']>;
  deleteCaseSample?: Maybe<Scalars['String']>;
  deleteHasStatus?: Maybe<Scalars['String']>;
  deleteHasStatusStatus?: Maybe<Scalars['String']>;
  deleteInstrument?: Maybe<Scalars['String']>;
  deleteInstrumentReagents?: Maybe<Scalars['String']>;
  deleteInstrumentTests?: Maybe<Scalars['String']>;
  deleteMolecular_Lab_Test?: Maybe<Scalars['String']>;
  deleteMolecular_Lab_TestAcceptable_sample_type?: Maybe<Scalars['String']>;
  deleteMolecular_Lab_TestAssays?: Maybe<Scalars['String']>;
  deleteMolecular_Lab_TestInstruments?: Maybe<Scalars['String']>;
  deleteMolecular_Lab_TestOrders?: Maybe<Scalars['String']>;
  deleteMolecular_Lab_User?: Maybe<Scalars['String']>;
  deleteOrder?: Maybe<Scalars['String']>;
  deleteOrderAttending_physician?: Maybe<Scalars['String']>;
  deleteOrderCase?: Maybe<Scalars['String']>;
  deleteOrderInformation_request?: Maybe<Scalars['String']>;
  deleteOrderOrdered_by?: Maybe<Scalars['String']>;
  deleteOrderStatus?: Maybe<Scalars['String']>;
  deleteOrderTest_ordered?: Maybe<Scalars['String']>;
  deleteOrder_Information_Request?: Maybe<Scalars['String']>;
  deleteOrder_Information_RequestOrder?: Maybe<Scalars['String']>;
  deleteOrder_Information_RequestRequested_by?: Maybe<Scalars['String']>;
  deleteOrder_Information_RequestResolved_by?: Maybe<Scalars['String']>;
  deletePathologist_QC?: Maybe<Scalars['String']>;
  deletePathologist_QCCase?: Maybe<Scalars['String']>;
  deletePathologist_QCQc_by?: Maybe<Scalars['String']>;
  deletePhysician?: Maybe<Scalars['String']>;
  deletePhysicianOrders?: Maybe<Scalars['String']>;
  deleteProtocol_Step?: Maybe<Scalars['String']>;
  deleteProtocol_StepCompleted_by?: Maybe<Scalars['String']>;
  deleteProtocol_StepNext_step?: Maybe<Scalars['String']>;
  deleteProtocol_StepReagentLots_used?: Maybe<Scalars['String']>;
  deleteProtocol_StepReagents_required?: Maybe<Scalars['String']>;
  deleteProtocol_StepStarted_by?: Maybe<Scalars['String']>;
  deleteReagent?: Maybe<Scalars['String']>;
  deleteReagentCurrent_lot?: Maybe<Scalars['String']>;
  deleteReagentInstrument?: Maybe<Scalars['String']>;
  deleteReagentLot?: Maybe<Scalars['String']>;
  deleteReagentLotApproved_by?: Maybe<Scalars['String']>;
  deleteReagentLotQc_by?: Maybe<Scalars['String']>;
  deleteReagentLotReagent?: Maybe<Scalars['String']>;
  deleteReagentLotReceived_by?: Maybe<Scalars['String']>;
  deleteReagentLots?: Maybe<Scalars['String']>;
  deleteReagentTests?: Maybe<Scalars['String']>;
  deleteSample?: Maybe<Scalars['String']>;
  deleteSampleCase?: Maybe<Scalars['String']>;
  deleteSampleOrdered_by?: Maybe<Scalars['String']>;
  deleteSamplePathologist_qc?: Maybe<Scalars['String']>;
  deleteSampleSample_type?: Maybe<Scalars['String']>;
  deleteSampleStatus?: Maybe<Scalars['String']>;
  deleteSample_Type?: Maybe<Scalars['String']>;
  deleteStatusUpdate?: Maybe<Scalars['String']>;
  deleteStatusUpdateBy?: Maybe<Scalars['String']>;
  deleteStatusUpdateHasStatus?: Maybe<Scalars['String']>;
  deleteStatusUpdatePreviousStatus?: Maybe<Scalars['String']>;
  mergeAssay?: Maybe<Scalars['String']>;
  mergeCase?: Maybe<Scalars['String']>;
  mergeHasStatus?: Maybe<Scalars['String']>;
  mergeInstrument?: Maybe<Scalars['String']>;
  mergeMolecular_Lab_Test?: Maybe<Scalars['String']>;
  mergeMolecular_Lab_User?: Maybe<Scalars['String']>;
  mergeOrder?: Maybe<Scalars['String']>;
  mergeOrder_Information_Request?: Maybe<Scalars['String']>;
  mergePathologist_QC?: Maybe<Scalars['String']>;
  mergePhysician?: Maybe<Scalars['String']>;
  mergeProtocol_Step?: Maybe<Scalars['String']>;
  mergeReagent?: Maybe<Scalars['String']>;
  mergeReagentLot?: Maybe<Scalars['String']>;
  mergeSample?: Maybe<Scalars['String']>;
  mergeSample_Type?: Maybe<Scalars['String']>;
  mergeStatusUpdate?: Maybe<Scalars['String']>;
  updateAssay?: Maybe<Scalars['String']>;
  updateCase?: Maybe<Scalars['String']>;
  updateHasStatus?: Maybe<Scalars['String']>;
  updateInstrument?: Maybe<Scalars['String']>;
  updateMolecular_Lab_Test?: Maybe<Scalars['String']>;
  updateMolecular_Lab_User?: Maybe<Scalars['String']>;
  updateOrder?: Maybe<Scalars['String']>;
  updateOrder_Information_Request?: Maybe<Scalars['String']>;
  updatePathologist_QC?: Maybe<Scalars['String']>;
  updatePhysician?: Maybe<Scalars['String']>;
  updateProtocol_Step?: Maybe<Scalars['String']>;
  updateReagent?: Maybe<Scalars['String']>;
  updateReagentLot?: Maybe<Scalars['String']>;
  updateSample?: Maybe<Scalars['String']>;
  updateSample_Type?: Maybe<Scalars['String']>;
  updateStatusUpdate?: Maybe<Scalars['String']>;
};


export type MutationTypeAddAssayCaseArgs = {
  case: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddAssayProtocol_StepsArgs = {
  id: Scalars['ID'];
  protocol_steps: Array<Scalars['ID']>;
};


export type MutationTypeAddAssayStartArgs = {
  id: Scalars['ID'];
  start: Array<Scalars['ID']>;
};


export type MutationTypeAddAssayTestArgs = {
  id: Scalars['ID'];
  test: Array<Scalars['ID']>;
};


export type MutationTypeAddCaseAssaysArgs = {
  assays: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddCaseCreated_ByArgs = {
  created_by: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddCaseOrderArgs = {
  id: Scalars['ID'];
  order: Array<Scalars['ID']>;
};


export type MutationTypeAddCaseSampleArgs = {
  id: Scalars['ID'];
  sample: Array<Scalars['ID']>;
};


export type MutationTypeAddHasStatusStatusArgs = {
  id: Scalars['ID'];
  status: Array<Scalars['ID']>;
};


export type MutationTypeAddInstrumentReagentsArgs = {
  id: Scalars['ID'];
  reagents: Array<Scalars['ID']>;
};


export type MutationTypeAddInstrumentTestsArgs = {
  id: Scalars['ID'];
  tests: Array<Scalars['ID']>;
};


export type MutationTypeAddMolecular_Lab_TestAcceptable_Sample_TypeArgs = {
  acceptable_sample_type: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddMolecular_Lab_TestAssaysArgs = {
  assays: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddMolecular_Lab_TestInstrumentsArgs = {
  id: Scalars['ID'];
  instruments: Array<Scalars['ID']>;
};


export type MutationTypeAddMolecular_Lab_TestOrdersArgs = {
  id: Scalars['ID'];
  orders: Array<Scalars['ID']>;
};


export type MutationTypeAddOrderAttending_PhysicianArgs = {
  attending_physician: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddOrderCaseArgs = {
  case: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddOrderInformation_RequestArgs = {
  id: Scalars['ID'];
  information_request: Array<Scalars['ID']>;
};


export type MutationTypeAddOrderOrdered_ByArgs = {
  id: Scalars['ID'];
  ordered_by: Array<Scalars['ID']>;
};


export type MutationTypeAddOrderStatusArgs = {
  id: Scalars['ID'];
  status: Array<Scalars['ID']>;
};


export type MutationTypeAddOrderTest_OrderedArgs = {
  id: Scalars['ID'];
  test_ordered: Array<Scalars['ID']>;
};


export type MutationTypeAddOrder_Information_RequestOrderArgs = {
  id: Scalars['ID'];
  order: Array<Scalars['ID']>;
};


export type MutationTypeAddOrder_Information_RequestRequested_ByArgs = {
  id: Scalars['ID'];
  requested_by: Array<Scalars['ID']>;
};


export type MutationTypeAddOrder_Information_RequestResolved_ByArgs = {
  id: Scalars['ID'];
  resolved_by: Array<Scalars['ID']>;
};


export type MutationTypeAddPathologist_QcCaseArgs = {
  case: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddPathologist_QcQc_ByArgs = {
  id: Scalars['ID'];
  qc_by: Array<Scalars['ID']>;
};


export type MutationTypeAddPhysicianOrdersArgs = {
  id: Scalars['ID'];
  orders: Array<Scalars['ID']>;
};


export type MutationTypeAddProtocol_StepCompleted_ByArgs = {
  completed_by: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddProtocol_StepNext_StepArgs = {
  id: Scalars['ID'];
  next_step: Array<Scalars['ID']>;
};


export type MutationTypeAddProtocol_StepReagentLots_UsedArgs = {
  id: Scalars['ID'];
  reagentLots_used: Array<Scalars['ID']>;
};


export type MutationTypeAddProtocol_StepReagents_RequiredArgs = {
  id: Scalars['ID'];
  reagents_required: Array<Scalars['ID']>;
};


export type MutationTypeAddProtocol_StepStarted_ByArgs = {
  id: Scalars['ID'];
  started_by: Array<Scalars['ID']>;
};


export type MutationTypeAddReagentCurrent_LotArgs = {
  current_lot: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddReagentInstrumentArgs = {
  id: Scalars['ID'];
  instrument: Array<Scalars['ID']>;
};


export type MutationTypeAddReagentLotApproved_ByArgs = {
  approved_by: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddReagentLotQc_ByArgs = {
  id: Scalars['ID'];
  qc_by: Array<Scalars['ID']>;
};


export type MutationTypeAddReagentLotReagentArgs = {
  id: Scalars['ID'];
  reagent: Array<Scalars['ID']>;
};


export type MutationTypeAddReagentLotReceived_ByArgs = {
  id: Scalars['ID'];
  received_by: Array<Scalars['ID']>;
};


export type MutationTypeAddReagentLotsArgs = {
  id: Scalars['ID'];
  lots: Array<Scalars['ID']>;
};


export type MutationTypeAddReagentTestsArgs = {
  id: Scalars['ID'];
  tests: Array<Scalars['ID']>;
};


export type MutationTypeAddSampleCaseArgs = {
  case: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddSampleOrdered_ByArgs = {
  id: Scalars['ID'];
  ordered_by: Array<Scalars['ID']>;
};


export type MutationTypeAddSamplePathologist_QcArgs = {
  id: Scalars['ID'];
  pathologist_qc: Array<Scalars['ID']>;
};


export type MutationTypeAddSampleSample_TypeArgs = {
  id: Scalars['ID'];
  sample_type: Array<Scalars['ID']>;
};


export type MutationTypeAddSampleStatusArgs = {
  id: Scalars['ID'];
  status: Array<Scalars['ID']>;
};


export type MutationTypeAddStatusUpdateByArgs = {
  by: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddStatusUpdateHasStatusArgs = {
  hasStatus: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddStatusUpdatePreviousStatusArgs = {
  id: Scalars['ID'];
  previousStatus: Array<Scalars['ID']>;
};


export type MutationTypeCreateAssayArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateCaseArgs = {
  created_date: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateHasStatusArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateInstrumentArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateMolecular_Lab_TestArgs = {
  authorized_diagnoses: Array<Maybe<Scalars['String']>>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  name_lower: Scalars['String'];
  ngsBased: Scalars['Boolean'];
};


export type MutationTypeCreateMolecular_Lab_UserArgs = {
  canApproveReagent: Scalars['Boolean'];
  canEditOrders: Scalars['Boolean'];
  canEditPhysicians: Scalars['Boolean'];
  canEditTests: Scalars['Boolean'];
  canEditUsers: Scalars['Boolean'];
  canQC: Scalars['Boolean'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  password: Scalars['String'];
  user_name: Scalars['String'];
};


export type MutationTypeCreateOrderArgs = {
  comments: Scalars['String'];
  date_of_birth: Scalars['String'];
  diagnosis: Scalars['String'];
  id: Scalars['ID'];
  ml_order_id: Scalars['String'];
  mrn: Scalars['String'];
  order_date: Scalars['String'];
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  rejected_once: Scalars['Boolean'];
  search_string_lower: Scalars['String'];
  sex: Scalars['String'];
};


export type MutationTypeCreateOrder_Information_RequestArgs = {
  field: Order_Information_Request_Fields;
  id: Scalars['ID'];
  requested_date: Scalars['String'];
  resolved_date: Scalars['String'];
};


export type MutationTypeCreatePathologist_QcArgs = {
  acceptance_value: Qc_Acceptance_Value;
  diagnosis: Scalars['String'];
  id: Scalars['ID'];
  macro_dissection_required: Scalars['Boolean'];
  percent_neoplastic_cells: Scalars['Float'];
  qc_date: Scalars['String'];
  sample_size_mm2: Scalars['Float'];
};


export type MutationTypeCreatePhysicianArgs = {
  badge_id: Scalars['String'];
  degrees: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  phone_number: Scalars['String'];
};


export type MutationTypeCreateProtocol_StepArgs = {
  completed_date?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  started_date?: Maybe<Scalars['String']>;
};


export type MutationTypeCreateReagentArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateReagentLotArgs = {
  approved_date?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  qc_date?: Maybe<Scalars['String']>;
  received_date?: Maybe<Scalars['String']>;
  status: Reagent_Status;
};


export type MutationTypeCreateSampleArgs = {
  collected_date: Scalars['String'];
  comments: Scalars['String'];
  id: Scalars['ID'];
  ml_order_id?: Maybe<Scalars['String']>;
  mrn: Scalars['String'];
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  sample_id: Scalars['String'];
  sample_location: Scalars['String'];
  search_string_lower: Scalars['String'];
};


export type MutationTypeCreateSample_TypeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  requires_pathologist_qc: Scalars['Boolean'];
};


export type MutationTypeCreateStatusUpdateArgs = {
  comments?: Maybe<Scalars['String']>;
  date: Scalars['String'];
  id: Scalars['ID'];
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
  status: AcceptedStatus;
};


export type MutationTypeDeleteAssayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteAssayCaseArgs = {
  case: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteAssayProtocol_StepsArgs = {
  id: Scalars['ID'];
  protocol_steps: Array<Scalars['ID']>;
};


export type MutationTypeDeleteAssayStartArgs = {
  id: Scalars['ID'];
  start: Array<Scalars['ID']>;
};


export type MutationTypeDeleteAssayTestArgs = {
  id: Scalars['ID'];
  test: Array<Scalars['ID']>;
};


export type MutationTypeDeleteCaseArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteCaseAssaysArgs = {
  assays: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteCaseCreated_ByArgs = {
  created_by: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteCaseOrderArgs = {
  id: Scalars['ID'];
  order: Array<Scalars['ID']>;
};


export type MutationTypeDeleteCaseSampleArgs = {
  id: Scalars['ID'];
  sample: Array<Scalars['ID']>;
};


export type MutationTypeDeleteHasStatusArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteHasStatusStatusArgs = {
  id: Scalars['ID'];
  status: Array<Scalars['ID']>;
};


export type MutationTypeDeleteInstrumentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteInstrumentReagentsArgs = {
  id: Scalars['ID'];
  reagents: Array<Scalars['ID']>;
};


export type MutationTypeDeleteInstrumentTestsArgs = {
  id: Scalars['ID'];
  tests: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMolecular_Lab_TestArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteMolecular_Lab_TestAcceptable_Sample_TypeArgs = {
  acceptable_sample_type: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteMolecular_Lab_TestAssaysArgs = {
  assays: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteMolecular_Lab_TestInstrumentsArgs = {
  id: Scalars['ID'];
  instruments: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMolecular_Lab_TestOrdersArgs = {
  id: Scalars['ID'];
  orders: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMolecular_Lab_UserArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOrderArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOrderAttending_PhysicianArgs = {
  attending_physician: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteOrderCaseArgs = {
  case: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteOrderInformation_RequestArgs = {
  id: Scalars['ID'];
  information_request: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOrderOrdered_ByArgs = {
  id: Scalars['ID'];
  ordered_by: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOrderStatusArgs = {
  id: Scalars['ID'];
  status: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOrderTest_OrderedArgs = {
  id: Scalars['ID'];
  test_ordered: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOrder_Information_RequestArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOrder_Information_RequestOrderArgs = {
  id: Scalars['ID'];
  order: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOrder_Information_RequestRequested_ByArgs = {
  id: Scalars['ID'];
  requested_by: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOrder_Information_RequestResolved_ByArgs = {
  id: Scalars['ID'];
  resolved_by: Array<Scalars['ID']>;
};


export type MutationTypeDeletePathologist_QcArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeletePathologist_QcCaseArgs = {
  case: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeletePathologist_QcQc_ByArgs = {
  id: Scalars['ID'];
  qc_by: Array<Scalars['ID']>;
};


export type MutationTypeDeletePhysicianArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeletePhysicianOrdersArgs = {
  id: Scalars['ID'];
  orders: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProtocol_StepArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteProtocol_StepCompleted_ByArgs = {
  completed_by: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteProtocol_StepNext_StepArgs = {
  id: Scalars['ID'];
  next_step: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProtocol_StepReagentLots_UsedArgs = {
  id: Scalars['ID'];
  reagentLots_used: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProtocol_StepReagents_RequiredArgs = {
  id: Scalars['ID'];
  reagents_required: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProtocol_StepStarted_ByArgs = {
  id: Scalars['ID'];
  started_by: Array<Scalars['ID']>;
};


export type MutationTypeDeleteReagentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteReagentCurrent_LotArgs = {
  current_lot: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteReagentInstrumentArgs = {
  id: Scalars['ID'];
  instrument: Array<Scalars['ID']>;
};


export type MutationTypeDeleteReagentLotArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteReagentLotApproved_ByArgs = {
  approved_by: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteReagentLotQc_ByArgs = {
  id: Scalars['ID'];
  qc_by: Array<Scalars['ID']>;
};


export type MutationTypeDeleteReagentLotReagentArgs = {
  id: Scalars['ID'];
  reagent: Array<Scalars['ID']>;
};


export type MutationTypeDeleteReagentLotReceived_ByArgs = {
  id: Scalars['ID'];
  received_by: Array<Scalars['ID']>;
};


export type MutationTypeDeleteReagentLotsArgs = {
  id: Scalars['ID'];
  lots: Array<Scalars['ID']>;
};


export type MutationTypeDeleteReagentTestsArgs = {
  id: Scalars['ID'];
  tests: Array<Scalars['ID']>;
};


export type MutationTypeDeleteSampleArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteSampleCaseArgs = {
  case: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteSampleOrdered_ByArgs = {
  id: Scalars['ID'];
  ordered_by: Array<Scalars['ID']>;
};


export type MutationTypeDeleteSamplePathologist_QcArgs = {
  id: Scalars['ID'];
  pathologist_qc: Array<Scalars['ID']>;
};


export type MutationTypeDeleteSampleSample_TypeArgs = {
  id: Scalars['ID'];
  sample_type: Array<Scalars['ID']>;
};


export type MutationTypeDeleteSampleStatusArgs = {
  id: Scalars['ID'];
  status: Array<Scalars['ID']>;
};


export type MutationTypeDeleteSample_TypeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteStatusUpdateArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteStatusUpdateByArgs = {
  by: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteStatusUpdateHasStatusArgs = {
  hasStatus: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteStatusUpdatePreviousStatusArgs = {
  id: Scalars['ID'];
  previousStatus: Array<Scalars['ID']>;
};


export type MutationTypeMergeAssayArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeCaseArgs = {
  created_date: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeHasStatusArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeInstrumentArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeMolecular_Lab_TestArgs = {
  authorized_diagnoses: Array<Maybe<Scalars['String']>>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  name_lower: Scalars['String'];
  ngsBased: Scalars['Boolean'];
};


export type MutationTypeMergeMolecular_Lab_UserArgs = {
  canApproveReagent: Scalars['Boolean'];
  canEditOrders: Scalars['Boolean'];
  canEditPhysicians: Scalars['Boolean'];
  canEditTests: Scalars['Boolean'];
  canEditUsers: Scalars['Boolean'];
  canQC: Scalars['Boolean'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  password: Scalars['String'];
  user_name: Scalars['String'];
};


export type MutationTypeMergeOrderArgs = {
  comments: Scalars['String'];
  date_of_birth: Scalars['String'];
  diagnosis: Scalars['String'];
  id: Scalars['ID'];
  ml_order_id: Scalars['String'];
  mrn: Scalars['String'];
  order_date: Scalars['String'];
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  rejected_once: Scalars['Boolean'];
  search_string_lower: Scalars['String'];
  sex: Scalars['String'];
};


export type MutationTypeMergeOrder_Information_RequestArgs = {
  field: Order_Information_Request_Fields;
  id: Scalars['ID'];
  requested_date: Scalars['String'];
  resolved_date: Scalars['String'];
};


export type MutationTypeMergePathologist_QcArgs = {
  acceptance_value: Qc_Acceptance_Value;
  diagnosis: Scalars['String'];
  id: Scalars['ID'];
  macro_dissection_required: Scalars['Boolean'];
  percent_neoplastic_cells: Scalars['Float'];
  qc_date: Scalars['String'];
  sample_size_mm2: Scalars['Float'];
};


export type MutationTypeMergePhysicianArgs = {
  badge_id: Scalars['String'];
  degrees: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  phone_number: Scalars['String'];
};


export type MutationTypeMergeProtocol_StepArgs = {
  completed_date?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  started_date?: Maybe<Scalars['String']>;
};


export type MutationTypeMergeReagentArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeReagentLotArgs = {
  approved_date?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  qc_date?: Maybe<Scalars['String']>;
  received_date?: Maybe<Scalars['String']>;
  status: Reagent_Status;
};


export type MutationTypeMergeSampleArgs = {
  collected_date: Scalars['String'];
  comments: Scalars['String'];
  id: Scalars['ID'];
  ml_order_id?: Maybe<Scalars['String']>;
  mrn: Scalars['String'];
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  sample_id: Scalars['String'];
  sample_location: Scalars['String'];
  search_string_lower: Scalars['String'];
};


export type MutationTypeMergeSample_TypeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  requires_pathologist_qc: Scalars['Boolean'];
};


export type MutationTypeMergeStatusUpdateArgs = {
  comments?: Maybe<Scalars['String']>;
  date: Scalars['String'];
  id: Scalars['ID'];
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
  status: AcceptedStatus;
};


export type MutationTypeUpdateAssayArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateCaseArgs = {
  created_date: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateHasStatusArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateInstrumentArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateMolecular_Lab_TestArgs = {
  authorized_diagnoses: Array<Maybe<Scalars['String']>>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  name_lower: Scalars['String'];
  ngsBased: Scalars['Boolean'];
};


export type MutationTypeUpdateMolecular_Lab_UserArgs = {
  canApproveReagent: Scalars['Boolean'];
  canEditOrders: Scalars['Boolean'];
  canEditPhysicians: Scalars['Boolean'];
  canEditTests: Scalars['Boolean'];
  canEditUsers: Scalars['Boolean'];
  canQC: Scalars['Boolean'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  password: Scalars['String'];
  user_name: Scalars['String'];
};


export type MutationTypeUpdateOrderArgs = {
  comments: Scalars['String'];
  date_of_birth: Scalars['String'];
  diagnosis: Scalars['String'];
  id: Scalars['ID'];
  ml_order_id: Scalars['String'];
  mrn: Scalars['String'];
  order_date: Scalars['String'];
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  rejected_once: Scalars['Boolean'];
  search_string_lower: Scalars['String'];
  sex: Scalars['String'];
};


export type MutationTypeUpdateOrder_Information_RequestArgs = {
  field: Order_Information_Request_Fields;
  id: Scalars['ID'];
  requested_date: Scalars['String'];
  resolved_date: Scalars['String'];
};


export type MutationTypeUpdatePathologist_QcArgs = {
  acceptance_value: Qc_Acceptance_Value;
  diagnosis: Scalars['String'];
  id: Scalars['ID'];
  macro_dissection_required: Scalars['Boolean'];
  percent_neoplastic_cells: Scalars['Float'];
  qc_date: Scalars['String'];
  sample_size_mm2: Scalars['Float'];
};


export type MutationTypeUpdatePhysicianArgs = {
  badge_id: Scalars['String'];
  degrees: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  phone_number: Scalars['String'];
};


export type MutationTypeUpdateProtocol_StepArgs = {
  completed_date?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  started_date?: Maybe<Scalars['String']>;
};


export type MutationTypeUpdateReagentArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateReagentLotArgs = {
  approved_date?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  qc_date?: Maybe<Scalars['String']>;
  received_date?: Maybe<Scalars['String']>;
  status: Reagent_Status;
};


export type MutationTypeUpdateSampleArgs = {
  collected_date: Scalars['String'];
  comments: Scalars['String'];
  id: Scalars['ID'];
  ml_order_id?: Maybe<Scalars['String']>;
  mrn: Scalars['String'];
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  sample_id: Scalars['String'];
  sample_location: Scalars['String'];
  search_string_lower: Scalars['String'];
};


export type MutationTypeUpdateSample_TypeArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  requires_pathologist_qc: Scalars['Boolean'];
};


export type MutationTypeUpdateStatusUpdateArgs = {
  comments?: Maybe<Scalars['String']>;
  date: Scalars['String'];
  id: Scalars['ID'];
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
  status: AcceptedStatus;
};

export type Order = HasStatus & {
   __typename?: 'Order';
  _id?: Maybe<Scalars['Long']>;
  attending_physician: Physician;
  case?: Maybe<Case>;
  comments: Scalars['String'];
  date_of_birth: Scalars['String'];
  diagnosis: Scalars['String'];
  id: Scalars['ID'];
  information_request: Array<Maybe<Order_Information_Request>>;
  ml_order_id: Scalars['String'];
  mrn: Scalars['String'];
  order_date: Scalars['String'];
  ordered_by: Physician;
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  rejected_once: Scalars['Boolean'];
  search_string_lower: Scalars['String'];
  sex: Scalars['String'];
  status: StatusUpdate;
  test_ordered: Molecular_Lab_Test;
};


export type OrderAttending_PhysicianArgs = {
  badge_id?: Maybe<Scalars['String']>;
  badge_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  degrees?: Maybe<Scalars['String']>;
  degreess?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_PhysicianFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_PhysicianOrdering>>>;
  phone_number?: Maybe<Scalars['String']>;
  phone_numbers?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OrderCaseArgs = {
  created_date?: Maybe<Scalars['String']>;
  created_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_CaseFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_CaseOrdering>>>;
};


export type OrderInformation_RequestArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  field?: Maybe<Order_Information_Request_Fields>;
  fields?: Maybe<Array<Maybe<Order_Information_Request_Fields>>>;
  filter?: Maybe<_Order_Information_RequestFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Order_Information_RequestOrdering>>>;
  requested_date?: Maybe<Scalars['String']>;
  requested_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  resolved_date?: Maybe<Scalars['String']>;
  resolved_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OrderOrdered_ByArgs = {
  badge_id?: Maybe<Scalars['String']>;
  badge_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  degrees?: Maybe<Scalars['String']>;
  degreess?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_PhysicianFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_PhysicianOrdering>>>;
  phone_number?: Maybe<Scalars['String']>;
  phone_numbers?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OrderStatusArgs = {
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['String']>;
  dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_StatusUpdateFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_StatusUpdateOrdering>>>;
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
  rejected_reasons?: Maybe<Array<Maybe<Sample_Rejection_Reason_Fields>>>;
  status?: Maybe<AcceptedStatus>;
  statuss?: Maybe<Array<Maybe<AcceptedStatus>>>;
};


export type OrderTest_OrderedArgs = {
  authorized_diagnoses?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorized_diagnosess?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  description?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Molecular_Lab_TestFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  ngsBased?: Maybe<Scalars['Boolean']>;
  ngsBaseds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_TestOrdering>>>;
};

export type Order_Information_Request = {
   __typename?: 'Order_Information_Request';
  _id?: Maybe<Scalars['Long']>;
  field: Order_Information_Request_Fields;
  id: Scalars['ID'];
  order: Array<Maybe<Order>>;
  requested_by: Molecular_Lab_User;
  requested_date: Scalars['String'];
  resolved_by?: Maybe<Molecular_Lab_User>;
  resolved_date: Scalars['String'];
};


export type Order_Information_RequestOrderArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_of_birth?: Maybe<Scalars['String']>;
  date_of_births?: Maybe<Array<Maybe<Scalars['String']>>>;
  diagnosis?: Maybe<Scalars['String']>;
  diagnosiss?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OrderFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ml_order_id?: Maybe<Scalars['String']>;
  ml_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  mrn?: Maybe<Scalars['String']>;
  mrns?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OrderOrdering>>>;
  order_date?: Maybe<Scalars['String']>;
  order_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  patient_name?: Maybe<Scalars['String']>;
  patient_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_order_id?: Maybe<Scalars['String']>;
  received_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  rejected_once?: Maybe<Scalars['Boolean']>;
  rejected_onces?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  search_string_lower?: Maybe<Scalars['String']>;
  search_string_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  sex?: Maybe<Scalars['String']>;
  sexs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type Order_Information_RequestRequested_ByArgs = {
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type Order_Information_RequestResolved_ByArgs = {
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum Order_Information_Request_Fields {
  AttendingPhysician = 'attending_physician',
  DateOfBirth = 'date_of_birth',
  Diagnosis = 'diagnosis',
  Mrn = 'mrn',
  None = 'none',
  OrderedBy = 'ordered_by',
  Other = 'other',
  PatientName = 'patient_name',
  Sex = 'sex',
  TestsOrdered = 'tests_ordered'
}

export type Pathologist_Qc = {
   __typename?: 'Pathologist_QC';
  _id?: Maybe<Scalars['Long']>;
  acceptance_value: Qc_Acceptance_Value;
  case?: Maybe<Case>;
  diagnosis: Scalars['String'];
  id: Scalars['ID'];
  macro_dissection_required: Scalars['Boolean'];
  percent_neoplastic_cells: Scalars['Float'];
  qc_by: Molecular_Lab_User;
  qc_date: Scalars['String'];
  sample_size_mm2: Scalars['Float'];
};


export type Pathologist_QcCaseArgs = {
  created_date?: Maybe<Scalars['String']>;
  created_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_CaseFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_CaseOrdering>>>;
};


export type Pathologist_QcQc_ByArgs = {
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Physician = {
   __typename?: 'Physician';
  _id?: Maybe<Scalars['Long']>;
  badge_id: Scalars['String'];
  degrees: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  orders: Array<Maybe<Order>>;
  phone_number: Scalars['String'];
};


export type PhysicianOrdersArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_of_birth?: Maybe<Scalars['String']>;
  date_of_births?: Maybe<Array<Maybe<Scalars['String']>>>;
  diagnosis?: Maybe<Scalars['String']>;
  diagnosiss?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OrderFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ml_order_id?: Maybe<Scalars['String']>;
  ml_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  mrn?: Maybe<Scalars['String']>;
  mrns?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OrderOrdering>>>;
  order_date?: Maybe<Scalars['String']>;
  order_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  patient_name?: Maybe<Scalars['String']>;
  patient_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_order_id?: Maybe<Scalars['String']>;
  received_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  rejected_once?: Maybe<Scalars['Boolean']>;
  rejected_onces?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  search_string_lower?: Maybe<Scalars['String']>;
  search_string_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  sex?: Maybe<Scalars['String']>;
  sexs?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Protocol_Step = {
   __typename?: 'Protocol_Step';
  _id?: Maybe<Scalars['Long']>;
  completed_by?: Maybe<Molecular_Lab_User>;
  completed_date?: Maybe<Scalars['String']>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  next_step?: Maybe<Protocol_Step>;
  reagentLots_used: Array<Maybe<ReagentLot>>;
  reagents_required: Array<Maybe<Reagent>>;
  started_by?: Maybe<Molecular_Lab_User>;
  started_date?: Maybe<Scalars['String']>;
};


export type Protocol_StepCompleted_ByArgs = {
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type Protocol_StepNext_StepArgs = {
  completed_date?: Maybe<Scalars['String']>;
  completed_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Protocol_StepFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Protocol_StepOrdering>>>;
  started_date?: Maybe<Scalars['String']>;
  started_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type Protocol_StepReagentLots_UsedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  approved_date?: Maybe<Scalars['String']>;
  approved_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  expiration_date?: Maybe<Scalars['String']>;
  expiration_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ReagentLotFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReagentLotOrdering>>>;
  qc_date?: Maybe<Scalars['String']>;
  qc_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Reagent_Status>;
  statuss?: Maybe<Array<Maybe<Reagent_Status>>>;
};


export type Protocol_StepReagents_RequiredArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ReagentFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReagentOrdering>>>;
};


export type Protocol_StepStarted_ByArgs = {
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum Qc_Acceptance_Value {
  Accepted = 'accepted',
  Rejected = 'rejected'
}

export type QueryType = {
   __typename?: 'QueryType';
  Assay?: Maybe<Array<Maybe<Assay>>>;
  Case?: Maybe<Array<Maybe<Case>>>;
  HasStatus?: Maybe<Array<Maybe<HasStatus>>>;
  Instrument?: Maybe<Array<Maybe<Instrument>>>;
  Molecular_Lab_Test?: Maybe<Array<Maybe<Molecular_Lab_Test>>>;
  Molecular_Lab_User?: Maybe<Array<Maybe<Molecular_Lab_User>>>;
  Order?: Maybe<Array<Maybe<Order>>>;
  Order_Information_Request?: Maybe<Array<Maybe<Order_Information_Request>>>;
  Pathologist_QC?: Maybe<Array<Maybe<Pathologist_Qc>>>;
  Physician?: Maybe<Array<Maybe<Physician>>>;
  Protocol_Step?: Maybe<Array<Maybe<Protocol_Step>>>;
  Reagent?: Maybe<Array<Maybe<Reagent>>>;
  ReagentLot?: Maybe<Array<Maybe<ReagentLot>>>;
  Sample?: Maybe<Array<Maybe<Sample>>>;
  Sample_Type?: Maybe<Array<Maybe<Sample_Type>>>;
  StatusUpdate?: Maybe<Array<Maybe<StatusUpdate>>>;
};


export type QueryTypeAssayArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AssayFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AssayOrdering>>>;
};


export type QueryTypeCaseArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  created_date?: Maybe<Scalars['String']>;
  created_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_CaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_CaseOrdering>>>;
};


export type QueryTypeHasStatusArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_HasStatusFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_HasStatusOrdering>>>;
};


export type QueryTypeInstrumentArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_InstrumentFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_InstrumentOrdering>>>;
};


export type QueryTypeMolecular_Lab_TestArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  authorized_diagnoses?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorized_diagnosess?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  description?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Molecular_Lab_TestFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  ngsBased?: Maybe<Scalars['Boolean']>;
  ngsBaseds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_TestOrdering>>>;
};


export type QueryTypeMolecular_Lab_UserArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeOrderArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_of_birth?: Maybe<Scalars['String']>;
  date_of_births?: Maybe<Array<Maybe<Scalars['String']>>>;
  diagnosis?: Maybe<Scalars['String']>;
  diagnosiss?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OrderFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ml_order_id?: Maybe<Scalars['String']>;
  ml_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  mrn?: Maybe<Scalars['String']>;
  mrns?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OrderOrdering>>>;
  order_date?: Maybe<Scalars['String']>;
  order_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  patient_name?: Maybe<Scalars['String']>;
  patient_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_order_id?: Maybe<Scalars['String']>;
  received_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  rejected_once?: Maybe<Scalars['Boolean']>;
  rejected_onces?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  search_string_lower?: Maybe<Scalars['String']>;
  search_string_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  sex?: Maybe<Scalars['String']>;
  sexs?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeOrder_Information_RequestArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  field?: Maybe<Order_Information_Request_Fields>;
  fields?: Maybe<Array<Maybe<Order_Information_Request_Fields>>>;
  filter?: Maybe<_Order_Information_RequestFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Order_Information_RequestOrdering>>>;
  requested_date?: Maybe<Scalars['String']>;
  requested_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  resolved_date?: Maybe<Scalars['String']>;
  resolved_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypePathologist_QcArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  acceptance_value?: Maybe<Qc_Acceptance_Value>;
  acceptance_values?: Maybe<Array<Maybe<Qc_Acceptance_Value>>>;
  diagnosis?: Maybe<Scalars['String']>;
  diagnosiss?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Pathologist_QcFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  macro_dissection_required?: Maybe<Scalars['Boolean']>;
  macro_dissection_requireds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Pathologist_QcOrdering>>>;
  percent_neoplastic_cells?: Maybe<Scalars['Float']>;
  percent_neoplastic_cellss?: Maybe<Array<Maybe<Scalars['Float']>>>;
  qc_date?: Maybe<Scalars['String']>;
  qc_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  sample_size_mm2?: Maybe<Scalars['Float']>;
  sample_size_mm2s?: Maybe<Array<Maybe<Scalars['Float']>>>;
};


export type QueryTypePhysicianArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  badge_id?: Maybe<Scalars['String']>;
  badge_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  degrees?: Maybe<Scalars['String']>;
  degreess?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_PhysicianFilter>;
  first?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_PhysicianOrdering>>>;
  phone_number?: Maybe<Scalars['String']>;
  phone_numbers?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeProtocol_StepArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  completed_date?: Maybe<Scalars['String']>;
  completed_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Protocol_StepFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Protocol_StepOrdering>>>;
  started_date?: Maybe<Scalars['String']>;
  started_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeReagentArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ReagentFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReagentOrdering>>>;
};


export type QueryTypeReagentLotArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  approved_date?: Maybe<Scalars['String']>;
  approved_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  expiration_date?: Maybe<Scalars['String']>;
  expiration_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ReagentLotFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReagentLotOrdering>>>;
  qc_date?: Maybe<Scalars['String']>;
  qc_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Reagent_Status>;
  statuss?: Maybe<Array<Maybe<Reagent_Status>>>;
};


export type QueryTypeSampleArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  collected_date?: Maybe<Scalars['String']>;
  collected_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_SampleFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ml_order_id?: Maybe<Scalars['String']>;
  ml_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  mrn?: Maybe<Scalars['String']>;
  mrns?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_SampleOrdering>>>;
  patient_name?: Maybe<Scalars['String']>;
  patient_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_order_id?: Maybe<Scalars['String']>;
  received_order_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  sample_id?: Maybe<Scalars['String']>;
  sample_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  sample_location?: Maybe<Scalars['String']>;
  sample_locations?: Maybe<Array<Maybe<Scalars['String']>>>;
  search_string_lower?: Maybe<Scalars['String']>;
  search_string_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeSample_TypeArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_Sample_TypeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Sample_TypeOrdering>>>;
  requires_pathologist_qc?: Maybe<Scalars['Boolean']>;
  requires_pathologist_qcs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type QueryTypeStatusUpdateArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['String']>;
  dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_StatusUpdateFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StatusUpdateOrdering>>>;
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
  rejected_reasons?: Maybe<Array<Maybe<Sample_Rejection_Reason_Fields>>>;
  status?: Maybe<AcceptedStatus>;
  statuss?: Maybe<Array<Maybe<AcceptedStatus>>>;
};

export type Reagent = {
   __typename?: 'Reagent';
  _id?: Maybe<Scalars['Long']>;
  current_lot?: Maybe<ReagentLot>;
  id: Scalars['ID'];
  instrument: Instrument;
  lots: Array<Maybe<ReagentLot>>;
  name: Scalars['String'];
  tests: Array<Maybe<Molecular_Lab_Test>>;
};


export type ReagentCurrent_LotArgs = {
  approved_date?: Maybe<Scalars['String']>;
  approved_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  expiration_date?: Maybe<Scalars['String']>;
  expiration_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ReagentLotFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_ReagentLotOrdering>>>;
  qc_date?: Maybe<Scalars['String']>;
  qc_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Reagent_Status>;
  statuss?: Maybe<Array<Maybe<Reagent_Status>>>;
};


export type ReagentInstrumentArgs = {
  filter?: Maybe<_InstrumentFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_InstrumentOrdering>>>;
};


export type ReagentLotsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  approved_date?: Maybe<Scalars['String']>;
  approved_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  expiration_date?: Maybe<Scalars['String']>;
  expiration_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ReagentLotFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReagentLotOrdering>>>;
  qc_date?: Maybe<Scalars['String']>;
  qc_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  received_date?: Maybe<Scalars['String']>;
  received_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  status?: Maybe<Reagent_Status>;
  statuss?: Maybe<Array<Maybe<Reagent_Status>>>;
};


export type ReagentTestsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  authorized_diagnoses?: Maybe<Array<Maybe<Scalars['String']>>>;
  authorized_diagnosess?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  description?: Maybe<Scalars['String']>;
  descriptions?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Molecular_Lab_TestFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  ngsBased?: Maybe<Scalars['Boolean']>;
  ngsBaseds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_TestOrdering>>>;
};

export enum Reagent_Status {
  Approved = 'approved',
  Expired = 'expired',
  FailedQc = 'failed_qc',
  None = 'none',
  PassedQc = 'passed_qc',
  Received = 'received'
}

export type ReagentLot = {
   __typename?: 'ReagentLot';
  _id?: Maybe<Scalars['Long']>;
  approved_by?: Maybe<Molecular_Lab_User>;
  approved_date?: Maybe<Scalars['String']>;
  expiration_date?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  qc_by?: Maybe<Molecular_Lab_User>;
  qc_date?: Maybe<Scalars['String']>;
  reagent: Reagent;
  received_by?: Maybe<Molecular_Lab_User>;
  received_date?: Maybe<Scalars['String']>;
  status: Reagent_Status;
};


export type ReagentLotApproved_ByArgs = {
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ReagentLotQc_ByArgs = {
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ReagentLotReagentArgs = {
  filter?: Maybe<_ReagentFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_ReagentOrdering>>>;
};


export type ReagentLotReceived_ByArgs = {
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Sample = HasStatus & {
   __typename?: 'Sample';
  _id?: Maybe<Scalars['Long']>;
  case?: Maybe<Case>;
  collected_date: Scalars['String'];
  comments: Scalars['String'];
  id: Scalars['ID'];
  ml_order_id?: Maybe<Scalars['String']>;
  mrn: Scalars['String'];
  ordered_by: Physician;
  pathologist_qc?: Maybe<Pathologist_Qc>;
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  sample_id: Scalars['String'];
  sample_location: Scalars['String'];
  sample_type: Sample_Type;
  search_string_lower: Scalars['String'];
  status: StatusUpdate;
};


export type SampleCaseArgs = {
  created_date?: Maybe<Scalars['String']>;
  created_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_CaseFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_CaseOrdering>>>;
};


export type SampleOrdered_ByArgs = {
  badge_id?: Maybe<Scalars['String']>;
  badge_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  degrees?: Maybe<Scalars['String']>;
  degreess?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  emails?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_PhysicianFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_PhysicianOrdering>>>;
  phone_number?: Maybe<Scalars['String']>;
  phone_numbers?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type SamplePathologist_QcArgs = {
  acceptance_value?: Maybe<Qc_Acceptance_Value>;
  acceptance_values?: Maybe<Array<Maybe<Qc_Acceptance_Value>>>;
  diagnosis?: Maybe<Scalars['String']>;
  diagnosiss?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Pathologist_QcFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  macro_dissection_required?: Maybe<Scalars['Boolean']>;
  macro_dissection_requireds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  orderBy?: Maybe<Array<Maybe<_Pathologist_QcOrdering>>>;
  percent_neoplastic_cells?: Maybe<Scalars['Float']>;
  percent_neoplastic_cellss?: Maybe<Array<Maybe<Scalars['Float']>>>;
  qc_date?: Maybe<Scalars['String']>;
  qc_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  sample_size_mm2?: Maybe<Scalars['Float']>;
  sample_size_mm2s?: Maybe<Array<Maybe<Scalars['Float']>>>;
};


export type SampleSample_TypeArgs = {
  filter?: Maybe<_Sample_TypeFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Sample_TypeOrdering>>>;
  requires_pathologist_qc?: Maybe<Scalars['Boolean']>;
  requires_pathologist_qcs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type SampleStatusArgs = {
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['String']>;
  dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_StatusUpdateFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_StatusUpdateOrdering>>>;
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
  rejected_reasons?: Maybe<Array<Maybe<Sample_Rejection_Reason_Fields>>>;
  status?: Maybe<AcceptedStatus>;
  statuss?: Maybe<Array<Maybe<AcceptedStatus>>>;
};

export enum Sample_Rejection_Reason_Fields {
  FailedQc = 'failed_qc',
  MissingHAndE = 'missing_h_and_e',
  NoOrder = 'no_order',
  None = 'none',
  Other = 'other',
  QuantityNotSufficient = 'quantity_not_sufficient',
  SampleExpired = 'sample_expired',
  WrongSampleType = 'wrong_sample_type'
}

export type Sample_Type = {
   __typename?: 'Sample_Type';
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  requires_pathologist_qc: Scalars['Boolean'];
};

export type StatusUpdate = {
   __typename?: 'StatusUpdate';
  _id?: Maybe<Scalars['Long']>;
  by: Molecular_Lab_User;
  comments?: Maybe<Scalars['String']>;
  date: Scalars['String'];
  hasStatus: HasStatus;
  id: Scalars['ID'];
  previousStatus?: Maybe<StatusUpdate>;
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
  status: AcceptedStatus;
};


export type StatusUpdateByArgs = {
  canApproveReagent?: Maybe<Scalars['Boolean']>;
  canApproveReagents?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditOrders?: Maybe<Scalars['Boolean']>;
  canEditOrderss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditPhysicians?: Maybe<Scalars['Boolean']>;
  canEditPhysicianss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditTests?: Maybe<Scalars['Boolean']>;
  canEditTestss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canEditUsers?: Maybe<Scalars['Boolean']>;
  canEditUserss?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  canQC?: Maybe<Scalars['Boolean']>;
  canQCs?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  filter?: Maybe<_Molecular_Lab_UserFilter>;
  first_name?: Maybe<Scalars['String']>;
  first_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_name?: Maybe<Scalars['String']>;
  last_names?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lower?: Maybe<Scalars['String']>;
  name_lowers?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Molecular_Lab_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_name?: Maybe<Scalars['String']>;
  user_names?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type StatusUpdateHasStatusArgs = {
  filter?: Maybe<_HasStatusFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_HasStatusOrdering>>>;
};


export type StatusUpdatePreviousStatusArgs = {
  comments?: Maybe<Scalars['String']>;
  commentss?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['String']>;
  dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_StatusUpdateFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_StatusUpdateOrdering>>>;
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
  rejected_reasons?: Maybe<Array<Maybe<Sample_Rejection_Reason_Fields>>>;
  status?: Maybe<AcceptedStatus>;
  statuss?: Maybe<Array<Maybe<AcceptedStatus>>>;
};

export type Bcr_AblCasesListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type Bcr_AblCasesListQuery = (
  { __typename?: 'QueryType' }
  & { Case?: Maybe<Array<Maybe<(
    { __typename?: 'Case' }
    & Pick<Case, 'id' | 'created_date'>
    & { created_by: (
      { __typename?: 'Molecular_Lab_User' }
      & Pick<Molecular_Lab_User, 'user_name'>
    ), order: (
      { __typename?: 'Order' }
      & Pick<Order, 'id' | 'patient_name' | 'search_string_lower' | 'mrn' | 'date_of_birth' | 'sex' | 'diagnosis' | 'ml_order_id' | 'received_order_id' | 'order_date' | 'received_date' | 'rejected_once'>
      & { test_ordered: (
        { __typename?: 'Molecular_Lab_Test' }
        & Pick<Molecular_Lab_Test, 'id' | 'name' | 'ngsBased'>
      ), status: (
        { __typename?: 'StatusUpdate' }
        & Pick<StatusUpdate, 'id' | 'status' | 'date'>
        & { by: (
          { __typename?: 'Molecular_Lab_User' }
          & Pick<Molecular_Lab_User, 'id' | 'user_name'>
        ), previousStatus?: Maybe<(
          { __typename?: 'StatusUpdate' }
          & Pick<StatusUpdate, 'id' | 'status' | 'date'>
          & { by: (
            { __typename?: 'Molecular_Lab_User' }
            & Pick<Molecular_Lab_User, 'id' | 'user_name'>
          ), previousStatus?: Maybe<(
            { __typename?: 'StatusUpdate' }
            & Pick<StatusUpdate, 'id' | 'status' | 'date'>
            & { by: (
              { __typename?: 'Molecular_Lab_User' }
              & Pick<Molecular_Lab_User, 'id' | 'user_name'>
            ) }
          )> }
        )> }
      ), attending_physician: (
        { __typename?: 'Physician' }
        & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email'>
      ), ordered_by: (
        { __typename?: 'Physician' }
        & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email'>
      ) }
    ), sample: (
      { __typename?: 'Sample' }
      & Pick<Sample, 'id' | 'sample_id' | 'patient_name' | 'mrn' | 'collected_date' | 'received_date'>
      & { status: (
        { __typename?: 'StatusUpdate' }
        & Pick<StatusUpdate, 'id' | 'status' | 'date'>
        & { by: (
          { __typename?: 'Molecular_Lab_User' }
          & Pick<Molecular_Lab_User, 'id' | 'user_name'>
        ), previousStatus?: Maybe<(
          { __typename?: 'StatusUpdate' }
          & Pick<StatusUpdate, 'id' | 'status' | 'date'>
          & { by: (
            { __typename?: 'Molecular_Lab_User' }
            & Pick<Molecular_Lab_User, 'id' | 'user_name'>
          ), previousStatus?: Maybe<(
            { __typename?: 'StatusUpdate' }
            & Pick<StatusUpdate, 'id' | 'status' | 'date'>
            & { by: (
              { __typename?: 'Molecular_Lab_User' }
              & Pick<Molecular_Lab_User, 'id' | 'user_name'>
            ) }
          )> }
        )> }
      ), sample_type: (
        { __typename?: 'Sample_Type' }
        & Pick<Sample_Type, 'id' | 'name'>
      ) }
    ) }
  )>>> }
);

export type AcceptedOrdersListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type AcceptedOrdersListQuery = (
  { __typename?: 'QueryType' }
  & { Order?: Maybe<Array<Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'search_string_lower' | 'patient_name' | 'mrn' | 'date_of_birth' | 'sex' | 'diagnosis' | 'ml_order_id' | 'received_order_id' | 'order_date' | 'received_date' | 'rejected_once' | 'comments'>
    & { status: (
      { __typename?: 'StatusUpdate' }
      & Pick<StatusUpdate, 'id' | 'status' | 'date'>
      & { by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'id' | 'user_name'>
      ) }
    ), test_ordered: (
      { __typename?: 'Molecular_Lab_Test' }
      & Pick<Molecular_Lab_Test, 'id' | 'name' | 'description'>
      & { acceptable_sample_type: Array<Maybe<(
        { __typename?: 'Sample_Type' }
        & Pick<Sample_Type, 'name' | 'requires_pathologist_qc'>
      )>> }
    ), information_request: Array<Maybe<(
      { __typename?: 'Order_Information_Request' }
      & Pick<Order_Information_Request, 'id' | 'field' | 'requested_date' | 'resolved_date'>
      & { requested_by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'user_name'>
      ), resolved_by?: Maybe<(
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'user_name'>
      )> }
    )>>, attending_physician: (
      { __typename?: 'Physician' }
      & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email'>
    ), ordered_by: (
      { __typename?: 'Physician' }
      & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email' | 'badge_id'>
      & { orders: Array<Maybe<(
        { __typename?: 'Order' }
        & Pick<Order, 'ml_order_id'>
      )>> }
    ) }
  )>>> }
);

export type AcceptedSamplesListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type AcceptedSamplesListQuery = (
  { __typename?: 'QueryType' }
  & { Sample?: Maybe<Array<Maybe<(
    { __typename?: 'Sample' }
    & Pick<Sample, 'id' | 'sample_id' | 'patient_name' | 'mrn' | 'collected_date' | 'received_date' | 'comments' | 'ml_order_id' | 'received_order_id' | 'sample_location' | 'search_string_lower'>
    & { sample_type: (
      { __typename?: 'Sample_Type' }
      & Pick<Sample_Type, 'id' | 'name' | 'requires_pathologist_qc'>
    ), status: (
      { __typename?: 'StatusUpdate' }
      & Pick<StatusUpdate, 'id' | 'status' | 'date'>
      & { by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'id' | 'user_name'>
      ) }
    ), ordered_by: (
      { __typename?: 'Physician' }
      & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email' | 'badge_id'>
    ) }
  )>>> }
);

export type CreateOneStatusUpdateMutationVariables = {
  status_date: Scalars['String'];
  created_by: Scalars['ID'];
  status: AcceptedStatus;
  status_graph_id: Scalars['ID'];
  old_status_graph_id: Scalars['ID'];
};


export type CreateOneStatusUpdateMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createStatusUpdate' | 'addStatusUpdateBy' | 'addStatusUpdatePreviousStatus'>
);

export type CreateCaseMutationVariables = {
  created_date: Scalars['String'];
  id: Scalars['ID'];
  created_by: Scalars['ID'];
  order_graph_id: Scalars['ID'];
  order_status_graph_id: Scalars['ID'];
  sample_graph_id: Scalars['ID'];
  sample_status_graph_id: Scalars['ID'];
};


export type CreateCaseMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createCase' | 'addCaseCreated_by' | 'addCaseOrder' | 'addOrderStatus' | 'addCaseSample' | 'addSampleStatus'>
);

export type InquiryListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type InquiryListQuery = (
  { __typename?: 'QueryType' }
  & { Order?: Maybe<Array<Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'search_string_lower' | 'patient_name' | 'mrn' | 'date_of_birth' | 'sex' | 'diagnosis' | 'ml_order_id' | 'received_order_id' | 'order_date' | 'received_date' | 'rejected_once' | 'comments'>
    & { status: (
      { __typename?: 'StatusUpdate' }
      & Pick<StatusUpdate, 'id' | 'date' | 'status'>
      & { by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'id' | 'user_name'>
      ) }
    ), test_ordered: (
      { __typename?: 'Molecular_Lab_Test' }
      & Pick<Molecular_Lab_Test, 'id' | 'name' | 'description'>
      & { acceptable_sample_type: Array<Maybe<(
        { __typename?: 'Sample_Type' }
        & Pick<Sample_Type, 'name' | 'requires_pathologist_qc'>
      )>> }
    ), information_request: Array<Maybe<(
      { __typename?: 'Order_Information_Request' }
      & Pick<Order_Information_Request, 'id' | 'field' | 'requested_date' | 'resolved_date'>
      & { requested_by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'user_name'>
      ), resolved_by?: Maybe<(
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'user_name'>
      )> }
    )>>, attending_physician: (
      { __typename?: 'Physician' }
      & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email'>
    ), ordered_by: (
      { __typename?: 'Physician' }
      & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email' | 'badge_id'>
      & { orders: Array<Maybe<(
        { __typename?: 'Order' }
        & Pick<Order, 'ml_order_id'>
      )>> }
    ) }
  )>>> }
);

export type GetUserQueryVariables = {};


export type GetUserQuery = (
  { __typename?: 'QueryType' }
  & { Molecular_Lab_User?: Maybe<Array<Maybe<(
    { __typename?: 'Molecular_Lab_User' }
    & Pick<Molecular_Lab_User, 'id' | 'first_name' | 'last_name' | 'name_lower' | 'user_name' | 'password' | 'canQC' | 'canEditUsers' | 'canEditTests' | 'canEditOrders' | 'canEditPhysicians'>
  )>>> }
);

export type CasesListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type CasesListQuery = (
  { __typename?: 'QueryType' }
  & { Case?: Maybe<Array<Maybe<(
    { __typename?: 'Case' }
    & Pick<Case, 'id' | 'created_date'>
    & { created_by: (
      { __typename?: 'Molecular_Lab_User' }
      & Pick<Molecular_Lab_User, 'user_name'>
    ), order: (
      { __typename?: 'Order' }
      & Pick<Order, 'id' | 'patient_name' | 'search_string_lower' | 'mrn' | 'date_of_birth' | 'sex' | 'diagnosis' | 'ml_order_id' | 'received_order_id' | 'order_date' | 'received_date' | 'rejected_once'>
      & { test_ordered: (
        { __typename?: 'Molecular_Lab_Test' }
        & Pick<Molecular_Lab_Test, 'id' | 'name' | 'ngsBased'>
      ), status: (
        { __typename?: 'StatusUpdate' }
        & Pick<StatusUpdate, 'id' | 'status' | 'date'>
        & { by: (
          { __typename?: 'Molecular_Lab_User' }
          & Pick<Molecular_Lab_User, 'id' | 'user_name'>
        ), previousStatus?: Maybe<(
          { __typename?: 'StatusUpdate' }
          & Pick<StatusUpdate, 'id' | 'status' | 'date'>
          & { by: (
            { __typename?: 'Molecular_Lab_User' }
            & Pick<Molecular_Lab_User, 'id' | 'user_name'>
          ), previousStatus?: Maybe<(
            { __typename?: 'StatusUpdate' }
            & Pick<StatusUpdate, 'id' | 'status' | 'date'>
            & { by: (
              { __typename?: 'Molecular_Lab_User' }
              & Pick<Molecular_Lab_User, 'id' | 'user_name'>
            ) }
          )> }
        )> }
      ), attending_physician: (
        { __typename?: 'Physician' }
        & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email'>
      ), ordered_by: (
        { __typename?: 'Physician' }
        & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email'>
      ) }
    ), sample: (
      { __typename?: 'Sample' }
      & Pick<Sample, 'id' | 'sample_id' | 'patient_name' | 'mrn' | 'collected_date' | 'received_date'>
      & { status: (
        { __typename?: 'StatusUpdate' }
        & Pick<StatusUpdate, 'id' | 'status' | 'date'>
        & { by: (
          { __typename?: 'Molecular_Lab_User' }
          & Pick<Molecular_Lab_User, 'id' | 'user_name'>
        ), previousStatus?: Maybe<(
          { __typename?: 'StatusUpdate' }
          & Pick<StatusUpdate, 'id' | 'status' | 'date'>
          & { by: (
            { __typename?: 'Molecular_Lab_User' }
            & Pick<Molecular_Lab_User, 'id' | 'user_name'>
          ), previousStatus?: Maybe<(
            { __typename?: 'StatusUpdate' }
            & Pick<StatusUpdate, 'id' | 'status' | 'date'>
            & { by: (
              { __typename?: 'Molecular_Lab_User' }
              & Pick<Molecular_Lab_User, 'id' | 'user_name'>
            ) }
          )> }
        )> }
      ), sample_type: (
        { __typename?: 'Sample_Type' }
        & Pick<Sample_Type, 'id' | 'name'>
      ) }
    ) }
  )>>> }
);

export type SamplesListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type SamplesListQuery = (
  { __typename?: 'QueryType' }
  & { Sample?: Maybe<Array<Maybe<(
    { __typename?: 'Sample' }
    & Pick<Sample, 'id' | 'sample_id' | 'patient_name' | 'mrn' | 'collected_date' | 'received_date' | 'comments' | 'received_order_id' | 'sample_location' | 'search_string_lower'>
    & { sample_type: (
      { __typename?: 'Sample_Type' }
      & Pick<Sample_Type, 'id' | 'name' | 'requires_pathologist_qc'>
    ), status: (
      { __typename?: 'StatusUpdate' }
      & Pick<StatusUpdate, 'id' | 'status' | 'date'>
      & { by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'id' | 'user_name'>
      ) }
    ), ordered_by: (
      { __typename?: 'Physician' }
      & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email' | 'badge_id'>
    ) }
  )>>> }
);

export type AcceptSampleMutationVariables = {
  status: AcceptedStatus;
  status_date: Scalars['String'];
  id: Scalars['ID'];
  accepted_by: Scalars['ID'];
  status_graph_id: Scalars['ID'];
  old_status_graph_id: Scalars['ID'];
};


export type AcceptSampleMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createStatusUpdate' | 'addStatusUpdateBy' | 'addStatusUpdatePreviousStatus' | 'addSampleStatus'>
);

export type RejectSampleMutationVariables = {
  status_date: Scalars['String'];
  id: Scalars['ID'];
  rejected_by: Scalars['ID'];
  status_graph_id: Scalars['ID'];
  old_status_graph_id: Scalars['ID'];
  comments: Scalars['String'];
  rejected_reason: Sample_Rejection_Reason_Fields;
};


export type RejectSampleMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createStatusUpdate' | 'addStatusUpdateBy' | 'addStatusUpdatePreviousStatus' | 'addSampleStatus'>
);

export type CreateSampleMutationVariables = {
  collected_date: Scalars['String'];
  comments: Scalars['String'];
  id: Scalars['ID'];
  mrn: Scalars['String'];
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  sample_id: Scalars['String'];
  sample_location: Scalars['String'];
  search_string_lower: Scalars['String'];
  ordered_by_id: Scalars['ID'];
  sample_type_id: Scalars['ID'];
  status_date: Scalars['String'];
  status_graph_id: Scalars['ID'];
  created_by: Scalars['ID'];
};


export type CreateSampleMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createSample' | 'addSampleSample_type' | 'addSampleOrdered_by' | 'createStatusUpdate' | 'addStatusUpdateBy' | 'addSampleStatus'>
);

export type UpdateSampleMutationVariables = {
  collected_date: Scalars['String'];
  comments: Scalars['String'];
  id: Scalars['ID'];
  mrn: Scalars['String'];
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  sample_id: Scalars['String'];
  sample_location: Scalars['String'];
  search_string_lower: Scalars['String'];
  ordered_by_id: Scalars['ID'];
  sample_type_id: Scalars['ID'];
};


export type UpdateSampleMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'updateSample' | 'addSampleSample_type' | 'addSampleOrdered_by'>
);

export type OrdersListQueryVariables = {
  str?: Maybe<Scalars['String']>;
  str2?: Maybe<Scalars['String']>;
};


export type OrdersListQuery = (
  { __typename?: 'QueryType' }
  & { Order?: Maybe<Array<Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'search_string_lower' | 'patient_name' | 'mrn' | 'date_of_birth' | 'sex' | 'diagnosis' | 'ml_order_id' | 'received_order_id' | 'order_date' | 'received_date' | 'rejected_once' | 'comments'>
    & { status: (
      { __typename?: 'StatusUpdate' }
      & Pick<StatusUpdate, 'id' | 'date' | 'status'>
      & { by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'id' | 'user_name'>
      ) }
    ), test_ordered: (
      { __typename?: 'Molecular_Lab_Test' }
      & Pick<Molecular_Lab_Test, 'id' | 'name' | 'description'>
      & { acceptable_sample_type: Array<Maybe<(
        { __typename?: 'Sample_Type' }
        & Pick<Sample_Type, 'name' | 'requires_pathologist_qc'>
      )>> }
    ), information_request: Array<Maybe<(
      { __typename?: 'Order_Information_Request' }
      & Pick<Order_Information_Request, 'id' | 'field' | 'requested_date' | 'resolved_date'>
      & { requested_by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'user_name'>
      ), resolved_by?: Maybe<(
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'user_name'>
      )> }
    )>>, attending_physician: (
      { __typename?: 'Physician' }
      & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email'>
    ), ordered_by: (
      { __typename?: 'Physician' }
      & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email' | 'badge_id'>
      & { orders: Array<Maybe<(
        { __typename?: 'Order' }
        & Pick<Order, 'ml_order_id'>
      )>> }
    ) }
  )>>> }
);

export type UpdateOrder_Information_RequestMutationVariables = {
  field: Order_Information_Request_Fields;
  id: Scalars['ID'];
  requested_date: Scalars['String'];
  resolved_date: Scalars['String'];
  resolved_by: Scalars['ID'];
};


export type UpdateOrder_Information_RequestMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'updateOrder_Information_Request' | 'addOrder_Information_RequestResolved_by'>
);

export type AddOrder_Information_RequestMutationVariables = {
  field: Order_Information_Request_Fields;
  id: Scalars['ID'];
  requested_date: Scalars['String'];
  requested_by: Scalars['ID'];
  order_id: Scalars['ID'];
};


export type AddOrder_Information_RequestMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createOrder_Information_Request' | 'addOrder_Information_RequestRequested_by' | 'addOrderInformation_request'>
);

export type UpdateOrderMutationVariables = {
  comments: Scalars['String'];
  date_of_birth: Scalars['String'];
  diagnosis: Scalars['String'];
  id: Scalars['ID'];
  ml_order_id: Scalars['String'];
  mrn: Scalars['String'];
  order_date: Scalars['String'];
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  rejected_once: Scalars['Boolean'];
  search_string_lower: Scalars['String'];
  sex: Scalars['String'];
  attending_physician_id: Scalars['ID'];
  ordered_by_id: Scalars['ID'];
  test_id: Scalars['ID'];
};


export type UpdateOrderMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'updateOrder' | 'addOrderAttending_physician' | 'addOrderOrdered_by' | 'addOrderTest_ordered'>
);

export type CreateOrderMutationVariables = {
  comments: Scalars['String'];
  date_of_birth: Scalars['String'];
  diagnosis: Scalars['String'];
  id: Scalars['ID'];
  ml_order_id: Scalars['String'];
  mrn: Scalars['String'];
  order_date: Scalars['String'];
  patient_name: Scalars['String'];
  received_date: Scalars['String'];
  received_order_id: Scalars['String'];
  rejected_once: Scalars['Boolean'];
  search_string_lower: Scalars['String'];
  sex: Scalars['String'];
  attending_physician_id: Scalars['ID'];
  ordered_by_id: Scalars['ID'];
  test_id: Scalars['ID'];
  status_date: Scalars['String'];
  status_graph_id: Scalars['ID'];
  created_by: Scalars['ID'];
};


export type CreateOrderMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createOrder' | 'addOrderAttending_physician' | 'addOrderOrdered_by' | 'addOrderTest_ordered' | 'createStatusUpdate' | 'addStatusUpdateBy' | 'addOrderStatus'>
);

export type AcceptOrderMutationVariables = {
  status_date: Scalars['String'];
  id: Scalars['ID'];
  accepted_by: Scalars['ID'];
  status_graph_id: Scalars['ID'];
  old_status_graph_id: Scalars['ID'];
};


export type AcceptOrderMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createStatusUpdate' | 'addStatusUpdateBy' | 'addStatusUpdatePreviousStatus' | 'addOrderStatus'>
);

export type RejectOrderMutationVariables = {
  status_date: Scalars['String'];
  id: Scalars['ID'];
  rejected_by: Scalars['ID'];
  status_graph_id: Scalars['ID'];
  old_status_graph_id: Scalars['ID'];
};


export type RejectOrderMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createStatusUpdate' | 'addStatusUpdateBy' | 'addStatusUpdatePreviousStatus' | 'addOrderStatus'>
);

export type PhysicianListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type PhysicianListQuery = (
  { __typename?: 'QueryType' }
  & { Physician?: Maybe<Array<Maybe<(
    { __typename?: 'Physician' }
    & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email' | 'phone_number' | 'badge_id'>
    & { orders: Array<Maybe<(
      { __typename?: 'Order' }
      & Pick<Order, 'id' | 'patient_name' | 'received_order_id' | 'ml_order_id' | 'order_date' | 'mrn' | 'received_date'>
      & { test_ordered: (
        { __typename?: 'Molecular_Lab_Test' }
        & Pick<Molecular_Lab_Test, 'id' | 'name'>
      ), status: (
        { __typename?: 'StatusUpdate' }
        & Pick<StatusUpdate, 'id' | 'status'>
      ) }
    )>> }
  )>>> }
);

export type Update_PhysicianMutationVariables = {
  badge_id: Scalars['String'];
  degrees: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  phone_number: Scalars['String'];
};


export type Update_PhysicianMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'updatePhysician'>
);

export type Create_PhysicianMutationVariables = {
  badge_id: Scalars['String'];
  degrees: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  phone_number: Scalars['String'];
};


export type Create_PhysicianMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createPhysician'>
);

export type ResolveSamplesListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type ResolveSamplesListQuery = (
  { __typename?: 'QueryType' }
  & { Sample?: Maybe<Array<Maybe<(
    { __typename?: 'Sample' }
    & Pick<Sample, 'id' | 'sample_id' | 'patient_name' | 'mrn' | 'collected_date' | 'received_date' | 'comments' | 'ml_order_id' | 'received_order_id' | 'sample_location' | 'search_string_lower'>
    & { sample_type: (
      { __typename?: 'Sample_Type' }
      & Pick<Sample_Type, 'id' | 'name' | 'requires_pathologist_qc'>
    ), status: (
      { __typename?: 'StatusUpdate' }
      & Pick<StatusUpdate, 'id' | 'status' | 'rejected_reason' | 'comments' | 'date'>
      & { by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'id' | 'user_name'>
      ) }
    ), ordered_by: (
      { __typename?: 'Physician' }
      & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email' | 'badge_id'>
    ), pathologist_qc?: Maybe<(
      { __typename?: 'Pathologist_QC' }
      & Pick<Pathologist_Qc, 'id' | 'acceptance_value' | 'diagnosis' | 'macro_dissection_required' | 'percent_neoplastic_cells' | 'qc_date'>
      & { qc_by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'id' | 'user_name'>
      ) }
    )> }
  )>>> }
);

export type ResolveSampleMutationVariables = {
  status_date: Scalars['String'];
  id: Scalars['ID'];
  rejected_by: Scalars['ID'];
  status_graph_id: Scalars['ID'];
  old_status_graph_id: Scalars['ID'];
  comments: Scalars['String'];
  rejected_reason: Sample_Rejection_Reason_Fields;
};


export type ResolveSampleMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createStatusUpdate' | 'addStatusUpdateBy' | 'addStatusUpdatePreviousStatus' | 'addSampleStatus'>
);

export type ReadyForQcSamplesListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type ReadyForQcSamplesListQuery = (
  { __typename?: 'QueryType' }
  & { Sample?: Maybe<Array<Maybe<(
    { __typename?: 'Sample' }
    & Pick<Sample, 'id' | 'sample_id' | 'patient_name' | 'mrn' | 'collected_date' | 'received_date' | 'comments' | 'ml_order_id' | 'received_order_id' | 'sample_location' | 'search_string_lower'>
    & { sample_type: (
      { __typename?: 'Sample_Type' }
      & Pick<Sample_Type, 'id' | 'name' | 'requires_pathologist_qc'>
    ), status: (
      { __typename?: 'StatusUpdate' }
      & Pick<StatusUpdate, 'id' | 'status' | 'date'>
      & { by: (
        { __typename?: 'Molecular_Lab_User' }
        & Pick<Molecular_Lab_User, 'id' | 'user_name'>
      ) }
    ), ordered_by: (
      { __typename?: 'Physician' }
      & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees' | 'email' | 'badge_id'>
    ) }
  )>>> }
);

export type Qc_AcceptSampleMutationVariables = {
  qc_acceptance_value: Qc_Acceptance_Value;
  diagnosis: Scalars['String'];
  qc_graph_id: Scalars['ID'];
  macro_dissection_required: Scalars['Boolean'];
  percent_neoplastic_cells: Scalars['Float'];
  qc_date: Scalars['String'];
  sample_size_mm2: Scalars['Float'];
  status: AcceptedStatus;
  status_date: Scalars['String'];
  sample_graph_id: Scalars['ID'];
  accepted_by: Scalars['ID'];
  status_graph_id: Scalars['ID'];
  old_status_graph_id: Scalars['ID'];
};


export type Qc_AcceptSampleMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createPathologist_QC' | 'addPathologist_QCQc_by' | 'addSamplePathologist_qc' | 'createStatusUpdate' | 'addStatusUpdateBy' | 'addStatusUpdatePreviousStatus' | 'addSampleStatus'>
);

export type Qc_RejectSampleMutationVariables = {
  qc_acceptance_value: Qc_Acceptance_Value;
  diagnosis: Scalars['String'];
  qc_graph_id: Scalars['ID'];
  macro_dissection_required: Scalars['Boolean'];
  percent_neoplastic_cells: Scalars['Float'];
  qc_date: Scalars['String'];
  sample_size_mm2: Scalars['Float'];
  status: AcceptedStatus;
  status_date: Scalars['String'];
  sample_graph_id: Scalars['ID'];
  accepted_by: Scalars['ID'];
  status_graph_id: Scalars['ID'];
  old_status_graph_id: Scalars['ID'];
  comments: Scalars['String'];
  rejected_reason?: Maybe<Sample_Rejection_Reason_Fields>;
};


export type Qc_RejectSampleMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createPathologist_QC' | 'addPathologist_QCQc_by' | 'addSamplePathologist_qc' | 'createStatusUpdate' | 'addStatusUpdateBy' | 'addStatusUpdatePreviousStatus' | 'addSampleStatus'>
);

export type TestsListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type TestsListQuery = (
  { __typename?: 'QueryType' }
  & { Molecular_Lab_Test?: Maybe<Array<Maybe<(
    { __typename?: 'Molecular_Lab_Test' }
    & Pick<Molecular_Lab_Test, 'id' | 'name' | 'description' | 'ngsBased' | 'authorized_diagnoses'>
    & { acceptable_sample_type: Array<Maybe<(
      { __typename?: 'Sample_Type' }
      & Pick<Sample_Type, 'id' | 'name' | 'requires_pathologist_qc'>
    )>>, orders: Array<Maybe<(
      { __typename?: 'Order' }
      & Pick<Order, 'id' | 'patient_name' | 'received_order_id' | 'ml_order_id' | 'order_date' | 'mrn' | 'received_date'>
      & { ordered_by: (
        { __typename?: 'Physician' }
        & Pick<Physician, 'id' | 'first_name' | 'last_name' | 'degrees'>
      ), status: (
        { __typename?: 'StatusUpdate' }
        & Pick<StatusUpdate, 'id' | 'status'>
      ) }
    )>> }
  )>>> }
);

export type Update_TestMutationVariables = {
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  name_lower: Scalars['String'];
  ngsBased: Scalars['Boolean'];
  acceptable_sample_type: Array<Scalars['ID']>;
  authorized_diagnoses: Array<Maybe<Scalars['String']>>;
};


export type Update_TestMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'updateMolecular_Lab_Test' | 'addMolecular_Lab_TestAcceptable_sample_type'>
);

export type Create_TestMutationVariables = {
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  name_lower: Scalars['String'];
  ngsBased: Scalars['Boolean'];
  acceptable_sample_type: Array<Scalars['ID']>;
  authorized_diagnoses: Array<Maybe<Scalars['String']>>;
};


export type Create_TestMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createMolecular_Lab_Test' | 'addMolecular_Lab_TestAcceptable_sample_type'>
);

export type UsersListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type UsersListQuery = (
  { __typename?: 'QueryType' }
  & { Molecular_Lab_User?: Maybe<Array<Maybe<(
    { __typename?: 'Molecular_Lab_User' }
    & Pick<Molecular_Lab_User, 'id' | 'first_name' | 'last_name' | 'name_lower' | 'user_name' | 'password' | 'canQC' | 'canEditUsers' | 'canEditTests' | 'canEditOrders' | 'canEditPhysicians' | 'canApproveReagent'>
  )>>> }
);

export type Update_UserMutationVariables = {
  canEditOrders: Scalars['Boolean'];
  canEditPhysicians: Scalars['Boolean'];
  canEditTests: Scalars['Boolean'];
  canEditUsers: Scalars['Boolean'];
  canQC: Scalars['Boolean'];
  canApproveReagent: Scalars['Boolean'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  password: Scalars['String'];
  user_name: Scalars['String'];
};


export type Update_UserMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'updateMolecular_Lab_User'>
);

export type Create_UserMutationVariables = {
  canEditOrders: Scalars['Boolean'];
  canEditPhysicians: Scalars['Boolean'];
  canEditTests: Scalars['Boolean'];
  canEditUsers: Scalars['Boolean'];
  canQC: Scalars['Boolean'];
  canApproveReagent: Scalars['Boolean'];
  first_name: Scalars['String'];
  id: Scalars['ID'];
  last_name: Scalars['String'];
  name_lower: Scalars['String'];
  password: Scalars['String'];
  user_name: Scalars['String'];
};


export type Create_UserMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'createMolecular_Lab_User'>
);

export type TestByIdQueryVariables = {
  str?: Maybe<Scalars['ID']>;
};


export type TestByIdQuery = (
  { __typename?: 'QueryType' }
  & { Molecular_Lab_Test?: Maybe<Array<Maybe<(
    { __typename?: 'Molecular_Lab_Test' }
    & Pick<Molecular_Lab_Test, 'id' | 'authorized_diagnoses'>
  )>>> }
);

export type SampleTypeListQueryVariables = {};


export type SampleTypeListQuery = (
  { __typename?: 'QueryType' }
  & { Sample_Type?: Maybe<Array<Maybe<(
    { __typename?: 'Sample_Type' }
    & Pick<Sample_Type, 'id' | 'name'>
  )>>> }
);


export const Bcr_AblCasesListDocument = gql`
    query BCR_ABLCasesList($str: String) {
  Case(filter: {order: {search_string_lower_contains: $str}}) {
    id
    created_date
    created_by {
      user_name
    }
    order {
      id
      patient_name
      search_string_lower
      mrn
      date_of_birth
      sex
      diagnosis
      test_ordered {
        id
        name
        ngsBased
      }
      ml_order_id
      received_order_id
      order_date
      received_date
      rejected_once
      status {
        id
        status
        date
        by {
          id
          user_name
        }
        previousStatus {
          id
          status
          date
          by {
            id
            user_name
          }
          previousStatus {
            id
            status
            date
            by {
              id
              user_name
            }
          }
        }
      }
      attending_physician {
        id
        first_name
        last_name
        degrees
        email
      }
      ordered_by {
        id
        first_name
        last_name
        degrees
        email
      }
    }
    sample {
      id
      sample_id
      status {
        id
        status
        date
        by {
          id
          user_name
        }
        previousStatus {
          id
          status
          date
          by {
            id
            user_name
          }
          previousStatus {
            id
            status
            date
            by {
              id
              user_name
            }
          }
        }
      }
      patient_name
      mrn
      collected_date
      received_date
      sample_type {
        id
        name
      }
    }
  }
}
    `;
export type Bcr_AblCasesListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Bcr_AblCasesListQuery, Bcr_AblCasesListQueryVariables>, 'query'>;

    export const Bcr_AblCasesListComponent = (props: Bcr_AblCasesListComponentProps) => (
      <ApolloReactComponents.Query<Bcr_AblCasesListQuery, Bcr_AblCasesListQueryVariables> query={Bcr_AblCasesListDocument} {...props} />
    );
    
export type Bcr_AblCasesListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<Bcr_AblCasesListQuery, Bcr_AblCasesListQueryVariables>
    } & TChildProps;
export function withBcr_AblCasesList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Bcr_AblCasesListQuery,
  Bcr_AblCasesListQueryVariables,
  Bcr_AblCasesListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, Bcr_AblCasesListQuery, Bcr_AblCasesListQueryVariables, Bcr_AblCasesListProps<TChildProps, TDataName>>(Bcr_AblCasesListDocument, {
      alias: 'bcrAblCasesList',
      ...operationOptions
    });
};

/**
 * __useBcr_AblCasesListQuery__
 *
 * To run a query within a React component, call `useBcr_AblCasesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useBcr_AblCasesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBcr_AblCasesListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useBcr_AblCasesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Bcr_AblCasesListQuery, Bcr_AblCasesListQueryVariables>) {
        return ApolloReactHooks.useQuery<Bcr_AblCasesListQuery, Bcr_AblCasesListQueryVariables>(Bcr_AblCasesListDocument, baseOptions);
      }
export function useBcr_AblCasesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Bcr_AblCasesListQuery, Bcr_AblCasesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Bcr_AblCasesListQuery, Bcr_AblCasesListQueryVariables>(Bcr_AblCasesListDocument, baseOptions);
        }
export type Bcr_AblCasesListQueryHookResult = ReturnType<typeof useBcr_AblCasesListQuery>;
export type Bcr_AblCasesListLazyQueryHookResult = ReturnType<typeof useBcr_AblCasesListLazyQuery>;
export type Bcr_AblCasesListQueryResult = ApolloReactCommon.QueryResult<Bcr_AblCasesListQuery, Bcr_AblCasesListQueryVariables>;
export const AcceptedOrdersListDocument = gql`
    query AcceptedOrdersList($str: String) {
  Order(orderBy: ml_order_id_asc, filter: {search_string_lower_contains: $str}) {
    id
    status {
      id
      status
      by {
        id
        user_name
      }
      date
    }
    search_string_lower
    patient_name
    mrn
    date_of_birth
    sex
    diagnosis
    ml_order_id
    received_order_id
    order_date
    received_date
    rejected_once
    comments
    test_ordered {
      id
      name
      description
      acceptable_sample_type {
        name
        requires_pathologist_qc
      }
    }
    information_request {
      id
      field
      requested_by {
        user_name
      }
      requested_date
      resolved_by {
        user_name
      }
      resolved_date
    }
    attending_physician {
      id
      first_name
      last_name
      degrees
      email
    }
    ordered_by {
      id
      first_name
      last_name
      degrees
      email
      badge_id
      orders {
        ml_order_id
      }
    }
  }
}
    `;
export type AcceptedOrdersListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AcceptedOrdersListQuery, AcceptedOrdersListQueryVariables>, 'query'>;

    export const AcceptedOrdersListComponent = (props: AcceptedOrdersListComponentProps) => (
      <ApolloReactComponents.Query<AcceptedOrdersListQuery, AcceptedOrdersListQueryVariables> query={AcceptedOrdersListDocument} {...props} />
    );
    
export type AcceptedOrdersListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AcceptedOrdersListQuery, AcceptedOrdersListQueryVariables>
    } & TChildProps;
export function withAcceptedOrdersList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AcceptedOrdersListQuery,
  AcceptedOrdersListQueryVariables,
  AcceptedOrdersListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AcceptedOrdersListQuery, AcceptedOrdersListQueryVariables, AcceptedOrdersListProps<TChildProps, TDataName>>(AcceptedOrdersListDocument, {
      alias: 'acceptedOrdersList',
      ...operationOptions
    });
};

/**
 * __useAcceptedOrdersListQuery__
 *
 * To run a query within a React component, call `useAcceptedOrdersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAcceptedOrdersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAcceptedOrdersListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useAcceptedOrdersListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AcceptedOrdersListQuery, AcceptedOrdersListQueryVariables>) {
        return ApolloReactHooks.useQuery<AcceptedOrdersListQuery, AcceptedOrdersListQueryVariables>(AcceptedOrdersListDocument, baseOptions);
      }
export function useAcceptedOrdersListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AcceptedOrdersListQuery, AcceptedOrdersListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AcceptedOrdersListQuery, AcceptedOrdersListQueryVariables>(AcceptedOrdersListDocument, baseOptions);
        }
export type AcceptedOrdersListQueryHookResult = ReturnType<typeof useAcceptedOrdersListQuery>;
export type AcceptedOrdersListLazyQueryHookResult = ReturnType<typeof useAcceptedOrdersListLazyQuery>;
export type AcceptedOrdersListQueryResult = ApolloReactCommon.QueryResult<AcceptedOrdersListQuery, AcceptedOrdersListQueryVariables>;
export const AcceptedSamplesListDocument = gql`
    query AcceptedSamplesList($str: String) {
  Sample(filter: {search_string_lower_contains: $str}) {
    id
    sample_id
    patient_name
    mrn
    collected_date
    received_date
    sample_type {
      id
      name
      requires_pathologist_qc
    }
    comments
    ml_order_id
    received_order_id
    status {
      id
      status
      by {
        id
        user_name
      }
      date
    }
    sample_location
    search_string_lower
    ordered_by {
      id
      first_name
      last_name
      degrees
      email
      badge_id
    }
  }
}
    `;
export type AcceptedSamplesListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<AcceptedSamplesListQuery, AcceptedSamplesListQueryVariables>, 'query'>;

    export const AcceptedSamplesListComponent = (props: AcceptedSamplesListComponentProps) => (
      <ApolloReactComponents.Query<AcceptedSamplesListQuery, AcceptedSamplesListQueryVariables> query={AcceptedSamplesListDocument} {...props} />
    );
    
export type AcceptedSamplesListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AcceptedSamplesListQuery, AcceptedSamplesListQueryVariables>
    } & TChildProps;
export function withAcceptedSamplesList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AcceptedSamplesListQuery,
  AcceptedSamplesListQueryVariables,
  AcceptedSamplesListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AcceptedSamplesListQuery, AcceptedSamplesListQueryVariables, AcceptedSamplesListProps<TChildProps, TDataName>>(AcceptedSamplesListDocument, {
      alias: 'acceptedSamplesList',
      ...operationOptions
    });
};

/**
 * __useAcceptedSamplesListQuery__
 *
 * To run a query within a React component, call `useAcceptedSamplesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useAcceptedSamplesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAcceptedSamplesListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useAcceptedSamplesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AcceptedSamplesListQuery, AcceptedSamplesListQueryVariables>) {
        return ApolloReactHooks.useQuery<AcceptedSamplesListQuery, AcceptedSamplesListQueryVariables>(AcceptedSamplesListDocument, baseOptions);
      }
export function useAcceptedSamplesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AcceptedSamplesListQuery, AcceptedSamplesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AcceptedSamplesListQuery, AcceptedSamplesListQueryVariables>(AcceptedSamplesListDocument, baseOptions);
        }
export type AcceptedSamplesListQueryHookResult = ReturnType<typeof useAcceptedSamplesListQuery>;
export type AcceptedSamplesListLazyQueryHookResult = ReturnType<typeof useAcceptedSamplesListLazyQuery>;
export type AcceptedSamplesListQueryResult = ApolloReactCommon.QueryResult<AcceptedSamplesListQuery, AcceptedSamplesListQueryVariables>;
export const CreateOneStatusUpdateDocument = gql`
    mutation createOneStatusUpdate($status_date: String!, $created_by: ID!, $status: acceptedStatus!, $status_graph_id: ID!, $old_status_graph_id: ID!) {
  createStatusUpdate(status: $status, date: $status_date, id: $status_graph_id)
  addStatusUpdateBy(id: $status_graph_id, by: [$created_by])
  addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id])
}
    `;
export type CreateOneStatusUpdateMutationFn = ApolloReactCommon.MutationFunction<CreateOneStatusUpdateMutation, CreateOneStatusUpdateMutationVariables>;
export type CreateOneStatusUpdateComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateOneStatusUpdateMutation, CreateOneStatusUpdateMutationVariables>, 'mutation'>;

    export const CreateOneStatusUpdateComponent = (props: CreateOneStatusUpdateComponentProps) => (
      <ApolloReactComponents.Mutation<CreateOneStatusUpdateMutation, CreateOneStatusUpdateMutationVariables> mutation={CreateOneStatusUpdateDocument} {...props} />
    );
    
export type CreateOneStatusUpdateProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateOneStatusUpdateMutation, CreateOneStatusUpdateMutationVariables>
    } & TChildProps;
export function withCreateOneStatusUpdate<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateOneStatusUpdateMutation,
  CreateOneStatusUpdateMutationVariables,
  CreateOneStatusUpdateProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateOneStatusUpdateMutation, CreateOneStatusUpdateMutationVariables, CreateOneStatusUpdateProps<TChildProps, TDataName>>(CreateOneStatusUpdateDocument, {
      alias: 'createOneStatusUpdate',
      ...operationOptions
    });
};

/**
 * __useCreateOneStatusUpdateMutation__
 *
 * To run a mutation, you first call `useCreateOneStatusUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOneStatusUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOneStatusUpdateMutation, { data, loading, error }] = useCreateOneStatusUpdateMutation({
 *   variables: {
 *      status_date: // value for 'status_date'
 *      created_by: // value for 'created_by'
 *      status: // value for 'status'
 *      status_graph_id: // value for 'status_graph_id'
 *      old_status_graph_id: // value for 'old_status_graph_id'
 *   },
 * });
 */
export function useCreateOneStatusUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOneStatusUpdateMutation, CreateOneStatusUpdateMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOneStatusUpdateMutation, CreateOneStatusUpdateMutationVariables>(CreateOneStatusUpdateDocument, baseOptions);
      }
export type CreateOneStatusUpdateMutationHookResult = ReturnType<typeof useCreateOneStatusUpdateMutation>;
export type CreateOneStatusUpdateMutationResult = ApolloReactCommon.MutationResult<CreateOneStatusUpdateMutation>;
export type CreateOneStatusUpdateMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOneStatusUpdateMutation, CreateOneStatusUpdateMutationVariables>;
export const CreateCaseDocument = gql`
    mutation createCase($created_date: String!, $id: ID!, $created_by: ID!, $order_graph_id: ID!, $order_status_graph_id: ID!, $sample_graph_id: ID!, $sample_status_graph_id: ID!) {
  createCase(created_date: $created_date, id: $id)
  addCaseCreated_by(created_by: [$created_by], id: $id)
  addCaseOrder(id: $id, order: [$order_graph_id])
  addOrderStatus(id: $order_graph_id, status: [$order_status_graph_id])
  addCaseSample(id: $id, sample: [$sample_graph_id])
  addSampleStatus(id: $sample_graph_id, status: [$sample_status_graph_id])
}
    `;
export type CreateCaseMutationFn = ApolloReactCommon.MutationFunction<CreateCaseMutation, CreateCaseMutationVariables>;
export type CreateCaseComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateCaseMutation, CreateCaseMutationVariables>, 'mutation'>;

    export const CreateCaseComponent = (props: CreateCaseComponentProps) => (
      <ApolloReactComponents.Mutation<CreateCaseMutation, CreateCaseMutationVariables> mutation={CreateCaseDocument} {...props} />
    );
    
export type CreateCaseProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateCaseMutation, CreateCaseMutationVariables>
    } & TChildProps;
export function withCreateCase<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateCaseMutation,
  CreateCaseMutationVariables,
  CreateCaseProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateCaseMutation, CreateCaseMutationVariables, CreateCaseProps<TChildProps, TDataName>>(CreateCaseDocument, {
      alias: 'createCase',
      ...operationOptions
    });
};

/**
 * __useCreateCaseMutation__
 *
 * To run a mutation, you first call `useCreateCaseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCaseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCaseMutation, { data, loading, error }] = useCreateCaseMutation({
 *   variables: {
 *      created_date: // value for 'created_date'
 *      id: // value for 'id'
 *      created_by: // value for 'created_by'
 *      order_graph_id: // value for 'order_graph_id'
 *      order_status_graph_id: // value for 'order_status_graph_id'
 *      sample_graph_id: // value for 'sample_graph_id'
 *      sample_status_graph_id: // value for 'sample_status_graph_id'
 *   },
 * });
 */
export function useCreateCaseMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateCaseMutation, CreateCaseMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateCaseMutation, CreateCaseMutationVariables>(CreateCaseDocument, baseOptions);
      }
export type CreateCaseMutationHookResult = ReturnType<typeof useCreateCaseMutation>;
export type CreateCaseMutationResult = ApolloReactCommon.MutationResult<CreateCaseMutation>;
export type CreateCaseMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateCaseMutation, CreateCaseMutationVariables>;
export const InquiryListDocument = gql`
    query InquiryList($str: String) {
  Order(orderBy: ml_order_id_asc, filter: {search_string_lower_contains: $str}) {
    id
    status {
      id
      date
      status
      by {
        id
        user_name
      }
    }
    search_string_lower
    patient_name
    mrn
    date_of_birth
    sex
    diagnosis
    ml_order_id
    received_order_id
    order_date
    received_date
    rejected_once
    comments
    test_ordered {
      id
      name
      description
      acceptable_sample_type {
        name
        requires_pathologist_qc
      }
    }
    information_request {
      id
      field
      requested_by {
        user_name
      }
      requested_date
      resolved_by {
        user_name
      }
      resolved_date
    }
    attending_physician {
      id
      first_name
      last_name
      degrees
      email
    }
    ordered_by {
      id
      first_name
      last_name
      degrees
      email
      badge_id
      orders {
        ml_order_id
      }
    }
  }
}
    `;
export type InquiryListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<InquiryListQuery, InquiryListQueryVariables>, 'query'>;

    export const InquiryListComponent = (props: InquiryListComponentProps) => (
      <ApolloReactComponents.Query<InquiryListQuery, InquiryListQueryVariables> query={InquiryListDocument} {...props} />
    );
    
export type InquiryListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<InquiryListQuery, InquiryListQueryVariables>
    } & TChildProps;
export function withInquiryList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  InquiryListQuery,
  InquiryListQueryVariables,
  InquiryListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, InquiryListQuery, InquiryListQueryVariables, InquiryListProps<TChildProps, TDataName>>(InquiryListDocument, {
      alias: 'inquiryList',
      ...operationOptions
    });
};

/**
 * __useInquiryListQuery__
 *
 * To run a query within a React component, call `useInquiryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useInquiryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInquiryListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useInquiryListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<InquiryListQuery, InquiryListQueryVariables>) {
        return ApolloReactHooks.useQuery<InquiryListQuery, InquiryListQueryVariables>(InquiryListDocument, baseOptions);
      }
export function useInquiryListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<InquiryListQuery, InquiryListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<InquiryListQuery, InquiryListQueryVariables>(InquiryListDocument, baseOptions);
        }
export type InquiryListQueryHookResult = ReturnType<typeof useInquiryListQuery>;
export type InquiryListLazyQueryHookResult = ReturnType<typeof useInquiryListLazyQuery>;
export type InquiryListQueryResult = ApolloReactCommon.QueryResult<InquiryListQuery, InquiryListQueryVariables>;
export const GetUserDocument = gql`
    query GetUser {
  Molecular_Lab_User {
    id
    first_name
    last_name
    name_lower
    user_name
    password
    canQC
    canEditUsers
    canEditTests
    canEditOrders
    canEditPhysicians
  }
}
    `;
export type GetUserComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetUserQuery, GetUserQueryVariables>, 'query'>;

    export const GetUserComponent = (props: GetUserComponentProps) => (
      <ApolloReactComponents.Query<GetUserQuery, GetUserQueryVariables> query={GetUserDocument} {...props} />
    );
    
export type GetUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetUserQuery, GetUserQueryVariables>
    } & TChildProps;
export function withGetUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetUserQuery,
  GetUserQueryVariables,
  GetUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetUserQuery, GetUserQueryVariables, GetUserProps<TChildProps, TDataName>>(GetUserDocument, {
      alias: 'getUser',
      ...operationOptions
    });
};

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return ApolloReactHooks.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = ApolloReactCommon.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const CasesListDocument = gql`
    query CasesList($str: String) {
  Case(filter: {order: {search_string_lower_contains: $str}}) {
    id
    created_date
    created_by {
      user_name
    }
    order {
      id
      patient_name
      search_string_lower
      mrn
      date_of_birth
      sex
      diagnosis
      test_ordered {
        id
        name
        ngsBased
      }
      ml_order_id
      received_order_id
      order_date
      received_date
      rejected_once
      status {
        id
        status
        date
        by {
          id
          user_name
        }
        previousStatus {
          id
          status
          date
          by {
            id
            user_name
          }
          previousStatus {
            id
            status
            date
            by {
              id
              user_name
            }
          }
        }
      }
      attending_physician {
        id
        first_name
        last_name
        degrees
        email
      }
      ordered_by {
        id
        first_name
        last_name
        degrees
        email
      }
    }
    sample {
      id
      sample_id
      status {
        id
        status
        date
        by {
          id
          user_name
        }
        previousStatus {
          id
          status
          date
          by {
            id
            user_name
          }
          previousStatus {
            id
            status
            date
            by {
              id
              user_name
            }
          }
        }
      }
      patient_name
      mrn
      collected_date
      received_date
      sample_type {
        id
        name
      }
    }
  }
}
    `;
export type CasesListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<CasesListQuery, CasesListQueryVariables>, 'query'>;

    export const CasesListComponent = (props: CasesListComponentProps) => (
      <ApolloReactComponents.Query<CasesListQuery, CasesListQueryVariables> query={CasesListDocument} {...props} />
    );
    
export type CasesListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CasesListQuery, CasesListQueryVariables>
    } & TChildProps;
export function withCasesList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CasesListQuery,
  CasesListQueryVariables,
  CasesListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CasesListQuery, CasesListQueryVariables, CasesListProps<TChildProps, TDataName>>(CasesListDocument, {
      alias: 'casesList',
      ...operationOptions
    });
};

/**
 * __useCasesListQuery__
 *
 * To run a query within a React component, call `useCasesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useCasesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCasesListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useCasesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CasesListQuery, CasesListQueryVariables>) {
        return ApolloReactHooks.useQuery<CasesListQuery, CasesListQueryVariables>(CasesListDocument, baseOptions);
      }
export function useCasesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CasesListQuery, CasesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CasesListQuery, CasesListQueryVariables>(CasesListDocument, baseOptions);
        }
export type CasesListQueryHookResult = ReturnType<typeof useCasesListQuery>;
export type CasesListLazyQueryHookResult = ReturnType<typeof useCasesListLazyQuery>;
export type CasesListQueryResult = ApolloReactCommon.QueryResult<CasesListQuery, CasesListQueryVariables>;
export const SamplesListDocument = gql`
    query SamplesList($str: String) {
  Sample(filter: {AND: [{search_string_lower_contains: $str}, {status: {status: not_ready}}]}) {
    id
    sample_id
    patient_name
    mrn
    collected_date
    received_date
    sample_type {
      id
      name
      requires_pathologist_qc
    }
    status {
      id
      status
      by {
        id
        user_name
      }
      date
    }
    comments
    received_order_id
    sample_location
    search_string_lower
    ordered_by {
      id
      first_name
      last_name
      degrees
      email
      badge_id
    }
  }
}
    `;
export type SamplesListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SamplesListQuery, SamplesListQueryVariables>, 'query'>;

    export const SamplesListComponent = (props: SamplesListComponentProps) => (
      <ApolloReactComponents.Query<SamplesListQuery, SamplesListQueryVariables> query={SamplesListDocument} {...props} />
    );
    
export type SamplesListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SamplesListQuery, SamplesListQueryVariables>
    } & TChildProps;
export function withSamplesList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SamplesListQuery,
  SamplesListQueryVariables,
  SamplesListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SamplesListQuery, SamplesListQueryVariables, SamplesListProps<TChildProps, TDataName>>(SamplesListDocument, {
      alias: 'samplesList',
      ...operationOptions
    });
};

/**
 * __useSamplesListQuery__
 *
 * To run a query within a React component, call `useSamplesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSamplesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSamplesListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useSamplesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SamplesListQuery, SamplesListQueryVariables>) {
        return ApolloReactHooks.useQuery<SamplesListQuery, SamplesListQueryVariables>(SamplesListDocument, baseOptions);
      }
export function useSamplesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SamplesListQuery, SamplesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SamplesListQuery, SamplesListQueryVariables>(SamplesListDocument, baseOptions);
        }
export type SamplesListQueryHookResult = ReturnType<typeof useSamplesListQuery>;
export type SamplesListLazyQueryHookResult = ReturnType<typeof useSamplesListLazyQuery>;
export type SamplesListQueryResult = ApolloReactCommon.QueryResult<SamplesListQuery, SamplesListQueryVariables>;
export const AcceptSampleDocument = gql`
    mutation acceptSample($status: acceptedStatus!, $status_date: String!, $id: ID!, $accepted_by: ID!, $status_graph_id: ID!, $old_status_graph_id: ID!) {
  createStatusUpdate(status: $status, date: $status_date, id: $status_graph_id)
  addStatusUpdateBy(id: $status_graph_id, by: [$accepted_by])
  addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id])
  addSampleStatus(id: $id, status: [$status_graph_id])
}
    `;
export type AcceptSampleMutationFn = ApolloReactCommon.MutationFunction<AcceptSampleMutation, AcceptSampleMutationVariables>;
export type AcceptSampleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AcceptSampleMutation, AcceptSampleMutationVariables>, 'mutation'>;

    export const AcceptSampleComponent = (props: AcceptSampleComponentProps) => (
      <ApolloReactComponents.Mutation<AcceptSampleMutation, AcceptSampleMutationVariables> mutation={AcceptSampleDocument} {...props} />
    );
    
export type AcceptSampleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AcceptSampleMutation, AcceptSampleMutationVariables>
    } & TChildProps;
export function withAcceptSample<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AcceptSampleMutation,
  AcceptSampleMutationVariables,
  AcceptSampleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AcceptSampleMutation, AcceptSampleMutationVariables, AcceptSampleProps<TChildProps, TDataName>>(AcceptSampleDocument, {
      alias: 'acceptSample',
      ...operationOptions
    });
};

/**
 * __useAcceptSampleMutation__
 *
 * To run a mutation, you first call `useAcceptSampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptSampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptSampleMutation, { data, loading, error }] = useAcceptSampleMutation({
 *   variables: {
 *      status: // value for 'status'
 *      status_date: // value for 'status_date'
 *      id: // value for 'id'
 *      accepted_by: // value for 'accepted_by'
 *      status_graph_id: // value for 'status_graph_id'
 *      old_status_graph_id: // value for 'old_status_graph_id'
 *   },
 * });
 */
export function useAcceptSampleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AcceptSampleMutation, AcceptSampleMutationVariables>) {
        return ApolloReactHooks.useMutation<AcceptSampleMutation, AcceptSampleMutationVariables>(AcceptSampleDocument, baseOptions);
      }
export type AcceptSampleMutationHookResult = ReturnType<typeof useAcceptSampleMutation>;
export type AcceptSampleMutationResult = ApolloReactCommon.MutationResult<AcceptSampleMutation>;
export type AcceptSampleMutationOptions = ApolloReactCommon.BaseMutationOptions<AcceptSampleMutation, AcceptSampleMutationVariables>;
export const RejectSampleDocument = gql`
    mutation rejectSample($status_date: String!, $id: ID!, $rejected_by: ID!, $status_graph_id: ID!, $old_status_graph_id: ID!, $comments: String!, $rejected_reason: Sample_Rejection_Reason_Fields!) {
  createStatusUpdate(status: rejected, date: $status_date, id: $status_graph_id, comments: $comments, rejected_reason: $rejected_reason)
  addStatusUpdateBy(id: $status_graph_id, by: [$rejected_by])
  addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id])
  addSampleStatus(id: $id, status: [$status_graph_id])
}
    `;
export type RejectSampleMutationFn = ApolloReactCommon.MutationFunction<RejectSampleMutation, RejectSampleMutationVariables>;
export type RejectSampleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RejectSampleMutation, RejectSampleMutationVariables>, 'mutation'>;

    export const RejectSampleComponent = (props: RejectSampleComponentProps) => (
      <ApolloReactComponents.Mutation<RejectSampleMutation, RejectSampleMutationVariables> mutation={RejectSampleDocument} {...props} />
    );
    
export type RejectSampleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RejectSampleMutation, RejectSampleMutationVariables>
    } & TChildProps;
export function withRejectSample<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RejectSampleMutation,
  RejectSampleMutationVariables,
  RejectSampleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RejectSampleMutation, RejectSampleMutationVariables, RejectSampleProps<TChildProps, TDataName>>(RejectSampleDocument, {
      alias: 'rejectSample',
      ...operationOptions
    });
};

/**
 * __useRejectSampleMutation__
 *
 * To run a mutation, you first call `useRejectSampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectSampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectSampleMutation, { data, loading, error }] = useRejectSampleMutation({
 *   variables: {
 *      status_date: // value for 'status_date'
 *      id: // value for 'id'
 *      rejected_by: // value for 'rejected_by'
 *      status_graph_id: // value for 'status_graph_id'
 *      old_status_graph_id: // value for 'old_status_graph_id'
 *      comments: // value for 'comments'
 *      rejected_reason: // value for 'rejected_reason'
 *   },
 * });
 */
export function useRejectSampleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RejectSampleMutation, RejectSampleMutationVariables>) {
        return ApolloReactHooks.useMutation<RejectSampleMutation, RejectSampleMutationVariables>(RejectSampleDocument, baseOptions);
      }
export type RejectSampleMutationHookResult = ReturnType<typeof useRejectSampleMutation>;
export type RejectSampleMutationResult = ApolloReactCommon.MutationResult<RejectSampleMutation>;
export type RejectSampleMutationOptions = ApolloReactCommon.BaseMutationOptions<RejectSampleMutation, RejectSampleMutationVariables>;
export const CreateSampleDocument = gql`
    mutation createSample($collected_date: String!, $comments: String!, $id: ID!, $mrn: String!, $patient_name: String!, $received_date: String!, $received_order_id: String!, $sample_id: String!, $sample_location: String!, $search_string_lower: String!, $ordered_by_id: ID!, $sample_type_id: ID!, $status_date: String!, $status_graph_id: ID!, $created_by: ID!) {
  createSample(collected_date: $collected_date, comments: $comments, id: $id, mrn: $mrn, patient_name: $patient_name, received_date: $received_date, received_order_id: $received_order_id, sample_id: $sample_id, sample_location: $sample_location, search_string_lower: $search_string_lower)
  addSampleSample_type(sample_type: [$sample_type_id], id: $id)
  addSampleOrdered_by(ordered_by: [$ordered_by_id], id: $id)
  createStatusUpdate(status: not_ready, date: $status_date, id: $status_graph_id)
  addStatusUpdateBy(id: $status_graph_id, by: [$created_by])
  addSampleStatus(id: $id, status: [$status_graph_id])
}
    `;
export type CreateSampleMutationFn = ApolloReactCommon.MutationFunction<CreateSampleMutation, CreateSampleMutationVariables>;
export type CreateSampleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateSampleMutation, CreateSampleMutationVariables>, 'mutation'>;

    export const CreateSampleComponent = (props: CreateSampleComponentProps) => (
      <ApolloReactComponents.Mutation<CreateSampleMutation, CreateSampleMutationVariables> mutation={CreateSampleDocument} {...props} />
    );
    
export type CreateSampleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateSampleMutation, CreateSampleMutationVariables>
    } & TChildProps;
export function withCreateSample<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateSampleMutation,
  CreateSampleMutationVariables,
  CreateSampleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateSampleMutation, CreateSampleMutationVariables, CreateSampleProps<TChildProps, TDataName>>(CreateSampleDocument, {
      alias: 'createSample',
      ...operationOptions
    });
};

/**
 * __useCreateSampleMutation__
 *
 * To run a mutation, you first call `useCreateSampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSampleMutation, { data, loading, error }] = useCreateSampleMutation({
 *   variables: {
 *      collected_date: // value for 'collected_date'
 *      comments: // value for 'comments'
 *      id: // value for 'id'
 *      mrn: // value for 'mrn'
 *      patient_name: // value for 'patient_name'
 *      received_date: // value for 'received_date'
 *      received_order_id: // value for 'received_order_id'
 *      sample_id: // value for 'sample_id'
 *      sample_location: // value for 'sample_location'
 *      search_string_lower: // value for 'search_string_lower'
 *      ordered_by_id: // value for 'ordered_by_id'
 *      sample_type_id: // value for 'sample_type_id'
 *      status_date: // value for 'status_date'
 *      status_graph_id: // value for 'status_graph_id'
 *      created_by: // value for 'created_by'
 *   },
 * });
 */
export function useCreateSampleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSampleMutation, CreateSampleMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSampleMutation, CreateSampleMutationVariables>(CreateSampleDocument, baseOptions);
      }
export type CreateSampleMutationHookResult = ReturnType<typeof useCreateSampleMutation>;
export type CreateSampleMutationResult = ApolloReactCommon.MutationResult<CreateSampleMutation>;
export type CreateSampleMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSampleMutation, CreateSampleMutationVariables>;
export const UpdateSampleDocument = gql`
    mutation updateSample($collected_date: String!, $comments: String!, $id: ID!, $mrn: String!, $patient_name: String!, $received_date: String!, $received_order_id: String!, $sample_id: String!, $sample_location: String!, $search_string_lower: String!, $ordered_by_id: ID!, $sample_type_id: ID!) {
  updateSample(collected_date: $collected_date, comments: $comments, id: $id, mrn: $mrn, patient_name: $patient_name, received_date: $received_date, received_order_id: $received_order_id, sample_id: $sample_id, sample_location: $sample_location, search_string_lower: $search_string_lower)
  addSampleSample_type(sample_type: [$sample_type_id], id: $id)
  addSampleOrdered_by(ordered_by: [$ordered_by_id], id: $id)
}
    `;
export type UpdateSampleMutationFn = ApolloReactCommon.MutationFunction<UpdateSampleMutation, UpdateSampleMutationVariables>;
export type UpdateSampleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateSampleMutation, UpdateSampleMutationVariables>, 'mutation'>;

    export const UpdateSampleComponent = (props: UpdateSampleComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateSampleMutation, UpdateSampleMutationVariables> mutation={UpdateSampleDocument} {...props} />
    );
    
export type UpdateSampleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateSampleMutation, UpdateSampleMutationVariables>
    } & TChildProps;
export function withUpdateSample<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateSampleMutation,
  UpdateSampleMutationVariables,
  UpdateSampleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateSampleMutation, UpdateSampleMutationVariables, UpdateSampleProps<TChildProps, TDataName>>(UpdateSampleDocument, {
      alias: 'updateSample',
      ...operationOptions
    });
};

/**
 * __useUpdateSampleMutation__
 *
 * To run a mutation, you first call `useUpdateSampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSampleMutation, { data, loading, error }] = useUpdateSampleMutation({
 *   variables: {
 *      collected_date: // value for 'collected_date'
 *      comments: // value for 'comments'
 *      id: // value for 'id'
 *      mrn: // value for 'mrn'
 *      patient_name: // value for 'patient_name'
 *      received_date: // value for 'received_date'
 *      received_order_id: // value for 'received_order_id'
 *      sample_id: // value for 'sample_id'
 *      sample_location: // value for 'sample_location'
 *      search_string_lower: // value for 'search_string_lower'
 *      ordered_by_id: // value for 'ordered_by_id'
 *      sample_type_id: // value for 'sample_type_id'
 *   },
 * });
 */
export function useUpdateSampleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateSampleMutation, UpdateSampleMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateSampleMutation, UpdateSampleMutationVariables>(UpdateSampleDocument, baseOptions);
      }
export type UpdateSampleMutationHookResult = ReturnType<typeof useUpdateSampleMutation>;
export type UpdateSampleMutationResult = ApolloReactCommon.MutationResult<UpdateSampleMutation>;
export type UpdateSampleMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateSampleMutation, UpdateSampleMutationVariables>;
export const OrdersListDocument = gql`
    query OrdersList($str: String, $str2: String) {
  Order(orderBy: ml_order_id_asc, filter: {AND: [{OR: [{information_request_some: {id_starts_with: ""}}, {ml_order_id_starts_with: $str2}]}, {search_string_lower_contains: $str}, {status: {status: not_ready}}]}) {
    id
    status {
      id
      date
      status
      by {
        id
        user_name
      }
    }
    search_string_lower
    patient_name
    mrn
    date_of_birth
    sex
    diagnosis
    ml_order_id
    received_order_id
    order_date
    received_date
    rejected_once
    comments
    test_ordered {
      id
      name
      description
      acceptable_sample_type {
        name
        requires_pathologist_qc
      }
    }
    information_request {
      id
      field
      requested_by {
        user_name
      }
      requested_date
      resolved_by {
        user_name
      }
      resolved_date
    }
    attending_physician {
      id
      first_name
      last_name
      degrees
      email
    }
    ordered_by {
      id
      first_name
      last_name
      degrees
      email
      badge_id
      orders {
        ml_order_id
      }
    }
  }
}
    `;
export type OrdersListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OrdersListQuery, OrdersListQueryVariables>, 'query'>;

    export const OrdersListComponent = (props: OrdersListComponentProps) => (
      <ApolloReactComponents.Query<OrdersListQuery, OrdersListQueryVariables> query={OrdersListDocument} {...props} />
    );
    
export type OrdersListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<OrdersListQuery, OrdersListQueryVariables>
    } & TChildProps;
export function withOrdersList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  OrdersListQuery,
  OrdersListQueryVariables,
  OrdersListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, OrdersListQuery, OrdersListQueryVariables, OrdersListProps<TChildProps, TDataName>>(OrdersListDocument, {
      alias: 'ordersList',
      ...operationOptions
    });
};

/**
 * __useOrdersListQuery__
 *
 * To run a query within a React component, call `useOrdersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersListQuery({
 *   variables: {
 *      str: // value for 'str'
 *      str2: // value for 'str2'
 *   },
 * });
 */
export function useOrdersListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OrdersListQuery, OrdersListQueryVariables>) {
        return ApolloReactHooks.useQuery<OrdersListQuery, OrdersListQueryVariables>(OrdersListDocument, baseOptions);
      }
export function useOrdersListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OrdersListQuery, OrdersListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OrdersListQuery, OrdersListQueryVariables>(OrdersListDocument, baseOptions);
        }
export type OrdersListQueryHookResult = ReturnType<typeof useOrdersListQuery>;
export type OrdersListLazyQueryHookResult = ReturnType<typeof useOrdersListLazyQuery>;
export type OrdersListQueryResult = ApolloReactCommon.QueryResult<OrdersListQuery, OrdersListQueryVariables>;
export const UpdateOrder_Information_RequestDocument = gql`
    mutation updateOrder_Information_Request($field: Order_Information_Request_Fields!, $id: ID!, $requested_date: String!, $resolved_date: String!, $resolved_by: ID!) {
  updateOrder_Information_Request(field: $field, id: $id, requested_date: $requested_date, resolved_date: $resolved_date)
  addOrder_Information_RequestResolved_by(id: $id, resolved_by: [$resolved_by])
}
    `;
export type UpdateOrder_Information_RequestMutationFn = ApolloReactCommon.MutationFunction<UpdateOrder_Information_RequestMutation, UpdateOrder_Information_RequestMutationVariables>;
export type UpdateOrder_Information_RequestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateOrder_Information_RequestMutation, UpdateOrder_Information_RequestMutationVariables>, 'mutation'>;

    export const UpdateOrder_Information_RequestComponent = (props: UpdateOrder_Information_RequestComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateOrder_Information_RequestMutation, UpdateOrder_Information_RequestMutationVariables> mutation={UpdateOrder_Information_RequestDocument} {...props} />
    );
    
export type UpdateOrder_Information_RequestProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateOrder_Information_RequestMutation, UpdateOrder_Information_RequestMutationVariables>
    } & TChildProps;
export function withUpdateOrder_Information_Request<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateOrder_Information_RequestMutation,
  UpdateOrder_Information_RequestMutationVariables,
  UpdateOrder_Information_RequestProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateOrder_Information_RequestMutation, UpdateOrder_Information_RequestMutationVariables, UpdateOrder_Information_RequestProps<TChildProps, TDataName>>(UpdateOrder_Information_RequestDocument, {
      alias: 'updateOrderInformationRequest',
      ...operationOptions
    });
};

/**
 * __useUpdateOrder_Information_RequestMutation__
 *
 * To run a mutation, you first call `useUpdateOrder_Information_RequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrder_Information_RequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderInformationRequestMutation, { data, loading, error }] = useUpdateOrder_Information_RequestMutation({
 *   variables: {
 *      field: // value for 'field'
 *      id: // value for 'id'
 *      requested_date: // value for 'requested_date'
 *      resolved_date: // value for 'resolved_date'
 *      resolved_by: // value for 'resolved_by'
 *   },
 * });
 */
export function useUpdateOrder_Information_RequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOrder_Information_RequestMutation, UpdateOrder_Information_RequestMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOrder_Information_RequestMutation, UpdateOrder_Information_RequestMutationVariables>(UpdateOrder_Information_RequestDocument, baseOptions);
      }
export type UpdateOrder_Information_RequestMutationHookResult = ReturnType<typeof useUpdateOrder_Information_RequestMutation>;
export type UpdateOrder_Information_RequestMutationResult = ApolloReactCommon.MutationResult<UpdateOrder_Information_RequestMutation>;
export type UpdateOrder_Information_RequestMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOrder_Information_RequestMutation, UpdateOrder_Information_RequestMutationVariables>;
export const AddOrder_Information_RequestDocument = gql`
    mutation addOrder_Information_Request($field: Order_Information_Request_Fields!, $id: ID!, $requested_date: String!, $requested_by: ID!, $order_id: ID!) {
  createOrder_Information_Request(field: $field, id: $id, requested_date: $requested_date, resolved_date: "-")
  addOrder_Information_RequestRequested_by(id: $id, requested_by: [$requested_by])
  addOrderInformation_request(id: $order_id, information_request: [$id])
}
    `;
export type AddOrder_Information_RequestMutationFn = ApolloReactCommon.MutationFunction<AddOrder_Information_RequestMutation, AddOrder_Information_RequestMutationVariables>;
export type AddOrder_Information_RequestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddOrder_Information_RequestMutation, AddOrder_Information_RequestMutationVariables>, 'mutation'>;

    export const AddOrder_Information_RequestComponent = (props: AddOrder_Information_RequestComponentProps) => (
      <ApolloReactComponents.Mutation<AddOrder_Information_RequestMutation, AddOrder_Information_RequestMutationVariables> mutation={AddOrder_Information_RequestDocument} {...props} />
    );
    
export type AddOrder_Information_RequestProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddOrder_Information_RequestMutation, AddOrder_Information_RequestMutationVariables>
    } & TChildProps;
export function withAddOrder_Information_Request<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddOrder_Information_RequestMutation,
  AddOrder_Information_RequestMutationVariables,
  AddOrder_Information_RequestProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddOrder_Information_RequestMutation, AddOrder_Information_RequestMutationVariables, AddOrder_Information_RequestProps<TChildProps, TDataName>>(AddOrder_Information_RequestDocument, {
      alias: 'addOrderInformationRequest',
      ...operationOptions
    });
};

/**
 * __useAddOrder_Information_RequestMutation__
 *
 * To run a mutation, you first call `useAddOrder_Information_RequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOrder_Information_RequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOrderInformationRequestMutation, { data, loading, error }] = useAddOrder_Information_RequestMutation({
 *   variables: {
 *      field: // value for 'field'
 *      id: // value for 'id'
 *      requested_date: // value for 'requested_date'
 *      requested_by: // value for 'requested_by'
 *      order_id: // value for 'order_id'
 *   },
 * });
 */
export function useAddOrder_Information_RequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddOrder_Information_RequestMutation, AddOrder_Information_RequestMutationVariables>) {
        return ApolloReactHooks.useMutation<AddOrder_Information_RequestMutation, AddOrder_Information_RequestMutationVariables>(AddOrder_Information_RequestDocument, baseOptions);
      }
export type AddOrder_Information_RequestMutationHookResult = ReturnType<typeof useAddOrder_Information_RequestMutation>;
export type AddOrder_Information_RequestMutationResult = ApolloReactCommon.MutationResult<AddOrder_Information_RequestMutation>;
export type AddOrder_Information_RequestMutationOptions = ApolloReactCommon.BaseMutationOptions<AddOrder_Information_RequestMutation, AddOrder_Information_RequestMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation updateOrder($comments: String!, $date_of_birth: String!, $diagnosis: String!, $id: ID!, $ml_order_id: String!, $mrn: String!, $order_date: String!, $patient_name: String!, $received_date: String!, $received_order_id: String!, $rejected_once: Boolean!, $search_string_lower: String!, $sex: String!, $attending_physician_id: ID!, $ordered_by_id: ID!, $test_id: ID!) {
  updateOrder(comments: $comments, date_of_birth: $date_of_birth, diagnosis: $diagnosis, id: $id, ml_order_id: $ml_order_id, mrn: $mrn, order_date: $order_date, patient_name: $patient_name, received_date: $received_date, received_order_id: $received_order_id, rejected_once: $rejected_once, search_string_lower: $search_string_lower, sex: $sex)
  addOrderAttending_physician(attending_physician: [$attending_physician_id], id: $id)
  addOrderOrdered_by(id: $id, ordered_by: [$ordered_by_id])
  addOrderTest_ordered(id: $id, test_ordered: [$test_id])
}
    `;
export type UpdateOrderMutationFn = ApolloReactCommon.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;
export type UpdateOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateOrderMutation, UpdateOrderMutationVariables>, 'mutation'>;

    export const UpdateOrderComponent = (props: UpdateOrderComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateOrderMutation, UpdateOrderMutationVariables> mutation={UpdateOrderDocument} {...props} />
    );
    
export type UpdateOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>
    } & TChildProps;
export function withUpdateOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateOrderMutation,
  UpdateOrderMutationVariables,
  UpdateOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateOrderMutation, UpdateOrderMutationVariables, UpdateOrderProps<TChildProps, TDataName>>(UpdateOrderDocument, {
      alias: 'updateOrder',
      ...operationOptions
    });
};

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      comments: // value for 'comments'
 *      date_of_birth: // value for 'date_of_birth'
 *      diagnosis: // value for 'diagnosis'
 *      id: // value for 'id'
 *      ml_order_id: // value for 'ml_order_id'
 *      mrn: // value for 'mrn'
 *      order_date: // value for 'order_date'
 *      patient_name: // value for 'patient_name'
 *      received_date: // value for 'received_date'
 *      received_order_id: // value for 'received_order_id'
 *      rejected_once: // value for 'rejected_once'
 *      search_string_lower: // value for 'search_string_lower'
 *      sex: // value for 'sex'
 *      attending_physician_id: // value for 'attending_physician_id'
 *      ordered_by_id: // value for 'ordered_by_id'
 *      test_id: // value for 'test_id'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, baseOptions);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = ApolloReactCommon.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const CreateOrderDocument = gql`
    mutation createOrder($comments: String!, $date_of_birth: String!, $diagnosis: String!, $id: ID!, $ml_order_id: String!, $mrn: String!, $order_date: String!, $patient_name: String!, $received_date: String!, $received_order_id: String!, $rejected_once: Boolean!, $search_string_lower: String!, $sex: String!, $attending_physician_id: ID!, $ordered_by_id: ID!, $test_id: ID!, $status_date: String!, $status_graph_id: ID!, $created_by: ID!) {
  createOrder(comments: $comments, date_of_birth: $date_of_birth, diagnosis: $diagnosis, id: $id, ml_order_id: $ml_order_id, mrn: $mrn, order_date: $order_date, patient_name: $patient_name, received_date: $received_date, received_order_id: $received_order_id, rejected_once: $rejected_once, search_string_lower: $search_string_lower, sex: $sex)
  addOrderAttending_physician(attending_physician: [$attending_physician_id], id: $id)
  addOrderOrdered_by(id: $id, ordered_by: [$ordered_by_id])
  addOrderTest_ordered(id: $id, test_ordered: [$test_id])
  createStatusUpdate(status: not_ready, date: $status_date, id: $status_graph_id)
  addStatusUpdateBy(id: $status_graph_id, by: [$created_by])
  addOrderStatus(id: $id, status: [$status_graph_id])
}
    `;
export type CreateOrderMutationFn = ApolloReactCommon.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;
export type CreateOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateOrderMutation, CreateOrderMutationVariables>, 'mutation'>;

    export const CreateOrderComponent = (props: CreateOrderComponentProps) => (
      <ApolloReactComponents.Mutation<CreateOrderMutation, CreateOrderMutationVariables> mutation={CreateOrderDocument} {...props} />
    );
    
export type CreateOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>
    } & TChildProps;
export function withCreateOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CreateOrderMutation,
  CreateOrderMutationVariables,
  CreateOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, CreateOrderMutation, CreateOrderMutationVariables, CreateOrderProps<TChildProps, TDataName>>(CreateOrderDocument, {
      alias: 'createOrder',
      ...operationOptions
    });
};

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      comments: // value for 'comments'
 *      date_of_birth: // value for 'date_of_birth'
 *      diagnosis: // value for 'diagnosis'
 *      id: // value for 'id'
 *      ml_order_id: // value for 'ml_order_id'
 *      mrn: // value for 'mrn'
 *      order_date: // value for 'order_date'
 *      patient_name: // value for 'patient_name'
 *      received_date: // value for 'received_date'
 *      received_order_id: // value for 'received_order_id'
 *      rejected_once: // value for 'rejected_once'
 *      search_string_lower: // value for 'search_string_lower'
 *      sex: // value for 'sex'
 *      attending_physician_id: // value for 'attending_physician_id'
 *      ordered_by_id: // value for 'ordered_by_id'
 *      test_id: // value for 'test_id'
 *      status_date: // value for 'status_date'
 *      status_graph_id: // value for 'status_graph_id'
 *      created_by: // value for 'created_by'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = ApolloReactCommon.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const AcceptOrderDocument = gql`
    mutation acceptOrder($status_date: String!, $id: ID!, $accepted_by: ID!, $status_graph_id: ID!, $old_status_graph_id: ID!) {
  createStatusUpdate(status: accepted, date: $status_date, id: $status_graph_id)
  addStatusUpdateBy(id: $status_graph_id, by: [$accepted_by])
  addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id])
  addOrderStatus(id: $id, status: [$status_graph_id])
}
    `;
export type AcceptOrderMutationFn = ApolloReactCommon.MutationFunction<AcceptOrderMutation, AcceptOrderMutationVariables>;
export type AcceptOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AcceptOrderMutation, AcceptOrderMutationVariables>, 'mutation'>;

    export const AcceptOrderComponent = (props: AcceptOrderComponentProps) => (
      <ApolloReactComponents.Mutation<AcceptOrderMutation, AcceptOrderMutationVariables> mutation={AcceptOrderDocument} {...props} />
    );
    
export type AcceptOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AcceptOrderMutation, AcceptOrderMutationVariables>
    } & TChildProps;
export function withAcceptOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AcceptOrderMutation,
  AcceptOrderMutationVariables,
  AcceptOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AcceptOrderMutation, AcceptOrderMutationVariables, AcceptOrderProps<TChildProps, TDataName>>(AcceptOrderDocument, {
      alias: 'acceptOrder',
      ...operationOptions
    });
};

/**
 * __useAcceptOrderMutation__
 *
 * To run a mutation, you first call `useAcceptOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptOrderMutation, { data, loading, error }] = useAcceptOrderMutation({
 *   variables: {
 *      status_date: // value for 'status_date'
 *      id: // value for 'id'
 *      accepted_by: // value for 'accepted_by'
 *      status_graph_id: // value for 'status_graph_id'
 *      old_status_graph_id: // value for 'old_status_graph_id'
 *   },
 * });
 */
export function useAcceptOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AcceptOrderMutation, AcceptOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<AcceptOrderMutation, AcceptOrderMutationVariables>(AcceptOrderDocument, baseOptions);
      }
export type AcceptOrderMutationHookResult = ReturnType<typeof useAcceptOrderMutation>;
export type AcceptOrderMutationResult = ApolloReactCommon.MutationResult<AcceptOrderMutation>;
export type AcceptOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<AcceptOrderMutation, AcceptOrderMutationVariables>;
export const RejectOrderDocument = gql`
    mutation rejectOrder($status_date: String!, $id: ID!, $rejected_by: ID!, $status_graph_id: ID!, $old_status_graph_id: ID!) {
  createStatusUpdate(status: rejected, date: $status_date, id: $status_graph_id)
  addStatusUpdateBy(id: $status_graph_id, by: [$rejected_by])
  addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id])
  addOrderStatus(id: $id, status: [$status_graph_id])
}
    `;
export type RejectOrderMutationFn = ApolloReactCommon.MutationFunction<RejectOrderMutation, RejectOrderMutationVariables>;
export type RejectOrderComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RejectOrderMutation, RejectOrderMutationVariables>, 'mutation'>;

    export const RejectOrderComponent = (props: RejectOrderComponentProps) => (
      <ApolloReactComponents.Mutation<RejectOrderMutation, RejectOrderMutationVariables> mutation={RejectOrderDocument} {...props} />
    );
    
export type RejectOrderProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<RejectOrderMutation, RejectOrderMutationVariables>
    } & TChildProps;
export function withRejectOrder<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RejectOrderMutation,
  RejectOrderMutationVariables,
  RejectOrderProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, RejectOrderMutation, RejectOrderMutationVariables, RejectOrderProps<TChildProps, TDataName>>(RejectOrderDocument, {
      alias: 'rejectOrder',
      ...operationOptions
    });
};

/**
 * __useRejectOrderMutation__
 *
 * To run a mutation, you first call `useRejectOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRejectOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [rejectOrderMutation, { data, loading, error }] = useRejectOrderMutation({
 *   variables: {
 *      status_date: // value for 'status_date'
 *      id: // value for 'id'
 *      rejected_by: // value for 'rejected_by'
 *      status_graph_id: // value for 'status_graph_id'
 *      old_status_graph_id: // value for 'old_status_graph_id'
 *   },
 * });
 */
export function useRejectOrderMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RejectOrderMutation, RejectOrderMutationVariables>) {
        return ApolloReactHooks.useMutation<RejectOrderMutation, RejectOrderMutationVariables>(RejectOrderDocument, baseOptions);
      }
export type RejectOrderMutationHookResult = ReturnType<typeof useRejectOrderMutation>;
export type RejectOrderMutationResult = ApolloReactCommon.MutationResult<RejectOrderMutation>;
export type RejectOrderMutationOptions = ApolloReactCommon.BaseMutationOptions<RejectOrderMutation, RejectOrderMutationVariables>;
export const PhysicianListDocument = gql`
    query PhysicianList($str: String) {
  Physician(orderBy: last_name_asc, filter: {name_lower_contains: $str}) {
    id
    first_name
    last_name
    degrees
    email
    phone_number
    badge_id
    orders {
      id
      patient_name
      received_order_id
      ml_order_id
      order_date
      mrn
      received_date
      test_ordered {
        id
        name
      }
      status {
        id
        status
      }
    }
  }
}
    `;
export type PhysicianListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<PhysicianListQuery, PhysicianListQueryVariables>, 'query'>;

    export const PhysicianListComponent = (props: PhysicianListComponentProps) => (
      <ApolloReactComponents.Query<PhysicianListQuery, PhysicianListQueryVariables> query={PhysicianListDocument} {...props} />
    );
    
export type PhysicianListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<PhysicianListQuery, PhysicianListQueryVariables>
    } & TChildProps;
export function withPhysicianList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  PhysicianListQuery,
  PhysicianListQueryVariables,
  PhysicianListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, PhysicianListQuery, PhysicianListQueryVariables, PhysicianListProps<TChildProps, TDataName>>(PhysicianListDocument, {
      alias: 'physicianList',
      ...operationOptions
    });
};

/**
 * __usePhysicianListQuery__
 *
 * To run a query within a React component, call `usePhysicianListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePhysicianListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePhysicianListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function usePhysicianListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PhysicianListQuery, PhysicianListQueryVariables>) {
        return ApolloReactHooks.useQuery<PhysicianListQuery, PhysicianListQueryVariables>(PhysicianListDocument, baseOptions);
      }
export function usePhysicianListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PhysicianListQuery, PhysicianListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PhysicianListQuery, PhysicianListQueryVariables>(PhysicianListDocument, baseOptions);
        }
export type PhysicianListQueryHookResult = ReturnType<typeof usePhysicianListQuery>;
export type PhysicianListLazyQueryHookResult = ReturnType<typeof usePhysicianListLazyQuery>;
export type PhysicianListQueryResult = ApolloReactCommon.QueryResult<PhysicianListQuery, PhysicianListQueryVariables>;
export const Update_PhysicianDocument = gql`
    mutation update_physician($badge_id: String!, $degrees: String!, $email: String!, $first_name: String!, $id: ID!, $last_name: String!, $name_lower: String!, $phone_number: String!) {
  updatePhysician(badge_id: $badge_id, degrees: $degrees, email: $email, first_name: $first_name, id: $id, last_name: $last_name, name_lower: $name_lower, phone_number: $phone_number)
}
    `;
export type Update_PhysicianMutationFn = ApolloReactCommon.MutationFunction<Update_PhysicianMutation, Update_PhysicianMutationVariables>;
export type Update_PhysicianComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_PhysicianMutation, Update_PhysicianMutationVariables>, 'mutation'>;

    export const Update_PhysicianComponent = (props: Update_PhysicianComponentProps) => (
      <ApolloReactComponents.Mutation<Update_PhysicianMutation, Update_PhysicianMutationVariables> mutation={Update_PhysicianDocument} {...props} />
    );
    
export type Update_PhysicianProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Update_PhysicianMutation, Update_PhysicianMutationVariables>
    } & TChildProps;
export function withUpdate_Physician<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Update_PhysicianMutation,
  Update_PhysicianMutationVariables,
  Update_PhysicianProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Update_PhysicianMutation, Update_PhysicianMutationVariables, Update_PhysicianProps<TChildProps, TDataName>>(Update_PhysicianDocument, {
      alias: 'updatePhysician',
      ...operationOptions
    });
};

/**
 * __useUpdate_PhysicianMutation__
 *
 * To run a mutation, you first call `useUpdate_PhysicianMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_PhysicianMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhysicianMutation, { data, loading, error }] = useUpdate_PhysicianMutation({
 *   variables: {
 *      badge_id: // value for 'badge_id'
 *      degrees: // value for 'degrees'
 *      email: // value for 'email'
 *      first_name: // value for 'first_name'
 *      id: // value for 'id'
 *      last_name: // value for 'last_name'
 *      name_lower: // value for 'name_lower'
 *      phone_number: // value for 'phone_number'
 *   },
 * });
 */
export function useUpdate_PhysicianMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_PhysicianMutation, Update_PhysicianMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_PhysicianMutation, Update_PhysicianMutationVariables>(Update_PhysicianDocument, baseOptions);
      }
export type Update_PhysicianMutationHookResult = ReturnType<typeof useUpdate_PhysicianMutation>;
export type Update_PhysicianMutationResult = ApolloReactCommon.MutationResult<Update_PhysicianMutation>;
export type Update_PhysicianMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_PhysicianMutation, Update_PhysicianMutationVariables>;
export const Create_PhysicianDocument = gql`
    mutation create_physician($badge_id: String!, $degrees: String!, $email: String!, $first_name: String!, $id: ID!, $last_name: String!, $name_lower: String!, $phone_number: String!) {
  createPhysician(badge_id: $badge_id, degrees: $degrees, email: $email, first_name: $first_name, id: $id, last_name: $last_name, name_lower: $name_lower, phone_number: $phone_number)
}
    `;
export type Create_PhysicianMutationFn = ApolloReactCommon.MutationFunction<Create_PhysicianMutation, Create_PhysicianMutationVariables>;
export type Create_PhysicianComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Create_PhysicianMutation, Create_PhysicianMutationVariables>, 'mutation'>;

    export const Create_PhysicianComponent = (props: Create_PhysicianComponentProps) => (
      <ApolloReactComponents.Mutation<Create_PhysicianMutation, Create_PhysicianMutationVariables> mutation={Create_PhysicianDocument} {...props} />
    );
    
export type Create_PhysicianProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Create_PhysicianMutation, Create_PhysicianMutationVariables>
    } & TChildProps;
export function withCreate_Physician<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Create_PhysicianMutation,
  Create_PhysicianMutationVariables,
  Create_PhysicianProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Create_PhysicianMutation, Create_PhysicianMutationVariables, Create_PhysicianProps<TChildProps, TDataName>>(Create_PhysicianDocument, {
      alias: 'createPhysician',
      ...operationOptions
    });
};

/**
 * __useCreate_PhysicianMutation__
 *
 * To run a mutation, you first call `useCreate_PhysicianMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_PhysicianMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPhysicianMutation, { data, loading, error }] = useCreate_PhysicianMutation({
 *   variables: {
 *      badge_id: // value for 'badge_id'
 *      degrees: // value for 'degrees'
 *      email: // value for 'email'
 *      first_name: // value for 'first_name'
 *      id: // value for 'id'
 *      last_name: // value for 'last_name'
 *      name_lower: // value for 'name_lower'
 *      phone_number: // value for 'phone_number'
 *   },
 * });
 */
export function useCreate_PhysicianMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Create_PhysicianMutation, Create_PhysicianMutationVariables>) {
        return ApolloReactHooks.useMutation<Create_PhysicianMutation, Create_PhysicianMutationVariables>(Create_PhysicianDocument, baseOptions);
      }
export type Create_PhysicianMutationHookResult = ReturnType<typeof useCreate_PhysicianMutation>;
export type Create_PhysicianMutationResult = ApolloReactCommon.MutationResult<Create_PhysicianMutation>;
export type Create_PhysicianMutationOptions = ApolloReactCommon.BaseMutationOptions<Create_PhysicianMutation, Create_PhysicianMutationVariables>;
export const ResolveSamplesListDocument = gql`
    query ResolveSamplesList($str: String) {
  Sample(filter: {search_string_lower_contains: $str}) {
    id
    sample_id
    patient_name
    mrn
    collected_date
    received_date
    sample_type {
      id
      name
      requires_pathologist_qc
    }
    comments
    ml_order_id
    received_order_id
    status {
      id
      status
      rejected_reason
      comments
      by {
        id
        user_name
      }
      date
    }
    sample_location
    search_string_lower
    ordered_by {
      id
      first_name
      last_name
      degrees
      email
      badge_id
    }
    pathologist_qc {
      id
      acceptance_value
      diagnosis
      macro_dissection_required
      percent_neoplastic_cells
      qc_by {
        id
        user_name
      }
      qc_date
    }
  }
}
    `;
export type ResolveSamplesListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ResolveSamplesListQuery, ResolveSamplesListQueryVariables>, 'query'>;

    export const ResolveSamplesListComponent = (props: ResolveSamplesListComponentProps) => (
      <ApolloReactComponents.Query<ResolveSamplesListQuery, ResolveSamplesListQueryVariables> query={ResolveSamplesListDocument} {...props} />
    );
    
export type ResolveSamplesListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ResolveSamplesListQuery, ResolveSamplesListQueryVariables>
    } & TChildProps;
export function withResolveSamplesList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ResolveSamplesListQuery,
  ResolveSamplesListQueryVariables,
  ResolveSamplesListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ResolveSamplesListQuery, ResolveSamplesListQueryVariables, ResolveSamplesListProps<TChildProps, TDataName>>(ResolveSamplesListDocument, {
      alias: 'resolveSamplesList',
      ...operationOptions
    });
};

/**
 * __useResolveSamplesListQuery__
 *
 * To run a query within a React component, call `useResolveSamplesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useResolveSamplesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResolveSamplesListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useResolveSamplesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ResolveSamplesListQuery, ResolveSamplesListQueryVariables>) {
        return ApolloReactHooks.useQuery<ResolveSamplesListQuery, ResolveSamplesListQueryVariables>(ResolveSamplesListDocument, baseOptions);
      }
export function useResolveSamplesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ResolveSamplesListQuery, ResolveSamplesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ResolveSamplesListQuery, ResolveSamplesListQueryVariables>(ResolveSamplesListDocument, baseOptions);
        }
export type ResolveSamplesListQueryHookResult = ReturnType<typeof useResolveSamplesListQuery>;
export type ResolveSamplesListLazyQueryHookResult = ReturnType<typeof useResolveSamplesListLazyQuery>;
export type ResolveSamplesListQueryResult = ApolloReactCommon.QueryResult<ResolveSamplesListQuery, ResolveSamplesListQueryVariables>;
export const ResolveSampleDocument = gql`
    mutation resolveSample($status_date: String!, $id: ID!, $rejected_by: ID!, $status_graph_id: ID!, $old_status_graph_id: ID!, $comments: String!, $rejected_reason: Sample_Rejection_Reason_Fields!) {
  createStatusUpdate(status: sample_rejection_resolved, date: $status_date, id: $status_graph_id, comments: $comments, rejected_reason: $rejected_reason)
  addStatusUpdateBy(id: $status_graph_id, by: [$rejected_by])
  addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id])
  addSampleStatus(id: $id, status: [$status_graph_id])
}
    `;
export type ResolveSampleMutationFn = ApolloReactCommon.MutationFunction<ResolveSampleMutation, ResolveSampleMutationVariables>;
export type ResolveSampleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<ResolveSampleMutation, ResolveSampleMutationVariables>, 'mutation'>;

    export const ResolveSampleComponent = (props: ResolveSampleComponentProps) => (
      <ApolloReactComponents.Mutation<ResolveSampleMutation, ResolveSampleMutationVariables> mutation={ResolveSampleDocument} {...props} />
    );
    
export type ResolveSampleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<ResolveSampleMutation, ResolveSampleMutationVariables>
    } & TChildProps;
export function withResolveSample<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ResolveSampleMutation,
  ResolveSampleMutationVariables,
  ResolveSampleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, ResolveSampleMutation, ResolveSampleMutationVariables, ResolveSampleProps<TChildProps, TDataName>>(ResolveSampleDocument, {
      alias: 'resolveSample',
      ...operationOptions
    });
};

/**
 * __useResolveSampleMutation__
 *
 * To run a mutation, you first call `useResolveSampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResolveSampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resolveSampleMutation, { data, loading, error }] = useResolveSampleMutation({
 *   variables: {
 *      status_date: // value for 'status_date'
 *      id: // value for 'id'
 *      rejected_by: // value for 'rejected_by'
 *      status_graph_id: // value for 'status_graph_id'
 *      old_status_graph_id: // value for 'old_status_graph_id'
 *      comments: // value for 'comments'
 *      rejected_reason: // value for 'rejected_reason'
 *   },
 * });
 */
export function useResolveSampleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ResolveSampleMutation, ResolveSampleMutationVariables>) {
        return ApolloReactHooks.useMutation<ResolveSampleMutation, ResolveSampleMutationVariables>(ResolveSampleDocument, baseOptions);
      }
export type ResolveSampleMutationHookResult = ReturnType<typeof useResolveSampleMutation>;
export type ResolveSampleMutationResult = ApolloReactCommon.MutationResult<ResolveSampleMutation>;
export type ResolveSampleMutationOptions = ApolloReactCommon.BaseMutationOptions<ResolveSampleMutation, ResolveSampleMutationVariables>;
export const ReadyForQcSamplesListDocument = gql`
    query ReadyForQCSamplesList($str: String) {
  Sample(filter: {search_string_lower_contains: $str}) {
    id
    sample_id
    patient_name
    mrn
    collected_date
    received_date
    sample_type {
      id
      name
      requires_pathologist_qc
    }
    status {
      id
      status
      date
      by {
        id
        user_name
      }
    }
    comments
    ml_order_id
    received_order_id
    sample_location
    search_string_lower
    ordered_by {
      id
      first_name
      last_name
      degrees
      email
      badge_id
    }
  }
}
    `;
export type ReadyForQcSamplesListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ReadyForQcSamplesListQuery, ReadyForQcSamplesListQueryVariables>, 'query'>;

    export const ReadyForQcSamplesListComponent = (props: ReadyForQcSamplesListComponentProps) => (
      <ApolloReactComponents.Query<ReadyForQcSamplesListQuery, ReadyForQcSamplesListQueryVariables> query={ReadyForQcSamplesListDocument} {...props} />
    );
    
export type ReadyForQcSamplesListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ReadyForQcSamplesListQuery, ReadyForQcSamplesListQueryVariables>
    } & TChildProps;
export function withReadyForQcSamplesList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ReadyForQcSamplesListQuery,
  ReadyForQcSamplesListQueryVariables,
  ReadyForQcSamplesListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ReadyForQcSamplesListQuery, ReadyForQcSamplesListQueryVariables, ReadyForQcSamplesListProps<TChildProps, TDataName>>(ReadyForQcSamplesListDocument, {
      alias: 'readyForQcSamplesList',
      ...operationOptions
    });
};

/**
 * __useReadyForQcSamplesListQuery__
 *
 * To run a query within a React component, call `useReadyForQcSamplesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useReadyForQcSamplesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReadyForQcSamplesListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useReadyForQcSamplesListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReadyForQcSamplesListQuery, ReadyForQcSamplesListQueryVariables>) {
        return ApolloReactHooks.useQuery<ReadyForQcSamplesListQuery, ReadyForQcSamplesListQueryVariables>(ReadyForQcSamplesListDocument, baseOptions);
      }
export function useReadyForQcSamplesListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReadyForQcSamplesListQuery, ReadyForQcSamplesListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ReadyForQcSamplesListQuery, ReadyForQcSamplesListQueryVariables>(ReadyForQcSamplesListDocument, baseOptions);
        }
export type ReadyForQcSamplesListQueryHookResult = ReturnType<typeof useReadyForQcSamplesListQuery>;
export type ReadyForQcSamplesListLazyQueryHookResult = ReturnType<typeof useReadyForQcSamplesListLazyQuery>;
export type ReadyForQcSamplesListQueryResult = ApolloReactCommon.QueryResult<ReadyForQcSamplesListQuery, ReadyForQcSamplesListQueryVariables>;
export const Qc_AcceptSampleDocument = gql`
    mutation qc_acceptSample($qc_acceptance_value: QC_Acceptance_Value!, $diagnosis: String!, $qc_graph_id: ID!, $macro_dissection_required: Boolean!, $percent_neoplastic_cells: Float!, $qc_date: String!, $sample_size_mm2: Float!, $status: acceptedStatus!, $status_date: String!, $sample_graph_id: ID!, $accepted_by: ID!, $status_graph_id: ID!, $old_status_graph_id: ID!) {
  createPathologist_QC(acceptance_value: $qc_acceptance_value, diagnosis: $diagnosis, id: $qc_graph_id, macro_dissection_required: $macro_dissection_required, percent_neoplastic_cells: $percent_neoplastic_cells, qc_date: $qc_date, sample_size_mm2: $sample_size_mm2)
  addPathologist_QCQc_by(id: $qc_graph_id, qc_by: [$accepted_by])
  addSamplePathologist_qc(id: $sample_graph_id, pathologist_qc: [$qc_graph_id])
  createStatusUpdate(status: $status, date: $status_date, id: $status_graph_id)
  addStatusUpdateBy(id: $status_graph_id, by: [$accepted_by])
  addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id])
  addSampleStatus(id: $sample_graph_id, status: [$status_graph_id])
}
    `;
export type Qc_AcceptSampleMutationFn = ApolloReactCommon.MutationFunction<Qc_AcceptSampleMutation, Qc_AcceptSampleMutationVariables>;
export type Qc_AcceptSampleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Qc_AcceptSampleMutation, Qc_AcceptSampleMutationVariables>, 'mutation'>;

    export const Qc_AcceptSampleComponent = (props: Qc_AcceptSampleComponentProps) => (
      <ApolloReactComponents.Mutation<Qc_AcceptSampleMutation, Qc_AcceptSampleMutationVariables> mutation={Qc_AcceptSampleDocument} {...props} />
    );
    
export type Qc_AcceptSampleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Qc_AcceptSampleMutation, Qc_AcceptSampleMutationVariables>
    } & TChildProps;
export function withQc_AcceptSample<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Qc_AcceptSampleMutation,
  Qc_AcceptSampleMutationVariables,
  Qc_AcceptSampleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Qc_AcceptSampleMutation, Qc_AcceptSampleMutationVariables, Qc_AcceptSampleProps<TChildProps, TDataName>>(Qc_AcceptSampleDocument, {
      alias: 'qcAcceptSample',
      ...operationOptions
    });
};

/**
 * __useQc_AcceptSampleMutation__
 *
 * To run a mutation, you first call `useQc_AcceptSampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQc_AcceptSampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [qcAcceptSampleMutation, { data, loading, error }] = useQc_AcceptSampleMutation({
 *   variables: {
 *      qc_acceptance_value: // value for 'qc_acceptance_value'
 *      diagnosis: // value for 'diagnosis'
 *      qc_graph_id: // value for 'qc_graph_id'
 *      macro_dissection_required: // value for 'macro_dissection_required'
 *      percent_neoplastic_cells: // value for 'percent_neoplastic_cells'
 *      qc_date: // value for 'qc_date'
 *      sample_size_mm2: // value for 'sample_size_mm2'
 *      status: // value for 'status'
 *      status_date: // value for 'status_date'
 *      sample_graph_id: // value for 'sample_graph_id'
 *      accepted_by: // value for 'accepted_by'
 *      status_graph_id: // value for 'status_graph_id'
 *      old_status_graph_id: // value for 'old_status_graph_id'
 *   },
 * });
 */
export function useQc_AcceptSampleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Qc_AcceptSampleMutation, Qc_AcceptSampleMutationVariables>) {
        return ApolloReactHooks.useMutation<Qc_AcceptSampleMutation, Qc_AcceptSampleMutationVariables>(Qc_AcceptSampleDocument, baseOptions);
      }
export type Qc_AcceptSampleMutationHookResult = ReturnType<typeof useQc_AcceptSampleMutation>;
export type Qc_AcceptSampleMutationResult = ApolloReactCommon.MutationResult<Qc_AcceptSampleMutation>;
export type Qc_AcceptSampleMutationOptions = ApolloReactCommon.BaseMutationOptions<Qc_AcceptSampleMutation, Qc_AcceptSampleMutationVariables>;
export const Qc_RejectSampleDocument = gql`
    mutation qc_rejectSample($qc_acceptance_value: QC_Acceptance_Value!, $diagnosis: String!, $qc_graph_id: ID!, $macro_dissection_required: Boolean!, $percent_neoplastic_cells: Float!, $qc_date: String!, $sample_size_mm2: Float!, $status: acceptedStatus!, $status_date: String!, $sample_graph_id: ID!, $accepted_by: ID!, $status_graph_id: ID!, $old_status_graph_id: ID!, $comments: String!, $rejected_reason: Sample_Rejection_Reason_Fields) {
  createPathologist_QC(acceptance_value: $qc_acceptance_value, diagnosis: $diagnosis, id: $qc_graph_id, macro_dissection_required: $macro_dissection_required, percent_neoplastic_cells: $percent_neoplastic_cells, qc_date: $qc_date, sample_size_mm2: $sample_size_mm2)
  addPathologist_QCQc_by(id: $qc_graph_id, qc_by: [$accepted_by])
  addSamplePathologist_qc(id: $sample_graph_id, pathologist_qc: [$qc_graph_id])
  createStatusUpdate(status: $status, date: $status_date, id: $status_graph_id, comments: $comments, rejected_reason: $rejected_reason)
  addStatusUpdateBy(id: $status_graph_id, by: [$accepted_by])
  addStatusUpdatePreviousStatus(id: $status_graph_id, previousStatus: [$old_status_graph_id])
  addSampleStatus(id: $sample_graph_id, status: [$status_graph_id])
}
    `;
export type Qc_RejectSampleMutationFn = ApolloReactCommon.MutationFunction<Qc_RejectSampleMutation, Qc_RejectSampleMutationVariables>;
export type Qc_RejectSampleComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Qc_RejectSampleMutation, Qc_RejectSampleMutationVariables>, 'mutation'>;

    export const Qc_RejectSampleComponent = (props: Qc_RejectSampleComponentProps) => (
      <ApolloReactComponents.Mutation<Qc_RejectSampleMutation, Qc_RejectSampleMutationVariables> mutation={Qc_RejectSampleDocument} {...props} />
    );
    
export type Qc_RejectSampleProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Qc_RejectSampleMutation, Qc_RejectSampleMutationVariables>
    } & TChildProps;
export function withQc_RejectSample<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Qc_RejectSampleMutation,
  Qc_RejectSampleMutationVariables,
  Qc_RejectSampleProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Qc_RejectSampleMutation, Qc_RejectSampleMutationVariables, Qc_RejectSampleProps<TChildProps, TDataName>>(Qc_RejectSampleDocument, {
      alias: 'qcRejectSample',
      ...operationOptions
    });
};

/**
 * __useQc_RejectSampleMutation__
 *
 * To run a mutation, you first call `useQc_RejectSampleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useQc_RejectSampleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [qcRejectSampleMutation, { data, loading, error }] = useQc_RejectSampleMutation({
 *   variables: {
 *      qc_acceptance_value: // value for 'qc_acceptance_value'
 *      diagnosis: // value for 'diagnosis'
 *      qc_graph_id: // value for 'qc_graph_id'
 *      macro_dissection_required: // value for 'macro_dissection_required'
 *      percent_neoplastic_cells: // value for 'percent_neoplastic_cells'
 *      qc_date: // value for 'qc_date'
 *      sample_size_mm2: // value for 'sample_size_mm2'
 *      status: // value for 'status'
 *      status_date: // value for 'status_date'
 *      sample_graph_id: // value for 'sample_graph_id'
 *      accepted_by: // value for 'accepted_by'
 *      status_graph_id: // value for 'status_graph_id'
 *      old_status_graph_id: // value for 'old_status_graph_id'
 *      comments: // value for 'comments'
 *      rejected_reason: // value for 'rejected_reason'
 *   },
 * });
 */
export function useQc_RejectSampleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Qc_RejectSampleMutation, Qc_RejectSampleMutationVariables>) {
        return ApolloReactHooks.useMutation<Qc_RejectSampleMutation, Qc_RejectSampleMutationVariables>(Qc_RejectSampleDocument, baseOptions);
      }
export type Qc_RejectSampleMutationHookResult = ReturnType<typeof useQc_RejectSampleMutation>;
export type Qc_RejectSampleMutationResult = ApolloReactCommon.MutationResult<Qc_RejectSampleMutation>;
export type Qc_RejectSampleMutationOptions = ApolloReactCommon.BaseMutationOptions<Qc_RejectSampleMutation, Qc_RejectSampleMutationVariables>;
export const TestsListDocument = gql`
    query TestsList($str: String) {
  Molecular_Lab_Test(orderBy: name_asc, filter: {name_lower_contains: $str}) {
    id
    name
    description
    ngsBased
    authorized_diagnoses
    acceptable_sample_type {
      id
      name
      requires_pathologist_qc
    }
    orders {
      id
      patient_name
      received_order_id
      ml_order_id
      order_date
      ordered_by {
        id
        first_name
        last_name
        degrees
      }
      mrn
      received_date
      status {
        id
        status
      }
    }
  }
}
    `;
export type TestsListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TestsListQuery, TestsListQueryVariables>, 'query'>;

    export const TestsListComponent = (props: TestsListComponentProps) => (
      <ApolloReactComponents.Query<TestsListQuery, TestsListQueryVariables> query={TestsListDocument} {...props} />
    );
    
export type TestsListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TestsListQuery, TestsListQueryVariables>
    } & TChildProps;
export function withTestsList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TestsListQuery,
  TestsListQueryVariables,
  TestsListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TestsListQuery, TestsListQueryVariables, TestsListProps<TChildProps, TDataName>>(TestsListDocument, {
      alias: 'testsList',
      ...operationOptions
    });
};

/**
 * __useTestsListQuery__
 *
 * To run a query within a React component, call `useTestsListQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestsListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestsListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useTestsListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TestsListQuery, TestsListQueryVariables>) {
        return ApolloReactHooks.useQuery<TestsListQuery, TestsListQueryVariables>(TestsListDocument, baseOptions);
      }
export function useTestsListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TestsListQuery, TestsListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TestsListQuery, TestsListQueryVariables>(TestsListDocument, baseOptions);
        }
export type TestsListQueryHookResult = ReturnType<typeof useTestsListQuery>;
export type TestsListLazyQueryHookResult = ReturnType<typeof useTestsListLazyQuery>;
export type TestsListQueryResult = ApolloReactCommon.QueryResult<TestsListQuery, TestsListQueryVariables>;
export const Update_TestDocument = gql`
    mutation update_test($description: String!, $id: ID!, $name: String!, $name_lower: String!, $ngsBased: Boolean!, $acceptable_sample_type: [ID!]!, $authorized_diagnoses: [String]!) {
  updateMolecular_Lab_Test(description: $description, id: $id, name: $name, name_lower: $name_lower, ngsBased: $ngsBased, authorized_diagnoses: $authorized_diagnoses)
  addMolecular_Lab_TestAcceptable_sample_type(acceptable_sample_type: $acceptable_sample_type, id: $id)
}
    `;
export type Update_TestMutationFn = ApolloReactCommon.MutationFunction<Update_TestMutation, Update_TestMutationVariables>;
export type Update_TestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_TestMutation, Update_TestMutationVariables>, 'mutation'>;

    export const Update_TestComponent = (props: Update_TestComponentProps) => (
      <ApolloReactComponents.Mutation<Update_TestMutation, Update_TestMutationVariables> mutation={Update_TestDocument} {...props} />
    );
    
export type Update_TestProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Update_TestMutation, Update_TestMutationVariables>
    } & TChildProps;
export function withUpdate_Test<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Update_TestMutation,
  Update_TestMutationVariables,
  Update_TestProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Update_TestMutation, Update_TestMutationVariables, Update_TestProps<TChildProps, TDataName>>(Update_TestDocument, {
      alias: 'updateTest',
      ...operationOptions
    });
};

/**
 * __useUpdate_TestMutation__
 *
 * To run a mutation, you first call `useUpdate_TestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_TestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTestMutation, { data, loading, error }] = useUpdate_TestMutation({
 *   variables: {
 *      description: // value for 'description'
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      name_lower: // value for 'name_lower'
 *      ngsBased: // value for 'ngsBased'
 *      acceptable_sample_type: // value for 'acceptable_sample_type'
 *      authorized_diagnoses: // value for 'authorized_diagnoses'
 *   },
 * });
 */
export function useUpdate_TestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_TestMutation, Update_TestMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_TestMutation, Update_TestMutationVariables>(Update_TestDocument, baseOptions);
      }
export type Update_TestMutationHookResult = ReturnType<typeof useUpdate_TestMutation>;
export type Update_TestMutationResult = ApolloReactCommon.MutationResult<Update_TestMutation>;
export type Update_TestMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_TestMutation, Update_TestMutationVariables>;
export const Create_TestDocument = gql`
    mutation create_test($description: String!, $id: ID!, $name: String!, $name_lower: String!, $ngsBased: Boolean!, $acceptable_sample_type: [ID!]!, $authorized_diagnoses: [String]!) {
  createMolecular_Lab_Test(description: $description, id: $id, name: $name, name_lower: $name_lower, ngsBased: $ngsBased, authorized_diagnoses: $authorized_diagnoses)
  addMolecular_Lab_TestAcceptable_sample_type(acceptable_sample_type: $acceptable_sample_type, id: $id)
}
    `;
export type Create_TestMutationFn = ApolloReactCommon.MutationFunction<Create_TestMutation, Create_TestMutationVariables>;
export type Create_TestComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Create_TestMutation, Create_TestMutationVariables>, 'mutation'>;

    export const Create_TestComponent = (props: Create_TestComponentProps) => (
      <ApolloReactComponents.Mutation<Create_TestMutation, Create_TestMutationVariables> mutation={Create_TestDocument} {...props} />
    );
    
export type Create_TestProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Create_TestMutation, Create_TestMutationVariables>
    } & TChildProps;
export function withCreate_Test<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Create_TestMutation,
  Create_TestMutationVariables,
  Create_TestProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Create_TestMutation, Create_TestMutationVariables, Create_TestProps<TChildProps, TDataName>>(Create_TestDocument, {
      alias: 'createTest',
      ...operationOptions
    });
};

/**
 * __useCreate_TestMutation__
 *
 * To run a mutation, you first call `useCreate_TestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_TestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTestMutation, { data, loading, error }] = useCreate_TestMutation({
 *   variables: {
 *      description: // value for 'description'
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      name_lower: // value for 'name_lower'
 *      ngsBased: // value for 'ngsBased'
 *      acceptable_sample_type: // value for 'acceptable_sample_type'
 *      authorized_diagnoses: // value for 'authorized_diagnoses'
 *   },
 * });
 */
export function useCreate_TestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Create_TestMutation, Create_TestMutationVariables>) {
        return ApolloReactHooks.useMutation<Create_TestMutation, Create_TestMutationVariables>(Create_TestDocument, baseOptions);
      }
export type Create_TestMutationHookResult = ReturnType<typeof useCreate_TestMutation>;
export type Create_TestMutationResult = ApolloReactCommon.MutationResult<Create_TestMutation>;
export type Create_TestMutationOptions = ApolloReactCommon.BaseMutationOptions<Create_TestMutation, Create_TestMutationVariables>;
export const UsersListDocument = gql`
    query UsersList($str: String) {
  Molecular_Lab_User(filter: {name_lower_contains: $str}) {
    id
    first_name
    last_name
    name_lower
    user_name
    password
    canQC
    canEditUsers
    canEditTests
    canEditOrders
    canEditPhysicians
    canApproveReagent
  }
}
    `;
export type UsersListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UsersListQuery, UsersListQueryVariables>, 'query'>;

    export const UsersListComponent = (props: UsersListComponentProps) => (
      <ApolloReactComponents.Query<UsersListQuery, UsersListQueryVariables> query={UsersListDocument} {...props} />
    );
    
export type UsersListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UsersListQuery, UsersListQueryVariables>
    } & TChildProps;
export function withUsersList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UsersListQuery,
  UsersListQueryVariables,
  UsersListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UsersListQuery, UsersListQueryVariables, UsersListProps<TChildProps, TDataName>>(UsersListDocument, {
      alias: 'usersList',
      ...operationOptions
    });
};

/**
 * __useUsersListQuery__
 *
 * To run a query within a React component, call `useUsersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useUsersListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
        return ApolloReactHooks.useQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, baseOptions);
      }
export function useUsersListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, baseOptions);
        }
export type UsersListQueryHookResult = ReturnType<typeof useUsersListQuery>;
export type UsersListLazyQueryHookResult = ReturnType<typeof useUsersListLazyQuery>;
export type UsersListQueryResult = ApolloReactCommon.QueryResult<UsersListQuery, UsersListQueryVariables>;
export const Update_UserDocument = gql`
    mutation update_user($canEditOrders: Boolean!, $canEditPhysicians: Boolean!, $canEditTests: Boolean!, $canEditUsers: Boolean!, $canQC: Boolean!, $canApproveReagent: Boolean!, $first_name: String!, $id: ID!, $last_name: String!, $name_lower: String!, $password: String!, $user_name: String!) {
  updateMolecular_Lab_User(canEditOrders: $canEditOrders, canEditPhysicians: $canEditPhysicians, canEditTests: $canEditTests, canEditUsers: $canEditUsers, canQC: $canQC, canApproveReagent: $canApproveReagent, first_name: $first_name, id: $id, last_name: $last_name, name_lower: $name_lower, password: $password, user_name: $user_name)
}
    `;
export type Update_UserMutationFn = ApolloReactCommon.MutationFunction<Update_UserMutation, Update_UserMutationVariables>;
export type Update_UserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Update_UserMutation, Update_UserMutationVariables>, 'mutation'>;

    export const Update_UserComponent = (props: Update_UserComponentProps) => (
      <ApolloReactComponents.Mutation<Update_UserMutation, Update_UserMutationVariables> mutation={Update_UserDocument} {...props} />
    );
    
export type Update_UserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Update_UserMutation, Update_UserMutationVariables>
    } & TChildProps;
export function withUpdate_User<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Update_UserMutation,
  Update_UserMutationVariables,
  Update_UserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Update_UserMutation, Update_UserMutationVariables, Update_UserProps<TChildProps, TDataName>>(Update_UserDocument, {
      alias: 'updateUser',
      ...operationOptions
    });
};

/**
 * __useUpdate_UserMutation__
 *
 * To run a mutation, you first call `useUpdate_UserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdate_UserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdate_UserMutation({
 *   variables: {
 *      canEditOrders: // value for 'canEditOrders'
 *      canEditPhysicians: // value for 'canEditPhysicians'
 *      canEditTests: // value for 'canEditTests'
 *      canEditUsers: // value for 'canEditUsers'
 *      canQC: // value for 'canQC'
 *      canApproveReagent: // value for 'canApproveReagent'
 *      first_name: // value for 'first_name'
 *      id: // value for 'id'
 *      last_name: // value for 'last_name'
 *      name_lower: // value for 'name_lower'
 *      password: // value for 'password'
 *      user_name: // value for 'user_name'
 *   },
 * });
 */
export function useUpdate_UserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Update_UserMutation, Update_UserMutationVariables>) {
        return ApolloReactHooks.useMutation<Update_UserMutation, Update_UserMutationVariables>(Update_UserDocument, baseOptions);
      }
export type Update_UserMutationHookResult = ReturnType<typeof useUpdate_UserMutation>;
export type Update_UserMutationResult = ApolloReactCommon.MutationResult<Update_UserMutation>;
export type Update_UserMutationOptions = ApolloReactCommon.BaseMutationOptions<Update_UserMutation, Update_UserMutationVariables>;
export const Create_UserDocument = gql`
    mutation create_user($canEditOrders: Boolean!, $canEditPhysicians: Boolean!, $canEditTests: Boolean!, $canEditUsers: Boolean!, $canQC: Boolean!, $canApproveReagent: Boolean!, $first_name: String!, $id: ID!, $last_name: String!, $name_lower: String!, $password: String!, $user_name: String!) {
  createMolecular_Lab_User(canEditOrders: $canEditOrders, canEditPhysicians: $canEditPhysicians, canEditTests: $canEditTests, canEditUsers: $canEditUsers, canQC: $canQC, canApproveReagent: $canApproveReagent, first_name: $first_name, id: $id, last_name: $last_name, name_lower: $name_lower, password: $password, user_name: $user_name)
}
    `;
export type Create_UserMutationFn = ApolloReactCommon.MutationFunction<Create_UserMutation, Create_UserMutationVariables>;
export type Create_UserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<Create_UserMutation, Create_UserMutationVariables>, 'mutation'>;

    export const Create_UserComponent = (props: Create_UserComponentProps) => (
      <ApolloReactComponents.Mutation<Create_UserMutation, Create_UserMutationVariables> mutation={Create_UserDocument} {...props} />
    );
    
export type Create_UserProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<Create_UserMutation, Create_UserMutationVariables>
    } & TChildProps;
export function withCreate_User<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Create_UserMutation,
  Create_UserMutationVariables,
  Create_UserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, Create_UserMutation, Create_UserMutationVariables, Create_UserProps<TChildProps, TDataName>>(Create_UserDocument, {
      alias: 'createUser',
      ...operationOptions
    });
};

/**
 * __useCreate_UserMutation__
 *
 * To run a mutation, you first call `useCreate_UserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_UserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreate_UserMutation({
 *   variables: {
 *      canEditOrders: // value for 'canEditOrders'
 *      canEditPhysicians: // value for 'canEditPhysicians'
 *      canEditTests: // value for 'canEditTests'
 *      canEditUsers: // value for 'canEditUsers'
 *      canQC: // value for 'canQC'
 *      canApproveReagent: // value for 'canApproveReagent'
 *      first_name: // value for 'first_name'
 *      id: // value for 'id'
 *      last_name: // value for 'last_name'
 *      name_lower: // value for 'name_lower'
 *      password: // value for 'password'
 *      user_name: // value for 'user_name'
 *   },
 * });
 */
export function useCreate_UserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<Create_UserMutation, Create_UserMutationVariables>) {
        return ApolloReactHooks.useMutation<Create_UserMutation, Create_UserMutationVariables>(Create_UserDocument, baseOptions);
      }
export type Create_UserMutationHookResult = ReturnType<typeof useCreate_UserMutation>;
export type Create_UserMutationResult = ApolloReactCommon.MutationResult<Create_UserMutation>;
export type Create_UserMutationOptions = ApolloReactCommon.BaseMutationOptions<Create_UserMutation, Create_UserMutationVariables>;
export const TestByIdDocument = gql`
    query TestByID($str: ID) {
  Molecular_Lab_Test(id: $str) {
    id
    authorized_diagnoses
  }
}
    `;
export type TestByIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<TestByIdQuery, TestByIdQueryVariables>, 'query'>;

    export const TestByIdComponent = (props: TestByIdComponentProps) => (
      <ApolloReactComponents.Query<TestByIdQuery, TestByIdQueryVariables> query={TestByIdDocument} {...props} />
    );
    
export type TestByIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<TestByIdQuery, TestByIdQueryVariables>
    } & TChildProps;
export function withTestById<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TestByIdQuery,
  TestByIdQueryVariables,
  TestByIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, TestByIdQuery, TestByIdQueryVariables, TestByIdProps<TChildProps, TDataName>>(TestByIdDocument, {
      alias: 'testById',
      ...operationOptions
    });
};

/**
 * __useTestByIdQuery__
 *
 * To run a query within a React component, call `useTestByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTestByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTestByIdQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useTestByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TestByIdQuery, TestByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<TestByIdQuery, TestByIdQueryVariables>(TestByIdDocument, baseOptions);
      }
export function useTestByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TestByIdQuery, TestByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TestByIdQuery, TestByIdQueryVariables>(TestByIdDocument, baseOptions);
        }
export type TestByIdQueryHookResult = ReturnType<typeof useTestByIdQuery>;
export type TestByIdLazyQueryHookResult = ReturnType<typeof useTestByIdLazyQuery>;
export type TestByIdQueryResult = ApolloReactCommon.QueryResult<TestByIdQuery, TestByIdQueryVariables>;
export const SampleTypeListDocument = gql`
    query SampleTypeList {
  Sample_Type {
    id
    name
  }
}
    `;
export type SampleTypeListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<SampleTypeListQuery, SampleTypeListQueryVariables>, 'query'>;

    export const SampleTypeListComponent = (props: SampleTypeListComponentProps) => (
      <ApolloReactComponents.Query<SampleTypeListQuery, SampleTypeListQueryVariables> query={SampleTypeListDocument} {...props} />
    );
    
export type SampleTypeListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<SampleTypeListQuery, SampleTypeListQueryVariables>
    } & TChildProps;
export function withSampleTypeList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SampleTypeListQuery,
  SampleTypeListQueryVariables,
  SampleTypeListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, SampleTypeListQuery, SampleTypeListQueryVariables, SampleTypeListProps<TChildProps, TDataName>>(SampleTypeListDocument, {
      alias: 'sampleTypeList',
      ...operationOptions
    });
};

/**
 * __useSampleTypeListQuery__
 *
 * To run a query within a React component, call `useSampleTypeListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSampleTypeListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSampleTypeListQuery({
 *   variables: {
 *   },
 * });
 */
export function useSampleTypeListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SampleTypeListQuery, SampleTypeListQueryVariables>) {
        return ApolloReactHooks.useQuery<SampleTypeListQuery, SampleTypeListQueryVariables>(SampleTypeListDocument, baseOptions);
      }
export function useSampleTypeListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SampleTypeListQuery, SampleTypeListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SampleTypeListQuery, SampleTypeListQueryVariables>(SampleTypeListDocument, baseOptions);
        }
export type SampleTypeListQueryHookResult = ReturnType<typeof useSampleTypeListQuery>;
export type SampleTypeListLazyQueryHookResult = ReturnType<typeof useSampleTypeListLazyQuery>;
export type SampleTypeListQueryResult = ApolloReactCommon.QueryResult<SampleTypeListQuery, SampleTypeListQueryVariables>;