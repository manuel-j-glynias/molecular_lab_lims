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










export type _AuthorFilter = {
  AND?: Maybe<Array<_AuthorFilter>>;
  OR?: Maybe<Array<_AuthorFilter>>;
  first_initial?: Maybe<Scalars['String']>;
  first_initial_contains?: Maybe<Scalars['String']>;
  first_initial_ends_with?: Maybe<Scalars['String']>;
  first_initial_gt?: Maybe<Scalars['String']>;
  first_initial_gte?: Maybe<Scalars['String']>;
  first_initial_in?: Maybe<Array<Scalars['String']>>;
  first_initial_lt?: Maybe<Scalars['String']>;
  first_initial_lte?: Maybe<Scalars['String']>;
  first_initial_not?: Maybe<Scalars['String']>;
  first_initial_not_contains?: Maybe<Scalars['String']>;
  first_initial_not_ends_with?: Maybe<Scalars['String']>;
  first_initial_not_in?: Maybe<Array<Scalars['String']>>;
  first_initial_not_starts_with?: Maybe<Scalars['String']>;
  first_initial_starts_with?: Maybe<Scalars['String']>;
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
  references?: Maybe<_LiteratureReferenceFilter>;
  references_every?: Maybe<_LiteratureReferenceFilter>;
  references_in?: Maybe<_LiteratureReferenceFilter>;
  references_none?: Maybe<_LiteratureReferenceFilter>;
  references_not?: Maybe<_LiteratureReferenceFilter>;
  references_not_in?: Maybe<_LiteratureReferenceFilter>;
  references_single?: Maybe<_LiteratureReferenceFilter>;
  references_some?: Maybe<_LiteratureReferenceFilter>;
  surname?: Maybe<Scalars['String']>;
  surname_contains?: Maybe<Scalars['String']>;
  surname_ends_with?: Maybe<Scalars['String']>;
  surname_gt?: Maybe<Scalars['String']>;
  surname_gte?: Maybe<Scalars['String']>;
  surname_in?: Maybe<Array<Scalars['String']>>;
  surname_lt?: Maybe<Scalars['String']>;
  surname_lte?: Maybe<Scalars['String']>;
  surname_not?: Maybe<Scalars['String']>;
  surname_not_contains?: Maybe<Scalars['String']>;
  surname_not_ends_with?: Maybe<Scalars['String']>;
  surname_not_in?: Maybe<Array<Scalars['String']>>;
  surname_not_starts_with?: Maybe<Scalars['String']>;
  surname_starts_with?: Maybe<Scalars['String']>;
};

export enum _AuthorOrdering {
  FirstInitialAsc = 'first_initial_asc',
  FirstInitialDesc = 'first_initial_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  SurnameAsc = 'surname_asc',
  SurnameDesc = 'surname_desc'
}

export type _EditableStatementFilter = {
  AND?: Maybe<Array<_EditableStatementFilter>>;
  OR?: Maybe<Array<_EditableStatementFilter>>;
  deleted?: Maybe<Scalars['Boolean']>;
  deleted_not?: Maybe<Scalars['Boolean']>;
  edit_date?: Maybe<Scalars['String']>;
  edit_date_contains?: Maybe<Scalars['String']>;
  edit_date_ends_with?: Maybe<Scalars['String']>;
  edit_date_gt?: Maybe<Scalars['String']>;
  edit_date_gte?: Maybe<Scalars['String']>;
  edit_date_in?: Maybe<Array<Scalars['String']>>;
  edit_date_lt?: Maybe<Scalars['String']>;
  edit_date_lte?: Maybe<Scalars['String']>;
  edit_date_not?: Maybe<Scalars['String']>;
  edit_date_not_contains?: Maybe<Scalars['String']>;
  edit_date_not_ends_with?: Maybe<Scalars['String']>;
  edit_date_not_in?: Maybe<Array<Scalars['String']>>;
  edit_date_not_starts_with?: Maybe<Scalars['String']>;
  edit_date_starts_with?: Maybe<Scalars['String']>;
  editor?: Maybe<_UserFilter>;
  editor_in?: Maybe<_UserFilter>;
  editor_not?: Maybe<_UserFilter>;
  editor_not_in?: Maybe<_UserFilter>;
  field?: Maybe<Scalars['String']>;
  field_contains?: Maybe<Scalars['String']>;
  field_ends_with?: Maybe<Scalars['String']>;
  field_gt?: Maybe<Scalars['String']>;
  field_gte?: Maybe<Scalars['String']>;
  field_in?: Maybe<Array<Scalars['String']>>;
  field_lt?: Maybe<Scalars['String']>;
  field_lte?: Maybe<Scalars['String']>;
  field_not?: Maybe<Scalars['String']>;
  field_not_contains?: Maybe<Scalars['String']>;
  field_not_ends_with?: Maybe<Scalars['String']>;
  field_not_in?: Maybe<Array<Scalars['String']>>;
  field_not_starts_with?: Maybe<Scalars['String']>;
  field_starts_with?: Maybe<Scalars['String']>;
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
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
  statement?: Maybe<Scalars['String']>;
  statement_contains?: Maybe<Scalars['String']>;
  statement_ends_with?: Maybe<Scalars['String']>;
  statement_gt?: Maybe<Scalars['String']>;
  statement_gte?: Maybe<Scalars['String']>;
  statement_in?: Maybe<Array<Scalars['String']>>;
  statement_lt?: Maybe<Scalars['String']>;
  statement_lte?: Maybe<Scalars['String']>;
  statement_not?: Maybe<Scalars['String']>;
  statement_not_contains?: Maybe<Scalars['String']>;
  statement_not_ends_with?: Maybe<Scalars['String']>;
  statement_not_in?: Maybe<Array<Scalars['String']>>;
  statement_not_starts_with?: Maybe<Scalars['String']>;
  statement_starts_with?: Maybe<Scalars['String']>;
};

export enum _EditableStatementOrdering {
  DeletedAsc = 'deleted_asc',
  DeletedDesc = 'deleted_desc',
  EditDateAsc = 'edit_date_asc',
  EditDateDesc = 'edit_date_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  StatementAsc = 'statement_asc',
  StatementDesc = 'statement_desc'
}

export type _InternetReferenceFilter = {
  AND?: Maybe<Array<_InternetReferenceFilter>>;
  OR?: Maybe<Array<_InternetReferenceFilter>>;
  accessed_date?: Maybe<Scalars['String']>;
  accessed_date_contains?: Maybe<Scalars['String']>;
  accessed_date_ends_with?: Maybe<Scalars['String']>;
  accessed_date_gt?: Maybe<Scalars['String']>;
  accessed_date_gte?: Maybe<Scalars['String']>;
  accessed_date_in?: Maybe<Array<Scalars['String']>>;
  accessed_date_lt?: Maybe<Scalars['String']>;
  accessed_date_lte?: Maybe<Scalars['String']>;
  accessed_date_not?: Maybe<Scalars['String']>;
  accessed_date_not_contains?: Maybe<Scalars['String']>;
  accessed_date_not_ends_with?: Maybe<Scalars['String']>;
  accessed_date_not_in?: Maybe<Array<Scalars['String']>>;
  accessed_date_not_starts_with?: Maybe<Scalars['String']>;
  accessed_date_starts_with?: Maybe<Scalars['String']>;
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
  shortReference?: Maybe<Scalars['String']>;
  shortReference_contains?: Maybe<Scalars['String']>;
  shortReference_ends_with?: Maybe<Scalars['String']>;
  shortReference_gt?: Maybe<Scalars['String']>;
  shortReference_gte?: Maybe<Scalars['String']>;
  shortReference_in?: Maybe<Array<Scalars['String']>>;
  shortReference_lt?: Maybe<Scalars['String']>;
  shortReference_lte?: Maybe<Scalars['String']>;
  shortReference_not?: Maybe<Scalars['String']>;
  shortReference_not_contains?: Maybe<Scalars['String']>;
  shortReference_not_ends_with?: Maybe<Scalars['String']>;
  shortReference_not_in?: Maybe<Array<Scalars['String']>>;
  shortReference_not_starts_with?: Maybe<Scalars['String']>;
  shortReference_starts_with?: Maybe<Scalars['String']>;
  statements_referenced?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_every?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_in?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_none?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_not?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_not_in?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_single?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_some?: Maybe<_StatementWithEvidenceFilter>;
  web_address?: Maybe<Scalars['String']>;
  web_address_contains?: Maybe<Scalars['String']>;
  web_address_ends_with?: Maybe<Scalars['String']>;
  web_address_gt?: Maybe<Scalars['String']>;
  web_address_gte?: Maybe<Scalars['String']>;
  web_address_in?: Maybe<Array<Scalars['String']>>;
  web_address_lt?: Maybe<Scalars['String']>;
  web_address_lte?: Maybe<Scalars['String']>;
  web_address_not?: Maybe<Scalars['String']>;
  web_address_not_contains?: Maybe<Scalars['String']>;
  web_address_not_ends_with?: Maybe<Scalars['String']>;
  web_address_not_in?: Maybe<Array<Scalars['String']>>;
  web_address_not_starts_with?: Maybe<Scalars['String']>;
  web_address_starts_with?: Maybe<Scalars['String']>;
};

export enum _InternetReferenceOrdering {
  AccessedDateAsc = 'accessed_date_asc',
  AccessedDateDesc = 'accessed_date_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  ShortReferenceAsc = 'shortReference_asc',
  ShortReferenceDesc = 'shortReference_desc',
  WebAddressAsc = 'web_address_asc',
  WebAddressDesc = 'web_address_desc'
}

export type _JaxGeneFilter = {
  AND?: Maybe<Array<_JaxGeneFilter>>;
  OR?: Maybe<Array<_JaxGeneFilter>>;
  canonicalTranscript?: Maybe<Scalars['String']>;
  canonicalTranscript_contains?: Maybe<Scalars['String']>;
  canonicalTranscript_ends_with?: Maybe<Scalars['String']>;
  canonicalTranscript_gt?: Maybe<Scalars['String']>;
  canonicalTranscript_gte?: Maybe<Scalars['String']>;
  canonicalTranscript_in?: Maybe<Array<Scalars['String']>>;
  canonicalTranscript_lt?: Maybe<Scalars['String']>;
  canonicalTranscript_lte?: Maybe<Scalars['String']>;
  canonicalTranscript_not?: Maybe<Scalars['String']>;
  canonicalTranscript_not_contains?: Maybe<Scalars['String']>;
  canonicalTranscript_not_ends_with?: Maybe<Scalars['String']>;
  canonicalTranscript_not_in?: Maybe<Array<Scalars['String']>>;
  canonicalTranscript_not_starts_with?: Maybe<Scalars['String']>;
  canonicalTranscript_starts_with?: Maybe<Scalars['String']>;
  chromosome?: Maybe<Scalars['String']>;
  chromosome_contains?: Maybe<Scalars['String']>;
  chromosome_ends_with?: Maybe<Scalars['String']>;
  chromosome_gt?: Maybe<Scalars['String']>;
  chromosome_gte?: Maybe<Scalars['String']>;
  chromosome_in?: Maybe<Array<Scalars['String']>>;
  chromosome_lt?: Maybe<Scalars['String']>;
  chromosome_lte?: Maybe<Scalars['String']>;
  chromosome_not?: Maybe<Scalars['String']>;
  chromosome_not_contains?: Maybe<Scalars['String']>;
  chromosome_not_ends_with?: Maybe<Scalars['String']>;
  chromosome_not_in?: Maybe<Array<Scalars['String']>>;
  chromosome_not_starts_with?: Maybe<Scalars['String']>;
  chromosome_starts_with?: Maybe<Scalars['String']>;
  description?: Maybe<_EditableStatementFilter>;
  description_in?: Maybe<_EditableStatementFilter>;
  description_not?: Maybe<_EditableStatementFilter>;
  description_not_in?: Maybe<_EditableStatementFilter>;
  entrezId?: Maybe<Scalars['String']>;
  entrezId_contains?: Maybe<Scalars['String']>;
  entrezId_ends_with?: Maybe<Scalars['String']>;
  entrezId_gt?: Maybe<Scalars['String']>;
  entrezId_gte?: Maybe<Scalars['String']>;
  entrezId_in?: Maybe<Array<Scalars['String']>>;
  entrezId_lt?: Maybe<Scalars['String']>;
  entrezId_lte?: Maybe<Scalars['String']>;
  entrezId_not?: Maybe<Scalars['String']>;
  entrezId_not_contains?: Maybe<Scalars['String']>;
  entrezId_not_ends_with?: Maybe<Scalars['String']>;
  entrezId_not_in?: Maybe<Array<Scalars['String']>>;
  entrezId_not_starts_with?: Maybe<Scalars['String']>;
  entrezId_starts_with?: Maybe<Scalars['String']>;
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
  jaxId?: Maybe<Scalars['String']>;
  jaxId_contains?: Maybe<Scalars['String']>;
  jaxId_ends_with?: Maybe<Scalars['String']>;
  jaxId_gt?: Maybe<Scalars['String']>;
  jaxId_gte?: Maybe<Scalars['String']>;
  jaxId_in?: Maybe<Array<Scalars['String']>>;
  jaxId_lt?: Maybe<Scalars['String']>;
  jaxId_lte?: Maybe<Scalars['String']>;
  jaxId_not?: Maybe<Scalars['String']>;
  jaxId_not_contains?: Maybe<Scalars['String']>;
  jaxId_not_ends_with?: Maybe<Scalars['String']>;
  jaxId_not_in?: Maybe<Array<Scalars['String']>>;
  jaxId_not_starts_with?: Maybe<Scalars['String']>;
  jaxId_starts_with?: Maybe<Scalars['String']>;
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
  synonyms?: Maybe<Scalars['String']>;
  synonyms_contains?: Maybe<Scalars['String']>;
  synonyms_ends_with?: Maybe<Scalars['String']>;
  synonyms_gt?: Maybe<Scalars['String']>;
  synonyms_gte?: Maybe<Scalars['String']>;
  synonyms_in?: Maybe<Array<Scalars['String']>>;
  synonyms_lt?: Maybe<Scalars['String']>;
  synonyms_lte?: Maybe<Scalars['String']>;
  synonyms_not?: Maybe<Scalars['String']>;
  synonyms_not_contains?: Maybe<Scalars['String']>;
  synonyms_not_ends_with?: Maybe<Scalars['String']>;
  synonyms_not_in?: Maybe<Array<Scalars['String']>>;
  synonyms_not_starts_with?: Maybe<Scalars['String']>;
  synonyms_starts_with?: Maybe<Scalars['String']>;
};

export enum _JaxGeneOrdering {
  CanonicalTranscriptAsc = 'canonicalTranscript_asc',
  CanonicalTranscriptDesc = 'canonicalTranscript_desc',
  ChromosomeAsc = 'chromosome_asc',
  ChromosomeDesc = 'chromosome_desc',
  EntrezIdAsc = 'entrezId_asc',
  EntrezIdDesc = 'entrezId_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  JaxIdAsc = 'jaxId_asc',
  JaxIdDesc = 'jaxId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  SynonymsAsc = 'synonyms_asc',
  SynonymsDesc = 'synonyms_desc'
}

export type _JournalFilter = {
  AND?: Maybe<Array<_JournalFilter>>;
  OR?: Maybe<Array<_JournalFilter>>;
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
};

export enum _JournalOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _LiteratureReferenceFilter = {
  AND?: Maybe<Array<_LiteratureReferenceFilter>>;
  DOI?: Maybe<Scalars['String']>;
  DOI_contains?: Maybe<Scalars['String']>;
  DOI_ends_with?: Maybe<Scalars['String']>;
  DOI_gt?: Maybe<Scalars['String']>;
  DOI_gte?: Maybe<Scalars['String']>;
  DOI_in?: Maybe<Array<Scalars['String']>>;
  DOI_lt?: Maybe<Scalars['String']>;
  DOI_lte?: Maybe<Scalars['String']>;
  DOI_not?: Maybe<Scalars['String']>;
  DOI_not_contains?: Maybe<Scalars['String']>;
  DOI_not_ends_with?: Maybe<Scalars['String']>;
  DOI_not_in?: Maybe<Array<Scalars['String']>>;
  DOI_not_starts_with?: Maybe<Scalars['String']>;
  DOI_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_LiteratureReferenceFilter>>;
  PMID?: Maybe<Scalars['String']>;
  PMID_contains?: Maybe<Scalars['String']>;
  PMID_ends_with?: Maybe<Scalars['String']>;
  PMID_gt?: Maybe<Scalars['String']>;
  PMID_gte?: Maybe<Scalars['String']>;
  PMID_in?: Maybe<Array<Scalars['String']>>;
  PMID_lt?: Maybe<Scalars['String']>;
  PMID_lte?: Maybe<Scalars['String']>;
  PMID_not?: Maybe<Scalars['String']>;
  PMID_not_contains?: Maybe<Scalars['String']>;
  PMID_not_ends_with?: Maybe<Scalars['String']>;
  PMID_not_in?: Maybe<Array<Scalars['String']>>;
  PMID_not_starts_with?: Maybe<Scalars['String']>;
  PMID_starts_with?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  abstract_contains?: Maybe<Scalars['String']>;
  abstract_ends_with?: Maybe<Scalars['String']>;
  abstract_gt?: Maybe<Scalars['String']>;
  abstract_gte?: Maybe<Scalars['String']>;
  abstract_in?: Maybe<Array<Scalars['String']>>;
  abstract_lt?: Maybe<Scalars['String']>;
  abstract_lte?: Maybe<Scalars['String']>;
  abstract_not?: Maybe<Scalars['String']>;
  abstract_not_contains?: Maybe<Scalars['String']>;
  abstract_not_ends_with?: Maybe<Scalars['String']>;
  abstract_not_in?: Maybe<Array<Scalars['String']>>;
  abstract_not_starts_with?: Maybe<Scalars['String']>;
  abstract_starts_with?: Maybe<Scalars['String']>;
  authors?: Maybe<_AuthorFilter>;
  authors_every?: Maybe<_AuthorFilter>;
  authors_in?: Maybe<_AuthorFilter>;
  authors_none?: Maybe<_AuthorFilter>;
  authors_not?: Maybe<_AuthorFilter>;
  authors_not_in?: Maybe<_AuthorFilter>;
  authors_single?: Maybe<_AuthorFilter>;
  authors_some?: Maybe<_AuthorFilter>;
  first_page?: Maybe<Scalars['String']>;
  first_page_contains?: Maybe<Scalars['String']>;
  first_page_ends_with?: Maybe<Scalars['String']>;
  first_page_gt?: Maybe<Scalars['String']>;
  first_page_gte?: Maybe<Scalars['String']>;
  first_page_in?: Maybe<Array<Scalars['String']>>;
  first_page_lt?: Maybe<Scalars['String']>;
  first_page_lte?: Maybe<Scalars['String']>;
  first_page_not?: Maybe<Scalars['String']>;
  first_page_not_contains?: Maybe<Scalars['String']>;
  first_page_not_ends_with?: Maybe<Scalars['String']>;
  first_page_not_in?: Maybe<Array<Scalars['String']>>;
  first_page_not_starts_with?: Maybe<Scalars['String']>;
  first_page_starts_with?: Maybe<Scalars['String']>;
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
  journal?: Maybe<_JournalFilter>;
  journal_in?: Maybe<_JournalFilter>;
  journal_not?: Maybe<_JournalFilter>;
  journal_not_in?: Maybe<_JournalFilter>;
  last_page?: Maybe<Scalars['String']>;
  last_page_contains?: Maybe<Scalars['String']>;
  last_page_ends_with?: Maybe<Scalars['String']>;
  last_page_gt?: Maybe<Scalars['String']>;
  last_page_gte?: Maybe<Scalars['String']>;
  last_page_in?: Maybe<Array<Scalars['String']>>;
  last_page_lt?: Maybe<Scalars['String']>;
  last_page_lte?: Maybe<Scalars['String']>;
  last_page_not?: Maybe<Scalars['String']>;
  last_page_not_contains?: Maybe<Scalars['String']>;
  last_page_not_ends_with?: Maybe<Scalars['String']>;
  last_page_not_in?: Maybe<Array<Scalars['String']>>;
  last_page_not_starts_with?: Maybe<Scalars['String']>;
  last_page_starts_with?: Maybe<Scalars['String']>;
  publication_Year?: Maybe<Scalars['String']>;
  publication_Year_contains?: Maybe<Scalars['String']>;
  publication_Year_ends_with?: Maybe<Scalars['String']>;
  publication_Year_gt?: Maybe<Scalars['String']>;
  publication_Year_gte?: Maybe<Scalars['String']>;
  publication_Year_in?: Maybe<Array<Scalars['String']>>;
  publication_Year_lt?: Maybe<Scalars['String']>;
  publication_Year_lte?: Maybe<Scalars['String']>;
  publication_Year_not?: Maybe<Scalars['String']>;
  publication_Year_not_contains?: Maybe<Scalars['String']>;
  publication_Year_not_ends_with?: Maybe<Scalars['String']>;
  publication_Year_not_in?: Maybe<Array<Scalars['String']>>;
  publication_Year_not_starts_with?: Maybe<Scalars['String']>;
  publication_Year_starts_with?: Maybe<Scalars['String']>;
  shortReference?: Maybe<Scalars['String']>;
  shortReference_contains?: Maybe<Scalars['String']>;
  shortReference_ends_with?: Maybe<Scalars['String']>;
  shortReference_gt?: Maybe<Scalars['String']>;
  shortReference_gte?: Maybe<Scalars['String']>;
  shortReference_in?: Maybe<Array<Scalars['String']>>;
  shortReference_lt?: Maybe<Scalars['String']>;
  shortReference_lte?: Maybe<Scalars['String']>;
  shortReference_not?: Maybe<Scalars['String']>;
  shortReference_not_contains?: Maybe<Scalars['String']>;
  shortReference_not_ends_with?: Maybe<Scalars['String']>;
  shortReference_not_in?: Maybe<Array<Scalars['String']>>;
  shortReference_not_starts_with?: Maybe<Scalars['String']>;
  shortReference_starts_with?: Maybe<Scalars['String']>;
  statements_referenced?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_every?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_in?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_none?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_not?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_not_in?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_single?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_some?: Maybe<_StatementWithEvidenceFilter>;
  title?: Maybe<Scalars['String']>;
  title_contains?: Maybe<Scalars['String']>;
  title_ends_with?: Maybe<Scalars['String']>;
  title_gt?: Maybe<Scalars['String']>;
  title_gte?: Maybe<Scalars['String']>;
  title_in?: Maybe<Array<Scalars['String']>>;
  title_lt?: Maybe<Scalars['String']>;
  title_lte?: Maybe<Scalars['String']>;
  title_not?: Maybe<Scalars['String']>;
  title_not_contains?: Maybe<Scalars['String']>;
  title_not_ends_with?: Maybe<Scalars['String']>;
  title_not_in?: Maybe<Array<Scalars['String']>>;
  title_not_starts_with?: Maybe<Scalars['String']>;
  title_starts_with?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  volume_contains?: Maybe<Scalars['String']>;
  volume_ends_with?: Maybe<Scalars['String']>;
  volume_gt?: Maybe<Scalars['String']>;
  volume_gte?: Maybe<Scalars['String']>;
  volume_in?: Maybe<Array<Scalars['String']>>;
  volume_lt?: Maybe<Scalars['String']>;
  volume_lte?: Maybe<Scalars['String']>;
  volume_not?: Maybe<Scalars['String']>;
  volume_not_contains?: Maybe<Scalars['String']>;
  volume_not_ends_with?: Maybe<Scalars['String']>;
  volume_not_in?: Maybe<Array<Scalars['String']>>;
  volume_not_starts_with?: Maybe<Scalars['String']>;
  volume_starts_with?: Maybe<Scalars['String']>;
};

export enum _LiteratureReferenceOrdering {
  DoiAsc = 'DOI_asc',
  DoiDesc = 'DOI_desc',
  PmidAsc = 'PMID_asc',
  PmidDesc = 'PMID_desc',
  AbstractAsc = 'abstract_asc',
  AbstractDesc = 'abstract_desc',
  FirstPageAsc = 'first_page_asc',
  FirstPageDesc = 'first_page_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LastPageAsc = 'last_page_asc',
  LastPageDesc = 'last_page_desc',
  PublicationYearAsc = 'publication_Year_asc',
  PublicationYearDesc = 'publication_Year_desc',
  ShortReferenceAsc = 'shortReference_asc',
  ShortReferenceDesc = 'shortReference_desc',
  TitleAsc = 'title_asc',
  TitleDesc = 'title_desc',
  VolumeAsc = 'volume_asc',
  VolumeDesc = 'volume_desc'
}

export type _MyGeneInfo_GeneFilter = {
  AND?: Maybe<Array<_MyGeneInfo_GeneFilter>>;
  OR?: Maybe<Array<_MyGeneInfo_GeneFilter>>;
  chromosome?: Maybe<Scalars['String']>;
  chromosome_contains?: Maybe<Scalars['String']>;
  chromosome_ends_with?: Maybe<Scalars['String']>;
  chromosome_gt?: Maybe<Scalars['String']>;
  chromosome_gte?: Maybe<Scalars['String']>;
  chromosome_in?: Maybe<Array<Scalars['String']>>;
  chromosome_lt?: Maybe<Scalars['String']>;
  chromosome_lte?: Maybe<Scalars['String']>;
  chromosome_not?: Maybe<Scalars['String']>;
  chromosome_not_contains?: Maybe<Scalars['String']>;
  chromosome_not_ends_with?: Maybe<Scalars['String']>;
  chromosome_not_in?: Maybe<Array<Scalars['String']>>;
  chromosome_not_starts_with?: Maybe<Scalars['String']>;
  chromosome_starts_with?: Maybe<Scalars['String']>;
  description?: Maybe<_EditableStatementFilter>;
  description_in?: Maybe<_EditableStatementFilter>;
  description_not?: Maybe<_EditableStatementFilter>;
  description_not_in?: Maybe<_EditableStatementFilter>;
  end?: Maybe<Scalars['Int']>;
  end_gt?: Maybe<Scalars['Int']>;
  end_gte?: Maybe<Scalars['Int']>;
  end_in?: Maybe<Array<Scalars['Int']>>;
  end_lt?: Maybe<Scalars['Int']>;
  end_lte?: Maybe<Scalars['Int']>;
  end_not?: Maybe<Scalars['Int']>;
  end_not_in?: Maybe<Array<Scalars['Int']>>;
  entrezId?: Maybe<Scalars['String']>;
  entrezId_contains?: Maybe<Scalars['String']>;
  entrezId_ends_with?: Maybe<Scalars['String']>;
  entrezId_gt?: Maybe<Scalars['String']>;
  entrezId_gte?: Maybe<Scalars['String']>;
  entrezId_in?: Maybe<Array<Scalars['String']>>;
  entrezId_lt?: Maybe<Scalars['String']>;
  entrezId_lte?: Maybe<Scalars['String']>;
  entrezId_not?: Maybe<Scalars['String']>;
  entrezId_not_contains?: Maybe<Scalars['String']>;
  entrezId_not_ends_with?: Maybe<Scalars['String']>;
  entrezId_not_in?: Maybe<Array<Scalars['String']>>;
  entrezId_not_starts_with?: Maybe<Scalars['String']>;
  entrezId_starts_with?: Maybe<Scalars['String']>;
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
  start?: Maybe<Scalars['Int']>;
  start_gt?: Maybe<Scalars['Int']>;
  start_gte?: Maybe<Scalars['Int']>;
  start_in?: Maybe<Array<Scalars['Int']>>;
  start_lt?: Maybe<Scalars['Int']>;
  start_lte?: Maybe<Scalars['Int']>;
  start_not?: Maybe<Scalars['Int']>;
  start_not_in?: Maybe<Array<Scalars['Int']>>;
  strand?: Maybe<Strand>;
  strand_in?: Maybe<Array<Strand>>;
  strand_not?: Maybe<Strand>;
  strand_not_in?: Maybe<Array<Strand>>;
  synonyms?: Maybe<Scalars['String']>;
  synonyms_contains?: Maybe<Scalars['String']>;
  synonyms_ends_with?: Maybe<Scalars['String']>;
  synonyms_gt?: Maybe<Scalars['String']>;
  synonyms_gte?: Maybe<Scalars['String']>;
  synonyms_in?: Maybe<Array<Scalars['String']>>;
  synonyms_lt?: Maybe<Scalars['String']>;
  synonyms_lte?: Maybe<Scalars['String']>;
  synonyms_not?: Maybe<Scalars['String']>;
  synonyms_not_contains?: Maybe<Scalars['String']>;
  synonyms_not_ends_with?: Maybe<Scalars['String']>;
  synonyms_not_in?: Maybe<Array<Scalars['String']>>;
  synonyms_not_starts_with?: Maybe<Scalars['String']>;
  synonyms_starts_with?: Maybe<Scalars['String']>;
  uniprot_entry?: Maybe<_Uniprot_EntryFilter>;
  uniprot_entry_in?: Maybe<_Uniprot_EntryFilter>;
  uniprot_entry_not?: Maybe<_Uniprot_EntryFilter>;
  uniprot_entry_not_in?: Maybe<_Uniprot_EntryFilter>;
};

export enum _MyGeneInfo_GeneOrdering {
  ChromosomeAsc = 'chromosome_asc',
  ChromosomeDesc = 'chromosome_desc',
  EndAsc = 'end_asc',
  EndDesc = 'end_desc',
  EntrezIdAsc = 'entrezId_asc',
  EntrezIdDesc = 'entrezId_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  StartAsc = 'start_asc',
  StartDesc = 'start_desc',
  StrandAsc = 'strand_asc',
  StrandDesc = 'strand_desc',
  SynonymsAsc = 'synonyms_asc',
  SynonymsDesc = 'synonyms_desc'
}

export type _NamedEntityFilter = {
  AND?: Maybe<Array<_NamedEntityFilter>>;
  OR?: Maybe<Array<_NamedEntityFilter>>;
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
};

export enum _NamedEntityOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _OmniGeneFilter = {
  AND?: Maybe<Array<_OmniGeneFilter>>;
  OR?: Maybe<Array<_OmniGeneFilter>>;
  geneDescription?: Maybe<_EditableStatementFilter>;
  geneDescription_in?: Maybe<_EditableStatementFilter>;
  geneDescription_not?: Maybe<_EditableStatementFilter>;
  geneDescription_not_in?: Maybe<_EditableStatementFilter>;
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
  jaxGene?: Maybe<_JaxGeneFilter>;
  jaxGene_in?: Maybe<_JaxGeneFilter>;
  jaxGene_not?: Maybe<_JaxGeneFilter>;
  jaxGene_not_in?: Maybe<_JaxGeneFilter>;
  myGeneInfoGene?: Maybe<_MyGeneInfo_GeneFilter>;
  myGeneInfoGene_in?: Maybe<_MyGeneInfo_GeneFilter>;
  myGeneInfoGene_not?: Maybe<_MyGeneInfo_GeneFilter>;
  myGeneInfoGene_not_in?: Maybe<_MyGeneInfo_GeneFilter>;
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
  oncogenicCategory?: Maybe<_EditableStatementFilter>;
  oncogenicCategory_in?: Maybe<_EditableStatementFilter>;
  oncogenicCategory_not?: Maybe<_EditableStatementFilter>;
  oncogenicCategory_not_in?: Maybe<_EditableStatementFilter>;
  panelName?: Maybe<Scalars['String']>;
  panelName_contains?: Maybe<Scalars['String']>;
  panelName_ends_with?: Maybe<Scalars['String']>;
  panelName_gt?: Maybe<Scalars['String']>;
  panelName_gte?: Maybe<Scalars['String']>;
  panelName_in?: Maybe<Array<Scalars['String']>>;
  panelName_lt?: Maybe<Scalars['String']>;
  panelName_lte?: Maybe<Scalars['String']>;
  panelName_not?: Maybe<Scalars['String']>;
  panelName_not_contains?: Maybe<Scalars['String']>;
  panelName_not_ends_with?: Maybe<Scalars['String']>;
  panelName_not_in?: Maybe<Array<Scalars['String']>>;
  panelName_not_starts_with?: Maybe<Scalars['String']>;
  panelName_starts_with?: Maybe<Scalars['String']>;
  synonymsString?: Maybe<_EditableStatementFilter>;
  synonymsString_in?: Maybe<_EditableStatementFilter>;
  synonymsString_not?: Maybe<_EditableStatementFilter>;
  synonymsString_not_in?: Maybe<_EditableStatementFilter>;
  uniprot_entry?: Maybe<_Uniprot_EntryFilter>;
  uniprot_entry_in?: Maybe<_Uniprot_EntryFilter>;
  uniprot_entry_not?: Maybe<_Uniprot_EntryFilter>;
  uniprot_entry_not_in?: Maybe<_Uniprot_EntryFilter>;
};

export enum _OmniGeneOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  PanelNameAsc = 'panelName_asc',
  PanelNameDesc = 'panelName_desc'
}

export type _ReferenceFilter = {
  AND?: Maybe<Array<_ReferenceFilter>>;
  OR?: Maybe<Array<_ReferenceFilter>>;
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
  shortReference?: Maybe<Scalars['String']>;
  shortReference_contains?: Maybe<Scalars['String']>;
  shortReference_ends_with?: Maybe<Scalars['String']>;
  shortReference_gt?: Maybe<Scalars['String']>;
  shortReference_gte?: Maybe<Scalars['String']>;
  shortReference_in?: Maybe<Array<Scalars['String']>>;
  shortReference_lt?: Maybe<Scalars['String']>;
  shortReference_lte?: Maybe<Scalars['String']>;
  shortReference_not?: Maybe<Scalars['String']>;
  shortReference_not_contains?: Maybe<Scalars['String']>;
  shortReference_not_ends_with?: Maybe<Scalars['String']>;
  shortReference_not_in?: Maybe<Array<Scalars['String']>>;
  shortReference_not_starts_with?: Maybe<Scalars['String']>;
  shortReference_starts_with?: Maybe<Scalars['String']>;
  statements_referenced?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_every?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_in?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_none?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_not?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_not_in?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_single?: Maybe<_StatementWithEvidenceFilter>;
  statements_referenced_some?: Maybe<_StatementWithEvidenceFilter>;
};

export enum _ReferenceOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  ShortReferenceAsc = 'shortReference_asc',
  ShortReferenceDesc = 'shortReference_desc'
}

export type _StatementWithEvidenceFilter = {
  AND?: Maybe<Array<_StatementWithEvidenceFilter>>;
  OR?: Maybe<Array<_StatementWithEvidenceFilter>>;
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
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
  statement?: Maybe<Scalars['String']>;
  statement_contains?: Maybe<Scalars['String']>;
  statement_ends_with?: Maybe<Scalars['String']>;
  statement_gt?: Maybe<Scalars['String']>;
  statement_gte?: Maybe<Scalars['String']>;
  statement_in?: Maybe<Array<Scalars['String']>>;
  statement_lt?: Maybe<Scalars['String']>;
  statement_lte?: Maybe<Scalars['String']>;
  statement_not?: Maybe<Scalars['String']>;
  statement_not_contains?: Maybe<Scalars['String']>;
  statement_not_ends_with?: Maybe<Scalars['String']>;
  statement_not_in?: Maybe<Array<Scalars['String']>>;
  statement_not_starts_with?: Maybe<Scalars['String']>;
  statement_starts_with?: Maybe<Scalars['String']>;
};

export enum _StatementWithEvidenceOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  StatementAsc = 'statement_asc',
  StatementDesc = 'statement_desc'
}

export type _Uniprot_EntryFilter = {
  AND?: Maybe<Array<_Uniprot_EntryFilter>>;
  OR?: Maybe<Array<_Uniprot_EntryFilter>>;
  accessionNumber?: Maybe<Scalars['String']>;
  accessionNumber_contains?: Maybe<Scalars['String']>;
  accessionNumber_ends_with?: Maybe<Scalars['String']>;
  accessionNumber_gt?: Maybe<Scalars['String']>;
  accessionNumber_gte?: Maybe<Scalars['String']>;
  accessionNumber_in?: Maybe<Array<Scalars['String']>>;
  accessionNumber_lt?: Maybe<Scalars['String']>;
  accessionNumber_lte?: Maybe<Scalars['String']>;
  accessionNumber_not?: Maybe<Scalars['String']>;
  accessionNumber_not_contains?: Maybe<Scalars['String']>;
  accessionNumber_not_ends_with?: Maybe<Scalars['String']>;
  accessionNumber_not_in?: Maybe<Array<Scalars['String']>>;
  accessionNumber_not_starts_with?: Maybe<Scalars['String']>;
  accessionNumber_starts_with?: Maybe<Scalars['String']>;
  function?: Maybe<_EditableStatementFilter>;
  function_in?: Maybe<_EditableStatementFilter>;
  function_not?: Maybe<_EditableStatementFilter>;
  function_not_in?: Maybe<_EditableStatementFilter>;
  gene?: Maybe<_MyGeneInfo_GeneFilter>;
  gene_in?: Maybe<_MyGeneInfo_GeneFilter>;
  gene_not?: Maybe<_MyGeneInfo_GeneFilter>;
  gene_not_in?: Maybe<_MyGeneInfo_GeneFilter>;
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
  uniprot_id?: Maybe<Scalars['String']>;
  uniprot_id_contains?: Maybe<Scalars['String']>;
  uniprot_id_ends_with?: Maybe<Scalars['String']>;
  uniprot_id_gt?: Maybe<Scalars['String']>;
  uniprot_id_gte?: Maybe<Scalars['String']>;
  uniprot_id_in?: Maybe<Array<Scalars['String']>>;
  uniprot_id_lt?: Maybe<Scalars['String']>;
  uniprot_id_lte?: Maybe<Scalars['String']>;
  uniprot_id_not?: Maybe<Scalars['String']>;
  uniprot_id_not_contains?: Maybe<Scalars['String']>;
  uniprot_id_not_ends_with?: Maybe<Scalars['String']>;
  uniprot_id_not_in?: Maybe<Array<Scalars['String']>>;
  uniprot_id_not_starts_with?: Maybe<Scalars['String']>;
  uniprot_id_starts_with?: Maybe<Scalars['String']>;
};

export enum _Uniprot_EntryOrdering {
  AccessionNumberAsc = 'accessionNumber_asc',
  AccessionNumberDesc = 'accessionNumber_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  UniprotIdAsc = 'uniprot_id_asc',
  UniprotIdDesc = 'uniprot_id_desc'
}

export type _UserFilter = {
  AND?: Maybe<Array<_UserFilter>>;
  OR?: Maybe<Array<_UserFilter>>;
  edited_Statements?: Maybe<_EditableStatementFilter>;
  edited_Statements_every?: Maybe<_EditableStatementFilter>;
  edited_Statements_in?: Maybe<_EditableStatementFilter>;
  edited_Statements_none?: Maybe<_EditableStatementFilter>;
  edited_Statements_not?: Maybe<_EditableStatementFilter>;
  edited_Statements_not_in?: Maybe<_EditableStatementFilter>;
  edited_Statements_single?: Maybe<_EditableStatementFilter>;
  edited_Statements_some?: Maybe<_EditableStatementFilter>;
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
  isAdmin?: Maybe<Scalars['Boolean']>;
  isAdmin_not?: Maybe<Scalars['Boolean']>;
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
};

export enum _UserOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  IsAdminAsc = 'isAdmin_asc',
  IsAdminDesc = 'isAdmin_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  PasswordAsc = 'password_asc',
  PasswordDesc = 'password_desc'
}

export type Author = {
   __typename?: 'Author';
  _id?: Maybe<Scalars['Long']>;
  first_initial: Scalars['String'];
  id: Scalars['ID'];
  references: Array<LiteratureReference>;
  surname: Scalars['String'];
};


export type AuthorReferencesArgs = {
  DOI?: Maybe<Scalars['String']>;
  DOIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  PMID?: Maybe<Scalars['String']>;
  PMIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_LiteratureReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  first_page?: Maybe<Scalars['String']>;
  first_pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_page?: Maybe<Scalars['String']>;
  last_pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publication_Year?: Maybe<Scalars['String']>;
  publication_Years?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EditableStatement = StatementWithEvidence & {
   __typename?: 'EditableStatement';
  _id?: Maybe<Scalars['Long']>;
  deleted: Scalars['Boolean'];
  edit_date: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  references: Array<Maybe<Reference>>;
  statement: Scalars['String'];
};


export type EditableStatementEditorArgs = {
  filter?: Maybe<_UserFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isAdmins?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type EditableStatementReferencesArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReferenceOrdering>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type InternetReference = Reference & {
   __typename?: 'InternetReference';
  _id?: Maybe<Scalars['Long']>;
  accessed_date: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  statements_referenced: Array<StatementWithEvidence>;
  web_address: Scalars['String'];
};


export type InternetReferenceStatements_ReferencedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_StatementWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StatementWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type JaxGene = NamedEntity & {
   __typename?: 'JaxGene';
  _id?: Maybe<Scalars['Long']>;
  canonicalTranscript: Array<Maybe<Scalars['String']>>;
  chromosome: Scalars['String'];
  description: EditableStatement;
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type JaxGeneDescriptionArgs = {
  deleted?: Maybe<Scalars['Boolean']>;
  deleteds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  edit_date?: Maybe<Scalars['String']>;
  edit_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Journal = NamedEntity & {
   __typename?: 'Journal';
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LiteratureReference = Reference & {
   __typename?: 'LiteratureReference';
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['Long']>;
  abstract?: Maybe<Scalars['String']>;
  authors: Array<Author>;
  first_page: Scalars['String'];
  id: Scalars['ID'];
  journal: Journal;
  last_page: Scalars['String'];
  publication_Year: Scalars['String'];
  shortReference: Scalars['String'];
  statements_referenced: Array<StatementWithEvidence>;
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type LiteratureReferenceAuthorsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AuthorFilter>;
  first?: Maybe<Scalars['Int']>;
  first_initial?: Maybe<Scalars['String']>;
  first_initials?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type LiteratureReferenceJournalArgs = {
  filter?: Maybe<_JournalFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JournalOrdering>>>;
};


export type LiteratureReferenceStatements_ReferencedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_StatementWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StatementWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MutationType = {
   __typename?: 'MutationType';
  addAuthorReferences?: Maybe<Scalars['String']>;
  addEditableStatementEditor?: Maybe<Scalars['String']>;
  addEditableStatementReferences?: Maybe<Scalars['String']>;
  addInternetReferenceStatements_referenced?: Maybe<Scalars['String']>;
  addJaxGeneDescription?: Maybe<Scalars['String']>;
  addLiteratureReferenceAuthors?: Maybe<Scalars['String']>;
  addLiteratureReferenceJournal?: Maybe<Scalars['String']>;
  addLiteratureReferenceStatements_referenced?: Maybe<Scalars['String']>;
  addMyGeneInfo_GeneDescription?: Maybe<Scalars['String']>;
  addMyGeneInfo_GeneUniprot_entry?: Maybe<Scalars['String']>;
  addOmniGeneGeneDescription?: Maybe<Scalars['String']>;
  addOmniGeneJaxGene?: Maybe<Scalars['String']>;
  addOmniGeneMyGeneInfoGene?: Maybe<Scalars['String']>;
  addOmniGeneOncogenicCategory?: Maybe<Scalars['String']>;
  addOmniGeneSynonymsString?: Maybe<Scalars['String']>;
  addOmniGeneUniprot_entry?: Maybe<Scalars['String']>;
  addReferenceStatements_referenced?: Maybe<Scalars['String']>;
  addStatementWithEvidenceReferences?: Maybe<Scalars['String']>;
  addUniprot_EntryFunction?: Maybe<Scalars['String']>;
  addUniprot_EntryGene?: Maybe<Scalars['String']>;
  addUserEdited_Statements?: Maybe<Scalars['String']>;
  createAuthor?: Maybe<Scalars['String']>;
  createEditableStatement?: Maybe<Scalars['String']>;
  createInternetReference?: Maybe<Scalars['String']>;
  createJaxGene?: Maybe<Scalars['String']>;
  createJournal?: Maybe<Scalars['String']>;
  createLiteratureReference?: Maybe<Scalars['String']>;
  createMyGeneInfo_Gene?: Maybe<Scalars['String']>;
  createNamedEntity?: Maybe<Scalars['String']>;
  createOmniGene?: Maybe<Scalars['String']>;
  createReference?: Maybe<Scalars['String']>;
  createStatementWithEvidence?: Maybe<Scalars['String']>;
  createUniprot_Entry?: Maybe<Scalars['String']>;
  createUser?: Maybe<Scalars['String']>;
  deleteAuthor?: Maybe<Scalars['String']>;
  deleteAuthorReferences?: Maybe<Scalars['String']>;
  deleteEditableStatement?: Maybe<Scalars['String']>;
  deleteEditableStatementEditor?: Maybe<Scalars['String']>;
  deleteEditableStatementReferences?: Maybe<Scalars['String']>;
  deleteInternetReference?: Maybe<Scalars['String']>;
  deleteInternetReferenceStatements_referenced?: Maybe<Scalars['String']>;
  deleteJaxGene?: Maybe<Scalars['String']>;
  deleteJaxGeneDescription?: Maybe<Scalars['String']>;
  deleteJournal?: Maybe<Scalars['String']>;
  deleteLiteratureReference?: Maybe<Scalars['String']>;
  deleteLiteratureReferenceAuthors?: Maybe<Scalars['String']>;
  deleteLiteratureReferenceJournal?: Maybe<Scalars['String']>;
  deleteLiteratureReferenceStatements_referenced?: Maybe<Scalars['String']>;
  deleteMyGeneInfo_Gene?: Maybe<Scalars['String']>;
  deleteMyGeneInfo_GeneDescription?: Maybe<Scalars['String']>;
  deleteMyGeneInfo_GeneUniprot_entry?: Maybe<Scalars['String']>;
  deleteNamedEntity?: Maybe<Scalars['String']>;
  deleteOmniGene?: Maybe<Scalars['String']>;
  deleteOmniGeneGeneDescription?: Maybe<Scalars['String']>;
  deleteOmniGeneJaxGene?: Maybe<Scalars['String']>;
  deleteOmniGeneMyGeneInfoGene?: Maybe<Scalars['String']>;
  deleteOmniGeneOncogenicCategory?: Maybe<Scalars['String']>;
  deleteOmniGeneSynonymsString?: Maybe<Scalars['String']>;
  deleteOmniGeneUniprot_entry?: Maybe<Scalars['String']>;
  deleteReference?: Maybe<Scalars['String']>;
  deleteReferenceStatements_referenced?: Maybe<Scalars['String']>;
  deleteStatementWithEvidence?: Maybe<Scalars['String']>;
  deleteStatementWithEvidenceReferences?: Maybe<Scalars['String']>;
  deleteUniprot_Entry?: Maybe<Scalars['String']>;
  deleteUniprot_EntryFunction?: Maybe<Scalars['String']>;
  deleteUniprot_EntryGene?: Maybe<Scalars['String']>;
  deleteUser?: Maybe<Scalars['String']>;
  deleteUserEdited_Statements?: Maybe<Scalars['String']>;
  mergeAuthor?: Maybe<Scalars['String']>;
  mergeEditableStatement?: Maybe<Scalars['String']>;
  mergeInternetReference?: Maybe<Scalars['String']>;
  mergeJaxGene?: Maybe<Scalars['String']>;
  mergeJournal?: Maybe<Scalars['String']>;
  mergeLiteratureReference?: Maybe<Scalars['String']>;
  mergeMyGeneInfo_Gene?: Maybe<Scalars['String']>;
  mergeNamedEntity?: Maybe<Scalars['String']>;
  mergeOmniGene?: Maybe<Scalars['String']>;
  mergeReference?: Maybe<Scalars['String']>;
  mergeStatementWithEvidence?: Maybe<Scalars['String']>;
  mergeUniprot_Entry?: Maybe<Scalars['String']>;
  mergeUser?: Maybe<Scalars['String']>;
  updateAuthor?: Maybe<Scalars['String']>;
  updateEditableStatement?: Maybe<Scalars['String']>;
  updateInternetReference?: Maybe<Scalars['String']>;
  updateJaxGene?: Maybe<Scalars['String']>;
  updateJournal?: Maybe<Scalars['String']>;
  updateLiteratureReference?: Maybe<Scalars['String']>;
  updateMyGeneInfo_Gene?: Maybe<Scalars['String']>;
  updateNamedEntity?: Maybe<Scalars['String']>;
  updateOmniGene?: Maybe<Scalars['String']>;
  updateReference?: Maybe<Scalars['String']>;
  updateStatementWithEvidence?: Maybe<Scalars['String']>;
  updateUniprot_Entry?: Maybe<Scalars['String']>;
  updateUser?: Maybe<Scalars['String']>;
};


export type MutationTypeAddAuthorReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableStatementEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableStatementReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddInternetReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeAddJaxGeneDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddLiteratureReferenceAuthorsArgs = {
  authors: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddLiteratureReferenceJournalArgs = {
  id: Scalars['ID'];
  journal: Array<Scalars['ID']>;
};


export type MutationTypeAddLiteratureReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeAddMyGeneInfo_GeneDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddMyGeneInfo_GeneUniprot_EntryArgs = {
  id: Scalars['ID'];
  uniprot_entry: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniGeneGeneDescriptionArgs = {
  geneDescription: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddOmniGeneJaxGeneArgs = {
  id: Scalars['ID'];
  jaxGene: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniGeneMyGeneInfoGeneArgs = {
  id: Scalars['ID'];
  myGeneInfoGene: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniGeneOncogenicCategoryArgs = {
  id: Scalars['ID'];
  oncogenicCategory: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniGeneSynonymsStringArgs = {
  id: Scalars['ID'];
  synonymsString: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniGeneUniprot_EntryArgs = {
  id: Scalars['ID'];
  uniprot_entry: Array<Scalars['ID']>;
};


export type MutationTypeAddReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeAddStatementWithEvidenceReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddUniprot_EntryFunctionArgs = {
  function: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddUniprot_EntryGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddUserEdited_StatementsArgs = {
  edited_Statements: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeCreateAuthorArgs = {
  first_initial: Scalars['String'];
  id: Scalars['ID'];
  surname: Scalars['String'];
};


export type MutationTypeCreateEditableStatementArgs = {
  deleted: Scalars['Boolean'];
  edit_date: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeCreateInternetReferenceArgs = {
  accessed_date: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  web_address: Scalars['String'];
};


export type MutationTypeCreateJaxGeneArgs = {
  canonicalTranscript: Array<Maybe<Scalars['String']>>;
  chromosome: Scalars['String'];
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeCreateJournalArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  first_page: Scalars['String'];
  id: Scalars['ID'];
  last_page: Scalars['String'];
  publication_Year: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeCreateMyGeneInfo_GeneArgs = {
  chromosome: Scalars['String'];
  end?: Maybe<Scalars['Int']>;
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  strand: Strand;
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeCreateNamedEntityArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateOmniGeneArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  panelName: Scalars['String'];
};


export type MutationTypeCreateReferenceArgs = {
  id: Scalars['ID'];
  shortReference: Scalars['String'];
};


export type MutationTypeCreateStatementWithEvidenceArgs = {
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeCreateUniprot_EntryArgs = {
  accessionNumber: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprot_id: Scalars['String'];
};


export type MutationTypeCreateUserArgs = {
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTypeDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteAuthorReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableStatementArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableStatementEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableStatementReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteInternetReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteInternetReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeDeleteJaxGeneArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxGeneDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJournalArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteLiteratureReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteLiteratureReferenceAuthorsArgs = {
  authors: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteLiteratureReferenceJournalArgs = {
  id: Scalars['ID'];
  journal: Array<Scalars['ID']>;
};


export type MutationTypeDeleteLiteratureReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMyGeneInfo_GeneArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteMyGeneInfo_GeneDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteMyGeneInfo_GeneUniprot_EntryArgs = {
  id: Scalars['ID'];
  uniprot_entry: Array<Scalars['ID']>;
};


export type MutationTypeDeleteNamedEntityArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOmniGeneArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOmniGeneGeneDescriptionArgs = {
  geneDescription: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteOmniGeneJaxGeneArgs = {
  id: Scalars['ID'];
  jaxGene: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniGeneMyGeneInfoGeneArgs = {
  id: Scalars['ID'];
  myGeneInfoGene: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniGeneOncogenicCategoryArgs = {
  id: Scalars['ID'];
  oncogenicCategory: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniGeneSynonymsStringArgs = {
  id: Scalars['ID'];
  synonymsString: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniGeneUniprot_EntryArgs = {
  id: Scalars['ID'];
  uniprot_entry: Array<Scalars['ID']>;
};


export type MutationTypeDeleteReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteReferenceStatements_ReferencedArgs = {
  id: Scalars['ID'];
  statements_referenced: Array<Scalars['ID']>;
};


export type MutationTypeDeleteStatementWithEvidenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteStatementWithEvidenceReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteUniprot_EntryArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteUniprot_EntryFunctionArgs = {
  function: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteUniprot_EntryGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteUserEdited_StatementsArgs = {
  edited_Statements: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeMergeAuthorArgs = {
  first_initial: Scalars['String'];
  id: Scalars['ID'];
  surname: Scalars['String'];
};


export type MutationTypeMergeEditableStatementArgs = {
  deleted: Scalars['Boolean'];
  edit_date: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeMergeInternetReferenceArgs = {
  accessed_date: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  web_address: Scalars['String'];
};


export type MutationTypeMergeJaxGeneArgs = {
  canonicalTranscript: Array<Maybe<Scalars['String']>>;
  chromosome: Scalars['String'];
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeMergeJournalArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  first_page: Scalars['String'];
  id: Scalars['ID'];
  last_page: Scalars['String'];
  publication_Year: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeMergeMyGeneInfo_GeneArgs = {
  chromosome: Scalars['String'];
  end?: Maybe<Scalars['Int']>;
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  strand: Strand;
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeMergeNamedEntityArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeOmniGeneArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  panelName: Scalars['String'];
};


export type MutationTypeMergeReferenceArgs = {
  id: Scalars['ID'];
  shortReference: Scalars['String'];
};


export type MutationTypeMergeStatementWithEvidenceArgs = {
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeMergeUniprot_EntryArgs = {
  accessionNumber: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprot_id: Scalars['String'];
};


export type MutationTypeMergeUserArgs = {
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTypeUpdateAuthorArgs = {
  first_initial: Scalars['String'];
  id: Scalars['ID'];
  surname: Scalars['String'];
};


export type MutationTypeUpdateEditableStatementArgs = {
  deleted: Scalars['Boolean'];
  edit_date: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeUpdateInternetReferenceArgs = {
  accessed_date: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  web_address: Scalars['String'];
};


export type MutationTypeUpdateJaxGeneArgs = {
  canonicalTranscript: Array<Maybe<Scalars['String']>>;
  chromosome: Scalars['String'];
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeUpdateJournalArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  first_page: Scalars['String'];
  id: Scalars['ID'];
  last_page: Scalars['String'];
  publication_Year: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeUpdateMyGeneInfo_GeneArgs = {
  chromosome: Scalars['String'];
  end?: Maybe<Scalars['Int']>;
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  strand: Strand;
  synonyms: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeUpdateNamedEntityArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateOmniGeneArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  panelName: Scalars['String'];
};


export type MutationTypeUpdateReferenceArgs = {
  id: Scalars['ID'];
  shortReference: Scalars['String'];
};


export type MutationTypeUpdateStatementWithEvidenceArgs = {
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeUpdateUniprot_EntryArgs = {
  accessionNumber: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprot_id: Scalars['String'];
};


export type MutationTypeUpdateUserArgs = {
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type MyGeneInfo_Gene = NamedEntity & {
   __typename?: 'MyGeneInfo_Gene';
  _id?: Maybe<Scalars['Long']>;
  chromosome: Scalars['String'];
  description: EditableStatement;
  end?: Maybe<Scalars['Int']>;
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  strand: Strand;
  synonyms: Array<Maybe<Scalars['String']>>;
  uniprot_entry: Uniprot_Entry;
};


export type MyGeneInfo_GeneDescriptionArgs = {
  deleted?: Maybe<Scalars['Boolean']>;
  deleteds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  edit_date?: Maybe<Scalars['String']>;
  edit_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MyGeneInfo_GeneUniprot_EntryArgs = {
  accessionNumber?: Maybe<Scalars['String']>;
  accessionNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Uniprot_EntryFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Uniprot_EntryOrdering>>>;
  uniprot_id?: Maybe<Scalars['String']>;
  uniprot_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NamedEntity = {
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type OmniGene = NamedEntity & {
   __typename?: 'OmniGene';
  _id?: Maybe<Scalars['Long']>;
  geneDescription: EditableStatement;
  id: Scalars['ID'];
  jaxGene?: Maybe<JaxGene>;
  myGeneInfoGene: MyGeneInfo_Gene;
  name: Scalars['String'];
  oncogenicCategory: EditableStatement;
  panelName: Scalars['String'];
  synonymsString: EditableStatement;
  uniprot_entry?: Maybe<Uniprot_Entry>;
};


export type OmniGeneGeneDescriptionArgs = {
  deleted?: Maybe<Scalars['Boolean']>;
  deleteds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  edit_date?: Maybe<Scalars['String']>;
  edit_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OmniGeneJaxGeneArgs = {
  canonicalTranscript?: Maybe<Array<Maybe<Scalars['String']>>>;
  canonicalTranscripts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  entrezId?: Maybe<Scalars['String']>;
  entrezIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_JaxGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JaxGeneOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type OmniGeneMyGeneInfoGeneArgs = {
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['Int']>;
  ends?: Maybe<Array<Maybe<Scalars['Int']>>>;
  entrezId?: Maybe<Scalars['String']>;
  entrezIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_MyGeneInfo_GeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_MyGeneInfo_GeneOrdering>>>;
  start?: Maybe<Scalars['Int']>;
  starts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  strand?: Maybe<Strand>;
  strands?: Maybe<Array<Maybe<Strand>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type OmniGeneOncogenicCategoryArgs = {
  deleted?: Maybe<Scalars['Boolean']>;
  deleteds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  edit_date?: Maybe<Scalars['String']>;
  edit_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OmniGeneSynonymsStringArgs = {
  deleted?: Maybe<Scalars['Boolean']>;
  deleteds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  edit_date?: Maybe<Scalars['String']>;
  edit_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OmniGeneUniprot_EntryArgs = {
  accessionNumber?: Maybe<Scalars['String']>;
  accessionNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Uniprot_EntryFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_Uniprot_EntryOrdering>>>;
  uniprot_id?: Maybe<Scalars['String']>;
  uniprot_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryType = {
   __typename?: 'QueryType';
  Author?: Maybe<Array<Maybe<Author>>>;
  EditableStatement?: Maybe<Array<Maybe<EditableStatement>>>;
  InternetReference?: Maybe<Array<Maybe<InternetReference>>>;
  JaxGene?: Maybe<Array<Maybe<JaxGene>>>;
  Journal?: Maybe<Array<Maybe<Journal>>>;
  LiteratureReference?: Maybe<Array<Maybe<LiteratureReference>>>;
  MyGeneInfo_Gene?: Maybe<Array<Maybe<MyGeneInfo_Gene>>>;
  NamedEntity?: Maybe<Array<Maybe<NamedEntity>>>;
  OmniGene?: Maybe<Array<Maybe<OmniGene>>>;
  Reference?: Maybe<Array<Maybe<Reference>>>;
  StatementWithEvidence?: Maybe<Array<Maybe<StatementWithEvidence>>>;
  Uniprot_Entry?: Maybe<Array<Maybe<Uniprot_Entry>>>;
  User?: Maybe<Array<Maybe<User>>>;
};


export type QueryTypeAuthorArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AuthorFilter>;
  first?: Maybe<Scalars['Int']>;
  first_initial?: Maybe<Scalars['String']>;
  first_initials?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeEditableStatementArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  deleted?: Maybe<Scalars['Boolean']>;
  deleteds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  edit_date?: Maybe<Scalars['String']>;
  edit_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeInternetReferenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  accessed_date?: Maybe<Scalars['String']>;
  accessed_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_InternetReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_InternetReferenceOrdering>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  web_address?: Maybe<Scalars['String']>;
  web_addresss?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeJaxGeneArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  canonicalTranscript?: Maybe<Array<Maybe<Scalars['String']>>>;
  canonicalTranscripts?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  entrezId?: Maybe<Scalars['String']>;
  entrezIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_JaxGeneFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JaxGeneOrdering>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type QueryTypeJournalArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JournalFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JournalOrdering>>>;
};


export type QueryTypeLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  DOIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  PMID?: Maybe<Scalars['String']>;
  PMIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_LiteratureReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  first_page?: Maybe<Scalars['String']>;
  first_pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  last_page?: Maybe<Scalars['String']>;
  last_pages?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publication_Year?: Maybe<Scalars['String']>;
  publication_Years?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeMyGeneInfo_GeneArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['Int']>;
  ends?: Maybe<Array<Maybe<Scalars['Int']>>>;
  entrezId?: Maybe<Scalars['String']>;
  entrezIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_MyGeneInfo_GeneFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MyGeneInfo_GeneOrdering>>>;
  start?: Maybe<Scalars['Int']>;
  starts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  strand?: Maybe<Strand>;
  strands?: Maybe<Array<Maybe<Strand>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type QueryTypeNamedEntityArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_NamedEntityFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NamedEntityOrdering>>>;
};


export type QueryTypeOmniGeneArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_OmniGeneFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OmniGeneOrdering>>>;
  panelName?: Maybe<Scalars['String']>;
  panelNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeReferenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReferenceOrdering>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeStatementWithEvidenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_StatementWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StatementWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeUniprot_EntryArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  accessionNumber?: Maybe<Scalars['String']>;
  accessionNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_Uniprot_EntryFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_Uniprot_EntryOrdering>>>;
  uniprot_id?: Maybe<Scalars['String']>;
  uniprot_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeUserArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_UserFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isAdmin?: Maybe<Scalars['Boolean']>;
  isAdmins?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UserOrdering>>>;
  password?: Maybe<Scalars['String']>;
  passwords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Reference = {
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  statements_referenced: Array<StatementWithEvidence>;
};


export type ReferenceStatements_ReferencedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_StatementWithEvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_StatementWithEvidenceOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StatementWithEvidence = {
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  references: Array<Maybe<Reference>>;
  statement: Scalars['String'];
};


export type StatementWithEvidenceReferencesArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ReferenceOrdering>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum Strand {
  Forward = 'FORWARD',
  Reverse = 'REVERSE'
}

export type Uniprot_Entry = NamedEntity & {
   __typename?: 'Uniprot_Entry';
  _id?: Maybe<Scalars['Long']>;
  accessionNumber: Scalars['String'];
  function: EditableStatement;
  gene: MyGeneInfo_Gene;
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprot_id: Scalars['String'];
};


export type Uniprot_EntryFunctionArgs = {
  deleted?: Maybe<Scalars['Boolean']>;
  deleteds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  edit_date?: Maybe<Scalars['String']>;
  edit_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type Uniprot_EntryGeneArgs = {
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['Int']>;
  ends?: Maybe<Array<Maybe<Scalars['Int']>>>;
  entrezId?: Maybe<Scalars['String']>;
  entrezIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_MyGeneInfo_GeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_MyGeneInfo_GeneOrdering>>>;
  start?: Maybe<Scalars['Int']>;
  starts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  strand?: Maybe<Strand>;
  strands?: Maybe<Array<Maybe<Strand>>>;
  synonyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  synonymss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export type User = NamedEntity & {
   __typename?: 'User';
  _id?: Maybe<Scalars['Long']>;
  edited_Statements: Array<Maybe<EditableStatement>>;
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type UserEdited_StatementsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  deleted?: Maybe<Scalars['Boolean']>;
  deleteds?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  edit_date?: Maybe<Scalars['String']>;
  edit_dates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OmniGeneComponentsQueryVariables = {
  gene_id?: Maybe<Scalars['ID']>;
};


export type OmniGeneComponentsQuery = (
  { __typename?: 'QueryType' }
  & { OmniGene?: Maybe<Array<Maybe<(
    { __typename?: 'OmniGene' }
    & { myGeneInfoGene: (
      { __typename?: 'MyGeneInfo_Gene' }
      & Pick<MyGeneInfo_Gene, 'id'>
    ), uniprot_entry?: Maybe<(
      { __typename?: 'Uniprot_Entry' }
      & Pick<Uniprot_Entry, 'id'>
    )>, jaxGene?: Maybe<(
      { __typename?: 'JaxGene' }
      & Pick<JaxGene, 'id'>
    )> }
  )>>> }
);

export type GeneListQueryVariables = {
  str?: Maybe<Scalars['String']>;
};


export type GeneListQuery = (
  { __typename?: 'QueryType' }
  & { OmniGene?: Maybe<Array<Maybe<(
    { __typename?: 'OmniGene' }
    & Pick<OmniGene, 'id' | 'name'>
  )>>> }
);

export type EditableStatementQueryVariables = {
  field?: Maybe<Scalars['String']>;
};


export type EditableStatementQuery = (
  { __typename?: 'QueryType' }
  & { EditableStatement?: Maybe<Array<Maybe<(
    { __typename?: 'EditableStatement' }
    & Pick<EditableStatement, 'field' | 'statement' | 'edit_date'>
    & { editor: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ) }
  )>>> }
);

export type JaxGeneQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type JaxGeneQuery = (
  { __typename?: 'QueryType' }
  & { JaxGene?: Maybe<Array<Maybe<(
    { __typename?: 'JaxGene' }
    & Pick<JaxGene, 'name' | 'canonicalTranscript' | 'chromosome' | 'entrezId' | 'jaxId' | 'synonyms'>
    & { description: (
      { __typename?: 'EditableStatement' }
      & Pick<EditableStatement, 'statement' | 'field' | 'edit_date'>
      & { editor: (
        { __typename?: 'User' }
        & Pick<User, 'name'>
      ), references: Array<Maybe<{ __typename?: 'InternetReference' } | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id' | 'PMID'>
      )>> }
    ) }
  )>>> }
);

export type LiteratureReferenceQueryVariables = {
  ref_id?: Maybe<Scalars['ID']>;
};


export type LiteratureReferenceQuery = (
  { __typename?: 'QueryType' }
  & { LiteratureReference?: Maybe<Array<Maybe<(
    { __typename?: 'LiteratureReference' }
    & Pick<LiteratureReference, 'shortReference' | 'id' | 'PMID' | 'DOI' | 'title' | 'volume' | 'first_page' | 'last_page' | 'publication_Year' | 'abstract'>
    & { journal: (
      { __typename?: 'Journal' }
      & Pick<Journal, 'id' | 'name'>
    ), authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'surname' | 'first_initial'>
    )> }
  )>>> }
);

export type MyGeneInfo_GeneQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type MyGeneInfo_GeneQuery = (
  { __typename?: 'QueryType' }
  & { MyGeneInfo_Gene?: Maybe<Array<Maybe<(
    { __typename?: 'MyGeneInfo_Gene' }
    & Pick<MyGeneInfo_Gene, 'name' | 'entrezId' | 'chromosome' | 'start' | 'end' | 'strand' | 'synonyms'>
    & { description: (
      { __typename?: 'EditableStatement' }
      & Pick<EditableStatement, 'statement' | 'field'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'accessed_date' | 'web_address' | 'shortReference'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'shortReference'>
      )>> }
    ) }
  )>>> }
);

export type OmniGeneQueryVariables = {
  gene_id?: Maybe<Scalars['ID']>;
};


export type OmniGeneQuery = (
  { __typename?: 'QueryType' }
  & { OmniGene?: Maybe<Array<Maybe<(
    { __typename?: 'OmniGene' }
    & Pick<OmniGene, 'id' | 'name' | 'panelName'>
    & { geneDescription: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), oncogenicCategory: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), synonymsString: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), myGeneInfoGene: (
      { __typename?: 'MyGeneInfo_Gene' }
      & Pick<MyGeneInfo_Gene, 'id'>
    ), uniprot_entry?: Maybe<(
      { __typename?: 'Uniprot_Entry' }
      & Pick<Uniprot_Entry, 'id'>
    )>, jaxGene?: Maybe<(
      { __typename?: 'JaxGene' }
      & Pick<JaxGene, 'id'>
    )> }
  )>>> }
);

export type Es_FieldsFragment = (
  { __typename?: 'EditableStatement' }
  & Pick<EditableStatement, 'id' | 'statement' | 'field' | 'edit_date'>
  & { references: Array<Maybe<(
    { __typename?: 'InternetReference' }
    & Pick<InternetReference, 'id'>
  ) | (
    { __typename?: 'LiteratureReference' }
    & Pick<LiteratureReference, 'id'>
  )>>, editor: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  ) }
);

export type GetPubMedIdQueryVariables = {
  ref_id?: Maybe<Scalars['ID']>;
};


export type GetPubMedIdQuery = (
  { __typename?: 'QueryType' }
  & { LiteratureReference?: Maybe<Array<Maybe<(
    { __typename?: 'LiteratureReference' }
    & Pick<LiteratureReference, 'PMID'>
  )>>> }
);

export type AddSynonymStringMutationVariables = {
  gene_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
};


export type AddSynonymStringMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteOmniGeneSynonymsString' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addOmniGeneSynonymsString'>
);

export type AddOmniGeneOncogenicCategoryMutationVariables = {
  gene_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
};


export type AddOmniGeneOncogenicCategoryMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteOmniGeneOncogenicCategory' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addOmniGeneOncogenicCategory'>
);

export type AddOmniGeneGeneDescriptionMutationVariables = {
  gene_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type AddOmniGeneGeneDescriptionMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteOmniGeneGeneDescription' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addOmniGeneGeneDescription'>
);

export type UniprotQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type UniprotQuery = (
  { __typename?: 'QueryType' }
  & { Uniprot_Entry?: Maybe<Array<Maybe<(
    { __typename?: 'Uniprot_Entry' }
    & Pick<Uniprot_Entry, 'id' | 'name' | 'accessionNumber' | 'uniprot_id'>
    & { function: (
      { __typename?: 'EditableStatement' }
      & Pick<EditableStatement, 'id' | 'statement' | 'field' | 'edit_date'>
      & { editor: (
        { __typename?: 'User' }
        & Pick<User, 'name'>
      ), references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      )>> }
    ) }
  )>>> }
);

export type GetUserQueryVariables = {};


export type GetUserQuery = (
  { __typename?: 'QueryType' }
  & { User?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'isAdmin' | 'password'>
  )>>> }
);

export const Es_FieldsFragmentDoc = gql`
    fragment es_fields on EditableStatement {
  id
  statement
  field
  references {
    id
  }
  editor {
    id
    name
  }
  edit_date
}
    `;
export const OmniGeneComponentsDocument = gql`
    query OmniGeneComponents($gene_id: ID) {
  OmniGene(id: $gene_id) {
    myGeneInfoGene {
      id
    }
    uniprot_entry {
      id
    }
    jaxGene {
      id
    }
  }
}
    `;
export type OmniGeneComponentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OmniGeneComponentsQuery, OmniGeneComponentsQueryVariables>, 'query'>;

    export const OmniGeneComponentsComponent = (props: OmniGeneComponentsComponentProps) => (
      <ApolloReactComponents.Query<OmniGeneComponentsQuery, OmniGeneComponentsQueryVariables> query={OmniGeneComponentsDocument} {...props} />
    );
    
export type OmniGeneComponentsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<OmniGeneComponentsQuery, OmniGeneComponentsQueryVariables>
    } & TChildProps;
export function withOmniGeneComponents<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  OmniGeneComponentsQuery,
  OmniGeneComponentsQueryVariables,
  OmniGeneComponentsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, OmniGeneComponentsQuery, OmniGeneComponentsQueryVariables, OmniGeneComponentsProps<TChildProps, TDataName>>(OmniGeneComponentsDocument, {
      alias: 'omniGeneComponents',
      ...operationOptions
    });
};

/**
 * __useOmniGeneComponentsQuery__
 *
 * To run a query within a React component, call `useOmniGeneComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOmniGeneComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOmniGeneComponentsQuery({
 *   variables: {
 *      gene_id: // value for 'gene_id'
 *   },
 * });
 */
export function useOmniGeneComponentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OmniGeneComponentsQuery, OmniGeneComponentsQueryVariables>) {
        return ApolloReactHooks.useQuery<OmniGeneComponentsQuery, OmniGeneComponentsQueryVariables>(OmniGeneComponentsDocument, baseOptions);
      }
export function useOmniGeneComponentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OmniGeneComponentsQuery, OmniGeneComponentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OmniGeneComponentsQuery, OmniGeneComponentsQueryVariables>(OmniGeneComponentsDocument, baseOptions);
        }
export type OmniGeneComponentsQueryHookResult = ReturnType<typeof useOmniGeneComponentsQuery>;
export type OmniGeneComponentsLazyQueryHookResult = ReturnType<typeof useOmniGeneComponentsLazyQuery>;
export type OmniGeneComponentsQueryResult = ApolloReactCommon.QueryResult<OmniGeneComponentsQuery, OmniGeneComponentsQueryVariables>;
export const GeneListDocument = gql`
    query GeneList($str: String) {
  OmniGene(orderBy: name_asc, filter: {OR: [{name_starts_with: $str}, {panelName_starts_with: $str}]}) {
    id
    name
  }
}
    `;
export type GeneListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GeneListQuery, GeneListQueryVariables>, 'query'>;

    export const GeneListComponent = (props: GeneListComponentProps) => (
      <ApolloReactComponents.Query<GeneListQuery, GeneListQueryVariables> query={GeneListDocument} {...props} />
    );
    
export type GeneListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GeneListQuery, GeneListQueryVariables>
    } & TChildProps;
export function withGeneList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GeneListQuery,
  GeneListQueryVariables,
  GeneListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GeneListQuery, GeneListQueryVariables, GeneListProps<TChildProps, TDataName>>(GeneListDocument, {
      alias: 'geneList',
      ...operationOptions
    });
};

/**
 * __useGeneListQuery__
 *
 * To run a query within a React component, call `useGeneListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeneListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeneListQuery({
 *   variables: {
 *      str: // value for 'str'
 *   },
 * });
 */
export function useGeneListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GeneListQuery, GeneListQueryVariables>) {
        return ApolloReactHooks.useQuery<GeneListQuery, GeneListQueryVariables>(GeneListDocument, baseOptions);
      }
export function useGeneListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GeneListQuery, GeneListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GeneListQuery, GeneListQueryVariables>(GeneListDocument, baseOptions);
        }
export type GeneListQueryHookResult = ReturnType<typeof useGeneListQuery>;
export type GeneListLazyQueryHookResult = ReturnType<typeof useGeneListLazyQuery>;
export type GeneListQueryResult = ApolloReactCommon.QueryResult<GeneListQuery, GeneListQueryVariables>;
export const EditableStatementDocument = gql`
    query EditableStatement($field: String) {
  EditableStatement(field: $field, orderBy: edit_date_desc) {
    field
    statement
    edit_date
    editor {
      name
    }
  }
}
    `;
export type EditableStatementComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EditableStatementQuery, EditableStatementQueryVariables>, 'query'>;

    export const EditableStatementComponent = (props: EditableStatementComponentProps) => (
      <ApolloReactComponents.Query<EditableStatementQuery, EditableStatementQueryVariables> query={EditableStatementDocument} {...props} />
    );
    
export type EditableStatementProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EditableStatementQuery, EditableStatementQueryVariables>
    } & TChildProps;
export function withEditableStatement<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditableStatementQuery,
  EditableStatementQueryVariables,
  EditableStatementProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EditableStatementQuery, EditableStatementQueryVariables, EditableStatementProps<TChildProps, TDataName>>(EditableStatementDocument, {
      alias: 'editableStatement',
      ...operationOptions
    });
};

/**
 * __useEditableStatementQuery__
 *
 * To run a query within a React component, call `useEditableStatementQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditableStatementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditableStatementQuery({
 *   variables: {
 *      field: // value for 'field'
 *   },
 * });
 */
export function useEditableStatementQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditableStatementQuery, EditableStatementQueryVariables>) {
        return ApolloReactHooks.useQuery<EditableStatementQuery, EditableStatementQueryVariables>(EditableStatementDocument, baseOptions);
      }
export function useEditableStatementLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditableStatementQuery, EditableStatementQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditableStatementQuery, EditableStatementQueryVariables>(EditableStatementDocument, baseOptions);
        }
export type EditableStatementQueryHookResult = ReturnType<typeof useEditableStatementQuery>;
export type EditableStatementLazyQueryHookResult = ReturnType<typeof useEditableStatementLazyQuery>;
export type EditableStatementQueryResult = ApolloReactCommon.QueryResult<EditableStatementQuery, EditableStatementQueryVariables>;
export const JaxGeneDocument = gql`
    query JaxGene($id: ID) {
  JaxGene(id: $id) {
    name
    canonicalTranscript
    chromosome
    entrezId
    jaxId
    synonyms
    description {
      statement
      field
      edit_date
      editor {
        name
      }
      references {
        ... on LiteratureReference {
          id
          PMID
        }
      }
    }
  }
}
    `;
export type JaxGeneComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<JaxGeneQuery, JaxGeneQueryVariables>, 'query'>;

    export const JaxGeneComponent = (props: JaxGeneComponentProps) => (
      <ApolloReactComponents.Query<JaxGeneQuery, JaxGeneQueryVariables> query={JaxGeneDocument} {...props} />
    );
    
export type JaxGeneProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<JaxGeneQuery, JaxGeneQueryVariables>
    } & TChildProps;
export function withJaxGene<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  JaxGeneQuery,
  JaxGeneQueryVariables,
  JaxGeneProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, JaxGeneQuery, JaxGeneQueryVariables, JaxGeneProps<TChildProps, TDataName>>(JaxGeneDocument, {
      alias: 'jaxGene',
      ...operationOptions
    });
};

/**
 * __useJaxGeneQuery__
 *
 * To run a query within a React component, call `useJaxGeneQuery` and pass it any options that fit your needs.
 * When your component renders, `useJaxGeneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJaxGeneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJaxGeneQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JaxGeneQuery, JaxGeneQueryVariables>) {
        return ApolloReactHooks.useQuery<JaxGeneQuery, JaxGeneQueryVariables>(JaxGeneDocument, baseOptions);
      }
export function useJaxGeneLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JaxGeneQuery, JaxGeneQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JaxGeneQuery, JaxGeneQueryVariables>(JaxGeneDocument, baseOptions);
        }
export type JaxGeneQueryHookResult = ReturnType<typeof useJaxGeneQuery>;
export type JaxGeneLazyQueryHookResult = ReturnType<typeof useJaxGeneLazyQuery>;
export type JaxGeneQueryResult = ApolloReactCommon.QueryResult<JaxGeneQuery, JaxGeneQueryVariables>;
export const LiteratureReferenceDocument = gql`
    query LiteratureReference($ref_id: ID) {
  LiteratureReference(id: $ref_id) {
    shortReference
    id
    PMID
    DOI
    title
    journal {
      id
      name
    }
    volume
    first_page
    last_page
    publication_Year
    abstract
    authors {
      id
      surname
      first_initial
    }
  }
}
    `;
export type LiteratureReferenceComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<LiteratureReferenceQuery, LiteratureReferenceQueryVariables>, 'query'>;

    export const LiteratureReferenceComponent = (props: LiteratureReferenceComponentProps) => (
      <ApolloReactComponents.Query<LiteratureReferenceQuery, LiteratureReferenceQueryVariables> query={LiteratureReferenceDocument} {...props} />
    );
    
export type LiteratureReferenceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<LiteratureReferenceQuery, LiteratureReferenceQueryVariables>
    } & TChildProps;
export function withLiteratureReference<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  LiteratureReferenceQuery,
  LiteratureReferenceQueryVariables,
  LiteratureReferenceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, LiteratureReferenceQuery, LiteratureReferenceQueryVariables, LiteratureReferenceProps<TChildProps, TDataName>>(LiteratureReferenceDocument, {
      alias: 'literatureReference',
      ...operationOptions
    });
};

/**
 * __useLiteratureReferenceQuery__
 *
 * To run a query within a React component, call `useLiteratureReferenceQuery` and pass it any options that fit your needs.
 * When your component renders, `useLiteratureReferenceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLiteratureReferenceQuery({
 *   variables: {
 *      ref_id: // value for 'ref_id'
 *   },
 * });
 */
export function useLiteratureReferenceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<LiteratureReferenceQuery, LiteratureReferenceQueryVariables>) {
        return ApolloReactHooks.useQuery<LiteratureReferenceQuery, LiteratureReferenceQueryVariables>(LiteratureReferenceDocument, baseOptions);
      }
export function useLiteratureReferenceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LiteratureReferenceQuery, LiteratureReferenceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<LiteratureReferenceQuery, LiteratureReferenceQueryVariables>(LiteratureReferenceDocument, baseOptions);
        }
export type LiteratureReferenceQueryHookResult = ReturnType<typeof useLiteratureReferenceQuery>;
export type LiteratureReferenceLazyQueryHookResult = ReturnType<typeof useLiteratureReferenceLazyQuery>;
export type LiteratureReferenceQueryResult = ApolloReactCommon.QueryResult<LiteratureReferenceQuery, LiteratureReferenceQueryVariables>;
export const MyGeneInfo_GeneDocument = gql`
    query MyGeneInfo_Gene($id: ID) {
  MyGeneInfo_Gene(id: $id) {
    name
    entrezId
    chromosome
    start
    end
    strand
    synonyms
    description {
      statement
      field
      references {
        shortReference
        ... on InternetReference {
          accessed_date
          web_address
        }
      }
    }
  }
}
    `;
export type MyGeneInfo_GeneComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MyGeneInfo_GeneQuery, MyGeneInfo_GeneQueryVariables>, 'query'>;

    export const MyGeneInfo_GeneComponent = (props: MyGeneInfo_GeneComponentProps) => (
      <ApolloReactComponents.Query<MyGeneInfo_GeneQuery, MyGeneInfo_GeneQueryVariables> query={MyGeneInfo_GeneDocument} {...props} />
    );
    
export type MyGeneInfo_GeneProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<MyGeneInfo_GeneQuery, MyGeneInfo_GeneQueryVariables>
    } & TChildProps;
export function withMyGeneInfo_Gene<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MyGeneInfo_GeneQuery,
  MyGeneInfo_GeneQueryVariables,
  MyGeneInfo_GeneProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, MyGeneInfo_GeneQuery, MyGeneInfo_GeneQueryVariables, MyGeneInfo_GeneProps<TChildProps, TDataName>>(MyGeneInfo_GeneDocument, {
      alias: 'myGeneInfoGene',
      ...operationOptions
    });
};

/**
 * __useMyGeneInfo_GeneQuery__
 *
 * To run a query within a React component, call `useMyGeneInfo_GeneQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyGeneInfo_GeneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyGeneInfo_GeneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMyGeneInfo_GeneQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MyGeneInfo_GeneQuery, MyGeneInfo_GeneQueryVariables>) {
        return ApolloReactHooks.useQuery<MyGeneInfo_GeneQuery, MyGeneInfo_GeneQueryVariables>(MyGeneInfo_GeneDocument, baseOptions);
      }
export function useMyGeneInfo_GeneLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MyGeneInfo_GeneQuery, MyGeneInfo_GeneQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MyGeneInfo_GeneQuery, MyGeneInfo_GeneQueryVariables>(MyGeneInfo_GeneDocument, baseOptions);
        }
export type MyGeneInfo_GeneQueryHookResult = ReturnType<typeof useMyGeneInfo_GeneQuery>;
export type MyGeneInfo_GeneLazyQueryHookResult = ReturnType<typeof useMyGeneInfo_GeneLazyQuery>;
export type MyGeneInfo_GeneQueryResult = ApolloReactCommon.QueryResult<MyGeneInfo_GeneQuery, MyGeneInfo_GeneQueryVariables>;
export const OmniGeneDocument = gql`
    query OmniGene($gene_id: ID) {
  OmniGene(id: $gene_id) {
    id
    name
    panelName
    geneDescription {
      ...es_fields
    }
    oncogenicCategory {
      ...es_fields
    }
    synonymsString {
      ...es_fields
    }
    myGeneInfoGene {
      id
    }
    uniprot_entry {
      id
    }
    jaxGene {
      id
    }
  }
}
    ${Es_FieldsFragmentDoc}`;
export type OmniGeneComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<OmniGeneQuery, OmniGeneQueryVariables>, 'query'>;

    export const OmniGeneComponent = (props: OmniGeneComponentProps) => (
      <ApolloReactComponents.Query<OmniGeneQuery, OmniGeneQueryVariables> query={OmniGeneDocument} {...props} />
    );
    
export type OmniGeneProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<OmniGeneQuery, OmniGeneQueryVariables>
    } & TChildProps;
export function withOmniGene<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  OmniGeneQuery,
  OmniGeneQueryVariables,
  OmniGeneProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, OmniGeneQuery, OmniGeneQueryVariables, OmniGeneProps<TChildProps, TDataName>>(OmniGeneDocument, {
      alias: 'omniGene',
      ...operationOptions
    });
};

/**
 * __useOmniGeneQuery__
 *
 * To run a query within a React component, call `useOmniGeneQuery` and pass it any options that fit your needs.
 * When your component renders, `useOmniGeneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOmniGeneQuery({
 *   variables: {
 *      gene_id: // value for 'gene_id'
 *   },
 * });
 */
export function useOmniGeneQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<OmniGeneQuery, OmniGeneQueryVariables>) {
        return ApolloReactHooks.useQuery<OmniGeneQuery, OmniGeneQueryVariables>(OmniGeneDocument, baseOptions);
      }
export function useOmniGeneLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<OmniGeneQuery, OmniGeneQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<OmniGeneQuery, OmniGeneQueryVariables>(OmniGeneDocument, baseOptions);
        }
export type OmniGeneQueryHookResult = ReturnType<typeof useOmniGeneQuery>;
export type OmniGeneLazyQueryHookResult = ReturnType<typeof useOmniGeneLazyQuery>;
export type OmniGeneQueryResult = ApolloReactCommon.QueryResult<OmniGeneQuery, OmniGeneQueryVariables>;
export const GetPubMedIdDocument = gql`
    query GetPubMedID($ref_id: ID) {
  LiteratureReference(id: $ref_id) {
    PMID
  }
}
    `;
export type GetPubMedIdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPubMedIdQuery, GetPubMedIdQueryVariables>, 'query'>;

    export const GetPubMedIdComponent = (props: GetPubMedIdComponentProps) => (
      <ApolloReactComponents.Query<GetPubMedIdQuery, GetPubMedIdQueryVariables> query={GetPubMedIdDocument} {...props} />
    );
    
export type GetPubMedIdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GetPubMedIdQuery, GetPubMedIdQueryVariables>
    } & TChildProps;
export function withGetPubMedId<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GetPubMedIdQuery,
  GetPubMedIdQueryVariables,
  GetPubMedIdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GetPubMedIdQuery, GetPubMedIdQueryVariables, GetPubMedIdProps<TChildProps, TDataName>>(GetPubMedIdDocument, {
      alias: 'getPubMedId',
      ...operationOptions
    });
};

/**
 * __useGetPubMedIdQuery__
 *
 * To run a query within a React component, call `useGetPubMedIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPubMedIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPubMedIdQuery({
 *   variables: {
 *      ref_id: // value for 'ref_id'
 *   },
 * });
 */
export function useGetPubMedIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPubMedIdQuery, GetPubMedIdQueryVariables>) {
        return ApolloReactHooks.useQuery<GetPubMedIdQuery, GetPubMedIdQueryVariables>(GetPubMedIdDocument, baseOptions);
      }
export function useGetPubMedIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPubMedIdQuery, GetPubMedIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetPubMedIdQuery, GetPubMedIdQueryVariables>(GetPubMedIdDocument, baseOptions);
        }
export type GetPubMedIdQueryHookResult = ReturnType<typeof useGetPubMedIdQuery>;
export type GetPubMedIdLazyQueryHookResult = ReturnType<typeof useGetPubMedIdLazyQuery>;
export type GetPubMedIdQueryResult = ApolloReactCommon.QueryResult<GetPubMedIdQuery, GetPubMedIdQueryVariables>;
export const AddSynonymStringDocument = gql`
    mutation addSynonymString($gene_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!) {
  deleteOmniGeneSynonymsString(id: $gene_id, synonymsString: [$old_es_id])
  createEditableStatement(deleted: false, edit_date: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: [])
  addOmniGeneSynonymsString(id: $gene_id, synonymsString: [$es_id])
}
    `;
export type AddSynonymStringMutationFn = ApolloReactCommon.MutationFunction<AddSynonymStringMutation, AddSynonymStringMutationVariables>;
export type AddSynonymStringComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddSynonymStringMutation, AddSynonymStringMutationVariables>, 'mutation'>;

    export const AddSynonymStringComponent = (props: AddSynonymStringComponentProps) => (
      <ApolloReactComponents.Mutation<AddSynonymStringMutation, AddSynonymStringMutationVariables> mutation={AddSynonymStringDocument} {...props} />
    );
    
export type AddSynonymStringProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddSynonymStringMutation, AddSynonymStringMutationVariables>
    } & TChildProps;
export function withAddSynonymString<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddSynonymStringMutation,
  AddSynonymStringMutationVariables,
  AddSynonymStringProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddSynonymStringMutation, AddSynonymStringMutationVariables, AddSynonymStringProps<TChildProps, TDataName>>(AddSynonymStringDocument, {
      alias: 'addSynonymString',
      ...operationOptions
    });
};

/**
 * __useAddSynonymStringMutation__
 *
 * To run a mutation, you first call `useAddSynonymStringMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSynonymStringMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSynonymStringMutation, { data, loading, error }] = useAddSynonymStringMutation({
 *   variables: {
 *      gene_id: // value for 'gene_id'
 *      old_es_id: // value for 'old_es_id'
 *      date: // value for 'date'
 *      es_field: // value for 'es_field'
 *      es_statement: // value for 'es_statement'
 *      es_id: // value for 'es_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAddSynonymStringMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddSynonymStringMutation, AddSynonymStringMutationVariables>) {
        return ApolloReactHooks.useMutation<AddSynonymStringMutation, AddSynonymStringMutationVariables>(AddSynonymStringDocument, baseOptions);
      }
export type AddSynonymStringMutationHookResult = ReturnType<typeof useAddSynonymStringMutation>;
export type AddSynonymStringMutationResult = ApolloReactCommon.MutationResult<AddSynonymStringMutation>;
export type AddSynonymStringMutationOptions = ApolloReactCommon.BaseMutationOptions<AddSynonymStringMutation, AddSynonymStringMutationVariables>;
export const AddOmniGeneOncogenicCategoryDocument = gql`
    mutation addOmniGeneOncogenicCategory($gene_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!) {
  deleteOmniGeneOncogenicCategory(id: $gene_id, oncogenicCategory: [$old_es_id])
  createEditableStatement(deleted: false, edit_date: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: [])
  addOmniGeneOncogenicCategory(id: $gene_id, oncogenicCategory: [$es_id])
}
    `;
export type AddOmniGeneOncogenicCategoryMutationFn = ApolloReactCommon.MutationFunction<AddOmniGeneOncogenicCategoryMutation, AddOmniGeneOncogenicCategoryMutationVariables>;
export type AddOmniGeneOncogenicCategoryComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddOmniGeneOncogenicCategoryMutation, AddOmniGeneOncogenicCategoryMutationVariables>, 'mutation'>;

    export const AddOmniGeneOncogenicCategoryComponent = (props: AddOmniGeneOncogenicCategoryComponentProps) => (
      <ApolloReactComponents.Mutation<AddOmniGeneOncogenicCategoryMutation, AddOmniGeneOncogenicCategoryMutationVariables> mutation={AddOmniGeneOncogenicCategoryDocument} {...props} />
    );
    
export type AddOmniGeneOncogenicCategoryProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddOmniGeneOncogenicCategoryMutation, AddOmniGeneOncogenicCategoryMutationVariables>
    } & TChildProps;
export function withAddOmniGeneOncogenicCategory<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddOmniGeneOncogenicCategoryMutation,
  AddOmniGeneOncogenicCategoryMutationVariables,
  AddOmniGeneOncogenicCategoryProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddOmniGeneOncogenicCategoryMutation, AddOmniGeneOncogenicCategoryMutationVariables, AddOmniGeneOncogenicCategoryProps<TChildProps, TDataName>>(AddOmniGeneOncogenicCategoryDocument, {
      alias: 'addOmniGeneOncogenicCategory',
      ...operationOptions
    });
};

/**
 * __useAddOmniGeneOncogenicCategoryMutation__
 *
 * To run a mutation, you first call `useAddOmniGeneOncogenicCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOmniGeneOncogenicCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOmniGeneOncogenicCategoryMutation, { data, loading, error }] = useAddOmniGeneOncogenicCategoryMutation({
 *   variables: {
 *      gene_id: // value for 'gene_id'
 *      old_es_id: // value for 'old_es_id'
 *      date: // value for 'date'
 *      es_field: // value for 'es_field'
 *      es_statement: // value for 'es_statement'
 *      es_id: // value for 'es_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAddOmniGeneOncogenicCategoryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddOmniGeneOncogenicCategoryMutation, AddOmniGeneOncogenicCategoryMutationVariables>) {
        return ApolloReactHooks.useMutation<AddOmniGeneOncogenicCategoryMutation, AddOmniGeneOncogenicCategoryMutationVariables>(AddOmniGeneOncogenicCategoryDocument, baseOptions);
      }
export type AddOmniGeneOncogenicCategoryMutationHookResult = ReturnType<typeof useAddOmniGeneOncogenicCategoryMutation>;
export type AddOmniGeneOncogenicCategoryMutationResult = ApolloReactCommon.MutationResult<AddOmniGeneOncogenicCategoryMutation>;
export type AddOmniGeneOncogenicCategoryMutationOptions = ApolloReactCommon.BaseMutationOptions<AddOmniGeneOncogenicCategoryMutation, AddOmniGeneOncogenicCategoryMutationVariables>;
export const AddOmniGeneGeneDescriptionDocument = gql`
    mutation addOmniGeneGeneDescription($gene_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteOmniGeneGeneDescription(id: $gene_id, geneDescription: [$old_es_id])
  createEditableStatement(deleted: false, edit_date: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addOmniGeneGeneDescription(id: $gene_id, geneDescription: [$es_id])
}
    `;
export type AddOmniGeneGeneDescriptionMutationFn = ApolloReactCommon.MutationFunction<AddOmniGeneGeneDescriptionMutation, AddOmniGeneGeneDescriptionMutationVariables>;
export type AddOmniGeneGeneDescriptionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddOmniGeneGeneDescriptionMutation, AddOmniGeneGeneDescriptionMutationVariables>, 'mutation'>;

    export const AddOmniGeneGeneDescriptionComponent = (props: AddOmniGeneGeneDescriptionComponentProps) => (
      <ApolloReactComponents.Mutation<AddOmniGeneGeneDescriptionMutation, AddOmniGeneGeneDescriptionMutationVariables> mutation={AddOmniGeneGeneDescriptionDocument} {...props} />
    );
    
export type AddOmniGeneGeneDescriptionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddOmniGeneGeneDescriptionMutation, AddOmniGeneGeneDescriptionMutationVariables>
    } & TChildProps;
export function withAddOmniGeneGeneDescription<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddOmniGeneGeneDescriptionMutation,
  AddOmniGeneGeneDescriptionMutationVariables,
  AddOmniGeneGeneDescriptionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddOmniGeneGeneDescriptionMutation, AddOmniGeneGeneDescriptionMutationVariables, AddOmniGeneGeneDescriptionProps<TChildProps, TDataName>>(AddOmniGeneGeneDescriptionDocument, {
      alias: 'addOmniGeneGeneDescription',
      ...operationOptions
    });
};

/**
 * __useAddOmniGeneGeneDescriptionMutation__
 *
 * To run a mutation, you first call `useAddOmniGeneGeneDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddOmniGeneGeneDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addOmniGeneGeneDescriptionMutation, { data, loading, error }] = useAddOmniGeneGeneDescriptionMutation({
 *   variables: {
 *      gene_id: // value for 'gene_id'
 *      old_es_id: // value for 'old_es_id'
 *      date: // value for 'date'
 *      es_field: // value for 'es_field'
 *      es_statement: // value for 'es_statement'
 *      es_id: // value for 'es_id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useAddOmniGeneGeneDescriptionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddOmniGeneGeneDescriptionMutation, AddOmniGeneGeneDescriptionMutationVariables>) {
        return ApolloReactHooks.useMutation<AddOmniGeneGeneDescriptionMutation, AddOmniGeneGeneDescriptionMutationVariables>(AddOmniGeneGeneDescriptionDocument, baseOptions);
      }
export type AddOmniGeneGeneDescriptionMutationHookResult = ReturnType<typeof useAddOmniGeneGeneDescriptionMutation>;
export type AddOmniGeneGeneDescriptionMutationResult = ApolloReactCommon.MutationResult<AddOmniGeneGeneDescriptionMutation>;
export type AddOmniGeneGeneDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<AddOmniGeneGeneDescriptionMutation, AddOmniGeneGeneDescriptionMutationVariables>;
export const UniprotDocument = gql`
    query Uniprot($id: ID) {
  Uniprot_Entry(id: $id) {
    id
    name
    accessionNumber
    uniprot_id
    function {
      id
      statement
      field
      editor {
        name
      }
      edit_date
      references {
        id
      }
    }
  }
}
    `;
export type UniprotComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<UniprotQuery, UniprotQueryVariables>, 'query'>;

    export const UniprotComponent = (props: UniprotComponentProps) => (
      <ApolloReactComponents.Query<UniprotQuery, UniprotQueryVariables> query={UniprotDocument} {...props} />
    );
    
export type UniprotProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<UniprotQuery, UniprotQueryVariables>
    } & TChildProps;
export function withUniprot<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UniprotQuery,
  UniprotQueryVariables,
  UniprotProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, UniprotQuery, UniprotQueryVariables, UniprotProps<TChildProps, TDataName>>(UniprotDocument, {
      alias: 'uniprot',
      ...operationOptions
    });
};

/**
 * __useUniprotQuery__
 *
 * To run a query within a React component, call `useUniprotQuery` and pass it any options that fit your needs.
 * When your component renders, `useUniprotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUniprotQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUniprotQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UniprotQuery, UniprotQueryVariables>) {
        return ApolloReactHooks.useQuery<UniprotQuery, UniprotQueryVariables>(UniprotDocument, baseOptions);
      }
export function useUniprotLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UniprotQuery, UniprotQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UniprotQuery, UniprotQueryVariables>(UniprotDocument, baseOptions);
        }
export type UniprotQueryHookResult = ReturnType<typeof useUniprotQuery>;
export type UniprotLazyQueryHookResult = ReturnType<typeof useUniprotLazyQuery>;
export type UniprotQueryResult = ApolloReactCommon.QueryResult<UniprotQuery, UniprotQueryVariables>;
export const GetUserDocument = gql`
    query GetUser {
  User {
    id
    name
    isAdmin
    password
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