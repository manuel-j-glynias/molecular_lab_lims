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










export type _AdverseEventFilter = {
  AND?: Maybe<Array<_AdverseEventFilter>>;
  OR?: Maybe<Array<_AdverseEventFilter>>;
  grade?: Maybe<Scalars['Int']>;
  grade_gt?: Maybe<Scalars['Int']>;
  grade_gte?: Maybe<Scalars['Int']>;
  grade_in?: Maybe<Array<Scalars['Int']>>;
  grade_lt?: Maybe<Scalars['Int']>;
  grade_lte?: Maybe<Scalars['Int']>;
  grade_not?: Maybe<Scalars['Int']>;
  grade_not_in?: Maybe<Array<Scalars['Int']>>;
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

export enum _AdverseEventOrdering {
  GradeAsc = 'grade_asc',
  GradeDesc = 'grade_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _AuthorFilter = {
  AND?: Maybe<Array<_AuthorFilter>>;
  OR?: Maybe<Array<_AuthorFilter>>;
  firstInitial?: Maybe<Scalars['String']>;
  firstInitial_contains?: Maybe<Scalars['String']>;
  firstInitial_ends_with?: Maybe<Scalars['String']>;
  firstInitial_gt?: Maybe<Scalars['String']>;
  firstInitial_gte?: Maybe<Scalars['String']>;
  firstInitial_in?: Maybe<Array<Scalars['String']>>;
  firstInitial_lt?: Maybe<Scalars['String']>;
  firstInitial_lte?: Maybe<Scalars['String']>;
  firstInitial_not?: Maybe<Scalars['String']>;
  firstInitial_not_contains?: Maybe<Scalars['String']>;
  firstInitial_not_ends_with?: Maybe<Scalars['String']>;
  firstInitial_not_in?: Maybe<Array<Scalars['String']>>;
  firstInitial_not_starts_with?: Maybe<Scalars['String']>;
  firstInitial_starts_with?: Maybe<Scalars['String']>;
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
  FirstInitialAsc = 'firstInitial_asc',
  FirstInitialDesc = 'firstInitial_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  SurnameAsc = 'surname_asc',
  SurnameDesc = 'surname_desc'
}

export type _ClinicalTrialFilter = {
  AND?: Maybe<Array<_ClinicalTrialFilter>>;
  OR?: Maybe<Array<_ClinicalTrialFilter>>;
  acronym?: Maybe<Scalars['String']>;
  acronym_contains?: Maybe<Scalars['String']>;
  acronym_ends_with?: Maybe<Scalars['String']>;
  acronym_gt?: Maybe<Scalars['String']>;
  acronym_gte?: Maybe<Scalars['String']>;
  acronym_in?: Maybe<Array<Scalars['String']>>;
  acronym_lt?: Maybe<Scalars['String']>;
  acronym_lte?: Maybe<Scalars['String']>;
  acronym_not?: Maybe<Scalars['String']>;
  acronym_not_contains?: Maybe<Scalars['String']>;
  acronym_not_ends_with?: Maybe<Scalars['String']>;
  acronym_not_in?: Maybe<Array<Scalars['String']>>;
  acronym_not_starts_with?: Maybe<Scalars['String']>;
  acronym_starts_with?: Maybe<Scalars['String']>;
  briefTitle?: Maybe<Scalars['String']>;
  briefTitle_contains?: Maybe<Scalars['String']>;
  briefTitle_ends_with?: Maybe<Scalars['String']>;
  briefTitle_gt?: Maybe<Scalars['String']>;
  briefTitle_gte?: Maybe<Scalars['String']>;
  briefTitle_in?: Maybe<Array<Scalars['String']>>;
  briefTitle_lt?: Maybe<Scalars['String']>;
  briefTitle_lte?: Maybe<Scalars['String']>;
  briefTitle_not?: Maybe<Scalars['String']>;
  briefTitle_not_contains?: Maybe<Scalars['String']>;
  briefTitle_not_ends_with?: Maybe<Scalars['String']>;
  briefTitle_not_in?: Maybe<Array<Scalars['String']>>;
  briefTitle_not_starts_with?: Maybe<Scalars['String']>;
  briefTitle_starts_with?: Maybe<Scalars['String']>;
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
  officialTitle?: Maybe<Scalars['String']>;
  officialTitle_contains?: Maybe<Scalars['String']>;
  officialTitle_ends_with?: Maybe<Scalars['String']>;
  officialTitle_gt?: Maybe<Scalars['String']>;
  officialTitle_gte?: Maybe<Scalars['String']>;
  officialTitle_in?: Maybe<Array<Scalars['String']>>;
  officialTitle_lt?: Maybe<Scalars['String']>;
  officialTitle_lte?: Maybe<Scalars['String']>;
  officialTitle_not?: Maybe<Scalars['String']>;
  officialTitle_not_contains?: Maybe<Scalars['String']>;
  officialTitle_not_ends_with?: Maybe<Scalars['String']>;
  officialTitle_not_in?: Maybe<Array<Scalars['String']>>;
  officialTitle_not_starts_with?: Maybe<Scalars['String']>;
  officialTitle_starts_with?: Maybe<Scalars['String']>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
  resource?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
  resourceId_contains?: Maybe<Scalars['String']>;
  resourceId_ends_with?: Maybe<Scalars['String']>;
  resourceId_gt?: Maybe<Scalars['String']>;
  resourceId_gte?: Maybe<Scalars['String']>;
  resourceId_in?: Maybe<Array<Scalars['String']>>;
  resourceId_lt?: Maybe<Scalars['String']>;
  resourceId_lte?: Maybe<Scalars['String']>;
  resourceId_not?: Maybe<Scalars['String']>;
  resourceId_not_contains?: Maybe<Scalars['String']>;
  resourceId_not_ends_with?: Maybe<Scalars['String']>;
  resourceId_not_in?: Maybe<Array<Scalars['String']>>;
  resourceId_not_starts_with?: Maybe<Scalars['String']>;
  resourceId_starts_with?: Maybe<Scalars['String']>;
  resource_contains?: Maybe<Scalars['String']>;
  resource_ends_with?: Maybe<Scalars['String']>;
  resource_gt?: Maybe<Scalars['String']>;
  resource_gte?: Maybe<Scalars['String']>;
  resource_in?: Maybe<Array<Scalars['String']>>;
  resource_lt?: Maybe<Scalars['String']>;
  resource_lte?: Maybe<Scalars['String']>;
  resource_not?: Maybe<Scalars['String']>;
  resource_not_contains?: Maybe<Scalars['String']>;
  resource_not_ends_with?: Maybe<Scalars['String']>;
  resource_not_in?: Maybe<Array<Scalars['String']>>;
  resource_not_starts_with?: Maybe<Scalars['String']>;
  resource_starts_with?: Maybe<Scalars['String']>;
};

export enum _ClinicalTrialOrdering {
  AcronymAsc = 'acronym_asc',
  AcronymDesc = 'acronym_desc',
  BriefTitleAsc = 'briefTitle_asc',
  BriefTitleDesc = 'briefTitle_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  OfficialTitleAsc = 'officialTitle_asc',
  OfficialTitleDesc = 'officialTitle_desc',
  ResourceIdAsc = 'resourceId_asc',
  ResourceIdDesc = 'resourceId_desc',
  ResourceAsc = 'resource_asc',
  ResourceDesc = 'resource_desc'
}

export type _ClinVarVariantFilter = {
  AND?: Maybe<Array<_ClinVarVariantFilter>>;
  OR?: Maybe<Array<_ClinVarVariantFilter>>;
  cDot?: Maybe<Scalars['String']>;
  cDot_contains?: Maybe<Scalars['String']>;
  cDot_ends_with?: Maybe<Scalars['String']>;
  cDot_gt?: Maybe<Scalars['String']>;
  cDot_gte?: Maybe<Scalars['String']>;
  cDot_in?: Maybe<Array<Scalars['String']>>;
  cDot_lt?: Maybe<Scalars['String']>;
  cDot_lte?: Maybe<Scalars['String']>;
  cDot_not?: Maybe<Scalars['String']>;
  cDot_not_contains?: Maybe<Scalars['String']>;
  cDot_not_ends_with?: Maybe<Scalars['String']>;
  cDot_not_in?: Maybe<Array<Scalars['String']>>;
  cDot_not_starts_with?: Maybe<Scalars['String']>;
  cDot_starts_with?: Maybe<Scalars['String']>;
  gene?: Maybe<Scalars['String']>;
  gene_contains?: Maybe<Scalars['String']>;
  gene_ends_with?: Maybe<Scalars['String']>;
  gene_gt?: Maybe<Scalars['String']>;
  gene_gte?: Maybe<Scalars['String']>;
  gene_in?: Maybe<Array<Scalars['String']>>;
  gene_lt?: Maybe<Scalars['String']>;
  gene_lte?: Maybe<Scalars['String']>;
  gene_not?: Maybe<Scalars['String']>;
  gene_not_contains?: Maybe<Scalars['String']>;
  gene_not_ends_with?: Maybe<Scalars['String']>;
  gene_not_in?: Maybe<Array<Scalars['String']>>;
  gene_not_starts_with?: Maybe<Scalars['String']>;
  gene_starts_with?: Maybe<Scalars['String']>;
  genomicVariant?: Maybe<_GenomicVariantFilter>;
  genomicVariant_in?: Maybe<_GenomicVariantFilter>;
  genomicVariant_not?: Maybe<_GenomicVariantFilter>;
  genomicVariant_not_in?: Maybe<_GenomicVariantFilter>;
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
  pDot?: Maybe<Scalars['String']>;
  pDot_contains?: Maybe<Scalars['String']>;
  pDot_ends_with?: Maybe<Scalars['String']>;
  pDot_gt?: Maybe<Scalars['String']>;
  pDot_gte?: Maybe<Scalars['String']>;
  pDot_in?: Maybe<Array<Scalars['String']>>;
  pDot_lt?: Maybe<Scalars['String']>;
  pDot_lte?: Maybe<Scalars['String']>;
  pDot_not?: Maybe<Scalars['String']>;
  pDot_not_contains?: Maybe<Scalars['String']>;
  pDot_not_ends_with?: Maybe<Scalars['String']>;
  pDot_not_in?: Maybe<Array<Scalars['String']>>;
  pDot_not_starts_with?: Maybe<Scalars['String']>;
  pDot_starts_with?: Maybe<Scalars['String']>;
  signficanceExplanation?: Maybe<_EditableStatementFilter>;
  signficanceExplanation_in?: Maybe<_EditableStatementFilter>;
  signficanceExplanation_not?: Maybe<_EditableStatementFilter>;
  signficanceExplanation_not_in?: Maybe<_EditableStatementFilter>;
  significance?: Maybe<_EditableStatementFilter>;
  significance_in?: Maybe<_EditableStatementFilter>;
  significance_not?: Maybe<_EditableStatementFilter>;
  significance_not_in?: Maybe<_EditableStatementFilter>;
  variantId?: Maybe<Scalars['String']>;
  variantId_contains?: Maybe<Scalars['String']>;
  variantId_ends_with?: Maybe<Scalars['String']>;
  variantId_gt?: Maybe<Scalars['String']>;
  variantId_gte?: Maybe<Scalars['String']>;
  variantId_in?: Maybe<Array<Scalars['String']>>;
  variantId_lt?: Maybe<Scalars['String']>;
  variantId_lte?: Maybe<Scalars['String']>;
  variantId_not?: Maybe<Scalars['String']>;
  variantId_not_contains?: Maybe<Scalars['String']>;
  variantId_not_ends_with?: Maybe<Scalars['String']>;
  variantId_not_in?: Maybe<Array<Scalars['String']>>;
  variantId_not_starts_with?: Maybe<Scalars['String']>;
  variantId_starts_with?: Maybe<Scalars['String']>;
};

export enum _ClinVarVariantOrdering {
  CDotAsc = 'cDot_asc',
  CDotDesc = 'cDot_desc',
  GeneAsc = 'gene_asc',
  GeneDesc = 'gene_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  PDotAsc = 'pDot_asc',
  PDotDesc = 'pDot_desc',
  VariantIdAsc = 'variantId_asc',
  VariantIdDesc = 'variantId_desc'
}

export type _DnaMarkerFilter = {
  AND?: Maybe<Array<_DnaMarkerFilter>>;
  OR?: Maybe<Array<_DnaMarkerFilter>>;
  definition?: Maybe<_EditableStatementFilter>;
  definition_in?: Maybe<_EditableStatementFilter>;
  definition_not?: Maybe<_EditableStatementFilter>;
  definition_not_in?: Maybe<_EditableStatementFilter>;
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
  markerType?: Maybe<DnaMarkerType>;
  markerType_in?: Maybe<Array<DnaMarkerType>>;
  markerType_not?: Maybe<DnaMarkerType>;
  markerType_not_in?: Maybe<Array<DnaMarkerType>>;
  method?: Maybe<_EditableStatementFilter>;
  method_in?: Maybe<_EditableStatementFilter>;
  method_not?: Maybe<_EditableStatementFilter>;
  method_not_in?: Maybe<_EditableStatementFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  resultString?: Maybe<_EditableStatementFilter>;
  resultString_in?: Maybe<_EditableStatementFilter>;
  resultString_not?: Maybe<_EditableStatementFilter>;
  resultString_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _DnaMarkerOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  MarkerTypeAsc = 'markerType_asc',
  MarkerTypeDesc = 'markerType_desc'
}

export type _DoDiseaseFilter = {
  AND?: Maybe<Array<_DoDiseaseFilter>>;
  OR?: Maybe<Array<_DoDiseaseFilter>>;
  children?: Maybe<_DoDiseaseFilter>;
  children_every?: Maybe<_DoDiseaseFilter>;
  children_in?: Maybe<_DoDiseaseFilter>;
  children_none?: Maybe<_DoDiseaseFilter>;
  children_not?: Maybe<_DoDiseaseFilter>;
  children_not_in?: Maybe<_DoDiseaseFilter>;
  children_single?: Maybe<_DoDiseaseFilter>;
  children_some?: Maybe<_DoDiseaseFilter>;
  definition?: Maybe<_EditableStatementFilter>;
  definition_in?: Maybe<_EditableStatementFilter>;
  definition_not?: Maybe<_EditableStatementFilter>;
  definition_not_in?: Maybe<_EditableStatementFilter>;
  doId?: Maybe<Scalars['String']>;
  doId_contains?: Maybe<Scalars['String']>;
  doId_ends_with?: Maybe<Scalars['String']>;
  doId_gt?: Maybe<Scalars['String']>;
  doId_gte?: Maybe<Scalars['String']>;
  doId_in?: Maybe<Array<Scalars['String']>>;
  doId_lt?: Maybe<Scalars['String']>;
  doId_lte?: Maybe<Scalars['String']>;
  doId_not?: Maybe<Scalars['String']>;
  doId_not_contains?: Maybe<Scalars['String']>;
  doId_not_ends_with?: Maybe<Scalars['String']>;
  doId_not_in?: Maybe<Array<Scalars['String']>>;
  doId_not_starts_with?: Maybe<Scalars['String']>;
  doId_starts_with?: Maybe<Scalars['String']>;
  exactSynonyms?: Maybe<_EditableStringListFilter>;
  exactSynonyms_in?: Maybe<_EditableStringListFilter>;
  exactSynonyms_not?: Maybe<_EditableStringListFilter>;
  exactSynonyms_not_in?: Maybe<_EditableStringListFilter>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  parents?: Maybe<_DoDiseaseFilter>;
  parents_every?: Maybe<_DoDiseaseFilter>;
  parents_in?: Maybe<_DoDiseaseFilter>;
  parents_none?: Maybe<_DoDiseaseFilter>;
  parents_not?: Maybe<_DoDiseaseFilter>;
  parents_not_in?: Maybe<_DoDiseaseFilter>;
  parents_single?: Maybe<_DoDiseaseFilter>;
  parents_some?: Maybe<_DoDiseaseFilter>;
  relatedSynonyms?: Maybe<_EditableStringListFilter>;
  relatedSynonyms_in?: Maybe<_EditableStringListFilter>;
  relatedSynonyms_not?: Maybe<_EditableStringListFilter>;
  relatedSynonyms_not_in?: Maybe<_EditableStringListFilter>;
  subsets?: Maybe<_EditableStringListFilter>;
  subsets_in?: Maybe<_EditableStringListFilter>;
  subsets_not?: Maybe<_EditableStringListFilter>;
  subsets_not_in?: Maybe<_EditableStringListFilter>;
  xrefs?: Maybe<_EditableXRefListFilter>;
  xrefs_in?: Maybe<_EditableXRefListFilter>;
  xrefs_not?: Maybe<_EditableXRefListFilter>;
  xrefs_not_in?: Maybe<_EditableXRefListFilter>;
};

export enum _DoDiseaseOrdering {
  DoIdAsc = 'doId_asc',
  DoIdDesc = 'doId_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _DrugCategoryFilter = {
  AND?: Maybe<Array<_DrugCategoryFilter>>;
  OR?: Maybe<Array<_DrugCategoryFilter>>;
  definition?: Maybe<_EditableStatementFilter>;
  definition_in?: Maybe<_EditableStatementFilter>;
  definition_not?: Maybe<_EditableStatementFilter>;
  definition_not_in?: Maybe<_EditableStatementFilter>;
  drugs?: Maybe<_OmniDrugFilter>;
  drugs_every?: Maybe<_OmniDrugFilter>;
  drugs_in?: Maybe<_OmniDrugFilter>;
  drugs_none?: Maybe<_OmniDrugFilter>;
  drugs_not?: Maybe<_OmniDrugFilter>;
  drugs_not_in?: Maybe<_OmniDrugFilter>;
  drugs_single?: Maybe<_OmniDrugFilter>;
  drugs_some?: Maybe<_OmniDrugFilter>;
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
  jaxDrugClass?: Maybe<_JaxDrugClassFilter>;
  jaxDrugClass_every?: Maybe<_JaxDrugClassFilter>;
  jaxDrugClass_in?: Maybe<_JaxDrugClassFilter>;
  jaxDrugClass_none?: Maybe<_JaxDrugClassFilter>;
  jaxDrugClass_not?: Maybe<_JaxDrugClassFilter>;
  jaxDrugClass_not_in?: Maybe<_JaxDrugClassFilter>;
  jaxDrugClass_single?: Maybe<_JaxDrugClassFilter>;
  jaxDrugClass_some?: Maybe<_JaxDrugClassFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _DrugCategoryOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableAssayComparatorFilter = {
  AND?: Maybe<Array<_EditableAssayComparatorFilter>>;
  OR?: Maybe<Array<_EditableAssayComparatorFilter>>;
  comparator?: Maybe<AssayComparator>;
  comparator_in?: Maybe<Array<AssayComparator>>;
  comparator_not?: Maybe<AssayComparator>;
  comparator_not_in?: Maybe<Array<AssayComparator>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
};

export enum _EditableAssayComparatorOrdering {
  ComparatorAsc = 'comparator_asc',
  ComparatorDesc = 'comparator_desc',
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableBooleanFilter = {
  AND?: Maybe<Array<_EditableBooleanFilter>>;
  OR?: Maybe<Array<_EditableBooleanFilter>>;
  booleanValue?: Maybe<ExtendedBoolean>;
  booleanValue_in?: Maybe<Array<ExtendedBoolean>>;
  booleanValue_not?: Maybe<ExtendedBoolean>;
  booleanValue_not_in?: Maybe<Array<ExtendedBoolean>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
};

export enum _EditableBooleanOrdering {
  BooleanValueAsc = 'booleanValue_asc',
  BooleanValueDesc = 'booleanValue_desc',
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableCopyChangeFilter = {
  AND?: Maybe<Array<_EditableCopyChangeFilter>>;
  OR?: Maybe<Array<_EditableCopyChangeFilter>>;
  cnvType?: Maybe<CnvType>;
  cnvType_in?: Maybe<Array<CnvType>>;
  cnvType_not?: Maybe<CnvType>;
  cnvType_not_in?: Maybe<Array<CnvType>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
};

export enum _EditableCopyChangeOrdering {
  CnvTypeAsc = 'cnvType_asc',
  CnvTypeDesc = 'cnvType_desc',
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableDoDiseaseListFilter = {
  AND?: Maybe<Array<_EditableDoDiseaseListFilter>>;
  OR?: Maybe<Array<_EditableDoDiseaseListFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  list?: Maybe<_DoDiseaseFilter>;
  list_every?: Maybe<_DoDiseaseFilter>;
  list_in?: Maybe<_DoDiseaseFilter>;
  list_none?: Maybe<_DoDiseaseFilter>;
  list_not?: Maybe<_DoDiseaseFilter>;
  list_not_in?: Maybe<_DoDiseaseFilter>;
  list_single?: Maybe<_DoDiseaseFilter>;
  list_some?: Maybe<_DoDiseaseFilter>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
};

export enum _EditableDoDiseaseListOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableFloatFilter = {
  AND?: Maybe<Array<_EditableFloatFilter>>;
  OR?: Maybe<Array<_EditableFloatFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  floatValue?: Maybe<Scalars['Float']>;
  floatValue_gt?: Maybe<Scalars['Float']>;
  floatValue_gte?: Maybe<Scalars['Float']>;
  floatValue_in?: Maybe<Array<Scalars['Float']>>;
  floatValue_lt?: Maybe<Scalars['Float']>;
  floatValue_lte?: Maybe<Scalars['Float']>;
  floatValue_not?: Maybe<Scalars['Float']>;
  floatValue_not_in?: Maybe<Array<Scalars['Float']>>;
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
};

export enum _EditableFloatOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  FloatValueAsc = 'floatValue_asc',
  FloatValueDesc = 'floatValue_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableGoDiseaseListFilter = {
  AND?: Maybe<Array<_EditableGoDiseaseListFilter>>;
  OR?: Maybe<Array<_EditableGoDiseaseListFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  list?: Maybe<_GoDiseaseFilter>;
  list_every?: Maybe<_GoDiseaseFilter>;
  list_in?: Maybe<_GoDiseaseFilter>;
  list_none?: Maybe<_GoDiseaseFilter>;
  list_not?: Maybe<_GoDiseaseFilter>;
  list_not_in?: Maybe<_GoDiseaseFilter>;
  list_single?: Maybe<_GoDiseaseFilter>;
  list_some?: Maybe<_GoDiseaseFilter>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
};

export enum _EditableGoDiseaseListOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableImmuneCycleRoleFilter = {
  AND?: Maybe<Array<_EditableImmuneCycleRoleFilter>>;
  OR?: Maybe<Array<_EditableImmuneCycleRoleFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  immuneCycleRole?: Maybe<ImmuneCycleRole>;
  immuneCycleRole_in?: Maybe<Array<ImmuneCycleRole>>;
  immuneCycleRole_not?: Maybe<ImmuneCycleRole>;
  immuneCycleRole_not_in?: Maybe<Array<ImmuneCycleRole>>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
};

export enum _EditableImmuneCycleRoleOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  ImmuneCycleRoleAsc = 'immuneCycleRole_asc',
  ImmuneCycleRoleDesc = 'immuneCycleRole_desc'
}

export type _EditableImmuneFunctionFilter = {
  AND?: Maybe<Array<_EditableImmuneFunctionFilter>>;
  OR?: Maybe<Array<_EditableImmuneFunctionFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  immuneFunction?: Maybe<ImmuneFunction>;
  immuneFunction_in?: Maybe<Array<ImmuneFunction>>;
  immuneFunction_not?: Maybe<ImmuneFunction>;
  immuneFunction_not_in?: Maybe<Array<ImmuneFunction>>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
};

export enum _EditableImmuneFunctionOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  ImmuneFunctionAsc = 'immuneFunction_asc',
  ImmuneFunctionDesc = 'immuneFunction_desc'
}

export type _EditableImmunePhenotypeFilter = {
  AND?: Maybe<Array<_EditableImmunePhenotypeFilter>>;
  OR?: Maybe<Array<_EditableImmunePhenotypeFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  immunePhenotype?: Maybe<ImmunePhenotype>;
  immunePhenotype_in?: Maybe<Array<ImmunePhenotype>>;
  immunePhenotype_not?: Maybe<ImmunePhenotype>;
  immunePhenotype_not_in?: Maybe<Array<ImmunePhenotype>>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
};

export enum _EditableImmunePhenotypeOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  ImmunePhenotypeAsc = 'immunePhenotype_asc',
  ImmunePhenotypeDesc = 'immunePhenotype_desc'
}

export type _EditableIntFilter = {
  AND?: Maybe<Array<_EditableIntFilter>>;
  OR?: Maybe<Array<_EditableIntFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  intValue?: Maybe<Scalars['Int']>;
  intValue_gt?: Maybe<Scalars['Int']>;
  intValue_gte?: Maybe<Scalars['Int']>;
  intValue_in?: Maybe<Array<Scalars['Int']>>;
  intValue_lt?: Maybe<Scalars['Int']>;
  intValue_lte?: Maybe<Scalars['Int']>;
  intValue_not?: Maybe<Scalars['Int']>;
  intValue_not_in?: Maybe<Array<Scalars['Int']>>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
};

export enum _EditableIntOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  IntValueAsc = 'intValue_asc',
  IntValueDesc = 'intValue_desc'
}

export type _EditableJaxDiseaseListFilter = {
  AND?: Maybe<Array<_EditableJaxDiseaseListFilter>>;
  OR?: Maybe<Array<_EditableJaxDiseaseListFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  list?: Maybe<_JaxDiseaseFilter>;
  list_every?: Maybe<_JaxDiseaseFilter>;
  list_in?: Maybe<_JaxDiseaseFilter>;
  list_none?: Maybe<_JaxDiseaseFilter>;
  list_not?: Maybe<_JaxDiseaseFilter>;
  list_not_in?: Maybe<_JaxDiseaseFilter>;
  list_single?: Maybe<_JaxDiseaseFilter>;
  list_some?: Maybe<_JaxDiseaseFilter>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
};

export enum _EditableJaxDiseaseListOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableObjectFilter = {
  AND?: Maybe<Array<_EditableObjectFilter>>;
  OR?: Maybe<Array<_EditableObjectFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
};

export enum _EditableObjectOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableOmniGeneReferenceFilter = {
  AND?: Maybe<Array<_EditableOmniGeneReferenceFilter>>;
  OR?: Maybe<Array<_EditableOmniGeneReferenceFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  gene?: Maybe<_OmniGeneFilter>;
  gene_in?: Maybe<_OmniGeneFilter>;
  gene_not?: Maybe<_OmniGeneFilter>;
  gene_not_in?: Maybe<_OmniGeneFilter>;
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
};

export enum _EditableOmniGeneReferenceOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableOncoTreeDiseaseListFilter = {
  AND?: Maybe<Array<_EditableOncoTreeDiseaseListFilter>>;
  OR?: Maybe<Array<_EditableOncoTreeDiseaseListFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  list?: Maybe<_OncoTreeDiseaseFilter>;
  list_every?: Maybe<_OncoTreeDiseaseFilter>;
  list_in?: Maybe<_OncoTreeDiseaseFilter>;
  list_none?: Maybe<_OncoTreeDiseaseFilter>;
  list_not?: Maybe<_OncoTreeDiseaseFilter>;
  list_not_in?: Maybe<_OncoTreeDiseaseFilter>;
  list_single?: Maybe<_OncoTreeDiseaseFilter>;
  list_some?: Maybe<_OncoTreeDiseaseFilter>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
};

export enum _EditableOncoTreeDiseaseListOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EditableProteinEffectFilter = {
  AND?: Maybe<Array<_EditableProteinEffectFilter>>;
  OR?: Maybe<Array<_EditableProteinEffectFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  proteinEffect?: Maybe<VariantProteinEffect>;
  proteinEffect_in?: Maybe<Array<VariantProteinEffect>>;
  proteinEffect_not?: Maybe<VariantProteinEffect>;
  proteinEffect_not_in?: Maybe<Array<VariantProteinEffect>>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
};

export enum _EditableProteinEffectOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  ProteinEffectAsc = 'proteinEffect_asc',
  ProteinEffectDesc = 'proteinEffect_desc'
}

export type _EditableStatementFilter = {
  AND?: Maybe<Array<_EditableStatementFilter>>;
  OR?: Maybe<Array<_EditableStatementFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  StatementAsc = 'statement_asc',
  StatementDesc = 'statement_desc'
}

export type _EditableStringListFilter = {
  AND?: Maybe<Array<_EditableStringListFilter>>;
  OR?: Maybe<Array<_EditableStringListFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  stringList?: Maybe<Scalars['String']>;
  stringList_contains?: Maybe<Scalars['String']>;
  stringList_ends_with?: Maybe<Scalars['String']>;
  stringList_gt?: Maybe<Scalars['String']>;
  stringList_gte?: Maybe<Scalars['String']>;
  stringList_in?: Maybe<Array<Scalars['String']>>;
  stringList_lt?: Maybe<Scalars['String']>;
  stringList_lte?: Maybe<Scalars['String']>;
  stringList_not?: Maybe<Scalars['String']>;
  stringList_not_contains?: Maybe<Scalars['String']>;
  stringList_not_ends_with?: Maybe<Scalars['String']>;
  stringList_not_in?: Maybe<Array<Scalars['String']>>;
  stringList_not_starts_with?: Maybe<Scalars['String']>;
  stringList_starts_with?: Maybe<Scalars['String']>;
};

export enum _EditableStringListOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  StringListAsc = 'stringList_asc',
  StringListDesc = 'stringList_desc'
}

export type _EditableTmbInterpretationFilter = {
  AND?: Maybe<Array<_EditableTmbInterpretationFilter>>;
  OR?: Maybe<Array<_EditableTmbInterpretationFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  tmbInterpretation?: Maybe<TmbInterpretationType>;
  tmbInterpretation_in?: Maybe<Array<TmbInterpretationType>>;
  tmbInterpretation_not?: Maybe<TmbInterpretationType>;
  tmbInterpretation_not_in?: Maybe<Array<TmbInterpretationType>>;
};

export enum _EditableTmbInterpretationOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  TmbInterpretationAsc = 'tmbInterpretation_asc',
  TmbInterpretationDesc = 'tmbInterpretation_desc'
}

export type _EditableXRefListFilter = {
  AND?: Maybe<Array<_EditableXRefListFilter>>;
  OR?: Maybe<Array<_EditableXRefListFilter>>;
  editDate?: Maybe<Scalars['String']>;
  editDate_contains?: Maybe<Scalars['String']>;
  editDate_ends_with?: Maybe<Scalars['String']>;
  editDate_gt?: Maybe<Scalars['String']>;
  editDate_gte?: Maybe<Scalars['String']>;
  editDate_in?: Maybe<Array<Scalars['String']>>;
  editDate_lt?: Maybe<Scalars['String']>;
  editDate_lte?: Maybe<Scalars['String']>;
  editDate_not?: Maybe<Scalars['String']>;
  editDate_not_contains?: Maybe<Scalars['String']>;
  editDate_not_ends_with?: Maybe<Scalars['String']>;
  editDate_not_in?: Maybe<Array<Scalars['String']>>;
  editDate_not_starts_with?: Maybe<Scalars['String']>;
  editDate_starts_with?: Maybe<Scalars['String']>;
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
  list?: Maybe<_XRefFilter>;
  list_every?: Maybe<_XRefFilter>;
  list_in?: Maybe<_XRefFilter>;
  list_none?: Maybe<_XRefFilter>;
  list_not?: Maybe<_XRefFilter>;
  list_not_in?: Maybe<_XRefFilter>;
  list_single?: Maybe<_XRefFilter>;
  list_some?: Maybe<_XRefFilter>;
  references?: Maybe<_ReferenceFilter>;
  references_every?: Maybe<_ReferenceFilter>;
  references_in?: Maybe<_ReferenceFilter>;
  references_none?: Maybe<_ReferenceFilter>;
  references_not?: Maybe<_ReferenceFilter>;
  references_not_in?: Maybe<_ReferenceFilter>;
  references_single?: Maybe<_ReferenceFilter>;
  references_some?: Maybe<_ReferenceFilter>;
};

export enum _EditableXRefListOrdering {
  EditDateAsc = 'editDate_asc',
  EditDateDesc = 'editDate_desc',
  FieldAsc = 'field_asc',
  FieldDesc = 'field_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _EvidenceAssociationFilter = {
  AND?: Maybe<Array<_EvidenceAssociationFilter>>;
  OR?: Maybe<Array<_EvidenceAssociationFilter>>;
  disease?: Maybe<_OntologicalDiseaseFilter>;
  disease_in?: Maybe<_OntologicalDiseaseFilter>;
  disease_not?: Maybe<_OntologicalDiseaseFilter>;
  disease_not_in?: Maybe<_OntologicalDiseaseFilter>;
  evidences?: Maybe<_EvidenceFilter>;
  evidences_every?: Maybe<_EvidenceFilter>;
  evidences_in?: Maybe<_EvidenceFilter>;
  evidences_none?: Maybe<_EvidenceFilter>;
  evidences_not?: Maybe<_EvidenceFilter>;
  evidences_not_in?: Maybe<_EvidenceFilter>;
  evidences_single?: Maybe<_EvidenceFilter>;
  evidences_some?: Maybe<_EvidenceFilter>;
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
  marker?: Maybe<_MarkerProfileFilter>;
  marker_in?: Maybe<_MarkerProfileFilter>;
  marker_not?: Maybe<_MarkerProfileFilter>;
  marker_not_in?: Maybe<_MarkerProfileFilter>;
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
  therapy?: Maybe<_TherapeuticInterventionFilter>;
  therapy_in?: Maybe<_TherapeuticInterventionFilter>;
  therapy_not?: Maybe<_TherapeuticInterventionFilter>;
  therapy_not_in?: Maybe<_TherapeuticInterventionFilter>;
};

export enum _EvidenceAssociationOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _EvidenceFilter = {
  AND?: Maybe<Array<_EvidenceFilter>>;
  OR?: Maybe<Array<_EvidenceFilter>>;
  adverseEvents?: Maybe<_AdverseEventFilter>;
  adverseEvents_every?: Maybe<_AdverseEventFilter>;
  adverseEvents_in?: Maybe<_AdverseEventFilter>;
  adverseEvents_none?: Maybe<_AdverseEventFilter>;
  adverseEvents_not?: Maybe<_AdverseEventFilter>;
  adverseEvents_not_in?: Maybe<_AdverseEventFilter>;
  adverseEvents_single?: Maybe<_AdverseEventFilter>;
  adverseEvents_some?: Maybe<_AdverseEventFilter>;
  ampCapAscoTier?: Maybe<Scalars['String']>;
  ampCapAscoTier_contains?: Maybe<Scalars['String']>;
  ampCapAscoTier_ends_with?: Maybe<Scalars['String']>;
  ampCapAscoTier_gt?: Maybe<Scalars['String']>;
  ampCapAscoTier_gte?: Maybe<Scalars['String']>;
  ampCapAscoTier_in?: Maybe<Array<Scalars['String']>>;
  ampCapAscoTier_lt?: Maybe<Scalars['String']>;
  ampCapAscoTier_lte?: Maybe<Scalars['String']>;
  ampCapAscoTier_not?: Maybe<Scalars['String']>;
  ampCapAscoTier_not_contains?: Maybe<Scalars['String']>;
  ampCapAscoTier_not_ends_with?: Maybe<Scalars['String']>;
  ampCapAscoTier_not_in?: Maybe<Array<Scalars['String']>>;
  ampCapAscoTier_not_starts_with?: Maybe<Scalars['String']>;
  ampCapAscoTier_starts_with?: Maybe<Scalars['String']>;
  approvalStatus?: Maybe<Scalars['String']>;
  approvalStatus_contains?: Maybe<Scalars['String']>;
  approvalStatus_ends_with?: Maybe<Scalars['String']>;
  approvalStatus_gt?: Maybe<Scalars['String']>;
  approvalStatus_gte?: Maybe<Scalars['String']>;
  approvalStatus_in?: Maybe<Array<Scalars['String']>>;
  approvalStatus_lt?: Maybe<Scalars['String']>;
  approvalStatus_lte?: Maybe<Scalars['String']>;
  approvalStatus_not?: Maybe<Scalars['String']>;
  approvalStatus_not_contains?: Maybe<Scalars['String']>;
  approvalStatus_not_ends_with?: Maybe<Scalars['String']>;
  approvalStatus_not_in?: Maybe<Array<Scalars['String']>>;
  approvalStatus_not_starts_with?: Maybe<Scalars['String']>;
  approvalStatus_starts_with?: Maybe<Scalars['String']>;
  evidenceAssociation?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociation_every?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociation_in?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociation_none?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociation_not?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociation_not_in?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociation_single?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociation_some?: Maybe<_EvidenceAssociationFilter>;
  evidenceType?: Maybe<EvidenceType>;
  evidenceType_in?: Maybe<Array<EvidenceType>>;
  evidenceType_not?: Maybe<EvidenceType>;
  evidenceType_not_in?: Maybe<Array<EvidenceType>>;
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
  notes?: Maybe<Scalars['String']>;
  notes_contains?: Maybe<Scalars['String']>;
  notes_ends_with?: Maybe<Scalars['String']>;
  notes_gt?: Maybe<Scalars['String']>;
  notes_gte?: Maybe<Scalars['String']>;
  notes_in?: Maybe<Array<Scalars['String']>>;
  notes_lt?: Maybe<Scalars['String']>;
  notes_lte?: Maybe<Scalars['String']>;
  notes_not?: Maybe<Scalars['String']>;
  notes_not_contains?: Maybe<Scalars['String']>;
  notes_not_ends_with?: Maybe<Scalars['String']>;
  notes_not_in?: Maybe<Array<Scalars['String']>>;
  notes_not_starts_with?: Maybe<Scalars['String']>;
  notes_starts_with?: Maybe<Scalars['String']>;
  outcomes?: Maybe<_OutcomeFilter>;
  outcomes_every?: Maybe<_OutcomeFilter>;
  outcomes_in?: Maybe<_OutcomeFilter>;
  outcomes_none?: Maybe<_OutcomeFilter>;
  outcomes_not?: Maybe<_OutcomeFilter>;
  outcomes_not_in?: Maybe<_OutcomeFilter>;
  outcomes_single?: Maybe<_OutcomeFilter>;
  outcomes_some?: Maybe<_OutcomeFilter>;
  reference?: Maybe<_LiteratureReferenceFilter>;
  reference_in?: Maybe<_LiteratureReferenceFilter>;
  reference_not?: Maybe<_LiteratureReferenceFilter>;
  reference_not_in?: Maybe<_LiteratureReferenceFilter>;
  responseType?: Maybe<ResponseType>;
  responseType_in?: Maybe<Array<ResponseType>>;
  responseType_not?: Maybe<ResponseType>;
  responseType_not_in?: Maybe<Array<ResponseType>>;
};

export enum _EvidenceOrdering {
  AmpCapAscoTierAsc = 'ampCapAscoTier_asc',
  AmpCapAscoTierDesc = 'ampCapAscoTier_desc',
  ApprovalStatusAsc = 'approvalStatus_asc',
  ApprovalStatusDesc = 'approvalStatus_desc',
  EvidenceTypeAsc = 'evidenceType_asc',
  EvidenceTypeDesc = 'evidenceType_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NotesAsc = 'notes_asc',
  NotesDesc = 'notes_desc',
  ResponseTypeAsc = 'responseType_asc',
  ResponseTypeDesc = 'responseType_desc'
}

export type _GenomicVariantFilter = {
  AND?: Maybe<Array<_GenomicVariantFilter>>;
  OR?: Maybe<Array<_GenomicVariantFilter>>;
  clinVarVariant?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_in?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_not?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_not_in?: Maybe<_ClinVarVariantFilter>;
  description?: Maybe<_EditableStatementFilter>;
  description_in?: Maybe<_EditableStatementFilter>;
  description_not?: Maybe<_EditableStatementFilter>;
  description_not_in?: Maybe<_EditableStatementFilter>;
  gene?: Maybe<_OmniGeneFilter>;
  gene_in?: Maybe<_OmniGeneFilter>;
  gene_not?: Maybe<_OmniGeneFilter>;
  gene_not_in?: Maybe<_OmniGeneFilter>;
  goVariant?: Maybe<_GoVariantFilter>;
  goVariant_in?: Maybe<_GoVariantFilter>;
  goVariant_not?: Maybe<_GoVariantFilter>;
  goVariant_not_in?: Maybe<_GoVariantFilter>;
  hotSpotVariant?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_in?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_not?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_not_in?: Maybe<_HotSpotVariantFilter>;
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
  jaxVariant?: Maybe<_JaxVariantFilter>;
  jaxVariant_in?: Maybe<_JaxVariantFilter>;
  jaxVariant_not?: Maybe<_JaxVariantFilter>;
  jaxVariant_not_in?: Maybe<_JaxVariantFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_in?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_not?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_not_in?: Maybe<_EditableStatementFilter>;
};

export type _GenomicVariantMarkerFilter = {
  AND?: Maybe<Array<_GenomicVariantMarkerFilter>>;
  OR?: Maybe<Array<_GenomicVariantMarkerFilter>>;
  gene?: Maybe<_OmniGeneFilter>;
  gene_in?: Maybe<_OmniGeneFilter>;
  gene_not?: Maybe<_OmniGeneFilter>;
  gene_not_in?: Maybe<_OmniGeneFilter>;
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
  method?: Maybe<_EditableStatementFilter>;
  method_in?: Maybe<_EditableStatementFilter>;
  method_not?: Maybe<_EditableStatementFilter>;
  method_not_in?: Maybe<_EditableStatementFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  resultString?: Maybe<_EditableStatementFilter>;
  resultString_in?: Maybe<_EditableStatementFilter>;
  resultString_not?: Maybe<_EditableStatementFilter>;
  resultString_not_in?: Maybe<_EditableStatementFilter>;
  variant?: Maybe<_GenomicVariantFilter>;
  variant_in?: Maybe<_GenomicVariantFilter>;
  variant_not?: Maybe<_GenomicVariantFilter>;
  variant_not_in?: Maybe<_GenomicVariantFilter>;
};

export enum _GenomicVariantMarkerOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export enum _GenomicVariantOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _GoDiseaseFilter = {
  AND?: Maybe<Array<_GoDiseaseFilter>>;
  OR?: Maybe<Array<_GoDiseaseFilter>>;
  children?: Maybe<_GoDiseaseFilter>;
  children_every?: Maybe<_GoDiseaseFilter>;
  children_in?: Maybe<_GoDiseaseFilter>;
  children_none?: Maybe<_GoDiseaseFilter>;
  children_not?: Maybe<_GoDiseaseFilter>;
  children_not_in?: Maybe<_GoDiseaseFilter>;
  children_single?: Maybe<_GoDiseaseFilter>;
  children_some?: Maybe<_GoDiseaseFilter>;
  definition?: Maybe<_EditableStatementFilter>;
  definition_in?: Maybe<_EditableStatementFilter>;
  definition_not?: Maybe<_EditableStatementFilter>;
  definition_not_in?: Maybe<_EditableStatementFilter>;
  goId?: Maybe<Scalars['String']>;
  goId_contains?: Maybe<Scalars['String']>;
  goId_ends_with?: Maybe<Scalars['String']>;
  goId_gt?: Maybe<Scalars['String']>;
  goId_gte?: Maybe<Scalars['String']>;
  goId_in?: Maybe<Array<Scalars['String']>>;
  goId_lt?: Maybe<Scalars['String']>;
  goId_lte?: Maybe<Scalars['String']>;
  goId_not?: Maybe<Scalars['String']>;
  goId_not_contains?: Maybe<Scalars['String']>;
  goId_not_ends_with?: Maybe<Scalars['String']>;
  goId_not_in?: Maybe<Array<Scalars['String']>>;
  goId_not_starts_with?: Maybe<Scalars['String']>;
  goId_starts_with?: Maybe<Scalars['String']>;
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
  jaxDiseases?: Maybe<_JaxDiseaseFilter>;
  jaxDiseases_every?: Maybe<_JaxDiseaseFilter>;
  jaxDiseases_in?: Maybe<_JaxDiseaseFilter>;
  jaxDiseases_none?: Maybe<_JaxDiseaseFilter>;
  jaxDiseases_not?: Maybe<_JaxDiseaseFilter>;
  jaxDiseases_not_in?: Maybe<_JaxDiseaseFilter>;
  jaxDiseases_single?: Maybe<_JaxDiseaseFilter>;
  jaxDiseases_some?: Maybe<_JaxDiseaseFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  parents?: Maybe<_GoDiseaseFilter>;
  parents_every?: Maybe<_GoDiseaseFilter>;
  parents_in?: Maybe<_GoDiseaseFilter>;
  parents_none?: Maybe<_GoDiseaseFilter>;
  parents_not?: Maybe<_GoDiseaseFilter>;
  parents_not_in?: Maybe<_GoDiseaseFilter>;
  parents_single?: Maybe<_GoDiseaseFilter>;
  parents_some?: Maybe<_GoDiseaseFilter>;
  synonyms?: Maybe<_EditableStringListFilter>;
  synonyms_in?: Maybe<_EditableStringListFilter>;
  synonyms_not?: Maybe<_EditableStringListFilter>;
  synonyms_not_in?: Maybe<_EditableStringListFilter>;
  xrefs?: Maybe<_EditableXRefListFilter>;
  xrefs_in?: Maybe<_EditableXRefListFilter>;
  xrefs_not?: Maybe<_EditableXRefListFilter>;
  xrefs_not_in?: Maybe<_EditableXRefListFilter>;
};

export enum _GoDiseaseOrdering {
  GoIdAsc = 'goId_asc',
  GoIdDesc = 'goId_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _GoVariantFilter = {
  AND?: Maybe<Array<_GoVariantFilter>>;
  OR?: Maybe<Array<_GoVariantFilter>>;
  gene?: Maybe<Scalars['String']>;
  gene_contains?: Maybe<Scalars['String']>;
  gene_ends_with?: Maybe<Scalars['String']>;
  gene_gt?: Maybe<Scalars['String']>;
  gene_gte?: Maybe<Scalars['String']>;
  gene_in?: Maybe<Array<Scalars['String']>>;
  gene_lt?: Maybe<Scalars['String']>;
  gene_lte?: Maybe<Scalars['String']>;
  gene_not?: Maybe<Scalars['String']>;
  gene_not_contains?: Maybe<Scalars['String']>;
  gene_not_ends_with?: Maybe<Scalars['String']>;
  gene_not_in?: Maybe<Array<Scalars['String']>>;
  gene_not_starts_with?: Maybe<Scalars['String']>;
  gene_starts_with?: Maybe<Scalars['String']>;
  genomicVariant?: Maybe<_GenomicVariantFilter>;
  genomicVariant_in?: Maybe<_GenomicVariantFilter>;
  genomicVariant_not?: Maybe<_GenomicVariantFilter>;
  genomicVariant_not_in?: Maybe<_GenomicVariantFilter>;
  goId?: Maybe<Scalars['String']>;
  goId_contains?: Maybe<Scalars['String']>;
  goId_ends_with?: Maybe<Scalars['String']>;
  goId_gt?: Maybe<Scalars['String']>;
  goId_gte?: Maybe<Scalars['String']>;
  goId_in?: Maybe<Array<Scalars['String']>>;
  goId_lt?: Maybe<Scalars['String']>;
  goId_lte?: Maybe<Scalars['String']>;
  goId_not?: Maybe<Scalars['String']>;
  goId_not_contains?: Maybe<Scalars['String']>;
  goId_not_ends_with?: Maybe<Scalars['String']>;
  goId_not_in?: Maybe<Array<Scalars['String']>>;
  goId_not_starts_with?: Maybe<Scalars['String']>;
  goId_starts_with?: Maybe<Scalars['String']>;
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
  jaxVariant?: Maybe<_JaxVariantFilter>;
  jaxVariant_in?: Maybe<_JaxVariantFilter>;
  jaxVariant_not?: Maybe<_JaxVariantFilter>;
  jaxVariant_not_in?: Maybe<_JaxVariantFilter>;
  mutationType?: Maybe<Scalars['String']>;
  mutationType_contains?: Maybe<Scalars['String']>;
  mutationType_ends_with?: Maybe<Scalars['String']>;
  mutationType_gt?: Maybe<Scalars['String']>;
  mutationType_gte?: Maybe<Scalars['String']>;
  mutationType_in?: Maybe<Array<Scalars['String']>>;
  mutationType_lt?: Maybe<Scalars['String']>;
  mutationType_lte?: Maybe<Scalars['String']>;
  mutationType_not?: Maybe<Scalars['String']>;
  mutationType_not_contains?: Maybe<Scalars['String']>;
  mutationType_not_ends_with?: Maybe<Scalars['String']>;
  mutationType_not_in?: Maybe<Array<Scalars['String']>>;
  mutationType_not_starts_with?: Maybe<Scalars['String']>;
  mutationType_starts_with?: Maybe<Scalars['String']>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _GoVariantOrdering {
  GeneAsc = 'gene_asc',
  GeneDesc = 'gene_desc',
  GoIdAsc = 'goId_asc',
  GoIdDesc = 'goId_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  MutationTypeAsc = 'mutationType_asc',
  MutationTypeDesc = 'mutationType_desc'
}

export type _HotSpotVariantFilter = {
  AND?: Maybe<Array<_HotSpotVariantFilter>>;
  OR?: Maybe<Array<_HotSpotVariantFilter>>;
  begin?: Maybe<Scalars['String']>;
  begin_contains?: Maybe<Scalars['String']>;
  begin_ends_with?: Maybe<Scalars['String']>;
  begin_gt?: Maybe<Scalars['String']>;
  begin_gte?: Maybe<Scalars['String']>;
  begin_in?: Maybe<Array<Scalars['String']>>;
  begin_lt?: Maybe<Scalars['String']>;
  begin_lte?: Maybe<Scalars['String']>;
  begin_not?: Maybe<Scalars['String']>;
  begin_not_contains?: Maybe<Scalars['String']>;
  begin_not_ends_with?: Maybe<Scalars['String']>;
  begin_not_in?: Maybe<Array<Scalars['String']>>;
  begin_not_starts_with?: Maybe<Scalars['String']>;
  begin_starts_with?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
  end_contains?: Maybe<Scalars['String']>;
  end_ends_with?: Maybe<Scalars['String']>;
  end_gt?: Maybe<Scalars['String']>;
  end_gte?: Maybe<Scalars['String']>;
  end_in?: Maybe<Array<Scalars['String']>>;
  end_lt?: Maybe<Scalars['String']>;
  end_lte?: Maybe<Scalars['String']>;
  end_not?: Maybe<Scalars['String']>;
  end_not_contains?: Maybe<Scalars['String']>;
  end_not_ends_with?: Maybe<Scalars['String']>;
  end_not_in?: Maybe<Array<Scalars['String']>>;
  end_not_starts_with?: Maybe<Scalars['String']>;
  end_starts_with?: Maybe<Scalars['String']>;
  gene?: Maybe<Scalars['String']>;
  gene_contains?: Maybe<Scalars['String']>;
  gene_ends_with?: Maybe<Scalars['String']>;
  gene_gt?: Maybe<Scalars['String']>;
  gene_gte?: Maybe<Scalars['String']>;
  gene_in?: Maybe<Array<Scalars['String']>>;
  gene_lt?: Maybe<Scalars['String']>;
  gene_lte?: Maybe<Scalars['String']>;
  gene_not?: Maybe<Scalars['String']>;
  gene_not_contains?: Maybe<Scalars['String']>;
  gene_not_ends_with?: Maybe<Scalars['String']>;
  gene_not_in?: Maybe<Array<Scalars['String']>>;
  gene_not_starts_with?: Maybe<Scalars['String']>;
  gene_starts_with?: Maybe<Scalars['String']>;
  genomicVariant?: Maybe<_GenomicVariantFilter>;
  genomicVariant_in?: Maybe<_GenomicVariantFilter>;
  genomicVariant_not?: Maybe<_GenomicVariantFilter>;
  genomicVariant_not_in?: Maybe<_GenomicVariantFilter>;
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
  occurrences?: Maybe<_OncoTreeOccurrenceFilter>;
  occurrences_every?: Maybe<_OncoTreeOccurrenceFilter>;
  occurrences_in?: Maybe<_OncoTreeOccurrenceFilter>;
  occurrences_none?: Maybe<_OncoTreeOccurrenceFilter>;
  occurrences_not?: Maybe<_OncoTreeOccurrenceFilter>;
  occurrences_not_in?: Maybe<_OncoTreeOccurrenceFilter>;
  occurrences_single?: Maybe<_OncoTreeOccurrenceFilter>;
  occurrences_some?: Maybe<_OncoTreeOccurrenceFilter>;
  position?: Maybe<Scalars['Int']>;
  position_gt?: Maybe<Scalars['Int']>;
  position_gte?: Maybe<Scalars['Int']>;
  position_in?: Maybe<Array<Scalars['Int']>>;
  position_lt?: Maybe<Scalars['Int']>;
  position_lte?: Maybe<Scalars['Int']>;
  position_not?: Maybe<Scalars['Int']>;
  position_not_in?: Maybe<Array<Scalars['Int']>>;
  referenceAminoAcid?: Maybe<Scalars['String']>;
  referenceAminoAcid_contains?: Maybe<Scalars['String']>;
  referenceAminoAcid_ends_with?: Maybe<Scalars['String']>;
  referenceAminoAcid_gt?: Maybe<Scalars['String']>;
  referenceAminoAcid_gte?: Maybe<Scalars['String']>;
  referenceAminoAcid_in?: Maybe<Array<Scalars['String']>>;
  referenceAminoAcid_lt?: Maybe<Scalars['String']>;
  referenceAminoAcid_lte?: Maybe<Scalars['String']>;
  referenceAminoAcid_not?: Maybe<Scalars['String']>;
  referenceAminoAcid_not_contains?: Maybe<Scalars['String']>;
  referenceAminoAcid_not_ends_with?: Maybe<Scalars['String']>;
  referenceAminoAcid_not_in?: Maybe<Array<Scalars['String']>>;
  referenceAminoAcid_not_starts_with?: Maybe<Scalars['String']>;
  referenceAminoAcid_starts_with?: Maybe<Scalars['String']>;
  variantAminoAcid?: Maybe<Scalars['String']>;
  variantAminoAcid_contains?: Maybe<Scalars['String']>;
  variantAminoAcid_ends_with?: Maybe<Scalars['String']>;
  variantAminoAcid_gt?: Maybe<Scalars['String']>;
  variantAminoAcid_gte?: Maybe<Scalars['String']>;
  variantAminoAcid_in?: Maybe<Array<Scalars['String']>>;
  variantAminoAcid_lt?: Maybe<Scalars['String']>;
  variantAminoAcid_lte?: Maybe<Scalars['String']>;
  variantAminoAcid_not?: Maybe<Scalars['String']>;
  variantAminoAcid_not_contains?: Maybe<Scalars['String']>;
  variantAminoAcid_not_ends_with?: Maybe<Scalars['String']>;
  variantAminoAcid_not_in?: Maybe<Array<Scalars['String']>>;
  variantAminoAcid_not_starts_with?: Maybe<Scalars['String']>;
  variantAminoAcid_starts_with?: Maybe<Scalars['String']>;
};

export enum _HotSpotVariantOrdering {
  BeginAsc = 'begin_asc',
  BeginDesc = 'begin_desc',
  EndAsc = 'end_asc',
  EndDesc = 'end_desc',
  GeneAsc = 'gene_asc',
  GeneDesc = 'gene_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  PositionAsc = 'position_asc',
  PositionDesc = 'position_desc',
  ReferenceAminoAcidAsc = 'referenceAminoAcid_asc',
  ReferenceAminoAcidDesc = 'referenceAminoAcid_desc',
  VariantAminoAcidAsc = 'variantAminoAcid_asc',
  VariantAminoAcidDesc = 'variantAminoAcid_desc'
}

export type _IhcAssayFilter = {
  AND?: Maybe<Array<_IhcAssayFilter>>;
  OR?: Maybe<Array<_IhcAssayFilter>>;
  antibodyClone?: Maybe<_EditableStatementFilter>;
  antibodyClone_in?: Maybe<_EditableStatementFilter>;
  antibodyClone_not?: Maybe<_EditableStatementFilter>;
  antibodyClone_not_in?: Maybe<_EditableStatementFilter>;
  comparator?: Maybe<_EditableAssayComparatorFilter>;
  comparator_in?: Maybe<_EditableAssayComparatorFilter>;
  comparator_not?: Maybe<_EditableAssayComparatorFilter>;
  comparator_not_in?: Maybe<_EditableAssayComparatorFilter>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  proteinExpressionMarkers?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_every?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_in?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_none?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_not?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_not_in?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_single?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_some?: Maybe<_ProteinExpressionMarkerFilter>;
  resultMax?: Maybe<_EditableFloatFilter>;
  resultMax_in?: Maybe<_EditableFloatFilter>;
  resultMax_not?: Maybe<_EditableFloatFilter>;
  resultMax_not_in?: Maybe<_EditableFloatFilter>;
  resultMin?: Maybe<_EditableFloatFilter>;
  resultMin_in?: Maybe<_EditableFloatFilter>;
  resultMin_not?: Maybe<_EditableFloatFilter>;
  resultMin_not_in?: Maybe<_EditableFloatFilter>;
  resultString?: Maybe<_EditableStatementFilter>;
  resultString_in?: Maybe<_EditableStatementFilter>;
  resultString_not?: Maybe<_EditableStatementFilter>;
  resultString_not_in?: Maybe<_EditableStatementFilter>;
  resultUnits?: Maybe<_EditableStatementFilter>;
  resultUnits_in?: Maybe<_EditableStatementFilter>;
  resultUnits_not?: Maybe<_EditableStatementFilter>;
  resultUnits_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _IhcAssayOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _InternetReferenceFilter = {
  AND?: Maybe<Array<_InternetReferenceFilter>>;
  OR?: Maybe<Array<_InternetReferenceFilter>>;
  accessedDate?: Maybe<Scalars['String']>;
  accessedDate_contains?: Maybe<Scalars['String']>;
  accessedDate_ends_with?: Maybe<Scalars['String']>;
  accessedDate_gt?: Maybe<Scalars['String']>;
  accessedDate_gte?: Maybe<Scalars['String']>;
  accessedDate_in?: Maybe<Array<Scalars['String']>>;
  accessedDate_lt?: Maybe<Scalars['String']>;
  accessedDate_lte?: Maybe<Scalars['String']>;
  accessedDate_not?: Maybe<Scalars['String']>;
  accessedDate_not_contains?: Maybe<Scalars['String']>;
  accessedDate_not_ends_with?: Maybe<Scalars['String']>;
  accessedDate_not_in?: Maybe<Array<Scalars['String']>>;
  accessedDate_not_starts_with?: Maybe<Scalars['String']>;
  accessedDate_starts_with?: Maybe<Scalars['String']>;
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
  statementsReferenced?: Maybe<_EditableObjectFilter>;
  statementsReferenced_every?: Maybe<_EditableObjectFilter>;
  statementsReferenced_in?: Maybe<_EditableObjectFilter>;
  statementsReferenced_none?: Maybe<_EditableObjectFilter>;
  statementsReferenced_not?: Maybe<_EditableObjectFilter>;
  statementsReferenced_not_in?: Maybe<_EditableObjectFilter>;
  statementsReferenced_single?: Maybe<_EditableObjectFilter>;
  statementsReferenced_some?: Maybe<_EditableObjectFilter>;
  webAddress?: Maybe<Scalars['String']>;
  webAddress_contains?: Maybe<Scalars['String']>;
  webAddress_ends_with?: Maybe<Scalars['String']>;
  webAddress_gt?: Maybe<Scalars['String']>;
  webAddress_gte?: Maybe<Scalars['String']>;
  webAddress_in?: Maybe<Array<Scalars['String']>>;
  webAddress_lt?: Maybe<Scalars['String']>;
  webAddress_lte?: Maybe<Scalars['String']>;
  webAddress_not?: Maybe<Scalars['String']>;
  webAddress_not_contains?: Maybe<Scalars['String']>;
  webAddress_not_ends_with?: Maybe<Scalars['String']>;
  webAddress_not_in?: Maybe<Array<Scalars['String']>>;
  webAddress_not_starts_with?: Maybe<Scalars['String']>;
  webAddress_starts_with?: Maybe<Scalars['String']>;
};

export enum _InternetReferenceOrdering {
  AccessedDateAsc = 'accessedDate_asc',
  AccessedDateDesc = 'accessedDate_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  ShortReferenceAsc = 'shortReference_asc',
  ShortReferenceDesc = 'shortReference_desc',
  WebAddressAsc = 'webAddress_asc',
  WebAddressDesc = 'webAddress_desc'
}

export type _JaxDiseaseFilter = {
  AND?: Maybe<Array<_JaxDiseaseFilter>>;
  OR?: Maybe<Array<_JaxDiseaseFilter>>;
  definition?: Maybe<_EditableStatementFilter>;
  definition_in?: Maybe<_EditableStatementFilter>;
  definition_not?: Maybe<_EditableStatementFilter>;
  definition_not_in?: Maybe<_EditableStatementFilter>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  source?: Maybe<Scalars['String']>;
  source_contains?: Maybe<Scalars['String']>;
  source_ends_with?: Maybe<Scalars['String']>;
  source_gt?: Maybe<Scalars['String']>;
  source_gte?: Maybe<Scalars['String']>;
  source_in?: Maybe<Array<Scalars['String']>>;
  source_lt?: Maybe<Scalars['String']>;
  source_lte?: Maybe<Scalars['String']>;
  source_not?: Maybe<Scalars['String']>;
  source_not_contains?: Maybe<Scalars['String']>;
  source_not_ends_with?: Maybe<Scalars['String']>;
  source_not_in?: Maybe<Array<Scalars['String']>>;
  source_not_starts_with?: Maybe<Scalars['String']>;
  source_starts_with?: Maybe<Scalars['String']>;
  termId?: Maybe<Scalars['String']>;
  termId_contains?: Maybe<Scalars['String']>;
  termId_ends_with?: Maybe<Scalars['String']>;
  termId_gt?: Maybe<Scalars['String']>;
  termId_gte?: Maybe<Scalars['String']>;
  termId_in?: Maybe<Array<Scalars['String']>>;
  termId_lt?: Maybe<Scalars['String']>;
  termId_lte?: Maybe<Scalars['String']>;
  termId_not?: Maybe<Scalars['String']>;
  termId_not_contains?: Maybe<Scalars['String']>;
  termId_not_ends_with?: Maybe<Scalars['String']>;
  termId_not_in?: Maybe<Array<Scalars['String']>>;
  termId_not_starts_with?: Maybe<Scalars['String']>;
  termId_starts_with?: Maybe<Scalars['String']>;
};

export enum _JaxDiseaseOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  JaxIdAsc = 'jaxId_asc',
  JaxIdDesc = 'jaxId_desc',
  SourceAsc = 'source_asc',
  SourceDesc = 'source_desc',
  TermIdAsc = 'termId_asc',
  TermIdDesc = 'termId_desc'
}

export type _JaxDrugClassFilter = {
  AND?: Maybe<Array<_JaxDrugClassFilter>>;
  OR?: Maybe<Array<_JaxDrugClassFilter>>;
  drugs?: Maybe<_JaxDrugFilter>;
  drugs_every?: Maybe<_JaxDrugFilter>;
  drugs_in?: Maybe<_JaxDrugFilter>;
  drugs_none?: Maybe<_JaxDrugFilter>;
  drugs_not?: Maybe<_JaxDrugFilter>;
  drugs_not_in?: Maybe<_JaxDrugFilter>;
  drugs_single?: Maybe<_JaxDrugFilter>;
  drugs_some?: Maybe<_JaxDrugFilter>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _JaxDrugClassOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  JaxIdAsc = 'jaxId_asc',
  JaxIdDesc = 'jaxId_desc'
}

export type _JaxDrugFilter = {
  AND?: Maybe<Array<_JaxDrugFilter>>;
  OR?: Maybe<Array<_JaxDrugFilter>>;
  description?: Maybe<_EditableStatementFilter>;
  description_in?: Maybe<_EditableStatementFilter>;
  description_not?: Maybe<_EditableStatementFilter>;
  description_not_in?: Maybe<_EditableStatementFilter>;
  drugClasses?: Maybe<_JaxDrugClassFilter>;
  drugClasses_every?: Maybe<_JaxDrugClassFilter>;
  drugClasses_in?: Maybe<_JaxDrugClassFilter>;
  drugClasses_none?: Maybe<_JaxDrugClassFilter>;
  drugClasses_not?: Maybe<_JaxDrugClassFilter>;
  drugClasses_not_in?: Maybe<_JaxDrugClassFilter>;
  drugClasses_single?: Maybe<_JaxDrugClassFilter>;
  drugClasses_some?: Maybe<_JaxDrugClassFilter>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  synonyms?: Maybe<_EditableStringListFilter>;
  synonyms_in?: Maybe<_EditableStringListFilter>;
  synonyms_not?: Maybe<_EditableStringListFilter>;
  synonyms_not_in?: Maybe<_EditableStringListFilter>;
  tradeName?: Maybe<_EditableStatementFilter>;
  tradeName_in?: Maybe<_EditableStatementFilter>;
  tradeName_not?: Maybe<_EditableStatementFilter>;
  tradeName_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _JaxDrugOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  JaxIdAsc = 'jaxId_asc',
  JaxIdDesc = 'jaxId_desc'
}

export type _JaxGeneFilter = {
  AND?: Maybe<Array<_JaxGeneFilter>>;
  OR?: Maybe<Array<_JaxGeneFilter>>;
  canonicalTranscript?: Maybe<_EditableStatementFilter>;
  canonicalTranscript_every?: Maybe<_EditableStatementFilter>;
  canonicalTranscript_in?: Maybe<_EditableStatementFilter>;
  canonicalTranscript_none?: Maybe<_EditableStatementFilter>;
  canonicalTranscript_not?: Maybe<_EditableStatementFilter>;
  canonicalTranscript_not_in?: Maybe<_EditableStatementFilter>;
  canonicalTranscript_single?: Maybe<_EditableStatementFilter>;
  canonicalTranscript_some?: Maybe<_EditableStatementFilter>;
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
  synonyms?: Maybe<_EditableStringListFilter>;
  synonyms_in?: Maybe<_EditableStringListFilter>;
  synonyms_not?: Maybe<_EditableStringListFilter>;
  synonyms_not_in?: Maybe<_EditableStringListFilter>;
};

export enum _JaxGeneOrdering {
  ChromosomeAsc = 'chromosome_asc',
  ChromosomeDesc = 'chromosome_desc',
  EntrezIdAsc = 'entrezId_asc',
  EntrezIdDesc = 'entrezId_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  JaxIdAsc = 'jaxId_asc',
  JaxIdDesc = 'jaxId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _JaxVariantFilter = {
  AND?: Maybe<Array<_JaxVariantFilter>>;
  OR?: Maybe<Array<_JaxVariantFilter>>;
  cDot?: Maybe<Scalars['String']>;
  cDot_contains?: Maybe<Scalars['String']>;
  cDot_ends_with?: Maybe<Scalars['String']>;
  cDot_gt?: Maybe<Scalars['String']>;
  cDot_gte?: Maybe<Scalars['String']>;
  cDot_in?: Maybe<Array<Scalars['String']>>;
  cDot_lt?: Maybe<Scalars['String']>;
  cDot_lte?: Maybe<Scalars['String']>;
  cDot_not?: Maybe<Scalars['String']>;
  cDot_not_contains?: Maybe<Scalars['String']>;
  cDot_not_ends_with?: Maybe<Scalars['String']>;
  cDot_not_in?: Maybe<Array<Scalars['String']>>;
  cDot_not_starts_with?: Maybe<Scalars['String']>;
  cDot_starts_with?: Maybe<Scalars['String']>;
  description?: Maybe<_EditableStatementFilter>;
  description_in?: Maybe<_EditableStatementFilter>;
  description_not?: Maybe<_EditableStatementFilter>;
  description_not_in?: Maybe<_EditableStatementFilter>;
  gDot?: Maybe<Scalars['String']>;
  gDot_contains?: Maybe<Scalars['String']>;
  gDot_ends_with?: Maybe<Scalars['String']>;
  gDot_gt?: Maybe<Scalars['String']>;
  gDot_gte?: Maybe<Scalars['String']>;
  gDot_in?: Maybe<Array<Scalars['String']>>;
  gDot_lt?: Maybe<Scalars['String']>;
  gDot_lte?: Maybe<Scalars['String']>;
  gDot_not?: Maybe<Scalars['String']>;
  gDot_not_contains?: Maybe<Scalars['String']>;
  gDot_not_ends_with?: Maybe<Scalars['String']>;
  gDot_not_in?: Maybe<Array<Scalars['String']>>;
  gDot_not_starts_with?: Maybe<Scalars['String']>;
  gDot_starts_with?: Maybe<Scalars['String']>;
  gene?: Maybe<_JaxGeneFilter>;
  gene_in?: Maybe<_JaxGeneFilter>;
  gene_not?: Maybe<_JaxGeneFilter>;
  gene_not_in?: Maybe<_JaxGeneFilter>;
  genomicVariant?: Maybe<_GenomicVariantFilter>;
  genomicVariant_in?: Maybe<_GenomicVariantFilter>;
  genomicVariant_not?: Maybe<_GenomicVariantFilter>;
  genomicVariant_not_in?: Maybe<_GenomicVariantFilter>;
  goVariant?: Maybe<_GoVariantFilter>;
  goVariant_in?: Maybe<_GoVariantFilter>;
  goVariant_not?: Maybe<_GoVariantFilter>;
  goVariant_not_in?: Maybe<_GoVariantFilter>;
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
  pDot?: Maybe<Scalars['String']>;
  pDot_contains?: Maybe<Scalars['String']>;
  pDot_ends_with?: Maybe<Scalars['String']>;
  pDot_gt?: Maybe<Scalars['String']>;
  pDot_gte?: Maybe<Scalars['String']>;
  pDot_in?: Maybe<Array<Scalars['String']>>;
  pDot_lt?: Maybe<Scalars['String']>;
  pDot_lte?: Maybe<Scalars['String']>;
  pDot_not?: Maybe<Scalars['String']>;
  pDot_not_contains?: Maybe<Scalars['String']>;
  pDot_not_ends_with?: Maybe<Scalars['String']>;
  pDot_not_in?: Maybe<Array<Scalars['String']>>;
  pDot_not_starts_with?: Maybe<Scalars['String']>;
  pDot_starts_with?: Maybe<Scalars['String']>;
  proteinEffect?: Maybe<_EditableProteinEffectFilter>;
  proteinEffect_in?: Maybe<_EditableProteinEffectFilter>;
  proteinEffect_not?: Maybe<_EditableProteinEffectFilter>;
  proteinEffect_not_in?: Maybe<_EditableProteinEffectFilter>;
  transcript?: Maybe<_EditableStatementFilter>;
  transcript_in?: Maybe<_EditableStatementFilter>;
  transcript_not?: Maybe<_EditableStatementFilter>;
  transcript_not_in?: Maybe<_EditableStatementFilter>;
  variantType?: Maybe<Scalars['String']>;
  variantType_contains?: Maybe<Scalars['String']>;
  variantType_ends_with?: Maybe<Scalars['String']>;
  variantType_gt?: Maybe<Scalars['String']>;
  variantType_gte?: Maybe<Scalars['String']>;
  variantType_in?: Maybe<Array<Scalars['String']>>;
  variantType_lt?: Maybe<Scalars['String']>;
  variantType_lte?: Maybe<Scalars['String']>;
  variantType_not?: Maybe<Scalars['String']>;
  variantType_not_contains?: Maybe<Scalars['String']>;
  variantType_not_ends_with?: Maybe<Scalars['String']>;
  variantType_not_in?: Maybe<Array<Scalars['String']>>;
  variantType_not_starts_with?: Maybe<Scalars['String']>;
  variantType_starts_with?: Maybe<Scalars['String']>;
};

export enum _JaxVariantOrdering {
  CDotAsc = 'cDot_asc',
  CDotDesc = 'cDot_desc',
  GDotAsc = 'gDot_asc',
  GDotDesc = 'gDot_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  JaxIdAsc = 'jaxId_asc',
  JaxIdDesc = 'jaxId_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  PDotAsc = 'pDot_asc',
  PDotDesc = 'pDot_desc',
  VariantTypeAsc = 'variantType_asc',
  VariantTypeDesc = 'variantType_desc'
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
  firstPage?: Maybe<Scalars['String']>;
  firstPage_contains?: Maybe<Scalars['String']>;
  firstPage_ends_with?: Maybe<Scalars['String']>;
  firstPage_gt?: Maybe<Scalars['String']>;
  firstPage_gte?: Maybe<Scalars['String']>;
  firstPage_in?: Maybe<Array<Scalars['String']>>;
  firstPage_lt?: Maybe<Scalars['String']>;
  firstPage_lte?: Maybe<Scalars['String']>;
  firstPage_not?: Maybe<Scalars['String']>;
  firstPage_not_contains?: Maybe<Scalars['String']>;
  firstPage_not_ends_with?: Maybe<Scalars['String']>;
  firstPage_not_in?: Maybe<Array<Scalars['String']>>;
  firstPage_not_starts_with?: Maybe<Scalars['String']>;
  firstPage_starts_with?: Maybe<Scalars['String']>;
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
  lastPage?: Maybe<Scalars['String']>;
  lastPage_contains?: Maybe<Scalars['String']>;
  lastPage_ends_with?: Maybe<Scalars['String']>;
  lastPage_gt?: Maybe<Scalars['String']>;
  lastPage_gte?: Maybe<Scalars['String']>;
  lastPage_in?: Maybe<Array<Scalars['String']>>;
  lastPage_lt?: Maybe<Scalars['String']>;
  lastPage_lte?: Maybe<Scalars['String']>;
  lastPage_not?: Maybe<Scalars['String']>;
  lastPage_not_contains?: Maybe<Scalars['String']>;
  lastPage_not_ends_with?: Maybe<Scalars['String']>;
  lastPage_not_in?: Maybe<Array<Scalars['String']>>;
  lastPage_not_starts_with?: Maybe<Scalars['String']>;
  lastPage_starts_with?: Maybe<Scalars['String']>;
  publicationYear?: Maybe<Scalars['String']>;
  publicationYear_contains?: Maybe<Scalars['String']>;
  publicationYear_ends_with?: Maybe<Scalars['String']>;
  publicationYear_gt?: Maybe<Scalars['String']>;
  publicationYear_gte?: Maybe<Scalars['String']>;
  publicationYear_in?: Maybe<Array<Scalars['String']>>;
  publicationYear_lt?: Maybe<Scalars['String']>;
  publicationYear_lte?: Maybe<Scalars['String']>;
  publicationYear_not?: Maybe<Scalars['String']>;
  publicationYear_not_contains?: Maybe<Scalars['String']>;
  publicationYear_not_ends_with?: Maybe<Scalars['String']>;
  publicationYear_not_in?: Maybe<Array<Scalars['String']>>;
  publicationYear_not_starts_with?: Maybe<Scalars['String']>;
  publicationYear_starts_with?: Maybe<Scalars['String']>;
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
  statementsReferenced?: Maybe<_EditableObjectFilter>;
  statementsReferenced_every?: Maybe<_EditableObjectFilter>;
  statementsReferenced_in?: Maybe<_EditableObjectFilter>;
  statementsReferenced_none?: Maybe<_EditableObjectFilter>;
  statementsReferenced_not?: Maybe<_EditableObjectFilter>;
  statementsReferenced_not_in?: Maybe<_EditableObjectFilter>;
  statementsReferenced_single?: Maybe<_EditableObjectFilter>;
  statementsReferenced_some?: Maybe<_EditableObjectFilter>;
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
  FirstPageAsc = 'firstPage_asc',
  FirstPageDesc = 'firstPage_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  LastPageAsc = 'lastPage_asc',
  LastPageDesc = 'lastPage_desc',
  PublicationYearAsc = 'publicationYear_asc',
  PublicationYearDesc = 'publicationYear_desc',
  ShortReferenceAsc = 'shortReference_asc',
  ShortReferenceDesc = 'shortReference_desc',
  TitleAsc = 'title_asc',
  TitleDesc = 'title_desc',
  VolumeAsc = 'volume_asc',
  VolumeDesc = 'volume_desc'
}

export type _MarkerComponentFilter = {
  AND?: Maybe<Array<_MarkerComponentFilter>>;
  OR?: Maybe<Array<_MarkerComponentFilter>>;
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
  method?: Maybe<_EditableStatementFilter>;
  method_in?: Maybe<_EditableStatementFilter>;
  method_not?: Maybe<_EditableStatementFilter>;
  method_not_in?: Maybe<_EditableStatementFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  resultString?: Maybe<_EditableStatementFilter>;
  resultString_in?: Maybe<_EditableStatementFilter>;
  resultString_not?: Maybe<_EditableStatementFilter>;
  resultString_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _MarkerComponentOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _MarkerProfileFilter = {
  AND?: Maybe<Array<_MarkerProfileFilter>>;
  OR?: Maybe<Array<_MarkerProfileFilter>>;
  components?: Maybe<_MarkerComponentFilter>;
  components_every?: Maybe<_MarkerComponentFilter>;
  components_in?: Maybe<_MarkerComponentFilter>;
  components_none?: Maybe<_MarkerComponentFilter>;
  components_not?: Maybe<_MarkerComponentFilter>;
  components_not_in?: Maybe<_MarkerComponentFilter>;
  components_single?: Maybe<_MarkerComponentFilter>;
  components_some?: Maybe<_MarkerComponentFilter>;
  conjunction?: Maybe<OmniConjunction>;
  conjunction_in?: Maybe<Array<OmniConjunction>>;
  conjunction_not?: Maybe<OmniConjunction>;
  conjunction_not_in?: Maybe<Array<OmniConjunction>>;
  evidenceAssociations?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_every?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_in?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_none?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_not?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_not_in?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_single?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_some?: Maybe<_EvidenceAssociationFilter>;
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
  method?: Maybe<_EditableStatementFilter>;
  method_in?: Maybe<_EditableStatementFilter>;
  method_not?: Maybe<_EditableStatementFilter>;
  method_not_in?: Maybe<_EditableStatementFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  resultString?: Maybe<_EditableStatementFilter>;
  resultString_in?: Maybe<_EditableStatementFilter>;
  resultString_not?: Maybe<_EditableStatementFilter>;
  resultString_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _MarkerProfileOrdering {
  ConjunctionAsc = 'conjunction_asc',
  ConjunctionDesc = 'conjunction_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _MCodeFilter = {
  AND?: Maybe<Array<_MCodeFilter>>;
  OR?: Maybe<Array<_MCodeFilter>>;
  children?: Maybe<_MCodeFilter>;
  children_every?: Maybe<_MCodeFilter>;
  children_in?: Maybe<_MCodeFilter>;
  children_none?: Maybe<_MCodeFilter>;
  children_not?: Maybe<_MCodeFilter>;
  children_not_in?: Maybe<_MCodeFilter>;
  children_single?: Maybe<_MCodeFilter>;
  children_some?: Maybe<_MCodeFilter>;
  diseasePath?: Maybe<_EditableStatementFilter>;
  diseasePath_in?: Maybe<_EditableStatementFilter>;
  diseasePath_not?: Maybe<_EditableStatementFilter>;
  diseasePath_not_in?: Maybe<_EditableStatementFilter>;
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
  mcodeId?: Maybe<Scalars['String']>;
  mcodeId_contains?: Maybe<Scalars['String']>;
  mcodeId_ends_with?: Maybe<Scalars['String']>;
  mcodeId_gt?: Maybe<Scalars['String']>;
  mcodeId_gte?: Maybe<Scalars['String']>;
  mcodeId_in?: Maybe<Array<Scalars['String']>>;
  mcodeId_lt?: Maybe<Scalars['String']>;
  mcodeId_lte?: Maybe<Scalars['String']>;
  mcodeId_not?: Maybe<Scalars['String']>;
  mcodeId_not_contains?: Maybe<Scalars['String']>;
  mcodeId_not_ends_with?: Maybe<Scalars['String']>;
  mcodeId_not_in?: Maybe<Array<Scalars['String']>>;
  mcodeId_not_starts_with?: Maybe<Scalars['String']>;
  mcodeId_starts_with?: Maybe<Scalars['String']>;
  omniDisease?: Maybe<Scalars['String']>;
  omniDisease_contains?: Maybe<Scalars['String']>;
  omniDisease_ends_with?: Maybe<Scalars['String']>;
  omniDisease_gt?: Maybe<Scalars['String']>;
  omniDisease_gte?: Maybe<Scalars['String']>;
  omniDisease_in?: Maybe<Array<Scalars['String']>>;
  omniDisease_lt?: Maybe<Scalars['String']>;
  omniDisease_lte?: Maybe<Scalars['String']>;
  omniDisease_not?: Maybe<Scalars['String']>;
  omniDisease_not_contains?: Maybe<Scalars['String']>;
  omniDisease_not_ends_with?: Maybe<Scalars['String']>;
  omniDisease_not_in?: Maybe<Array<Scalars['String']>>;
  omniDisease_not_starts_with?: Maybe<Scalars['String']>;
  omniDisease_starts_with?: Maybe<Scalars['String']>;
  parents?: Maybe<_MCodeFilter>;
  parents_every?: Maybe<_MCodeFilter>;
  parents_in?: Maybe<_MCodeFilter>;
  parents_none?: Maybe<_MCodeFilter>;
  parents_not?: Maybe<_MCodeFilter>;
  parents_not_in?: Maybe<_MCodeFilter>;
  parents_single?: Maybe<_MCodeFilter>;
  parents_some?: Maybe<_MCodeFilter>;
};

export enum _MCodeOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  McodeIdAsc = 'mcodeId_asc',
  McodeIdDesc = 'mcodeId_desc',
  OmniDiseaseAsc = 'omniDisease_asc',
  OmniDiseaseDesc = 'omniDisease_desc'
}

export type _MeetingAbstractReferenceFilter = {
  AND?: Maybe<Array<_MeetingAbstractReferenceFilter>>;
  OR?: Maybe<Array<_MeetingAbstractReferenceFilter>>;
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
  meetingDate?: Maybe<Scalars['String']>;
  meetingDate_contains?: Maybe<Scalars['String']>;
  meetingDate_ends_with?: Maybe<Scalars['String']>;
  meetingDate_gt?: Maybe<Scalars['String']>;
  meetingDate_gte?: Maybe<Scalars['String']>;
  meetingDate_in?: Maybe<Array<Scalars['String']>>;
  meetingDate_lt?: Maybe<Scalars['String']>;
  meetingDate_lte?: Maybe<Scalars['String']>;
  meetingDate_not?: Maybe<Scalars['String']>;
  meetingDate_not_contains?: Maybe<Scalars['String']>;
  meetingDate_not_ends_with?: Maybe<Scalars['String']>;
  meetingDate_not_in?: Maybe<Array<Scalars['String']>>;
  meetingDate_not_starts_with?: Maybe<Scalars['String']>;
  meetingDate_starts_with?: Maybe<Scalars['String']>;
  meetingName?: Maybe<Scalars['String']>;
  meetingName_contains?: Maybe<Scalars['String']>;
  meetingName_ends_with?: Maybe<Scalars['String']>;
  meetingName_gt?: Maybe<Scalars['String']>;
  meetingName_gte?: Maybe<Scalars['String']>;
  meetingName_in?: Maybe<Array<Scalars['String']>>;
  meetingName_lt?: Maybe<Scalars['String']>;
  meetingName_lte?: Maybe<Scalars['String']>;
  meetingName_not?: Maybe<Scalars['String']>;
  meetingName_not_contains?: Maybe<Scalars['String']>;
  meetingName_not_ends_with?: Maybe<Scalars['String']>;
  meetingName_not_in?: Maybe<Array<Scalars['String']>>;
  meetingName_not_starts_with?: Maybe<Scalars['String']>;
  meetingName_starts_with?: Maybe<Scalars['String']>;
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
  statementsReferenced?: Maybe<_EditableObjectFilter>;
  statementsReferenced_every?: Maybe<_EditableObjectFilter>;
  statementsReferenced_in?: Maybe<_EditableObjectFilter>;
  statementsReferenced_none?: Maybe<_EditableObjectFilter>;
  statementsReferenced_not?: Maybe<_EditableObjectFilter>;
  statementsReferenced_not_in?: Maybe<_EditableObjectFilter>;
  statementsReferenced_single?: Maybe<_EditableObjectFilter>;
  statementsReferenced_some?: Maybe<_EditableObjectFilter>;
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
};

export enum _MeetingAbstractReferenceOrdering {
  AbstractAsc = 'abstract_asc',
  AbstractDesc = 'abstract_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  MeetingDateAsc = 'meetingDate_asc',
  MeetingDateDesc = 'meetingDate_desc',
  MeetingNameAsc = 'meetingName_asc',
  MeetingNameDesc = 'meetingName_desc',
  ShortReferenceAsc = 'shortReference_asc',
  ShortReferenceDesc = 'shortReference_desc',
  TitleAsc = 'title_asc',
  TitleDesc = 'title_desc'
}

export type _MsiMarkerFilter = {
  AND?: Maybe<Array<_MsiMarkerFilter>>;
  OR?: Maybe<Array<_MsiMarkerFilter>>;
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
  method?: Maybe<_EditableStatementFilter>;
  method_in?: Maybe<_EditableStatementFilter>;
  method_not?: Maybe<_EditableStatementFilter>;
  method_not_in?: Maybe<_EditableStatementFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  resultString?: Maybe<_EditableStatementFilter>;
  resultString_in?: Maybe<_EditableStatementFilter>;
  resultString_not?: Maybe<_EditableStatementFilter>;
  resultString_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _MsiMarkerOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _MyGeneInfoGeneFilter = {
  AND?: Maybe<Array<_MyGeneInfoGeneFilter>>;
  OR?: Maybe<Array<_MyGeneInfoGeneFilter>>;
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
  uniprotEntry?: Maybe<_UniprotEntryFilter>;
  uniprotEntry_in?: Maybe<_UniprotEntryFilter>;
  uniprotEntry_not?: Maybe<_UniprotEntryFilter>;
  uniprotEntry_not_in?: Maybe<_UniprotEntryFilter>;
};

export enum _MyGeneInfoGeneOrdering {
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
  StrandDesc = 'strand_desc'
}

export type _NciDrugFilter = {
  AND?: Maybe<Array<_NciDrugFilter>>;
  OR?: Maybe<Array<_NciDrugFilter>>;
  annotationDate?: Maybe<_EditableStatementFilter>;
  annotationDate_in?: Maybe<_EditableStatementFilter>;
  annotationDate_not?: Maybe<_EditableStatementFilter>;
  annotationDate_not_in?: Maybe<_EditableStatementFilter>;
  conceptCode?: Maybe<_EditableStatementFilter>;
  conceptCode_in?: Maybe<_EditableStatementFilter>;
  conceptCode_not?: Maybe<_EditableStatementFilter>;
  conceptCode_not_in?: Maybe<_EditableStatementFilter>;
  definition?: Maybe<_EditableStatementFilter>;
  definition_in?: Maybe<_EditableStatementFilter>;
  definition_not?: Maybe<_EditableStatementFilter>;
  definition_not_in?: Maybe<_EditableStatementFilter>;
  drugCategory?: Maybe<_EditableStatementFilter>;
  drugCategory_in?: Maybe<_EditableStatementFilter>;
  drugCategory_not?: Maybe<_EditableStatementFilter>;
  drugCategory_not_in?: Maybe<_EditableStatementFilter>;
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
  isAntineoplastic?: Maybe<Scalars['Boolean']>;
  isAntineoplastic_not?: Maybe<Scalars['Boolean']>;
  isImmuno?: Maybe<Scalars['Boolean']>;
  isImmuno_not?: Maybe<Scalars['Boolean']>;
  modulator?: Maybe<_EditableStatementFilter>;
  modulator_in?: Maybe<_EditableStatementFilter>;
  modulator_not?: Maybe<_EditableStatementFilter>;
  modulator_not_in?: Maybe<_EditableStatementFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  synonyms?: Maybe<_EditableStringListFilter>;
  synonyms_in?: Maybe<_EditableStringListFilter>;
  synonyms_not?: Maybe<_EditableStringListFilter>;
  synonyms_not_in?: Maybe<_EditableStringListFilter>;
};

export enum _NciDrugOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  IsAntineoplasticAsc = 'isAntineoplastic_asc',
  IsAntineoplasticDesc = 'isAntineoplastic_desc',
  IsImmunoAsc = 'isImmuno_asc',
  IsImmunoDesc = 'isImmuno_desc'
}

export type _OmniDiseaseFilter = {
  AND?: Maybe<Array<_OmniDiseaseFilter>>;
  OR?: Maybe<Array<_OmniDiseaseFilter>>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  omniDiseaseId?: Maybe<Scalars['String']>;
  omniDiseaseId_contains?: Maybe<Scalars['String']>;
  omniDiseaseId_ends_with?: Maybe<Scalars['String']>;
  omniDiseaseId_gt?: Maybe<Scalars['String']>;
  omniDiseaseId_gte?: Maybe<Scalars['String']>;
  omniDiseaseId_in?: Maybe<Array<Scalars['String']>>;
  omniDiseaseId_lt?: Maybe<Scalars['String']>;
  omniDiseaseId_lte?: Maybe<Scalars['String']>;
  omniDiseaseId_not?: Maybe<Scalars['String']>;
  omniDiseaseId_not_contains?: Maybe<Scalars['String']>;
  omniDiseaseId_not_ends_with?: Maybe<Scalars['String']>;
  omniDiseaseId_not_in?: Maybe<Array<Scalars['String']>>;
  omniDiseaseId_not_starts_with?: Maybe<Scalars['String']>;
  omniDiseaseId_starts_with?: Maybe<Scalars['String']>;
  omniDiseaseType?: Maybe<OmniDiseaseType>;
  omniDiseaseType_in?: Maybe<Array<OmniDiseaseType>>;
  omniDiseaseType_not?: Maybe<OmniDiseaseType>;
  omniDiseaseType_not_in?: Maybe<Array<OmniDiseaseType>>;
};

export enum _OmniDiseaseOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  OmniDiseaseIdAsc = 'omniDiseaseId_asc',
  OmniDiseaseIdDesc = 'omniDiseaseId_desc',
  OmniDiseaseTypeAsc = 'omniDiseaseType_asc',
  OmniDiseaseTypeDesc = 'omniDiseaseType_desc'
}

export type _OmniDrugFilter = {
  AND?: Maybe<Array<_OmniDrugFilter>>;
  OR?: Maybe<Array<_OmniDrugFilter>>;
  componentOf?: Maybe<_TherapyFilter>;
  componentOf_every?: Maybe<_TherapyFilter>;
  componentOf_in?: Maybe<_TherapyFilter>;
  componentOf_none?: Maybe<_TherapyFilter>;
  componentOf_not?: Maybe<_TherapyFilter>;
  componentOf_not_in?: Maybe<_TherapyFilter>;
  componentOf_single?: Maybe<_TherapyFilter>;
  componentOf_some?: Maybe<_TherapyFilter>;
  definition?: Maybe<_EditableStatementFilter>;
  definition_in?: Maybe<_EditableStatementFilter>;
  definition_not?: Maybe<_EditableStatementFilter>;
  definition_not_in?: Maybe<_EditableStatementFilter>;
  drugCategories?: Maybe<_DrugCategoryFilter>;
  drugCategories_every?: Maybe<_DrugCategoryFilter>;
  drugCategories_in?: Maybe<_DrugCategoryFilter>;
  drugCategories_none?: Maybe<_DrugCategoryFilter>;
  drugCategories_not?: Maybe<_DrugCategoryFilter>;
  drugCategories_not_in?: Maybe<_DrugCategoryFilter>;
  drugCategories_single?: Maybe<_DrugCategoryFilter>;
  drugCategories_some?: Maybe<_DrugCategoryFilter>;
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
  jaxDrug?: Maybe<_JaxDrugFilter>;
  jaxDrug_in?: Maybe<_JaxDrugFilter>;
  jaxDrug_not?: Maybe<_JaxDrugFilter>;
  jaxDrug_not_in?: Maybe<_JaxDrugFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  nciDrug?: Maybe<_NciDrugFilter>;
  nciDrug_in?: Maybe<_NciDrugFilter>;
  nciDrug_not?: Maybe<_NciDrugFilter>;
  nciDrug_not_in?: Maybe<_NciDrugFilter>;
  synonyms?: Maybe<_EditableStringListFilter>;
  synonyms_in?: Maybe<_EditableStringListFilter>;
  synonyms_not?: Maybe<_EditableStringListFilter>;
  synonyms_not_in?: Maybe<_EditableStringListFilter>;
  target?: Maybe<_TargetFilter>;
  target_every?: Maybe<_TargetFilter>;
  target_in?: Maybe<_TargetFilter>;
  target_none?: Maybe<_TargetFilter>;
  target_not?: Maybe<_TargetFilter>;
  target_not_in?: Maybe<_TargetFilter>;
  target_single?: Maybe<_TargetFilter>;
  target_some?: Maybe<_TargetFilter>;
  tradeName?: Maybe<_EditableStatementFilter>;
  tradeName_in?: Maybe<_EditableStatementFilter>;
  tradeName_not?: Maybe<_EditableStatementFilter>;
  tradeName_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _OmniDrugOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
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
  myGeneInfoGene?: Maybe<_MyGeneInfoGeneFilter>;
  myGeneInfoGene_in?: Maybe<_MyGeneInfoGeneFilter>;
  myGeneInfoGene_not?: Maybe<_MyGeneInfoGeneFilter>;
  myGeneInfoGene_not_in?: Maybe<_MyGeneInfoGeneFilter>;
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
  synonyms?: Maybe<_EditableStringListFilter>;
  synonyms_in?: Maybe<_EditableStringListFilter>;
  synonyms_not?: Maybe<_EditableStringListFilter>;
  synonyms_not_in?: Maybe<_EditableStringListFilter>;
  transcript?: Maybe<_EditableStatementFilter>;
  transcript_in?: Maybe<_EditableStatementFilter>;
  transcript_not?: Maybe<_EditableStatementFilter>;
  transcript_not_in?: Maybe<_EditableStatementFilter>;
  uniprotEntry?: Maybe<_UniprotEntryFilter>;
  uniprotEntry_in?: Maybe<_UniprotEntryFilter>;
  uniprotEntry_not?: Maybe<_UniprotEntryFilter>;
  uniprotEntry_not_in?: Maybe<_UniprotEntryFilter>;
  variantMarkers?: Maybe<_GenomicVariantMarkerFilter>;
  variantMarkers_every?: Maybe<_GenomicVariantMarkerFilter>;
  variantMarkers_in?: Maybe<_GenomicVariantMarkerFilter>;
  variantMarkers_none?: Maybe<_GenomicVariantMarkerFilter>;
  variantMarkers_not?: Maybe<_GenomicVariantMarkerFilter>;
  variantMarkers_not_in?: Maybe<_GenomicVariantMarkerFilter>;
  variantMarkers_single?: Maybe<_GenomicVariantMarkerFilter>;
  variantMarkers_some?: Maybe<_GenomicVariantMarkerFilter>;
  variants?: Maybe<_GenomicVariantFilter>;
  variants_every?: Maybe<_GenomicVariantFilter>;
  variants_in?: Maybe<_GenomicVariantFilter>;
  variants_none?: Maybe<_GenomicVariantFilter>;
  variants_not?: Maybe<_GenomicVariantFilter>;
  variants_not_in?: Maybe<_GenomicVariantFilter>;
  variants_single?: Maybe<_GenomicVariantFilter>;
  variants_some?: Maybe<_GenomicVariantFilter>;
};

export enum _OmniGeneOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  PanelNameAsc = 'panelName_asc',
  PanelNameDesc = 'panelName_desc'
}

export type _OncoTreeDiseaseFilter = {
  AND?: Maybe<Array<_OncoTreeDiseaseFilter>>;
  OR?: Maybe<Array<_OncoTreeDiseaseFilter>>;
  children?: Maybe<_OncoTreeDiseaseFilter>;
  children_every?: Maybe<_OncoTreeDiseaseFilter>;
  children_in?: Maybe<_OncoTreeDiseaseFilter>;
  children_none?: Maybe<_OncoTreeDiseaseFilter>;
  children_not?: Maybe<_OncoTreeDiseaseFilter>;
  children_not_in?: Maybe<_OncoTreeDiseaseFilter>;
  children_single?: Maybe<_OncoTreeDiseaseFilter>;
  children_some?: Maybe<_OncoTreeDiseaseFilter>;
  code?: Maybe<Scalars['String']>;
  code_contains?: Maybe<Scalars['String']>;
  code_ends_with?: Maybe<Scalars['String']>;
  code_gt?: Maybe<Scalars['String']>;
  code_gte?: Maybe<Scalars['String']>;
  code_in?: Maybe<Array<Scalars['String']>>;
  code_lt?: Maybe<Scalars['String']>;
  code_lte?: Maybe<Scalars['String']>;
  code_not?: Maybe<Scalars['String']>;
  code_not_contains?: Maybe<Scalars['String']>;
  code_not_ends_with?: Maybe<Scalars['String']>;
  code_not_in?: Maybe<Array<Scalars['String']>>;
  code_not_starts_with?: Maybe<Scalars['String']>;
  code_starts_with?: Maybe<Scalars['String']>;
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
  mainType?: Maybe<_EditableStatementFilter>;
  mainType_in?: Maybe<_EditableStatementFilter>;
  mainType_not?: Maybe<_EditableStatementFilter>;
  mainType_not_in?: Maybe<_EditableStatementFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  parent?: Maybe<_OncoTreeDiseaseFilter>;
  parent_every?: Maybe<_OncoTreeDiseaseFilter>;
  parent_in?: Maybe<_OncoTreeDiseaseFilter>;
  parent_none?: Maybe<_OncoTreeDiseaseFilter>;
  parent_not?: Maybe<_OncoTreeDiseaseFilter>;
  parent_not_in?: Maybe<_OncoTreeDiseaseFilter>;
  parent_single?: Maybe<_OncoTreeDiseaseFilter>;
  parent_some?: Maybe<_OncoTreeDiseaseFilter>;
  tissue?: Maybe<_EditableStatementFilter>;
  tissue_in?: Maybe<_EditableStatementFilter>;
  tissue_not?: Maybe<_EditableStatementFilter>;
  tissue_not_in?: Maybe<_EditableStatementFilter>;
  xrefs?: Maybe<_EditableXRefListFilter>;
  xrefs_in?: Maybe<_EditableXRefListFilter>;
  xrefs_not?: Maybe<_EditableXRefListFilter>;
  xrefs_not_in?: Maybe<_EditableXRefListFilter>;
};

export enum _OncoTreeDiseaseOrdering {
  CodeAsc = 'code_asc',
  CodeDesc = 'code_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _OncoTreeOccurrenceFilter = {
  AND?: Maybe<Array<_OncoTreeOccurrenceFilter>>;
  OR?: Maybe<Array<_OncoTreeOccurrenceFilter>>;
  disease?: Maybe<Scalars['String']>;
  disease_contains?: Maybe<Scalars['String']>;
  disease_ends_with?: Maybe<Scalars['String']>;
  disease_gt?: Maybe<Scalars['String']>;
  disease_gte?: Maybe<Scalars['String']>;
  disease_in?: Maybe<Array<Scalars['String']>>;
  disease_lt?: Maybe<Scalars['String']>;
  disease_lte?: Maybe<Scalars['String']>;
  disease_not?: Maybe<Scalars['String']>;
  disease_not_contains?: Maybe<Scalars['String']>;
  disease_not_ends_with?: Maybe<Scalars['String']>;
  disease_not_in?: Maybe<Array<Scalars['String']>>;
  disease_not_starts_with?: Maybe<Scalars['String']>;
  disease_starts_with?: Maybe<Scalars['String']>;
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
  occurrences?: Maybe<_EditableIntFilter>;
  occurrences_in?: Maybe<_EditableIntFilter>;
  occurrences_not?: Maybe<_EditableIntFilter>;
  occurrences_not_in?: Maybe<_EditableIntFilter>;
  oncoTreeCode?: Maybe<Scalars['String']>;
  oncoTreeCode_contains?: Maybe<Scalars['String']>;
  oncoTreeCode_ends_with?: Maybe<Scalars['String']>;
  oncoTreeCode_gt?: Maybe<Scalars['String']>;
  oncoTreeCode_gte?: Maybe<Scalars['String']>;
  oncoTreeCode_in?: Maybe<Array<Scalars['String']>>;
  oncoTreeCode_lt?: Maybe<Scalars['String']>;
  oncoTreeCode_lte?: Maybe<Scalars['String']>;
  oncoTreeCode_not?: Maybe<Scalars['String']>;
  oncoTreeCode_not_contains?: Maybe<Scalars['String']>;
  oncoTreeCode_not_ends_with?: Maybe<Scalars['String']>;
  oncoTreeCode_not_in?: Maybe<Array<Scalars['String']>>;
  oncoTreeCode_not_starts_with?: Maybe<Scalars['String']>;
  oncoTreeCode_starts_with?: Maybe<Scalars['String']>;
  perThousandOccurrence?: Maybe<Scalars['Int']>;
  perThousandOccurrence_gt?: Maybe<Scalars['Int']>;
  perThousandOccurrence_gte?: Maybe<Scalars['Int']>;
  perThousandOccurrence_in?: Maybe<Array<Scalars['Int']>>;
  perThousandOccurrence_lt?: Maybe<Scalars['Int']>;
  perThousandOccurrence_lte?: Maybe<Scalars['Int']>;
  perThousandOccurrence_not?: Maybe<Scalars['Int']>;
  perThousandOccurrence_not_in?: Maybe<Array<Scalars['Int']>>;
  percentOccurrence?: Maybe<_EditableStatementFilter>;
  percentOccurrence_in?: Maybe<_EditableStatementFilter>;
  percentOccurrence_not?: Maybe<_EditableStatementFilter>;
  percentOccurrence_not_in?: Maybe<_EditableStatementFilter>;
  totalSamples?: Maybe<_EditableIntFilter>;
  totalSamples_in?: Maybe<_EditableIntFilter>;
  totalSamples_not?: Maybe<_EditableIntFilter>;
  totalSamples_not_in?: Maybe<_EditableIntFilter>;
};

export enum _OncoTreeOccurrenceOrdering {
  DiseaseAsc = 'disease_asc',
  DiseaseDesc = 'disease_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  OncoTreeCodeAsc = 'oncoTreeCode_asc',
  OncoTreeCodeDesc = 'oncoTreeCode_desc',
  PerThousandOccurrenceAsc = 'perThousandOccurrence_asc',
  PerThousandOccurrenceDesc = 'perThousandOccurrence_desc'
}

export type _OntologicalDiseaseFilter = {
  AND?: Maybe<Array<_OntologicalDiseaseFilter>>;
  OR?: Maybe<Array<_OntologicalDiseaseFilter>>;
  description?: Maybe<_EditableStatementFilter>;
  description_in?: Maybe<_EditableStatementFilter>;
  description_not?: Maybe<_EditableStatementFilter>;
  description_not_in?: Maybe<_EditableStatementFilter>;
  doDiseases?: Maybe<_EditableDoDiseaseListFilter>;
  doDiseases_in?: Maybe<_EditableDoDiseaseListFilter>;
  doDiseases_not?: Maybe<_EditableDoDiseaseListFilter>;
  doDiseases_not_in?: Maybe<_EditableDoDiseaseListFilter>;
  goDiseases?: Maybe<_EditableGoDiseaseListFilter>;
  goDiseases_in?: Maybe<_EditableGoDiseaseListFilter>;
  goDiseases_not?: Maybe<_EditableGoDiseaseListFilter>;
  goDiseases_not_in?: Maybe<_EditableGoDiseaseListFilter>;
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
  jaxDiseases?: Maybe<_EditableJaxDiseaseListFilter>;
  jaxDiseases_in?: Maybe<_EditableJaxDiseaseListFilter>;
  jaxDiseases_not?: Maybe<_EditableJaxDiseaseListFilter>;
  jaxDiseases_not_in?: Maybe<_EditableJaxDiseaseListFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  oncoTreeDiseases?: Maybe<_EditableOncoTreeDiseaseListFilter>;
  oncoTreeDiseases_in?: Maybe<_EditableOncoTreeDiseaseListFilter>;
  oncoTreeDiseases_not?: Maybe<_EditableOncoTreeDiseaseListFilter>;
  oncoTreeDiseases_not_in?: Maybe<_EditableOncoTreeDiseaseListFilter>;
  synonyms?: Maybe<_EditableStringListFilter>;
  synonyms_in?: Maybe<_EditableStringListFilter>;
  synonyms_not?: Maybe<_EditableStringListFilter>;
  synonyms_not_in?: Maybe<_EditableStringListFilter>;
  xrefs?: Maybe<_EditableXRefListFilter>;
  xrefs_in?: Maybe<_EditableXRefListFilter>;
  xrefs_not?: Maybe<_EditableXRefListFilter>;
  xrefs_not_in?: Maybe<_EditableXRefListFilter>;
};

export enum _OntologicalDiseaseOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _OutcomeFilter = {
  AND?: Maybe<Array<_OutcomeFilter>>;
  ConfidenceIntervalHi?: Maybe<Scalars['Float']>;
  ConfidenceIntervalHi_gt?: Maybe<Scalars['Float']>;
  ConfidenceIntervalHi_gte?: Maybe<Scalars['Float']>;
  ConfidenceIntervalHi_in?: Maybe<Array<Scalars['Float']>>;
  ConfidenceIntervalHi_lt?: Maybe<Scalars['Float']>;
  ConfidenceIntervalHi_lte?: Maybe<Scalars['Float']>;
  ConfidenceIntervalHi_not?: Maybe<Scalars['Float']>;
  ConfidenceIntervalHi_not_in?: Maybe<Array<Scalars['Float']>>;
  ConfidenceIntervalLo?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLo_gt?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLo_gte?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLo_in?: Maybe<Array<Scalars['Float']>>;
  ConfidenceIntervalLo_lt?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLo_lte?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLo_not?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLo_not_in?: Maybe<Array<Scalars['Float']>>;
  ConfidenceIntervalType?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_contains?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_ends_with?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_gt?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_gte?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_in?: Maybe<Array<Scalars['String']>>;
  ConfidenceIntervalType_lt?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_lte?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_not?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_not_contains?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_not_ends_with?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_not_in?: Maybe<Array<Scalars['String']>>;
  ConfidenceIntervalType_not_starts_with?: Maybe<Scalars['String']>;
  ConfidenceIntervalType_starts_with?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<_OutcomeFilter>>;
  clinicalCharacteristics?: Maybe<Scalars['String']>;
  clinicalCharacteristics_contains?: Maybe<Scalars['String']>;
  clinicalCharacteristics_ends_with?: Maybe<Scalars['String']>;
  clinicalCharacteristics_gt?: Maybe<Scalars['String']>;
  clinicalCharacteristics_gte?: Maybe<Scalars['String']>;
  clinicalCharacteristics_in?: Maybe<Array<Scalars['String']>>;
  clinicalCharacteristics_lt?: Maybe<Scalars['String']>;
  clinicalCharacteristics_lte?: Maybe<Scalars['String']>;
  clinicalCharacteristics_not?: Maybe<Scalars['String']>;
  clinicalCharacteristics_not_contains?: Maybe<Scalars['String']>;
  clinicalCharacteristics_not_ends_with?: Maybe<Scalars['String']>;
  clinicalCharacteristics_not_in?: Maybe<Array<Scalars['String']>>;
  clinicalCharacteristics_not_starts_with?: Maybe<Scalars['String']>;
  clinicalCharacteristics_starts_with?: Maybe<Scalars['String']>;
  dose?: Maybe<Scalars['Int']>;
  doseUnit?: Maybe<Scalars['String']>;
  doseUnit_contains?: Maybe<Scalars['String']>;
  doseUnit_ends_with?: Maybe<Scalars['String']>;
  doseUnit_gt?: Maybe<Scalars['String']>;
  doseUnit_gte?: Maybe<Scalars['String']>;
  doseUnit_in?: Maybe<Array<Scalars['String']>>;
  doseUnit_lt?: Maybe<Scalars['String']>;
  doseUnit_lte?: Maybe<Scalars['String']>;
  doseUnit_not?: Maybe<Scalars['String']>;
  doseUnit_not_contains?: Maybe<Scalars['String']>;
  doseUnit_not_ends_with?: Maybe<Scalars['String']>;
  doseUnit_not_in?: Maybe<Array<Scalars['String']>>;
  doseUnit_not_starts_with?: Maybe<Scalars['String']>;
  doseUnit_starts_with?: Maybe<Scalars['String']>;
  dose_gt?: Maybe<Scalars['Int']>;
  dose_gte?: Maybe<Scalars['Int']>;
  dose_in?: Maybe<Array<Scalars['Int']>>;
  dose_lt?: Maybe<Scalars['Int']>;
  dose_lte?: Maybe<Scalars['Int']>;
  dose_not?: Maybe<Scalars['Int']>;
  dose_not_in?: Maybe<Array<Scalars['Int']>>;
  endpoint?: Maybe<EvidenceEndpoint>;
  endpoint_in?: Maybe<Array<EvidenceEndpoint>>;
  endpoint_not?: Maybe<EvidenceEndpoint>;
  endpoint_not_in?: Maybe<Array<EvidenceEndpoint>>;
  evidences?: Maybe<_EvidenceFilter>;
  evidences_every?: Maybe<_EvidenceFilter>;
  evidences_in?: Maybe<_EvidenceFilter>;
  evidences_none?: Maybe<_EvidenceFilter>;
  evidences_not?: Maybe<_EvidenceFilter>;
  evidences_not_in?: Maybe<_EvidenceFilter>;
  evidences_single?: Maybe<_EvidenceFilter>;
  evidences_some?: Maybe<_EvidenceFilter>;
  groupSize?: Maybe<Scalars['Int']>;
  groupSize_gt?: Maybe<Scalars['Int']>;
  groupSize_gte?: Maybe<Scalars['Int']>;
  groupSize_in?: Maybe<Array<Scalars['Int']>>;
  groupSize_lt?: Maybe<Scalars['Int']>;
  groupSize_lte?: Maybe<Scalars['Int']>;
  groupSize_not?: Maybe<Scalars['Int']>;
  groupSize_not_in?: Maybe<Array<Scalars['Int']>>;
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
  notes?: Maybe<Scalars['String']>;
  notes_contains?: Maybe<Scalars['String']>;
  notes_ends_with?: Maybe<Scalars['String']>;
  notes_gt?: Maybe<Scalars['String']>;
  notes_gte?: Maybe<Scalars['String']>;
  notes_in?: Maybe<Array<Scalars['String']>>;
  notes_lt?: Maybe<Scalars['String']>;
  notes_lte?: Maybe<Scalars['String']>;
  notes_not?: Maybe<Scalars['String']>;
  notes_not_contains?: Maybe<Scalars['String']>;
  notes_not_ends_with?: Maybe<Scalars['String']>;
  notes_not_in?: Maybe<Array<Scalars['String']>>;
  notes_not_starts_with?: Maybe<Scalars['String']>;
  notes_starts_with?: Maybe<Scalars['String']>;
  observation?: Maybe<Scalars['String']>;
  observationMethod?: Maybe<Scalars['String']>;
  observationMethod_contains?: Maybe<Scalars['String']>;
  observationMethod_ends_with?: Maybe<Scalars['String']>;
  observationMethod_gt?: Maybe<Scalars['String']>;
  observationMethod_gte?: Maybe<Scalars['String']>;
  observationMethod_in?: Maybe<Array<Scalars['String']>>;
  observationMethod_lt?: Maybe<Scalars['String']>;
  observationMethod_lte?: Maybe<Scalars['String']>;
  observationMethod_not?: Maybe<Scalars['String']>;
  observationMethod_not_contains?: Maybe<Scalars['String']>;
  observationMethod_not_ends_with?: Maybe<Scalars['String']>;
  observationMethod_not_in?: Maybe<Array<Scalars['String']>>;
  observationMethod_not_starts_with?: Maybe<Scalars['String']>;
  observationMethod_starts_with?: Maybe<Scalars['String']>;
  observation_contains?: Maybe<Scalars['String']>;
  observation_ends_with?: Maybe<Scalars['String']>;
  observation_gt?: Maybe<Scalars['String']>;
  observation_gte?: Maybe<Scalars['String']>;
  observation_in?: Maybe<Array<Scalars['String']>>;
  observation_lt?: Maybe<Scalars['String']>;
  observation_lte?: Maybe<Scalars['String']>;
  observation_not?: Maybe<Scalars['String']>;
  observation_not_contains?: Maybe<Scalars['String']>;
  observation_not_ends_with?: Maybe<Scalars['String']>;
  observation_not_in?: Maybe<Array<Scalars['String']>>;
  observation_not_starts_with?: Maybe<Scalars['String']>;
  observation_starts_with?: Maybe<Scalars['String']>;
  outcome?: Maybe<Scalars['Float']>;
  outcomeRangeMax?: Maybe<Scalars['Float']>;
  outcomeRangeMax_gt?: Maybe<Scalars['Float']>;
  outcomeRangeMax_gte?: Maybe<Scalars['Float']>;
  outcomeRangeMax_in?: Maybe<Array<Scalars['Float']>>;
  outcomeRangeMax_lt?: Maybe<Scalars['Float']>;
  outcomeRangeMax_lte?: Maybe<Scalars['Float']>;
  outcomeRangeMax_not?: Maybe<Scalars['Float']>;
  outcomeRangeMax_not_in?: Maybe<Array<Scalars['Float']>>;
  outcomeRangeMin?: Maybe<Scalars['Float']>;
  outcomeRangeMin_gt?: Maybe<Scalars['Float']>;
  outcomeRangeMin_gte?: Maybe<Scalars['Float']>;
  outcomeRangeMin_in?: Maybe<Array<Scalars['Float']>>;
  outcomeRangeMin_lt?: Maybe<Scalars['Float']>;
  outcomeRangeMin_lte?: Maybe<Scalars['Float']>;
  outcomeRangeMin_not?: Maybe<Scalars['Float']>;
  outcomeRangeMin_not_in?: Maybe<Array<Scalars['Float']>>;
  outcomeUnit?: Maybe<Scalars['String']>;
  outcomeUnit_contains?: Maybe<Scalars['String']>;
  outcomeUnit_ends_with?: Maybe<Scalars['String']>;
  outcomeUnit_gt?: Maybe<Scalars['String']>;
  outcomeUnit_gte?: Maybe<Scalars['String']>;
  outcomeUnit_in?: Maybe<Array<Scalars['String']>>;
  outcomeUnit_lt?: Maybe<Scalars['String']>;
  outcomeUnit_lte?: Maybe<Scalars['String']>;
  outcomeUnit_not?: Maybe<Scalars['String']>;
  outcomeUnit_not_contains?: Maybe<Scalars['String']>;
  outcomeUnit_not_ends_with?: Maybe<Scalars['String']>;
  outcomeUnit_not_in?: Maybe<Array<Scalars['String']>>;
  outcomeUnit_not_starts_with?: Maybe<Scalars['String']>;
  outcomeUnit_starts_with?: Maybe<Scalars['String']>;
  outcome_gt?: Maybe<Scalars['Float']>;
  outcome_gte?: Maybe<Scalars['Float']>;
  outcome_in?: Maybe<Array<Scalars['Float']>>;
  outcome_lt?: Maybe<Scalars['Float']>;
  outcome_lte?: Maybe<Scalars['Float']>;
  outcome_not?: Maybe<Scalars['Float']>;
  outcome_not_in?: Maybe<Array<Scalars['Float']>>;
  treatmentGroup?: Maybe<Scalars['String']>;
  treatmentGroup_contains?: Maybe<Scalars['String']>;
  treatmentGroup_ends_with?: Maybe<Scalars['String']>;
  treatmentGroup_gt?: Maybe<Scalars['String']>;
  treatmentGroup_gte?: Maybe<Scalars['String']>;
  treatmentGroup_in?: Maybe<Array<Scalars['String']>>;
  treatmentGroup_lt?: Maybe<Scalars['String']>;
  treatmentGroup_lte?: Maybe<Scalars['String']>;
  treatmentGroup_not?: Maybe<Scalars['String']>;
  treatmentGroup_not_contains?: Maybe<Scalars['String']>;
  treatmentGroup_not_ends_with?: Maybe<Scalars['String']>;
  treatmentGroup_not_in?: Maybe<Array<Scalars['String']>>;
  treatmentGroup_not_starts_with?: Maybe<Scalars['String']>;
  treatmentGroup_starts_with?: Maybe<Scalars['String']>;
};

export enum _OutcomeOrdering {
  ConfidenceIntervalHiAsc = 'ConfidenceIntervalHi_asc',
  ConfidenceIntervalHiDesc = 'ConfidenceIntervalHi_desc',
  ConfidenceIntervalLoAsc = 'ConfidenceIntervalLo_asc',
  ConfidenceIntervalLoDesc = 'ConfidenceIntervalLo_desc',
  ConfidenceIntervalTypeAsc = 'ConfidenceIntervalType_asc',
  ConfidenceIntervalTypeDesc = 'ConfidenceIntervalType_desc',
  ClinicalCharacteristicsAsc = 'clinicalCharacteristics_asc',
  ClinicalCharacteristicsDesc = 'clinicalCharacteristics_desc',
  DoseUnitAsc = 'doseUnit_asc',
  DoseUnitDesc = 'doseUnit_desc',
  DoseAsc = 'dose_asc',
  DoseDesc = 'dose_desc',
  EndpointAsc = 'endpoint_asc',
  EndpointDesc = 'endpoint_desc',
  GroupSizeAsc = 'groupSize_asc',
  GroupSizeDesc = 'groupSize_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NotesAsc = 'notes_asc',
  NotesDesc = 'notes_desc',
  ObservationMethodAsc = 'observationMethod_asc',
  ObservationMethodDesc = 'observationMethod_desc',
  ObservationAsc = 'observation_asc',
  ObservationDesc = 'observation_desc',
  OutcomeRangeMaxAsc = 'outcomeRangeMax_asc',
  OutcomeRangeMaxDesc = 'outcomeRangeMax_desc',
  OutcomeRangeMinAsc = 'outcomeRangeMin_asc',
  OutcomeRangeMinDesc = 'outcomeRangeMin_desc',
  OutcomeUnitAsc = 'outcomeUnit_asc',
  OutcomeUnitDesc = 'outcomeUnit_desc',
  OutcomeAsc = 'outcome_asc',
  OutcomeDesc = 'outcome_desc',
  TreatmentGroupAsc = 'treatmentGroup_asc',
  TreatmentGroupDesc = 'treatmentGroup_desc'
}

export type _ProteinExpressionMarkerFilter = {
  AND?: Maybe<Array<_ProteinExpressionMarkerFilter>>;
  IHCAssay?: Maybe<_IhcAssayFilter>;
  IHCAssay_in?: Maybe<_IhcAssayFilter>;
  IHCAssay_not?: Maybe<_IhcAssayFilter>;
  IHCAssay_not_in?: Maybe<_IhcAssayFilter>;
  OR?: Maybe<Array<_ProteinExpressionMarkerFilter>>;
  RNASeqAssay?: Maybe<_RnaSeqAssayFilter>;
  RNASeqAssay_in?: Maybe<_RnaSeqAssayFilter>;
  RNASeqAssay_not?: Maybe<_RnaSeqAssayFilter>;
  RNASeqAssay_not_in?: Maybe<_RnaSeqAssayFilter>;
  assay?: Maybe<_ProteinLevelAssayFilter>;
  assay_in?: Maybe<_ProteinLevelAssayFilter>;
  assay_not?: Maybe<_ProteinLevelAssayFilter>;
  assay_not_in?: Maybe<_ProteinLevelAssayFilter>;
  gene?: Maybe<_OmniGeneFilter>;
  gene_in?: Maybe<_OmniGeneFilter>;
  gene_not?: Maybe<_OmniGeneFilter>;
  gene_not_in?: Maybe<_OmniGeneFilter>;
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
  immuneCycleRoles?: Maybe<_EditableImmuneCycleRoleFilter>;
  immuneCycleRoles_every?: Maybe<_EditableImmuneCycleRoleFilter>;
  immuneCycleRoles_in?: Maybe<_EditableImmuneCycleRoleFilter>;
  immuneCycleRoles_none?: Maybe<_EditableImmuneCycleRoleFilter>;
  immuneCycleRoles_not?: Maybe<_EditableImmuneCycleRoleFilter>;
  immuneCycleRoles_not_in?: Maybe<_EditableImmuneCycleRoleFilter>;
  immuneCycleRoles_single?: Maybe<_EditableImmuneCycleRoleFilter>;
  immuneCycleRoles_some?: Maybe<_EditableImmuneCycleRoleFilter>;
  immuneFunctions?: Maybe<_EditableImmuneFunctionFilter>;
  immuneFunctions_every?: Maybe<_EditableImmuneFunctionFilter>;
  immuneFunctions_in?: Maybe<_EditableImmuneFunctionFilter>;
  immuneFunctions_none?: Maybe<_EditableImmuneFunctionFilter>;
  immuneFunctions_not?: Maybe<_EditableImmuneFunctionFilter>;
  immuneFunctions_not_in?: Maybe<_EditableImmuneFunctionFilter>;
  immuneFunctions_single?: Maybe<_EditableImmuneFunctionFilter>;
  immuneFunctions_some?: Maybe<_EditableImmuneFunctionFilter>;
  immunePhenotypes?: Maybe<_EditableImmunePhenotypeFilter>;
  immunePhenotypes_every?: Maybe<_EditableImmunePhenotypeFilter>;
  immunePhenotypes_in?: Maybe<_EditableImmunePhenotypeFilter>;
  immunePhenotypes_none?: Maybe<_EditableImmunePhenotypeFilter>;
  immunePhenotypes_not?: Maybe<_EditableImmunePhenotypeFilter>;
  immunePhenotypes_not_in?: Maybe<_EditableImmunePhenotypeFilter>;
  immunePhenotypes_single?: Maybe<_EditableImmunePhenotypeFilter>;
  immunePhenotypes_some?: Maybe<_EditableImmunePhenotypeFilter>;
  method?: Maybe<_EditableStatementFilter>;
  method_in?: Maybe<_EditableStatementFilter>;
  method_not?: Maybe<_EditableStatementFilter>;
  method_not_in?: Maybe<_EditableStatementFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  resultString?: Maybe<_EditableStatementFilter>;
  resultString_in?: Maybe<_EditableStatementFilter>;
  resultString_not?: Maybe<_EditableStatementFilter>;
  resultString_not_in?: Maybe<_EditableStatementFilter>;
  synonyms?: Maybe<_EditableStringListFilter>;
  synonyms_in?: Maybe<_EditableStringListFilter>;
  synonyms_not?: Maybe<_EditableStringListFilter>;
  synonyms_not_in?: Maybe<_EditableStringListFilter>;
};

export enum _ProteinExpressionMarkerOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _ProteinLevelAssayFilter = {
  AND?: Maybe<Array<_ProteinLevelAssayFilter>>;
  OR?: Maybe<Array<_ProteinLevelAssayFilter>>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _ProteinLevelAssayOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
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
  statementsReferenced?: Maybe<_EditableObjectFilter>;
  statementsReferenced_every?: Maybe<_EditableObjectFilter>;
  statementsReferenced_in?: Maybe<_EditableObjectFilter>;
  statementsReferenced_none?: Maybe<_EditableObjectFilter>;
  statementsReferenced_not?: Maybe<_EditableObjectFilter>;
  statementsReferenced_not_in?: Maybe<_EditableObjectFilter>;
  statementsReferenced_single?: Maybe<_EditableObjectFilter>;
  statementsReferenced_some?: Maybe<_EditableObjectFilter>;
};

export enum _ReferenceOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  ShortReferenceAsc = 'shortReference_asc',
  ShortReferenceDesc = 'shortReference_desc'
}

export type _RnaSeqAssayFilter = {
  AND?: Maybe<Array<_RnaSeqAssayFilter>>;
  OR?: Maybe<Array<_RnaSeqAssayFilter>>;
  comparator?: Maybe<_EditableAssayComparatorFilter>;
  comparator_in?: Maybe<_EditableAssayComparatorFilter>;
  comparator_not?: Maybe<_EditableAssayComparatorFilter>;
  comparator_not_in?: Maybe<_EditableAssayComparatorFilter>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  proteinExpressionMarkers?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_every?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_in?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_none?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_not?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_not_in?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_single?: Maybe<_ProteinExpressionMarkerFilter>;
  proteinExpressionMarkers_some?: Maybe<_ProteinExpressionMarkerFilter>;
  resultMax?: Maybe<_EditableFloatFilter>;
  resultMax_in?: Maybe<_EditableFloatFilter>;
  resultMax_not?: Maybe<_EditableFloatFilter>;
  resultMax_not_in?: Maybe<_EditableFloatFilter>;
  resultMin?: Maybe<_EditableFloatFilter>;
  resultMin_in?: Maybe<_EditableFloatFilter>;
  resultMin_not?: Maybe<_EditableFloatFilter>;
  resultMin_not_in?: Maybe<_EditableFloatFilter>;
  resultType?: Maybe<RnaSeqResultType>;
  resultType_in?: Maybe<Array<RnaSeqResultType>>;
  resultType_not?: Maybe<RnaSeqResultType>;
  resultType_not_in?: Maybe<Array<RnaSeqResultType>>;
};

export enum _RnaSeqAssayOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  ResultTypeAsc = 'resultType_asc',
  ResultTypeDesc = 'resultType_desc'
}

export type _RnaSeqSignatureMarkerFilter = {
  AND?: Maybe<Array<_RnaSeqSignatureMarkerFilter>>;
  OR?: Maybe<Array<_RnaSeqSignatureMarkerFilter>>;
  comparator?: Maybe<_EditableAssayComparatorFilter>;
  comparator_in?: Maybe<_EditableAssayComparatorFilter>;
  comparator_not?: Maybe<_EditableAssayComparatorFilter>;
  comparator_not_in?: Maybe<_EditableAssayComparatorFilter>;
  definition?: Maybe<_EditableStatementFilter>;
  definition_in?: Maybe<_EditableStatementFilter>;
  definition_not?: Maybe<_EditableStatementFilter>;
  definition_not_in?: Maybe<_EditableStatementFilter>;
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
  interpretations?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_every?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_in?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_none?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_not?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_not_in?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_single?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_some?: Maybe<_EditableTmbInterpretationFilter>;
  markerProfile?: Maybe<_MarkerProfileFilter>;
  markerProfile_in?: Maybe<_MarkerProfileFilter>;
  markerProfile_not?: Maybe<_MarkerProfileFilter>;
  markerProfile_not_in?: Maybe<_MarkerProfileFilter>;
  method?: Maybe<_EditableStatementFilter>;
  method_in?: Maybe<_EditableStatementFilter>;
  method_not?: Maybe<_EditableStatementFilter>;
  method_not_in?: Maybe<_EditableStatementFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  resultMax?: Maybe<_EditableFloatFilter>;
  resultMax_in?: Maybe<_EditableFloatFilter>;
  resultMax_not?: Maybe<_EditableFloatFilter>;
  resultMax_not_in?: Maybe<_EditableFloatFilter>;
  resultMin?: Maybe<_EditableFloatFilter>;
  resultMin_in?: Maybe<_EditableFloatFilter>;
  resultMin_not?: Maybe<_EditableFloatFilter>;
  resultMin_not_in?: Maybe<_EditableFloatFilter>;
  resultString?: Maybe<_EditableStatementFilter>;
  resultString_in?: Maybe<_EditableStatementFilter>;
  resultString_not?: Maybe<_EditableStatementFilter>;
  resultString_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _RnaSeqSignatureMarkerOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _TargetFilter = {
  AND?: Maybe<Array<_TargetFilter>>;
  OR?: Maybe<Array<_TargetFilter>>;
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

export enum _TargetOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc'
}

export type _TCodeFilter = {
  AND?: Maybe<Array<_TCodeFilter>>;
  OR?: Maybe<Array<_TCodeFilter>>;
  children?: Maybe<_TCodeFilter>;
  children_every?: Maybe<_TCodeFilter>;
  children_in?: Maybe<_TCodeFilter>;
  children_none?: Maybe<_TCodeFilter>;
  children_not?: Maybe<_TCodeFilter>;
  children_not_in?: Maybe<_TCodeFilter>;
  children_single?: Maybe<_TCodeFilter>;
  children_some?: Maybe<_TCodeFilter>;
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
  parents?: Maybe<_TCodeFilter>;
  parents_every?: Maybe<_TCodeFilter>;
  parents_in?: Maybe<_TCodeFilter>;
  parents_none?: Maybe<_TCodeFilter>;
  parents_not?: Maybe<_TCodeFilter>;
  parents_not_in?: Maybe<_TCodeFilter>;
  parents_single?: Maybe<_TCodeFilter>;
  parents_some?: Maybe<_TCodeFilter>;
  tcodeId?: Maybe<Scalars['String']>;
  tcodeId_contains?: Maybe<Scalars['String']>;
  tcodeId_ends_with?: Maybe<Scalars['String']>;
  tcodeId_gt?: Maybe<Scalars['String']>;
  tcodeId_gte?: Maybe<Scalars['String']>;
  tcodeId_in?: Maybe<Array<Scalars['String']>>;
  tcodeId_lt?: Maybe<Scalars['String']>;
  tcodeId_lte?: Maybe<Scalars['String']>;
  tcodeId_not?: Maybe<Scalars['String']>;
  tcodeId_not_contains?: Maybe<Scalars['String']>;
  tcodeId_not_ends_with?: Maybe<Scalars['String']>;
  tcodeId_not_in?: Maybe<Array<Scalars['String']>>;
  tcodeId_not_starts_with?: Maybe<Scalars['String']>;
  tcodeId_starts_with?: Maybe<Scalars['String']>;
  tissuePath?: Maybe<_EditableStatementFilter>;
  tissuePath_in?: Maybe<_EditableStatementFilter>;
  tissuePath_not?: Maybe<_EditableStatementFilter>;
  tissuePath_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _TCodeOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  TcodeIdAsc = 'tcodeId_asc',
  TcodeIdDesc = 'tcodeId_desc'
}

export type _TherapeuticInterventionFilter = {
  AND?: Maybe<Array<_TherapeuticInterventionFilter>>;
  OR?: Maybe<Array<_TherapeuticInterventionFilter>>;
  concurrentWith?: Maybe<_TherapeuticInterventionFilter>;
  concurrentWith_every?: Maybe<_TherapeuticInterventionFilter>;
  concurrentWith_in?: Maybe<_TherapeuticInterventionFilter>;
  concurrentWith_none?: Maybe<_TherapeuticInterventionFilter>;
  concurrentWith_not?: Maybe<_TherapeuticInterventionFilter>;
  concurrentWith_not_in?: Maybe<_TherapeuticInterventionFilter>;
  concurrentWith_single?: Maybe<_TherapeuticInterventionFilter>;
  concurrentWith_some?: Maybe<_TherapeuticInterventionFilter>;
  definition?: Maybe<_EditableStatementFilter>;
  definition_in?: Maybe<_EditableStatementFilter>;
  definition_not?: Maybe<_EditableStatementFilter>;
  definition_not_in?: Maybe<_EditableStatementFilter>;
  evidenceAssociations?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_every?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_in?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_none?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_not?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_not_in?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_single?: Maybe<_EvidenceAssociationFilter>;
  evidenceAssociations_some?: Maybe<_EvidenceAssociationFilter>;
  followedBy?: Maybe<_TherapeuticInterventionFilter>;
  followedBy_every?: Maybe<_TherapeuticInterventionFilter>;
  followedBy_in?: Maybe<_TherapeuticInterventionFilter>;
  followedBy_none?: Maybe<_TherapeuticInterventionFilter>;
  followedBy_not?: Maybe<_TherapeuticInterventionFilter>;
  followedBy_not_in?: Maybe<_TherapeuticInterventionFilter>;
  followedBy_single?: Maybe<_TherapeuticInterventionFilter>;
  followedBy_some?: Maybe<_TherapeuticInterventionFilter>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  precededBy?: Maybe<_TherapeuticInterventionFilter>;
  precededBy_every?: Maybe<_TherapeuticInterventionFilter>;
  precededBy_in?: Maybe<_TherapeuticInterventionFilter>;
  precededBy_none?: Maybe<_TherapeuticInterventionFilter>;
  precededBy_not?: Maybe<_TherapeuticInterventionFilter>;
  precededBy_not_in?: Maybe<_TherapeuticInterventionFilter>;
  precededBy_single?: Maybe<_TherapeuticInterventionFilter>;
  precededBy_some?: Maybe<_TherapeuticInterventionFilter>;
  therapy?: Maybe<_TherapyFilter>;
  therapy_in?: Maybe<_TherapyFilter>;
  therapy_not?: Maybe<_TherapyFilter>;
  therapy_not_in?: Maybe<_TherapyFilter>;
};

export enum _TherapeuticInterventionOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _TherapyComponentFilter = {
  AND?: Maybe<Array<_TherapyComponentFilter>>;
  OR?: Maybe<Array<_TherapyComponentFilter>>;
  componentOf?: Maybe<_TherapyFilter>;
  componentOf_every?: Maybe<_TherapyFilter>;
  componentOf_in?: Maybe<_TherapyFilter>;
  componentOf_none?: Maybe<_TherapyFilter>;
  componentOf_not?: Maybe<_TherapyFilter>;
  componentOf_not_in?: Maybe<_TherapyFilter>;
  componentOf_single?: Maybe<_TherapyFilter>;
  componentOf_some?: Maybe<_TherapyFilter>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _TherapyComponentOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _TherapyFilter = {
  AND?: Maybe<Array<_TherapyFilter>>;
  OR?: Maybe<Array<_TherapyFilter>>;
  componentOf?: Maybe<_TherapyFilter>;
  componentOf_every?: Maybe<_TherapyFilter>;
  componentOf_in?: Maybe<_TherapyFilter>;
  componentOf_none?: Maybe<_TherapyFilter>;
  componentOf_not?: Maybe<_TherapyFilter>;
  componentOf_not_in?: Maybe<_TherapyFilter>;
  componentOf_single?: Maybe<_TherapyFilter>;
  componentOf_some?: Maybe<_TherapyFilter>;
  components?: Maybe<_TherapyComponentFilter>;
  components_every?: Maybe<_TherapyComponentFilter>;
  components_in?: Maybe<_TherapyComponentFilter>;
  components_none?: Maybe<_TherapyComponentFilter>;
  components_not?: Maybe<_TherapyComponentFilter>;
  components_not_in?: Maybe<_TherapyComponentFilter>;
  components_single?: Maybe<_TherapyComponentFilter>;
  components_some?: Maybe<_TherapyComponentFilter>;
  conjunction?: Maybe<OmniConjunction>;
  conjunction_in?: Maybe<Array<OmniConjunction>>;
  conjunction_not?: Maybe<OmniConjunction>;
  conjunction_not_in?: Maybe<Array<OmniConjunction>>;
  definition?: Maybe<_EditableStatementFilter>;
  definition_in?: Maybe<_EditableStatementFilter>;
  definition_not?: Maybe<_EditableStatementFilter>;
  definition_not_in?: Maybe<_EditableStatementFilter>;
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
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _TherapyOrdering {
  ConjunctionAsc = 'conjunction_asc',
  ConjunctionDesc = 'conjunction_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _TmbMarkerFilter = {
  AND?: Maybe<Array<_TmbMarkerFilter>>;
  OR?: Maybe<Array<_TmbMarkerFilter>>;
  comparator?: Maybe<_EditableAssayComparatorFilter>;
  comparator_in?: Maybe<_EditableAssayComparatorFilter>;
  comparator_not?: Maybe<_EditableAssayComparatorFilter>;
  comparator_not_in?: Maybe<_EditableAssayComparatorFilter>;
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
  interpretations?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_every?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_in?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_none?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_not?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_not_in?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_single?: Maybe<_EditableTmbInterpretationFilter>;
  interpretations_some?: Maybe<_EditableTmbInterpretationFilter>;
  method?: Maybe<_EditableStatementFilter>;
  method_in?: Maybe<_EditableStatementFilter>;
  method_not?: Maybe<_EditableStatementFilter>;
  method_not_in?: Maybe<_EditableStatementFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  resultMax?: Maybe<_EditableFloatFilter>;
  resultMax_in?: Maybe<_EditableFloatFilter>;
  resultMax_not?: Maybe<_EditableFloatFilter>;
  resultMax_not_in?: Maybe<_EditableFloatFilter>;
  resultMin?: Maybe<_EditableFloatFilter>;
  resultMin_in?: Maybe<_EditableFloatFilter>;
  resultMin_not?: Maybe<_EditableFloatFilter>;
  resultMin_not_in?: Maybe<_EditableFloatFilter>;
  resultString?: Maybe<_EditableStatementFilter>;
  resultString_in?: Maybe<_EditableStatementFilter>;
  resultString_not?: Maybe<_EditableStatementFilter>;
  resultString_not_in?: Maybe<_EditableStatementFilter>;
  resultUnits?: Maybe<_EditableStatementFilter>;
  resultUnits_in?: Maybe<_EditableStatementFilter>;
  resultUnits_not?: Maybe<_EditableStatementFilter>;
  resultUnits_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _TmbMarkerOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _UniprotEntryFilter = {
  AND?: Maybe<Array<_UniprotEntryFilter>>;
  OR?: Maybe<Array<_UniprotEntryFilter>>;
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
  gene?: Maybe<_MyGeneInfoGeneFilter>;
  gene_in?: Maybe<_MyGeneInfoGeneFilter>;
  gene_not?: Maybe<_MyGeneInfoGeneFilter>;
  gene_not_in?: Maybe<_MyGeneInfoGeneFilter>;
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
  uniprotId?: Maybe<Scalars['String']>;
  uniprotId_contains?: Maybe<Scalars['String']>;
  uniprotId_ends_with?: Maybe<Scalars['String']>;
  uniprotId_gt?: Maybe<Scalars['String']>;
  uniprotId_gte?: Maybe<Scalars['String']>;
  uniprotId_in?: Maybe<Array<Scalars['String']>>;
  uniprotId_lt?: Maybe<Scalars['String']>;
  uniprotId_lte?: Maybe<Scalars['String']>;
  uniprotId_not?: Maybe<Scalars['String']>;
  uniprotId_not_contains?: Maybe<Scalars['String']>;
  uniprotId_not_ends_with?: Maybe<Scalars['String']>;
  uniprotId_not_in?: Maybe<Array<Scalars['String']>>;
  uniprotId_not_starts_with?: Maybe<Scalars['String']>;
  uniprotId_starts_with?: Maybe<Scalars['String']>;
};

export enum _UniprotEntryOrdering {
  AccessionNumberAsc = 'accessionNumber_asc',
  AccessionNumberDesc = 'accessionNumber_desc',
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  NameAsc = 'name_asc',
  NameDesc = 'name_desc',
  UniprotIdAsc = 'uniprotId_asc',
  UniprotIdDesc = 'uniprotId_desc'
}

export type _UserFilter = {
  AND?: Maybe<Array<_UserFilter>>;
  OR?: Maybe<Array<_UserFilter>>;
  editedStatements?: Maybe<_EditableObjectFilter>;
  editedStatements_every?: Maybe<_EditableObjectFilter>;
  editedStatements_in?: Maybe<_EditableObjectFilter>;
  editedStatements_none?: Maybe<_EditableObjectFilter>;
  editedStatements_not?: Maybe<_EditableObjectFilter>;
  editedStatements_not_in?: Maybe<_EditableObjectFilter>;
  editedStatements_single?: Maybe<_EditableObjectFilter>;
  editedStatements_some?: Maybe<_EditableObjectFilter>;
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

export type _VariantCnvFilter = {
  AND?: Maybe<Array<_VariantCnvFilter>>;
  OR?: Maybe<Array<_VariantCnvFilter>>;
  clinVarVariant?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_in?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_not?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_not_in?: Maybe<_ClinVarVariantFilter>;
  copyChange?: Maybe<_EditableCopyChangeFilter>;
  copyChange_in?: Maybe<_EditableCopyChangeFilter>;
  copyChange_not?: Maybe<_EditableCopyChangeFilter>;
  copyChange_not_in?: Maybe<_EditableCopyChangeFilter>;
  description?: Maybe<_EditableStatementFilter>;
  description_in?: Maybe<_EditableStatementFilter>;
  description_not?: Maybe<_EditableStatementFilter>;
  description_not_in?: Maybe<_EditableStatementFilter>;
  gene?: Maybe<_OmniGeneFilter>;
  gene_in?: Maybe<_OmniGeneFilter>;
  gene_not?: Maybe<_OmniGeneFilter>;
  gene_not_in?: Maybe<_OmniGeneFilter>;
  goVariant?: Maybe<_GoVariantFilter>;
  goVariant_in?: Maybe<_GoVariantFilter>;
  goVariant_not?: Maybe<_GoVariantFilter>;
  goVariant_not_in?: Maybe<_GoVariantFilter>;
  hotSpotVariant?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_in?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_not?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_not_in?: Maybe<_HotSpotVariantFilter>;
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
  jaxVariant?: Maybe<_JaxVariantFilter>;
  jaxVariant_in?: Maybe<_JaxVariantFilter>;
  jaxVariant_not?: Maybe<_JaxVariantFilter>;
  jaxVariant_not_in?: Maybe<_JaxVariantFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_in?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_not?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _VariantCnvOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _VariantFusionFilter = {
  AND?: Maybe<Array<_VariantFusionFilter>>;
  OR?: Maybe<Array<_VariantFusionFilter>>;
  clinVarVariant?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_in?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_not?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_not_in?: Maybe<_ClinVarVariantFilter>;
  copyChange?: Maybe<_EditableCopyChangeFilter>;
  copyChange_in?: Maybe<_EditableCopyChangeFilter>;
  copyChange_not?: Maybe<_EditableCopyChangeFilter>;
  copyChange_not_in?: Maybe<_EditableCopyChangeFilter>;
  description?: Maybe<_EditableStatementFilter>;
  description_in?: Maybe<_EditableStatementFilter>;
  description_not?: Maybe<_EditableStatementFilter>;
  description_not_in?: Maybe<_EditableStatementFilter>;
  exon3Prime?: Maybe<_EditableIntFilter>;
  exon3Prime_in?: Maybe<_EditableIntFilter>;
  exon3Prime_not?: Maybe<_EditableIntFilter>;
  exon3Prime_not_in?: Maybe<_EditableIntFilter>;
  exon5Prime?: Maybe<_EditableIntFilter>;
  exon5Prime_in?: Maybe<_EditableIntFilter>;
  exon5Prime_not?: Maybe<_EditableIntFilter>;
  exon5Prime_not_in?: Maybe<_EditableIntFilter>;
  gene?: Maybe<_OmniGeneFilter>;
  gene3Prime?: Maybe<_EditableOmniGeneReferenceFilter>;
  gene3Prime_in?: Maybe<_EditableOmniGeneReferenceFilter>;
  gene3Prime_not?: Maybe<_EditableOmniGeneReferenceFilter>;
  gene3Prime_not_in?: Maybe<_EditableOmniGeneReferenceFilter>;
  gene5Prime?: Maybe<_EditableOmniGeneReferenceFilter>;
  gene5Prime_in?: Maybe<_EditableOmniGeneReferenceFilter>;
  gene5Prime_not?: Maybe<_EditableOmniGeneReferenceFilter>;
  gene5Prime_not_in?: Maybe<_EditableOmniGeneReferenceFilter>;
  gene_in?: Maybe<_OmniGeneFilter>;
  gene_not?: Maybe<_OmniGeneFilter>;
  gene_not_in?: Maybe<_OmniGeneFilter>;
  goVariant?: Maybe<_GoVariantFilter>;
  goVariant_in?: Maybe<_GoVariantFilter>;
  goVariant_not?: Maybe<_GoVariantFilter>;
  goVariant_not_in?: Maybe<_GoVariantFilter>;
  hotSpotVariant?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_in?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_not?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_not_in?: Maybe<_HotSpotVariantFilter>;
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
  jaxVariant?: Maybe<_JaxVariantFilter>;
  jaxVariant_in?: Maybe<_JaxVariantFilter>;
  jaxVariant_not?: Maybe<_JaxVariantFilter>;
  jaxVariant_not_in?: Maybe<_JaxVariantFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_in?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_not?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_not_in?: Maybe<_EditableStatementFilter>;
};

export enum _VariantFusionOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc'
}

export type _VariantRegionFilter = {
  AND?: Maybe<Array<_VariantRegionFilter>>;
  OR?: Maybe<Array<_VariantRegionFilter>>;
  clinVarVariant?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_in?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_not?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_not_in?: Maybe<_ClinVarVariantFilter>;
  description?: Maybe<_EditableStatementFilter>;
  description_in?: Maybe<_EditableStatementFilter>;
  description_not?: Maybe<_EditableStatementFilter>;
  description_not_in?: Maybe<_EditableStatementFilter>;
  gene?: Maybe<_OmniGeneFilter>;
  gene_in?: Maybe<_OmniGeneFilter>;
  gene_not?: Maybe<_OmniGeneFilter>;
  gene_not_in?: Maybe<_OmniGeneFilter>;
  goVariant?: Maybe<_GoVariantFilter>;
  goVariant_in?: Maybe<_GoVariantFilter>;
  goVariant_not?: Maybe<_GoVariantFilter>;
  goVariant_not_in?: Maybe<_GoVariantFilter>;
  hotSpotVariant?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_in?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_not?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_not_in?: Maybe<_HotSpotVariantFilter>;
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
  indelType?: Maybe<IndelType>;
  indelType_in?: Maybe<Array<IndelType>>;
  indelType_not?: Maybe<IndelType>;
  indelType_not_in?: Maybe<Array<IndelType>>;
  isDeleterious?: Maybe<_EditableBooleanFilter>;
  isDeleterious_in?: Maybe<_EditableBooleanFilter>;
  isDeleterious_not?: Maybe<_EditableBooleanFilter>;
  isDeleterious_not_in?: Maybe<_EditableBooleanFilter>;
  isFrameshift?: Maybe<_EditableBooleanFilter>;
  isFrameshift_in?: Maybe<_EditableBooleanFilter>;
  isFrameshift_not?: Maybe<_EditableBooleanFilter>;
  isFrameshift_not_in?: Maybe<_EditableBooleanFilter>;
  isTruncating?: Maybe<_EditableBooleanFilter>;
  isTruncating_in?: Maybe<_EditableBooleanFilter>;
  isTruncating_not?: Maybe<_EditableBooleanFilter>;
  isTruncating_not_in?: Maybe<_EditableBooleanFilter>;
  jaxVariant?: Maybe<_JaxVariantFilter>;
  jaxVariant_in?: Maybe<_JaxVariantFilter>;
  jaxVariant_not?: Maybe<_JaxVariantFilter>;
  jaxVariant_not_in?: Maybe<_JaxVariantFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_in?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_not?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_not_in?: Maybe<_EditableStatementFilter>;
  proteinEffect?: Maybe<_EditableProteinEffectFilter>;
  proteinEffect_in?: Maybe<_EditableProteinEffectFilter>;
  proteinEffect_not?: Maybe<_EditableProteinEffectFilter>;
  proteinEffect_not_in?: Maybe<_EditableProteinEffectFilter>;
  regionType?: Maybe<RegionType>;
  regionType_in?: Maybe<Array<RegionType>>;
  regionType_not?: Maybe<RegionType>;
  regionType_not_in?: Maybe<Array<RegionType>>;
  regionValue?: Maybe<_EditableIntFilter>;
  regionValue_in?: Maybe<_EditableIntFilter>;
  regionValue_not?: Maybe<_EditableIntFilter>;
  regionValue_not_in?: Maybe<_EditableIntFilter>;
  variantType?: Maybe<VariantType>;
  variantType_in?: Maybe<Array<VariantType>>;
  variantType_not?: Maybe<VariantType>;
  variantType_not_in?: Maybe<Array<VariantType>>;
};

export enum _VariantRegionOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  IndelTypeAsc = 'indelType_asc',
  IndelTypeDesc = 'indelType_desc',
  RegionTypeAsc = 'regionType_asc',
  RegionTypeDesc = 'regionType_desc',
  VariantTypeAsc = 'variantType_asc',
  VariantTypeDesc = 'variantType_desc'
}

export type _VariantSnvIndelFilter = {
  AND?: Maybe<Array<_VariantSnvIndelFilter>>;
  OR?: Maybe<Array<_VariantSnvIndelFilter>>;
  cDot?: Maybe<_EditableStatementFilter>;
  cDot_in?: Maybe<_EditableStatementFilter>;
  cDot_not?: Maybe<_EditableStatementFilter>;
  cDot_not_in?: Maybe<_EditableStatementFilter>;
  clinVarVariant?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_in?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_not?: Maybe<_ClinVarVariantFilter>;
  clinVarVariant_not_in?: Maybe<_ClinVarVariantFilter>;
  description?: Maybe<_EditableStatementFilter>;
  description_in?: Maybe<_EditableStatementFilter>;
  description_not?: Maybe<_EditableStatementFilter>;
  description_not_in?: Maybe<_EditableStatementFilter>;
  exon?: Maybe<_EditableStatementFilter>;
  exon_in?: Maybe<_EditableStatementFilter>;
  exon_not?: Maybe<_EditableStatementFilter>;
  exon_not_in?: Maybe<_EditableStatementFilter>;
  gDot?: Maybe<_EditableStatementFilter>;
  gDot_in?: Maybe<_EditableStatementFilter>;
  gDot_not?: Maybe<_EditableStatementFilter>;
  gDot_not_in?: Maybe<_EditableStatementFilter>;
  gene?: Maybe<_OmniGeneFilter>;
  gene_in?: Maybe<_OmniGeneFilter>;
  gene_not?: Maybe<_OmniGeneFilter>;
  gene_not_in?: Maybe<_OmniGeneFilter>;
  goVariant?: Maybe<_GoVariantFilter>;
  goVariant_in?: Maybe<_GoVariantFilter>;
  goVariant_not?: Maybe<_GoVariantFilter>;
  goVariant_not_in?: Maybe<_GoVariantFilter>;
  hotSpotVariant?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_in?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_not?: Maybe<_HotSpotVariantFilter>;
  hotSpotVariant_not_in?: Maybe<_HotSpotVariantFilter>;
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
  indelType?: Maybe<IndelType>;
  indelType_in?: Maybe<Array<IndelType>>;
  indelType_not?: Maybe<IndelType>;
  indelType_not_in?: Maybe<Array<IndelType>>;
  jaxVariant?: Maybe<_JaxVariantFilter>;
  jaxVariant_in?: Maybe<_JaxVariantFilter>;
  jaxVariant_not?: Maybe<_JaxVariantFilter>;
  jaxVariant_not_in?: Maybe<_JaxVariantFilter>;
  name?: Maybe<_EditableStatementFilter>;
  name_in?: Maybe<_EditableStatementFilter>;
  name_not?: Maybe<_EditableStatementFilter>;
  name_not_in?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_in?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_not?: Maybe<_EditableStatementFilter>;
  nonCanonicalTranscript_not_in?: Maybe<_EditableStatementFilter>;
  pDot?: Maybe<_EditableStatementFilter>;
  pDot_in?: Maybe<_EditableStatementFilter>;
  pDot_not?: Maybe<_EditableStatementFilter>;
  pDot_not_in?: Maybe<_EditableStatementFilter>;
  proteinEffect?: Maybe<_EditableProteinEffectFilter>;
  proteinEffect_in?: Maybe<_EditableProteinEffectFilter>;
  proteinEffect_not?: Maybe<_EditableProteinEffectFilter>;
  proteinEffect_not_in?: Maybe<_EditableProteinEffectFilter>;
  variantType?: Maybe<VariantType>;
  variantType_in?: Maybe<Array<VariantType>>;
  variantType_not?: Maybe<VariantType>;
  variantType_not_in?: Maybe<Array<VariantType>>;
};

export enum _VariantSnvIndelOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  IndelTypeAsc = 'indelType_asc',
  IndelTypeDesc = 'indelType_desc',
  VariantTypeAsc = 'variantType_asc',
  VariantTypeDesc = 'variantType_desc'
}

export type _XRefFilter = {
  AND?: Maybe<Array<_XRefFilter>>;
  OR?: Maybe<Array<_XRefFilter>>;
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
  source?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['String']>;
  sourceId_contains?: Maybe<Scalars['String']>;
  sourceId_ends_with?: Maybe<Scalars['String']>;
  sourceId_gt?: Maybe<Scalars['String']>;
  sourceId_gte?: Maybe<Scalars['String']>;
  sourceId_in?: Maybe<Array<Scalars['String']>>;
  sourceId_lt?: Maybe<Scalars['String']>;
  sourceId_lte?: Maybe<Scalars['String']>;
  sourceId_not?: Maybe<Scalars['String']>;
  sourceId_not_contains?: Maybe<Scalars['String']>;
  sourceId_not_ends_with?: Maybe<Scalars['String']>;
  sourceId_not_in?: Maybe<Array<Scalars['String']>>;
  sourceId_not_starts_with?: Maybe<Scalars['String']>;
  sourceId_starts_with?: Maybe<Scalars['String']>;
  source_contains?: Maybe<Scalars['String']>;
  source_ends_with?: Maybe<Scalars['String']>;
  source_gt?: Maybe<Scalars['String']>;
  source_gte?: Maybe<Scalars['String']>;
  source_in?: Maybe<Array<Scalars['String']>>;
  source_lt?: Maybe<Scalars['String']>;
  source_lte?: Maybe<Scalars['String']>;
  source_not?: Maybe<Scalars['String']>;
  source_not_contains?: Maybe<Scalars['String']>;
  source_not_ends_with?: Maybe<Scalars['String']>;
  source_not_in?: Maybe<Array<Scalars['String']>>;
  source_not_starts_with?: Maybe<Scalars['String']>;
  source_starts_with?: Maybe<Scalars['String']>;
};

export enum _XRefOrdering {
  IdAsc = 'id_asc',
  IdDesc = 'id_desc',
  SourceIdAsc = 'sourceId_asc',
  SourceIdDesc = 'sourceId_desc',
  SourceAsc = 'source_asc',
  SourceDesc = 'source_desc'
}

export type AdverseEvent = {
   __typename?: 'AdverseEvent';
  _id?: Maybe<Scalars['Long']>;
  grade?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum AssayComparator {
  Equals = 'Equals',
  EqualsMin = 'EqualsMin',
  EqualsString = 'EqualsString',
  RangeClosed = 'RangeClosed',
  RangeClosedOpen = 'RangeClosedOpen',
  RangeOpen = 'RangeOpen',
  RangeOpenClosed = 'RangeOpenClosed'
}

export type Author = {
   __typename?: 'Author';
  _id?: Maybe<Scalars['Long']>;
  firstInitial: Scalars['String'];
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
  firstPage?: Maybe<Scalars['String']>;
  firstPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lastPage?: Maybe<Scalars['String']>;
  lastPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publicationYear?: Maybe<Scalars['String']>;
  publicationYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ClinicalTrial = {
   __typename?: 'ClinicalTrial';
  _id?: Maybe<Scalars['Long']>;
  acronym?: Maybe<Scalars['String']>;
  briefTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  officialTitle: Scalars['String'];
  references: Array<Reference>;
  resource: Scalars['String'];
  resourceId: Scalars['String'];
};


export type ClinicalTrialReferencesArgs = {
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

export type ClinVarVariant = {
   __typename?: 'ClinVarVariant';
  _id?: Maybe<Scalars['Long']>;
  cDot: Scalars['String'];
  gene: Scalars['String'];
  genomicVariant?: Maybe<GenomicVariant>;
  id: Scalars['ID'];
  pDot: Scalars['String'];
  signficanceExplanation: EditableStatement;
  significance: EditableStatement;
  variantId: Scalars['String'];
};


export type ClinVarVariantGenomicVariantArgs = {
  filter?: Maybe<_GenomicVariantFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_GenomicVariantOrdering>>>;
};


export type ClinVarVariantSignficanceExplanationArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ClinVarVariantSignificanceArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum CnvType {
  Gain = 'Gain',
  Indeterminate = 'Indeterminate',
  Loss = 'Loss',
  Unknown = 'Unknown'
}

export type DnaMarker = MarkerComponent & {
   __typename?: 'DNAMarker';
  _id?: Maybe<Scalars['Long']>;
  definition: EditableStatement;
  id: Scalars['ID'];
  markerType: DnaMarkerType;
  method: EditableStatement;
  name: EditableStatement;
  resultString: EditableStatement;
};


export type DnaMarkerDefinitionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type DnaMarkerMethodArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type DnaMarkerNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type DnaMarkerResultStringArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum DnaMarkerType {
  Karyotype = 'Karyotype',
  MicrosatelliteInstabilityLocus = 'MicrosatelliteInstabilityLocus'
}

export type DoDisease = {
   __typename?: 'DODisease';
  _id?: Maybe<Scalars['Long']>;
  children: Array<Maybe<DoDisease>>;
  definition: EditableStatement;
  doId: Scalars['String'];
  exactSynonyms?: Maybe<EditableStringList>;
  id: Scalars['ID'];
  name: EditableStatement;
  parents: Array<Maybe<DoDisease>>;
  relatedSynonyms?: Maybe<EditableStringList>;
  subsets: EditableStringList;
  xrefs: EditableXRefList;
};


export type DoDiseaseChildrenArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  doId?: Maybe<Scalars['String']>;
  doIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_DoDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DoDiseaseOrdering>>>;
};


export type DoDiseaseDefinitionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type DoDiseaseExactSynonymsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type DoDiseaseNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type DoDiseaseParentsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  doId?: Maybe<Scalars['String']>;
  doIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_DoDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DoDiseaseOrdering>>>;
};


export type DoDiseaseRelatedSynonymsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type DoDiseaseSubsetsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type DoDiseaseXrefsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableXRefListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableXRefListOrdering>>>;
};

export type DrugCategory = {
   __typename?: 'DrugCategory';
  _id?: Maybe<Scalars['Long']>;
  definition: EditableStatement;
  drugs: Array<Maybe<OmniDrug>>;
  id: Scalars['ID'];
  jaxDrugClass: Array<Maybe<JaxDrugClass>>;
  name: EditableStatement;
};


export type DrugCategoryDefinitionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type DrugCategoryDrugsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_OmniDrugFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OmniDrugOrdering>>>;
};


export type DrugCategoryJaxDrugClassArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JaxDrugClassFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JaxDrugClassOrdering>>>;
};


export type DrugCategoryNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EditableAssayComparator = EditableObject & {
   __typename?: 'EditableAssayComparator';
  _id?: Maybe<Scalars['Long']>;
  comparator: AssayComparator;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  references: Array<Maybe<Reference>>;
};


export type EditableAssayComparatorEditorArgs = {
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


export type EditableAssayComparatorReferencesArgs = {
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

export type EditableBoolean = EditableObject & {
   __typename?: 'EditableBoolean';
  _id?: Maybe<Scalars['Long']>;
  booleanValue: ExtendedBoolean;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  references: Array<Maybe<Reference>>;
};


export type EditableBooleanEditorArgs = {
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


export type EditableBooleanReferencesArgs = {
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

export type EditableCopyChange = EditableObject & {
   __typename?: 'EditableCopyChange';
  _id?: Maybe<Scalars['Long']>;
  cnvType: CnvType;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  references: Array<Maybe<Reference>>;
};


export type EditableCopyChangeEditorArgs = {
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


export type EditableCopyChangeReferencesArgs = {
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

export type EditableDoDiseaseList = EditableObject & {
   __typename?: 'EditableDODiseaseList';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  list: Array<Maybe<DoDisease>>;
  references: Array<Maybe<Reference>>;
};


export type EditableDoDiseaseListEditorArgs = {
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


export type EditableDoDiseaseListListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  doId?: Maybe<Scalars['String']>;
  doIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_DoDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DoDiseaseOrdering>>>;
};


export type EditableDoDiseaseListReferencesArgs = {
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

export type EditableFloat = EditableObject & {
   __typename?: 'EditableFloat';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  floatValue: Scalars['Float'];
  id: Scalars['ID'];
  references: Array<Maybe<Reference>>;
};


export type EditableFloatEditorArgs = {
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


export type EditableFloatReferencesArgs = {
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

export type EditableGoDiseaseList = EditableObject & {
   __typename?: 'EditableGODiseaseList';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  list: Array<Maybe<GoDisease>>;
  references: Array<Maybe<Reference>>;
};


export type EditableGoDiseaseListEditorArgs = {
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


export type EditableGoDiseaseListListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_GoDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GoDiseaseOrdering>>>;
};


export type EditableGoDiseaseListReferencesArgs = {
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

export type EditableImmuneCycleRole = EditableObject & {
   __typename?: 'EditableImmuneCycleRole';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  immuneCycleRole: ImmuneCycleRole;
  references: Array<Maybe<Reference>>;
};


export type EditableImmuneCycleRoleEditorArgs = {
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


export type EditableImmuneCycleRoleReferencesArgs = {
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

export type EditableImmuneFunction = EditableObject & {
   __typename?: 'EditableImmuneFunction';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  immuneFunction: ImmuneFunction;
  references: Array<Maybe<Reference>>;
};


export type EditableImmuneFunctionEditorArgs = {
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


export type EditableImmuneFunctionReferencesArgs = {
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

export type EditableImmunePhenotype = EditableObject & {
   __typename?: 'EditableImmunePhenotype';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  immunePhenotype: ImmunePhenotype;
  references: Array<Maybe<Reference>>;
};


export type EditableImmunePhenotypeEditorArgs = {
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


export type EditableImmunePhenotypeReferencesArgs = {
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

export type EditableInt = EditableObject & {
   __typename?: 'EditableInt';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  intValue: Scalars['Int'];
  references: Array<Maybe<Reference>>;
};


export type EditableIntEditorArgs = {
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


export type EditableIntReferencesArgs = {
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

export type EditableJaxDiseaseList = EditableObject & {
   __typename?: 'EditableJAXDiseaseList';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  list: Array<Maybe<JaxDisease>>;
  references: Array<Maybe<Reference>>;
};


export type EditableJaxDiseaseListEditorArgs = {
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


export type EditableJaxDiseaseListListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JaxDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JaxDiseaseOrdering>>>;
  source?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Maybe<Scalars['String']>>>;
  termId?: Maybe<Scalars['String']>;
  termIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type EditableJaxDiseaseListReferencesArgs = {
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

export type EditableObject = {
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  references: Array<Maybe<Reference>>;
};


export type EditableObjectEditorArgs = {
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


export type EditableObjectReferencesArgs = {
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

export type EditableOmniGeneReference = EditableObject & {
   __typename?: 'EditableOmniGeneReference';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  gene: OmniGene;
  id: Scalars['ID'];
  references: Array<Maybe<Reference>>;
};


export type EditableOmniGeneReferenceEditorArgs = {
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


export type EditableOmniGeneReferenceGeneArgs = {
  filter?: Maybe<_OmniGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OmniGeneOrdering>>>;
  panelName?: Maybe<Scalars['String']>;
  panelNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type EditableOmniGeneReferenceReferencesArgs = {
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

export type EditableOncoTreeDiseaseList = EditableObject & {
   __typename?: 'EditableOncoTreeDiseaseList';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  list: Array<Maybe<OncoTreeDisease>>;
  references: Array<Maybe<Reference>>;
};


export type EditableOncoTreeDiseaseListEditorArgs = {
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


export type EditableOncoTreeDiseaseListListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  code?: Maybe<Scalars['String']>;
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OncoTreeDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OncoTreeDiseaseOrdering>>>;
};


export type EditableOncoTreeDiseaseListReferencesArgs = {
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

export type EditableProteinEffect = EditableObject & {
   __typename?: 'EditableProteinEffect';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  proteinEffect: VariantProteinEffect;
  references: Array<Maybe<Reference>>;
};


export type EditableProteinEffectEditorArgs = {
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


export type EditableProteinEffectReferencesArgs = {
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

export type EditableStatement = EditableObject & {
   __typename?: 'EditableStatement';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
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

export type EditableStringList = EditableObject & {
   __typename?: 'EditableStringList';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  references: Array<Maybe<Reference>>;
  stringList: Array<Maybe<Scalars['String']>>;
};


export type EditableStringListEditorArgs = {
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


export type EditableStringListReferencesArgs = {
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

export type EditableTmbInterpretation = EditableObject & {
   __typename?: 'EditableTMBInterpretation';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  references: Array<Maybe<Reference>>;
  tmbInterpretation: TmbInterpretationType;
};


export type EditableTmbInterpretationEditorArgs = {
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


export type EditableTmbInterpretationReferencesArgs = {
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

export type EditableXRefList = EditableObject & {
   __typename?: 'EditableXRefList';
  _id?: Maybe<Scalars['Long']>;
  editDate: Scalars['String'];
  editor: User;
  field: Scalars['String'];
  id: Scalars['ID'];
  list: Array<Maybe<XRef>>;
  references: Array<Maybe<Reference>>;
};


export type EditableXRefListEditorArgs = {
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


export type EditableXRefListListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_XRefFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_XRefOrdering>>>;
  source?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['String']>;
  sourceIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  sources?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type EditableXRefListReferencesArgs = {
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

export type Evidence = {
   __typename?: 'Evidence';
  _id?: Maybe<Scalars['Long']>;
  adverseEvents?: Maybe<Array<Maybe<AdverseEvent>>>;
  ampCapAscoTier: Scalars['String'];
  approvalStatus: Scalars['String'];
  evidenceAssociation: Array<Maybe<EvidenceAssociation>>;
  evidenceType: EvidenceType;
  id: Scalars['ID'];
  notes: Scalars['String'];
  outcomes: Array<Maybe<Outcome>>;
  reference: LiteratureReference;
  responseType: ResponseType;
};


export type EvidenceAdverseEventsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AdverseEventFilter>;
  first?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['Int']>;
  grades?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AdverseEventOrdering>>>;
};


export type EvidenceEvidenceAssociationArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_EvidenceAssociationFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EvidenceAssociationOrdering>>>;
};


export type EvidenceOutcomesArgs = {
  ConfidenceIntervalHi?: Maybe<Scalars['Float']>;
  ConfidenceIntervalHis?: Maybe<Array<Maybe<Scalars['Float']>>>;
  ConfidenceIntervalLo?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLos?: Maybe<Array<Maybe<Scalars['Float']>>>;
  ConfidenceIntervalType?: Maybe<Scalars['String']>;
  ConfidenceIntervalTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  clinicalCharacteristics?: Maybe<Array<Maybe<Scalars['String']>>>;
  clinicalCharacteristicss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  dose?: Maybe<Scalars['Int']>;
  doseUnit?: Maybe<Scalars['String']>;
  doseUnits?: Maybe<Array<Maybe<Scalars['String']>>>;
  doses?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endpoint?: Maybe<EvidenceEndpoint>;
  endpoints?: Maybe<Array<Maybe<EvidenceEndpoint>>>;
  filter?: Maybe<_OutcomeFilter>;
  first?: Maybe<Scalars['Int']>;
  groupSize?: Maybe<Scalars['Int']>;
  groupSizes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notes?: Maybe<Scalars['String']>;
  notess?: Maybe<Array<Maybe<Scalars['String']>>>;
  observation?: Maybe<Scalars['String']>;
  observationMethod?: Maybe<Scalars['String']>;
  observationMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  observations?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OutcomeOrdering>>>;
  outcome?: Maybe<Scalars['Float']>;
  outcomeRangeMax?: Maybe<Scalars['Float']>;
  outcomeRangeMaxs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  outcomeRangeMin?: Maybe<Scalars['Float']>;
  outcomeRangeMins?: Maybe<Array<Maybe<Scalars['Float']>>>;
  outcomeUnit?: Maybe<Scalars['String']>;
  outcomeUnits?: Maybe<Array<Maybe<Scalars['String']>>>;
  outcomes?: Maybe<Array<Maybe<Scalars['Float']>>>;
  treatmentGroup?: Maybe<Scalars['String']>;
  treatmentGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type EvidenceReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  DOIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  PMID?: Maybe<Scalars['String']>;
  PMIDs?: Maybe<Array<Maybe<Scalars['String']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_LiteratureReferenceFilter>;
  firstPage?: Maybe<Scalars['String']>;
  firstPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lastPage?: Maybe<Scalars['String']>;
  lastPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publicationYear?: Maybe<Scalars['String']>;
  publicationYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EvidenceAssociation = {
   __typename?: 'EvidenceAssociation';
  _id?: Maybe<Scalars['Long']>;
  disease?: Maybe<OntologicalDisease>;
  evidences: Array<Maybe<Evidence>>;
  id: Scalars['ID'];
  marker?: Maybe<MarkerProfile>;
  name: Scalars['String'];
  therapy?: Maybe<TherapeuticIntervention>;
};


export type EvidenceAssociationDiseaseArgs = {
  filter?: Maybe<_OntologicalDiseaseFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_OntologicalDiseaseOrdering>>>;
};


export type EvidenceAssociationEvidencesArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  ampCapAscoTier?: Maybe<Scalars['String']>;
  ampCapAscoTiers?: Maybe<Array<Maybe<Scalars['String']>>>;
  approvalStatus?: Maybe<Scalars['String']>;
  approvalStatuss?: Maybe<Array<Maybe<Scalars['String']>>>;
  evidenceType?: Maybe<EvidenceType>;
  evidenceTypes?: Maybe<Array<Maybe<EvidenceType>>>;
  filter?: Maybe<_EvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notes?: Maybe<Scalars['String']>;
  notess?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EvidenceOrdering>>>;
  responseType?: Maybe<ResponseType>;
  responseTypes?: Maybe<Array<Maybe<ResponseType>>>;
};


export type EvidenceAssociationMarkerArgs = {
  conjunction?: Maybe<OmniConjunction>;
  conjunctions?: Maybe<Array<Maybe<OmniConjunction>>>;
  filter?: Maybe<_MarkerProfileFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_MarkerProfileOrdering>>>;
};


export type EvidenceAssociationTherapyArgs = {
  filter?: Maybe<_TherapeuticInterventionFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_TherapeuticInterventionOrdering>>>;
};

export enum EvidenceEndpoint {
  CompleteResponse = 'CompleteResponse',
  DiseaseControlRate = 'DiseaseControlRate',
  ObjectiveResponse = 'ObjectiveResponse',
  OverallSurvival = 'OverallSurvival',
  PartialResponse = 'PartialResponse',
  ProgressionFreeSurvival = 'ProgressionFreeSurvival',
  ProgressionFreeSurvival12Month = 'ProgressionFreeSurvival12Month',
  ProgressionFreeSurvival6Month = 'ProgressionFreeSurvival6Month',
  ResponseRate = 'ResponseRate'
}

export enum EvidenceType {
  Concensus = 'Concensus',
  Emerging = 'Emerging'
}

export enum ExtendedBoolean {
  Any = 'Any',
  False = 'False',
  True = 'True',
  Unknown = 'Unknown'
}

export type GenomicVariant = {
  _id?: Maybe<Scalars['Long']>;
  clinVarVariant?: Maybe<ClinVarVariant>;
  description: EditableStatement;
  gene: OmniGene;
  goVariant?: Maybe<GoVariant>;
  hotSpotVariant?: Maybe<HotSpotVariant>;
  id: Scalars['ID'];
  jaxVariant?: Maybe<JaxVariant>;
  name: EditableStatement;
  nonCanonicalTranscript?: Maybe<EditableStatement>;
};


export type GenomicVariantClinVarVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ClinVarVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_ClinVarVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantId?: Maybe<Scalars['String']>;
  variantIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GenomicVariantDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GenomicVariantGeneArgs = {
  filter?: Maybe<_OmniGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OmniGeneOrdering>>>;
  panelName?: Maybe<Scalars['String']>;
  panelNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GenomicVariantGoVariantArgs = {
  filter?: Maybe<_GoVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mutationType?: Maybe<Scalars['String']>;
  mutationTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_GoVariantOrdering>>>;
};


export type GenomicVariantHotSpotVariantArgs = {
  begin?: Maybe<Scalars['String']>;
  begins?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['String']>;
  ends?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_HotSpotVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_HotSpotVariantOrdering>>>;
  position?: Maybe<Scalars['Int']>;
  positions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  referenceAminoAcid?: Maybe<Scalars['String']>;
  referenceAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantAminoAcid?: Maybe<Scalars['String']>;
  variantAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GenomicVariantJaxVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_JaxVariantFilter>;
  gDot?: Maybe<Scalars['String']>;
  gDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JaxVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantType?: Maybe<Scalars['String']>;
  variantTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GenomicVariantNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GenomicVariantNonCanonicalTranscriptArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type GenomicVariantMarker = MarkerComponent & {
   __typename?: 'GenomicVariantMarker';
  _id?: Maybe<Scalars['Long']>;
  gene: OmniGene;
  id: Scalars['ID'];
  method: EditableStatement;
  name: EditableStatement;
  resultString: EditableStatement;
  variant: GenomicVariant;
};


export type GenomicVariantMarkerGeneArgs = {
  filter?: Maybe<_OmniGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OmniGeneOrdering>>>;
  panelName?: Maybe<Scalars['String']>;
  panelNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GenomicVariantMarkerMethodArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GenomicVariantMarkerNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GenomicVariantMarkerResultStringArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GenomicVariantMarkerVariantArgs = {
  filter?: Maybe<_GenomicVariantFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_GenomicVariantOrdering>>>;
};

export type GoDisease = {
   __typename?: 'GODisease';
  _id?: Maybe<Scalars['Long']>;
  children: Array<Maybe<GoDisease>>;
  definition: EditableStatement;
  goId: Scalars['String'];
  id: Scalars['ID'];
  jaxDiseases: Array<Maybe<JaxDisease>>;
  name: EditableStatement;
  parents?: Maybe<Array<Maybe<GoDisease>>>;
  synonyms: EditableStringList;
  xrefs: EditableXRefList;
};


export type GoDiseaseChildrenArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_GoDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GoDiseaseOrdering>>>;
};


export type GoDiseaseDefinitionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GoDiseaseJaxDiseasesArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JaxDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JaxDiseaseOrdering>>>;
  source?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Maybe<Scalars['String']>>>;
  termId?: Maybe<Scalars['String']>;
  termIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GoDiseaseNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GoDiseaseParentsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_GoDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GoDiseaseOrdering>>>;
};


export type GoDiseaseSynonymsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type GoDiseaseXrefsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableXRefListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableXRefListOrdering>>>;
};

export type GoVariant = {
   __typename?: 'GOVariant';
  _id?: Maybe<Scalars['Long']>;
  gene: Scalars['String'];
  genomicVariant?: Maybe<GenomicVariant>;
  goId: Scalars['String'];
  id: Scalars['ID'];
  jaxVariant?: Maybe<JaxVariant>;
  mutationType: Scalars['String'];
  name: EditableStatement;
};


export type GoVariantGenomicVariantArgs = {
  filter?: Maybe<_GenomicVariantFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_GenomicVariantOrdering>>>;
};


export type GoVariantJaxVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_JaxVariantFilter>;
  gDot?: Maybe<Scalars['String']>;
  gDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JaxVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantType?: Maybe<Scalars['String']>;
  variantTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type GoVariantNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type HotSpotVariant = {
   __typename?: 'HotSpotVariant';
  _id?: Maybe<Scalars['Long']>;
  begin: Scalars['String'];
  end: Scalars['String'];
  gene: Scalars['String'];
  genomicVariant?: Maybe<GenomicVariant>;
  id: Scalars['ID'];
  name: Scalars['String'];
  occurrences: Array<Maybe<OncoTreeOccurrence>>;
  position: Scalars['Int'];
  referenceAminoAcid: Scalars['String'];
  variantAminoAcid: Scalars['String'];
};


export type HotSpotVariantGenomicVariantArgs = {
  filter?: Maybe<_GenomicVariantFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_GenomicVariantOrdering>>>;
};


export type HotSpotVariantOccurrencesArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  disease?: Maybe<Scalars['String']>;
  diseases?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OncoTreeOccurrenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  oncoTreeCode?: Maybe<Scalars['String']>;
  oncoTreeCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OncoTreeOccurrenceOrdering>>>;
  perThousandOccurrence?: Maybe<Scalars['Int']>;
  perThousandOccurrences?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IhcAssay = ProteinLevelAssay & {
   __typename?: 'IHCAssay';
  _id?: Maybe<Scalars['Long']>;
  antibodyClone: EditableStatement;
  comparator: EditableAssayComparator;
  id: Scalars['ID'];
  name: EditableStatement;
  proteinExpressionMarkers: Array<Maybe<ProteinExpressionMarker>>;
  resultMax?: Maybe<EditableFloat>;
  resultMin: EditableFloat;
  resultString?: Maybe<EditableStatement>;
  resultUnits: EditableStatement;
};


export type IhcAssayAntibodyCloneArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IhcAssayComparatorArgs = {
  comparator?: Maybe<AssayComparator>;
  comparators?: Maybe<Array<Maybe<AssayComparator>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableAssayComparatorFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableAssayComparatorOrdering>>>;
};


export type IhcAssayNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IhcAssayProteinExpressionMarkersArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ProteinExpressionMarkerFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ProteinExpressionMarkerOrdering>>>;
};


export type IhcAssayResultMaxArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableFloatFilter>;
  floatValue?: Maybe<Scalars['Float']>;
  floatValues?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableFloatOrdering>>>;
};


export type IhcAssayResultMinArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableFloatFilter>;
  floatValue?: Maybe<Scalars['Float']>;
  floatValues?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableFloatOrdering>>>;
};


export type IhcAssayResultStringArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IhcAssayResultUnitsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum ImmuneCycleRole {
  CancerTestisAntigens = 'CancerTestisAntigens',
  KillingCancerCells = 'KillingCancerCells',
  TCellInfiltration = 'TCellInfiltration',
  TCellPriming = 'TCellPriming',
  TCellRecognition = 'TCellRecognition',
  TCellTrafficking = 'TCellTrafficking'
}

export enum ImmuneFunction {
  AntiInflammatory = 'AntiInflammatory',
  AntiTumorEffector = 'AntiTumorEffector',
  BCells = 'BCells',
  CoInhibitory = 'CoInhibitory',
  CoStimulatory = 'CoStimulatory',
  CytotoxicTCellsTRegs = 'CytotoxicTCellsTRegs',
  Immunostimulatory = 'Immunostimulatory',
  Immunosuppressive = 'Immunosuppressive',
  NkCells = 'NKCells',
  ProInflammatory = 'ProInflammatory',
  Unknown = 'Unknown'
}

export enum ImmunePhenotype {
  AntiInflammatoryResponse = 'AntiInflammatoryResponse',
  CancerTestisAntigen = 'CancerTestisAntigen',
  CheckpointBlockadeOther = 'CheckpointBlockadeOther',
  CheckpointBlockadePd1Ctla4 = 'CheckpointBlockadePD1CTLA4',
  MetabolicImmuneEscape = 'MetabolicImmuneEscape',
  MyeloidSuppression = 'MyeloidSuppression',
  OtherImmunotherapyMarkers = 'OtherImmunotherapyMarkers',
  ProInflammatoryResponse = 'ProInflammatoryResponse',
  TCellPrimed = 'TCellPrimed',
  TumorInfiltratingLymphocytes = 'TumorInfiltratingLymphocytes'
}

export enum IndelType {
  Deletion = 'Deletion',
  Duplication = 'Duplication',
  Insertion = 'Insertion',
  InsertionDeletion = 'InsertionDeletion',
  Mnv = 'MNV',
  Snv = 'SNV'
}

export type InternetReference = Reference & {
   __typename?: 'InternetReference';
  _id?: Maybe<Scalars['Long']>;
  accessedDate: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  statementsReferenced: Array<EditableObject>;
  webAddress: Scalars['String'];
};


export type InternetReferenceStatementsReferencedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableObjectFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableObjectOrdering>>>;
};

export type JaxDisease = {
   __typename?: 'JaxDisease';
  _id?: Maybe<Scalars['Long']>;
  definition: EditableStatement;
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: EditableStatement;
  source: Scalars['String'];
  termId: Scalars['String'];
};


export type JaxDiseaseDefinitionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type JaxDiseaseNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type JaxDrug = {
   __typename?: 'JaxDrug';
  _id?: Maybe<Scalars['Long']>;
  description: EditableStatement;
  drugClasses: Array<Maybe<JaxDrugClass>>;
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: EditableStatement;
  synonyms: EditableStringList;
  tradeName: EditableStatement;
};


export type JaxDrugDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type JaxDrugDrugClassesArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JaxDrugClassFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JaxDrugClassOrdering>>>;
};


export type JaxDrugNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type JaxDrugSynonymsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type JaxDrugTradeNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type JaxDrugClass = {
   __typename?: 'JaxDrugClass';
  _id?: Maybe<Scalars['Long']>;
  drugs: Array<Maybe<JaxDrug>>;
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: EditableStatement;
};


export type JaxDrugClassDrugsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JaxDrugFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JaxDrugOrdering>>>;
};


export type JaxDrugClassNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type JaxGene = {
   __typename?: 'JaxGene';
  _id?: Maybe<Scalars['Long']>;
  canonicalTranscript: Array<Maybe<EditableStatement>>;
  chromosome: Scalars['String'];
  description: EditableStatement;
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
  synonyms: EditableStringList;
};


export type JaxGeneCanonicalTranscriptArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
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


export type JaxGeneDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type JaxGeneSynonymsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export type JaxVariant = {
   __typename?: 'JaxVariant';
  _id?: Maybe<Scalars['Long']>;
  cDot: Scalars['String'];
  description: EditableStatement;
  gDot: Scalars['String'];
  gene: JaxGene;
  genomicVariant?: Maybe<GenomicVariant>;
  goVariant?: Maybe<GoVariant>;
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
  pDot: Scalars['String'];
  proteinEffect: EditableProteinEffect;
  transcript: EditableStatement;
  variantType: Scalars['String'];
};


export type JaxVariantDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type JaxVariantGeneArgs = {
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
};


export type JaxVariantGenomicVariantArgs = {
  filter?: Maybe<_GenomicVariantFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_GenomicVariantOrdering>>>;
};


export type JaxVariantGoVariantArgs = {
  filter?: Maybe<_GoVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mutationType?: Maybe<Scalars['String']>;
  mutationTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_GoVariantOrdering>>>;
};


export type JaxVariantProteinEffectArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableProteinEffectFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableProteinEffectOrdering>>>;
  proteinEffect?: Maybe<VariantProteinEffect>;
  proteinEffects?: Maybe<Array<Maybe<VariantProteinEffect>>>;
};


export type JaxVariantTranscriptArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Journal = {
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
  firstPage: Scalars['String'];
  id: Scalars['ID'];
  journal: Journal;
  lastPage: Scalars['String'];
  publicationYear: Scalars['String'];
  shortReference: Scalars['String'];
  statementsReferenced: Array<EditableObject>;
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type LiteratureReferenceAuthorsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AuthorFilter>;
  first?: Maybe<Scalars['Int']>;
  firstInitial?: Maybe<Scalars['String']>;
  firstInitials?: Maybe<Array<Maybe<Scalars['String']>>>;
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


export type LiteratureReferenceStatementsReferencedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableObjectFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableObjectOrdering>>>;
};


export type MarkerComponent = {
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  method: EditableStatement;
  name: EditableStatement;
  resultString: EditableStatement;
};


export type MarkerComponentMethodArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MarkerComponentNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MarkerComponentResultStringArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MarkerProfile = MarkerComponent & {
   __typename?: 'MarkerProfile';
  _id?: Maybe<Scalars['Long']>;
  components: Array<Maybe<MarkerComponent>>;
  conjunction: OmniConjunction;
  evidenceAssociations?: Maybe<Array<Maybe<EvidenceAssociation>>>;
  id: Scalars['ID'];
  method: EditableStatement;
  name: EditableStatement;
  resultString: EditableStatement;
};


export type MarkerProfileComponentsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_MarkerComponentFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MarkerComponentOrdering>>>;
};


export type MarkerProfileEvidenceAssociationsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_EvidenceAssociationFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EvidenceAssociationOrdering>>>;
};


export type MarkerProfileMethodArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MarkerProfileNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MarkerProfileResultStringArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MCode = {
   __typename?: 'MCode';
  _id?: Maybe<Scalars['Long']>;
  children?: Maybe<Array<Maybe<MCode>>>;
  diseasePath: EditableStatement;
  id: Scalars['ID'];
  mcodeId: Scalars['String'];
  omniDisease: Scalars['String'];
  parents?: Maybe<Array<Maybe<MCode>>>;
};


export type MCodeChildrenArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_MCodeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mcodeId?: Maybe<Scalars['String']>;
  mcodeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  omniDisease?: Maybe<Scalars['String']>;
  omniDiseases?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_MCodeOrdering>>>;
};


export type MCodeDiseasePathArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MCodeParentsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_MCodeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mcodeId?: Maybe<Scalars['String']>;
  mcodeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  omniDisease?: Maybe<Scalars['String']>;
  omniDiseases?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_MCodeOrdering>>>;
};

export type MeetingAbstractReference = Reference & {
   __typename?: 'MeetingAbstractReference';
  _id?: Maybe<Scalars['Long']>;
  abstract?: Maybe<Scalars['String']>;
  authors: Array<Author>;
  id: Scalars['ID'];
  meetingDate: Scalars['String'];
  meetingName: Scalars['String'];
  shortReference: Scalars['String'];
  statementsReferenced: Array<EditableObject>;
  title: Scalars['String'];
};


export type MeetingAbstractReferenceAuthorsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AuthorFilter>;
  first?: Maybe<Scalars['Int']>;
  firstInitial?: Maybe<Scalars['String']>;
  firstInitials?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MeetingAbstractReferenceStatementsReferencedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableObjectFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableObjectOrdering>>>;
};

export type MsiMarker = MarkerComponent & {
   __typename?: 'MSIMarker';
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  method: EditableStatement;
  name: EditableStatement;
  resultString: EditableStatement;
};


export type MsiMarkerMethodArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MsiMarkerNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MsiMarkerResultStringArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MutationType = {
   __typename?: 'MutationType';
  addAuthorReferences?: Maybe<Scalars['String']>;
  addClinVarVariantGenomicVariant?: Maybe<Scalars['String']>;
  addClinVarVariantSignficanceExplanation?: Maybe<Scalars['String']>;
  addClinVarVariantSignificance?: Maybe<Scalars['String']>;
  addClinicalTrialReferences?: Maybe<Scalars['String']>;
  addDNAMarkerDefinition?: Maybe<Scalars['String']>;
  addDNAMarkerMethod?: Maybe<Scalars['String']>;
  addDNAMarkerName?: Maybe<Scalars['String']>;
  addDNAMarkerResultString?: Maybe<Scalars['String']>;
  addDODiseaseChildren?: Maybe<Scalars['String']>;
  addDODiseaseDefinition?: Maybe<Scalars['String']>;
  addDODiseaseExactSynonyms?: Maybe<Scalars['String']>;
  addDODiseaseName?: Maybe<Scalars['String']>;
  addDODiseaseParents?: Maybe<Scalars['String']>;
  addDODiseaseRelatedSynonyms?: Maybe<Scalars['String']>;
  addDODiseaseSubsets?: Maybe<Scalars['String']>;
  addDODiseaseXrefs?: Maybe<Scalars['String']>;
  addDrugCategoryDefinition?: Maybe<Scalars['String']>;
  addDrugCategoryDrugs?: Maybe<Scalars['String']>;
  addDrugCategoryJaxDrugClass?: Maybe<Scalars['String']>;
  addDrugCategoryName?: Maybe<Scalars['String']>;
  addEditableAssayComparatorEditor?: Maybe<Scalars['String']>;
  addEditableAssayComparatorReferences?: Maybe<Scalars['String']>;
  addEditableBooleanEditor?: Maybe<Scalars['String']>;
  addEditableBooleanReferences?: Maybe<Scalars['String']>;
  addEditableCopyChangeEditor?: Maybe<Scalars['String']>;
  addEditableCopyChangeReferences?: Maybe<Scalars['String']>;
  addEditableDODiseaseListEditor?: Maybe<Scalars['String']>;
  addEditableDODiseaseListList?: Maybe<Scalars['String']>;
  addEditableDODiseaseListReferences?: Maybe<Scalars['String']>;
  addEditableFloatEditor?: Maybe<Scalars['String']>;
  addEditableFloatReferences?: Maybe<Scalars['String']>;
  addEditableGODiseaseListEditor?: Maybe<Scalars['String']>;
  addEditableGODiseaseListList?: Maybe<Scalars['String']>;
  addEditableGODiseaseListReferences?: Maybe<Scalars['String']>;
  addEditableImmuneCycleRoleEditor?: Maybe<Scalars['String']>;
  addEditableImmuneCycleRoleReferences?: Maybe<Scalars['String']>;
  addEditableImmuneFunctionEditor?: Maybe<Scalars['String']>;
  addEditableImmuneFunctionReferences?: Maybe<Scalars['String']>;
  addEditableImmunePhenotypeEditor?: Maybe<Scalars['String']>;
  addEditableImmunePhenotypeReferences?: Maybe<Scalars['String']>;
  addEditableIntEditor?: Maybe<Scalars['String']>;
  addEditableIntReferences?: Maybe<Scalars['String']>;
  addEditableJAXDiseaseListEditor?: Maybe<Scalars['String']>;
  addEditableJAXDiseaseListList?: Maybe<Scalars['String']>;
  addEditableJAXDiseaseListReferences?: Maybe<Scalars['String']>;
  addEditableObjectEditor?: Maybe<Scalars['String']>;
  addEditableObjectReferences?: Maybe<Scalars['String']>;
  addEditableOmniGeneReferenceEditor?: Maybe<Scalars['String']>;
  addEditableOmniGeneReferenceGene?: Maybe<Scalars['String']>;
  addEditableOmniGeneReferenceReferences?: Maybe<Scalars['String']>;
  addEditableOncoTreeDiseaseListEditor?: Maybe<Scalars['String']>;
  addEditableOncoTreeDiseaseListList?: Maybe<Scalars['String']>;
  addEditableOncoTreeDiseaseListReferences?: Maybe<Scalars['String']>;
  addEditableProteinEffectEditor?: Maybe<Scalars['String']>;
  addEditableProteinEffectReferences?: Maybe<Scalars['String']>;
  addEditableStatementEditor?: Maybe<Scalars['String']>;
  addEditableStatementReferences?: Maybe<Scalars['String']>;
  addEditableStringListEditor?: Maybe<Scalars['String']>;
  addEditableStringListReferences?: Maybe<Scalars['String']>;
  addEditableTMBInterpretationEditor?: Maybe<Scalars['String']>;
  addEditableTMBInterpretationReferences?: Maybe<Scalars['String']>;
  addEditableXRefListEditor?: Maybe<Scalars['String']>;
  addEditableXRefListList?: Maybe<Scalars['String']>;
  addEditableXRefListReferences?: Maybe<Scalars['String']>;
  addEvidenceAdverseEvents?: Maybe<Scalars['String']>;
  addEvidenceAssociationDisease?: Maybe<Scalars['String']>;
  addEvidenceAssociationEvidences?: Maybe<Scalars['String']>;
  addEvidenceAssociationMarker?: Maybe<Scalars['String']>;
  addEvidenceAssociationTherapy?: Maybe<Scalars['String']>;
  addEvidenceEvidenceAssociation?: Maybe<Scalars['String']>;
  addEvidenceOutcomes?: Maybe<Scalars['String']>;
  addEvidenceReference?: Maybe<Scalars['String']>;
  addGODiseaseChildren?: Maybe<Scalars['String']>;
  addGODiseaseDefinition?: Maybe<Scalars['String']>;
  addGODiseaseJaxDiseases?: Maybe<Scalars['String']>;
  addGODiseaseName?: Maybe<Scalars['String']>;
  addGODiseaseParents?: Maybe<Scalars['String']>;
  addGODiseaseSynonyms?: Maybe<Scalars['String']>;
  addGODiseaseXrefs?: Maybe<Scalars['String']>;
  addGOVariantGenomicVariant?: Maybe<Scalars['String']>;
  addGOVariantJaxVariant?: Maybe<Scalars['String']>;
  addGOVariantName?: Maybe<Scalars['String']>;
  addGenomicVariantClinVarVariant?: Maybe<Scalars['String']>;
  addGenomicVariantDescription?: Maybe<Scalars['String']>;
  addGenomicVariantGene?: Maybe<Scalars['String']>;
  addGenomicVariantGoVariant?: Maybe<Scalars['String']>;
  addGenomicVariantHotSpotVariant?: Maybe<Scalars['String']>;
  addGenomicVariantJaxVariant?: Maybe<Scalars['String']>;
  addGenomicVariantMarkerGene?: Maybe<Scalars['String']>;
  addGenomicVariantMarkerMethod?: Maybe<Scalars['String']>;
  addGenomicVariantMarkerName?: Maybe<Scalars['String']>;
  addGenomicVariantMarkerResultString?: Maybe<Scalars['String']>;
  addGenomicVariantMarkerVariant?: Maybe<Scalars['String']>;
  addGenomicVariantName?: Maybe<Scalars['String']>;
  addGenomicVariantNonCanonicalTranscript?: Maybe<Scalars['String']>;
  addHotSpotVariantGenomicVariant?: Maybe<Scalars['String']>;
  addHotSpotVariantOccurrences?: Maybe<Scalars['String']>;
  addIHCAssayAntibodyClone?: Maybe<Scalars['String']>;
  addIHCAssayComparator?: Maybe<Scalars['String']>;
  addIHCAssayName?: Maybe<Scalars['String']>;
  addIHCAssayProteinExpressionMarkers?: Maybe<Scalars['String']>;
  addIHCAssayResultMax?: Maybe<Scalars['String']>;
  addIHCAssayResultMin?: Maybe<Scalars['String']>;
  addIHCAssayResultString?: Maybe<Scalars['String']>;
  addIHCAssayResultUnits?: Maybe<Scalars['String']>;
  addInternetReferenceStatementsReferenced?: Maybe<Scalars['String']>;
  addJaxDiseaseDefinition?: Maybe<Scalars['String']>;
  addJaxDiseaseName?: Maybe<Scalars['String']>;
  addJaxDrugClassDrugs?: Maybe<Scalars['String']>;
  addJaxDrugClassName?: Maybe<Scalars['String']>;
  addJaxDrugDescription?: Maybe<Scalars['String']>;
  addJaxDrugDrugClasses?: Maybe<Scalars['String']>;
  addJaxDrugName?: Maybe<Scalars['String']>;
  addJaxDrugSynonyms?: Maybe<Scalars['String']>;
  addJaxDrugTradeName?: Maybe<Scalars['String']>;
  addJaxGeneCanonicalTranscript?: Maybe<Scalars['String']>;
  addJaxGeneDescription?: Maybe<Scalars['String']>;
  addJaxGeneSynonyms?: Maybe<Scalars['String']>;
  addJaxVariantDescription?: Maybe<Scalars['String']>;
  addJaxVariantGene?: Maybe<Scalars['String']>;
  addJaxVariantGenomicVariant?: Maybe<Scalars['String']>;
  addJaxVariantGoVariant?: Maybe<Scalars['String']>;
  addJaxVariantProteinEffect?: Maybe<Scalars['String']>;
  addJaxVariantTranscript?: Maybe<Scalars['String']>;
  addLiteratureReferenceAuthors?: Maybe<Scalars['String']>;
  addLiteratureReferenceJournal?: Maybe<Scalars['String']>;
  addLiteratureReferenceStatementsReferenced?: Maybe<Scalars['String']>;
  addMCodeChildren?: Maybe<Scalars['String']>;
  addMCodeDiseasePath?: Maybe<Scalars['String']>;
  addMCodeParents?: Maybe<Scalars['String']>;
  addMSIMarkerMethod?: Maybe<Scalars['String']>;
  addMSIMarkerName?: Maybe<Scalars['String']>;
  addMSIMarkerResultString?: Maybe<Scalars['String']>;
  addMarkerComponentMethod?: Maybe<Scalars['String']>;
  addMarkerComponentName?: Maybe<Scalars['String']>;
  addMarkerComponentResultString?: Maybe<Scalars['String']>;
  addMarkerProfileComponents?: Maybe<Scalars['String']>;
  addMarkerProfileEvidenceAssociations?: Maybe<Scalars['String']>;
  addMarkerProfileMethod?: Maybe<Scalars['String']>;
  addMarkerProfileName?: Maybe<Scalars['String']>;
  addMarkerProfileResultString?: Maybe<Scalars['String']>;
  addMeetingAbstractReferenceAuthors?: Maybe<Scalars['String']>;
  addMeetingAbstractReferenceStatementsReferenced?: Maybe<Scalars['String']>;
  addMyGeneInfoGeneDescription?: Maybe<Scalars['String']>;
  addMyGeneInfoGeneUniprotEntry?: Maybe<Scalars['String']>;
  addNCIDrugAnnotationDate?: Maybe<Scalars['String']>;
  addNCIDrugConceptCode?: Maybe<Scalars['String']>;
  addNCIDrugDefinition?: Maybe<Scalars['String']>;
  addNCIDrugDrugCategory?: Maybe<Scalars['String']>;
  addNCIDrugModulator?: Maybe<Scalars['String']>;
  addNCIDrugName?: Maybe<Scalars['String']>;
  addNCIDrugSynonyms?: Maybe<Scalars['String']>;
  addOmniDiseaseName?: Maybe<Scalars['String']>;
  addOmniDrugComponentOf?: Maybe<Scalars['String']>;
  addOmniDrugDefinition?: Maybe<Scalars['String']>;
  addOmniDrugDrugCategories?: Maybe<Scalars['String']>;
  addOmniDrugJaxDrug?: Maybe<Scalars['String']>;
  addOmniDrugName?: Maybe<Scalars['String']>;
  addOmniDrugNciDrug?: Maybe<Scalars['String']>;
  addOmniDrugSynonyms?: Maybe<Scalars['String']>;
  addOmniDrugTarget?: Maybe<Scalars['String']>;
  addOmniDrugTradeName?: Maybe<Scalars['String']>;
  addOmniGeneGeneDescription?: Maybe<Scalars['String']>;
  addOmniGeneJaxGene?: Maybe<Scalars['String']>;
  addOmniGeneMyGeneInfoGene?: Maybe<Scalars['String']>;
  addOmniGeneOncogenicCategory?: Maybe<Scalars['String']>;
  addOmniGeneSynonyms?: Maybe<Scalars['String']>;
  addOmniGeneTranscript?: Maybe<Scalars['String']>;
  addOmniGeneUniprotEntry?: Maybe<Scalars['String']>;
  addOmniGeneVariantMarkers?: Maybe<Scalars['String']>;
  addOmniGeneVariants?: Maybe<Scalars['String']>;
  addOncoTreeDiseaseChildren?: Maybe<Scalars['String']>;
  addOncoTreeDiseaseMainType?: Maybe<Scalars['String']>;
  addOncoTreeDiseaseName?: Maybe<Scalars['String']>;
  addOncoTreeDiseaseParent?: Maybe<Scalars['String']>;
  addOncoTreeDiseaseTissue?: Maybe<Scalars['String']>;
  addOncoTreeDiseaseXrefs?: Maybe<Scalars['String']>;
  addOncoTreeOccurrenceOccurrences?: Maybe<Scalars['String']>;
  addOncoTreeOccurrencePercentOccurrence?: Maybe<Scalars['String']>;
  addOncoTreeOccurrenceTotalSamples?: Maybe<Scalars['String']>;
  addOntologicalDiseaseDescription?: Maybe<Scalars['String']>;
  addOntologicalDiseaseDoDiseases?: Maybe<Scalars['String']>;
  addOntologicalDiseaseGoDiseases?: Maybe<Scalars['String']>;
  addOntologicalDiseaseJaxDiseases?: Maybe<Scalars['String']>;
  addOntologicalDiseaseName?: Maybe<Scalars['String']>;
  addOntologicalDiseaseOncoTreeDiseases?: Maybe<Scalars['String']>;
  addOntologicalDiseaseSynonyms?: Maybe<Scalars['String']>;
  addOntologicalDiseaseXrefs?: Maybe<Scalars['String']>;
  addOutcomeEvidences?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerAssay?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerGene?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerIHCAssay?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerImmuneCycleRoles?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerImmuneFunctions?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerImmunePhenotypes?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerMethod?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerName?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerRNASeqAssay?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerResultString?: Maybe<Scalars['String']>;
  addProteinExpressionMarkerSynonyms?: Maybe<Scalars['String']>;
  addProteinLevelAssayName?: Maybe<Scalars['String']>;
  addRNASeqAssayComparator?: Maybe<Scalars['String']>;
  addRNASeqAssayName?: Maybe<Scalars['String']>;
  addRNASeqAssayProteinExpressionMarkers?: Maybe<Scalars['String']>;
  addRNASeqAssayResultMax?: Maybe<Scalars['String']>;
  addRNASeqAssayResultMin?: Maybe<Scalars['String']>;
  addRNASeqSignatureMarkerComparator?: Maybe<Scalars['String']>;
  addRNASeqSignatureMarkerDefinition?: Maybe<Scalars['String']>;
  addRNASeqSignatureMarkerInterpretations?: Maybe<Scalars['String']>;
  addRNASeqSignatureMarkerMarkerProfile?: Maybe<Scalars['String']>;
  addRNASeqSignatureMarkerMethod?: Maybe<Scalars['String']>;
  addRNASeqSignatureMarkerName?: Maybe<Scalars['String']>;
  addRNASeqSignatureMarkerResultMax?: Maybe<Scalars['String']>;
  addRNASeqSignatureMarkerResultMin?: Maybe<Scalars['String']>;
  addRNASeqSignatureMarkerResultString?: Maybe<Scalars['String']>;
  addReferenceStatementsReferenced?: Maybe<Scalars['String']>;
  addTCodeChildren?: Maybe<Scalars['String']>;
  addTCodeParents?: Maybe<Scalars['String']>;
  addTCodeTissuePath?: Maybe<Scalars['String']>;
  addTMBMarkerComparator?: Maybe<Scalars['String']>;
  addTMBMarkerInterpretations?: Maybe<Scalars['String']>;
  addTMBMarkerMethod?: Maybe<Scalars['String']>;
  addTMBMarkerName?: Maybe<Scalars['String']>;
  addTMBMarkerResultMax?: Maybe<Scalars['String']>;
  addTMBMarkerResultMin?: Maybe<Scalars['String']>;
  addTMBMarkerResultString?: Maybe<Scalars['String']>;
  addTMBMarkerResultUnits?: Maybe<Scalars['String']>;
  addTherapeuticInterventionConcurrentWith?: Maybe<Scalars['String']>;
  addTherapeuticInterventionDefinition?: Maybe<Scalars['String']>;
  addTherapeuticInterventionEvidenceAssociations?: Maybe<Scalars['String']>;
  addTherapeuticInterventionFollowedBy?: Maybe<Scalars['String']>;
  addTherapeuticInterventionName?: Maybe<Scalars['String']>;
  addTherapeuticInterventionPrecededBy?: Maybe<Scalars['String']>;
  addTherapeuticInterventionTherapy?: Maybe<Scalars['String']>;
  addTherapyComponentComponentOf?: Maybe<Scalars['String']>;
  addTherapyComponentName?: Maybe<Scalars['String']>;
  addTherapyComponentOf?: Maybe<Scalars['String']>;
  addTherapyComponents?: Maybe<Scalars['String']>;
  addTherapyDefinition?: Maybe<Scalars['String']>;
  addTherapyName?: Maybe<Scalars['String']>;
  addUniprotEntryFunction?: Maybe<Scalars['String']>;
  addUniprotEntryGene?: Maybe<Scalars['String']>;
  addUserEditedStatements?: Maybe<Scalars['String']>;
  addVariantCNVClinVarVariant?: Maybe<Scalars['String']>;
  addVariantCNVCopyChange?: Maybe<Scalars['String']>;
  addVariantCNVDescription?: Maybe<Scalars['String']>;
  addVariantCNVGene?: Maybe<Scalars['String']>;
  addVariantCNVGoVariant?: Maybe<Scalars['String']>;
  addVariantCNVHotSpotVariant?: Maybe<Scalars['String']>;
  addVariantCNVJaxVariant?: Maybe<Scalars['String']>;
  addVariantCNVName?: Maybe<Scalars['String']>;
  addVariantCNVNonCanonicalTranscript?: Maybe<Scalars['String']>;
  addVariantFusionClinVarVariant?: Maybe<Scalars['String']>;
  addVariantFusionCopyChange?: Maybe<Scalars['String']>;
  addVariantFusionDescription?: Maybe<Scalars['String']>;
  addVariantFusionExon3Prime?: Maybe<Scalars['String']>;
  addVariantFusionExon5Prime?: Maybe<Scalars['String']>;
  addVariantFusionGene?: Maybe<Scalars['String']>;
  addVariantFusionGene3Prime?: Maybe<Scalars['String']>;
  addVariantFusionGene5Prime?: Maybe<Scalars['String']>;
  addVariantFusionGoVariant?: Maybe<Scalars['String']>;
  addVariantFusionHotSpotVariant?: Maybe<Scalars['String']>;
  addVariantFusionJaxVariant?: Maybe<Scalars['String']>;
  addVariantFusionName?: Maybe<Scalars['String']>;
  addVariantFusionNonCanonicalTranscript?: Maybe<Scalars['String']>;
  addVariantRegionClinVarVariant?: Maybe<Scalars['String']>;
  addVariantRegionDescription?: Maybe<Scalars['String']>;
  addVariantRegionGene?: Maybe<Scalars['String']>;
  addVariantRegionGoVariant?: Maybe<Scalars['String']>;
  addVariantRegionHotSpotVariant?: Maybe<Scalars['String']>;
  addVariantRegionIsDeleterious?: Maybe<Scalars['String']>;
  addVariantRegionIsFrameshift?: Maybe<Scalars['String']>;
  addVariantRegionIsTruncating?: Maybe<Scalars['String']>;
  addVariantRegionJaxVariant?: Maybe<Scalars['String']>;
  addVariantRegionName?: Maybe<Scalars['String']>;
  addVariantRegionNonCanonicalTranscript?: Maybe<Scalars['String']>;
  addVariantRegionProteinEffect?: Maybe<Scalars['String']>;
  addVariantRegionRegionValue?: Maybe<Scalars['String']>;
  addVariantSNVIndelCDot?: Maybe<Scalars['String']>;
  addVariantSNVIndelClinVarVariant?: Maybe<Scalars['String']>;
  addVariantSNVIndelDescription?: Maybe<Scalars['String']>;
  addVariantSNVIndelExon?: Maybe<Scalars['String']>;
  addVariantSNVIndelGDot?: Maybe<Scalars['String']>;
  addVariantSNVIndelGene?: Maybe<Scalars['String']>;
  addVariantSNVIndelGoVariant?: Maybe<Scalars['String']>;
  addVariantSNVIndelHotSpotVariant?: Maybe<Scalars['String']>;
  addVariantSNVIndelJaxVariant?: Maybe<Scalars['String']>;
  addVariantSNVIndelName?: Maybe<Scalars['String']>;
  addVariantSNVIndelNonCanonicalTranscript?: Maybe<Scalars['String']>;
  addVariantSNVIndelPDot?: Maybe<Scalars['String']>;
  addVariantSNVIndelProteinEffect?: Maybe<Scalars['String']>;
  createAdverseEvent?: Maybe<Scalars['String']>;
  createAuthor?: Maybe<Scalars['String']>;
  createClinVarVariant?: Maybe<Scalars['String']>;
  createClinicalTrial?: Maybe<Scalars['String']>;
  createDNAMarker?: Maybe<Scalars['String']>;
  createDODisease?: Maybe<Scalars['String']>;
  createDrugCategory?: Maybe<Scalars['String']>;
  createEditableAssayComparator?: Maybe<Scalars['String']>;
  createEditableBoolean?: Maybe<Scalars['String']>;
  createEditableCopyChange?: Maybe<Scalars['String']>;
  createEditableDODiseaseList?: Maybe<Scalars['String']>;
  createEditableFloat?: Maybe<Scalars['String']>;
  createEditableGODiseaseList?: Maybe<Scalars['String']>;
  createEditableImmuneCycleRole?: Maybe<Scalars['String']>;
  createEditableImmuneFunction?: Maybe<Scalars['String']>;
  createEditableImmunePhenotype?: Maybe<Scalars['String']>;
  createEditableInt?: Maybe<Scalars['String']>;
  createEditableJAXDiseaseList?: Maybe<Scalars['String']>;
  createEditableObject?: Maybe<Scalars['String']>;
  createEditableOmniGeneReference?: Maybe<Scalars['String']>;
  createEditableOncoTreeDiseaseList?: Maybe<Scalars['String']>;
  createEditableProteinEffect?: Maybe<Scalars['String']>;
  createEditableStatement?: Maybe<Scalars['String']>;
  createEditableStringList?: Maybe<Scalars['String']>;
  createEditableTMBInterpretation?: Maybe<Scalars['String']>;
  createEditableXRefList?: Maybe<Scalars['String']>;
  createEvidence?: Maybe<Scalars['String']>;
  createEvidenceAssociation?: Maybe<Scalars['String']>;
  createGODisease?: Maybe<Scalars['String']>;
  createGOVariant?: Maybe<Scalars['String']>;
  createGenomicVariant?: Maybe<Scalars['String']>;
  createGenomicVariantMarker?: Maybe<Scalars['String']>;
  createHotSpotVariant?: Maybe<Scalars['String']>;
  createIHCAssay?: Maybe<Scalars['String']>;
  createInternetReference?: Maybe<Scalars['String']>;
  createJaxDisease?: Maybe<Scalars['String']>;
  createJaxDrug?: Maybe<Scalars['String']>;
  createJaxDrugClass?: Maybe<Scalars['String']>;
  createJaxGene?: Maybe<Scalars['String']>;
  createJaxVariant?: Maybe<Scalars['String']>;
  createJournal?: Maybe<Scalars['String']>;
  createLiteratureReference?: Maybe<Scalars['String']>;
  createMCode?: Maybe<Scalars['String']>;
  createMSIMarker?: Maybe<Scalars['String']>;
  createMarkerComponent?: Maybe<Scalars['String']>;
  createMarkerProfile?: Maybe<Scalars['String']>;
  createMeetingAbstractReference?: Maybe<Scalars['String']>;
  createMyGeneInfoGene?: Maybe<Scalars['String']>;
  createNCIDrug?: Maybe<Scalars['String']>;
  createOmniDisease?: Maybe<Scalars['String']>;
  createOmniDrug?: Maybe<Scalars['String']>;
  createOmniGene?: Maybe<Scalars['String']>;
  createOncoTreeDisease?: Maybe<Scalars['String']>;
  createOncoTreeOccurrence?: Maybe<Scalars['String']>;
  createOntologicalDisease?: Maybe<Scalars['String']>;
  createOutcome?: Maybe<Scalars['String']>;
  createProteinExpressionMarker?: Maybe<Scalars['String']>;
  createProteinLevelAssay?: Maybe<Scalars['String']>;
  createRNASeqAssay?: Maybe<Scalars['String']>;
  createRNASeqSignatureMarker?: Maybe<Scalars['String']>;
  createReference?: Maybe<Scalars['String']>;
  createTCode?: Maybe<Scalars['String']>;
  createTMBMarker?: Maybe<Scalars['String']>;
  createTarget?: Maybe<Scalars['String']>;
  createTherapeuticIntervention?: Maybe<Scalars['String']>;
  createTherapy?: Maybe<Scalars['String']>;
  createTherapyComponent?: Maybe<Scalars['String']>;
  createUniprotEntry?: Maybe<Scalars['String']>;
  createUser?: Maybe<Scalars['String']>;
  createVariantCNV?: Maybe<Scalars['String']>;
  createVariantFusion?: Maybe<Scalars['String']>;
  createVariantRegion?: Maybe<Scalars['String']>;
  createVariantSNVIndel?: Maybe<Scalars['String']>;
  createXRef?: Maybe<Scalars['String']>;
  deleteAdverseEvent?: Maybe<Scalars['String']>;
  deleteAuthor?: Maybe<Scalars['String']>;
  deleteAuthorReferences?: Maybe<Scalars['String']>;
  deleteClinVarVariant?: Maybe<Scalars['String']>;
  deleteClinVarVariantGenomicVariant?: Maybe<Scalars['String']>;
  deleteClinVarVariantSignficanceExplanation?: Maybe<Scalars['String']>;
  deleteClinVarVariantSignificance?: Maybe<Scalars['String']>;
  deleteClinicalTrial?: Maybe<Scalars['String']>;
  deleteClinicalTrialReferences?: Maybe<Scalars['String']>;
  deleteDNAMarker?: Maybe<Scalars['String']>;
  deleteDNAMarkerDefinition?: Maybe<Scalars['String']>;
  deleteDNAMarkerMethod?: Maybe<Scalars['String']>;
  deleteDNAMarkerName?: Maybe<Scalars['String']>;
  deleteDNAMarkerResultString?: Maybe<Scalars['String']>;
  deleteDODisease?: Maybe<Scalars['String']>;
  deleteDODiseaseChildren?: Maybe<Scalars['String']>;
  deleteDODiseaseDefinition?: Maybe<Scalars['String']>;
  deleteDODiseaseExactSynonyms?: Maybe<Scalars['String']>;
  deleteDODiseaseName?: Maybe<Scalars['String']>;
  deleteDODiseaseParents?: Maybe<Scalars['String']>;
  deleteDODiseaseRelatedSynonyms?: Maybe<Scalars['String']>;
  deleteDODiseaseSubsets?: Maybe<Scalars['String']>;
  deleteDODiseaseXrefs?: Maybe<Scalars['String']>;
  deleteDrugCategory?: Maybe<Scalars['String']>;
  deleteDrugCategoryDefinition?: Maybe<Scalars['String']>;
  deleteDrugCategoryDrugs?: Maybe<Scalars['String']>;
  deleteDrugCategoryJaxDrugClass?: Maybe<Scalars['String']>;
  deleteDrugCategoryName?: Maybe<Scalars['String']>;
  deleteEditableAssayComparator?: Maybe<Scalars['String']>;
  deleteEditableAssayComparatorEditor?: Maybe<Scalars['String']>;
  deleteEditableAssayComparatorReferences?: Maybe<Scalars['String']>;
  deleteEditableBoolean?: Maybe<Scalars['String']>;
  deleteEditableBooleanEditor?: Maybe<Scalars['String']>;
  deleteEditableBooleanReferences?: Maybe<Scalars['String']>;
  deleteEditableCopyChange?: Maybe<Scalars['String']>;
  deleteEditableCopyChangeEditor?: Maybe<Scalars['String']>;
  deleteEditableCopyChangeReferences?: Maybe<Scalars['String']>;
  deleteEditableDODiseaseList?: Maybe<Scalars['String']>;
  deleteEditableDODiseaseListEditor?: Maybe<Scalars['String']>;
  deleteEditableDODiseaseListList?: Maybe<Scalars['String']>;
  deleteEditableDODiseaseListReferences?: Maybe<Scalars['String']>;
  deleteEditableFloat?: Maybe<Scalars['String']>;
  deleteEditableFloatEditor?: Maybe<Scalars['String']>;
  deleteEditableFloatReferences?: Maybe<Scalars['String']>;
  deleteEditableGODiseaseList?: Maybe<Scalars['String']>;
  deleteEditableGODiseaseListEditor?: Maybe<Scalars['String']>;
  deleteEditableGODiseaseListList?: Maybe<Scalars['String']>;
  deleteEditableGODiseaseListReferences?: Maybe<Scalars['String']>;
  deleteEditableImmuneCycleRole?: Maybe<Scalars['String']>;
  deleteEditableImmuneCycleRoleEditor?: Maybe<Scalars['String']>;
  deleteEditableImmuneCycleRoleReferences?: Maybe<Scalars['String']>;
  deleteEditableImmuneFunction?: Maybe<Scalars['String']>;
  deleteEditableImmuneFunctionEditor?: Maybe<Scalars['String']>;
  deleteEditableImmuneFunctionReferences?: Maybe<Scalars['String']>;
  deleteEditableImmunePhenotype?: Maybe<Scalars['String']>;
  deleteEditableImmunePhenotypeEditor?: Maybe<Scalars['String']>;
  deleteEditableImmunePhenotypeReferences?: Maybe<Scalars['String']>;
  deleteEditableInt?: Maybe<Scalars['String']>;
  deleteEditableIntEditor?: Maybe<Scalars['String']>;
  deleteEditableIntReferences?: Maybe<Scalars['String']>;
  deleteEditableJAXDiseaseList?: Maybe<Scalars['String']>;
  deleteEditableJAXDiseaseListEditor?: Maybe<Scalars['String']>;
  deleteEditableJAXDiseaseListList?: Maybe<Scalars['String']>;
  deleteEditableJAXDiseaseListReferences?: Maybe<Scalars['String']>;
  deleteEditableObject?: Maybe<Scalars['String']>;
  deleteEditableObjectEditor?: Maybe<Scalars['String']>;
  deleteEditableObjectReferences?: Maybe<Scalars['String']>;
  deleteEditableOmniGeneReference?: Maybe<Scalars['String']>;
  deleteEditableOmniGeneReferenceEditor?: Maybe<Scalars['String']>;
  deleteEditableOmniGeneReferenceGene?: Maybe<Scalars['String']>;
  deleteEditableOmniGeneReferenceReferences?: Maybe<Scalars['String']>;
  deleteEditableOncoTreeDiseaseList?: Maybe<Scalars['String']>;
  deleteEditableOncoTreeDiseaseListEditor?: Maybe<Scalars['String']>;
  deleteEditableOncoTreeDiseaseListList?: Maybe<Scalars['String']>;
  deleteEditableOncoTreeDiseaseListReferences?: Maybe<Scalars['String']>;
  deleteEditableProteinEffect?: Maybe<Scalars['String']>;
  deleteEditableProteinEffectEditor?: Maybe<Scalars['String']>;
  deleteEditableProteinEffectReferences?: Maybe<Scalars['String']>;
  deleteEditableStatement?: Maybe<Scalars['String']>;
  deleteEditableStatementEditor?: Maybe<Scalars['String']>;
  deleteEditableStatementReferences?: Maybe<Scalars['String']>;
  deleteEditableStringList?: Maybe<Scalars['String']>;
  deleteEditableStringListEditor?: Maybe<Scalars['String']>;
  deleteEditableStringListReferences?: Maybe<Scalars['String']>;
  deleteEditableTMBInterpretation?: Maybe<Scalars['String']>;
  deleteEditableTMBInterpretationEditor?: Maybe<Scalars['String']>;
  deleteEditableTMBInterpretationReferences?: Maybe<Scalars['String']>;
  deleteEditableXRefList?: Maybe<Scalars['String']>;
  deleteEditableXRefListEditor?: Maybe<Scalars['String']>;
  deleteEditableXRefListList?: Maybe<Scalars['String']>;
  deleteEditableXRefListReferences?: Maybe<Scalars['String']>;
  deleteEvidence?: Maybe<Scalars['String']>;
  deleteEvidenceAdverseEvents?: Maybe<Scalars['String']>;
  deleteEvidenceAssociation?: Maybe<Scalars['String']>;
  deleteEvidenceAssociationDisease?: Maybe<Scalars['String']>;
  deleteEvidenceAssociationEvidences?: Maybe<Scalars['String']>;
  deleteEvidenceAssociationMarker?: Maybe<Scalars['String']>;
  deleteEvidenceAssociationTherapy?: Maybe<Scalars['String']>;
  deleteEvidenceEvidenceAssociation?: Maybe<Scalars['String']>;
  deleteEvidenceOutcomes?: Maybe<Scalars['String']>;
  deleteEvidenceReference?: Maybe<Scalars['String']>;
  deleteGODisease?: Maybe<Scalars['String']>;
  deleteGODiseaseChildren?: Maybe<Scalars['String']>;
  deleteGODiseaseDefinition?: Maybe<Scalars['String']>;
  deleteGODiseaseJaxDiseases?: Maybe<Scalars['String']>;
  deleteGODiseaseName?: Maybe<Scalars['String']>;
  deleteGODiseaseParents?: Maybe<Scalars['String']>;
  deleteGODiseaseSynonyms?: Maybe<Scalars['String']>;
  deleteGODiseaseXrefs?: Maybe<Scalars['String']>;
  deleteGOVariant?: Maybe<Scalars['String']>;
  deleteGOVariantGenomicVariant?: Maybe<Scalars['String']>;
  deleteGOVariantJaxVariant?: Maybe<Scalars['String']>;
  deleteGOVariantName?: Maybe<Scalars['String']>;
  deleteGenomicVariant?: Maybe<Scalars['String']>;
  deleteGenomicVariantClinVarVariant?: Maybe<Scalars['String']>;
  deleteGenomicVariantDescription?: Maybe<Scalars['String']>;
  deleteGenomicVariantGene?: Maybe<Scalars['String']>;
  deleteGenomicVariantGoVariant?: Maybe<Scalars['String']>;
  deleteGenomicVariantHotSpotVariant?: Maybe<Scalars['String']>;
  deleteGenomicVariantJaxVariant?: Maybe<Scalars['String']>;
  deleteGenomicVariantMarker?: Maybe<Scalars['String']>;
  deleteGenomicVariantMarkerGene?: Maybe<Scalars['String']>;
  deleteGenomicVariantMarkerMethod?: Maybe<Scalars['String']>;
  deleteGenomicVariantMarkerName?: Maybe<Scalars['String']>;
  deleteGenomicVariantMarkerResultString?: Maybe<Scalars['String']>;
  deleteGenomicVariantMarkerVariant?: Maybe<Scalars['String']>;
  deleteGenomicVariantName?: Maybe<Scalars['String']>;
  deleteGenomicVariantNonCanonicalTranscript?: Maybe<Scalars['String']>;
  deleteHotSpotVariant?: Maybe<Scalars['String']>;
  deleteHotSpotVariantGenomicVariant?: Maybe<Scalars['String']>;
  deleteHotSpotVariantOccurrences?: Maybe<Scalars['String']>;
  deleteIHCAssay?: Maybe<Scalars['String']>;
  deleteIHCAssayAntibodyClone?: Maybe<Scalars['String']>;
  deleteIHCAssayComparator?: Maybe<Scalars['String']>;
  deleteIHCAssayName?: Maybe<Scalars['String']>;
  deleteIHCAssayProteinExpressionMarkers?: Maybe<Scalars['String']>;
  deleteIHCAssayResultMax?: Maybe<Scalars['String']>;
  deleteIHCAssayResultMin?: Maybe<Scalars['String']>;
  deleteIHCAssayResultString?: Maybe<Scalars['String']>;
  deleteIHCAssayResultUnits?: Maybe<Scalars['String']>;
  deleteInternetReference?: Maybe<Scalars['String']>;
  deleteInternetReferenceStatementsReferenced?: Maybe<Scalars['String']>;
  deleteJaxDisease?: Maybe<Scalars['String']>;
  deleteJaxDiseaseDefinition?: Maybe<Scalars['String']>;
  deleteJaxDiseaseName?: Maybe<Scalars['String']>;
  deleteJaxDrug?: Maybe<Scalars['String']>;
  deleteJaxDrugClass?: Maybe<Scalars['String']>;
  deleteJaxDrugClassDrugs?: Maybe<Scalars['String']>;
  deleteJaxDrugClassName?: Maybe<Scalars['String']>;
  deleteJaxDrugDescription?: Maybe<Scalars['String']>;
  deleteJaxDrugDrugClasses?: Maybe<Scalars['String']>;
  deleteJaxDrugName?: Maybe<Scalars['String']>;
  deleteJaxDrugSynonyms?: Maybe<Scalars['String']>;
  deleteJaxDrugTradeName?: Maybe<Scalars['String']>;
  deleteJaxGene?: Maybe<Scalars['String']>;
  deleteJaxGeneCanonicalTranscript?: Maybe<Scalars['String']>;
  deleteJaxGeneDescription?: Maybe<Scalars['String']>;
  deleteJaxGeneSynonyms?: Maybe<Scalars['String']>;
  deleteJaxVariant?: Maybe<Scalars['String']>;
  deleteJaxVariantDescription?: Maybe<Scalars['String']>;
  deleteJaxVariantGene?: Maybe<Scalars['String']>;
  deleteJaxVariantGenomicVariant?: Maybe<Scalars['String']>;
  deleteJaxVariantGoVariant?: Maybe<Scalars['String']>;
  deleteJaxVariantProteinEffect?: Maybe<Scalars['String']>;
  deleteJaxVariantTranscript?: Maybe<Scalars['String']>;
  deleteJournal?: Maybe<Scalars['String']>;
  deleteLiteratureReference?: Maybe<Scalars['String']>;
  deleteLiteratureReferenceAuthors?: Maybe<Scalars['String']>;
  deleteLiteratureReferenceJournal?: Maybe<Scalars['String']>;
  deleteLiteratureReferenceStatementsReferenced?: Maybe<Scalars['String']>;
  deleteMCode?: Maybe<Scalars['String']>;
  deleteMCodeChildren?: Maybe<Scalars['String']>;
  deleteMCodeDiseasePath?: Maybe<Scalars['String']>;
  deleteMCodeParents?: Maybe<Scalars['String']>;
  deleteMSIMarker?: Maybe<Scalars['String']>;
  deleteMSIMarkerMethod?: Maybe<Scalars['String']>;
  deleteMSIMarkerName?: Maybe<Scalars['String']>;
  deleteMSIMarkerResultString?: Maybe<Scalars['String']>;
  deleteMarkerComponent?: Maybe<Scalars['String']>;
  deleteMarkerComponentMethod?: Maybe<Scalars['String']>;
  deleteMarkerComponentName?: Maybe<Scalars['String']>;
  deleteMarkerComponentResultString?: Maybe<Scalars['String']>;
  deleteMarkerProfile?: Maybe<Scalars['String']>;
  deleteMarkerProfileComponents?: Maybe<Scalars['String']>;
  deleteMarkerProfileEvidenceAssociations?: Maybe<Scalars['String']>;
  deleteMarkerProfileMethod?: Maybe<Scalars['String']>;
  deleteMarkerProfileName?: Maybe<Scalars['String']>;
  deleteMarkerProfileResultString?: Maybe<Scalars['String']>;
  deleteMeetingAbstractReference?: Maybe<Scalars['String']>;
  deleteMeetingAbstractReferenceAuthors?: Maybe<Scalars['String']>;
  deleteMeetingAbstractReferenceStatementsReferenced?: Maybe<Scalars['String']>;
  deleteMyGeneInfoGene?: Maybe<Scalars['String']>;
  deleteMyGeneInfoGeneDescription?: Maybe<Scalars['String']>;
  deleteMyGeneInfoGeneUniprotEntry?: Maybe<Scalars['String']>;
  deleteNCIDrug?: Maybe<Scalars['String']>;
  deleteNCIDrugAnnotationDate?: Maybe<Scalars['String']>;
  deleteNCIDrugConceptCode?: Maybe<Scalars['String']>;
  deleteNCIDrugDefinition?: Maybe<Scalars['String']>;
  deleteNCIDrugDrugCategory?: Maybe<Scalars['String']>;
  deleteNCIDrugModulator?: Maybe<Scalars['String']>;
  deleteNCIDrugName?: Maybe<Scalars['String']>;
  deleteNCIDrugSynonyms?: Maybe<Scalars['String']>;
  deleteOmniDisease?: Maybe<Scalars['String']>;
  deleteOmniDiseaseName?: Maybe<Scalars['String']>;
  deleteOmniDrug?: Maybe<Scalars['String']>;
  deleteOmniDrugComponentOf?: Maybe<Scalars['String']>;
  deleteOmniDrugDefinition?: Maybe<Scalars['String']>;
  deleteOmniDrugDrugCategories?: Maybe<Scalars['String']>;
  deleteOmniDrugJaxDrug?: Maybe<Scalars['String']>;
  deleteOmniDrugName?: Maybe<Scalars['String']>;
  deleteOmniDrugNciDrug?: Maybe<Scalars['String']>;
  deleteOmniDrugSynonyms?: Maybe<Scalars['String']>;
  deleteOmniDrugTarget?: Maybe<Scalars['String']>;
  deleteOmniDrugTradeName?: Maybe<Scalars['String']>;
  deleteOmniGene?: Maybe<Scalars['String']>;
  deleteOmniGeneGeneDescription?: Maybe<Scalars['String']>;
  deleteOmniGeneJaxGene?: Maybe<Scalars['String']>;
  deleteOmniGeneMyGeneInfoGene?: Maybe<Scalars['String']>;
  deleteOmniGeneOncogenicCategory?: Maybe<Scalars['String']>;
  deleteOmniGeneSynonyms?: Maybe<Scalars['String']>;
  deleteOmniGeneTranscript?: Maybe<Scalars['String']>;
  deleteOmniGeneUniprotEntry?: Maybe<Scalars['String']>;
  deleteOmniGeneVariantMarkers?: Maybe<Scalars['String']>;
  deleteOmniGeneVariants?: Maybe<Scalars['String']>;
  deleteOncoTreeDisease?: Maybe<Scalars['String']>;
  deleteOncoTreeDiseaseChildren?: Maybe<Scalars['String']>;
  deleteOncoTreeDiseaseMainType?: Maybe<Scalars['String']>;
  deleteOncoTreeDiseaseName?: Maybe<Scalars['String']>;
  deleteOncoTreeDiseaseParent?: Maybe<Scalars['String']>;
  deleteOncoTreeDiseaseTissue?: Maybe<Scalars['String']>;
  deleteOncoTreeDiseaseXrefs?: Maybe<Scalars['String']>;
  deleteOncoTreeOccurrence?: Maybe<Scalars['String']>;
  deleteOncoTreeOccurrenceOccurrences?: Maybe<Scalars['String']>;
  deleteOncoTreeOccurrencePercentOccurrence?: Maybe<Scalars['String']>;
  deleteOncoTreeOccurrenceTotalSamples?: Maybe<Scalars['String']>;
  deleteOntologicalDisease?: Maybe<Scalars['String']>;
  deleteOntologicalDiseaseDescription?: Maybe<Scalars['String']>;
  deleteOntologicalDiseaseDoDiseases?: Maybe<Scalars['String']>;
  deleteOntologicalDiseaseGoDiseases?: Maybe<Scalars['String']>;
  deleteOntologicalDiseaseJaxDiseases?: Maybe<Scalars['String']>;
  deleteOntologicalDiseaseName?: Maybe<Scalars['String']>;
  deleteOntologicalDiseaseOncoTreeDiseases?: Maybe<Scalars['String']>;
  deleteOntologicalDiseaseSynonyms?: Maybe<Scalars['String']>;
  deleteOntologicalDiseaseXrefs?: Maybe<Scalars['String']>;
  deleteOutcome?: Maybe<Scalars['String']>;
  deleteOutcomeEvidences?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarker?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerAssay?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerGene?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerIHCAssay?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerImmuneCycleRoles?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerImmuneFunctions?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerImmunePhenotypes?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerMethod?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerName?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerRNASeqAssay?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerResultString?: Maybe<Scalars['String']>;
  deleteProteinExpressionMarkerSynonyms?: Maybe<Scalars['String']>;
  deleteProteinLevelAssay?: Maybe<Scalars['String']>;
  deleteProteinLevelAssayName?: Maybe<Scalars['String']>;
  deleteRNASeqAssay?: Maybe<Scalars['String']>;
  deleteRNASeqAssayComparator?: Maybe<Scalars['String']>;
  deleteRNASeqAssayName?: Maybe<Scalars['String']>;
  deleteRNASeqAssayProteinExpressionMarkers?: Maybe<Scalars['String']>;
  deleteRNASeqAssayResultMax?: Maybe<Scalars['String']>;
  deleteRNASeqAssayResultMin?: Maybe<Scalars['String']>;
  deleteRNASeqSignatureMarker?: Maybe<Scalars['String']>;
  deleteRNASeqSignatureMarkerComparator?: Maybe<Scalars['String']>;
  deleteRNASeqSignatureMarkerDefinition?: Maybe<Scalars['String']>;
  deleteRNASeqSignatureMarkerInterpretations?: Maybe<Scalars['String']>;
  deleteRNASeqSignatureMarkerMarkerProfile?: Maybe<Scalars['String']>;
  deleteRNASeqSignatureMarkerMethod?: Maybe<Scalars['String']>;
  deleteRNASeqSignatureMarkerName?: Maybe<Scalars['String']>;
  deleteRNASeqSignatureMarkerResultMax?: Maybe<Scalars['String']>;
  deleteRNASeqSignatureMarkerResultMin?: Maybe<Scalars['String']>;
  deleteRNASeqSignatureMarkerResultString?: Maybe<Scalars['String']>;
  deleteReference?: Maybe<Scalars['String']>;
  deleteReferenceStatementsReferenced?: Maybe<Scalars['String']>;
  deleteTCode?: Maybe<Scalars['String']>;
  deleteTCodeChildren?: Maybe<Scalars['String']>;
  deleteTCodeParents?: Maybe<Scalars['String']>;
  deleteTCodeTissuePath?: Maybe<Scalars['String']>;
  deleteTMBMarker?: Maybe<Scalars['String']>;
  deleteTMBMarkerComparator?: Maybe<Scalars['String']>;
  deleteTMBMarkerInterpretations?: Maybe<Scalars['String']>;
  deleteTMBMarkerMethod?: Maybe<Scalars['String']>;
  deleteTMBMarkerName?: Maybe<Scalars['String']>;
  deleteTMBMarkerResultMax?: Maybe<Scalars['String']>;
  deleteTMBMarkerResultMin?: Maybe<Scalars['String']>;
  deleteTMBMarkerResultString?: Maybe<Scalars['String']>;
  deleteTMBMarkerResultUnits?: Maybe<Scalars['String']>;
  deleteTarget?: Maybe<Scalars['String']>;
  deleteTherapeuticIntervention?: Maybe<Scalars['String']>;
  deleteTherapeuticInterventionConcurrentWith?: Maybe<Scalars['String']>;
  deleteTherapeuticInterventionDefinition?: Maybe<Scalars['String']>;
  deleteTherapeuticInterventionEvidenceAssociations?: Maybe<Scalars['String']>;
  deleteTherapeuticInterventionFollowedBy?: Maybe<Scalars['String']>;
  deleteTherapeuticInterventionName?: Maybe<Scalars['String']>;
  deleteTherapeuticInterventionPrecededBy?: Maybe<Scalars['String']>;
  deleteTherapeuticInterventionTherapy?: Maybe<Scalars['String']>;
  deleteTherapy?: Maybe<Scalars['String']>;
  deleteTherapyComponent?: Maybe<Scalars['String']>;
  deleteTherapyComponentComponentOf?: Maybe<Scalars['String']>;
  deleteTherapyComponentName?: Maybe<Scalars['String']>;
  deleteTherapyComponentOf?: Maybe<Scalars['String']>;
  deleteTherapyComponents?: Maybe<Scalars['String']>;
  deleteTherapyDefinition?: Maybe<Scalars['String']>;
  deleteTherapyName?: Maybe<Scalars['String']>;
  deleteUniprotEntry?: Maybe<Scalars['String']>;
  deleteUniprotEntryFunction?: Maybe<Scalars['String']>;
  deleteUniprotEntryGene?: Maybe<Scalars['String']>;
  deleteUser?: Maybe<Scalars['String']>;
  deleteUserEditedStatements?: Maybe<Scalars['String']>;
  deleteVariantCNV?: Maybe<Scalars['String']>;
  deleteVariantCNVClinVarVariant?: Maybe<Scalars['String']>;
  deleteVariantCNVCopyChange?: Maybe<Scalars['String']>;
  deleteVariantCNVDescription?: Maybe<Scalars['String']>;
  deleteVariantCNVGene?: Maybe<Scalars['String']>;
  deleteVariantCNVGoVariant?: Maybe<Scalars['String']>;
  deleteVariantCNVHotSpotVariant?: Maybe<Scalars['String']>;
  deleteVariantCNVJaxVariant?: Maybe<Scalars['String']>;
  deleteVariantCNVName?: Maybe<Scalars['String']>;
  deleteVariantCNVNonCanonicalTranscript?: Maybe<Scalars['String']>;
  deleteVariantFusion?: Maybe<Scalars['String']>;
  deleteVariantFusionClinVarVariant?: Maybe<Scalars['String']>;
  deleteVariantFusionCopyChange?: Maybe<Scalars['String']>;
  deleteVariantFusionDescription?: Maybe<Scalars['String']>;
  deleteVariantFusionExon3Prime?: Maybe<Scalars['String']>;
  deleteVariantFusionExon5Prime?: Maybe<Scalars['String']>;
  deleteVariantFusionGene?: Maybe<Scalars['String']>;
  deleteVariantFusionGene3Prime?: Maybe<Scalars['String']>;
  deleteVariantFusionGene5Prime?: Maybe<Scalars['String']>;
  deleteVariantFusionGoVariant?: Maybe<Scalars['String']>;
  deleteVariantFusionHotSpotVariant?: Maybe<Scalars['String']>;
  deleteVariantFusionJaxVariant?: Maybe<Scalars['String']>;
  deleteVariantFusionName?: Maybe<Scalars['String']>;
  deleteVariantFusionNonCanonicalTranscript?: Maybe<Scalars['String']>;
  deleteVariantRegion?: Maybe<Scalars['String']>;
  deleteVariantRegionClinVarVariant?: Maybe<Scalars['String']>;
  deleteVariantRegionDescription?: Maybe<Scalars['String']>;
  deleteVariantRegionGene?: Maybe<Scalars['String']>;
  deleteVariantRegionGoVariant?: Maybe<Scalars['String']>;
  deleteVariantRegionHotSpotVariant?: Maybe<Scalars['String']>;
  deleteVariantRegionIsDeleterious?: Maybe<Scalars['String']>;
  deleteVariantRegionIsFrameshift?: Maybe<Scalars['String']>;
  deleteVariantRegionIsTruncating?: Maybe<Scalars['String']>;
  deleteVariantRegionJaxVariant?: Maybe<Scalars['String']>;
  deleteVariantRegionName?: Maybe<Scalars['String']>;
  deleteVariantRegionNonCanonicalTranscript?: Maybe<Scalars['String']>;
  deleteVariantRegionProteinEffect?: Maybe<Scalars['String']>;
  deleteVariantRegionRegionValue?: Maybe<Scalars['String']>;
  deleteVariantSNVIndel?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelCDot?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelClinVarVariant?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelDescription?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelExon?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelGDot?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelGene?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelGoVariant?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelHotSpotVariant?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelJaxVariant?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelName?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelNonCanonicalTranscript?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelPDot?: Maybe<Scalars['String']>;
  deleteVariantSNVIndelProteinEffect?: Maybe<Scalars['String']>;
  deleteXRef?: Maybe<Scalars['String']>;
  mergeAdverseEvent?: Maybe<Scalars['String']>;
  mergeAuthor?: Maybe<Scalars['String']>;
  mergeClinVarVariant?: Maybe<Scalars['String']>;
  mergeClinicalTrial?: Maybe<Scalars['String']>;
  mergeDNAMarker?: Maybe<Scalars['String']>;
  mergeDODisease?: Maybe<Scalars['String']>;
  mergeDrugCategory?: Maybe<Scalars['String']>;
  mergeEditableAssayComparator?: Maybe<Scalars['String']>;
  mergeEditableBoolean?: Maybe<Scalars['String']>;
  mergeEditableCopyChange?: Maybe<Scalars['String']>;
  mergeEditableDODiseaseList?: Maybe<Scalars['String']>;
  mergeEditableFloat?: Maybe<Scalars['String']>;
  mergeEditableGODiseaseList?: Maybe<Scalars['String']>;
  mergeEditableImmuneCycleRole?: Maybe<Scalars['String']>;
  mergeEditableImmuneFunction?: Maybe<Scalars['String']>;
  mergeEditableImmunePhenotype?: Maybe<Scalars['String']>;
  mergeEditableInt?: Maybe<Scalars['String']>;
  mergeEditableJAXDiseaseList?: Maybe<Scalars['String']>;
  mergeEditableObject?: Maybe<Scalars['String']>;
  mergeEditableOmniGeneReference?: Maybe<Scalars['String']>;
  mergeEditableOncoTreeDiseaseList?: Maybe<Scalars['String']>;
  mergeEditableProteinEffect?: Maybe<Scalars['String']>;
  mergeEditableStatement?: Maybe<Scalars['String']>;
  mergeEditableStringList?: Maybe<Scalars['String']>;
  mergeEditableTMBInterpretation?: Maybe<Scalars['String']>;
  mergeEditableXRefList?: Maybe<Scalars['String']>;
  mergeEvidence?: Maybe<Scalars['String']>;
  mergeEvidenceAssociation?: Maybe<Scalars['String']>;
  mergeGODisease?: Maybe<Scalars['String']>;
  mergeGOVariant?: Maybe<Scalars['String']>;
  mergeGenomicVariant?: Maybe<Scalars['String']>;
  mergeGenomicVariantMarker?: Maybe<Scalars['String']>;
  mergeHotSpotVariant?: Maybe<Scalars['String']>;
  mergeIHCAssay?: Maybe<Scalars['String']>;
  mergeInternetReference?: Maybe<Scalars['String']>;
  mergeJaxDisease?: Maybe<Scalars['String']>;
  mergeJaxDrug?: Maybe<Scalars['String']>;
  mergeJaxDrugClass?: Maybe<Scalars['String']>;
  mergeJaxGene?: Maybe<Scalars['String']>;
  mergeJaxVariant?: Maybe<Scalars['String']>;
  mergeJournal?: Maybe<Scalars['String']>;
  mergeLiteratureReference?: Maybe<Scalars['String']>;
  mergeMCode?: Maybe<Scalars['String']>;
  mergeMSIMarker?: Maybe<Scalars['String']>;
  mergeMarkerComponent?: Maybe<Scalars['String']>;
  mergeMarkerProfile?: Maybe<Scalars['String']>;
  mergeMeetingAbstractReference?: Maybe<Scalars['String']>;
  mergeMyGeneInfoGene?: Maybe<Scalars['String']>;
  mergeNCIDrug?: Maybe<Scalars['String']>;
  mergeOmniDisease?: Maybe<Scalars['String']>;
  mergeOmniDrug?: Maybe<Scalars['String']>;
  mergeOmniGene?: Maybe<Scalars['String']>;
  mergeOncoTreeDisease?: Maybe<Scalars['String']>;
  mergeOncoTreeOccurrence?: Maybe<Scalars['String']>;
  mergeOntologicalDisease?: Maybe<Scalars['String']>;
  mergeOutcome?: Maybe<Scalars['String']>;
  mergeProteinExpressionMarker?: Maybe<Scalars['String']>;
  mergeProteinLevelAssay?: Maybe<Scalars['String']>;
  mergeRNASeqAssay?: Maybe<Scalars['String']>;
  mergeRNASeqSignatureMarker?: Maybe<Scalars['String']>;
  mergeReference?: Maybe<Scalars['String']>;
  mergeTCode?: Maybe<Scalars['String']>;
  mergeTMBMarker?: Maybe<Scalars['String']>;
  mergeTarget?: Maybe<Scalars['String']>;
  mergeTherapeuticIntervention?: Maybe<Scalars['String']>;
  mergeTherapy?: Maybe<Scalars['String']>;
  mergeTherapyComponent?: Maybe<Scalars['String']>;
  mergeUniprotEntry?: Maybe<Scalars['String']>;
  mergeUser?: Maybe<Scalars['String']>;
  mergeVariantCNV?: Maybe<Scalars['String']>;
  mergeVariantFusion?: Maybe<Scalars['String']>;
  mergeVariantRegion?: Maybe<Scalars['String']>;
  mergeVariantSNVIndel?: Maybe<Scalars['String']>;
  mergeXRef?: Maybe<Scalars['String']>;
  updateAdverseEvent?: Maybe<Scalars['String']>;
  updateAuthor?: Maybe<Scalars['String']>;
  updateClinVarVariant?: Maybe<Scalars['String']>;
  updateClinicalTrial?: Maybe<Scalars['String']>;
  updateDNAMarker?: Maybe<Scalars['String']>;
  updateDODisease?: Maybe<Scalars['String']>;
  updateDrugCategory?: Maybe<Scalars['String']>;
  updateEditableAssayComparator?: Maybe<Scalars['String']>;
  updateEditableBoolean?: Maybe<Scalars['String']>;
  updateEditableCopyChange?: Maybe<Scalars['String']>;
  updateEditableDODiseaseList?: Maybe<Scalars['String']>;
  updateEditableFloat?: Maybe<Scalars['String']>;
  updateEditableGODiseaseList?: Maybe<Scalars['String']>;
  updateEditableImmuneCycleRole?: Maybe<Scalars['String']>;
  updateEditableImmuneFunction?: Maybe<Scalars['String']>;
  updateEditableImmunePhenotype?: Maybe<Scalars['String']>;
  updateEditableInt?: Maybe<Scalars['String']>;
  updateEditableJAXDiseaseList?: Maybe<Scalars['String']>;
  updateEditableObject?: Maybe<Scalars['String']>;
  updateEditableOmniGeneReference?: Maybe<Scalars['String']>;
  updateEditableOncoTreeDiseaseList?: Maybe<Scalars['String']>;
  updateEditableProteinEffect?: Maybe<Scalars['String']>;
  updateEditableStatement?: Maybe<Scalars['String']>;
  updateEditableStringList?: Maybe<Scalars['String']>;
  updateEditableTMBInterpretation?: Maybe<Scalars['String']>;
  updateEditableXRefList?: Maybe<Scalars['String']>;
  updateEvidence?: Maybe<Scalars['String']>;
  updateEvidenceAssociation?: Maybe<Scalars['String']>;
  updateGODisease?: Maybe<Scalars['String']>;
  updateGOVariant?: Maybe<Scalars['String']>;
  updateGenomicVariant?: Maybe<Scalars['String']>;
  updateGenomicVariantMarker?: Maybe<Scalars['String']>;
  updateHotSpotVariant?: Maybe<Scalars['String']>;
  updateIHCAssay?: Maybe<Scalars['String']>;
  updateInternetReference?: Maybe<Scalars['String']>;
  updateJaxDisease?: Maybe<Scalars['String']>;
  updateJaxDrug?: Maybe<Scalars['String']>;
  updateJaxDrugClass?: Maybe<Scalars['String']>;
  updateJaxGene?: Maybe<Scalars['String']>;
  updateJaxVariant?: Maybe<Scalars['String']>;
  updateJournal?: Maybe<Scalars['String']>;
  updateLiteratureReference?: Maybe<Scalars['String']>;
  updateMCode?: Maybe<Scalars['String']>;
  updateMSIMarker?: Maybe<Scalars['String']>;
  updateMarkerComponent?: Maybe<Scalars['String']>;
  updateMarkerProfile?: Maybe<Scalars['String']>;
  updateMeetingAbstractReference?: Maybe<Scalars['String']>;
  updateMyGeneInfoGene?: Maybe<Scalars['String']>;
  updateNCIDrug?: Maybe<Scalars['String']>;
  updateOmniDisease?: Maybe<Scalars['String']>;
  updateOmniDrug?: Maybe<Scalars['String']>;
  updateOmniGene?: Maybe<Scalars['String']>;
  updateOncoTreeDisease?: Maybe<Scalars['String']>;
  updateOncoTreeOccurrence?: Maybe<Scalars['String']>;
  updateOntologicalDisease?: Maybe<Scalars['String']>;
  updateOutcome?: Maybe<Scalars['String']>;
  updateProteinExpressionMarker?: Maybe<Scalars['String']>;
  updateProteinLevelAssay?: Maybe<Scalars['String']>;
  updateRNASeqAssay?: Maybe<Scalars['String']>;
  updateRNASeqSignatureMarker?: Maybe<Scalars['String']>;
  updateReference?: Maybe<Scalars['String']>;
  updateTCode?: Maybe<Scalars['String']>;
  updateTMBMarker?: Maybe<Scalars['String']>;
  updateTarget?: Maybe<Scalars['String']>;
  updateTherapeuticIntervention?: Maybe<Scalars['String']>;
  updateTherapy?: Maybe<Scalars['String']>;
  updateTherapyComponent?: Maybe<Scalars['String']>;
  updateUniprotEntry?: Maybe<Scalars['String']>;
  updateUser?: Maybe<Scalars['String']>;
  updateVariantCNV?: Maybe<Scalars['String']>;
  updateVariantFusion?: Maybe<Scalars['String']>;
  updateVariantRegion?: Maybe<Scalars['String']>;
  updateVariantSNVIndel?: Maybe<Scalars['String']>;
  updateXRef?: Maybe<Scalars['String']>;
};


export type MutationTypeAddAuthorReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddClinVarVariantGenomicVariantArgs = {
  genomicVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddClinVarVariantSignficanceExplanationArgs = {
  id: Scalars['ID'];
  signficanceExplanation: Array<Scalars['ID']>;
};


export type MutationTypeAddClinVarVariantSignificanceArgs = {
  id: Scalars['ID'];
  significance: Array<Scalars['ID']>;
};


export type MutationTypeAddClinicalTrialReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddDnaMarkerDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddDnaMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeAddDnaMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddDnaMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeAddDoDiseaseChildrenArgs = {
  children: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddDoDiseaseDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddDoDiseaseExactSynonymsArgs = {
  exactSynonyms: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddDoDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddDoDiseaseParentsArgs = {
  id: Scalars['ID'];
  parents: Array<Scalars['ID']>;
};


export type MutationTypeAddDoDiseaseRelatedSynonymsArgs = {
  id: Scalars['ID'];
  relatedSynonyms: Array<Scalars['ID']>;
};


export type MutationTypeAddDoDiseaseSubsetsArgs = {
  id: Scalars['ID'];
  subsets: Array<Scalars['ID']>;
};


export type MutationTypeAddDoDiseaseXrefsArgs = {
  id: Scalars['ID'];
  xrefs: Array<Scalars['ID']>;
};


export type MutationTypeAddDrugCategoryDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddDrugCategoryDrugsArgs = {
  drugs: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddDrugCategoryJaxDrugClassArgs = {
  id: Scalars['ID'];
  jaxDrugClass: Array<Scalars['ID']>;
};


export type MutationTypeAddDrugCategoryNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableAssayComparatorEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableAssayComparatorReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableBooleanEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableBooleanReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableCopyChangeEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableCopyChangeReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableDoDiseaseListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableDoDiseaseListListArgs = {
  id: Scalars['ID'];
  list: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableDoDiseaseListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableFloatEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableFloatReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableGoDiseaseListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableGoDiseaseListListArgs = {
  id: Scalars['ID'];
  list: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableGoDiseaseListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableImmuneCycleRoleEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableImmuneCycleRoleReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableImmuneFunctionEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableImmuneFunctionReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableImmunePhenotypeEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableImmunePhenotypeReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableIntEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableIntReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableJaxDiseaseListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableJaxDiseaseListListArgs = {
  id: Scalars['ID'];
  list: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableJaxDiseaseListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableObjectEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableObjectReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableOmniGeneReferenceEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableOmniGeneReferenceGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableOmniGeneReferenceReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableOncoTreeDiseaseListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableOncoTreeDiseaseListListArgs = {
  id: Scalars['ID'];
  list: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableOncoTreeDiseaseListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableProteinEffectEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableProteinEffectReferencesArgs = {
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


export type MutationTypeAddEditableStringListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableStringListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableTmbInterpretationEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableTmbInterpretationReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableXRefListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEditableXRefListListArgs = {
  id: Scalars['ID'];
  list: Array<Scalars['ID']>;
};


export type MutationTypeAddEditableXRefListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeAddEvidenceAdverseEventsArgs = {
  adverseEvents: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEvidenceAssociationDiseaseArgs = {
  disease: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEvidenceAssociationEvidencesArgs = {
  evidences: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEvidenceAssociationMarkerArgs = {
  id: Scalars['ID'];
  marker: Array<Scalars['ID']>;
};


export type MutationTypeAddEvidenceAssociationTherapyArgs = {
  id: Scalars['ID'];
  therapy: Array<Scalars['ID']>;
};


export type MutationTypeAddEvidenceEvidenceAssociationArgs = {
  evidenceAssociation: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddEvidenceOutcomesArgs = {
  id: Scalars['ID'];
  outcomes: Array<Scalars['ID']>;
};


export type MutationTypeAddEvidenceReferenceArgs = {
  id: Scalars['ID'];
  reference: Array<Scalars['ID']>;
};


export type MutationTypeAddGoDiseaseChildrenArgs = {
  children: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddGoDiseaseDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddGoDiseaseJaxDiseasesArgs = {
  id: Scalars['ID'];
  jaxDiseases: Array<Scalars['ID']>;
};


export type MutationTypeAddGoDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddGoDiseaseParentsArgs = {
  id: Scalars['ID'];
  parents: Array<Scalars['ID']>;
};


export type MutationTypeAddGoDiseaseSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeAddGoDiseaseXrefsArgs = {
  id: Scalars['ID'];
  xrefs: Array<Scalars['ID']>;
};


export type MutationTypeAddGoVariantGenomicVariantArgs = {
  genomicVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddGoVariantJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeAddGoVariantNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddGenomicVariantClinVarVariantArgs = {
  clinVarVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddGenomicVariantDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddGenomicVariantGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddGenomicVariantGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddGenomicVariantHotSpotVariantArgs = {
  hotSpotVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddGenomicVariantJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeAddGenomicVariantMarkerGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddGenomicVariantMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeAddGenomicVariantMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddGenomicVariantMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeAddGenomicVariantMarkerVariantArgs = {
  id: Scalars['ID'];
  variant: Array<Scalars['ID']>;
};


export type MutationTypeAddGenomicVariantNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddGenomicVariantNonCanonicalTranscriptArgs = {
  id: Scalars['ID'];
  nonCanonicalTranscript: Array<Scalars['ID']>;
};


export type MutationTypeAddHotSpotVariantGenomicVariantArgs = {
  genomicVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddHotSpotVariantOccurrencesArgs = {
  id: Scalars['ID'];
  occurrences: Array<Scalars['ID']>;
};


export type MutationTypeAddIhcAssayAntibodyCloneArgs = {
  antibodyClone: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddIhcAssayComparatorArgs = {
  comparator: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddIhcAssayNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddIhcAssayProteinExpressionMarkersArgs = {
  id: Scalars['ID'];
  proteinExpressionMarkers: Array<Scalars['ID']>;
};


export type MutationTypeAddIhcAssayResultMaxArgs = {
  id: Scalars['ID'];
  resultMax: Array<Scalars['ID']>;
};


export type MutationTypeAddIhcAssayResultMinArgs = {
  id: Scalars['ID'];
  resultMin: Array<Scalars['ID']>;
};


export type MutationTypeAddIhcAssayResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeAddIhcAssayResultUnitsArgs = {
  id: Scalars['ID'];
  resultUnits: Array<Scalars['ID']>;
};


export type MutationTypeAddInternetReferenceStatementsReferencedArgs = {
  id: Scalars['ID'];
  statementsReferenced: Array<Scalars['ID']>;
};


export type MutationTypeAddJaxDiseaseDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJaxDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddJaxDrugClassDrugsArgs = {
  drugs: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJaxDrugClassNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddJaxDrugDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJaxDrugDrugClassesArgs = {
  drugClasses: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJaxDrugNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddJaxDrugSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeAddJaxDrugTradeNameArgs = {
  id: Scalars['ID'];
  tradeName: Array<Scalars['ID']>;
};


export type MutationTypeAddJaxGeneCanonicalTranscriptArgs = {
  canonicalTranscript: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJaxGeneDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJaxGeneSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeAddJaxVariantDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJaxVariantGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJaxVariantGenomicVariantArgs = {
  genomicVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJaxVariantGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddJaxVariantProteinEffectArgs = {
  id: Scalars['ID'];
  proteinEffect: Array<Scalars['ID']>;
};


export type MutationTypeAddJaxVariantTranscriptArgs = {
  id: Scalars['ID'];
  transcript: Array<Scalars['ID']>;
};


export type MutationTypeAddLiteratureReferenceAuthorsArgs = {
  authors: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddLiteratureReferenceJournalArgs = {
  id: Scalars['ID'];
  journal: Array<Scalars['ID']>;
};


export type MutationTypeAddLiteratureReferenceStatementsReferencedArgs = {
  id: Scalars['ID'];
  statementsReferenced: Array<Scalars['ID']>;
};


export type MutationTypeAddMCodeChildrenArgs = {
  children: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddMCodeDiseasePathArgs = {
  diseasePath: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddMCodeParentsArgs = {
  id: Scalars['ID'];
  parents: Array<Scalars['ID']>;
};


export type MutationTypeAddMsiMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeAddMsiMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddMsiMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeAddMarkerComponentMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeAddMarkerComponentNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddMarkerComponentResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeAddMarkerProfileComponentsArgs = {
  components: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddMarkerProfileEvidenceAssociationsArgs = {
  evidenceAssociations: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddMarkerProfileMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeAddMarkerProfileNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddMarkerProfileResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeAddMeetingAbstractReferenceAuthorsArgs = {
  authors: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddMeetingAbstractReferenceStatementsReferencedArgs = {
  id: Scalars['ID'];
  statementsReferenced: Array<Scalars['ID']>;
};


export type MutationTypeAddMyGeneInfoGeneDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddMyGeneInfoGeneUniprotEntryArgs = {
  id: Scalars['ID'];
  uniprotEntry: Array<Scalars['ID']>;
};


export type MutationTypeAddNciDrugAnnotationDateArgs = {
  annotationDate: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddNciDrugConceptCodeArgs = {
  conceptCode: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddNciDrugDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddNciDrugDrugCategoryArgs = {
  drugCategory: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddNciDrugModulatorArgs = {
  id: Scalars['ID'];
  modulator: Array<Scalars['ID']>;
};


export type MutationTypeAddNciDrugNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddNciDrugSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniDrugComponentOfArgs = {
  componentOf: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddOmniDrugDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddOmniDrugDrugCategoriesArgs = {
  drugCategories: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddOmniDrugJaxDrugArgs = {
  id: Scalars['ID'];
  jaxDrug: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniDrugNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniDrugNciDrugArgs = {
  id: Scalars['ID'];
  nciDrug: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniDrugSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniDrugTargetArgs = {
  id: Scalars['ID'];
  target: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniDrugTradeNameArgs = {
  id: Scalars['ID'];
  tradeName: Array<Scalars['ID']>;
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


export type MutationTypeAddOmniGeneSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniGeneTranscriptArgs = {
  id: Scalars['ID'];
  transcript: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniGeneUniprotEntryArgs = {
  id: Scalars['ID'];
  uniprotEntry: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniGeneVariantMarkersArgs = {
  id: Scalars['ID'];
  variantMarkers: Array<Scalars['ID']>;
};


export type MutationTypeAddOmniGeneVariantsArgs = {
  id: Scalars['ID'];
  variants: Array<Scalars['ID']>;
};


export type MutationTypeAddOncoTreeDiseaseChildrenArgs = {
  children: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddOncoTreeDiseaseMainTypeArgs = {
  id: Scalars['ID'];
  mainType: Array<Scalars['ID']>;
};


export type MutationTypeAddOncoTreeDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddOncoTreeDiseaseParentArgs = {
  id: Scalars['ID'];
  parent: Array<Scalars['ID']>;
};


export type MutationTypeAddOncoTreeDiseaseTissueArgs = {
  id: Scalars['ID'];
  tissue: Array<Scalars['ID']>;
};


export type MutationTypeAddOncoTreeDiseaseXrefsArgs = {
  id: Scalars['ID'];
  xrefs: Array<Scalars['ID']>;
};


export type MutationTypeAddOncoTreeOccurrenceOccurrencesArgs = {
  id: Scalars['ID'];
  occurrences: Array<Scalars['ID']>;
};


export type MutationTypeAddOncoTreeOccurrencePercentOccurrenceArgs = {
  id: Scalars['ID'];
  percentOccurrence: Array<Scalars['ID']>;
};


export type MutationTypeAddOncoTreeOccurrenceTotalSamplesArgs = {
  id: Scalars['ID'];
  totalSamples: Array<Scalars['ID']>;
};


export type MutationTypeAddOntologicalDiseaseDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddOntologicalDiseaseDoDiseasesArgs = {
  doDiseases: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddOntologicalDiseaseGoDiseasesArgs = {
  goDiseases: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddOntologicalDiseaseJaxDiseasesArgs = {
  id: Scalars['ID'];
  jaxDiseases: Array<Scalars['ID']>;
};


export type MutationTypeAddOntologicalDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddOntologicalDiseaseOncoTreeDiseasesArgs = {
  id: Scalars['ID'];
  oncoTreeDiseases: Array<Scalars['ID']>;
};


export type MutationTypeAddOntologicalDiseaseSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeAddOntologicalDiseaseXrefsArgs = {
  id: Scalars['ID'];
  xrefs: Array<Scalars['ID']>;
};


export type MutationTypeAddOutcomeEvidencesArgs = {
  evidences: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddProteinExpressionMarkerAssayArgs = {
  assay: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddProteinExpressionMarkerGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddProteinExpressionMarkerIhcAssayArgs = {
  IHCAssay: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddProteinExpressionMarkerImmuneCycleRolesArgs = {
  id: Scalars['ID'];
  immuneCycleRoles: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinExpressionMarkerImmuneFunctionsArgs = {
  id: Scalars['ID'];
  immuneFunctions: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinExpressionMarkerImmunePhenotypesArgs = {
  id: Scalars['ID'];
  immunePhenotypes: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinExpressionMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinExpressionMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinExpressionMarkerRnaSeqAssayArgs = {
  RNASeqAssay: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddProteinExpressionMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinExpressionMarkerSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeAddProteinLevelAssayNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqAssayComparatorArgs = {
  comparator: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddRnaSeqAssayNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqAssayProteinExpressionMarkersArgs = {
  id: Scalars['ID'];
  proteinExpressionMarkers: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqAssayResultMaxArgs = {
  id: Scalars['ID'];
  resultMax: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqAssayResultMinArgs = {
  id: Scalars['ID'];
  resultMin: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqSignatureMarkerComparatorArgs = {
  comparator: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddRnaSeqSignatureMarkerDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddRnaSeqSignatureMarkerInterpretationsArgs = {
  id: Scalars['ID'];
  interpretations: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqSignatureMarkerMarkerProfileArgs = {
  id: Scalars['ID'];
  markerProfile: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqSignatureMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqSignatureMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqSignatureMarkerResultMaxArgs = {
  id: Scalars['ID'];
  resultMax: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqSignatureMarkerResultMinArgs = {
  id: Scalars['ID'];
  resultMin: Array<Scalars['ID']>;
};


export type MutationTypeAddRnaSeqSignatureMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeAddReferenceStatementsReferencedArgs = {
  id: Scalars['ID'];
  statementsReferenced: Array<Scalars['ID']>;
};


export type MutationTypeAddTCodeChildrenArgs = {
  children: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddTCodeParentsArgs = {
  id: Scalars['ID'];
  parents: Array<Scalars['ID']>;
};


export type MutationTypeAddTCodeTissuePathArgs = {
  id: Scalars['ID'];
  tissuePath: Array<Scalars['ID']>;
};


export type MutationTypeAddTmbMarkerComparatorArgs = {
  comparator: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddTmbMarkerInterpretationsArgs = {
  id: Scalars['ID'];
  interpretations: Array<Scalars['ID']>;
};


export type MutationTypeAddTmbMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeAddTmbMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddTmbMarkerResultMaxArgs = {
  id: Scalars['ID'];
  resultMax: Array<Scalars['ID']>;
};


export type MutationTypeAddTmbMarkerResultMinArgs = {
  id: Scalars['ID'];
  resultMin: Array<Scalars['ID']>;
};


export type MutationTypeAddTmbMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeAddTmbMarkerResultUnitsArgs = {
  id: Scalars['ID'];
  resultUnits: Array<Scalars['ID']>;
};


export type MutationTypeAddTherapeuticInterventionConcurrentWithArgs = {
  concurrentWith: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddTherapeuticInterventionDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddTherapeuticInterventionEvidenceAssociationsArgs = {
  evidenceAssociations: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddTherapeuticInterventionFollowedByArgs = {
  followedBy: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddTherapeuticInterventionNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddTherapeuticInterventionPrecededByArgs = {
  id: Scalars['ID'];
  precededBy: Array<Scalars['ID']>;
};


export type MutationTypeAddTherapeuticInterventionTherapyArgs = {
  id: Scalars['ID'];
  therapy: Array<Scalars['ID']>;
};


export type MutationTypeAddTherapyComponentComponentOfArgs = {
  componentOf: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddTherapyComponentNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddTherapyComponentOfArgs = {
  componentOf: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddTherapyComponentsArgs = {
  components: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddTherapyDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddTherapyNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddUniprotEntryFunctionArgs = {
  function: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddUniprotEntryGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddUserEditedStatementsArgs = {
  editedStatements: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantCnvClinVarVariantArgs = {
  clinVarVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantCnvCopyChangeArgs = {
  copyChange: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantCnvDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantCnvGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantCnvGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantCnvHotSpotVariantArgs = {
  hotSpotVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantCnvJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantCnvNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantCnvNonCanonicalTranscriptArgs = {
  id: Scalars['ID'];
  nonCanonicalTranscript: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantFusionClinVarVariantArgs = {
  clinVarVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantFusionCopyChangeArgs = {
  copyChange: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantFusionDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantFusionExon3PrimeArgs = {
  exon3Prime: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantFusionExon5PrimeArgs = {
  exon5Prime: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantFusionGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantFusionGene3PrimeArgs = {
  gene3Prime: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantFusionGene5PrimeArgs = {
  gene5Prime: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantFusionGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantFusionHotSpotVariantArgs = {
  hotSpotVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantFusionJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantFusionNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantFusionNonCanonicalTranscriptArgs = {
  id: Scalars['ID'];
  nonCanonicalTranscript: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantRegionClinVarVariantArgs = {
  clinVarVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantRegionDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantRegionGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantRegionGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantRegionHotSpotVariantArgs = {
  hotSpotVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantRegionIsDeleteriousArgs = {
  id: Scalars['ID'];
  isDeleterious: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantRegionIsFrameshiftArgs = {
  id: Scalars['ID'];
  isFrameshift: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantRegionIsTruncatingArgs = {
  id: Scalars['ID'];
  isTruncating: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantRegionJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantRegionNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantRegionNonCanonicalTranscriptArgs = {
  id: Scalars['ID'];
  nonCanonicalTranscript: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantRegionProteinEffectArgs = {
  id: Scalars['ID'];
  proteinEffect: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantRegionRegionValueArgs = {
  id: Scalars['ID'];
  regionValue: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantSnvIndelCDotArgs = {
  cDot: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantSnvIndelClinVarVariantArgs = {
  clinVarVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantSnvIndelDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantSnvIndelExonArgs = {
  exon: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantSnvIndelGDotArgs = {
  gDot: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantSnvIndelGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantSnvIndelGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantSnvIndelHotSpotVariantArgs = {
  hotSpotVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeAddVariantSnvIndelJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantSnvIndelNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantSnvIndelNonCanonicalTranscriptArgs = {
  id: Scalars['ID'];
  nonCanonicalTranscript: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantSnvIndelPDotArgs = {
  id: Scalars['ID'];
  pDot: Array<Scalars['ID']>;
};


export type MutationTypeAddVariantSnvIndelProteinEffectArgs = {
  id: Scalars['ID'];
  proteinEffect: Array<Scalars['ID']>;
};


export type MutationTypeCreateAdverseEventArgs = {
  grade?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateAuthorArgs = {
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  surname: Scalars['String'];
};


export type MutationTypeCreateClinVarVariantArgs = {
  cDot: Scalars['String'];
  gene: Scalars['String'];
  id: Scalars['ID'];
  pDot: Scalars['String'];
  variantId: Scalars['String'];
};


export type MutationTypeCreateClinicalTrialArgs = {
  acronym?: Maybe<Scalars['String']>;
  briefTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  officialTitle: Scalars['String'];
  resource: Scalars['String'];
  resourceId: Scalars['String'];
};


export type MutationTypeCreateDnaMarkerArgs = {
  id: Scalars['ID'];
  markerType: DnaMarkerType;
};


export type MutationTypeCreateDoDiseaseArgs = {
  doId: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateDrugCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableAssayComparatorArgs = {
  comparator: AssayComparator;
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableBooleanArgs = {
  booleanValue: ExtendedBoolean;
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableCopyChangeArgs = {
  cnvType: CnvType;
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableDoDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableFloatArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  floatValue: Scalars['Float'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableGoDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableImmuneCycleRoleArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  immuneCycleRole: ImmuneCycleRole;
};


export type MutationTypeCreateEditableImmuneFunctionArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  immuneFunction: ImmuneFunction;
};


export type MutationTypeCreateEditableImmunePhenotypeArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  immunePhenotype: ImmunePhenotype;
};


export type MutationTypeCreateEditableIntArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  intValue: Scalars['Int'];
};


export type MutationTypeCreateEditableJaxDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableObjectArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableOmniGeneReferenceArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableOncoTreeDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEditableProteinEffectArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  proteinEffect: VariantProteinEffect;
};


export type MutationTypeCreateEditableStatementArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeCreateEditableStringListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  stringList: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeCreateEditableTmbInterpretationArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  tmbInterpretation: TmbInterpretationType;
};


export type MutationTypeCreateEditableXRefListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateEvidenceArgs = {
  ampCapAscoTier: Scalars['String'];
  approvalStatus: Scalars['String'];
  evidenceType: EvidenceType;
  id: Scalars['ID'];
  notes: Scalars['String'];
  responseType: ResponseType;
};


export type MutationTypeCreateEvidenceAssociationArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateGoDiseaseArgs = {
  goId: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateGoVariantArgs = {
  gene: Scalars['String'];
  goId: Scalars['String'];
  id: Scalars['ID'];
  mutationType: Scalars['String'];
};


export type MutationTypeCreateGenomicVariantArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateGenomicVariantMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateHotSpotVariantArgs = {
  begin: Scalars['String'];
  end: Scalars['String'];
  gene: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  position: Scalars['Int'];
  referenceAminoAcid: Scalars['String'];
  variantAminoAcid: Scalars['String'];
};


export type MutationTypeCreateIhcAssayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateInternetReferenceArgs = {
  accessedDate: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  webAddress: Scalars['String'];
};


export type MutationTypeCreateJaxDiseaseArgs = {
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  source: Scalars['String'];
  termId: Scalars['String'];
};


export type MutationTypeCreateJaxDrugArgs = {
  id: Scalars['ID'];
  jaxId: Scalars['String'];
};


export type MutationTypeCreateJaxDrugClassArgs = {
  id: Scalars['ID'];
  jaxId: Scalars['String'];
};


export type MutationTypeCreateJaxGeneArgs = {
  chromosome: Scalars['String'];
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
};


export type MutationTypeCreateJaxVariantArgs = {
  cDot: Scalars['String'];
  gDot: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
  pDot: Scalars['String'];
  variantType: Scalars['String'];
};


export type MutationTypeCreateJournalArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  firstPage: Scalars['String'];
  id: Scalars['ID'];
  lastPage: Scalars['String'];
  publicationYear: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeCreateMCodeArgs = {
  id: Scalars['ID'];
  mcodeId: Scalars['String'];
  omniDisease: Scalars['String'];
};


export type MutationTypeCreateMsiMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateMarkerComponentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateMarkerProfileArgs = {
  conjunction: OmniConjunction;
  id: Scalars['ID'];
};


export type MutationTypeCreateMeetingAbstractReferenceArgs = {
  abstract?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  meetingDate: Scalars['String'];
  meetingName: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
};


export type MutationTypeCreateMyGeneInfoGeneArgs = {
  chromosome: Scalars['String'];
  end?: Maybe<Scalars['Int']>;
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  strand: Strand;
};


export type MutationTypeCreateNciDrugArgs = {
  id: Scalars['ID'];
  isAntineoplastic: Scalars['Boolean'];
  isImmuno: Scalars['Boolean'];
};


export type MutationTypeCreateOmniDiseaseArgs = {
  id: Scalars['ID'];
  omniDiseaseId: Scalars['String'];
  omniDiseaseType: OmniDiseaseType;
};


export type MutationTypeCreateOmniDrugArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateOmniGeneArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  panelName: Scalars['String'];
};


export type MutationTypeCreateOncoTreeDiseaseArgs = {
  code: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeCreateOncoTreeOccurrenceArgs = {
  disease: Scalars['String'];
  id: Scalars['ID'];
  oncoTreeCode: Scalars['String'];
  perThousandOccurrence: Scalars['Int'];
};


export type MutationTypeCreateOntologicalDiseaseArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateOutcomeArgs = {
  ConfidenceIntervalHi?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLo?: Maybe<Scalars['Float']>;
  ConfidenceIntervalType?: Maybe<Scalars['String']>;
  clinicalCharacteristics?: Maybe<Array<Maybe<Scalars['String']>>>;
  dose?: Maybe<Scalars['Int']>;
  doseUnit?: Maybe<Scalars['String']>;
  endpoint?: Maybe<EvidenceEndpoint>;
  groupSize?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  observation?: Maybe<Scalars['String']>;
  observationMethod?: Maybe<Scalars['String']>;
  outcome: Scalars['Float'];
  outcomeRangeMax?: Maybe<Scalars['Float']>;
  outcomeRangeMin?: Maybe<Scalars['Float']>;
  outcomeUnit: Scalars['String'];
  treatmentGroup?: Maybe<Scalars['String']>;
};


export type MutationTypeCreateProteinExpressionMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateProteinLevelAssayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateRnaSeqAssayArgs = {
  id: Scalars['ID'];
  resultType: RnaSeqResultType;
};


export type MutationTypeCreateRnaSeqSignatureMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateReferenceArgs = {
  id: Scalars['ID'];
  shortReference: Scalars['String'];
};


export type MutationTypeCreateTCodeArgs = {
  id: Scalars['ID'];
  tcodeId: Scalars['String'];
};


export type MutationTypeCreateTmbMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeCreateTherapeuticInterventionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateTherapyArgs = {
  conjunction: OmniConjunction;
  id: Scalars['ID'];
};


export type MutationTypeCreateTherapyComponentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateUniprotEntryArgs = {
  accessionNumber: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprotId: Scalars['String'];
};


export type MutationTypeCreateUserArgs = {
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTypeCreateVariantCnvArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateVariantFusionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeCreateVariantRegionArgs = {
  id: Scalars['ID'];
  indelType: IndelType;
  regionType: RegionType;
  variantType: VariantType;
};


export type MutationTypeCreateVariantSnvIndelArgs = {
  id: Scalars['ID'];
  indelType: IndelType;
  variantType: VariantType;
};


export type MutationTypeCreateXRefArgs = {
  id: Scalars['ID'];
  source: Scalars['String'];
  sourceId: Scalars['String'];
};


export type MutationTypeDeleteAdverseEventArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteAuthorArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteAuthorReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteClinVarVariantArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteClinVarVariantGenomicVariantArgs = {
  genomicVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteClinVarVariantSignficanceExplanationArgs = {
  id: Scalars['ID'];
  signficanceExplanation: Array<Scalars['ID']>;
};


export type MutationTypeDeleteClinVarVariantSignificanceArgs = {
  id: Scalars['ID'];
  significance: Array<Scalars['ID']>;
};


export type MutationTypeDeleteClinicalTrialArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteClinicalTrialReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDnaMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteDnaMarkerDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteDnaMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDnaMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDnaMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDoDiseaseArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteDoDiseaseChildrenArgs = {
  children: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteDoDiseaseDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteDoDiseaseExactSynonymsArgs = {
  exactSynonyms: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteDoDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDoDiseaseParentsArgs = {
  id: Scalars['ID'];
  parents: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDoDiseaseRelatedSynonymsArgs = {
  id: Scalars['ID'];
  relatedSynonyms: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDoDiseaseSubsetsArgs = {
  id: Scalars['ID'];
  subsets: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDoDiseaseXrefsArgs = {
  id: Scalars['ID'];
  xrefs: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDrugCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteDrugCategoryDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteDrugCategoryDrugsArgs = {
  drugs: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteDrugCategoryJaxDrugClassArgs = {
  id: Scalars['ID'];
  jaxDrugClass: Array<Scalars['ID']>;
};


export type MutationTypeDeleteDrugCategoryNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableAssayComparatorArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableAssayComparatorEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableAssayComparatorReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableBooleanArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableBooleanEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableBooleanReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableCopyChangeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableCopyChangeEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableCopyChangeReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableDoDiseaseListArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableDoDiseaseListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableDoDiseaseListListArgs = {
  id: Scalars['ID'];
  list: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableDoDiseaseListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableFloatArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableFloatEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableFloatReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableGoDiseaseListArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableGoDiseaseListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableGoDiseaseListListArgs = {
  id: Scalars['ID'];
  list: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableGoDiseaseListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableImmuneCycleRoleArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableImmuneCycleRoleEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableImmuneCycleRoleReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableImmuneFunctionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableImmuneFunctionEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableImmuneFunctionReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableImmunePhenotypeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableImmunePhenotypeEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableImmunePhenotypeReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableIntArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableIntEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableIntReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableJaxDiseaseListArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableJaxDiseaseListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableJaxDiseaseListListArgs = {
  id: Scalars['ID'];
  list: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableJaxDiseaseListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableObjectArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableObjectEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableObjectReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableOmniGeneReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableOmniGeneReferenceEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableOmniGeneReferenceGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableOmniGeneReferenceReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableOncoTreeDiseaseListArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableOncoTreeDiseaseListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableOncoTreeDiseaseListListArgs = {
  id: Scalars['ID'];
  list: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableOncoTreeDiseaseListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableProteinEffectArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableProteinEffectEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableProteinEffectReferencesArgs = {
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


export type MutationTypeDeleteEditableStringListArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableStringListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableStringListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableTmbInterpretationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableTmbInterpretationEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableTmbInterpretationReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableXRefListArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableXRefListEditorArgs = {
  editor: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEditableXRefListListArgs = {
  id: Scalars['ID'];
  list: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEditableXRefListReferencesArgs = {
  id: Scalars['ID'];
  references: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEvidenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEvidenceAdverseEventsArgs = {
  adverseEvents: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEvidenceAssociationArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteEvidenceAssociationDiseaseArgs = {
  disease: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEvidenceAssociationEvidencesArgs = {
  evidences: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEvidenceAssociationMarkerArgs = {
  id: Scalars['ID'];
  marker: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEvidenceAssociationTherapyArgs = {
  id: Scalars['ID'];
  therapy: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEvidenceEvidenceAssociationArgs = {
  evidenceAssociation: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteEvidenceOutcomesArgs = {
  id: Scalars['ID'];
  outcomes: Array<Scalars['ID']>;
};


export type MutationTypeDeleteEvidenceReferenceArgs = {
  id: Scalars['ID'];
  reference: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGoDiseaseArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteGoDiseaseChildrenArgs = {
  children: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteGoDiseaseDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteGoDiseaseJaxDiseasesArgs = {
  id: Scalars['ID'];
  jaxDiseases: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGoDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGoDiseaseParentsArgs = {
  id: Scalars['ID'];
  parents: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGoDiseaseSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGoDiseaseXrefsArgs = {
  id: Scalars['ID'];
  xrefs: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGoVariantArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteGoVariantGenomicVariantArgs = {
  genomicVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteGoVariantJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGoVariantNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGenomicVariantArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteGenomicVariantClinVarVariantArgs = {
  clinVarVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteGenomicVariantDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteGenomicVariantGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteGenomicVariantGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteGenomicVariantHotSpotVariantArgs = {
  hotSpotVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteGenomicVariantJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGenomicVariantMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteGenomicVariantMarkerGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteGenomicVariantMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGenomicVariantMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGenomicVariantMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGenomicVariantMarkerVariantArgs = {
  id: Scalars['ID'];
  variant: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGenomicVariantNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteGenomicVariantNonCanonicalTranscriptArgs = {
  id: Scalars['ID'];
  nonCanonicalTranscript: Array<Scalars['ID']>;
};


export type MutationTypeDeleteHotSpotVariantArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteHotSpotVariantGenomicVariantArgs = {
  genomicVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteHotSpotVariantOccurrencesArgs = {
  id: Scalars['ID'];
  occurrences: Array<Scalars['ID']>;
};


export type MutationTypeDeleteIhcAssayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteIhcAssayAntibodyCloneArgs = {
  antibodyClone: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteIhcAssayComparatorArgs = {
  comparator: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteIhcAssayNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteIhcAssayProteinExpressionMarkersArgs = {
  id: Scalars['ID'];
  proteinExpressionMarkers: Array<Scalars['ID']>;
};


export type MutationTypeDeleteIhcAssayResultMaxArgs = {
  id: Scalars['ID'];
  resultMax: Array<Scalars['ID']>;
};


export type MutationTypeDeleteIhcAssayResultMinArgs = {
  id: Scalars['ID'];
  resultMin: Array<Scalars['ID']>;
};


export type MutationTypeDeleteIhcAssayResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeDeleteIhcAssayResultUnitsArgs = {
  id: Scalars['ID'];
  resultUnits: Array<Scalars['ID']>;
};


export type MutationTypeDeleteInternetReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteInternetReferenceStatementsReferencedArgs = {
  id: Scalars['ID'];
  statementsReferenced: Array<Scalars['ID']>;
};


export type MutationTypeDeleteJaxDiseaseArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxDiseaseDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteJaxDrugArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxDrugClassArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxDrugClassDrugsArgs = {
  drugs: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxDrugClassNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteJaxDrugDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxDrugDrugClassesArgs = {
  drugClasses: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxDrugNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteJaxDrugSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeDeleteJaxDrugTradeNameArgs = {
  id: Scalars['ID'];
  tradeName: Array<Scalars['ID']>;
};


export type MutationTypeDeleteJaxGeneArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxGeneCanonicalTranscriptArgs = {
  canonicalTranscript: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxGeneDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxGeneSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeDeleteJaxVariantArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxVariantDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxVariantGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxVariantGenomicVariantArgs = {
  genomicVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxVariantGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteJaxVariantProteinEffectArgs = {
  id: Scalars['ID'];
  proteinEffect: Array<Scalars['ID']>;
};


export type MutationTypeDeleteJaxVariantTranscriptArgs = {
  id: Scalars['ID'];
  transcript: Array<Scalars['ID']>;
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


export type MutationTypeDeleteLiteratureReferenceStatementsReferencedArgs = {
  id: Scalars['ID'];
  statementsReferenced: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMCodeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteMCodeChildrenArgs = {
  children: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteMCodeDiseasePathArgs = {
  diseasePath: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteMCodeParentsArgs = {
  id: Scalars['ID'];
  parents: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMsiMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteMsiMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMsiMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMsiMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMarkerComponentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteMarkerComponentMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMarkerComponentNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMarkerComponentResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMarkerProfileArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteMarkerProfileComponentsArgs = {
  components: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteMarkerProfileEvidenceAssociationsArgs = {
  evidenceAssociations: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteMarkerProfileMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMarkerProfileNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMarkerProfileResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMeetingAbstractReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteMeetingAbstractReferenceAuthorsArgs = {
  authors: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteMeetingAbstractReferenceStatementsReferencedArgs = {
  id: Scalars['ID'];
  statementsReferenced: Array<Scalars['ID']>;
};


export type MutationTypeDeleteMyGeneInfoGeneArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteMyGeneInfoGeneDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteMyGeneInfoGeneUniprotEntryArgs = {
  id: Scalars['ID'];
  uniprotEntry: Array<Scalars['ID']>;
};


export type MutationTypeDeleteNciDrugArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteNciDrugAnnotationDateArgs = {
  annotationDate: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteNciDrugConceptCodeArgs = {
  conceptCode: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteNciDrugDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteNciDrugDrugCategoryArgs = {
  drugCategory: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteNciDrugModulatorArgs = {
  id: Scalars['ID'];
  modulator: Array<Scalars['ID']>;
};


export type MutationTypeDeleteNciDrugNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteNciDrugSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniDiseaseArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOmniDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniDrugArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOmniDrugComponentOfArgs = {
  componentOf: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteOmniDrugDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteOmniDrugDrugCategoriesArgs = {
  drugCategories: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteOmniDrugJaxDrugArgs = {
  id: Scalars['ID'];
  jaxDrug: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniDrugNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniDrugNciDrugArgs = {
  id: Scalars['ID'];
  nciDrug: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniDrugSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniDrugTargetArgs = {
  id: Scalars['ID'];
  target: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniDrugTradeNameArgs = {
  id: Scalars['ID'];
  tradeName: Array<Scalars['ID']>;
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


export type MutationTypeDeleteOmniGeneSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniGeneTranscriptArgs = {
  id: Scalars['ID'];
  transcript: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniGeneUniprotEntryArgs = {
  id: Scalars['ID'];
  uniprotEntry: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniGeneVariantMarkersArgs = {
  id: Scalars['ID'];
  variantMarkers: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOmniGeneVariantsArgs = {
  id: Scalars['ID'];
  variants: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOncoTreeDiseaseArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOncoTreeDiseaseChildrenArgs = {
  children: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteOncoTreeDiseaseMainTypeArgs = {
  id: Scalars['ID'];
  mainType: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOncoTreeDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOncoTreeDiseaseParentArgs = {
  id: Scalars['ID'];
  parent: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOncoTreeDiseaseTissueArgs = {
  id: Scalars['ID'];
  tissue: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOncoTreeDiseaseXrefsArgs = {
  id: Scalars['ID'];
  xrefs: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOncoTreeOccurrenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOncoTreeOccurrenceOccurrencesArgs = {
  id: Scalars['ID'];
  occurrences: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOncoTreeOccurrencePercentOccurrenceArgs = {
  id: Scalars['ID'];
  percentOccurrence: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOncoTreeOccurrenceTotalSamplesArgs = {
  id: Scalars['ID'];
  totalSamples: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOntologicalDiseaseArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOntologicalDiseaseDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteOntologicalDiseaseDoDiseasesArgs = {
  doDiseases: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteOntologicalDiseaseGoDiseasesArgs = {
  goDiseases: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteOntologicalDiseaseJaxDiseasesArgs = {
  id: Scalars['ID'];
  jaxDiseases: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOntologicalDiseaseNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOntologicalDiseaseOncoTreeDiseasesArgs = {
  id: Scalars['ID'];
  oncoTreeDiseases: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOntologicalDiseaseSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOntologicalDiseaseXrefsArgs = {
  id: Scalars['ID'];
  xrefs: Array<Scalars['ID']>;
};


export type MutationTypeDeleteOutcomeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteOutcomeEvidencesArgs = {
  evidences: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinExpressionMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinExpressionMarkerAssayArgs = {
  assay: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinExpressionMarkerGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinExpressionMarkerIhcAssayArgs = {
  IHCAssay: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinExpressionMarkerImmuneCycleRolesArgs = {
  id: Scalars['ID'];
  immuneCycleRoles: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinExpressionMarkerImmuneFunctionsArgs = {
  id: Scalars['ID'];
  immuneFunctions: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinExpressionMarkerImmunePhenotypesArgs = {
  id: Scalars['ID'];
  immunePhenotypes: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinExpressionMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinExpressionMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinExpressionMarkerRnaSeqAssayArgs = {
  RNASeqAssay: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinExpressionMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinExpressionMarkerSynonymsArgs = {
  id: Scalars['ID'];
  synonyms: Array<Scalars['ID']>;
};


export type MutationTypeDeleteProteinLevelAssayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteProteinLevelAssayNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqAssayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteRnaSeqAssayComparatorArgs = {
  comparator: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteRnaSeqAssayNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqAssayProteinExpressionMarkersArgs = {
  id: Scalars['ID'];
  proteinExpressionMarkers: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqAssayResultMaxArgs = {
  id: Scalars['ID'];
  resultMax: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqAssayResultMinArgs = {
  id: Scalars['ID'];
  resultMin: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqSignatureMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteRnaSeqSignatureMarkerComparatorArgs = {
  comparator: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteRnaSeqSignatureMarkerDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteRnaSeqSignatureMarkerInterpretationsArgs = {
  id: Scalars['ID'];
  interpretations: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqSignatureMarkerMarkerProfileArgs = {
  id: Scalars['ID'];
  markerProfile: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqSignatureMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqSignatureMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqSignatureMarkerResultMaxArgs = {
  id: Scalars['ID'];
  resultMax: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqSignatureMarkerResultMinArgs = {
  id: Scalars['ID'];
  resultMin: Array<Scalars['ID']>;
};


export type MutationTypeDeleteRnaSeqSignatureMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeDeleteReferenceArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteReferenceStatementsReferencedArgs = {
  id: Scalars['ID'];
  statementsReferenced: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTCodeArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTCodeChildrenArgs = {
  children: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteTCodeParentsArgs = {
  id: Scalars['ID'];
  parents: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTCodeTissuePathArgs = {
  id: Scalars['ID'];
  tissuePath: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTmbMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTmbMarkerComparatorArgs = {
  comparator: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteTmbMarkerInterpretationsArgs = {
  id: Scalars['ID'];
  interpretations: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTmbMarkerMethodArgs = {
  id: Scalars['ID'];
  method: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTmbMarkerNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTmbMarkerResultMaxArgs = {
  id: Scalars['ID'];
  resultMax: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTmbMarkerResultMinArgs = {
  id: Scalars['ID'];
  resultMin: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTmbMarkerResultStringArgs = {
  id: Scalars['ID'];
  resultString: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTmbMarkerResultUnitsArgs = {
  id: Scalars['ID'];
  resultUnits: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTargetArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapeuticInterventionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapeuticInterventionConcurrentWithArgs = {
  concurrentWith: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapeuticInterventionDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapeuticInterventionEvidenceAssociationsArgs = {
  evidenceAssociations: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapeuticInterventionFollowedByArgs = {
  followedBy: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapeuticInterventionNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTherapeuticInterventionPrecededByArgs = {
  id: Scalars['ID'];
  precededBy: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTherapeuticInterventionTherapyArgs = {
  id: Scalars['ID'];
  therapy: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTherapyArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapyComponentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapyComponentComponentOfArgs = {
  componentOf: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapyComponentNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteTherapyComponentOfArgs = {
  componentOf: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapyComponentsArgs = {
  components: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapyDefinitionArgs = {
  definition: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteTherapyNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteUniprotEntryArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteUniprotEntryFunctionArgs = {
  function: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteUniprotEntryGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteUserEditedStatementsArgs = {
  editedStatements: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantCnvArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantCnvClinVarVariantArgs = {
  clinVarVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantCnvCopyChangeArgs = {
  copyChange: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantCnvDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantCnvGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantCnvGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantCnvHotSpotVariantArgs = {
  hotSpotVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantCnvJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantCnvNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantCnvNonCanonicalTranscriptArgs = {
  id: Scalars['ID'];
  nonCanonicalTranscript: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantFusionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionClinVarVariantArgs = {
  clinVarVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionCopyChangeArgs = {
  copyChange: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionExon3PrimeArgs = {
  exon3Prime: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionExon5PrimeArgs = {
  exon5Prime: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionGene3PrimeArgs = {
  gene3Prime: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionGene5PrimeArgs = {
  gene5Prime: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionHotSpotVariantArgs = {
  hotSpotVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantFusionJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantFusionNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantFusionNonCanonicalTranscriptArgs = {
  id: Scalars['ID'];
  nonCanonicalTranscript: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantRegionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantRegionClinVarVariantArgs = {
  clinVarVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantRegionDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantRegionGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantRegionGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantRegionHotSpotVariantArgs = {
  hotSpotVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantRegionIsDeleteriousArgs = {
  id: Scalars['ID'];
  isDeleterious: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantRegionIsFrameshiftArgs = {
  id: Scalars['ID'];
  isFrameshift: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantRegionIsTruncatingArgs = {
  id: Scalars['ID'];
  isTruncating: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantRegionJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantRegionNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantRegionNonCanonicalTranscriptArgs = {
  id: Scalars['ID'];
  nonCanonicalTranscript: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantRegionProteinEffectArgs = {
  id: Scalars['ID'];
  proteinEffect: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantRegionRegionValueArgs = {
  id: Scalars['ID'];
  regionValue: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantSnvIndelArgs = {
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantSnvIndelCDotArgs = {
  cDot: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantSnvIndelClinVarVariantArgs = {
  clinVarVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantSnvIndelDescriptionArgs = {
  description: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantSnvIndelExonArgs = {
  exon: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantSnvIndelGDotArgs = {
  gDot: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantSnvIndelGeneArgs = {
  gene: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantSnvIndelGoVariantArgs = {
  goVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantSnvIndelHotSpotVariantArgs = {
  hotSpotVariant: Array<Scalars['ID']>;
  id: Scalars['ID'];
};


export type MutationTypeDeleteVariantSnvIndelJaxVariantArgs = {
  id: Scalars['ID'];
  jaxVariant: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantSnvIndelNameArgs = {
  id: Scalars['ID'];
  name: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantSnvIndelNonCanonicalTranscriptArgs = {
  id: Scalars['ID'];
  nonCanonicalTranscript: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantSnvIndelPDotArgs = {
  id: Scalars['ID'];
  pDot: Array<Scalars['ID']>;
};


export type MutationTypeDeleteVariantSnvIndelProteinEffectArgs = {
  id: Scalars['ID'];
  proteinEffect: Array<Scalars['ID']>;
};


export type MutationTypeDeleteXRefArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeAdverseEventArgs = {
  grade?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeAuthorArgs = {
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  surname: Scalars['String'];
};


export type MutationTypeMergeClinVarVariantArgs = {
  cDot: Scalars['String'];
  gene: Scalars['String'];
  id: Scalars['ID'];
  pDot: Scalars['String'];
  variantId: Scalars['String'];
};


export type MutationTypeMergeClinicalTrialArgs = {
  acronym?: Maybe<Scalars['String']>;
  briefTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  officialTitle: Scalars['String'];
  resource: Scalars['String'];
  resourceId: Scalars['String'];
};


export type MutationTypeMergeDnaMarkerArgs = {
  id: Scalars['ID'];
  markerType: DnaMarkerType;
};


export type MutationTypeMergeDoDiseaseArgs = {
  doId: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeDrugCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableAssayComparatorArgs = {
  comparator: AssayComparator;
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableBooleanArgs = {
  booleanValue: ExtendedBoolean;
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableCopyChangeArgs = {
  cnvType: CnvType;
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableDoDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableFloatArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  floatValue: Scalars['Float'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableGoDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableImmuneCycleRoleArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  immuneCycleRole: ImmuneCycleRole;
};


export type MutationTypeMergeEditableImmuneFunctionArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  immuneFunction: ImmuneFunction;
};


export type MutationTypeMergeEditableImmunePhenotypeArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  immunePhenotype: ImmunePhenotype;
};


export type MutationTypeMergeEditableIntArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  intValue: Scalars['Int'];
};


export type MutationTypeMergeEditableJaxDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableObjectArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableOmniGeneReferenceArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableOncoTreeDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEditableProteinEffectArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  proteinEffect: VariantProteinEffect;
};


export type MutationTypeMergeEditableStatementArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeMergeEditableStringListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  stringList: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeMergeEditableTmbInterpretationArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  tmbInterpretation: TmbInterpretationType;
};


export type MutationTypeMergeEditableXRefListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeEvidenceArgs = {
  ampCapAscoTier: Scalars['String'];
  approvalStatus: Scalars['String'];
  evidenceType: EvidenceType;
  id: Scalars['ID'];
  notes: Scalars['String'];
  responseType: ResponseType;
};


export type MutationTypeMergeEvidenceAssociationArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeGoDiseaseArgs = {
  goId: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeGoVariantArgs = {
  gene: Scalars['String'];
  goId: Scalars['String'];
  id: Scalars['ID'];
  mutationType: Scalars['String'];
};


export type MutationTypeMergeGenomicVariantArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeGenomicVariantMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeHotSpotVariantArgs = {
  begin: Scalars['String'];
  end: Scalars['String'];
  gene: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  position: Scalars['Int'];
  referenceAminoAcid: Scalars['String'];
  variantAminoAcid: Scalars['String'];
};


export type MutationTypeMergeIhcAssayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeInternetReferenceArgs = {
  accessedDate: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  webAddress: Scalars['String'];
};


export type MutationTypeMergeJaxDiseaseArgs = {
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  source: Scalars['String'];
  termId: Scalars['String'];
};


export type MutationTypeMergeJaxDrugArgs = {
  id: Scalars['ID'];
  jaxId: Scalars['String'];
};


export type MutationTypeMergeJaxDrugClassArgs = {
  id: Scalars['ID'];
  jaxId: Scalars['String'];
};


export type MutationTypeMergeJaxGeneArgs = {
  chromosome: Scalars['String'];
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
};


export type MutationTypeMergeJaxVariantArgs = {
  cDot: Scalars['String'];
  gDot: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
  pDot: Scalars['String'];
  variantType: Scalars['String'];
};


export type MutationTypeMergeJournalArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  firstPage: Scalars['String'];
  id: Scalars['ID'];
  lastPage: Scalars['String'];
  publicationYear: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeMergeMCodeArgs = {
  id: Scalars['ID'];
  mcodeId: Scalars['String'];
  omniDisease: Scalars['String'];
};


export type MutationTypeMergeMsiMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeMarkerComponentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeMarkerProfileArgs = {
  conjunction: OmniConjunction;
  id: Scalars['ID'];
};


export type MutationTypeMergeMeetingAbstractReferenceArgs = {
  abstract?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  meetingDate: Scalars['String'];
  meetingName: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
};


export type MutationTypeMergeMyGeneInfoGeneArgs = {
  chromosome: Scalars['String'];
  end?: Maybe<Scalars['Int']>;
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  strand: Strand;
};


export type MutationTypeMergeNciDrugArgs = {
  id: Scalars['ID'];
  isAntineoplastic: Scalars['Boolean'];
  isImmuno: Scalars['Boolean'];
};


export type MutationTypeMergeOmniDiseaseArgs = {
  id: Scalars['ID'];
  omniDiseaseId: Scalars['String'];
  omniDiseaseType: OmniDiseaseType;
};


export type MutationTypeMergeOmniDrugArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeOmniGeneArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  panelName: Scalars['String'];
};


export type MutationTypeMergeOncoTreeDiseaseArgs = {
  code: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeMergeOncoTreeOccurrenceArgs = {
  disease: Scalars['String'];
  id: Scalars['ID'];
  oncoTreeCode: Scalars['String'];
  perThousandOccurrence: Scalars['Int'];
};


export type MutationTypeMergeOntologicalDiseaseArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeOutcomeArgs = {
  ConfidenceIntervalHi?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLo?: Maybe<Scalars['Float']>;
  ConfidenceIntervalType?: Maybe<Scalars['String']>;
  clinicalCharacteristics?: Maybe<Array<Maybe<Scalars['String']>>>;
  dose?: Maybe<Scalars['Int']>;
  doseUnit?: Maybe<Scalars['String']>;
  endpoint?: Maybe<EvidenceEndpoint>;
  groupSize?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  observation?: Maybe<Scalars['String']>;
  observationMethod?: Maybe<Scalars['String']>;
  outcome: Scalars['Float'];
  outcomeRangeMax?: Maybe<Scalars['Float']>;
  outcomeRangeMin?: Maybe<Scalars['Float']>;
  outcomeUnit: Scalars['String'];
  treatmentGroup?: Maybe<Scalars['String']>;
};


export type MutationTypeMergeProteinExpressionMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeProteinLevelAssayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeRnaSeqAssayArgs = {
  id: Scalars['ID'];
  resultType: RnaSeqResultType;
};


export type MutationTypeMergeRnaSeqSignatureMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeReferenceArgs = {
  id: Scalars['ID'];
  shortReference: Scalars['String'];
};


export type MutationTypeMergeTCodeArgs = {
  id: Scalars['ID'];
  tcodeId: Scalars['String'];
};


export type MutationTypeMergeTmbMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeMergeTherapeuticInterventionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeTherapyArgs = {
  conjunction: OmniConjunction;
  id: Scalars['ID'];
};


export type MutationTypeMergeTherapyComponentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeUniprotEntryArgs = {
  accessionNumber: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprotId: Scalars['String'];
};


export type MutationTypeMergeUserArgs = {
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTypeMergeVariantCnvArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeVariantFusionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeMergeVariantRegionArgs = {
  id: Scalars['ID'];
  indelType: IndelType;
  regionType: RegionType;
  variantType: VariantType;
};


export type MutationTypeMergeVariantSnvIndelArgs = {
  id: Scalars['ID'];
  indelType: IndelType;
  variantType: VariantType;
};


export type MutationTypeMergeXRefArgs = {
  id: Scalars['ID'];
  source: Scalars['String'];
  sourceId: Scalars['String'];
};


export type MutationTypeUpdateAdverseEventArgs = {
  grade?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateAuthorArgs = {
  firstInitial: Scalars['String'];
  id: Scalars['ID'];
  surname: Scalars['String'];
};


export type MutationTypeUpdateClinVarVariantArgs = {
  cDot: Scalars['String'];
  gene: Scalars['String'];
  id: Scalars['ID'];
  pDot: Scalars['String'];
  variantId: Scalars['String'];
};


export type MutationTypeUpdateClinicalTrialArgs = {
  acronym?: Maybe<Scalars['String']>;
  briefTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  officialTitle: Scalars['String'];
  resource: Scalars['String'];
  resourceId: Scalars['String'];
};


export type MutationTypeUpdateDnaMarkerArgs = {
  id: Scalars['ID'];
  markerType: DnaMarkerType;
};


export type MutationTypeUpdateDoDiseaseArgs = {
  doId: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateDrugCategoryArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableAssayComparatorArgs = {
  comparator: AssayComparator;
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableBooleanArgs = {
  booleanValue: ExtendedBoolean;
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableCopyChangeArgs = {
  cnvType: CnvType;
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableDoDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableFloatArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  floatValue: Scalars['Float'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableGoDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableImmuneCycleRoleArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  immuneCycleRole: ImmuneCycleRole;
};


export type MutationTypeUpdateEditableImmuneFunctionArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  immuneFunction: ImmuneFunction;
};


export type MutationTypeUpdateEditableImmunePhenotypeArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  immunePhenotype: ImmunePhenotype;
};


export type MutationTypeUpdateEditableIntArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  intValue: Scalars['Int'];
};


export type MutationTypeUpdateEditableJaxDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableObjectArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableOmniGeneReferenceArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableOncoTreeDiseaseListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEditableProteinEffectArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  proteinEffect: VariantProteinEffect;
};


export type MutationTypeUpdateEditableStatementArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  statement: Scalars['String'];
};


export type MutationTypeUpdateEditableStringListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  stringList: Array<Maybe<Scalars['String']>>;
};


export type MutationTypeUpdateEditableTmbInterpretationArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
  tmbInterpretation: TmbInterpretationType;
};


export type MutationTypeUpdateEditableXRefListArgs = {
  editDate: Scalars['String'];
  field: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateEvidenceArgs = {
  ampCapAscoTier: Scalars['String'];
  approvalStatus: Scalars['String'];
  evidenceType: EvidenceType;
  id: Scalars['ID'];
  notes: Scalars['String'];
  responseType: ResponseType;
};


export type MutationTypeUpdateEvidenceAssociationArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateGoDiseaseArgs = {
  goId: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateGoVariantArgs = {
  gene: Scalars['String'];
  goId: Scalars['String'];
  id: Scalars['ID'];
  mutationType: Scalars['String'];
};


export type MutationTypeUpdateGenomicVariantArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateGenomicVariantMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateHotSpotVariantArgs = {
  begin: Scalars['String'];
  end: Scalars['String'];
  gene: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  position: Scalars['Int'];
  referenceAminoAcid: Scalars['String'];
  variantAminoAcid: Scalars['String'];
};


export type MutationTypeUpdateIhcAssayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateInternetReferenceArgs = {
  accessedDate: Scalars['String'];
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  webAddress: Scalars['String'];
};


export type MutationTypeUpdateJaxDiseaseArgs = {
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  source: Scalars['String'];
  termId: Scalars['String'];
};


export type MutationTypeUpdateJaxDrugArgs = {
  id: Scalars['ID'];
  jaxId: Scalars['String'];
};


export type MutationTypeUpdateJaxDrugClassArgs = {
  id: Scalars['ID'];
  jaxId: Scalars['String'];
};


export type MutationTypeUpdateJaxGeneArgs = {
  chromosome: Scalars['String'];
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
};


export type MutationTypeUpdateJaxVariantArgs = {
  cDot: Scalars['String'];
  gDot: Scalars['String'];
  id: Scalars['ID'];
  jaxId: Scalars['String'];
  name: Scalars['String'];
  pDot: Scalars['String'];
  variantType: Scalars['String'];
};


export type MutationTypeUpdateJournalArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateLiteratureReferenceArgs = {
  DOI?: Maybe<Scalars['String']>;
  PMID?: Maybe<Scalars['String']>;
  abstract?: Maybe<Scalars['String']>;
  firstPage: Scalars['String'];
  id: Scalars['ID'];
  lastPage: Scalars['String'];
  publicationYear: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
  volume: Scalars['String'];
};


export type MutationTypeUpdateMCodeArgs = {
  id: Scalars['ID'];
  mcodeId: Scalars['String'];
  omniDisease: Scalars['String'];
};


export type MutationTypeUpdateMsiMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateMarkerComponentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateMarkerProfileArgs = {
  conjunction: OmniConjunction;
  id: Scalars['ID'];
};


export type MutationTypeUpdateMeetingAbstractReferenceArgs = {
  abstract?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  meetingDate: Scalars['String'];
  meetingName: Scalars['String'];
  shortReference: Scalars['String'];
  title: Scalars['String'];
};


export type MutationTypeUpdateMyGeneInfoGeneArgs = {
  chromosome: Scalars['String'];
  end?: Maybe<Scalars['Int']>;
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  strand: Strand;
};


export type MutationTypeUpdateNciDrugArgs = {
  id: Scalars['ID'];
  isAntineoplastic: Scalars['Boolean'];
  isImmuno: Scalars['Boolean'];
};


export type MutationTypeUpdateOmniDiseaseArgs = {
  id: Scalars['ID'];
  omniDiseaseId: Scalars['String'];
  omniDiseaseType: OmniDiseaseType;
};


export type MutationTypeUpdateOmniDrugArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateOmniGeneArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
  panelName: Scalars['String'];
};


export type MutationTypeUpdateOncoTreeDiseaseArgs = {
  code: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationTypeUpdateOncoTreeOccurrenceArgs = {
  disease: Scalars['String'];
  id: Scalars['ID'];
  oncoTreeCode: Scalars['String'];
  perThousandOccurrence: Scalars['Int'];
};


export type MutationTypeUpdateOntologicalDiseaseArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateOutcomeArgs = {
  ConfidenceIntervalHi?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLo?: Maybe<Scalars['Float']>;
  ConfidenceIntervalType?: Maybe<Scalars['String']>;
  clinicalCharacteristics?: Maybe<Array<Maybe<Scalars['String']>>>;
  dose?: Maybe<Scalars['Int']>;
  doseUnit?: Maybe<Scalars['String']>;
  endpoint?: Maybe<EvidenceEndpoint>;
  groupSize?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  observation?: Maybe<Scalars['String']>;
  observationMethod?: Maybe<Scalars['String']>;
  outcome: Scalars['Float'];
  outcomeRangeMax?: Maybe<Scalars['Float']>;
  outcomeRangeMin?: Maybe<Scalars['Float']>;
  outcomeUnit: Scalars['String'];
  treatmentGroup?: Maybe<Scalars['String']>;
};


export type MutationTypeUpdateProteinExpressionMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateProteinLevelAssayArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateRnaSeqAssayArgs = {
  id: Scalars['ID'];
  resultType: RnaSeqResultType;
};


export type MutationTypeUpdateRnaSeqSignatureMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateReferenceArgs = {
  id: Scalars['ID'];
  shortReference: Scalars['String'];
};


export type MutationTypeUpdateTCodeArgs = {
  id: Scalars['ID'];
  tcodeId: Scalars['String'];
};


export type MutationTypeUpdateTmbMarkerArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateTargetArgs = {
  id: Scalars['ID'];
  name: Scalars['String'];
};


export type MutationTypeUpdateTherapeuticInterventionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateTherapyArgs = {
  conjunction: OmniConjunction;
  id: Scalars['ID'];
};


export type MutationTypeUpdateTherapyComponentArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateUniprotEntryArgs = {
  accessionNumber: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprotId: Scalars['String'];
};


export type MutationTypeUpdateUserArgs = {
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationTypeUpdateVariantCnvArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateVariantFusionArgs = {
  id: Scalars['ID'];
};


export type MutationTypeUpdateVariantRegionArgs = {
  id: Scalars['ID'];
  indelType: IndelType;
  regionType: RegionType;
  variantType: VariantType;
};


export type MutationTypeUpdateVariantSnvIndelArgs = {
  id: Scalars['ID'];
  indelType: IndelType;
  variantType: VariantType;
};


export type MutationTypeUpdateXRefArgs = {
  id: Scalars['ID'];
  source: Scalars['String'];
  sourceId: Scalars['String'];
};

export type MyGeneInfoGene = {
   __typename?: 'MyGeneInfoGene';
  _id?: Maybe<Scalars['Long']>;
  chromosome: Scalars['String'];
  description: EditableStatement;
  end?: Maybe<Scalars['Int']>;
  entrezId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  start?: Maybe<Scalars['Int']>;
  strand: Strand;
  uniprotEntry: UniprotEntry;
};


export type MyGeneInfoGeneDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type MyGeneInfoGeneUniprotEntryArgs = {
  accessionNumber?: Maybe<Scalars['String']>;
  accessionNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_UniprotEntryFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_UniprotEntryOrdering>>>;
  uniprotId?: Maybe<Scalars['String']>;
  uniprotIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type NciDrug = {
   __typename?: 'NCIDrug';
  _id?: Maybe<Scalars['Long']>;
  annotationDate: EditableStatement;
  conceptCode: EditableStatement;
  definition: EditableStatement;
  drugCategory: EditableStatement;
  id: Scalars['ID'];
  isAntineoplastic: Scalars['Boolean'];
  isImmuno: Scalars['Boolean'];
  modulator: EditableStatement;
  name: EditableStatement;
  synonyms: EditableStringList;
};


export type NciDrugAnnotationDateArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NciDrugConceptCodeArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NciDrugDefinitionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NciDrugDrugCategoryArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NciDrugModulatorArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NciDrugNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type NciDrugSynonymsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export enum OmniConjunction {
  All = 'All',
  Any = 'Any',
  None = 'None'
}

export type OmniDisease = {
   __typename?: 'OmniDisease';
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  name: EditableStatement;
  omniDiseaseId: Scalars['String'];
  omniDiseaseType: OmniDiseaseType;
};


export type OmniDiseaseNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum OmniDiseaseType {
  Hematologic = 'Hematologic',
  Other = 'Other',
  SolidTumor = 'SolidTumor'
}

export type OmniDrug = TherapyComponent & {
   __typename?: 'OmniDrug';
  _id?: Maybe<Scalars['Long']>;
  componentOf: Array<Maybe<Therapy>>;
  definition: EditableStatement;
  drugCategories: Array<Maybe<DrugCategory>>;
  id: Scalars['ID'];
  jaxDrug?: Maybe<JaxDrug>;
  name: EditableStatement;
  nciDrug?: Maybe<NciDrug>;
  synonyms: EditableStringList;
  target: Array<Maybe<Target>>;
  tradeName: EditableStatement;
};


export type OmniDrugComponentOfArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  conjunction?: Maybe<OmniConjunction>;
  conjunctions?: Maybe<Array<Maybe<OmniConjunction>>>;
  filter?: Maybe<_TherapyFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TherapyOrdering>>>;
};


export type OmniDrugDefinitionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OmniDrugDrugCategoriesArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_DrugCategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DrugCategoryOrdering>>>;
};


export type OmniDrugJaxDrugArgs = {
  filter?: Maybe<_JaxDrugFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JaxDrugOrdering>>>;
};


export type OmniDrugNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OmniDrugNciDrugArgs = {
  filter?: Maybe<_NciDrugFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isAntineoplastic?: Maybe<Scalars['Boolean']>;
  isAntineoplastics?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  isImmuno?: Maybe<Scalars['Boolean']>;
  isImmunos?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  orderBy?: Maybe<Array<Maybe<_NciDrugOrdering>>>;
};


export type OmniDrugSynonymsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type OmniDrugTargetArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TargetFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TargetOrdering>>>;
};


export type OmniDrugTradeNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OmniGene = Target & {
   __typename?: 'OmniGene';
  _id?: Maybe<Scalars['Long']>;
  geneDescription: EditableStatement;
  id: Scalars['ID'];
  jaxGene?: Maybe<JaxGene>;
  myGeneInfoGene: MyGeneInfoGene;
  name: Scalars['String'];
  oncogenicCategory: EditableStatement;
  panelName: Scalars['String'];
  synonyms: EditableStringList;
  transcript: EditableStatement;
  uniprotEntry?: Maybe<UniprotEntry>;
  variantMarkers: Array<Maybe<GenomicVariantMarker>>;
  variants: Array<Maybe<GenomicVariant>>;
};


export type OmniGeneGeneDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
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
};


export type OmniGeneMyGeneInfoGeneArgs = {
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['Int']>;
  ends?: Maybe<Array<Maybe<Scalars['Int']>>>;
  entrezId?: Maybe<Scalars['String']>;
  entrezIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_MyGeneInfoGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_MyGeneInfoGeneOrdering>>>;
  start?: Maybe<Scalars['Int']>;
  starts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  strand?: Maybe<Strand>;
  strands?: Maybe<Array<Maybe<Strand>>>;
};


export type OmniGeneOncogenicCategoryArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OmniGeneSynonymsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type OmniGeneTranscriptArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OmniGeneUniprotEntryArgs = {
  accessionNumber?: Maybe<Scalars['String']>;
  accessionNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_UniprotEntryFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_UniprotEntryOrdering>>>;
  uniprotId?: Maybe<Scalars['String']>;
  uniprotIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OmniGeneVariantMarkersArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_GenomicVariantMarkerFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GenomicVariantMarkerOrdering>>>;
};


export type OmniGeneVariantsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_GenomicVariantFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GenomicVariantOrdering>>>;
};

export type OncoTreeDisease = {
   __typename?: 'OncoTreeDisease';
  _id?: Maybe<Scalars['Long']>;
  children: Array<Maybe<OncoTreeDisease>>;
  code: Scalars['String'];
  id: Scalars['ID'];
  mainType: EditableStatement;
  name: EditableStatement;
  parent?: Maybe<Array<Maybe<OncoTreeDisease>>>;
  tissue: EditableStatement;
  xrefs: EditableXRefList;
};


export type OncoTreeDiseaseChildrenArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  code?: Maybe<Scalars['String']>;
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OncoTreeDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OncoTreeDiseaseOrdering>>>;
};


export type OncoTreeDiseaseMainTypeArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OncoTreeDiseaseNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OncoTreeDiseaseParentArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  code?: Maybe<Scalars['String']>;
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OncoTreeDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OncoTreeDiseaseOrdering>>>;
};


export type OncoTreeDiseaseTissueArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OncoTreeDiseaseXrefsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableXRefListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableXRefListOrdering>>>;
};

export type OncoTreeOccurrence = {
   __typename?: 'OncoTreeOccurrence';
  _id?: Maybe<Scalars['Long']>;
  disease: Scalars['String'];
  id: Scalars['ID'];
  occurrences: EditableInt;
  oncoTreeCode: Scalars['String'];
  perThousandOccurrence: Scalars['Int'];
  percentOccurrence: EditableStatement;
  totalSamples: EditableInt;
};


export type OncoTreeOccurrenceOccurrencesArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableIntFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  intValue?: Maybe<Scalars['Int']>;
  intValues?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableIntOrdering>>>;
};


export type OncoTreeOccurrencePercentOccurrenceArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OncoTreeOccurrenceTotalSamplesArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableIntFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  intValue?: Maybe<Scalars['Int']>;
  intValues?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableIntOrdering>>>;
};

export type OntologicalDisease = {
   __typename?: 'OntologicalDisease';
  _id?: Maybe<Scalars['Long']>;
  description: EditableStatement;
  doDiseases: EditableDoDiseaseList;
  goDiseases: EditableGoDiseaseList;
  id: Scalars['ID'];
  jaxDiseases: EditableJaxDiseaseList;
  name: EditableStatement;
  oncoTreeDiseases: EditableOncoTreeDiseaseList;
  synonyms: EditableStringList;
  xrefs: EditableXRefList;
};


export type OntologicalDiseaseDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OntologicalDiseaseDoDiseasesArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableDoDiseaseListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableDoDiseaseListOrdering>>>;
};


export type OntologicalDiseaseGoDiseasesArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableGoDiseaseListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableGoDiseaseListOrdering>>>;
};


export type OntologicalDiseaseJaxDiseasesArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableJaxDiseaseListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableJaxDiseaseListOrdering>>>;
};


export type OntologicalDiseaseNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OntologicalDiseaseOncoTreeDiseasesArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableOncoTreeDiseaseListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableOncoTreeDiseaseListOrdering>>>;
};


export type OntologicalDiseaseSynonymsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type OntologicalDiseaseXrefsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableXRefListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableXRefListOrdering>>>;
};

export type Outcome = {
   __typename?: 'Outcome';
  ConfidenceIntervalHi?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLo?: Maybe<Scalars['Float']>;
  ConfidenceIntervalType?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['Long']>;
  clinicalCharacteristics?: Maybe<Array<Maybe<Scalars['String']>>>;
  dose?: Maybe<Scalars['Int']>;
  doseUnit?: Maybe<Scalars['String']>;
  endpoint?: Maybe<EvidenceEndpoint>;
  evidences: Array<Maybe<Evidence>>;
  groupSize?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  notes?: Maybe<Scalars['String']>;
  observation?: Maybe<Scalars['String']>;
  observationMethod?: Maybe<Scalars['String']>;
  outcome: Scalars['Float'];
  outcomeRangeMax?: Maybe<Scalars['Float']>;
  outcomeRangeMin?: Maybe<Scalars['Float']>;
  outcomeUnit: Scalars['String'];
  treatmentGroup?: Maybe<Scalars['String']>;
};


export type OutcomeEvidencesArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  ampCapAscoTier?: Maybe<Scalars['String']>;
  ampCapAscoTiers?: Maybe<Array<Maybe<Scalars['String']>>>;
  approvalStatus?: Maybe<Scalars['String']>;
  approvalStatuss?: Maybe<Array<Maybe<Scalars['String']>>>;
  evidenceType?: Maybe<EvidenceType>;
  evidenceTypes?: Maybe<Array<Maybe<EvidenceType>>>;
  filter?: Maybe<_EvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notes?: Maybe<Scalars['String']>;
  notess?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EvidenceOrdering>>>;
  responseType?: Maybe<ResponseType>;
  responseTypes?: Maybe<Array<Maybe<ResponseType>>>;
};

export type ProteinExpressionMarker = MarkerComponent & {
   __typename?: 'ProteinExpressionMarker';
  IHCAssay: IhcAssay;
  RNASeqAssay: RnaSeqAssay;
  _id?: Maybe<Scalars['Long']>;
  assay: ProteinLevelAssay;
  gene?: Maybe<OmniGene>;
  id: Scalars['ID'];
  immuneCycleRoles: Array<Maybe<EditableImmuneCycleRole>>;
  immuneFunctions: Array<Maybe<EditableImmuneFunction>>;
  immunePhenotypes: Array<Maybe<EditableImmunePhenotype>>;
  method: EditableStatement;
  name: EditableStatement;
  resultString: EditableStatement;
  synonyms: EditableStringList;
};


export type ProteinExpressionMarkerIhcAssayArgs = {
  filter?: Maybe<_IhcAssayFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_IhcAssayOrdering>>>;
};


export type ProteinExpressionMarkerRnaSeqAssayArgs = {
  filter?: Maybe<_RnaSeqAssayFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_RnaSeqAssayOrdering>>>;
  resultType?: Maybe<RnaSeqResultType>;
  resultTypes?: Maybe<Array<Maybe<RnaSeqResultType>>>;
};


export type ProteinExpressionMarkerAssayArgs = {
  filter?: Maybe<_ProteinLevelAssayFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_ProteinLevelAssayOrdering>>>;
};


export type ProteinExpressionMarkerGeneArgs = {
  filter?: Maybe<_OmniGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OmniGeneOrdering>>>;
  panelName?: Maybe<Scalars['String']>;
  panelNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ProteinExpressionMarkerImmuneCycleRolesArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableImmuneCycleRoleFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  immuneCycleRole?: Maybe<ImmuneCycleRole>;
  immuneCycleRoles?: Maybe<Array<Maybe<ImmuneCycleRole>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableImmuneCycleRoleOrdering>>>;
};


export type ProteinExpressionMarkerImmuneFunctionsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableImmuneFunctionFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  immuneFunction?: Maybe<ImmuneFunction>;
  immuneFunctions?: Maybe<Array<Maybe<ImmuneFunction>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableImmuneFunctionOrdering>>>;
};


export type ProteinExpressionMarkerImmunePhenotypesArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableImmunePhenotypeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  immunePhenotype?: Maybe<ImmunePhenotype>;
  immunePhenotypes?: Maybe<Array<Maybe<ImmunePhenotype>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableImmunePhenotypeOrdering>>>;
};


export type ProteinExpressionMarkerMethodArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ProteinExpressionMarkerNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ProteinExpressionMarkerResultStringArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ProteinExpressionMarkerSynonymsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};

export type ProteinLevelAssay = {
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  name: EditableStatement;
};


export type ProteinLevelAssayNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QueryType = {
   __typename?: 'QueryType';
  AdverseEvent?: Maybe<Array<Maybe<AdverseEvent>>>;
  Author?: Maybe<Array<Maybe<Author>>>;
  ClinVarVariant?: Maybe<Array<Maybe<ClinVarVariant>>>;
  ClinicalTrial?: Maybe<Array<Maybe<ClinicalTrial>>>;
  DNAMarker?: Maybe<Array<Maybe<DnaMarker>>>;
  DODisease?: Maybe<Array<Maybe<DoDisease>>>;
  DrugCategory?: Maybe<Array<Maybe<DrugCategory>>>;
  EditableAssayComparator?: Maybe<Array<Maybe<EditableAssayComparator>>>;
  EditableBoolean?: Maybe<Array<Maybe<EditableBoolean>>>;
  EditableCopyChange?: Maybe<Array<Maybe<EditableCopyChange>>>;
  EditableDODiseaseList?: Maybe<Array<Maybe<EditableDoDiseaseList>>>;
  EditableFloat?: Maybe<Array<Maybe<EditableFloat>>>;
  EditableGODiseaseList?: Maybe<Array<Maybe<EditableGoDiseaseList>>>;
  EditableImmuneCycleRole?: Maybe<Array<Maybe<EditableImmuneCycleRole>>>;
  EditableImmuneFunction?: Maybe<Array<Maybe<EditableImmuneFunction>>>;
  EditableImmunePhenotype?: Maybe<Array<Maybe<EditableImmunePhenotype>>>;
  EditableInt?: Maybe<Array<Maybe<EditableInt>>>;
  EditableJAXDiseaseList?: Maybe<Array<Maybe<EditableJaxDiseaseList>>>;
  EditableObject?: Maybe<Array<Maybe<EditableObject>>>;
  EditableOmniGeneReference?: Maybe<Array<Maybe<EditableOmniGeneReference>>>;
  EditableOncoTreeDiseaseList?: Maybe<Array<Maybe<EditableOncoTreeDiseaseList>>>;
  EditableProteinEffect?: Maybe<Array<Maybe<EditableProteinEffect>>>;
  EditableStatement?: Maybe<Array<Maybe<EditableStatement>>>;
  EditableStringList?: Maybe<Array<Maybe<EditableStringList>>>;
  EditableTMBInterpretation?: Maybe<Array<Maybe<EditableTmbInterpretation>>>;
  EditableXRefList?: Maybe<Array<Maybe<EditableXRefList>>>;
  Evidence?: Maybe<Array<Maybe<Evidence>>>;
  EvidenceAssociation?: Maybe<Array<Maybe<EvidenceAssociation>>>;
  GODisease?: Maybe<Array<Maybe<GoDisease>>>;
  GOVariant?: Maybe<Array<Maybe<GoVariant>>>;
  GenomicVariant?: Maybe<Array<Maybe<GenomicVariant>>>;
  GenomicVariantMarker?: Maybe<Array<Maybe<GenomicVariantMarker>>>;
  HotSpotVariant?: Maybe<Array<Maybe<HotSpotVariant>>>;
  IHCAssay?: Maybe<Array<Maybe<IhcAssay>>>;
  InternetReference?: Maybe<Array<Maybe<InternetReference>>>;
  JaxDisease?: Maybe<Array<Maybe<JaxDisease>>>;
  JaxDrug?: Maybe<Array<Maybe<JaxDrug>>>;
  JaxDrugClass?: Maybe<Array<Maybe<JaxDrugClass>>>;
  JaxGene?: Maybe<Array<Maybe<JaxGene>>>;
  JaxVariant?: Maybe<Array<Maybe<JaxVariant>>>;
  Journal?: Maybe<Array<Maybe<Journal>>>;
  LiteratureReference?: Maybe<Array<Maybe<LiteratureReference>>>;
  MCode?: Maybe<Array<Maybe<MCode>>>;
  MSIMarker?: Maybe<Array<Maybe<MsiMarker>>>;
  MarkerComponent?: Maybe<Array<Maybe<MarkerComponent>>>;
  MarkerProfile?: Maybe<Array<Maybe<MarkerProfile>>>;
  MeetingAbstractReference?: Maybe<Array<Maybe<MeetingAbstractReference>>>;
  MyGeneInfoGene?: Maybe<Array<Maybe<MyGeneInfoGene>>>;
  NCIDrug?: Maybe<Array<Maybe<NciDrug>>>;
  OmniDisease?: Maybe<Array<Maybe<OmniDisease>>>;
  OmniDrug?: Maybe<Array<Maybe<OmniDrug>>>;
  OmniGene?: Maybe<Array<Maybe<OmniGene>>>;
  OncoTreeDisease?: Maybe<Array<Maybe<OncoTreeDisease>>>;
  OncoTreeOccurrence?: Maybe<Array<Maybe<OncoTreeOccurrence>>>;
  OntologicalDisease?: Maybe<Array<Maybe<OntologicalDisease>>>;
  Outcome?: Maybe<Array<Maybe<Outcome>>>;
  ProteinExpressionMarker?: Maybe<Array<Maybe<ProteinExpressionMarker>>>;
  ProteinLevelAssay?: Maybe<Array<Maybe<ProteinLevelAssay>>>;
  RNASeqAssay?: Maybe<Array<Maybe<RnaSeqAssay>>>;
  RNASeqSignatureMarker?: Maybe<Array<Maybe<RnaSeqSignatureMarker>>>;
  Reference?: Maybe<Array<Maybe<Reference>>>;
  TCode?: Maybe<Array<Maybe<TCode>>>;
  TMBMarker?: Maybe<Array<Maybe<TmbMarker>>>;
  Target?: Maybe<Array<Maybe<Target>>>;
  TherapeuticIntervention?: Maybe<Array<Maybe<TherapeuticIntervention>>>;
  Therapy?: Maybe<Array<Maybe<Therapy>>>;
  TherapyComponent?: Maybe<Array<Maybe<TherapyComponent>>>;
  UniprotEntry?: Maybe<Array<Maybe<UniprotEntry>>>;
  User?: Maybe<Array<Maybe<User>>>;
  VariantCNV?: Maybe<Array<Maybe<VariantCnv>>>;
  VariantFusion?: Maybe<Array<Maybe<VariantFusion>>>;
  VariantRegion?: Maybe<Array<Maybe<VariantRegion>>>;
  VariantSNVIndel?: Maybe<Array<Maybe<VariantSnvIndel>>>;
  XRef?: Maybe<Array<Maybe<XRef>>>;
};


export type QueryTypeAdverseEventArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AdverseEventFilter>;
  first?: Maybe<Scalars['Int']>;
  grade?: Maybe<Scalars['Int']>;
  grades?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AdverseEventOrdering>>>;
};


export type QueryTypeAuthorArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_AuthorFilter>;
  first?: Maybe<Scalars['Int']>;
  firstInitial?: Maybe<Scalars['String']>;
  firstInitials?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_AuthorOrdering>>>;
  surname?: Maybe<Scalars['String']>;
  surnames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeClinVarVariantArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ClinVarVariantFilter>;
  first?: Maybe<Scalars['Int']>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ClinVarVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantId?: Maybe<Scalars['String']>;
  variantIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeClinicalTrialArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  acronym?: Maybe<Scalars['String']>;
  acronyms?: Maybe<Array<Maybe<Scalars['String']>>>;
  briefTitle?: Maybe<Scalars['String']>;
  briefTitles?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ClinicalTrialFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  officialTitle?: Maybe<Scalars['String']>;
  officialTitles?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ClinicalTrialOrdering>>>;
  resource?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
  resourceIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  resources?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeDnaMarkerArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_DnaMarkerFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  markerType?: Maybe<DnaMarkerType>;
  markerTypes?: Maybe<Array<Maybe<DnaMarkerType>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DnaMarkerOrdering>>>;
};


export type QueryTypeDoDiseaseArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  doId?: Maybe<Scalars['String']>;
  doIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_DoDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DoDiseaseOrdering>>>;
};


export type QueryTypeDrugCategoryArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_DrugCategoryFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_DrugCategoryOrdering>>>;
};


export type QueryTypeEditableAssayComparatorArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  comparator?: Maybe<AssayComparator>;
  comparators?: Maybe<Array<Maybe<AssayComparator>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableAssayComparatorFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableAssayComparatorOrdering>>>;
};


export type QueryTypeEditableBooleanArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  booleanValue?: Maybe<ExtendedBoolean>;
  booleanValues?: Maybe<Array<Maybe<ExtendedBoolean>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableBooleanFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableBooleanOrdering>>>;
};


export type QueryTypeEditableCopyChangeArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  cnvType?: Maybe<CnvType>;
  cnvTypes?: Maybe<Array<Maybe<CnvType>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableCopyChangeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableCopyChangeOrdering>>>;
};


export type QueryTypeEditableDoDiseaseListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableDoDiseaseListFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableDoDiseaseListOrdering>>>;
};


export type QueryTypeEditableFloatArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableFloatFilter>;
  first?: Maybe<Scalars['Int']>;
  floatValue?: Maybe<Scalars['Float']>;
  floatValues?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableFloatOrdering>>>;
};


export type QueryTypeEditableGoDiseaseListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableGoDiseaseListFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableGoDiseaseListOrdering>>>;
};


export type QueryTypeEditableImmuneCycleRoleArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableImmuneCycleRoleFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  immuneCycleRole?: Maybe<ImmuneCycleRole>;
  immuneCycleRoles?: Maybe<Array<Maybe<ImmuneCycleRole>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableImmuneCycleRoleOrdering>>>;
};


export type QueryTypeEditableImmuneFunctionArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableImmuneFunctionFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  immuneFunction?: Maybe<ImmuneFunction>;
  immuneFunctions?: Maybe<Array<Maybe<ImmuneFunction>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableImmuneFunctionOrdering>>>;
};


export type QueryTypeEditableImmunePhenotypeArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableImmunePhenotypeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  immunePhenotype?: Maybe<ImmunePhenotype>;
  immunePhenotypes?: Maybe<Array<Maybe<ImmunePhenotype>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableImmunePhenotypeOrdering>>>;
};


export type QueryTypeEditableIntArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableIntFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  intValue?: Maybe<Scalars['Int']>;
  intValues?: Maybe<Array<Maybe<Scalars['Int']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableIntOrdering>>>;
};


export type QueryTypeEditableJaxDiseaseListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableJaxDiseaseListFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableJaxDiseaseListOrdering>>>;
};


export type QueryTypeEditableObjectArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableObjectFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableObjectOrdering>>>;
};


export type QueryTypeEditableOmniGeneReferenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableOmniGeneReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableOmniGeneReferenceOrdering>>>;
};


export type QueryTypeEditableOncoTreeDiseaseListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableOncoTreeDiseaseListFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableOncoTreeDiseaseListOrdering>>>;
};


export type QueryTypeEditableProteinEffectArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableProteinEffectFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableProteinEffectOrdering>>>;
  proteinEffect?: Maybe<VariantProteinEffect>;
  proteinEffects?: Maybe<Array<Maybe<VariantProteinEffect>>>;
};


export type QueryTypeEditableStatementArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
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


export type QueryTypeEditableStringListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStringListFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableStringListOrdering>>>;
  stringList?: Maybe<Array<Maybe<Scalars['String']>>>;
  stringLists?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
};


export type QueryTypeEditableTmbInterpretationArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableTmbInterpretationFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableTmbInterpretationOrdering>>>;
  tmbInterpretation?: Maybe<TmbInterpretationType>;
  tmbInterpretations?: Maybe<Array<Maybe<TmbInterpretationType>>>;
};


export type QueryTypeEditableXRefListArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableXRefListFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableXRefListOrdering>>>;
};


export type QueryTypeEvidenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  ampCapAscoTier?: Maybe<Scalars['String']>;
  ampCapAscoTiers?: Maybe<Array<Maybe<Scalars['String']>>>;
  approvalStatus?: Maybe<Scalars['String']>;
  approvalStatuss?: Maybe<Array<Maybe<Scalars['String']>>>;
  evidenceType?: Maybe<EvidenceType>;
  evidenceTypes?: Maybe<Array<Maybe<EvidenceType>>>;
  filter?: Maybe<_EvidenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notes?: Maybe<Scalars['String']>;
  notess?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EvidenceOrdering>>>;
  responseType?: Maybe<ResponseType>;
  responseTypes?: Maybe<Array<Maybe<ResponseType>>>;
};


export type QueryTypeEvidenceAssociationArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_EvidenceAssociationFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EvidenceAssociationOrdering>>>;
};


export type QueryTypeGoDiseaseArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_GoDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GoDiseaseOrdering>>>;
};


export type QueryTypeGoVariantArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_GoVariantFilter>;
  first?: Maybe<Scalars['Int']>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mutationType?: Maybe<Scalars['String']>;
  mutationTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GoVariantOrdering>>>;
};


export type QueryTypeGenomicVariantArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_GenomicVariantFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GenomicVariantOrdering>>>;
};


export type QueryTypeGenomicVariantMarkerArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_GenomicVariantMarkerFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_GenomicVariantMarkerOrdering>>>;
};


export type QueryTypeHotSpotVariantArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  begin?: Maybe<Scalars['String']>;
  begins?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['String']>;
  ends?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_HotSpotVariantFilter>;
  first?: Maybe<Scalars['Int']>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_HotSpotVariantOrdering>>>;
  position?: Maybe<Scalars['Int']>;
  positions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  referenceAminoAcid?: Maybe<Scalars['String']>;
  referenceAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantAminoAcid?: Maybe<Scalars['String']>;
  variantAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeIhcAssayArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_IhcAssayFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_IhcAssayOrdering>>>;
};


export type QueryTypeInternetReferenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  accessedDate?: Maybe<Scalars['String']>;
  accessedDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_InternetReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_InternetReferenceOrdering>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  webAddress?: Maybe<Scalars['String']>;
  webAddresss?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeJaxDiseaseArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JaxDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JaxDiseaseOrdering>>>;
  source?: Maybe<Scalars['String']>;
  sources?: Maybe<Array<Maybe<Scalars['String']>>>;
  termId?: Maybe<Scalars['String']>;
  termIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeJaxDrugArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JaxDrugFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JaxDrugOrdering>>>;
};


export type QueryTypeJaxDrugClassArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_JaxDrugClassFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JaxDrugClassOrdering>>>;
};


export type QueryTypeJaxGeneArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
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
};


export type QueryTypeJaxVariantArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_JaxVariantFilter>;
  first?: Maybe<Scalars['Int']>;
  gDot?: Maybe<Scalars['String']>;
  gDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_JaxVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantType?: Maybe<Scalars['String']>;
  variantTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
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
  firstPage?: Maybe<Scalars['String']>;
  firstPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  lastPage?: Maybe<Scalars['String']>;
  lastPages?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_LiteratureReferenceOrdering>>>;
  publicationYear?: Maybe<Scalars['String']>;
  publicationYears?: Maybe<Array<Maybe<Scalars['String']>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
  volume?: Maybe<Scalars['String']>;
  volumes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeMCodeArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_MCodeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mcodeId?: Maybe<Scalars['String']>;
  mcodeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  omniDisease?: Maybe<Scalars['String']>;
  omniDiseases?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_MCodeOrdering>>>;
};


export type QueryTypeMsiMarkerArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_MsiMarkerFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MsiMarkerOrdering>>>;
};


export type QueryTypeMarkerComponentArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_MarkerComponentFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MarkerComponentOrdering>>>;
};


export type QueryTypeMarkerProfileArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  conjunction?: Maybe<OmniConjunction>;
  conjunctions?: Maybe<Array<Maybe<OmniConjunction>>>;
  filter?: Maybe<_MarkerProfileFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MarkerProfileOrdering>>>;
};


export type QueryTypeMeetingAbstractReferenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  abstract?: Maybe<Scalars['String']>;
  abstracts?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_MeetingAbstractReferenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  meetingDate?: Maybe<Scalars['String']>;
  meetingDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  meetingName?: Maybe<Scalars['String']>;
  meetingNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MeetingAbstractReferenceOrdering>>>;
  shortReference?: Maybe<Scalars['String']>;
  shortReferences?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeMyGeneInfoGeneArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['Int']>;
  ends?: Maybe<Array<Maybe<Scalars['Int']>>>;
  entrezId?: Maybe<Scalars['String']>;
  entrezIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_MyGeneInfoGeneFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_MyGeneInfoGeneOrdering>>>;
  start?: Maybe<Scalars['Int']>;
  starts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  strand?: Maybe<Strand>;
  strands?: Maybe<Array<Maybe<Strand>>>;
};


export type QueryTypeNciDrugArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_NciDrugFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  isAntineoplastic?: Maybe<Scalars['Boolean']>;
  isAntineoplastics?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  isImmuno?: Maybe<Scalars['Boolean']>;
  isImmunos?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_NciDrugOrdering>>>;
};


export type QueryTypeOmniDiseaseArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_OmniDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  omniDiseaseId?: Maybe<Scalars['String']>;
  omniDiseaseIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  omniDiseaseType?: Maybe<OmniDiseaseType>;
  omniDiseaseTypes?: Maybe<Array<Maybe<OmniDiseaseType>>>;
  orderBy?: Maybe<Array<Maybe<_OmniDiseaseOrdering>>>;
};


export type QueryTypeOmniDrugArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_OmniDrugFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OmniDrugOrdering>>>;
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


export type QueryTypeOncoTreeDiseaseArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  code?: Maybe<Scalars['String']>;
  codes?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OncoTreeDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OncoTreeDiseaseOrdering>>>;
};


export type QueryTypeOncoTreeOccurrenceArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  disease?: Maybe<Scalars['String']>;
  diseases?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_OncoTreeOccurrenceFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  oncoTreeCode?: Maybe<Scalars['String']>;
  oncoTreeCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OncoTreeOccurrenceOrdering>>>;
  perThousandOccurrence?: Maybe<Scalars['Int']>;
  perThousandOccurrences?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type QueryTypeOntologicalDiseaseArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_OntologicalDiseaseFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OntologicalDiseaseOrdering>>>;
};


export type QueryTypeOutcomeArgs = {
  ConfidenceIntervalHi?: Maybe<Scalars['Float']>;
  ConfidenceIntervalHis?: Maybe<Array<Maybe<Scalars['Float']>>>;
  ConfidenceIntervalLo?: Maybe<Scalars['Float']>;
  ConfidenceIntervalLos?: Maybe<Array<Maybe<Scalars['Float']>>>;
  ConfidenceIntervalType?: Maybe<Scalars['String']>;
  ConfidenceIntervalTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  clinicalCharacteristics?: Maybe<Array<Maybe<Scalars['String']>>>;
  clinicalCharacteristicss?: Maybe<Array<Maybe<Array<Maybe<Scalars['String']>>>>>;
  dose?: Maybe<Scalars['Int']>;
  doseUnit?: Maybe<Scalars['String']>;
  doseUnits?: Maybe<Array<Maybe<Scalars['String']>>>;
  doses?: Maybe<Array<Maybe<Scalars['Int']>>>;
  endpoint?: Maybe<EvidenceEndpoint>;
  endpoints?: Maybe<Array<Maybe<EvidenceEndpoint>>>;
  filter?: Maybe<_OutcomeFilter>;
  first?: Maybe<Scalars['Int']>;
  groupSize?: Maybe<Scalars['Int']>;
  groupSizes?: Maybe<Array<Maybe<Scalars['Int']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notes?: Maybe<Scalars['String']>;
  notess?: Maybe<Array<Maybe<Scalars['String']>>>;
  observation?: Maybe<Scalars['String']>;
  observationMethod?: Maybe<Scalars['String']>;
  observationMethods?: Maybe<Array<Maybe<Scalars['String']>>>;
  observations?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_OutcomeOrdering>>>;
  outcome?: Maybe<Scalars['Float']>;
  outcomeRangeMax?: Maybe<Scalars['Float']>;
  outcomeRangeMaxs?: Maybe<Array<Maybe<Scalars['Float']>>>;
  outcomeRangeMin?: Maybe<Scalars['Float']>;
  outcomeRangeMins?: Maybe<Array<Maybe<Scalars['Float']>>>;
  outcomeUnit?: Maybe<Scalars['String']>;
  outcomeUnits?: Maybe<Array<Maybe<Scalars['String']>>>;
  outcomes?: Maybe<Array<Maybe<Scalars['Float']>>>;
  treatmentGroup?: Maybe<Scalars['String']>;
  treatmentGroups?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeProteinExpressionMarkerArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ProteinExpressionMarkerFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ProteinExpressionMarkerOrdering>>>;
};


export type QueryTypeProteinLevelAssayArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ProteinLevelAssayFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ProteinLevelAssayOrdering>>>;
};


export type QueryTypeRnaSeqAssayArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_RnaSeqAssayFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RnaSeqAssayOrdering>>>;
  resultType?: Maybe<RnaSeqResultType>;
  resultTypes?: Maybe<Array<Maybe<RnaSeqResultType>>>;
};


export type QueryTypeRnaSeqSignatureMarkerArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_RnaSeqSignatureMarkerFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_RnaSeqSignatureMarkerOrdering>>>;
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


export type QueryTypeTCodeArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TCodeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TCodeOrdering>>>;
  tcodeId?: Maybe<Scalars['String']>;
  tcodeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTypeTmbMarkerArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TmbMarkerFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TmbMarkerOrdering>>>;
};


export type QueryTypeTargetArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TargetFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TargetOrdering>>>;
};


export type QueryTypeTherapeuticInterventionArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TherapeuticInterventionFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TherapeuticInterventionOrdering>>>;
};


export type QueryTypeTherapyArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  conjunction?: Maybe<OmniConjunction>;
  conjunctions?: Maybe<Array<Maybe<OmniConjunction>>>;
  filter?: Maybe<_TherapyFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TherapyOrdering>>>;
};


export type QueryTypeTherapyComponentArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TherapyComponentFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TherapyComponentOrdering>>>;
};


export type QueryTypeUniprotEntryArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  accessionNumber?: Maybe<Scalars['String']>;
  accessionNumbers?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_UniprotEntryFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_UniprotEntryOrdering>>>;
  uniprotId?: Maybe<Scalars['String']>;
  uniprotIds?: Maybe<Array<Maybe<Scalars['String']>>>;
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


export type QueryTypeVariantCnvArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_VariantCnvFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_VariantCnvOrdering>>>;
};


export type QueryTypeVariantFusionArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_VariantFusionFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_VariantFusionOrdering>>>;
};


export type QueryTypeVariantRegionArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_VariantRegionFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  indelType?: Maybe<IndelType>;
  indelTypes?: Maybe<Array<Maybe<IndelType>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_VariantRegionOrdering>>>;
  regionType?: Maybe<RegionType>;
  regionTypes?: Maybe<Array<Maybe<RegionType>>>;
  variantType?: Maybe<VariantType>;
  variantTypes?: Maybe<Array<Maybe<VariantType>>>;
};


export type QueryTypeVariantSnvIndelArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_VariantSnvIndelFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  indelType?: Maybe<IndelType>;
  indelTypes?: Maybe<Array<Maybe<IndelType>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_VariantSnvIndelOrdering>>>;
  variantType?: Maybe<VariantType>;
  variantTypes?: Maybe<Array<Maybe<VariantType>>>;
};


export type QueryTypeXRefArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_XRefFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_XRefOrdering>>>;
  source?: Maybe<Scalars['String']>;
  sourceId?: Maybe<Scalars['String']>;
  sourceIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  sources?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Reference = {
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  shortReference: Scalars['String'];
  statementsReferenced: Array<EditableObject>;
};


export type ReferenceStatementsReferencedArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableObjectFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableObjectOrdering>>>;
};

export enum RegionType {
  Codon = 'Codon',
  Exon = 'Exon',
  Gene = 'Gene'
}

export enum ResponseType {
  Conflicting = 'Conflicting',
  Diagnostic = 'Diagnostic',
  NoBenefit = 'NoBenefit',
  Prognistic = 'Prognistic',
  Resistant = 'Resistant',
  Sensitive = 'Sensitive',
  Unknown = 'Unknown'
}

export type RnaSeqAssay = ProteinLevelAssay & {
   __typename?: 'RNASeqAssay';
  _id?: Maybe<Scalars['Long']>;
  comparator: EditableAssayComparator;
  id: Scalars['ID'];
  name: EditableStatement;
  proteinExpressionMarkers: Array<Maybe<ProteinExpressionMarker>>;
  resultMax?: Maybe<EditableFloat>;
  resultMin: EditableFloat;
  resultType: RnaSeqResultType;
};


export type RnaSeqAssayComparatorArgs = {
  comparator?: Maybe<AssayComparator>;
  comparators?: Maybe<Array<Maybe<AssayComparator>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableAssayComparatorFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableAssayComparatorOrdering>>>;
};


export type RnaSeqAssayNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type RnaSeqAssayProteinExpressionMarkersArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_ProteinExpressionMarkerFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_ProteinExpressionMarkerOrdering>>>;
};


export type RnaSeqAssayResultMaxArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableFloatFilter>;
  floatValue?: Maybe<Scalars['Float']>;
  floatValues?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableFloatOrdering>>>;
};


export type RnaSeqAssayResultMinArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableFloatFilter>;
  floatValue?: Maybe<Scalars['Float']>;
  floatValues?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableFloatOrdering>>>;
};

export enum RnaSeqResultType {
  RankScore = 'RankScore',
  NRpm = 'nRPM'
}

export type RnaSeqSignatureMarker = MarkerComponent & {
   __typename?: 'RNASeqSignatureMarker';
  _id?: Maybe<Scalars['Long']>;
  comparator: EditableAssayComparator;
  definition: EditableStatement;
  id: Scalars['ID'];
  interpretations?: Maybe<Array<Maybe<EditableTmbInterpretation>>>;
  markerProfile: MarkerProfile;
  method: EditableStatement;
  name: EditableStatement;
  resultMax?: Maybe<EditableFloat>;
  resultMin?: Maybe<EditableFloat>;
  resultString: EditableStatement;
};


export type RnaSeqSignatureMarkerComparatorArgs = {
  comparator?: Maybe<AssayComparator>;
  comparators?: Maybe<Array<Maybe<AssayComparator>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableAssayComparatorFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableAssayComparatorOrdering>>>;
};


export type RnaSeqSignatureMarkerDefinitionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type RnaSeqSignatureMarkerInterpretationsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableTmbInterpretationFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableTmbInterpretationOrdering>>>;
  tmbInterpretation?: Maybe<TmbInterpretationType>;
  tmbInterpretations?: Maybe<Array<Maybe<TmbInterpretationType>>>;
};


export type RnaSeqSignatureMarkerMarkerProfileArgs = {
  conjunction?: Maybe<OmniConjunction>;
  conjunctions?: Maybe<Array<Maybe<OmniConjunction>>>;
  filter?: Maybe<_MarkerProfileFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_MarkerProfileOrdering>>>;
};


export type RnaSeqSignatureMarkerMethodArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type RnaSeqSignatureMarkerNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type RnaSeqSignatureMarkerResultMaxArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableFloatFilter>;
  floatValue?: Maybe<Scalars['Float']>;
  floatValues?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableFloatOrdering>>>;
};


export type RnaSeqSignatureMarkerResultMinArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableFloatFilter>;
  floatValue?: Maybe<Scalars['Float']>;
  floatValues?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableFloatOrdering>>>;
};


export type RnaSeqSignatureMarkerResultStringArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum Strand {
  Forward = 'Forward',
  Reverse = 'Reverse'
}

export type Target = {
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type TCode = {
   __typename?: 'TCode';
  _id?: Maybe<Scalars['Long']>;
  children?: Maybe<Array<Maybe<TCode>>>;
  id: Scalars['ID'];
  parents?: Maybe<Array<Maybe<TCode>>>;
  tcodeId: Scalars['String'];
  tissuePath: EditableStatement;
};


export type TCodeChildrenArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TCodeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TCodeOrdering>>>;
  tcodeId?: Maybe<Scalars['String']>;
  tcodeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TCodeParentsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TCodeFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TCodeOrdering>>>;
  tcodeId?: Maybe<Scalars['String']>;
  tcodeIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TCodeTissuePathArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TherapeuticIntervention = {
   __typename?: 'TherapeuticIntervention';
  _id?: Maybe<Scalars['Long']>;
  concurrentWith: Array<Maybe<TherapeuticIntervention>>;
  definition: EditableStatement;
  evidenceAssociations?: Maybe<Array<Maybe<EvidenceAssociation>>>;
  followedBy: Array<Maybe<TherapeuticIntervention>>;
  id: Scalars['ID'];
  name: EditableStatement;
  precededBy: Array<Maybe<TherapeuticIntervention>>;
  therapy: Therapy;
};


export type TherapeuticInterventionConcurrentWithArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TherapeuticInterventionFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TherapeuticInterventionOrdering>>>;
};


export type TherapeuticInterventionDefinitionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TherapeuticInterventionEvidenceAssociationsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_EvidenceAssociationFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EvidenceAssociationOrdering>>>;
};


export type TherapeuticInterventionFollowedByArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TherapeuticInterventionFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TherapeuticInterventionOrdering>>>;
};


export type TherapeuticInterventionNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TherapeuticInterventionPrecededByArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TherapeuticInterventionFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TherapeuticInterventionOrdering>>>;
};


export type TherapeuticInterventionTherapyArgs = {
  conjunction?: Maybe<OmniConjunction>;
  conjunctions?: Maybe<Array<Maybe<OmniConjunction>>>;
  filter?: Maybe<_TherapyFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_TherapyOrdering>>>;
};

export type Therapy = TherapyComponent & {
   __typename?: 'Therapy';
  _id?: Maybe<Scalars['Long']>;
  componentOf: Array<Maybe<Therapy>>;
  components: Array<Maybe<TherapyComponent>>;
  conjunction: OmniConjunction;
  definition: EditableStatement;
  id: Scalars['ID'];
  name: EditableStatement;
};


export type TherapyComponentOfArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  conjunction?: Maybe<OmniConjunction>;
  conjunctions?: Maybe<Array<Maybe<OmniConjunction>>>;
  filter?: Maybe<_TherapyFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TherapyOrdering>>>;
};


export type TherapyComponentsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  filter?: Maybe<_TherapyComponentFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TherapyComponentOrdering>>>;
};


export type TherapyDefinitionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TherapyNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TherapyComponent = {
  _id?: Maybe<Scalars['Long']>;
  componentOf: Array<Maybe<Therapy>>;
  id: Scalars['ID'];
  name: EditableStatement;
};


export type TherapyComponentComponentOfArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  conjunction?: Maybe<OmniConjunction>;
  conjunctions?: Maybe<Array<Maybe<OmniConjunction>>>;
  filter?: Maybe<_TherapyFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_TherapyOrdering>>>;
};


export type TherapyComponentNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum TmbInterpretationType {
  High = 'High',
  Intermediate = 'Intermediate',
  Low = 'Low'
}

export type TmbMarker = MarkerComponent & {
   __typename?: 'TMBMarker';
  _id?: Maybe<Scalars['Long']>;
  comparator: EditableAssayComparator;
  id: Scalars['ID'];
  interpretations: Array<Maybe<EditableTmbInterpretation>>;
  method: EditableStatement;
  name: EditableStatement;
  resultMax?: Maybe<EditableFloat>;
  resultMin: EditableFloat;
  resultString: EditableStatement;
  resultUnits: EditableStatement;
};


export type TmbMarkerComparatorArgs = {
  comparator?: Maybe<AssayComparator>;
  comparators?: Maybe<Array<Maybe<AssayComparator>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableAssayComparatorFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableAssayComparatorOrdering>>>;
};


export type TmbMarkerInterpretationsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableTmbInterpretationFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableTmbInterpretationOrdering>>>;
  tmbInterpretation?: Maybe<TmbInterpretationType>;
  tmbInterpretations?: Maybe<Array<Maybe<TmbInterpretationType>>>;
};


export type TmbMarkerMethodArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TmbMarkerNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TmbMarkerResultMaxArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableFloatFilter>;
  floatValue?: Maybe<Scalars['Float']>;
  floatValues?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableFloatOrdering>>>;
};


export type TmbMarkerResultMinArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableFloatFilter>;
  floatValue?: Maybe<Scalars['Float']>;
  floatValues?: Maybe<Array<Maybe<Scalars['Float']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableFloatOrdering>>>;
};


export type TmbMarkerResultStringArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type TmbMarkerResultUnitsArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UniprotEntry = {
   __typename?: 'UniprotEntry';
  _id?: Maybe<Scalars['Long']>;
  accessionNumber: Scalars['String'];
  function: EditableStatement;
  gene: MyGeneInfoGene;
  id: Scalars['ID'];
  name: Scalars['String'];
  uniprotId: Scalars['String'];
};


export type UniprotEntryFunctionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UniprotEntryGeneArgs = {
  chromosome?: Maybe<Scalars['String']>;
  chromosomes?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['Int']>;
  ends?: Maybe<Array<Maybe<Scalars['Int']>>>;
  entrezId?: Maybe<Scalars['String']>;
  entrezIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_MyGeneInfoGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_MyGeneInfoGeneOrdering>>>;
  start?: Maybe<Scalars['Int']>;
  starts?: Maybe<Array<Maybe<Scalars['Int']>>>;
  strand?: Maybe<Strand>;
  strands?: Maybe<Array<Maybe<Strand>>>;
};

export type User = {
   __typename?: 'User';
  _id?: Maybe<Scalars['Long']>;
  editedStatements: Array<Maybe<EditableObject>>;
  id: Scalars['ID'];
  isAdmin: Scalars['Boolean'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type UserEditedStatementsArgs = {
  _id?: Maybe<Scalars['Long']>;
  _ids?: Maybe<Array<Maybe<Scalars['Long']>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableObjectFilter>;
  first?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  offset?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Array<Maybe<_EditableObjectOrdering>>>;
};

export type VariantCnv = GenomicVariant & {
   __typename?: 'VariantCNV';
  _id?: Maybe<Scalars['Long']>;
  clinVarVariant?: Maybe<ClinVarVariant>;
  copyChange: EditableCopyChange;
  description: EditableStatement;
  gene: OmniGene;
  goVariant?: Maybe<GoVariant>;
  hotSpotVariant?: Maybe<HotSpotVariant>;
  id: Scalars['ID'];
  jaxVariant?: Maybe<JaxVariant>;
  name: EditableStatement;
  nonCanonicalTranscript?: Maybe<EditableStatement>;
};


export type VariantCnvClinVarVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ClinVarVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_ClinVarVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantId?: Maybe<Scalars['String']>;
  variantIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantCnvCopyChangeArgs = {
  cnvType?: Maybe<CnvType>;
  cnvTypes?: Maybe<Array<Maybe<CnvType>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableCopyChangeFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableCopyChangeOrdering>>>;
};


export type VariantCnvDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantCnvGeneArgs = {
  filter?: Maybe<_OmniGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OmniGeneOrdering>>>;
  panelName?: Maybe<Scalars['String']>;
  panelNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantCnvGoVariantArgs = {
  filter?: Maybe<_GoVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mutationType?: Maybe<Scalars['String']>;
  mutationTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_GoVariantOrdering>>>;
};


export type VariantCnvHotSpotVariantArgs = {
  begin?: Maybe<Scalars['String']>;
  begins?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['String']>;
  ends?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_HotSpotVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_HotSpotVariantOrdering>>>;
  position?: Maybe<Scalars['Int']>;
  positions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  referenceAminoAcid?: Maybe<Scalars['String']>;
  referenceAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantAminoAcid?: Maybe<Scalars['String']>;
  variantAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantCnvJaxVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_JaxVariantFilter>;
  gDot?: Maybe<Scalars['String']>;
  gDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JaxVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantType?: Maybe<Scalars['String']>;
  variantTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantCnvNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantCnvNonCanonicalTranscriptArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type VariantFusion = GenomicVariant & {
   __typename?: 'VariantFusion';
  _id?: Maybe<Scalars['Long']>;
  clinVarVariant?: Maybe<ClinVarVariant>;
  copyChange: EditableCopyChange;
  description: EditableStatement;
  exon3Prime: EditableInt;
  exon5Prime: EditableInt;
  gene: OmniGene;
  gene3Prime: EditableOmniGeneReference;
  gene5Prime: EditableOmniGeneReference;
  goVariant?: Maybe<GoVariant>;
  hotSpotVariant?: Maybe<HotSpotVariant>;
  id: Scalars['ID'];
  jaxVariant?: Maybe<JaxVariant>;
  name: EditableStatement;
  nonCanonicalTranscript?: Maybe<EditableStatement>;
};


export type VariantFusionClinVarVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ClinVarVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_ClinVarVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantId?: Maybe<Scalars['String']>;
  variantIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantFusionCopyChangeArgs = {
  cnvType?: Maybe<CnvType>;
  cnvTypes?: Maybe<Array<Maybe<CnvType>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableCopyChangeFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableCopyChangeOrdering>>>;
};


export type VariantFusionDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantFusionExon3PrimeArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableIntFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  intValue?: Maybe<Scalars['Int']>;
  intValues?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableIntOrdering>>>;
};


export type VariantFusionExon5PrimeArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableIntFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  intValue?: Maybe<Scalars['Int']>;
  intValues?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableIntOrdering>>>;
};


export type VariantFusionGeneArgs = {
  filter?: Maybe<_OmniGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OmniGeneOrdering>>>;
  panelName?: Maybe<Scalars['String']>;
  panelNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantFusionGene3PrimeArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableOmniGeneReferenceFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableOmniGeneReferenceOrdering>>>;
};


export type VariantFusionGene5PrimeArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableOmniGeneReferenceFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableOmniGeneReferenceOrdering>>>;
};


export type VariantFusionGoVariantArgs = {
  filter?: Maybe<_GoVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mutationType?: Maybe<Scalars['String']>;
  mutationTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_GoVariantOrdering>>>;
};


export type VariantFusionHotSpotVariantArgs = {
  begin?: Maybe<Scalars['String']>;
  begins?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['String']>;
  ends?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_HotSpotVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_HotSpotVariantOrdering>>>;
  position?: Maybe<Scalars['Int']>;
  positions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  referenceAminoAcid?: Maybe<Scalars['String']>;
  referenceAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantAminoAcid?: Maybe<Scalars['String']>;
  variantAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantFusionJaxVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_JaxVariantFilter>;
  gDot?: Maybe<Scalars['String']>;
  gDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JaxVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantType?: Maybe<Scalars['String']>;
  variantTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantFusionNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantFusionNonCanonicalTranscriptArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum VariantProteinEffect {
  GainOfFunction = 'GainOfFunction',
  GainOfFunctionPredicted = 'GainOfFunctionPredicted',
  LossOfFunction = 'LossOfFunction',
  LossOfFunctionPredicted = 'LossOfFunctionPredicted',
  NoEffect = 'NoEffect',
  Unknown = 'Unknown'
}

export type VariantRegion = GenomicVariant & {
   __typename?: 'VariantRegion';
  _id?: Maybe<Scalars['Long']>;
  clinVarVariant?: Maybe<ClinVarVariant>;
  description: EditableStatement;
  gene: OmniGene;
  goVariant?: Maybe<GoVariant>;
  hotSpotVariant?: Maybe<HotSpotVariant>;
  id: Scalars['ID'];
  indelType: IndelType;
  isDeleterious: EditableBoolean;
  isFrameshift: EditableBoolean;
  isTruncating: EditableBoolean;
  jaxVariant?: Maybe<JaxVariant>;
  name: EditableStatement;
  nonCanonicalTranscript?: Maybe<EditableStatement>;
  proteinEffect: EditableProteinEffect;
  regionType: RegionType;
  regionValue: EditableInt;
  variantType: VariantType;
};


export type VariantRegionClinVarVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ClinVarVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_ClinVarVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantId?: Maybe<Scalars['String']>;
  variantIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantRegionDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantRegionGeneArgs = {
  filter?: Maybe<_OmniGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OmniGeneOrdering>>>;
  panelName?: Maybe<Scalars['String']>;
  panelNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantRegionGoVariantArgs = {
  filter?: Maybe<_GoVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mutationType?: Maybe<Scalars['String']>;
  mutationTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_GoVariantOrdering>>>;
};


export type VariantRegionHotSpotVariantArgs = {
  begin?: Maybe<Scalars['String']>;
  begins?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['String']>;
  ends?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_HotSpotVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_HotSpotVariantOrdering>>>;
  position?: Maybe<Scalars['Int']>;
  positions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  referenceAminoAcid?: Maybe<Scalars['String']>;
  referenceAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantAminoAcid?: Maybe<Scalars['String']>;
  variantAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantRegionIsDeleteriousArgs = {
  booleanValue?: Maybe<ExtendedBoolean>;
  booleanValues?: Maybe<Array<Maybe<ExtendedBoolean>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableBooleanFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableBooleanOrdering>>>;
};


export type VariantRegionIsFrameshiftArgs = {
  booleanValue?: Maybe<ExtendedBoolean>;
  booleanValues?: Maybe<Array<Maybe<ExtendedBoolean>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableBooleanFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableBooleanOrdering>>>;
};


export type VariantRegionIsTruncatingArgs = {
  booleanValue?: Maybe<ExtendedBoolean>;
  booleanValues?: Maybe<Array<Maybe<ExtendedBoolean>>>;
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableBooleanFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableBooleanOrdering>>>;
};


export type VariantRegionJaxVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_JaxVariantFilter>;
  gDot?: Maybe<Scalars['String']>;
  gDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JaxVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantType?: Maybe<Scalars['String']>;
  variantTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantRegionNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantRegionNonCanonicalTranscriptArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantRegionProteinEffectArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableProteinEffectFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableProteinEffectOrdering>>>;
  proteinEffect?: Maybe<VariantProteinEffect>;
  proteinEffects?: Maybe<Array<Maybe<VariantProteinEffect>>>;
};


export type VariantRegionRegionValueArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableIntFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  intValue?: Maybe<Scalars['Int']>;
  intValues?: Maybe<Array<Maybe<Scalars['Int']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableIntOrdering>>>;
};

export type VariantSnvIndel = GenomicVariant & {
   __typename?: 'VariantSNVIndel';
  _id?: Maybe<Scalars['Long']>;
  cDot: EditableStatement;
  clinVarVariant?: Maybe<ClinVarVariant>;
  description: EditableStatement;
  exon: EditableStatement;
  gDot: EditableStatement;
  gene: OmniGene;
  goVariant?: Maybe<GoVariant>;
  hotSpotVariant?: Maybe<HotSpotVariant>;
  id: Scalars['ID'];
  indelType: IndelType;
  jaxVariant?: Maybe<JaxVariant>;
  name: EditableStatement;
  nonCanonicalTranscript?: Maybe<EditableStatement>;
  pDot: EditableStatement;
  proteinEffect: EditableProteinEffect;
  variantType: VariantType;
};


export type VariantSnvIndelCDotArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelClinVarVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_ClinVarVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_ClinVarVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantId?: Maybe<Scalars['String']>;
  variantIds?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelDescriptionArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelExonArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelGDotArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelGeneArgs = {
  filter?: Maybe<_OmniGeneFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_OmniGeneOrdering>>>;
  panelName?: Maybe<Scalars['String']>;
  panelNames?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelGoVariantArgs = {
  filter?: Maybe<_GoVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  goId?: Maybe<Scalars['String']>;
  goIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  mutationType?: Maybe<Scalars['String']>;
  mutationTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_GoVariantOrdering>>>;
};


export type VariantSnvIndelHotSpotVariantArgs = {
  begin?: Maybe<Scalars['String']>;
  begins?: Maybe<Array<Maybe<Scalars['String']>>>;
  end?: Maybe<Scalars['String']>;
  ends?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_HotSpotVariantFilter>;
  gene?: Maybe<Scalars['String']>;
  genes?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_HotSpotVariantOrdering>>>;
  position?: Maybe<Scalars['Int']>;
  positions?: Maybe<Array<Maybe<Scalars['Int']>>>;
  referenceAminoAcid?: Maybe<Scalars['String']>;
  referenceAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantAminoAcid?: Maybe<Scalars['String']>;
  variantAminoAcids?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelJaxVariantArgs = {
  cDot?: Maybe<Scalars['String']>;
  cDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_JaxVariantFilter>;
  gDot?: Maybe<Scalars['String']>;
  gDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  jaxId?: Maybe<Scalars['String']>;
  jaxIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<Scalars['String']>>>;
  orderBy?: Maybe<Array<Maybe<_JaxVariantOrdering>>>;
  pDot?: Maybe<Scalars['String']>;
  pDots?: Maybe<Array<Maybe<Scalars['String']>>>;
  variantType?: Maybe<Scalars['String']>;
  variantTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelNameArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelNonCanonicalTranscriptArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelPDotArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableStatementFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableStatementOrdering>>>;
  statement?: Maybe<Scalars['String']>;
  statements?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type VariantSnvIndelProteinEffectArgs = {
  editDate?: Maybe<Scalars['String']>;
  editDates?: Maybe<Array<Maybe<Scalars['String']>>>;
  field?: Maybe<Scalars['String']>;
  fields?: Maybe<Array<Maybe<Scalars['String']>>>;
  filter?: Maybe<_EditableProteinEffectFilter>;
  id?: Maybe<Scalars['ID']>;
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orderBy?: Maybe<Array<Maybe<_EditableProteinEffectOrdering>>>;
  proteinEffect?: Maybe<VariantProteinEffect>;
  proteinEffects?: Maybe<Array<Maybe<VariantProteinEffect>>>;
};

export enum VariantType {
  Cnv = 'CNV',
  Fusion = 'Fusion',
  Indel = 'Indel',
  Mnv = 'MNV',
  Region = 'Region',
  Snv = 'SNV'
}

export type XRef = {
   __typename?: 'XRef';
  _id?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  source: Scalars['String'];
  sourceId: Scalars['String'];
};

export type OmniGeneComponentsQueryVariables = {
  gene_id?: Maybe<Scalars['ID']>;
};


export type OmniGeneComponentsQuery = (
  { __typename?: 'QueryType' }
  & { OmniGene?: Maybe<Array<Maybe<(
    { __typename?: 'OmniGene' }
    & { myGeneInfoGene: (
      { __typename?: 'MyGeneInfoGene' }
      & Pick<MyGeneInfoGene, 'id'>
    ), uniprotEntry?: Maybe<(
      { __typename?: 'UniprotEntry' }
      & Pick<UniprotEntry, 'id'>
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

export type JaxGeneQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type JaxGeneQuery = (
  { __typename?: 'QueryType' }
  & { JaxGene?: Maybe<Array<Maybe<(
    { __typename?: 'JaxGene' }
    & Pick<JaxGene, 'name' | 'chromosome' | 'entrezId' | 'jaxId'>
    & { canonicalTranscript: Array<Maybe<(
      { __typename?: 'EditableStatement' }
      & Pick<EditableStatement, 'statement'>
    )>>, synonyms: (
      { __typename?: 'EditableStringList' }
      & Pick<EditableStringList, 'stringList'>
    ), description: (
      { __typename?: 'EditableStatement' }
      & Pick<EditableStatement, 'statement' | 'field' | 'editDate'>
      & { editor: (
        { __typename?: 'User' }
        & Pick<User, 'name'>
      ), references: Array<Maybe<{ __typename?: 'InternetReference' } | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id' | 'PMID'>
      ) | { __typename?: 'MeetingAbstractReference' }>> }
    ) }
  )>>> }
);

export type MyGeneInfo_GeneQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type MyGeneInfo_GeneQuery = (
  { __typename?: 'QueryType' }
  & { MyGeneInfoGene?: Maybe<Array<Maybe<(
    { __typename?: 'MyGeneInfoGene' }
    & Pick<MyGeneInfoGene, 'name' | 'entrezId' | 'chromosome' | 'start' | 'end' | 'strand'>
    & { description: (
      { __typename?: 'EditableStatement' }
      & Pick<EditableStatement, 'statement' | 'field'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'accessedDate' | 'webAddress' | 'shortReference'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'shortReference'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'shortReference'>
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
    ), synonyms: (
      { __typename?: 'EditableStringList' }
      & Pick<EditableStringList, 'id' | 'stringList' | 'field' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), transcript: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), myGeneInfoGene: (
      { __typename?: 'MyGeneInfoGene' }
      & Pick<MyGeneInfoGene, 'id'>
    ), uniprotEntry?: Maybe<(
      { __typename?: 'UniprotEntry' }
      & Pick<UniprotEntry, 'id'>
    )>, jaxGene?: Maybe<(
      { __typename?: 'JaxGene' }
      & Pick<JaxGene, 'id'>
    )> }
  )>>> }
);

export type Es_FieldsFragment = (
  { __typename?: 'EditableStatement' }
  & Pick<EditableStatement, 'id' | 'statement' | 'field' | 'editDate'>
  & { references: Array<Maybe<(
    { __typename?: 'InternetReference' }
    & Pick<InternetReference, 'id'>
  ) | (
    { __typename?: 'LiteratureReference' }
    & Pick<LiteratureReference, 'PMID' | 'id'>
  ) | (
    { __typename?: 'MeetingAbstractReference' }
    & Pick<MeetingAbstractReference, 'id'>
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

export type AddSynonymsMutationVariables = {
  gene_id: Scalars['ID'];
  old_esyn_id: Scalars['ID'];
  date: Scalars['String'];
  esyn_field: Scalars['String'];
  esyn_list: Array<Maybe<Scalars['String']>>;
  esyn_id: Scalars['ID'];
  user_id: Scalars['ID'];
};


export type AddSynonymsMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteOmniGeneSynonyms' | 'createEditableStringList' | 'addEditableStringListEditor' | 'addEditableStringListReferences' | 'addOmniGeneSynonyms'>
);

export type AddOmniGeneOncogenicCategoryMutationVariables = {
  gene_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
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
  & { UniprotEntry?: Maybe<Array<Maybe<(
    { __typename?: 'UniprotEntry' }
    & Pick<UniprotEntry, 'id' | 'name' | 'accessionNumber' | 'uniprotId'>
    & { function: (
      { __typename?: 'EditableStatement' }
      & Pick<EditableStatement, 'id' | 'statement' | 'field' | 'editDate'>
      & { editor: (
        { __typename?: 'User' }
        & Pick<User, 'name'>
      ), references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
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

export type ClinVarVariantQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type ClinVarVariantQuery = (
  { __typename?: 'QueryType' }
  & { ClinVarVariant?: Maybe<Array<Maybe<(
    { __typename?: 'ClinVarVariant' }
    & Pick<ClinVarVariant, 'id' | 'cDot' | 'pDot' | 'variantId' | 'gene'>
    & { significance: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), signficanceExplanation: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ) }
  )>>> }
);

export type GoVariantQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type GoVariantQuery = (
  { __typename?: 'QueryType' }
  & { GOVariant?: Maybe<Array<Maybe<(
    { __typename?: 'GOVariant' }
    & Pick<GoVariant, 'id' | 'goId' | 'gene' | 'mutationType'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), jaxVariant?: Maybe<(
      { __typename?: 'JaxVariant' }
      & Pick<JaxVariant, 'name' | 'id'>
    )> }
  )>>> }
);

export type VariantCnvQueryVariables = {
  variant_id?: Maybe<Scalars['ID']>;
};


export type VariantCnvQuery = (
  { __typename?: 'QueryType' }
  & { VariantCNV?: Maybe<Array<Maybe<(
    { __typename?: 'VariantCNV' }
    & Pick<VariantCnv, 'id'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), copyChange: (
      { __typename?: 'EditableCopyChange' }
      & Pick<EditableCopyChange, 'id' | 'field' | 'cnvType' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), gene: (
      { __typename?: 'OmniGene' }
      & Pick<OmniGene, 'id' | 'name'>
    ), description: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), jaxVariant?: Maybe<(
      { __typename?: 'JaxVariant' }
      & Pick<JaxVariant, 'id'>
    )>, goVariant?: Maybe<(
      { __typename?: 'GOVariant' }
      & Pick<GoVariant, 'id'>
    )>, clinVarVariant?: Maybe<(
      { __typename?: 'ClinVarVariant' }
      & Pick<ClinVarVariant, 'id'>
    )>, hotSpotVariant?: Maybe<(
      { __typename?: 'HotSpotVariant' }
      & Pick<HotSpotVariant, 'id'>
    )> }
  )>>> }
);

export type VariantCnvAddCopyChangeMutationVariables = {
  variant_id: Scalars['ID'];
  old_id: Scalars['ID'];
  date: Scalars['String'];
  field: Scalars['String'];
  copy_change: CnvType;
  id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantCnvAddCopyChangeMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantCNVCopyChange' | 'createEditableCopyChange' | 'addEditableCopyChangeEditor' | 'addEditableCopyChangeReferences' | 'addVariantCNVCopyChange'>
);

export type VariantCnvAddDescriptionMutationVariables = {
  variant_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantCnvAddDescriptionMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantCNVDescription' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addVariantCNVDescription'>
);

export type GenomicVariantComponentsQueryVariables = {
  variant_id?: Maybe<Scalars['ID']>;
};


export type GenomicVariantComponentsQuery = (
  { __typename?: 'QueryType' }
  & { GenomicVariant?: Maybe<Array<Maybe<(
    { __typename?: 'VariantCNV' }
    & { jaxVariant?: Maybe<(
      { __typename?: 'JaxVariant' }
      & Pick<JaxVariant, 'id'>
    )>, goVariant?: Maybe<(
      { __typename?: 'GOVariant' }
      & Pick<GoVariant, 'id'>
    )>, clinVarVariant?: Maybe<(
      { __typename?: 'ClinVarVariant' }
      & Pick<ClinVarVariant, 'id'>
    )>, hotSpotVariant?: Maybe<(
      { __typename?: 'HotSpotVariant' }
      & Pick<HotSpotVariant, 'id'>
    )> }
  ) | (
    { __typename?: 'VariantFusion' }
    & { jaxVariant?: Maybe<(
      { __typename?: 'JaxVariant' }
      & Pick<JaxVariant, 'id'>
    )>, goVariant?: Maybe<(
      { __typename?: 'GOVariant' }
      & Pick<GoVariant, 'id'>
    )>, clinVarVariant?: Maybe<(
      { __typename?: 'ClinVarVariant' }
      & Pick<ClinVarVariant, 'id'>
    )>, hotSpotVariant?: Maybe<(
      { __typename?: 'HotSpotVariant' }
      & Pick<HotSpotVariant, 'id'>
    )> }
  ) | (
    { __typename?: 'VariantRegion' }
    & { jaxVariant?: Maybe<(
      { __typename?: 'JaxVariant' }
      & Pick<JaxVariant, 'id'>
    )>, goVariant?: Maybe<(
      { __typename?: 'GOVariant' }
      & Pick<GoVariant, 'id'>
    )>, clinVarVariant?: Maybe<(
      { __typename?: 'ClinVarVariant' }
      & Pick<ClinVarVariant, 'id'>
    )>, hotSpotVariant?: Maybe<(
      { __typename?: 'HotSpotVariant' }
      & Pick<HotSpotVariant, 'id'>
    )> }
  ) | (
    { __typename?: 'VariantSNVIndel' }
    & { jaxVariant?: Maybe<(
      { __typename?: 'JaxVariant' }
      & Pick<JaxVariant, 'id'>
    )>, goVariant?: Maybe<(
      { __typename?: 'GOVariant' }
      & Pick<GoVariant, 'id'>
    )>, clinVarVariant?: Maybe<(
      { __typename?: 'ClinVarVariant' }
      & Pick<ClinVarVariant, 'id'>
    )>, hotSpotVariant?: Maybe<(
      { __typename?: 'HotSpotVariant' }
      & Pick<HotSpotVariant, 'id'>
    )> }
  )>>> }
);

export type Variant_Markers_For_IdQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type Variant_Markers_For_IdQuery = (
  { __typename?: 'QueryType' }
  & { GenomicVariantMarker?: Maybe<Array<Maybe<(
    { __typename?: 'GenomicVariantMarker' }
    & Pick<GenomicVariantMarker, 'id'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), method: (
      { __typename?: 'EditableStatement' }
      & Pick<EditableStatement, 'statement'>
    ), variant: (
      { __typename: 'VariantCNV' }
      & Pick<VariantCnv, 'id'>
      & { name: (
        { __typename?: 'EditableStatement' }
        & Es_FieldsFragment
      ) }
    ) | (
      { __typename: 'VariantFusion' }
      & Pick<VariantFusion, 'id'>
      & { name: (
        { __typename?: 'EditableStatement' }
        & Es_FieldsFragment
      ) }
    ) | (
      { __typename: 'VariantRegion' }
      & Pick<VariantRegion, 'id'>
      & { name: (
        { __typename?: 'EditableStatement' }
        & Es_FieldsFragment
      ) }
    ) | (
      { __typename: 'VariantSNVIndel' }
      & Pick<VariantSnvIndel, 'id'>
      & { name: (
        { __typename?: 'EditableStatement' }
        & Es_FieldsFragment
      ) }
    ) }
  )>>> }
);

export type VariantFusionQueryVariables = {
  variant_id?: Maybe<Scalars['ID']>;
};


export type VariantFusionQuery = (
  { __typename?: 'QueryType' }
  & { VariantFusion?: Maybe<Array<Maybe<(
    { __typename?: 'VariantFusion' }
    & Pick<VariantFusion, 'id'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), gene: (
      { __typename?: 'OmniGene' }
      & Pick<OmniGene, 'name'>
    ), copyChange: (
      { __typename?: 'EditableCopyChange' }
      & Pick<EditableCopyChange, 'id' | 'field' | 'cnvType' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), exon3Prime: (
      { __typename?: 'EditableInt' }
      & Pick<EditableInt, 'id' | 'intValue' | 'field' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), exon5Prime: (
      { __typename?: 'EditableInt' }
      & Pick<EditableInt, 'id' | 'intValue' | 'field' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), gene3Prime: (
      { __typename?: 'EditableOmniGeneReference' }
      & Eog_FieldsFragment
    ), gene5Prime: (
      { __typename?: 'EditableOmniGeneReference' }
      & Eog_FieldsFragment
    ), description: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), jaxVariant?: Maybe<(
      { __typename?: 'JaxVariant' }
      & Pick<JaxVariant, 'id'>
    )>, goVariant?: Maybe<(
      { __typename?: 'GOVariant' }
      & Pick<GoVariant, 'id'>
    )>, clinVarVariant?: Maybe<(
      { __typename?: 'ClinVarVariant' }
      & Pick<ClinVarVariant, 'id'>
    )>, hotSpotVariant?: Maybe<(
      { __typename?: 'HotSpotVariant' }
      & Pick<HotSpotVariant, 'id'>
    )> }
  )>>> }
);

export type Eog_FieldsFragment = (
  { __typename?: 'EditableOmniGeneReference' }
  & Pick<EditableOmniGeneReference, 'id' | 'field' | 'editDate'>
  & { gene: (
    { __typename?: 'OmniGene' }
    & Pick<OmniGene, 'id' | 'name'>
  ), references: Array<Maybe<(
    { __typename?: 'InternetReference' }
    & Pick<InternetReference, 'id'>
  ) | (
    { __typename?: 'LiteratureReference' }
    & Pick<LiteratureReference, 'id'>
  ) | (
    { __typename?: 'MeetingAbstractReference' }
    & Pick<MeetingAbstractReference, 'id'>
  )>>, editor: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  ) }
);

export type VariantFusionAddCopyChangeMutationVariables = {
  variant_id: Scalars['ID'];
  old_id: Scalars['ID'];
  date: Scalars['String'];
  field: Scalars['String'];
  copy_change: CnvType;
  id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantFusionAddCopyChangeMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantFusionCopyChange' | 'createEditableCopyChange' | 'addEditableCopyChangeEditor' | 'addEditableCopyChangeReferences' | 'addVariantFusionCopyChange'>
);

export type VariantFusionAddExon3PrimeMutationVariables = {
  variant_id: Scalars['ID'];
  old_id: Scalars['ID'];
  date: Scalars['String'];
  field: Scalars['String'];
  exon3: Scalars['Int'];
  id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantFusionAddExon3PrimeMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantFusionExon3Prime' | 'createEditableInt' | 'addEditableIntEditor' | 'addEditableIntReferences' | 'addVariantFusionExon3Prime'>
);

export type VariantFusionAddExon5PrimeMutationVariables = {
  variant_id: Scalars['ID'];
  old_id: Scalars['ID'];
  date: Scalars['String'];
  field: Scalars['String'];
  exon5: Scalars['Int'];
  id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantFusionAddExon5PrimeMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantFusionExon5Prime' | 'createEditableInt' | 'addEditableIntEditor' | 'addEditableIntReferences' | 'addVariantFusionExon5Prime'>
);

export type VariantFusionAddGene3PrimeMutationVariables = {
  variant_id: Scalars['ID'];
  old_id: Scalars['ID'];
  date: Scalars['String'];
  field: Scalars['String'];
  gene: Scalars['ID'];
  id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantFusionAddGene3PrimeMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantFusionGene3Prime' | 'createEditableOmniGeneReference' | 'addEditableOmniGeneReferenceGene' | 'addEditableOmniGeneReferenceEditor' | 'addEditableOmniGeneReferenceReferences' | 'addVariantFusionGene3Prime'>
);

export type VariantFusionAddGene5PrimeMutationVariables = {
  variant_id: Scalars['ID'];
  old_id: Scalars['ID'];
  date: Scalars['String'];
  field: Scalars['String'];
  gene: Scalars['ID'];
  id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantFusionAddGene5PrimeMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantFusionGene5Prime' | 'createEditableOmniGeneReference' | 'addEditableOmniGeneReferenceGene' | 'addEditableOmniGeneReferenceEditor' | 'addEditableOmniGeneReferenceReferences' | 'addVariantFusionGene5Prime'>
);

export type VariantFusionAddDescriptionMutationVariables = {
  variant_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantFusionAddDescriptionMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantFusionDescription' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addVariantFusionDescription'>
);

export type VariantRegionQueryVariables = {
  variant_id?: Maybe<Scalars['ID']>;
};


export type VariantRegionQuery = (
  { __typename?: 'QueryType' }
  & { VariantRegion?: Maybe<Array<Maybe<(
    { __typename?: 'VariantRegion' }
    & Pick<VariantRegion, 'id' | 'variantType' | 'indelType' | 'regionType'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), gene: (
      { __typename?: 'OmniGene' }
      & Pick<OmniGene, 'id' | 'name'>
    ), description: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), nonCanonicalTranscript?: Maybe<(
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    )>, proteinEffect: (
      { __typename?: 'EditableProteinEffect' }
      & Pick<EditableProteinEffect, 'id' | 'proteinEffect' | 'field' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), regionValue: (
      { __typename?: 'EditableInt' }
      & Pick<EditableInt, 'id' | 'intValue' | 'field' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), isFrameshift: (
      { __typename?: 'EditableBoolean' }
      & EbFragment
    ), isTruncating: (
      { __typename?: 'EditableBoolean' }
      & EbFragment
    ), isDeleterious: (
      { __typename?: 'EditableBoolean' }
      & EbFragment
    ), jaxVariant?: Maybe<(
      { __typename?: 'JaxVariant' }
      & Pick<JaxVariant, 'id'>
    )>, goVariant?: Maybe<(
      { __typename?: 'GOVariant' }
      & Pick<GoVariant, 'id'>
    )>, clinVarVariant?: Maybe<(
      { __typename?: 'ClinVarVariant' }
      & Pick<ClinVarVariant, 'id'>
    )>, hotSpotVariant?: Maybe<(
      { __typename?: 'HotSpotVariant' }
      & Pick<HotSpotVariant, 'id'>
    )> }
  )>>> }
);

export type EbFragment = (
  { __typename?: 'EditableBoolean' }
  & Pick<EditableBoolean, 'id' | 'booleanValue' | 'field' | 'editDate'>
  & { references: Array<Maybe<(
    { __typename?: 'InternetReference' }
    & Pick<InternetReference, 'id'>
  ) | (
    { __typename?: 'LiteratureReference' }
    & Pick<LiteratureReference, 'id'>
  ) | (
    { __typename?: 'MeetingAbstractReference' }
    & Pick<MeetingAbstractReference, 'id'>
  )>>, editor: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  ) }
);

export type VariantRegionAddDescriptionMutationVariables = {
  variant_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantRegionAddDescriptionMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantRegionDescription' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addVariantRegionDescription'>
);

export type VariantRegionAddProteinEffectMutationVariables = {
  variant_id: Scalars['ID'];
  old_epe_id: Scalars['ID'];
  date: Scalars['String'];
  epe_field: Scalars['String'];
  epe_vpe: VariantProteinEffect;
  epe_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantRegionAddProteinEffectMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantRegionProteinEffect' | 'createEditableProteinEffect' | 'addEditableProteinEffectEditor' | 'addEditableProteinEffectReferences' | 'addVariantRegionProteinEffect'>
);

export type VariantRegionAddIsFrameshiftMutationVariables = {
  variant_id: Scalars['ID'];
  old_eb_id: Scalars['ID'];
  date: Scalars['String'];
  eb_field: Scalars['String'];
  eb_vpe: ExtendedBoolean;
  eb_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantRegionAddIsFrameshiftMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantRegionIsFrameshift' | 'createEditableBoolean' | 'addEditableBooleanEditor' | 'addEditableBooleanReferences' | 'addVariantRegionIsFrameshift'>
);

export type VariantRegionAddIsDeleteriousMutationVariables = {
  variant_id: Scalars['ID'];
  old_eb_id: Scalars['ID'];
  date: Scalars['String'];
  eb_field: Scalars['String'];
  eb_vpe: ExtendedBoolean;
  eb_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantRegionAddIsDeleteriousMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantRegionIsDeleterious' | 'createEditableBoolean' | 'addEditableBooleanEditor' | 'addEditableBooleanReferences' | 'addVariantRegionIsDeleterious'>
);

export type VariantRegionAddIsTruncatingMutationVariables = {
  variant_id: Scalars['ID'];
  old_eb_id: Scalars['ID'];
  date: Scalars['String'];
  eb_field: Scalars['String'];
  eb_vpe: ExtendedBoolean;
  eb_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantRegionAddIsTruncatingMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantRegionIsTruncating' | 'createEditableBoolean' | 'addEditableBooleanEditor' | 'addEditableBooleanReferences' | 'addVariantRegionIsTruncating'>
);

export type VariantSnvIndelQueryVariables = {
  variant_id?: Maybe<Scalars['ID']>;
};


export type VariantSnvIndelQuery = (
  { __typename?: 'QueryType' }
  & { VariantSNVIndel?: Maybe<Array<Maybe<(
    { __typename?: 'VariantSNVIndel' }
    & Pick<VariantSnvIndel, 'id' | 'variantType' | 'indelType'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), cDot: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), pDot: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), gDot: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), gene: (
      { __typename?: 'OmniGene' }
      & Pick<OmniGene, 'id' | 'name'>
    ), description: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), proteinEffect: (
      { __typename?: 'EditableProteinEffect' }
      & Pick<EditableProteinEffect, 'id' | 'proteinEffect' | 'field' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), exon: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), jaxVariant?: Maybe<(
      { __typename?: 'JaxVariant' }
      & Pick<JaxVariant, 'id'>
    )>, goVariant?: Maybe<(
      { __typename?: 'GOVariant' }
      & Pick<GoVariant, 'id'>
    )>, clinVarVariant?: Maybe<(
      { __typename?: 'ClinVarVariant' }
      & Pick<ClinVarVariant, 'id'>
    )>, hotSpotVariant?: Maybe<(
      { __typename?: 'HotSpotVariant' }
      & Pick<HotSpotVariant, 'id'>
    )> }
  )>>> }
);

export type VariantSnvIndelAddDescriptionMutationVariables = {
  variant_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantSnvIndelAddDescriptionMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantSNVIndelDescription' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addVariantSNVIndelDescription'>
);

export type VariantSnvIndelAddProteinEffectMutationVariables = {
  variant_id: Scalars['ID'];
  old_epe_id: Scalars['ID'];
  date: Scalars['String'];
  epe_field: Scalars['String'];
  epe_vpe: VariantProteinEffect;
  epe_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantSnvIndelAddProteinEffectMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantSNVIndelProteinEffect' | 'createEditableProteinEffect' | 'addEditableProteinEffectEditor' | 'addEditableProteinEffectReferences' | 'addVariantSNVIndelProteinEffect'>
);

export type VariantSnvIndelAddPDotMutationVariables = {
  variant_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantSnvIndelAddPDotMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantSNVIndelPDot' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addVariantSNVIndelPDot'>
);

export type VariantSnvIndelAddCDotMutationVariables = {
  variant_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantSnvIndelAddCDotMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantSNVIndelCDot' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addVariantSNVIndelCDot'>
);

export type VariantSnvIndelAddGDotMutationVariables = {
  variant_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantSnvIndelAddGDotMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantSNVIndelGDot' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addVariantSNVIndelGDot'>
);

export type VariantSnvIndelAddExonMutationVariables = {
  variant_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type VariantSnvIndelAddExonMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteVariantSNVIndelExon' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addVariantSNVIndelExon'>
);

export type GeneList_For_VariantsQueryVariables = {};


export type GeneList_For_VariantsQuery = (
  { __typename?: 'QueryType' }
  & { OmniGene?: Maybe<Array<Maybe<(
    { __typename?: 'OmniGene' }
    & Pick<OmniGene, 'id' | 'name'>
  )>>> }
);

export type Variant_Markers_For_GeneQueryVariables = {
  omnigene_id?: Maybe<Scalars['ID']>;
  query_string?: Maybe<Scalars['String']>;
};


export type Variant_Markers_For_GeneQuery = (
  { __typename?: 'QueryType' }
  & { GenomicVariantMarker?: Maybe<Array<Maybe<(
    { __typename?: 'GenomicVariantMarker' }
    & Pick<GenomicVariantMarker, 'id'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Pick<EditableStatement, 'statement'>
    ), method: (
      { __typename?: 'EditableStatement' }
      & Pick<EditableStatement, 'statement'>
    ), variant: (
      { __typename: 'VariantCNV' }
      & Pick<VariantCnv, 'id'>
      & { name: (
        { __typename?: 'EditableStatement' }
        & Pick<EditableStatement, 'statement'>
      ) }
    ) | (
      { __typename: 'VariantFusion' }
      & Pick<VariantFusion, 'id'>
      & { name: (
        { __typename?: 'EditableStatement' }
        & Pick<EditableStatement, 'statement'>
      ) }
    ) | (
      { __typename: 'VariantRegion' }
      & Pick<VariantRegion, 'id'>
      & { name: (
        { __typename?: 'EditableStatement' }
        & Pick<EditableStatement, 'statement'>
      ) }
    ) | (
      { __typename: 'VariantSNVIndel' }
      & Pick<VariantSnvIndel, 'id'>
      & { name: (
        { __typename?: 'EditableStatement' }
        & Pick<EditableStatement, 'statement'>
      ) }
    ) }
  )>>> }
);

export type HotSpotVariantQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type HotSpotVariantQuery = (
  { __typename?: 'QueryType' }
  & { HotSpotVariant?: Maybe<Array<Maybe<(
    { __typename?: 'HotSpotVariant' }
    & Pick<HotSpotVariant, 'id' | 'gene' | 'name' | 'referenceAminoAcid' | 'variantAminoAcid' | 'begin' | 'end' | 'position'>
    & { occurrences: Array<Maybe<(
      { __typename?: 'OncoTreeOccurrence' }
      & Pick<OncoTreeOccurrence, 'disease' | 'oncoTreeCode' | 'perThousandOccurrence'>
      & { occurrences: (
        { __typename?: 'EditableInt' }
        & Ei_FieldsFragment
      ), totalSamples: (
        { __typename?: 'EditableInt' }
        & Ei_FieldsFragment
      ), percentOccurrence: (
        { __typename?: 'EditableStatement' }
        & Es_FieldsFragment
      ) }
    )>> }
  )>>> }
);

export type Ei_FieldsFragment = (
  { __typename?: 'EditableInt' }
  & Pick<EditableInt, 'id' | 'intValue' | 'editDate'>
  & { references: Array<Maybe<(
    { __typename?: 'InternetReference' }
    & Pick<InternetReference, 'id'>
  ) | (
    { __typename?: 'LiteratureReference' }
    & Pick<LiteratureReference, 'id'>
  ) | (
    { __typename?: 'MeetingAbstractReference' }
    & Pick<MeetingAbstractReference, 'id'>
  )>>, editor: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name'>
  ) }
);

export type JaxVariantQueryVariables = {
  id?: Maybe<Scalars['ID']>;
};


export type JaxVariantQuery = (
  { __typename?: 'QueryType' }
  & { JaxVariant?: Maybe<Array<Maybe<(
    { __typename?: 'JaxVariant' }
    & Pick<JaxVariant, 'id' | 'name' | 'cDot' | 'pDot' | 'gDot' | 'variantType'>
    & { gene: (
      { __typename?: 'JaxGene' }
      & Pick<JaxGene, 'id' | 'name'>
    ), proteinEffect: (
      { __typename?: 'EditableProteinEffect' }
      & Pick<EditableProteinEffect, 'id' | 'proteinEffect' | 'field' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), transcript: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), description: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ) }
  )>>> }
);

export type Msi_MarkerQueryVariables = {
  marker_id?: Maybe<Scalars['ID']>;
};


export type Msi_MarkerQuery = (
  { __typename?: 'QueryType' }
  & { MSIMarker?: Maybe<Array<Maybe<(
    { __typename?: 'MSIMarker' }
    & Pick<MsiMarker, 'id'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), method: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), resultString: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ) }
  )>>> }
);

export type MsiMarkerAddNameMutationVariables = {
  marker_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type MsiMarkerAddNameMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteMSIMarkerName' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addMSIMarkerName'>
);

export type MsiMarkerAddMethodMutationVariables = {
  marker_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type MsiMarkerAddMethodMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteMSIMarkerMethod' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addMSIMarkerMethod'>
);

export type MsiMarkerAddResultsMutationVariables = {
  marker_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type MsiMarkerAddResultsMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteMSIMarkerResultString' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addMSIMarkerResultString'>
);

export type Msi_MarkersQueryVariables = {};


export type Msi_MarkersQuery = (
  { __typename?: 'QueryType' }
  & { MSIMarker?: Maybe<Array<Maybe<(
    { __typename?: 'MSIMarker' }
    & Pick<MsiMarker, 'id'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), method: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), resultString: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ) }
  )>>> }
);

export type Tmb_MarkerQueryVariables = {
  marker_id?: Maybe<Scalars['ID']>;
};


export type Tmb_MarkerQuery = (
  { __typename?: 'QueryType' }
  & { TMBMarker?: Maybe<Array<Maybe<(
    { __typename?: 'TMBMarker' }
    & Pick<TmbMarker, 'id'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), method: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), comparator: (
      { __typename?: 'EditableAssayComparator' }
      & Pick<EditableAssayComparator, 'id' | 'field' | 'comparator' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), resultMin: (
      { __typename?: 'EditableFloat' }
      & Pick<EditableFloat, 'id' | 'field' | 'floatValue' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    ), resultMax?: Maybe<(
      { __typename?: 'EditableFloat' }
      & Pick<EditableFloat, 'id' | 'field' | 'floatValue' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    )>, resultUnits: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), interpretations: Array<Maybe<(
      { __typename?: 'EditableTMBInterpretation' }
      & Pick<EditableTmbInterpretation, 'id' | 'field' | 'tmbInterpretation' | 'editDate'>
      & { references: Array<Maybe<(
        { __typename?: 'InternetReference' }
        & Pick<InternetReference, 'id'>
      ) | (
        { __typename?: 'LiteratureReference' }
        & Pick<LiteratureReference, 'id'>
      ) | (
        { __typename?: 'MeetingAbstractReference' }
        & Pick<MeetingAbstractReference, 'id'>
      )>>, editor: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'name'>
      ) }
    )>>, resultString: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ) }
  )>>> }
);

export type TmbMarkerAddNameMutationVariables = {
  marker_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type TmbMarkerAddNameMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteTMBMarkerName' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addTMBMarkerName'>
);

export type TmbMarkerAddMethodMutationVariables = {
  marker_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type TmbMarkerAddMethodMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteTMBMarkerMethod' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addTMBMarkerMethod'>
);

export type TmbMarkerAddResultsMutationVariables = {
  marker_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type TmbMarkerAddResultsMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteTMBMarkerResultString' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addTMBMarkerResultString'>
);

export type TmbMarkerAddResultUnitsMutationVariables = {
  marker_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  es_statement: Scalars['String'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type TmbMarkerAddResultUnitsMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteTMBMarkerResultUnits' | 'createEditableStatement' | 'addEditableStatementEditor' | 'addEditableStatementReferences' | 'addTMBMarkerResultUnits'>
);

export type TmbMarkerAddResultMinMutationVariables = {
  marker_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  ef_float: Scalars['Float'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type TmbMarkerAddResultMinMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteTMBMarkerResultMin' | 'createEditableFloat' | 'addEditableFloatEditor' | 'addEditableFloatReferences' | 'addTMBMarkerResultMin'>
);

export type TmbMarkerAddResultMaxMutationVariables = {
  marker_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  ef_float: Scalars['Float'];
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type TmbMarkerAddResultMaxMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteTMBMarkerResultMax' | 'createEditableFloat' | 'addEditableFloatEditor' | 'addEditableFloatReferences' | 'addTMBMarkerResultMax'>
);

export type TmbMarkerAddComparatorMutationVariables = {
  marker_id: Scalars['ID'];
  old_es_id: Scalars['ID'];
  date: Scalars['String'];
  es_field: Scalars['String'];
  comp: AssayComparator;
  es_id: Scalars['ID'];
  user_id: Scalars['ID'];
  ref_aray: Array<Scalars['ID']>;
};


export type TmbMarkerAddComparatorMutation = (
  { __typename?: 'MutationType' }
  & Pick<MutationType, 'deleteTMBMarkerComparator' | 'createEditableAssayComparator' | 'addEditableAssayComparatorEditor' | 'addEditableAssayComparatorReferences' | 'addTMBMarkerComparator'>
);

export type Tmb_MarkersQueryVariables = {};


export type Tmb_MarkersQuery = (
  { __typename?: 'QueryType' }
  & { TMBMarker?: Maybe<Array<Maybe<(
    { __typename?: 'TMBMarker' }
    & Pick<TmbMarker, 'id'>
    & { name: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), method: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ), resultString: (
      { __typename?: 'EditableStatement' }
      & Es_FieldsFragment
    ) }
  )>>> }
);

export type EditableAssayComparatorQueryVariables = {
  field?: Maybe<Scalars['String']>;
};


export type EditableAssayComparatorQuery = (
  { __typename?: 'QueryType' }
  & { EditableAssayComparator?: Maybe<Array<Maybe<(
    { __typename?: 'EditableAssayComparator' }
    & Pick<EditableAssayComparator, 'field' | 'comparator' | 'editDate'>
    & { editor: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ), references: Array<Maybe<(
      { __typename?: 'InternetReference' }
      & Pick<InternetReference, 'shortReference'>
    ) | (
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'shortReference'>
    ) | (
      { __typename?: 'MeetingAbstractReference' }
      & Pick<MeetingAbstractReference, 'shortReference'>
    )>> }
  )>>> }
);

export type EditableCopyChangeQueryVariables = {
  field?: Maybe<Scalars['String']>;
};


export type EditableCopyChangeQuery = (
  { __typename?: 'QueryType' }
  & { EditableCopyChange?: Maybe<Array<Maybe<(
    { __typename?: 'EditableCopyChange' }
    & Pick<EditableCopyChange, 'field' | 'cnvType' | 'editDate'>
    & { editor: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ), references: Array<Maybe<(
      { __typename?: 'InternetReference' }
      & Pick<InternetReference, 'shortReference'>
    ) | (
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'shortReference'>
    ) | (
      { __typename?: 'MeetingAbstractReference' }
      & Pick<MeetingAbstractReference, 'shortReference'>
    )>> }
  )>>> }
);

export type EditableBooleanQueryVariables = {
  field?: Maybe<Scalars['String']>;
};


export type EditableBooleanQuery = (
  { __typename?: 'QueryType' }
  & { EditableBoolean?: Maybe<Array<Maybe<(
    { __typename?: 'EditableBoolean' }
    & Pick<EditableBoolean, 'field' | 'booleanValue' | 'editDate'>
    & { editor: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ), references: Array<Maybe<(
      { __typename?: 'InternetReference' }
      & Pick<InternetReference, 'shortReference'>
    ) | (
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'shortReference'>
    ) | (
      { __typename?: 'MeetingAbstractReference' }
      & Pick<MeetingAbstractReference, 'shortReference'>
    )>> }
  )>>> }
);

export type EditableFloatQueryVariables = {
  field?: Maybe<Scalars['String']>;
};


export type EditableFloatQuery = (
  { __typename?: 'QueryType' }
  & { EditableFloat?: Maybe<Array<Maybe<(
    { __typename?: 'EditableFloat' }
    & Pick<EditableFloat, 'field' | 'floatValue' | 'editDate'>
    & { editor: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ), references: Array<Maybe<(
      { __typename?: 'InternetReference' }
      & Pick<InternetReference, 'shortReference'>
    ) | (
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'shortReference'>
    ) | (
      { __typename?: 'MeetingAbstractReference' }
      & Pick<MeetingAbstractReference, 'shortReference'>
    )>> }
  )>>> }
);

export type EditableIntQueryVariables = {
  field?: Maybe<Scalars['String']>;
};


export type EditableIntQuery = (
  { __typename?: 'QueryType' }
  & { EditableInt?: Maybe<Array<Maybe<(
    { __typename?: 'EditableInt' }
    & Pick<EditableInt, 'field' | 'intValue' | 'editDate'>
    & { editor: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ), references: Array<Maybe<(
      { __typename?: 'InternetReference' }
      & Pick<InternetReference, 'shortReference'>
    ) | (
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'shortReference'>
    ) | (
      { __typename?: 'MeetingAbstractReference' }
      & Pick<MeetingAbstractReference, 'shortReference'>
    )>> }
  )>>> }
);

export type EditableOmniGeneReferenceQueryVariables = {
  field?: Maybe<Scalars['String']>;
};


export type EditableOmniGeneReferenceQuery = (
  { __typename?: 'QueryType' }
  & { EditableOmniGeneReference?: Maybe<Array<Maybe<(
    { __typename?: 'EditableOmniGeneReference' }
    & Pick<EditableOmniGeneReference, 'field' | 'editDate'>
    & { gene: (
      { __typename?: 'OmniGene' }
      & Pick<OmniGene, 'name'>
    ), editor: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ), references: Array<Maybe<(
      { __typename?: 'InternetReference' }
      & Pick<InternetReference, 'shortReference'>
    ) | (
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'shortReference'>
    ) | (
      { __typename?: 'MeetingAbstractReference' }
      & Pick<MeetingAbstractReference, 'shortReference'>
    )>> }
  )>>> }
);

export type EditableStatementQueryVariables = {
  field?: Maybe<Scalars['String']>;
};


export type EditableStatementQuery = (
  { __typename?: 'QueryType' }
  & { EditableStatement?: Maybe<Array<Maybe<(
    { __typename?: 'EditableStatement' }
    & Pick<EditableStatement, 'field' | 'statement' | 'editDate'>
    & { editor: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ), references: Array<Maybe<(
      { __typename?: 'InternetReference' }
      & Pick<InternetReference, 'shortReference'>
    ) | (
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'shortReference'>
    ) | (
      { __typename?: 'MeetingAbstractReference' }
      & Pick<MeetingAbstractReference, 'shortReference'>
    )>> }
  )>>> }
);

export type LiteratureReferenceQueryVariables = {
  ref_id?: Maybe<Scalars['ID']>;
};


export type LiteratureReferenceQuery = (
  { __typename?: 'QueryType' }
  & { LiteratureReference?: Maybe<Array<Maybe<(
    { __typename?: 'LiteratureReference' }
    & Pick<LiteratureReference, 'shortReference' | 'id' | 'PMID' | 'DOI' | 'title' | 'volume' | 'firstPage' | 'lastPage' | 'publicationYear' | 'abstract'>
    & { journal: (
      { __typename?: 'Journal' }
      & Pick<Journal, 'id' | 'name'>
    ), authors: Array<(
      { __typename?: 'Author' }
      & Pick<Author, 'id' | 'surname' | 'firstInitial'>
    )> }
  )>>> }
);

export type EditableProteinEffectQueryVariables = {
  field?: Maybe<Scalars['String']>;
};


export type EditableProteinEffectQuery = (
  { __typename?: 'QueryType' }
  & { EditableProteinEffect?: Maybe<Array<Maybe<(
    { __typename?: 'EditableProteinEffect' }
    & Pick<EditableProteinEffect, 'field' | 'proteinEffect' | 'editDate'>
    & { editor: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ), references: Array<Maybe<(
      { __typename?: 'InternetReference' }
      & Pick<InternetReference, 'shortReference'>
    ) | (
      { __typename?: 'LiteratureReference' }
      & Pick<LiteratureReference, 'shortReference'>
    ) | (
      { __typename?: 'MeetingAbstractReference' }
      & Pick<MeetingAbstractReference, 'shortReference'>
    )>> }
  )>>> }
);

export type EditableStringListQueryVariables = {
  field?: Maybe<Scalars['String']>;
};


export type EditableStringListQuery = (
  { __typename?: 'QueryType' }
  & { EditableStringList?: Maybe<Array<Maybe<(
    { __typename?: 'EditableStringList' }
    & Pick<EditableStringList, 'field' | 'stringList' | 'editDate'>
    & { editor: (
      { __typename?: 'User' }
      & Pick<User, 'name'>
    ) }
  )>>> }
);

export const Es_FieldsFragmentDoc = gql`
    fragment es_fields on EditableStatement {
  id
  statement
  field
  references {
    id
    ... on LiteratureReference {
      PMID
    }
  }
  editor {
    id
    name
  }
  editDate
}
    `;
export const Eog_FieldsFragmentDoc = gql`
    fragment eog_fields on EditableOmniGeneReference {
  id
  gene {
    id
    name
  }
  field
  references {
    id
  }
  editor {
    id
    name
  }
  editDate
}
    `;
export const EbFragmentDoc = gql`
    fragment eb on EditableBoolean {
  id
  booleanValue
  field
  references {
    id
  }
  editor {
    id
    name
  }
  editDate
}
    `;
export const Ei_FieldsFragmentDoc = gql`
    fragment ei_fields on EditableInt {
  id
  intValue
  references {
    id
  }
  editor {
    id
    name
  }
  editDate
}
    `;
export const OmniGeneComponentsDocument = gql`
    query OmniGeneComponents($gene_id: ID) {
  OmniGene(id: $gene_id) {
    myGeneInfoGene {
      id
    }
    uniprotEntry {
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
export const JaxGeneDocument = gql`
    query JaxGene($id: ID) {
  JaxGene(id: $id) {
    name
    canonicalTranscript {
      statement
    }
    chromosome
    entrezId
    jaxId
    synonyms {
      stringList
    }
    description {
      statement
      field
      editDate
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
export const MyGeneInfo_GeneDocument = gql`
    query MyGeneInfo_Gene($id: ID) {
  MyGeneInfoGene(id: $id) {
    name
    entrezId
    chromosome
    start
    end
    strand
    description {
      statement
      field
      references {
        shortReference
        ... on InternetReference {
          accessedDate
          webAddress
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
    synonyms {
      id
      stringList
      field
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    transcript {
      ...es_fields
    }
    myGeneInfoGene {
      id
    }
    uniprotEntry {
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
export const AddSynonymsDocument = gql`
    mutation addSynonyms($gene_id: ID!, $old_esyn_id: ID!, $date: String!, $esyn_field: String!, $esyn_list: [String]!, $esyn_id: ID!, $user_id: ID!) {
  deleteOmniGeneSynonyms(id: $gene_id, synonyms: [$old_esyn_id])
  createEditableStringList(id: $esyn_id, field: $esyn_field, stringList: $esyn_list, editDate: $date)
  addEditableStringListEditor(editor: [$user_id], id: $esyn_id)
  addEditableStringListReferences(id: $esyn_id, references: [])
  addOmniGeneSynonyms(id: $gene_id, synonyms: [$esyn_id])
}
    `;
export type AddSynonymsMutationFn = ApolloReactCommon.MutationFunction<AddSynonymsMutation, AddSynonymsMutationVariables>;
export type AddSynonymsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddSynonymsMutation, AddSynonymsMutationVariables>, 'mutation'>;

    export const AddSynonymsComponent = (props: AddSynonymsComponentProps) => (
      <ApolloReactComponents.Mutation<AddSynonymsMutation, AddSynonymsMutationVariables> mutation={AddSynonymsDocument} {...props} />
    );
    
export type AddSynonymsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<AddSynonymsMutation, AddSynonymsMutationVariables>
    } & TChildProps;
export function withAddSynonyms<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddSynonymsMutation,
  AddSynonymsMutationVariables,
  AddSynonymsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddSynonymsMutation, AddSynonymsMutationVariables, AddSynonymsProps<TChildProps, TDataName>>(AddSynonymsDocument, {
      alias: 'addSynonyms',
      ...operationOptions
    });
};

/**
 * __useAddSynonymsMutation__
 *
 * To run a mutation, you first call `useAddSynonymsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSynonymsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSynonymsMutation, { data, loading, error }] = useAddSynonymsMutation({
 *   variables: {
 *      gene_id: // value for 'gene_id'
 *      old_esyn_id: // value for 'old_esyn_id'
 *      date: // value for 'date'
 *      esyn_field: // value for 'esyn_field'
 *      esyn_list: // value for 'esyn_list'
 *      esyn_id: // value for 'esyn_id'
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useAddSynonymsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddSynonymsMutation, AddSynonymsMutationVariables>) {
        return ApolloReactHooks.useMutation<AddSynonymsMutation, AddSynonymsMutationVariables>(AddSynonymsDocument, baseOptions);
      }
export type AddSynonymsMutationHookResult = ReturnType<typeof useAddSynonymsMutation>;
export type AddSynonymsMutationResult = ApolloReactCommon.MutationResult<AddSynonymsMutation>;
export type AddSynonymsMutationOptions = ApolloReactCommon.BaseMutationOptions<AddSynonymsMutation, AddSynonymsMutationVariables>;
export const AddOmniGeneOncogenicCategoryDocument = gql`
    mutation addOmniGeneOncogenicCategory($gene_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteOmniGeneOncogenicCategory(id: $gene_id, oncogenicCategory: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
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
 *      ref_aray: // value for 'ref_aray'
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
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
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
  UniprotEntry(id: $id) {
    id
    name
    accessionNumber
    uniprotId
    function {
      id
      statement
      field
      editor {
        name
      }
      editDate
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
export const ClinVarVariantDocument = gql`
    query ClinVarVariant($id: ID) {
  ClinVarVariant(id: $id) {
    id
    cDot
    pDot
    significance {
      ...es_fields
    }
    signficanceExplanation {
      ...es_fields
    }
    variantId
    gene
  }
}
    ${Es_FieldsFragmentDoc}`;
export type ClinVarVariantComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ClinVarVariantQuery, ClinVarVariantQueryVariables>, 'query'>;

    export const ClinVarVariantComponent = (props: ClinVarVariantComponentProps) => (
      <ApolloReactComponents.Query<ClinVarVariantQuery, ClinVarVariantQueryVariables> query={ClinVarVariantDocument} {...props} />
    );
    
export type ClinVarVariantProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<ClinVarVariantQuery, ClinVarVariantQueryVariables>
    } & TChildProps;
export function withClinVarVariant<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ClinVarVariantQuery,
  ClinVarVariantQueryVariables,
  ClinVarVariantProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, ClinVarVariantQuery, ClinVarVariantQueryVariables, ClinVarVariantProps<TChildProps, TDataName>>(ClinVarVariantDocument, {
      alias: 'clinVarVariant',
      ...operationOptions
    });
};

/**
 * __useClinVarVariantQuery__
 *
 * To run a query within a React component, call `useClinVarVariantQuery` and pass it any options that fit your needs.
 * When your component renders, `useClinVarVariantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClinVarVariantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useClinVarVariantQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ClinVarVariantQuery, ClinVarVariantQueryVariables>) {
        return ApolloReactHooks.useQuery<ClinVarVariantQuery, ClinVarVariantQueryVariables>(ClinVarVariantDocument, baseOptions);
      }
export function useClinVarVariantLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ClinVarVariantQuery, ClinVarVariantQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ClinVarVariantQuery, ClinVarVariantQueryVariables>(ClinVarVariantDocument, baseOptions);
        }
export type ClinVarVariantQueryHookResult = ReturnType<typeof useClinVarVariantQuery>;
export type ClinVarVariantLazyQueryHookResult = ReturnType<typeof useClinVarVariantLazyQuery>;
export type ClinVarVariantQueryResult = ApolloReactCommon.QueryResult<ClinVarVariantQuery, ClinVarVariantQueryVariables>;
export const GoVariantDocument = gql`
    query GOVariant($id: ID) {
  GOVariant(id: $id) {
    id
    name {
      ...es_fields
    }
    goId
    jaxVariant {
      name
      id
    }
    gene
    mutationType
  }
}
    ${Es_FieldsFragmentDoc}`;
export type GoVariantComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GoVariantQuery, GoVariantQueryVariables>, 'query'>;

    export const GoVariantComponent = (props: GoVariantComponentProps) => (
      <ApolloReactComponents.Query<GoVariantQuery, GoVariantQueryVariables> query={GoVariantDocument} {...props} />
    );
    
export type GoVariantProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GoVariantQuery, GoVariantQueryVariables>
    } & TChildProps;
export function withGoVariant<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GoVariantQuery,
  GoVariantQueryVariables,
  GoVariantProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GoVariantQuery, GoVariantQueryVariables, GoVariantProps<TChildProps, TDataName>>(GoVariantDocument, {
      alias: 'goVariant',
      ...operationOptions
    });
};

/**
 * __useGoVariantQuery__
 *
 * To run a query within a React component, call `useGoVariantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoVariantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoVariantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGoVariantQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GoVariantQuery, GoVariantQueryVariables>) {
        return ApolloReactHooks.useQuery<GoVariantQuery, GoVariantQueryVariables>(GoVariantDocument, baseOptions);
      }
export function useGoVariantLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GoVariantQuery, GoVariantQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GoVariantQuery, GoVariantQueryVariables>(GoVariantDocument, baseOptions);
        }
export type GoVariantQueryHookResult = ReturnType<typeof useGoVariantQuery>;
export type GoVariantLazyQueryHookResult = ReturnType<typeof useGoVariantLazyQuery>;
export type GoVariantQueryResult = ApolloReactCommon.QueryResult<GoVariantQuery, GoVariantQueryVariables>;
export const VariantCnvDocument = gql`
    query VariantCNV($variant_id: ID) {
  VariantCNV(id: $variant_id) {
    id
    name {
      ...es_fields
    }
    copyChange {
      id
      field
      cnvType
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    gene {
      id
      name
    }
    description {
      ...es_fields
    }
    jaxVariant {
      id
    }
    goVariant {
      id
    }
    clinVarVariant {
      id
    }
    hotSpotVariant {
      id
    }
  }
}
    ${Es_FieldsFragmentDoc}`;
export type VariantCnvComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<VariantCnvQuery, VariantCnvQueryVariables>, 'query'>;

    export const VariantCnvComponent = (props: VariantCnvComponentProps) => (
      <ApolloReactComponents.Query<VariantCnvQuery, VariantCnvQueryVariables> query={VariantCnvDocument} {...props} />
    );
    
export type VariantCnvProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<VariantCnvQuery, VariantCnvQueryVariables>
    } & TChildProps;
export function withVariantCnv<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantCnvQuery,
  VariantCnvQueryVariables,
  VariantCnvProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, VariantCnvQuery, VariantCnvQueryVariables, VariantCnvProps<TChildProps, TDataName>>(VariantCnvDocument, {
      alias: 'variantCnv',
      ...operationOptions
    });
};

/**
 * __useVariantCnvQuery__
 *
 * To run a query within a React component, call `useVariantCnvQuery` and pass it any options that fit your needs.
 * When your component renders, `useVariantCnvQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVariantCnvQuery({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *   },
 * });
 */
export function useVariantCnvQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VariantCnvQuery, VariantCnvQueryVariables>) {
        return ApolloReactHooks.useQuery<VariantCnvQuery, VariantCnvQueryVariables>(VariantCnvDocument, baseOptions);
      }
export function useVariantCnvLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VariantCnvQuery, VariantCnvQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VariantCnvQuery, VariantCnvQueryVariables>(VariantCnvDocument, baseOptions);
        }
export type VariantCnvQueryHookResult = ReturnType<typeof useVariantCnvQuery>;
export type VariantCnvLazyQueryHookResult = ReturnType<typeof useVariantCnvLazyQuery>;
export type VariantCnvQueryResult = ApolloReactCommon.QueryResult<VariantCnvQuery, VariantCnvQueryVariables>;
export const VariantCnvAddCopyChangeDocument = gql`
    mutation VariantCNVAddCopyChange($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $copy_change: CNVType!, $id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantCNVCopyChange(id: $variant_id, copyChange: [$old_id])
  createEditableCopyChange(editDate: $date, field: $field, id: $id, cnvType: $copy_change)
  addEditableCopyChangeEditor(editor: [$user_id], id: $id)
  addEditableCopyChangeReferences(id: $id, references: $ref_aray)
  addVariantCNVCopyChange(id: $variant_id, copyChange: [$id])
}
    `;
export type VariantCnvAddCopyChangeMutationFn = ApolloReactCommon.MutationFunction<VariantCnvAddCopyChangeMutation, VariantCnvAddCopyChangeMutationVariables>;
export type VariantCnvAddCopyChangeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantCnvAddCopyChangeMutation, VariantCnvAddCopyChangeMutationVariables>, 'mutation'>;

    export const VariantCnvAddCopyChangeComponent = (props: VariantCnvAddCopyChangeComponentProps) => (
      <ApolloReactComponents.Mutation<VariantCnvAddCopyChangeMutation, VariantCnvAddCopyChangeMutationVariables> mutation={VariantCnvAddCopyChangeDocument} {...props} />
    );
    
export type VariantCnvAddCopyChangeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantCnvAddCopyChangeMutation, VariantCnvAddCopyChangeMutationVariables>
    } & TChildProps;
export function withVariantCnvAddCopyChange<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantCnvAddCopyChangeMutation,
  VariantCnvAddCopyChangeMutationVariables,
  VariantCnvAddCopyChangeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantCnvAddCopyChangeMutation, VariantCnvAddCopyChangeMutationVariables, VariantCnvAddCopyChangeProps<TChildProps, TDataName>>(VariantCnvAddCopyChangeDocument, {
      alias: 'variantCnvAddCopyChange',
      ...operationOptions
    });
};

/**
 * __useVariantCnvAddCopyChangeMutation__
 *
 * To run a mutation, you first call `useVariantCnvAddCopyChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantCnvAddCopyChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantCnvAddCopyChangeMutation, { data, loading, error }] = useVariantCnvAddCopyChangeMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_id: // value for 'old_id'
 *      date: // value for 'date'
 *      field: // value for 'field'
 *      copy_change: // value for 'copy_change'
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantCnvAddCopyChangeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantCnvAddCopyChangeMutation, VariantCnvAddCopyChangeMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantCnvAddCopyChangeMutation, VariantCnvAddCopyChangeMutationVariables>(VariantCnvAddCopyChangeDocument, baseOptions);
      }
export type VariantCnvAddCopyChangeMutationHookResult = ReturnType<typeof useVariantCnvAddCopyChangeMutation>;
export type VariantCnvAddCopyChangeMutationResult = ApolloReactCommon.MutationResult<VariantCnvAddCopyChangeMutation>;
export type VariantCnvAddCopyChangeMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantCnvAddCopyChangeMutation, VariantCnvAddCopyChangeMutationVariables>;
export const VariantCnvAddDescriptionDocument = gql`
    mutation VariantCNVAddDescription($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantCNVDescription(id: $variant_id, description: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addVariantCNVDescription(id: $variant_id, description: [$es_id])
}
    `;
export type VariantCnvAddDescriptionMutationFn = ApolloReactCommon.MutationFunction<VariantCnvAddDescriptionMutation, VariantCnvAddDescriptionMutationVariables>;
export type VariantCnvAddDescriptionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantCnvAddDescriptionMutation, VariantCnvAddDescriptionMutationVariables>, 'mutation'>;

    export const VariantCnvAddDescriptionComponent = (props: VariantCnvAddDescriptionComponentProps) => (
      <ApolloReactComponents.Mutation<VariantCnvAddDescriptionMutation, VariantCnvAddDescriptionMutationVariables> mutation={VariantCnvAddDescriptionDocument} {...props} />
    );
    
export type VariantCnvAddDescriptionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantCnvAddDescriptionMutation, VariantCnvAddDescriptionMutationVariables>
    } & TChildProps;
export function withVariantCnvAddDescription<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantCnvAddDescriptionMutation,
  VariantCnvAddDescriptionMutationVariables,
  VariantCnvAddDescriptionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantCnvAddDescriptionMutation, VariantCnvAddDescriptionMutationVariables, VariantCnvAddDescriptionProps<TChildProps, TDataName>>(VariantCnvAddDescriptionDocument, {
      alias: 'variantCnvAddDescription',
      ...operationOptions
    });
};

/**
 * __useVariantCnvAddDescriptionMutation__
 *
 * To run a mutation, you first call `useVariantCnvAddDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantCnvAddDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantCnvAddDescriptionMutation, { data, loading, error }] = useVariantCnvAddDescriptionMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
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
export function useVariantCnvAddDescriptionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantCnvAddDescriptionMutation, VariantCnvAddDescriptionMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantCnvAddDescriptionMutation, VariantCnvAddDescriptionMutationVariables>(VariantCnvAddDescriptionDocument, baseOptions);
      }
export type VariantCnvAddDescriptionMutationHookResult = ReturnType<typeof useVariantCnvAddDescriptionMutation>;
export type VariantCnvAddDescriptionMutationResult = ApolloReactCommon.MutationResult<VariantCnvAddDescriptionMutation>;
export type VariantCnvAddDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantCnvAddDescriptionMutation, VariantCnvAddDescriptionMutationVariables>;
export const GenomicVariantComponentsDocument = gql`
    query GenomicVariantComponents($variant_id: ID) {
  GenomicVariant(id: $variant_id) {
    jaxVariant {
      id
    }
    goVariant {
      id
    }
    clinVarVariant {
      id
    }
    hotSpotVariant {
      id
    }
  }
}
    `;
export type GenomicVariantComponentsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GenomicVariantComponentsQuery, GenomicVariantComponentsQueryVariables>, 'query'>;

    export const GenomicVariantComponentsComponent = (props: GenomicVariantComponentsComponentProps) => (
      <ApolloReactComponents.Query<GenomicVariantComponentsQuery, GenomicVariantComponentsQueryVariables> query={GenomicVariantComponentsDocument} {...props} />
    );
    
export type GenomicVariantComponentsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GenomicVariantComponentsQuery, GenomicVariantComponentsQueryVariables>
    } & TChildProps;
export function withGenomicVariantComponents<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GenomicVariantComponentsQuery,
  GenomicVariantComponentsQueryVariables,
  GenomicVariantComponentsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GenomicVariantComponentsQuery, GenomicVariantComponentsQueryVariables, GenomicVariantComponentsProps<TChildProps, TDataName>>(GenomicVariantComponentsDocument, {
      alias: 'genomicVariantComponents',
      ...operationOptions
    });
};

/**
 * __useGenomicVariantComponentsQuery__
 *
 * To run a query within a React component, call `useGenomicVariantComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenomicVariantComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenomicVariantComponentsQuery({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *   },
 * });
 */
export function useGenomicVariantComponentsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GenomicVariantComponentsQuery, GenomicVariantComponentsQueryVariables>) {
        return ApolloReactHooks.useQuery<GenomicVariantComponentsQuery, GenomicVariantComponentsQueryVariables>(GenomicVariantComponentsDocument, baseOptions);
      }
export function useGenomicVariantComponentsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GenomicVariantComponentsQuery, GenomicVariantComponentsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GenomicVariantComponentsQuery, GenomicVariantComponentsQueryVariables>(GenomicVariantComponentsDocument, baseOptions);
        }
export type GenomicVariantComponentsQueryHookResult = ReturnType<typeof useGenomicVariantComponentsQuery>;
export type GenomicVariantComponentsLazyQueryHookResult = ReturnType<typeof useGenomicVariantComponentsLazyQuery>;
export type GenomicVariantComponentsQueryResult = ApolloReactCommon.QueryResult<GenomicVariantComponentsQuery, GenomicVariantComponentsQueryVariables>;
export const Variant_Markers_For_IdDocument = gql`
    query Variant_Markers_For_Id($id: ID) {
  GenomicVariantMarker(id: $id) {
    id
    name {
      ...es_fields
    }
    method {
      statement
    }
    variant {
      id
      __typename
      name {
        ...es_fields
      }
    }
  }
}
    ${Es_FieldsFragmentDoc}`;
export type Variant_Markers_For_IdComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Variant_Markers_For_IdQuery, Variant_Markers_For_IdQueryVariables>, 'query'>;

    export const Variant_Markers_For_IdComponent = (props: Variant_Markers_For_IdComponentProps) => (
      <ApolloReactComponents.Query<Variant_Markers_For_IdQuery, Variant_Markers_For_IdQueryVariables> query={Variant_Markers_For_IdDocument} {...props} />
    );
    
export type Variant_Markers_For_IdProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<Variant_Markers_For_IdQuery, Variant_Markers_For_IdQueryVariables>
    } & TChildProps;
export function withVariant_Markers_For_Id<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Variant_Markers_For_IdQuery,
  Variant_Markers_For_IdQueryVariables,
  Variant_Markers_For_IdProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, Variant_Markers_For_IdQuery, Variant_Markers_For_IdQueryVariables, Variant_Markers_For_IdProps<TChildProps, TDataName>>(Variant_Markers_For_IdDocument, {
      alias: 'variantMarkersForId',
      ...operationOptions
    });
};

/**
 * __useVariant_Markers_For_IdQuery__
 *
 * To run a query within a React component, call `useVariant_Markers_For_IdQuery` and pass it any options that fit your needs.
 * When your component renders, `useVariant_Markers_For_IdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVariant_Markers_For_IdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useVariant_Markers_For_IdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Variant_Markers_For_IdQuery, Variant_Markers_For_IdQueryVariables>) {
        return ApolloReactHooks.useQuery<Variant_Markers_For_IdQuery, Variant_Markers_For_IdQueryVariables>(Variant_Markers_For_IdDocument, baseOptions);
      }
export function useVariant_Markers_For_IdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Variant_Markers_For_IdQuery, Variant_Markers_For_IdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Variant_Markers_For_IdQuery, Variant_Markers_For_IdQueryVariables>(Variant_Markers_For_IdDocument, baseOptions);
        }
export type Variant_Markers_For_IdQueryHookResult = ReturnType<typeof useVariant_Markers_For_IdQuery>;
export type Variant_Markers_For_IdLazyQueryHookResult = ReturnType<typeof useVariant_Markers_For_IdLazyQuery>;
export type Variant_Markers_For_IdQueryResult = ApolloReactCommon.QueryResult<Variant_Markers_For_IdQuery, Variant_Markers_For_IdQueryVariables>;
export const VariantFusionDocument = gql`
    query VariantFusion($variant_id: ID) {
  VariantFusion(id: $variant_id) {
    id
    name {
      ...es_fields
    }
    gene {
      name
    }
    copyChange {
      id
      field
      cnvType
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    exon3Prime {
      id
      intValue
      field
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    exon5Prime {
      id
      intValue
      field
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    gene3Prime {
      ...eog_fields
    }
    gene5Prime {
      ...eog_fields
    }
    description {
      ...es_fields
    }
    jaxVariant {
      id
    }
    goVariant {
      id
    }
    clinVarVariant {
      id
    }
    hotSpotVariant {
      id
    }
  }
}
    ${Es_FieldsFragmentDoc}
${Eog_FieldsFragmentDoc}`;
export type VariantFusionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<VariantFusionQuery, VariantFusionQueryVariables>, 'query'>;

    export const VariantFusionComponent = (props: VariantFusionComponentProps) => (
      <ApolloReactComponents.Query<VariantFusionQuery, VariantFusionQueryVariables> query={VariantFusionDocument} {...props} />
    );
    
export type VariantFusionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<VariantFusionQuery, VariantFusionQueryVariables>
    } & TChildProps;
export function withVariantFusion<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantFusionQuery,
  VariantFusionQueryVariables,
  VariantFusionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, VariantFusionQuery, VariantFusionQueryVariables, VariantFusionProps<TChildProps, TDataName>>(VariantFusionDocument, {
      alias: 'variantFusion',
      ...operationOptions
    });
};

/**
 * __useVariantFusionQuery__
 *
 * To run a query within a React component, call `useVariantFusionQuery` and pass it any options that fit your needs.
 * When your component renders, `useVariantFusionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVariantFusionQuery({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *   },
 * });
 */
export function useVariantFusionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VariantFusionQuery, VariantFusionQueryVariables>) {
        return ApolloReactHooks.useQuery<VariantFusionQuery, VariantFusionQueryVariables>(VariantFusionDocument, baseOptions);
      }
export function useVariantFusionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VariantFusionQuery, VariantFusionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VariantFusionQuery, VariantFusionQueryVariables>(VariantFusionDocument, baseOptions);
        }
export type VariantFusionQueryHookResult = ReturnType<typeof useVariantFusionQuery>;
export type VariantFusionLazyQueryHookResult = ReturnType<typeof useVariantFusionLazyQuery>;
export type VariantFusionQueryResult = ApolloReactCommon.QueryResult<VariantFusionQuery, VariantFusionQueryVariables>;
export const VariantFusionAddCopyChangeDocument = gql`
    mutation VariantFusionAddCopyChange($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $copy_change: CNVType!, $id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantFusionCopyChange(id: $variant_id, copyChange: [$old_id])
  createEditableCopyChange(editDate: $date, field: $field, id: $id, cnvType: $copy_change)
  addEditableCopyChangeEditor(editor: [$user_id], id: $id)
  addEditableCopyChangeReferences(id: $id, references: $ref_aray)
  addVariantFusionCopyChange(id: $variant_id, copyChange: [$id])
}
    `;
export type VariantFusionAddCopyChangeMutationFn = ApolloReactCommon.MutationFunction<VariantFusionAddCopyChangeMutation, VariantFusionAddCopyChangeMutationVariables>;
export type VariantFusionAddCopyChangeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantFusionAddCopyChangeMutation, VariantFusionAddCopyChangeMutationVariables>, 'mutation'>;

    export const VariantFusionAddCopyChangeComponent = (props: VariantFusionAddCopyChangeComponentProps) => (
      <ApolloReactComponents.Mutation<VariantFusionAddCopyChangeMutation, VariantFusionAddCopyChangeMutationVariables> mutation={VariantFusionAddCopyChangeDocument} {...props} />
    );
    
export type VariantFusionAddCopyChangeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantFusionAddCopyChangeMutation, VariantFusionAddCopyChangeMutationVariables>
    } & TChildProps;
export function withVariantFusionAddCopyChange<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantFusionAddCopyChangeMutation,
  VariantFusionAddCopyChangeMutationVariables,
  VariantFusionAddCopyChangeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantFusionAddCopyChangeMutation, VariantFusionAddCopyChangeMutationVariables, VariantFusionAddCopyChangeProps<TChildProps, TDataName>>(VariantFusionAddCopyChangeDocument, {
      alias: 'variantFusionAddCopyChange',
      ...operationOptions
    });
};

/**
 * __useVariantFusionAddCopyChangeMutation__
 *
 * To run a mutation, you first call `useVariantFusionAddCopyChangeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantFusionAddCopyChangeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantFusionAddCopyChangeMutation, { data, loading, error }] = useVariantFusionAddCopyChangeMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_id: // value for 'old_id'
 *      date: // value for 'date'
 *      field: // value for 'field'
 *      copy_change: // value for 'copy_change'
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantFusionAddCopyChangeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantFusionAddCopyChangeMutation, VariantFusionAddCopyChangeMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantFusionAddCopyChangeMutation, VariantFusionAddCopyChangeMutationVariables>(VariantFusionAddCopyChangeDocument, baseOptions);
      }
export type VariantFusionAddCopyChangeMutationHookResult = ReturnType<typeof useVariantFusionAddCopyChangeMutation>;
export type VariantFusionAddCopyChangeMutationResult = ApolloReactCommon.MutationResult<VariantFusionAddCopyChangeMutation>;
export type VariantFusionAddCopyChangeMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantFusionAddCopyChangeMutation, VariantFusionAddCopyChangeMutationVariables>;
export const VariantFusionAddExon3PrimeDocument = gql`
    mutation VariantFusionAddExon3Prime($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $exon3: Int!, $id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantFusionExon3Prime(id: $variant_id, exon3Prime: [$old_id])
  createEditableInt(editDate: $date, field: $field, id: $id, intValue: $exon3)
  addEditableIntEditor(editor: [$user_id], id: $id)
  addEditableIntReferences(id: $id, references: $ref_aray)
  addVariantFusionExon3Prime(id: $variant_id, exon3Prime: [$id])
}
    `;
export type VariantFusionAddExon3PrimeMutationFn = ApolloReactCommon.MutationFunction<VariantFusionAddExon3PrimeMutation, VariantFusionAddExon3PrimeMutationVariables>;
export type VariantFusionAddExon3PrimeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantFusionAddExon3PrimeMutation, VariantFusionAddExon3PrimeMutationVariables>, 'mutation'>;

    export const VariantFusionAddExon3PrimeComponent = (props: VariantFusionAddExon3PrimeComponentProps) => (
      <ApolloReactComponents.Mutation<VariantFusionAddExon3PrimeMutation, VariantFusionAddExon3PrimeMutationVariables> mutation={VariantFusionAddExon3PrimeDocument} {...props} />
    );
    
export type VariantFusionAddExon3PrimeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantFusionAddExon3PrimeMutation, VariantFusionAddExon3PrimeMutationVariables>
    } & TChildProps;
export function withVariantFusionAddExon3Prime<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantFusionAddExon3PrimeMutation,
  VariantFusionAddExon3PrimeMutationVariables,
  VariantFusionAddExon3PrimeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantFusionAddExon3PrimeMutation, VariantFusionAddExon3PrimeMutationVariables, VariantFusionAddExon3PrimeProps<TChildProps, TDataName>>(VariantFusionAddExon3PrimeDocument, {
      alias: 'variantFusionAddExon3Prime',
      ...operationOptions
    });
};

/**
 * __useVariantFusionAddExon3PrimeMutation__
 *
 * To run a mutation, you first call `useVariantFusionAddExon3PrimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantFusionAddExon3PrimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantFusionAddExon3PrimeMutation, { data, loading, error }] = useVariantFusionAddExon3PrimeMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_id: // value for 'old_id'
 *      date: // value for 'date'
 *      field: // value for 'field'
 *      exon3: // value for 'exon3'
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantFusionAddExon3PrimeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantFusionAddExon3PrimeMutation, VariantFusionAddExon3PrimeMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantFusionAddExon3PrimeMutation, VariantFusionAddExon3PrimeMutationVariables>(VariantFusionAddExon3PrimeDocument, baseOptions);
      }
export type VariantFusionAddExon3PrimeMutationHookResult = ReturnType<typeof useVariantFusionAddExon3PrimeMutation>;
export type VariantFusionAddExon3PrimeMutationResult = ApolloReactCommon.MutationResult<VariantFusionAddExon3PrimeMutation>;
export type VariantFusionAddExon3PrimeMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantFusionAddExon3PrimeMutation, VariantFusionAddExon3PrimeMutationVariables>;
export const VariantFusionAddExon5PrimeDocument = gql`
    mutation VariantFusionAddExon5Prime($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $exon5: Int!, $id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantFusionExon5Prime(id: $variant_id, exon5Prime: [$old_id])
  createEditableInt(editDate: $date, field: $field, id: $id, intValue: $exon5)
  addEditableIntEditor(editor: [$user_id], id: $id)
  addEditableIntReferences(id: $id, references: $ref_aray)
  addVariantFusionExon5Prime(id: $variant_id, exon5Prime: [$id])
}
    `;
export type VariantFusionAddExon5PrimeMutationFn = ApolloReactCommon.MutationFunction<VariantFusionAddExon5PrimeMutation, VariantFusionAddExon5PrimeMutationVariables>;
export type VariantFusionAddExon5PrimeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantFusionAddExon5PrimeMutation, VariantFusionAddExon5PrimeMutationVariables>, 'mutation'>;

    export const VariantFusionAddExon5PrimeComponent = (props: VariantFusionAddExon5PrimeComponentProps) => (
      <ApolloReactComponents.Mutation<VariantFusionAddExon5PrimeMutation, VariantFusionAddExon5PrimeMutationVariables> mutation={VariantFusionAddExon5PrimeDocument} {...props} />
    );
    
export type VariantFusionAddExon5PrimeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantFusionAddExon5PrimeMutation, VariantFusionAddExon5PrimeMutationVariables>
    } & TChildProps;
export function withVariantFusionAddExon5Prime<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantFusionAddExon5PrimeMutation,
  VariantFusionAddExon5PrimeMutationVariables,
  VariantFusionAddExon5PrimeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantFusionAddExon5PrimeMutation, VariantFusionAddExon5PrimeMutationVariables, VariantFusionAddExon5PrimeProps<TChildProps, TDataName>>(VariantFusionAddExon5PrimeDocument, {
      alias: 'variantFusionAddExon5Prime',
      ...operationOptions
    });
};

/**
 * __useVariantFusionAddExon5PrimeMutation__
 *
 * To run a mutation, you first call `useVariantFusionAddExon5PrimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantFusionAddExon5PrimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantFusionAddExon5PrimeMutation, { data, loading, error }] = useVariantFusionAddExon5PrimeMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_id: // value for 'old_id'
 *      date: // value for 'date'
 *      field: // value for 'field'
 *      exon5: // value for 'exon5'
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantFusionAddExon5PrimeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantFusionAddExon5PrimeMutation, VariantFusionAddExon5PrimeMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantFusionAddExon5PrimeMutation, VariantFusionAddExon5PrimeMutationVariables>(VariantFusionAddExon5PrimeDocument, baseOptions);
      }
export type VariantFusionAddExon5PrimeMutationHookResult = ReturnType<typeof useVariantFusionAddExon5PrimeMutation>;
export type VariantFusionAddExon5PrimeMutationResult = ApolloReactCommon.MutationResult<VariantFusionAddExon5PrimeMutation>;
export type VariantFusionAddExon5PrimeMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantFusionAddExon5PrimeMutation, VariantFusionAddExon5PrimeMutationVariables>;
export const VariantFusionAddGene3PrimeDocument = gql`
    mutation VariantFusionAddGene3Prime($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $gene: ID!, $id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantFusionGene3Prime(id: $variant_id, gene3Prime: [$old_id])
  createEditableOmniGeneReference(editDate: $date, field: $field, id: $id)
  addEditableOmniGeneReferenceGene(id: $id, gene: [$gene])
  addEditableOmniGeneReferenceEditor(editor: [$user_id], id: $id)
  addEditableOmniGeneReferenceReferences(id: $id, references: $ref_aray)
  addVariantFusionGene3Prime(id: $variant_id, gene3Prime: [$id])
}
    `;
export type VariantFusionAddGene3PrimeMutationFn = ApolloReactCommon.MutationFunction<VariantFusionAddGene3PrimeMutation, VariantFusionAddGene3PrimeMutationVariables>;
export type VariantFusionAddGene3PrimeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantFusionAddGene3PrimeMutation, VariantFusionAddGene3PrimeMutationVariables>, 'mutation'>;

    export const VariantFusionAddGene3PrimeComponent = (props: VariantFusionAddGene3PrimeComponentProps) => (
      <ApolloReactComponents.Mutation<VariantFusionAddGene3PrimeMutation, VariantFusionAddGene3PrimeMutationVariables> mutation={VariantFusionAddGene3PrimeDocument} {...props} />
    );
    
export type VariantFusionAddGene3PrimeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantFusionAddGene3PrimeMutation, VariantFusionAddGene3PrimeMutationVariables>
    } & TChildProps;
export function withVariantFusionAddGene3Prime<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantFusionAddGene3PrimeMutation,
  VariantFusionAddGene3PrimeMutationVariables,
  VariantFusionAddGene3PrimeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantFusionAddGene3PrimeMutation, VariantFusionAddGene3PrimeMutationVariables, VariantFusionAddGene3PrimeProps<TChildProps, TDataName>>(VariantFusionAddGene3PrimeDocument, {
      alias: 'variantFusionAddGene3Prime',
      ...operationOptions
    });
};

/**
 * __useVariantFusionAddGene3PrimeMutation__
 *
 * To run a mutation, you first call `useVariantFusionAddGene3PrimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantFusionAddGene3PrimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantFusionAddGene3PrimeMutation, { data, loading, error }] = useVariantFusionAddGene3PrimeMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_id: // value for 'old_id'
 *      date: // value for 'date'
 *      field: // value for 'field'
 *      gene: // value for 'gene'
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantFusionAddGene3PrimeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantFusionAddGene3PrimeMutation, VariantFusionAddGene3PrimeMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantFusionAddGene3PrimeMutation, VariantFusionAddGene3PrimeMutationVariables>(VariantFusionAddGene3PrimeDocument, baseOptions);
      }
export type VariantFusionAddGene3PrimeMutationHookResult = ReturnType<typeof useVariantFusionAddGene3PrimeMutation>;
export type VariantFusionAddGene3PrimeMutationResult = ApolloReactCommon.MutationResult<VariantFusionAddGene3PrimeMutation>;
export type VariantFusionAddGene3PrimeMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantFusionAddGene3PrimeMutation, VariantFusionAddGene3PrimeMutationVariables>;
export const VariantFusionAddGene5PrimeDocument = gql`
    mutation VariantFusionAddGene5Prime($variant_id: ID!, $old_id: ID!, $date: String!, $field: String!, $gene: ID!, $id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantFusionGene5Prime(id: $variant_id, gene5Prime: [$old_id])
  createEditableOmniGeneReference(editDate: $date, field: $field, id: $id)
  addEditableOmniGeneReferenceGene(id: $id, gene: [$gene])
  addEditableOmniGeneReferenceEditor(editor: [$user_id], id: $id)
  addEditableOmniGeneReferenceReferences(id: $id, references: $ref_aray)
  addVariantFusionGene5Prime(id: $variant_id, gene5Prime: [$id])
}
    `;
export type VariantFusionAddGene5PrimeMutationFn = ApolloReactCommon.MutationFunction<VariantFusionAddGene5PrimeMutation, VariantFusionAddGene5PrimeMutationVariables>;
export type VariantFusionAddGene5PrimeComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantFusionAddGene5PrimeMutation, VariantFusionAddGene5PrimeMutationVariables>, 'mutation'>;

    export const VariantFusionAddGene5PrimeComponent = (props: VariantFusionAddGene5PrimeComponentProps) => (
      <ApolloReactComponents.Mutation<VariantFusionAddGene5PrimeMutation, VariantFusionAddGene5PrimeMutationVariables> mutation={VariantFusionAddGene5PrimeDocument} {...props} />
    );
    
export type VariantFusionAddGene5PrimeProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantFusionAddGene5PrimeMutation, VariantFusionAddGene5PrimeMutationVariables>
    } & TChildProps;
export function withVariantFusionAddGene5Prime<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantFusionAddGene5PrimeMutation,
  VariantFusionAddGene5PrimeMutationVariables,
  VariantFusionAddGene5PrimeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantFusionAddGene5PrimeMutation, VariantFusionAddGene5PrimeMutationVariables, VariantFusionAddGene5PrimeProps<TChildProps, TDataName>>(VariantFusionAddGene5PrimeDocument, {
      alias: 'variantFusionAddGene5Prime',
      ...operationOptions
    });
};

/**
 * __useVariantFusionAddGene5PrimeMutation__
 *
 * To run a mutation, you first call `useVariantFusionAddGene5PrimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantFusionAddGene5PrimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantFusionAddGene5PrimeMutation, { data, loading, error }] = useVariantFusionAddGene5PrimeMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_id: // value for 'old_id'
 *      date: // value for 'date'
 *      field: // value for 'field'
 *      gene: // value for 'gene'
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantFusionAddGene5PrimeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantFusionAddGene5PrimeMutation, VariantFusionAddGene5PrimeMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantFusionAddGene5PrimeMutation, VariantFusionAddGene5PrimeMutationVariables>(VariantFusionAddGene5PrimeDocument, baseOptions);
      }
export type VariantFusionAddGene5PrimeMutationHookResult = ReturnType<typeof useVariantFusionAddGene5PrimeMutation>;
export type VariantFusionAddGene5PrimeMutationResult = ApolloReactCommon.MutationResult<VariantFusionAddGene5PrimeMutation>;
export type VariantFusionAddGene5PrimeMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantFusionAddGene5PrimeMutation, VariantFusionAddGene5PrimeMutationVariables>;
export const VariantFusionAddDescriptionDocument = gql`
    mutation VariantFusionAddDescription($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantFusionDescription(id: $variant_id, description: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addVariantFusionDescription(id: $variant_id, description: [$es_id])
}
    `;
export type VariantFusionAddDescriptionMutationFn = ApolloReactCommon.MutationFunction<VariantFusionAddDescriptionMutation, VariantFusionAddDescriptionMutationVariables>;
export type VariantFusionAddDescriptionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantFusionAddDescriptionMutation, VariantFusionAddDescriptionMutationVariables>, 'mutation'>;

    export const VariantFusionAddDescriptionComponent = (props: VariantFusionAddDescriptionComponentProps) => (
      <ApolloReactComponents.Mutation<VariantFusionAddDescriptionMutation, VariantFusionAddDescriptionMutationVariables> mutation={VariantFusionAddDescriptionDocument} {...props} />
    );
    
export type VariantFusionAddDescriptionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantFusionAddDescriptionMutation, VariantFusionAddDescriptionMutationVariables>
    } & TChildProps;
export function withVariantFusionAddDescription<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantFusionAddDescriptionMutation,
  VariantFusionAddDescriptionMutationVariables,
  VariantFusionAddDescriptionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantFusionAddDescriptionMutation, VariantFusionAddDescriptionMutationVariables, VariantFusionAddDescriptionProps<TChildProps, TDataName>>(VariantFusionAddDescriptionDocument, {
      alias: 'variantFusionAddDescription',
      ...operationOptions
    });
};

/**
 * __useVariantFusionAddDescriptionMutation__
 *
 * To run a mutation, you first call `useVariantFusionAddDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantFusionAddDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantFusionAddDescriptionMutation, { data, loading, error }] = useVariantFusionAddDescriptionMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
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
export function useVariantFusionAddDescriptionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantFusionAddDescriptionMutation, VariantFusionAddDescriptionMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantFusionAddDescriptionMutation, VariantFusionAddDescriptionMutationVariables>(VariantFusionAddDescriptionDocument, baseOptions);
      }
export type VariantFusionAddDescriptionMutationHookResult = ReturnType<typeof useVariantFusionAddDescriptionMutation>;
export type VariantFusionAddDescriptionMutationResult = ApolloReactCommon.MutationResult<VariantFusionAddDescriptionMutation>;
export type VariantFusionAddDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantFusionAddDescriptionMutation, VariantFusionAddDescriptionMutationVariables>;
export const VariantRegionDocument = gql`
    query VariantRegion($variant_id: ID) {
  VariantRegion(id: $variant_id) {
    id
    name {
      ...es_fields
    }
    gene {
      id
      name
    }
    description {
      ...es_fields
    }
    nonCanonicalTranscript {
      ...es_fields
    }
    variantType
    indelType
    proteinEffect {
      id
      proteinEffect
      field
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    regionType
    regionValue {
      id
      intValue
      field
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    isFrameshift {
      ...eb
    }
    isTruncating {
      ...eb
    }
    isDeleterious {
      ...eb
    }
    jaxVariant {
      id
    }
    goVariant {
      id
    }
    clinVarVariant {
      id
    }
    hotSpotVariant {
      id
    }
  }
}
    ${Es_FieldsFragmentDoc}
${EbFragmentDoc}`;
export type VariantRegionComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<VariantRegionQuery, VariantRegionQueryVariables>, 'query'>;

    export const VariantRegionComponent = (props: VariantRegionComponentProps) => (
      <ApolloReactComponents.Query<VariantRegionQuery, VariantRegionQueryVariables> query={VariantRegionDocument} {...props} />
    );
    
export type VariantRegionProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<VariantRegionQuery, VariantRegionQueryVariables>
    } & TChildProps;
export function withVariantRegion<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantRegionQuery,
  VariantRegionQueryVariables,
  VariantRegionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, VariantRegionQuery, VariantRegionQueryVariables, VariantRegionProps<TChildProps, TDataName>>(VariantRegionDocument, {
      alias: 'variantRegion',
      ...operationOptions
    });
};

/**
 * __useVariantRegionQuery__
 *
 * To run a query within a React component, call `useVariantRegionQuery` and pass it any options that fit your needs.
 * When your component renders, `useVariantRegionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVariantRegionQuery({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *   },
 * });
 */
export function useVariantRegionQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VariantRegionQuery, VariantRegionQueryVariables>) {
        return ApolloReactHooks.useQuery<VariantRegionQuery, VariantRegionQueryVariables>(VariantRegionDocument, baseOptions);
      }
export function useVariantRegionLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VariantRegionQuery, VariantRegionQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VariantRegionQuery, VariantRegionQueryVariables>(VariantRegionDocument, baseOptions);
        }
export type VariantRegionQueryHookResult = ReturnType<typeof useVariantRegionQuery>;
export type VariantRegionLazyQueryHookResult = ReturnType<typeof useVariantRegionLazyQuery>;
export type VariantRegionQueryResult = ApolloReactCommon.QueryResult<VariantRegionQuery, VariantRegionQueryVariables>;
export const VariantRegionAddDescriptionDocument = gql`
    mutation VariantRegionAddDescription($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantRegionDescription(id: $variant_id, description: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addVariantRegionDescription(id: $variant_id, description: [$es_id])
}
    `;
export type VariantRegionAddDescriptionMutationFn = ApolloReactCommon.MutationFunction<VariantRegionAddDescriptionMutation, VariantRegionAddDescriptionMutationVariables>;
export type VariantRegionAddDescriptionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantRegionAddDescriptionMutation, VariantRegionAddDescriptionMutationVariables>, 'mutation'>;

    export const VariantRegionAddDescriptionComponent = (props: VariantRegionAddDescriptionComponentProps) => (
      <ApolloReactComponents.Mutation<VariantRegionAddDescriptionMutation, VariantRegionAddDescriptionMutationVariables> mutation={VariantRegionAddDescriptionDocument} {...props} />
    );
    
export type VariantRegionAddDescriptionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantRegionAddDescriptionMutation, VariantRegionAddDescriptionMutationVariables>
    } & TChildProps;
export function withVariantRegionAddDescription<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantRegionAddDescriptionMutation,
  VariantRegionAddDescriptionMutationVariables,
  VariantRegionAddDescriptionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantRegionAddDescriptionMutation, VariantRegionAddDescriptionMutationVariables, VariantRegionAddDescriptionProps<TChildProps, TDataName>>(VariantRegionAddDescriptionDocument, {
      alias: 'variantRegionAddDescription',
      ...operationOptions
    });
};

/**
 * __useVariantRegionAddDescriptionMutation__
 *
 * To run a mutation, you first call `useVariantRegionAddDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantRegionAddDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantRegionAddDescriptionMutation, { data, loading, error }] = useVariantRegionAddDescriptionMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
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
export function useVariantRegionAddDescriptionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantRegionAddDescriptionMutation, VariantRegionAddDescriptionMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantRegionAddDescriptionMutation, VariantRegionAddDescriptionMutationVariables>(VariantRegionAddDescriptionDocument, baseOptions);
      }
export type VariantRegionAddDescriptionMutationHookResult = ReturnType<typeof useVariantRegionAddDescriptionMutation>;
export type VariantRegionAddDescriptionMutationResult = ApolloReactCommon.MutationResult<VariantRegionAddDescriptionMutation>;
export type VariantRegionAddDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantRegionAddDescriptionMutation, VariantRegionAddDescriptionMutationVariables>;
export const VariantRegionAddProteinEffectDocument = gql`
    mutation VariantRegionAddProteinEffect($variant_id: ID!, $old_epe_id: ID!, $date: String!, $epe_field: String!, $epe_vpe: VariantProteinEffect!, $epe_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantRegionProteinEffect(id: $variant_id, proteinEffect: [$old_epe_id])
  createEditableProteinEffect(editDate: $date, field: $epe_field, id: $epe_id, proteinEffect: $epe_vpe)
  addEditableProteinEffectEditor(editor: [$user_id], id: $epe_id)
  addEditableProteinEffectReferences(id: $epe_id, references: $ref_aray)
  addVariantRegionProteinEffect(id: $variant_id, proteinEffect: [$epe_id])
}
    `;
export type VariantRegionAddProteinEffectMutationFn = ApolloReactCommon.MutationFunction<VariantRegionAddProteinEffectMutation, VariantRegionAddProteinEffectMutationVariables>;
export type VariantRegionAddProteinEffectComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantRegionAddProteinEffectMutation, VariantRegionAddProteinEffectMutationVariables>, 'mutation'>;

    export const VariantRegionAddProteinEffectComponent = (props: VariantRegionAddProteinEffectComponentProps) => (
      <ApolloReactComponents.Mutation<VariantRegionAddProteinEffectMutation, VariantRegionAddProteinEffectMutationVariables> mutation={VariantRegionAddProteinEffectDocument} {...props} />
    );
    
export type VariantRegionAddProteinEffectProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantRegionAddProteinEffectMutation, VariantRegionAddProteinEffectMutationVariables>
    } & TChildProps;
export function withVariantRegionAddProteinEffect<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantRegionAddProteinEffectMutation,
  VariantRegionAddProteinEffectMutationVariables,
  VariantRegionAddProteinEffectProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantRegionAddProteinEffectMutation, VariantRegionAddProteinEffectMutationVariables, VariantRegionAddProteinEffectProps<TChildProps, TDataName>>(VariantRegionAddProteinEffectDocument, {
      alias: 'variantRegionAddProteinEffect',
      ...operationOptions
    });
};

/**
 * __useVariantRegionAddProteinEffectMutation__
 *
 * To run a mutation, you first call `useVariantRegionAddProteinEffectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantRegionAddProteinEffectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantRegionAddProteinEffectMutation, { data, loading, error }] = useVariantRegionAddProteinEffectMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_epe_id: // value for 'old_epe_id'
 *      date: // value for 'date'
 *      epe_field: // value for 'epe_field'
 *      epe_vpe: // value for 'epe_vpe'
 *      epe_id: // value for 'epe_id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantRegionAddProteinEffectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantRegionAddProteinEffectMutation, VariantRegionAddProteinEffectMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantRegionAddProteinEffectMutation, VariantRegionAddProteinEffectMutationVariables>(VariantRegionAddProteinEffectDocument, baseOptions);
      }
export type VariantRegionAddProteinEffectMutationHookResult = ReturnType<typeof useVariantRegionAddProteinEffectMutation>;
export type VariantRegionAddProteinEffectMutationResult = ApolloReactCommon.MutationResult<VariantRegionAddProteinEffectMutation>;
export type VariantRegionAddProteinEffectMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantRegionAddProteinEffectMutation, VariantRegionAddProteinEffectMutationVariables>;
export const VariantRegionAddIsFrameshiftDocument = gql`
    mutation VariantRegionAddIsFrameshift($variant_id: ID!, $old_eb_id: ID!, $date: String!, $eb_field: String!, $eb_vpe: ExtendedBoolean!, $eb_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantRegionIsFrameshift(id: $variant_id, isFrameshift: [$old_eb_id])
  createEditableBoolean(editDate: $date, field: $eb_field, id: $eb_id, booleanValue: $eb_vpe)
  addEditableBooleanEditor(editor: [$user_id], id: $eb_id)
  addEditableBooleanReferences(id: $eb_id, references: $ref_aray)
  addVariantRegionIsFrameshift(id: $variant_id, isFrameshift: [$eb_id])
}
    `;
export type VariantRegionAddIsFrameshiftMutationFn = ApolloReactCommon.MutationFunction<VariantRegionAddIsFrameshiftMutation, VariantRegionAddIsFrameshiftMutationVariables>;
export type VariantRegionAddIsFrameshiftComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantRegionAddIsFrameshiftMutation, VariantRegionAddIsFrameshiftMutationVariables>, 'mutation'>;

    export const VariantRegionAddIsFrameshiftComponent = (props: VariantRegionAddIsFrameshiftComponentProps) => (
      <ApolloReactComponents.Mutation<VariantRegionAddIsFrameshiftMutation, VariantRegionAddIsFrameshiftMutationVariables> mutation={VariantRegionAddIsFrameshiftDocument} {...props} />
    );
    
export type VariantRegionAddIsFrameshiftProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantRegionAddIsFrameshiftMutation, VariantRegionAddIsFrameshiftMutationVariables>
    } & TChildProps;
export function withVariantRegionAddIsFrameshift<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantRegionAddIsFrameshiftMutation,
  VariantRegionAddIsFrameshiftMutationVariables,
  VariantRegionAddIsFrameshiftProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantRegionAddIsFrameshiftMutation, VariantRegionAddIsFrameshiftMutationVariables, VariantRegionAddIsFrameshiftProps<TChildProps, TDataName>>(VariantRegionAddIsFrameshiftDocument, {
      alias: 'variantRegionAddIsFrameshift',
      ...operationOptions
    });
};

/**
 * __useVariantRegionAddIsFrameshiftMutation__
 *
 * To run a mutation, you first call `useVariantRegionAddIsFrameshiftMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantRegionAddIsFrameshiftMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantRegionAddIsFrameshiftMutation, { data, loading, error }] = useVariantRegionAddIsFrameshiftMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_eb_id: // value for 'old_eb_id'
 *      date: // value for 'date'
 *      eb_field: // value for 'eb_field'
 *      eb_vpe: // value for 'eb_vpe'
 *      eb_id: // value for 'eb_id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantRegionAddIsFrameshiftMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantRegionAddIsFrameshiftMutation, VariantRegionAddIsFrameshiftMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantRegionAddIsFrameshiftMutation, VariantRegionAddIsFrameshiftMutationVariables>(VariantRegionAddIsFrameshiftDocument, baseOptions);
      }
export type VariantRegionAddIsFrameshiftMutationHookResult = ReturnType<typeof useVariantRegionAddIsFrameshiftMutation>;
export type VariantRegionAddIsFrameshiftMutationResult = ApolloReactCommon.MutationResult<VariantRegionAddIsFrameshiftMutation>;
export type VariantRegionAddIsFrameshiftMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantRegionAddIsFrameshiftMutation, VariantRegionAddIsFrameshiftMutationVariables>;
export const VariantRegionAddIsDeleteriousDocument = gql`
    mutation VariantRegionAddIsDeleterious($variant_id: ID!, $old_eb_id: ID!, $date: String!, $eb_field: String!, $eb_vpe: ExtendedBoolean!, $eb_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantRegionIsDeleterious(id: $variant_id, isDeleterious: [$old_eb_id])
  createEditableBoolean(editDate: $date, field: $eb_field, id: $eb_id, booleanValue: $eb_vpe)
  addEditableBooleanEditor(editor: [$user_id], id: $eb_id)
  addEditableBooleanReferences(id: $eb_id, references: $ref_aray)
  addVariantRegionIsDeleterious(id: $variant_id, isDeleterious: [$eb_id])
}
    `;
export type VariantRegionAddIsDeleteriousMutationFn = ApolloReactCommon.MutationFunction<VariantRegionAddIsDeleteriousMutation, VariantRegionAddIsDeleteriousMutationVariables>;
export type VariantRegionAddIsDeleteriousComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantRegionAddIsDeleteriousMutation, VariantRegionAddIsDeleteriousMutationVariables>, 'mutation'>;

    export const VariantRegionAddIsDeleteriousComponent = (props: VariantRegionAddIsDeleteriousComponentProps) => (
      <ApolloReactComponents.Mutation<VariantRegionAddIsDeleteriousMutation, VariantRegionAddIsDeleteriousMutationVariables> mutation={VariantRegionAddIsDeleteriousDocument} {...props} />
    );
    
export type VariantRegionAddIsDeleteriousProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantRegionAddIsDeleteriousMutation, VariantRegionAddIsDeleteriousMutationVariables>
    } & TChildProps;
export function withVariantRegionAddIsDeleterious<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantRegionAddIsDeleteriousMutation,
  VariantRegionAddIsDeleteriousMutationVariables,
  VariantRegionAddIsDeleteriousProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantRegionAddIsDeleteriousMutation, VariantRegionAddIsDeleteriousMutationVariables, VariantRegionAddIsDeleteriousProps<TChildProps, TDataName>>(VariantRegionAddIsDeleteriousDocument, {
      alias: 'variantRegionAddIsDeleterious',
      ...operationOptions
    });
};

/**
 * __useVariantRegionAddIsDeleteriousMutation__
 *
 * To run a mutation, you first call `useVariantRegionAddIsDeleteriousMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantRegionAddIsDeleteriousMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantRegionAddIsDeleteriousMutation, { data, loading, error }] = useVariantRegionAddIsDeleteriousMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_eb_id: // value for 'old_eb_id'
 *      date: // value for 'date'
 *      eb_field: // value for 'eb_field'
 *      eb_vpe: // value for 'eb_vpe'
 *      eb_id: // value for 'eb_id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantRegionAddIsDeleteriousMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantRegionAddIsDeleteriousMutation, VariantRegionAddIsDeleteriousMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantRegionAddIsDeleteriousMutation, VariantRegionAddIsDeleteriousMutationVariables>(VariantRegionAddIsDeleteriousDocument, baseOptions);
      }
export type VariantRegionAddIsDeleteriousMutationHookResult = ReturnType<typeof useVariantRegionAddIsDeleteriousMutation>;
export type VariantRegionAddIsDeleteriousMutationResult = ApolloReactCommon.MutationResult<VariantRegionAddIsDeleteriousMutation>;
export type VariantRegionAddIsDeleteriousMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantRegionAddIsDeleteriousMutation, VariantRegionAddIsDeleteriousMutationVariables>;
export const VariantRegionAddIsTruncatingDocument = gql`
    mutation VariantRegionAddIsTruncating($variant_id: ID!, $old_eb_id: ID!, $date: String!, $eb_field: String!, $eb_vpe: ExtendedBoolean!, $eb_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantRegionIsTruncating(id: $variant_id, isTruncating: [$old_eb_id])
  createEditableBoolean(editDate: $date, field: $eb_field, id: $eb_id, booleanValue: $eb_vpe)
  addEditableBooleanEditor(editor: [$user_id], id: $eb_id)
  addEditableBooleanReferences(id: $eb_id, references: $ref_aray)
  addVariantRegionIsTruncating(id: $variant_id, isTruncating: [$eb_id])
}
    `;
export type VariantRegionAddIsTruncatingMutationFn = ApolloReactCommon.MutationFunction<VariantRegionAddIsTruncatingMutation, VariantRegionAddIsTruncatingMutationVariables>;
export type VariantRegionAddIsTruncatingComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantRegionAddIsTruncatingMutation, VariantRegionAddIsTruncatingMutationVariables>, 'mutation'>;

    export const VariantRegionAddIsTruncatingComponent = (props: VariantRegionAddIsTruncatingComponentProps) => (
      <ApolloReactComponents.Mutation<VariantRegionAddIsTruncatingMutation, VariantRegionAddIsTruncatingMutationVariables> mutation={VariantRegionAddIsTruncatingDocument} {...props} />
    );
    
export type VariantRegionAddIsTruncatingProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantRegionAddIsTruncatingMutation, VariantRegionAddIsTruncatingMutationVariables>
    } & TChildProps;
export function withVariantRegionAddIsTruncating<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantRegionAddIsTruncatingMutation,
  VariantRegionAddIsTruncatingMutationVariables,
  VariantRegionAddIsTruncatingProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantRegionAddIsTruncatingMutation, VariantRegionAddIsTruncatingMutationVariables, VariantRegionAddIsTruncatingProps<TChildProps, TDataName>>(VariantRegionAddIsTruncatingDocument, {
      alias: 'variantRegionAddIsTruncating',
      ...operationOptions
    });
};

/**
 * __useVariantRegionAddIsTruncatingMutation__
 *
 * To run a mutation, you first call `useVariantRegionAddIsTruncatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantRegionAddIsTruncatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantRegionAddIsTruncatingMutation, { data, loading, error }] = useVariantRegionAddIsTruncatingMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_eb_id: // value for 'old_eb_id'
 *      date: // value for 'date'
 *      eb_field: // value for 'eb_field'
 *      eb_vpe: // value for 'eb_vpe'
 *      eb_id: // value for 'eb_id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantRegionAddIsTruncatingMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantRegionAddIsTruncatingMutation, VariantRegionAddIsTruncatingMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantRegionAddIsTruncatingMutation, VariantRegionAddIsTruncatingMutationVariables>(VariantRegionAddIsTruncatingDocument, baseOptions);
      }
export type VariantRegionAddIsTruncatingMutationHookResult = ReturnType<typeof useVariantRegionAddIsTruncatingMutation>;
export type VariantRegionAddIsTruncatingMutationResult = ApolloReactCommon.MutationResult<VariantRegionAddIsTruncatingMutation>;
export type VariantRegionAddIsTruncatingMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantRegionAddIsTruncatingMutation, VariantRegionAddIsTruncatingMutationVariables>;
export const VariantSnvIndelDocument = gql`
    query VariantSNVIndel($variant_id: ID) {
  VariantSNVIndel(id: $variant_id) {
    id
    name {
      ...es_fields
    }
    cDot {
      ...es_fields
    }
    pDot {
      ...es_fields
    }
    gDot {
      ...es_fields
    }
    gene {
      id
      name
    }
    description {
      ...es_fields
    }
    variantType
    indelType
    proteinEffect {
      id
      proteinEffect
      field
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    exon {
      ...es_fields
    }
    jaxVariant {
      id
    }
    goVariant {
      id
    }
    clinVarVariant {
      id
    }
    hotSpotVariant {
      id
    }
  }
}
    ${Es_FieldsFragmentDoc}`;
export type VariantSnvIndelComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<VariantSnvIndelQuery, VariantSnvIndelQueryVariables>, 'query'>;

    export const VariantSnvIndelComponent = (props: VariantSnvIndelComponentProps) => (
      <ApolloReactComponents.Query<VariantSnvIndelQuery, VariantSnvIndelQueryVariables> query={VariantSnvIndelDocument} {...props} />
    );
    
export type VariantSnvIndelProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<VariantSnvIndelQuery, VariantSnvIndelQueryVariables>
    } & TChildProps;
export function withVariantSnvIndel<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantSnvIndelQuery,
  VariantSnvIndelQueryVariables,
  VariantSnvIndelProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, VariantSnvIndelQuery, VariantSnvIndelQueryVariables, VariantSnvIndelProps<TChildProps, TDataName>>(VariantSnvIndelDocument, {
      alias: 'variantSnvIndel',
      ...operationOptions
    });
};

/**
 * __useVariantSnvIndelQuery__
 *
 * To run a query within a React component, call `useVariantSnvIndelQuery` and pass it any options that fit your needs.
 * When your component renders, `useVariantSnvIndelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVariantSnvIndelQuery({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *   },
 * });
 */
export function useVariantSnvIndelQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<VariantSnvIndelQuery, VariantSnvIndelQueryVariables>) {
        return ApolloReactHooks.useQuery<VariantSnvIndelQuery, VariantSnvIndelQueryVariables>(VariantSnvIndelDocument, baseOptions);
      }
export function useVariantSnvIndelLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<VariantSnvIndelQuery, VariantSnvIndelQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<VariantSnvIndelQuery, VariantSnvIndelQueryVariables>(VariantSnvIndelDocument, baseOptions);
        }
export type VariantSnvIndelQueryHookResult = ReturnType<typeof useVariantSnvIndelQuery>;
export type VariantSnvIndelLazyQueryHookResult = ReturnType<typeof useVariantSnvIndelLazyQuery>;
export type VariantSnvIndelQueryResult = ApolloReactCommon.QueryResult<VariantSnvIndelQuery, VariantSnvIndelQueryVariables>;
export const VariantSnvIndelAddDescriptionDocument = gql`
    mutation VariantSNVIndelAddDescription($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantSNVIndelDescription(id: $variant_id, description: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addVariantSNVIndelDescription(id: $variant_id, description: [$es_id])
}
    `;
export type VariantSnvIndelAddDescriptionMutationFn = ApolloReactCommon.MutationFunction<VariantSnvIndelAddDescriptionMutation, VariantSnvIndelAddDescriptionMutationVariables>;
export type VariantSnvIndelAddDescriptionComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantSnvIndelAddDescriptionMutation, VariantSnvIndelAddDescriptionMutationVariables>, 'mutation'>;

    export const VariantSnvIndelAddDescriptionComponent = (props: VariantSnvIndelAddDescriptionComponentProps) => (
      <ApolloReactComponents.Mutation<VariantSnvIndelAddDescriptionMutation, VariantSnvIndelAddDescriptionMutationVariables> mutation={VariantSnvIndelAddDescriptionDocument} {...props} />
    );
    
export type VariantSnvIndelAddDescriptionProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantSnvIndelAddDescriptionMutation, VariantSnvIndelAddDescriptionMutationVariables>
    } & TChildProps;
export function withVariantSnvIndelAddDescription<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantSnvIndelAddDescriptionMutation,
  VariantSnvIndelAddDescriptionMutationVariables,
  VariantSnvIndelAddDescriptionProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantSnvIndelAddDescriptionMutation, VariantSnvIndelAddDescriptionMutationVariables, VariantSnvIndelAddDescriptionProps<TChildProps, TDataName>>(VariantSnvIndelAddDescriptionDocument, {
      alias: 'variantSnvIndelAddDescription',
      ...operationOptions
    });
};

/**
 * __useVariantSnvIndelAddDescriptionMutation__
 *
 * To run a mutation, you first call `useVariantSnvIndelAddDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantSnvIndelAddDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantSnvIndelAddDescriptionMutation, { data, loading, error }] = useVariantSnvIndelAddDescriptionMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
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
export function useVariantSnvIndelAddDescriptionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantSnvIndelAddDescriptionMutation, VariantSnvIndelAddDescriptionMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantSnvIndelAddDescriptionMutation, VariantSnvIndelAddDescriptionMutationVariables>(VariantSnvIndelAddDescriptionDocument, baseOptions);
      }
export type VariantSnvIndelAddDescriptionMutationHookResult = ReturnType<typeof useVariantSnvIndelAddDescriptionMutation>;
export type VariantSnvIndelAddDescriptionMutationResult = ApolloReactCommon.MutationResult<VariantSnvIndelAddDescriptionMutation>;
export type VariantSnvIndelAddDescriptionMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantSnvIndelAddDescriptionMutation, VariantSnvIndelAddDescriptionMutationVariables>;
export const VariantSnvIndelAddProteinEffectDocument = gql`
    mutation VariantSNVIndelAddProteinEffect($variant_id: ID!, $old_epe_id: ID!, $date: String!, $epe_field: String!, $epe_vpe: VariantProteinEffect!, $epe_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantSNVIndelProteinEffect(id: $variant_id, proteinEffect: [$old_epe_id])
  createEditableProteinEffect(editDate: $date, field: $epe_field, id: $epe_id, proteinEffect: $epe_vpe)
  addEditableProteinEffectEditor(editor: [$user_id], id: $epe_id)
  addEditableProteinEffectReferences(id: $epe_id, references: $ref_aray)
  addVariantSNVIndelProteinEffect(id: $variant_id, proteinEffect: [$epe_id])
}
    `;
export type VariantSnvIndelAddProteinEffectMutationFn = ApolloReactCommon.MutationFunction<VariantSnvIndelAddProteinEffectMutation, VariantSnvIndelAddProteinEffectMutationVariables>;
export type VariantSnvIndelAddProteinEffectComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantSnvIndelAddProteinEffectMutation, VariantSnvIndelAddProteinEffectMutationVariables>, 'mutation'>;

    export const VariantSnvIndelAddProteinEffectComponent = (props: VariantSnvIndelAddProteinEffectComponentProps) => (
      <ApolloReactComponents.Mutation<VariantSnvIndelAddProteinEffectMutation, VariantSnvIndelAddProteinEffectMutationVariables> mutation={VariantSnvIndelAddProteinEffectDocument} {...props} />
    );
    
export type VariantSnvIndelAddProteinEffectProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantSnvIndelAddProteinEffectMutation, VariantSnvIndelAddProteinEffectMutationVariables>
    } & TChildProps;
export function withVariantSnvIndelAddProteinEffect<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantSnvIndelAddProteinEffectMutation,
  VariantSnvIndelAddProteinEffectMutationVariables,
  VariantSnvIndelAddProteinEffectProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantSnvIndelAddProteinEffectMutation, VariantSnvIndelAddProteinEffectMutationVariables, VariantSnvIndelAddProteinEffectProps<TChildProps, TDataName>>(VariantSnvIndelAddProteinEffectDocument, {
      alias: 'variantSnvIndelAddProteinEffect',
      ...operationOptions
    });
};

/**
 * __useVariantSnvIndelAddProteinEffectMutation__
 *
 * To run a mutation, you first call `useVariantSnvIndelAddProteinEffectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantSnvIndelAddProteinEffectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantSnvIndelAddProteinEffectMutation, { data, loading, error }] = useVariantSnvIndelAddProteinEffectMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
 *      old_epe_id: // value for 'old_epe_id'
 *      date: // value for 'date'
 *      epe_field: // value for 'epe_field'
 *      epe_vpe: // value for 'epe_vpe'
 *      epe_id: // value for 'epe_id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useVariantSnvIndelAddProteinEffectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantSnvIndelAddProteinEffectMutation, VariantSnvIndelAddProteinEffectMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantSnvIndelAddProteinEffectMutation, VariantSnvIndelAddProteinEffectMutationVariables>(VariantSnvIndelAddProteinEffectDocument, baseOptions);
      }
export type VariantSnvIndelAddProteinEffectMutationHookResult = ReturnType<typeof useVariantSnvIndelAddProteinEffectMutation>;
export type VariantSnvIndelAddProteinEffectMutationResult = ApolloReactCommon.MutationResult<VariantSnvIndelAddProteinEffectMutation>;
export type VariantSnvIndelAddProteinEffectMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantSnvIndelAddProteinEffectMutation, VariantSnvIndelAddProteinEffectMutationVariables>;
export const VariantSnvIndelAddPDotDocument = gql`
    mutation VariantSNVIndelAddPDot($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantSNVIndelPDot(id: $variant_id, pDot: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addVariantSNVIndelPDot(id: $variant_id, pDot: [$es_id])
}
    `;
export type VariantSnvIndelAddPDotMutationFn = ApolloReactCommon.MutationFunction<VariantSnvIndelAddPDotMutation, VariantSnvIndelAddPDotMutationVariables>;
export type VariantSnvIndelAddPDotComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantSnvIndelAddPDotMutation, VariantSnvIndelAddPDotMutationVariables>, 'mutation'>;

    export const VariantSnvIndelAddPDotComponent = (props: VariantSnvIndelAddPDotComponentProps) => (
      <ApolloReactComponents.Mutation<VariantSnvIndelAddPDotMutation, VariantSnvIndelAddPDotMutationVariables> mutation={VariantSnvIndelAddPDotDocument} {...props} />
    );
    
export type VariantSnvIndelAddPDotProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantSnvIndelAddPDotMutation, VariantSnvIndelAddPDotMutationVariables>
    } & TChildProps;
export function withVariantSnvIndelAddPDot<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantSnvIndelAddPDotMutation,
  VariantSnvIndelAddPDotMutationVariables,
  VariantSnvIndelAddPDotProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantSnvIndelAddPDotMutation, VariantSnvIndelAddPDotMutationVariables, VariantSnvIndelAddPDotProps<TChildProps, TDataName>>(VariantSnvIndelAddPDotDocument, {
      alias: 'variantSnvIndelAddPDot',
      ...operationOptions
    });
};

/**
 * __useVariantSnvIndelAddPDotMutation__
 *
 * To run a mutation, you first call `useVariantSnvIndelAddPDotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantSnvIndelAddPDotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantSnvIndelAddPDotMutation, { data, loading, error }] = useVariantSnvIndelAddPDotMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
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
export function useVariantSnvIndelAddPDotMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantSnvIndelAddPDotMutation, VariantSnvIndelAddPDotMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantSnvIndelAddPDotMutation, VariantSnvIndelAddPDotMutationVariables>(VariantSnvIndelAddPDotDocument, baseOptions);
      }
export type VariantSnvIndelAddPDotMutationHookResult = ReturnType<typeof useVariantSnvIndelAddPDotMutation>;
export type VariantSnvIndelAddPDotMutationResult = ApolloReactCommon.MutationResult<VariantSnvIndelAddPDotMutation>;
export type VariantSnvIndelAddPDotMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantSnvIndelAddPDotMutation, VariantSnvIndelAddPDotMutationVariables>;
export const VariantSnvIndelAddCDotDocument = gql`
    mutation VariantSNVIndelAddCDot($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantSNVIndelCDot(id: $variant_id, cDot: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addVariantSNVIndelCDot(id: $variant_id, cDot: [$es_id])
}
    `;
export type VariantSnvIndelAddCDotMutationFn = ApolloReactCommon.MutationFunction<VariantSnvIndelAddCDotMutation, VariantSnvIndelAddCDotMutationVariables>;
export type VariantSnvIndelAddCDotComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantSnvIndelAddCDotMutation, VariantSnvIndelAddCDotMutationVariables>, 'mutation'>;

    export const VariantSnvIndelAddCDotComponent = (props: VariantSnvIndelAddCDotComponentProps) => (
      <ApolloReactComponents.Mutation<VariantSnvIndelAddCDotMutation, VariantSnvIndelAddCDotMutationVariables> mutation={VariantSnvIndelAddCDotDocument} {...props} />
    );
    
export type VariantSnvIndelAddCDotProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantSnvIndelAddCDotMutation, VariantSnvIndelAddCDotMutationVariables>
    } & TChildProps;
export function withVariantSnvIndelAddCDot<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantSnvIndelAddCDotMutation,
  VariantSnvIndelAddCDotMutationVariables,
  VariantSnvIndelAddCDotProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantSnvIndelAddCDotMutation, VariantSnvIndelAddCDotMutationVariables, VariantSnvIndelAddCDotProps<TChildProps, TDataName>>(VariantSnvIndelAddCDotDocument, {
      alias: 'variantSnvIndelAddCDot',
      ...operationOptions
    });
};

/**
 * __useVariantSnvIndelAddCDotMutation__
 *
 * To run a mutation, you first call `useVariantSnvIndelAddCDotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantSnvIndelAddCDotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantSnvIndelAddCDotMutation, { data, loading, error }] = useVariantSnvIndelAddCDotMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
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
export function useVariantSnvIndelAddCDotMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantSnvIndelAddCDotMutation, VariantSnvIndelAddCDotMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantSnvIndelAddCDotMutation, VariantSnvIndelAddCDotMutationVariables>(VariantSnvIndelAddCDotDocument, baseOptions);
      }
export type VariantSnvIndelAddCDotMutationHookResult = ReturnType<typeof useVariantSnvIndelAddCDotMutation>;
export type VariantSnvIndelAddCDotMutationResult = ApolloReactCommon.MutationResult<VariantSnvIndelAddCDotMutation>;
export type VariantSnvIndelAddCDotMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantSnvIndelAddCDotMutation, VariantSnvIndelAddCDotMutationVariables>;
export const VariantSnvIndelAddGDotDocument = gql`
    mutation VariantSNVIndelAddGDot($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantSNVIndelGDot(id: $variant_id, gDot: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addVariantSNVIndelGDot(id: $variant_id, gDot: [$es_id])
}
    `;
export type VariantSnvIndelAddGDotMutationFn = ApolloReactCommon.MutationFunction<VariantSnvIndelAddGDotMutation, VariantSnvIndelAddGDotMutationVariables>;
export type VariantSnvIndelAddGDotComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantSnvIndelAddGDotMutation, VariantSnvIndelAddGDotMutationVariables>, 'mutation'>;

    export const VariantSnvIndelAddGDotComponent = (props: VariantSnvIndelAddGDotComponentProps) => (
      <ApolloReactComponents.Mutation<VariantSnvIndelAddGDotMutation, VariantSnvIndelAddGDotMutationVariables> mutation={VariantSnvIndelAddGDotDocument} {...props} />
    );
    
export type VariantSnvIndelAddGDotProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantSnvIndelAddGDotMutation, VariantSnvIndelAddGDotMutationVariables>
    } & TChildProps;
export function withVariantSnvIndelAddGDot<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantSnvIndelAddGDotMutation,
  VariantSnvIndelAddGDotMutationVariables,
  VariantSnvIndelAddGDotProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantSnvIndelAddGDotMutation, VariantSnvIndelAddGDotMutationVariables, VariantSnvIndelAddGDotProps<TChildProps, TDataName>>(VariantSnvIndelAddGDotDocument, {
      alias: 'variantSnvIndelAddGDot',
      ...operationOptions
    });
};

/**
 * __useVariantSnvIndelAddGDotMutation__
 *
 * To run a mutation, you first call `useVariantSnvIndelAddGDotMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantSnvIndelAddGDotMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantSnvIndelAddGDotMutation, { data, loading, error }] = useVariantSnvIndelAddGDotMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
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
export function useVariantSnvIndelAddGDotMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantSnvIndelAddGDotMutation, VariantSnvIndelAddGDotMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantSnvIndelAddGDotMutation, VariantSnvIndelAddGDotMutationVariables>(VariantSnvIndelAddGDotDocument, baseOptions);
      }
export type VariantSnvIndelAddGDotMutationHookResult = ReturnType<typeof useVariantSnvIndelAddGDotMutation>;
export type VariantSnvIndelAddGDotMutationResult = ApolloReactCommon.MutationResult<VariantSnvIndelAddGDotMutation>;
export type VariantSnvIndelAddGDotMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantSnvIndelAddGDotMutation, VariantSnvIndelAddGDotMutationVariables>;
export const VariantSnvIndelAddExonDocument = gql`
    mutation VariantSNVIndelAddExon($variant_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteVariantSNVIndelExon(id: $variant_id, exon: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addVariantSNVIndelExon(id: $variant_id, exon: [$es_id])
}
    `;
export type VariantSnvIndelAddExonMutationFn = ApolloReactCommon.MutationFunction<VariantSnvIndelAddExonMutation, VariantSnvIndelAddExonMutationVariables>;
export type VariantSnvIndelAddExonComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<VariantSnvIndelAddExonMutation, VariantSnvIndelAddExonMutationVariables>, 'mutation'>;

    export const VariantSnvIndelAddExonComponent = (props: VariantSnvIndelAddExonComponentProps) => (
      <ApolloReactComponents.Mutation<VariantSnvIndelAddExonMutation, VariantSnvIndelAddExonMutationVariables> mutation={VariantSnvIndelAddExonDocument} {...props} />
    );
    
export type VariantSnvIndelAddExonProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<VariantSnvIndelAddExonMutation, VariantSnvIndelAddExonMutationVariables>
    } & TChildProps;
export function withVariantSnvIndelAddExon<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  VariantSnvIndelAddExonMutation,
  VariantSnvIndelAddExonMutationVariables,
  VariantSnvIndelAddExonProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, VariantSnvIndelAddExonMutation, VariantSnvIndelAddExonMutationVariables, VariantSnvIndelAddExonProps<TChildProps, TDataName>>(VariantSnvIndelAddExonDocument, {
      alias: 'variantSnvIndelAddExon',
      ...operationOptions
    });
};

/**
 * __useVariantSnvIndelAddExonMutation__
 *
 * To run a mutation, you first call `useVariantSnvIndelAddExonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVariantSnvIndelAddExonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [variantSnvIndelAddExonMutation, { data, loading, error }] = useVariantSnvIndelAddExonMutation({
 *   variables: {
 *      variant_id: // value for 'variant_id'
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
export function useVariantSnvIndelAddExonMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<VariantSnvIndelAddExonMutation, VariantSnvIndelAddExonMutationVariables>) {
        return ApolloReactHooks.useMutation<VariantSnvIndelAddExonMutation, VariantSnvIndelAddExonMutationVariables>(VariantSnvIndelAddExonDocument, baseOptions);
      }
export type VariantSnvIndelAddExonMutationHookResult = ReturnType<typeof useVariantSnvIndelAddExonMutation>;
export type VariantSnvIndelAddExonMutationResult = ApolloReactCommon.MutationResult<VariantSnvIndelAddExonMutation>;
export type VariantSnvIndelAddExonMutationOptions = ApolloReactCommon.BaseMutationOptions<VariantSnvIndelAddExonMutation, VariantSnvIndelAddExonMutationVariables>;
export const GeneList_For_VariantsDocument = gql`
    query GeneList_For_Variants {
  OmniGene(orderBy: name_asc, filter: {variantMarkers_some: {id_starts_with: "genomicvariantmarker_"}}) {
    id
    name
  }
}
    `;
export type GeneList_For_VariantsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GeneList_For_VariantsQuery, GeneList_For_VariantsQueryVariables>, 'query'>;

    export const GeneList_For_VariantsComponent = (props: GeneList_For_VariantsComponentProps) => (
      <ApolloReactComponents.Query<GeneList_For_VariantsQuery, GeneList_For_VariantsQueryVariables> query={GeneList_For_VariantsDocument} {...props} />
    );
    
export type GeneList_For_VariantsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<GeneList_For_VariantsQuery, GeneList_For_VariantsQueryVariables>
    } & TChildProps;
export function withGeneList_For_Variants<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  GeneList_For_VariantsQuery,
  GeneList_For_VariantsQueryVariables,
  GeneList_For_VariantsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, GeneList_For_VariantsQuery, GeneList_For_VariantsQueryVariables, GeneList_For_VariantsProps<TChildProps, TDataName>>(GeneList_For_VariantsDocument, {
      alias: 'geneListForVariants',
      ...operationOptions
    });
};

/**
 * __useGeneList_For_VariantsQuery__
 *
 * To run a query within a React component, call `useGeneList_For_VariantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGeneList_For_VariantsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGeneList_For_VariantsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGeneList_For_VariantsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GeneList_For_VariantsQuery, GeneList_For_VariantsQueryVariables>) {
        return ApolloReactHooks.useQuery<GeneList_For_VariantsQuery, GeneList_For_VariantsQueryVariables>(GeneList_For_VariantsDocument, baseOptions);
      }
export function useGeneList_For_VariantsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GeneList_For_VariantsQuery, GeneList_For_VariantsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GeneList_For_VariantsQuery, GeneList_For_VariantsQueryVariables>(GeneList_For_VariantsDocument, baseOptions);
        }
export type GeneList_For_VariantsQueryHookResult = ReturnType<typeof useGeneList_For_VariantsQuery>;
export type GeneList_For_VariantsLazyQueryHookResult = ReturnType<typeof useGeneList_For_VariantsLazyQuery>;
export type GeneList_For_VariantsQueryResult = ApolloReactCommon.QueryResult<GeneList_For_VariantsQuery, GeneList_For_VariantsQueryVariables>;
export const Variant_Markers_For_GeneDocument = gql`
    query Variant_Markers_For_Gene($omnigene_id: ID, $query_string: String) {
  GenomicVariantMarker(orderBy: id_asc, filter: {AND: [{name: {statement_contains: $query_string}}, {gene: {id: $omnigene_id}}]}) {
    id
    name {
      statement
    }
    method {
      statement
    }
    variant {
      id
      __typename
      name {
        statement
      }
    }
  }
}
    `;
export type Variant_Markers_For_GeneComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Variant_Markers_For_GeneQuery, Variant_Markers_For_GeneQueryVariables>, 'query'>;

    export const Variant_Markers_For_GeneComponent = (props: Variant_Markers_For_GeneComponentProps) => (
      <ApolloReactComponents.Query<Variant_Markers_For_GeneQuery, Variant_Markers_For_GeneQueryVariables> query={Variant_Markers_For_GeneDocument} {...props} />
    );
    
export type Variant_Markers_For_GeneProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<Variant_Markers_For_GeneQuery, Variant_Markers_For_GeneQueryVariables>
    } & TChildProps;
export function withVariant_Markers_For_Gene<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Variant_Markers_For_GeneQuery,
  Variant_Markers_For_GeneQueryVariables,
  Variant_Markers_For_GeneProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, Variant_Markers_For_GeneQuery, Variant_Markers_For_GeneQueryVariables, Variant_Markers_For_GeneProps<TChildProps, TDataName>>(Variant_Markers_For_GeneDocument, {
      alias: 'variantMarkersForGene',
      ...operationOptions
    });
};

/**
 * __useVariant_Markers_For_GeneQuery__
 *
 * To run a query within a React component, call `useVariant_Markers_For_GeneQuery` and pass it any options that fit your needs.
 * When your component renders, `useVariant_Markers_For_GeneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVariant_Markers_For_GeneQuery({
 *   variables: {
 *      omnigene_id: // value for 'omnigene_id'
 *      query_string: // value for 'query_string'
 *   },
 * });
 */
export function useVariant_Markers_For_GeneQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Variant_Markers_For_GeneQuery, Variant_Markers_For_GeneQueryVariables>) {
        return ApolloReactHooks.useQuery<Variant_Markers_For_GeneQuery, Variant_Markers_For_GeneQueryVariables>(Variant_Markers_For_GeneDocument, baseOptions);
      }
export function useVariant_Markers_For_GeneLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Variant_Markers_For_GeneQuery, Variant_Markers_For_GeneQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Variant_Markers_For_GeneQuery, Variant_Markers_For_GeneQueryVariables>(Variant_Markers_For_GeneDocument, baseOptions);
        }
export type Variant_Markers_For_GeneQueryHookResult = ReturnType<typeof useVariant_Markers_For_GeneQuery>;
export type Variant_Markers_For_GeneLazyQueryHookResult = ReturnType<typeof useVariant_Markers_For_GeneLazyQuery>;
export type Variant_Markers_For_GeneQueryResult = ApolloReactCommon.QueryResult<Variant_Markers_For_GeneQuery, Variant_Markers_For_GeneQueryVariables>;
export const HotSpotVariantDocument = gql`
    query HotSpotVariant($id: ID) {
  HotSpotVariant(id: $id) {
    id
    gene
    name
    referenceAminoAcid
    variantAminoAcid
    begin
    end
    position
    occurrences(orderBy: perThousandOccurrence_desc) {
      disease
      oncoTreeCode
      occurrences {
        ...ei_fields
      }
      totalSamples {
        ...ei_fields
      }
      percentOccurrence {
        ...es_fields
      }
      perThousandOccurrence
    }
  }
}
    ${Ei_FieldsFragmentDoc}
${Es_FieldsFragmentDoc}`;
export type HotSpotVariantComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<HotSpotVariantQuery, HotSpotVariantQueryVariables>, 'query'>;

    export const HotSpotVariantComponent = (props: HotSpotVariantComponentProps) => (
      <ApolloReactComponents.Query<HotSpotVariantQuery, HotSpotVariantQueryVariables> query={HotSpotVariantDocument} {...props} />
    );
    
export type HotSpotVariantProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<HotSpotVariantQuery, HotSpotVariantQueryVariables>
    } & TChildProps;
export function withHotSpotVariant<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  HotSpotVariantQuery,
  HotSpotVariantQueryVariables,
  HotSpotVariantProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, HotSpotVariantQuery, HotSpotVariantQueryVariables, HotSpotVariantProps<TChildProps, TDataName>>(HotSpotVariantDocument, {
      alias: 'hotSpotVariant',
      ...operationOptions
    });
};

/**
 * __useHotSpotVariantQuery__
 *
 * To run a query within a React component, call `useHotSpotVariantQuery` and pass it any options that fit your needs.
 * When your component renders, `useHotSpotVariantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHotSpotVariantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHotSpotVariantQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<HotSpotVariantQuery, HotSpotVariantQueryVariables>) {
        return ApolloReactHooks.useQuery<HotSpotVariantQuery, HotSpotVariantQueryVariables>(HotSpotVariantDocument, baseOptions);
      }
export function useHotSpotVariantLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HotSpotVariantQuery, HotSpotVariantQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HotSpotVariantQuery, HotSpotVariantQueryVariables>(HotSpotVariantDocument, baseOptions);
        }
export type HotSpotVariantQueryHookResult = ReturnType<typeof useHotSpotVariantQuery>;
export type HotSpotVariantLazyQueryHookResult = ReturnType<typeof useHotSpotVariantLazyQuery>;
export type HotSpotVariantQueryResult = ApolloReactCommon.QueryResult<HotSpotVariantQuery, HotSpotVariantQueryVariables>;
export const JaxVariantDocument = gql`
    query JaxVariant($id: ID) {
  JaxVariant(id: $id) {
    id
    name
    gene {
      id
      name
    }
    cDot
    pDot
    gDot
    proteinEffect {
      id
      proteinEffect
      field
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    transcript {
      ...es_fields
    }
    variantType
    description {
      ...es_fields
    }
  }
}
    ${Es_FieldsFragmentDoc}`;
export type JaxVariantComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<JaxVariantQuery, JaxVariantQueryVariables>, 'query'>;

    export const JaxVariantComponent = (props: JaxVariantComponentProps) => (
      <ApolloReactComponents.Query<JaxVariantQuery, JaxVariantQueryVariables> query={JaxVariantDocument} {...props} />
    );
    
export type JaxVariantProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<JaxVariantQuery, JaxVariantQueryVariables>
    } & TChildProps;
export function withJaxVariant<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  JaxVariantQuery,
  JaxVariantQueryVariables,
  JaxVariantProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, JaxVariantQuery, JaxVariantQueryVariables, JaxVariantProps<TChildProps, TDataName>>(JaxVariantDocument, {
      alias: 'jaxVariant',
      ...operationOptions
    });
};

/**
 * __useJaxVariantQuery__
 *
 * To run a query within a React component, call `useJaxVariantQuery` and pass it any options that fit your needs.
 * When your component renders, `useJaxVariantQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useJaxVariantQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useJaxVariantQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<JaxVariantQuery, JaxVariantQueryVariables>) {
        return ApolloReactHooks.useQuery<JaxVariantQuery, JaxVariantQueryVariables>(JaxVariantDocument, baseOptions);
      }
export function useJaxVariantLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<JaxVariantQuery, JaxVariantQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<JaxVariantQuery, JaxVariantQueryVariables>(JaxVariantDocument, baseOptions);
        }
export type JaxVariantQueryHookResult = ReturnType<typeof useJaxVariantQuery>;
export type JaxVariantLazyQueryHookResult = ReturnType<typeof useJaxVariantLazyQuery>;
export type JaxVariantQueryResult = ApolloReactCommon.QueryResult<JaxVariantQuery, JaxVariantQueryVariables>;
export const Msi_MarkerDocument = gql`
    query MSI_Marker($marker_id: ID) {
  MSIMarker(id: $marker_id) {
    id
    name {
      ...es_fields
    }
    method {
      ...es_fields
    }
    resultString {
      ...es_fields
    }
  }
}
    ${Es_FieldsFragmentDoc}`;
export type Msi_MarkerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Msi_MarkerQuery, Msi_MarkerQueryVariables>, 'query'>;

    export const Msi_MarkerComponent = (props: Msi_MarkerComponentProps) => (
      <ApolloReactComponents.Query<Msi_MarkerQuery, Msi_MarkerQueryVariables> query={Msi_MarkerDocument} {...props} />
    );
    
export type Msi_MarkerProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<Msi_MarkerQuery, Msi_MarkerQueryVariables>
    } & TChildProps;
export function withMsi_Marker<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Msi_MarkerQuery,
  Msi_MarkerQueryVariables,
  Msi_MarkerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, Msi_MarkerQuery, Msi_MarkerQueryVariables, Msi_MarkerProps<TChildProps, TDataName>>(Msi_MarkerDocument, {
      alias: 'msiMarker',
      ...operationOptions
    });
};

/**
 * __useMsi_MarkerQuery__
 *
 * To run a query within a React component, call `useMsi_MarkerQuery` and pass it any options that fit your needs.
 * When your component renders, `useMsi_MarkerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMsi_MarkerQuery({
 *   variables: {
 *      marker_id: // value for 'marker_id'
 *   },
 * });
 */
export function useMsi_MarkerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Msi_MarkerQuery, Msi_MarkerQueryVariables>) {
        return ApolloReactHooks.useQuery<Msi_MarkerQuery, Msi_MarkerQueryVariables>(Msi_MarkerDocument, baseOptions);
      }
export function useMsi_MarkerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Msi_MarkerQuery, Msi_MarkerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Msi_MarkerQuery, Msi_MarkerQueryVariables>(Msi_MarkerDocument, baseOptions);
        }
export type Msi_MarkerQueryHookResult = ReturnType<typeof useMsi_MarkerQuery>;
export type Msi_MarkerLazyQueryHookResult = ReturnType<typeof useMsi_MarkerLazyQuery>;
export type Msi_MarkerQueryResult = ApolloReactCommon.QueryResult<Msi_MarkerQuery, Msi_MarkerQueryVariables>;
export const MsiMarkerAddNameDocument = gql`
    mutation MsiMarkerAddName($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteMSIMarkerName(id: $marker_id, name: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addMSIMarkerName(id: $marker_id, name: [$es_id])
}
    `;
export type MsiMarkerAddNameMutationFn = ApolloReactCommon.MutationFunction<MsiMarkerAddNameMutation, MsiMarkerAddNameMutationVariables>;
export type MsiMarkerAddNameComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MsiMarkerAddNameMutation, MsiMarkerAddNameMutationVariables>, 'mutation'>;

    export const MsiMarkerAddNameComponent = (props: MsiMarkerAddNameComponentProps) => (
      <ApolloReactComponents.Mutation<MsiMarkerAddNameMutation, MsiMarkerAddNameMutationVariables> mutation={MsiMarkerAddNameDocument} {...props} />
    );
    
export type MsiMarkerAddNameProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<MsiMarkerAddNameMutation, MsiMarkerAddNameMutationVariables>
    } & TChildProps;
export function withMsiMarkerAddName<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MsiMarkerAddNameMutation,
  MsiMarkerAddNameMutationVariables,
  MsiMarkerAddNameProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, MsiMarkerAddNameMutation, MsiMarkerAddNameMutationVariables, MsiMarkerAddNameProps<TChildProps, TDataName>>(MsiMarkerAddNameDocument, {
      alias: 'msiMarkerAddName',
      ...operationOptions
    });
};

/**
 * __useMsiMarkerAddNameMutation__
 *
 * To run a mutation, you first call `useMsiMarkerAddNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMsiMarkerAddNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [msiMarkerAddNameMutation, { data, loading, error }] = useMsiMarkerAddNameMutation({
 *   variables: {
 *      marker_id: // value for 'marker_id'
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
export function useMsiMarkerAddNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MsiMarkerAddNameMutation, MsiMarkerAddNameMutationVariables>) {
        return ApolloReactHooks.useMutation<MsiMarkerAddNameMutation, MsiMarkerAddNameMutationVariables>(MsiMarkerAddNameDocument, baseOptions);
      }
export type MsiMarkerAddNameMutationHookResult = ReturnType<typeof useMsiMarkerAddNameMutation>;
export type MsiMarkerAddNameMutationResult = ApolloReactCommon.MutationResult<MsiMarkerAddNameMutation>;
export type MsiMarkerAddNameMutationOptions = ApolloReactCommon.BaseMutationOptions<MsiMarkerAddNameMutation, MsiMarkerAddNameMutationVariables>;
export const MsiMarkerAddMethodDocument = gql`
    mutation MsiMarkerAddMethod($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteMSIMarkerMethod(id: $marker_id, method: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addMSIMarkerMethod(id: $marker_id, method: [$es_id])
}
    `;
export type MsiMarkerAddMethodMutationFn = ApolloReactCommon.MutationFunction<MsiMarkerAddMethodMutation, MsiMarkerAddMethodMutationVariables>;
export type MsiMarkerAddMethodComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MsiMarkerAddMethodMutation, MsiMarkerAddMethodMutationVariables>, 'mutation'>;

    export const MsiMarkerAddMethodComponent = (props: MsiMarkerAddMethodComponentProps) => (
      <ApolloReactComponents.Mutation<MsiMarkerAddMethodMutation, MsiMarkerAddMethodMutationVariables> mutation={MsiMarkerAddMethodDocument} {...props} />
    );
    
export type MsiMarkerAddMethodProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<MsiMarkerAddMethodMutation, MsiMarkerAddMethodMutationVariables>
    } & TChildProps;
export function withMsiMarkerAddMethod<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MsiMarkerAddMethodMutation,
  MsiMarkerAddMethodMutationVariables,
  MsiMarkerAddMethodProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, MsiMarkerAddMethodMutation, MsiMarkerAddMethodMutationVariables, MsiMarkerAddMethodProps<TChildProps, TDataName>>(MsiMarkerAddMethodDocument, {
      alias: 'msiMarkerAddMethod',
      ...operationOptions
    });
};

/**
 * __useMsiMarkerAddMethodMutation__
 *
 * To run a mutation, you first call `useMsiMarkerAddMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMsiMarkerAddMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [msiMarkerAddMethodMutation, { data, loading, error }] = useMsiMarkerAddMethodMutation({
 *   variables: {
 *      marker_id: // value for 'marker_id'
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
export function useMsiMarkerAddMethodMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MsiMarkerAddMethodMutation, MsiMarkerAddMethodMutationVariables>) {
        return ApolloReactHooks.useMutation<MsiMarkerAddMethodMutation, MsiMarkerAddMethodMutationVariables>(MsiMarkerAddMethodDocument, baseOptions);
      }
export type MsiMarkerAddMethodMutationHookResult = ReturnType<typeof useMsiMarkerAddMethodMutation>;
export type MsiMarkerAddMethodMutationResult = ApolloReactCommon.MutationResult<MsiMarkerAddMethodMutation>;
export type MsiMarkerAddMethodMutationOptions = ApolloReactCommon.BaseMutationOptions<MsiMarkerAddMethodMutation, MsiMarkerAddMethodMutationVariables>;
export const MsiMarkerAddResultsDocument = gql`
    mutation MsiMarkerAddResults($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteMSIMarkerResultString(id: $marker_id, resultString: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addMSIMarkerResultString(id: $marker_id, resultString: [$es_id])
}
    `;
export type MsiMarkerAddResultsMutationFn = ApolloReactCommon.MutationFunction<MsiMarkerAddResultsMutation, MsiMarkerAddResultsMutationVariables>;
export type MsiMarkerAddResultsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<MsiMarkerAddResultsMutation, MsiMarkerAddResultsMutationVariables>, 'mutation'>;

    export const MsiMarkerAddResultsComponent = (props: MsiMarkerAddResultsComponentProps) => (
      <ApolloReactComponents.Mutation<MsiMarkerAddResultsMutation, MsiMarkerAddResultsMutationVariables> mutation={MsiMarkerAddResultsDocument} {...props} />
    );
    
export type MsiMarkerAddResultsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<MsiMarkerAddResultsMutation, MsiMarkerAddResultsMutationVariables>
    } & TChildProps;
export function withMsiMarkerAddResults<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MsiMarkerAddResultsMutation,
  MsiMarkerAddResultsMutationVariables,
  MsiMarkerAddResultsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, MsiMarkerAddResultsMutation, MsiMarkerAddResultsMutationVariables, MsiMarkerAddResultsProps<TChildProps, TDataName>>(MsiMarkerAddResultsDocument, {
      alias: 'msiMarkerAddResults',
      ...operationOptions
    });
};

/**
 * __useMsiMarkerAddResultsMutation__
 *
 * To run a mutation, you first call `useMsiMarkerAddResultsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMsiMarkerAddResultsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [msiMarkerAddResultsMutation, { data, loading, error }] = useMsiMarkerAddResultsMutation({
 *   variables: {
 *      marker_id: // value for 'marker_id'
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
export function useMsiMarkerAddResultsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<MsiMarkerAddResultsMutation, MsiMarkerAddResultsMutationVariables>) {
        return ApolloReactHooks.useMutation<MsiMarkerAddResultsMutation, MsiMarkerAddResultsMutationVariables>(MsiMarkerAddResultsDocument, baseOptions);
      }
export type MsiMarkerAddResultsMutationHookResult = ReturnType<typeof useMsiMarkerAddResultsMutation>;
export type MsiMarkerAddResultsMutationResult = ApolloReactCommon.MutationResult<MsiMarkerAddResultsMutation>;
export type MsiMarkerAddResultsMutationOptions = ApolloReactCommon.BaseMutationOptions<MsiMarkerAddResultsMutation, MsiMarkerAddResultsMutationVariables>;
export const Msi_MarkersDocument = gql`
    query MSI_Markers {
  MSIMarker(orderBy: id_asc) {
    id
    name {
      ...es_fields
    }
    method {
      ...es_fields
    }
    resultString {
      ...es_fields
    }
  }
}
    ${Es_FieldsFragmentDoc}`;
export type Msi_MarkersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Msi_MarkersQuery, Msi_MarkersQueryVariables>, 'query'>;

    export const Msi_MarkersComponent = (props: Msi_MarkersComponentProps) => (
      <ApolloReactComponents.Query<Msi_MarkersQuery, Msi_MarkersQueryVariables> query={Msi_MarkersDocument} {...props} />
    );
    
export type Msi_MarkersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<Msi_MarkersQuery, Msi_MarkersQueryVariables>
    } & TChildProps;
export function withMsi_Markers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Msi_MarkersQuery,
  Msi_MarkersQueryVariables,
  Msi_MarkersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, Msi_MarkersQuery, Msi_MarkersQueryVariables, Msi_MarkersProps<TChildProps, TDataName>>(Msi_MarkersDocument, {
      alias: 'msiMarkers',
      ...operationOptions
    });
};

/**
 * __useMsi_MarkersQuery__
 *
 * To run a query within a React component, call `useMsi_MarkersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMsi_MarkersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMsi_MarkersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMsi_MarkersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Msi_MarkersQuery, Msi_MarkersQueryVariables>) {
        return ApolloReactHooks.useQuery<Msi_MarkersQuery, Msi_MarkersQueryVariables>(Msi_MarkersDocument, baseOptions);
      }
export function useMsi_MarkersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Msi_MarkersQuery, Msi_MarkersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Msi_MarkersQuery, Msi_MarkersQueryVariables>(Msi_MarkersDocument, baseOptions);
        }
export type Msi_MarkersQueryHookResult = ReturnType<typeof useMsi_MarkersQuery>;
export type Msi_MarkersLazyQueryHookResult = ReturnType<typeof useMsi_MarkersLazyQuery>;
export type Msi_MarkersQueryResult = ApolloReactCommon.QueryResult<Msi_MarkersQuery, Msi_MarkersQueryVariables>;
export const Tmb_MarkerDocument = gql`
    query TMB_Marker($marker_id: ID) {
  TMBMarker(id: $marker_id) {
    id
    name {
      ...es_fields
    }
    method {
      ...es_fields
    }
    comparator {
      id
      field
      comparator
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    resultMin {
      id
      field
      floatValue
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    resultMax {
      id
      field
      floatValue
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    resultUnits {
      ...es_fields
    }
    interpretations {
      id
      field
      tmbInterpretation
      references {
        id
      }
      editor {
        id
        name
      }
      editDate
    }
    resultString {
      ...es_fields
    }
  }
}
    ${Es_FieldsFragmentDoc}`;
export type Tmb_MarkerComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Tmb_MarkerQuery, Tmb_MarkerQueryVariables>, 'query'>;

    export const Tmb_MarkerComponent = (props: Tmb_MarkerComponentProps) => (
      <ApolloReactComponents.Query<Tmb_MarkerQuery, Tmb_MarkerQueryVariables> query={Tmb_MarkerDocument} {...props} />
    );
    
export type Tmb_MarkerProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<Tmb_MarkerQuery, Tmb_MarkerQueryVariables>
    } & TChildProps;
export function withTmb_Marker<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Tmb_MarkerQuery,
  Tmb_MarkerQueryVariables,
  Tmb_MarkerProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, Tmb_MarkerQuery, Tmb_MarkerQueryVariables, Tmb_MarkerProps<TChildProps, TDataName>>(Tmb_MarkerDocument, {
      alias: 'tmbMarker',
      ...operationOptions
    });
};

/**
 * __useTmb_MarkerQuery__
 *
 * To run a query within a React component, call `useTmb_MarkerQuery` and pass it any options that fit your needs.
 * When your component renders, `useTmb_MarkerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTmb_MarkerQuery({
 *   variables: {
 *      marker_id: // value for 'marker_id'
 *   },
 * });
 */
export function useTmb_MarkerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Tmb_MarkerQuery, Tmb_MarkerQueryVariables>) {
        return ApolloReactHooks.useQuery<Tmb_MarkerQuery, Tmb_MarkerQueryVariables>(Tmb_MarkerDocument, baseOptions);
      }
export function useTmb_MarkerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Tmb_MarkerQuery, Tmb_MarkerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Tmb_MarkerQuery, Tmb_MarkerQueryVariables>(Tmb_MarkerDocument, baseOptions);
        }
export type Tmb_MarkerQueryHookResult = ReturnType<typeof useTmb_MarkerQuery>;
export type Tmb_MarkerLazyQueryHookResult = ReturnType<typeof useTmb_MarkerLazyQuery>;
export type Tmb_MarkerQueryResult = ApolloReactCommon.QueryResult<Tmb_MarkerQuery, Tmb_MarkerQueryVariables>;
export const TmbMarkerAddNameDocument = gql`
    mutation TmbMarkerAddName($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteTMBMarkerName(id: $marker_id, name: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addTMBMarkerName(id: $marker_id, name: [$es_id])
}
    `;
export type TmbMarkerAddNameMutationFn = ApolloReactCommon.MutationFunction<TmbMarkerAddNameMutation, TmbMarkerAddNameMutationVariables>;
export type TmbMarkerAddNameComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TmbMarkerAddNameMutation, TmbMarkerAddNameMutationVariables>, 'mutation'>;

    export const TmbMarkerAddNameComponent = (props: TmbMarkerAddNameComponentProps) => (
      <ApolloReactComponents.Mutation<TmbMarkerAddNameMutation, TmbMarkerAddNameMutationVariables> mutation={TmbMarkerAddNameDocument} {...props} />
    );
    
export type TmbMarkerAddNameProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<TmbMarkerAddNameMutation, TmbMarkerAddNameMutationVariables>
    } & TChildProps;
export function withTmbMarkerAddName<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TmbMarkerAddNameMutation,
  TmbMarkerAddNameMutationVariables,
  TmbMarkerAddNameProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, TmbMarkerAddNameMutation, TmbMarkerAddNameMutationVariables, TmbMarkerAddNameProps<TChildProps, TDataName>>(TmbMarkerAddNameDocument, {
      alias: 'tmbMarkerAddName',
      ...operationOptions
    });
};

/**
 * __useTmbMarkerAddNameMutation__
 *
 * To run a mutation, you first call `useTmbMarkerAddNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTmbMarkerAddNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tmbMarkerAddNameMutation, { data, loading, error }] = useTmbMarkerAddNameMutation({
 *   variables: {
 *      marker_id: // value for 'marker_id'
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
export function useTmbMarkerAddNameMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TmbMarkerAddNameMutation, TmbMarkerAddNameMutationVariables>) {
        return ApolloReactHooks.useMutation<TmbMarkerAddNameMutation, TmbMarkerAddNameMutationVariables>(TmbMarkerAddNameDocument, baseOptions);
      }
export type TmbMarkerAddNameMutationHookResult = ReturnType<typeof useTmbMarkerAddNameMutation>;
export type TmbMarkerAddNameMutationResult = ApolloReactCommon.MutationResult<TmbMarkerAddNameMutation>;
export type TmbMarkerAddNameMutationOptions = ApolloReactCommon.BaseMutationOptions<TmbMarkerAddNameMutation, TmbMarkerAddNameMutationVariables>;
export const TmbMarkerAddMethodDocument = gql`
    mutation TmbMarkerAddMethod($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteTMBMarkerMethod(id: $marker_id, method: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addTMBMarkerMethod(id: $marker_id, method: [$es_id])
}
    `;
export type TmbMarkerAddMethodMutationFn = ApolloReactCommon.MutationFunction<TmbMarkerAddMethodMutation, TmbMarkerAddMethodMutationVariables>;
export type TmbMarkerAddMethodComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TmbMarkerAddMethodMutation, TmbMarkerAddMethodMutationVariables>, 'mutation'>;

    export const TmbMarkerAddMethodComponent = (props: TmbMarkerAddMethodComponentProps) => (
      <ApolloReactComponents.Mutation<TmbMarkerAddMethodMutation, TmbMarkerAddMethodMutationVariables> mutation={TmbMarkerAddMethodDocument} {...props} />
    );
    
export type TmbMarkerAddMethodProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<TmbMarkerAddMethodMutation, TmbMarkerAddMethodMutationVariables>
    } & TChildProps;
export function withTmbMarkerAddMethod<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TmbMarkerAddMethodMutation,
  TmbMarkerAddMethodMutationVariables,
  TmbMarkerAddMethodProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, TmbMarkerAddMethodMutation, TmbMarkerAddMethodMutationVariables, TmbMarkerAddMethodProps<TChildProps, TDataName>>(TmbMarkerAddMethodDocument, {
      alias: 'tmbMarkerAddMethod',
      ...operationOptions
    });
};

/**
 * __useTmbMarkerAddMethodMutation__
 *
 * To run a mutation, you first call `useTmbMarkerAddMethodMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTmbMarkerAddMethodMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tmbMarkerAddMethodMutation, { data, loading, error }] = useTmbMarkerAddMethodMutation({
 *   variables: {
 *      marker_id: // value for 'marker_id'
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
export function useTmbMarkerAddMethodMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TmbMarkerAddMethodMutation, TmbMarkerAddMethodMutationVariables>) {
        return ApolloReactHooks.useMutation<TmbMarkerAddMethodMutation, TmbMarkerAddMethodMutationVariables>(TmbMarkerAddMethodDocument, baseOptions);
      }
export type TmbMarkerAddMethodMutationHookResult = ReturnType<typeof useTmbMarkerAddMethodMutation>;
export type TmbMarkerAddMethodMutationResult = ApolloReactCommon.MutationResult<TmbMarkerAddMethodMutation>;
export type TmbMarkerAddMethodMutationOptions = ApolloReactCommon.BaseMutationOptions<TmbMarkerAddMethodMutation, TmbMarkerAddMethodMutationVariables>;
export const TmbMarkerAddResultsDocument = gql`
    mutation TmbMarkerAddResults($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteTMBMarkerResultString(id: $marker_id, resultString: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addTMBMarkerResultString(id: $marker_id, resultString: [$es_id])
}
    `;
export type TmbMarkerAddResultsMutationFn = ApolloReactCommon.MutationFunction<TmbMarkerAddResultsMutation, TmbMarkerAddResultsMutationVariables>;
export type TmbMarkerAddResultsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TmbMarkerAddResultsMutation, TmbMarkerAddResultsMutationVariables>, 'mutation'>;

    export const TmbMarkerAddResultsComponent = (props: TmbMarkerAddResultsComponentProps) => (
      <ApolloReactComponents.Mutation<TmbMarkerAddResultsMutation, TmbMarkerAddResultsMutationVariables> mutation={TmbMarkerAddResultsDocument} {...props} />
    );
    
export type TmbMarkerAddResultsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<TmbMarkerAddResultsMutation, TmbMarkerAddResultsMutationVariables>
    } & TChildProps;
export function withTmbMarkerAddResults<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TmbMarkerAddResultsMutation,
  TmbMarkerAddResultsMutationVariables,
  TmbMarkerAddResultsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, TmbMarkerAddResultsMutation, TmbMarkerAddResultsMutationVariables, TmbMarkerAddResultsProps<TChildProps, TDataName>>(TmbMarkerAddResultsDocument, {
      alias: 'tmbMarkerAddResults',
      ...operationOptions
    });
};

/**
 * __useTmbMarkerAddResultsMutation__
 *
 * To run a mutation, you first call `useTmbMarkerAddResultsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTmbMarkerAddResultsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tmbMarkerAddResultsMutation, { data, loading, error }] = useTmbMarkerAddResultsMutation({
 *   variables: {
 *      marker_id: // value for 'marker_id'
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
export function useTmbMarkerAddResultsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TmbMarkerAddResultsMutation, TmbMarkerAddResultsMutationVariables>) {
        return ApolloReactHooks.useMutation<TmbMarkerAddResultsMutation, TmbMarkerAddResultsMutationVariables>(TmbMarkerAddResultsDocument, baseOptions);
      }
export type TmbMarkerAddResultsMutationHookResult = ReturnType<typeof useTmbMarkerAddResultsMutation>;
export type TmbMarkerAddResultsMutationResult = ApolloReactCommon.MutationResult<TmbMarkerAddResultsMutation>;
export type TmbMarkerAddResultsMutationOptions = ApolloReactCommon.BaseMutationOptions<TmbMarkerAddResultsMutation, TmbMarkerAddResultsMutationVariables>;
export const TmbMarkerAddResultUnitsDocument = gql`
    mutation TmbMarkerAddResultUnits($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $es_statement: String!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteTMBMarkerResultUnits(id: $marker_id, resultUnits: [$old_es_id])
  createEditableStatement(editDate: $date, field: $es_field, id: $es_id, statement: $es_statement)
  addEditableStatementEditor(editor: [$user_id], id: $es_id)
  addEditableStatementReferences(id: $es_id, references: $ref_aray)
  addTMBMarkerResultUnits(id: $marker_id, resultUnits: [$es_id])
}
    `;
export type TmbMarkerAddResultUnitsMutationFn = ApolloReactCommon.MutationFunction<TmbMarkerAddResultUnitsMutation, TmbMarkerAddResultUnitsMutationVariables>;
export type TmbMarkerAddResultUnitsComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TmbMarkerAddResultUnitsMutation, TmbMarkerAddResultUnitsMutationVariables>, 'mutation'>;

    export const TmbMarkerAddResultUnitsComponent = (props: TmbMarkerAddResultUnitsComponentProps) => (
      <ApolloReactComponents.Mutation<TmbMarkerAddResultUnitsMutation, TmbMarkerAddResultUnitsMutationVariables> mutation={TmbMarkerAddResultUnitsDocument} {...props} />
    );
    
export type TmbMarkerAddResultUnitsProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<TmbMarkerAddResultUnitsMutation, TmbMarkerAddResultUnitsMutationVariables>
    } & TChildProps;
export function withTmbMarkerAddResultUnits<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TmbMarkerAddResultUnitsMutation,
  TmbMarkerAddResultUnitsMutationVariables,
  TmbMarkerAddResultUnitsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, TmbMarkerAddResultUnitsMutation, TmbMarkerAddResultUnitsMutationVariables, TmbMarkerAddResultUnitsProps<TChildProps, TDataName>>(TmbMarkerAddResultUnitsDocument, {
      alias: 'tmbMarkerAddResultUnits',
      ...operationOptions
    });
};

/**
 * __useTmbMarkerAddResultUnitsMutation__
 *
 * To run a mutation, you first call `useTmbMarkerAddResultUnitsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTmbMarkerAddResultUnitsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tmbMarkerAddResultUnitsMutation, { data, loading, error }] = useTmbMarkerAddResultUnitsMutation({
 *   variables: {
 *      marker_id: // value for 'marker_id'
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
export function useTmbMarkerAddResultUnitsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TmbMarkerAddResultUnitsMutation, TmbMarkerAddResultUnitsMutationVariables>) {
        return ApolloReactHooks.useMutation<TmbMarkerAddResultUnitsMutation, TmbMarkerAddResultUnitsMutationVariables>(TmbMarkerAddResultUnitsDocument, baseOptions);
      }
export type TmbMarkerAddResultUnitsMutationHookResult = ReturnType<typeof useTmbMarkerAddResultUnitsMutation>;
export type TmbMarkerAddResultUnitsMutationResult = ApolloReactCommon.MutationResult<TmbMarkerAddResultUnitsMutation>;
export type TmbMarkerAddResultUnitsMutationOptions = ApolloReactCommon.BaseMutationOptions<TmbMarkerAddResultUnitsMutation, TmbMarkerAddResultUnitsMutationVariables>;
export const TmbMarkerAddResultMinDocument = gql`
    mutation TmbMarkerAddResultMin($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $ef_float: Float!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteTMBMarkerResultMin(id: $marker_id, resultMin: [$old_es_id])
  createEditableFloat(editDate: $date, field: $es_field, id: $es_id, floatValue: $ef_float)
  addEditableFloatEditor(editor: [$user_id], id: $es_id)
  addEditableFloatReferences(id: $es_id, references: $ref_aray)
  addTMBMarkerResultMin(id: $marker_id, resultMin: [$es_id])
}
    `;
export type TmbMarkerAddResultMinMutationFn = ApolloReactCommon.MutationFunction<TmbMarkerAddResultMinMutation, TmbMarkerAddResultMinMutationVariables>;
export type TmbMarkerAddResultMinComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TmbMarkerAddResultMinMutation, TmbMarkerAddResultMinMutationVariables>, 'mutation'>;

    export const TmbMarkerAddResultMinComponent = (props: TmbMarkerAddResultMinComponentProps) => (
      <ApolloReactComponents.Mutation<TmbMarkerAddResultMinMutation, TmbMarkerAddResultMinMutationVariables> mutation={TmbMarkerAddResultMinDocument} {...props} />
    );
    
export type TmbMarkerAddResultMinProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<TmbMarkerAddResultMinMutation, TmbMarkerAddResultMinMutationVariables>
    } & TChildProps;
export function withTmbMarkerAddResultMin<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TmbMarkerAddResultMinMutation,
  TmbMarkerAddResultMinMutationVariables,
  TmbMarkerAddResultMinProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, TmbMarkerAddResultMinMutation, TmbMarkerAddResultMinMutationVariables, TmbMarkerAddResultMinProps<TChildProps, TDataName>>(TmbMarkerAddResultMinDocument, {
      alias: 'tmbMarkerAddResultMin',
      ...operationOptions
    });
};

/**
 * __useTmbMarkerAddResultMinMutation__
 *
 * To run a mutation, you first call `useTmbMarkerAddResultMinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTmbMarkerAddResultMinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tmbMarkerAddResultMinMutation, { data, loading, error }] = useTmbMarkerAddResultMinMutation({
 *   variables: {
 *      marker_id: // value for 'marker_id'
 *      old_es_id: // value for 'old_es_id'
 *      date: // value for 'date'
 *      es_field: // value for 'es_field'
 *      ef_float: // value for 'ef_float'
 *      es_id: // value for 'es_id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useTmbMarkerAddResultMinMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TmbMarkerAddResultMinMutation, TmbMarkerAddResultMinMutationVariables>) {
        return ApolloReactHooks.useMutation<TmbMarkerAddResultMinMutation, TmbMarkerAddResultMinMutationVariables>(TmbMarkerAddResultMinDocument, baseOptions);
      }
export type TmbMarkerAddResultMinMutationHookResult = ReturnType<typeof useTmbMarkerAddResultMinMutation>;
export type TmbMarkerAddResultMinMutationResult = ApolloReactCommon.MutationResult<TmbMarkerAddResultMinMutation>;
export type TmbMarkerAddResultMinMutationOptions = ApolloReactCommon.BaseMutationOptions<TmbMarkerAddResultMinMutation, TmbMarkerAddResultMinMutationVariables>;
export const TmbMarkerAddResultMaxDocument = gql`
    mutation TmbMarkerAddResultMax($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $ef_float: Float!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteTMBMarkerResultMax(id: $marker_id, resultMax: [$old_es_id])
  createEditableFloat(editDate: $date, field: $es_field, id: $es_id, floatValue: $ef_float)
  addEditableFloatEditor(editor: [$user_id], id: $es_id)
  addEditableFloatReferences(id: $es_id, references: $ref_aray)
  addTMBMarkerResultMax(id: $marker_id, resultMax: [$es_id])
}
    `;
export type TmbMarkerAddResultMaxMutationFn = ApolloReactCommon.MutationFunction<TmbMarkerAddResultMaxMutation, TmbMarkerAddResultMaxMutationVariables>;
export type TmbMarkerAddResultMaxComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TmbMarkerAddResultMaxMutation, TmbMarkerAddResultMaxMutationVariables>, 'mutation'>;

    export const TmbMarkerAddResultMaxComponent = (props: TmbMarkerAddResultMaxComponentProps) => (
      <ApolloReactComponents.Mutation<TmbMarkerAddResultMaxMutation, TmbMarkerAddResultMaxMutationVariables> mutation={TmbMarkerAddResultMaxDocument} {...props} />
    );
    
export type TmbMarkerAddResultMaxProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<TmbMarkerAddResultMaxMutation, TmbMarkerAddResultMaxMutationVariables>
    } & TChildProps;
export function withTmbMarkerAddResultMax<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TmbMarkerAddResultMaxMutation,
  TmbMarkerAddResultMaxMutationVariables,
  TmbMarkerAddResultMaxProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, TmbMarkerAddResultMaxMutation, TmbMarkerAddResultMaxMutationVariables, TmbMarkerAddResultMaxProps<TChildProps, TDataName>>(TmbMarkerAddResultMaxDocument, {
      alias: 'tmbMarkerAddResultMax',
      ...operationOptions
    });
};

/**
 * __useTmbMarkerAddResultMaxMutation__
 *
 * To run a mutation, you first call `useTmbMarkerAddResultMaxMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTmbMarkerAddResultMaxMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tmbMarkerAddResultMaxMutation, { data, loading, error }] = useTmbMarkerAddResultMaxMutation({
 *   variables: {
 *      marker_id: // value for 'marker_id'
 *      old_es_id: // value for 'old_es_id'
 *      date: // value for 'date'
 *      es_field: // value for 'es_field'
 *      ef_float: // value for 'ef_float'
 *      es_id: // value for 'es_id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useTmbMarkerAddResultMaxMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TmbMarkerAddResultMaxMutation, TmbMarkerAddResultMaxMutationVariables>) {
        return ApolloReactHooks.useMutation<TmbMarkerAddResultMaxMutation, TmbMarkerAddResultMaxMutationVariables>(TmbMarkerAddResultMaxDocument, baseOptions);
      }
export type TmbMarkerAddResultMaxMutationHookResult = ReturnType<typeof useTmbMarkerAddResultMaxMutation>;
export type TmbMarkerAddResultMaxMutationResult = ApolloReactCommon.MutationResult<TmbMarkerAddResultMaxMutation>;
export type TmbMarkerAddResultMaxMutationOptions = ApolloReactCommon.BaseMutationOptions<TmbMarkerAddResultMaxMutation, TmbMarkerAddResultMaxMutationVariables>;
export const TmbMarkerAddComparatorDocument = gql`
    mutation TmbMarkerAddComparator($marker_id: ID!, $old_es_id: ID!, $date: String!, $es_field: String!, $comp: AssayComparator!, $es_id: ID!, $user_id: ID!, $ref_aray: [ID!]!) {
  deleteTMBMarkerComparator(id: $marker_id, comparator: [$old_es_id])
  createEditableAssayComparator(editDate: $date, field: $es_field, id: $es_id, comparator: $comp)
  addEditableAssayComparatorEditor(editor: [$user_id], id: $es_id)
  addEditableAssayComparatorReferences(id: $es_id, references: $ref_aray)
  addTMBMarkerComparator(id: $marker_id, comparator: [$es_id])
}
    `;
export type TmbMarkerAddComparatorMutationFn = ApolloReactCommon.MutationFunction<TmbMarkerAddComparatorMutation, TmbMarkerAddComparatorMutationVariables>;
export type TmbMarkerAddComparatorComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<TmbMarkerAddComparatorMutation, TmbMarkerAddComparatorMutationVariables>, 'mutation'>;

    export const TmbMarkerAddComparatorComponent = (props: TmbMarkerAddComparatorComponentProps) => (
      <ApolloReactComponents.Mutation<TmbMarkerAddComparatorMutation, TmbMarkerAddComparatorMutationVariables> mutation={TmbMarkerAddComparatorDocument} {...props} />
    );
    
export type TmbMarkerAddComparatorProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: ApolloReactCommon.MutationFunction<TmbMarkerAddComparatorMutation, TmbMarkerAddComparatorMutationVariables>
    } & TChildProps;
export function withTmbMarkerAddComparator<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  TmbMarkerAddComparatorMutation,
  TmbMarkerAddComparatorMutationVariables,
  TmbMarkerAddComparatorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, TmbMarkerAddComparatorMutation, TmbMarkerAddComparatorMutationVariables, TmbMarkerAddComparatorProps<TChildProps, TDataName>>(TmbMarkerAddComparatorDocument, {
      alias: 'tmbMarkerAddComparator',
      ...operationOptions
    });
};

/**
 * __useTmbMarkerAddComparatorMutation__
 *
 * To run a mutation, you first call `useTmbMarkerAddComparatorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTmbMarkerAddComparatorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [tmbMarkerAddComparatorMutation, { data, loading, error }] = useTmbMarkerAddComparatorMutation({
 *   variables: {
 *      marker_id: // value for 'marker_id'
 *      old_es_id: // value for 'old_es_id'
 *      date: // value for 'date'
 *      es_field: // value for 'es_field'
 *      comp: // value for 'comp'
 *      es_id: // value for 'es_id'
 *      user_id: // value for 'user_id'
 *      ref_aray: // value for 'ref_aray'
 *   },
 * });
 */
export function useTmbMarkerAddComparatorMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TmbMarkerAddComparatorMutation, TmbMarkerAddComparatorMutationVariables>) {
        return ApolloReactHooks.useMutation<TmbMarkerAddComparatorMutation, TmbMarkerAddComparatorMutationVariables>(TmbMarkerAddComparatorDocument, baseOptions);
      }
export type TmbMarkerAddComparatorMutationHookResult = ReturnType<typeof useTmbMarkerAddComparatorMutation>;
export type TmbMarkerAddComparatorMutationResult = ApolloReactCommon.MutationResult<TmbMarkerAddComparatorMutation>;
export type TmbMarkerAddComparatorMutationOptions = ApolloReactCommon.BaseMutationOptions<TmbMarkerAddComparatorMutation, TmbMarkerAddComparatorMutationVariables>;
export const Tmb_MarkersDocument = gql`
    query TMB_Markers {
  TMBMarker(orderBy: id_asc) {
    id
    name {
      ...es_fields
    }
    method {
      ...es_fields
    }
    resultString {
      ...es_fields
    }
  }
}
    ${Es_FieldsFragmentDoc}`;
export type Tmb_MarkersComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<Tmb_MarkersQuery, Tmb_MarkersQueryVariables>, 'query'>;

    export const Tmb_MarkersComponent = (props: Tmb_MarkersComponentProps) => (
      <ApolloReactComponents.Query<Tmb_MarkersQuery, Tmb_MarkersQueryVariables> query={Tmb_MarkersDocument} {...props} />
    );
    
export type Tmb_MarkersProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<Tmb_MarkersQuery, Tmb_MarkersQueryVariables>
    } & TChildProps;
export function withTmb_Markers<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  Tmb_MarkersQuery,
  Tmb_MarkersQueryVariables,
  Tmb_MarkersProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, Tmb_MarkersQuery, Tmb_MarkersQueryVariables, Tmb_MarkersProps<TChildProps, TDataName>>(Tmb_MarkersDocument, {
      alias: 'tmbMarkers',
      ...operationOptions
    });
};

/**
 * __useTmb_MarkersQuery__
 *
 * To run a query within a React component, call `useTmb_MarkersQuery` and pass it any options that fit your needs.
 * When your component renders, `useTmb_MarkersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTmb_MarkersQuery({
 *   variables: {
 *   },
 * });
 */
export function useTmb_MarkersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Tmb_MarkersQuery, Tmb_MarkersQueryVariables>) {
        return ApolloReactHooks.useQuery<Tmb_MarkersQuery, Tmb_MarkersQueryVariables>(Tmb_MarkersDocument, baseOptions);
      }
export function useTmb_MarkersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Tmb_MarkersQuery, Tmb_MarkersQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Tmb_MarkersQuery, Tmb_MarkersQueryVariables>(Tmb_MarkersDocument, baseOptions);
        }
export type Tmb_MarkersQueryHookResult = ReturnType<typeof useTmb_MarkersQuery>;
export type Tmb_MarkersLazyQueryHookResult = ReturnType<typeof useTmb_MarkersLazyQuery>;
export type Tmb_MarkersQueryResult = ApolloReactCommon.QueryResult<Tmb_MarkersQuery, Tmb_MarkersQueryVariables>;
export const EditableAssayComparatorDocument = gql`
    query EditableAssayComparator($field: String) {
  EditableAssayComparator(field: $field, orderBy: editDate_desc) {
    field
    comparator
    editDate
    editor {
      name
    }
    references {
      shortReference
    }
  }
}
    `;
export type EditableAssayComparatorComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EditableAssayComparatorQuery, EditableAssayComparatorQueryVariables>, 'query'>;

    export const EditableAssayComparatorComponent = (props: EditableAssayComparatorComponentProps) => (
      <ApolloReactComponents.Query<EditableAssayComparatorQuery, EditableAssayComparatorQueryVariables> query={EditableAssayComparatorDocument} {...props} />
    );
    
export type EditableAssayComparatorProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EditableAssayComparatorQuery, EditableAssayComparatorQueryVariables>
    } & TChildProps;
export function withEditableAssayComparator<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditableAssayComparatorQuery,
  EditableAssayComparatorQueryVariables,
  EditableAssayComparatorProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EditableAssayComparatorQuery, EditableAssayComparatorQueryVariables, EditableAssayComparatorProps<TChildProps, TDataName>>(EditableAssayComparatorDocument, {
      alias: 'editableAssayComparator',
      ...operationOptions
    });
};

/**
 * __useEditableAssayComparatorQuery__
 *
 * To run a query within a React component, call `useEditableAssayComparatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditableAssayComparatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditableAssayComparatorQuery({
 *   variables: {
 *      field: // value for 'field'
 *   },
 * });
 */
export function useEditableAssayComparatorQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditableAssayComparatorQuery, EditableAssayComparatorQueryVariables>) {
        return ApolloReactHooks.useQuery<EditableAssayComparatorQuery, EditableAssayComparatorQueryVariables>(EditableAssayComparatorDocument, baseOptions);
      }
export function useEditableAssayComparatorLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditableAssayComparatorQuery, EditableAssayComparatorQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditableAssayComparatorQuery, EditableAssayComparatorQueryVariables>(EditableAssayComparatorDocument, baseOptions);
        }
export type EditableAssayComparatorQueryHookResult = ReturnType<typeof useEditableAssayComparatorQuery>;
export type EditableAssayComparatorLazyQueryHookResult = ReturnType<typeof useEditableAssayComparatorLazyQuery>;
export type EditableAssayComparatorQueryResult = ApolloReactCommon.QueryResult<EditableAssayComparatorQuery, EditableAssayComparatorQueryVariables>;
export const EditableCopyChangeDocument = gql`
    query EditableCopyChange($field: String) {
  EditableCopyChange(field: $field, orderBy: editDate_desc) {
    field
    cnvType
    editDate
    editor {
      name
    }
    references {
      shortReference
    }
  }
}
    `;
export type EditableCopyChangeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EditableCopyChangeQuery, EditableCopyChangeQueryVariables>, 'query'>;

    export const EditableCopyChangeComponent = (props: EditableCopyChangeComponentProps) => (
      <ApolloReactComponents.Query<EditableCopyChangeQuery, EditableCopyChangeQueryVariables> query={EditableCopyChangeDocument} {...props} />
    );
    
export type EditableCopyChangeProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EditableCopyChangeQuery, EditableCopyChangeQueryVariables>
    } & TChildProps;
export function withEditableCopyChange<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditableCopyChangeQuery,
  EditableCopyChangeQueryVariables,
  EditableCopyChangeProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EditableCopyChangeQuery, EditableCopyChangeQueryVariables, EditableCopyChangeProps<TChildProps, TDataName>>(EditableCopyChangeDocument, {
      alias: 'editableCopyChange',
      ...operationOptions
    });
};

/**
 * __useEditableCopyChangeQuery__
 *
 * To run a query within a React component, call `useEditableCopyChangeQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditableCopyChangeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditableCopyChangeQuery({
 *   variables: {
 *      field: // value for 'field'
 *   },
 * });
 */
export function useEditableCopyChangeQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditableCopyChangeQuery, EditableCopyChangeQueryVariables>) {
        return ApolloReactHooks.useQuery<EditableCopyChangeQuery, EditableCopyChangeQueryVariables>(EditableCopyChangeDocument, baseOptions);
      }
export function useEditableCopyChangeLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditableCopyChangeQuery, EditableCopyChangeQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditableCopyChangeQuery, EditableCopyChangeQueryVariables>(EditableCopyChangeDocument, baseOptions);
        }
export type EditableCopyChangeQueryHookResult = ReturnType<typeof useEditableCopyChangeQuery>;
export type EditableCopyChangeLazyQueryHookResult = ReturnType<typeof useEditableCopyChangeLazyQuery>;
export type EditableCopyChangeQueryResult = ApolloReactCommon.QueryResult<EditableCopyChangeQuery, EditableCopyChangeQueryVariables>;
export const EditableBooleanDocument = gql`
    query EditableBoolean($field: String) {
  EditableBoolean(field: $field, orderBy: editDate_desc) {
    field
    booleanValue
    editDate
    editor {
      name
    }
    references {
      shortReference
    }
  }
}
    `;
export type EditableBooleanComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EditableBooleanQuery, EditableBooleanQueryVariables>, 'query'>;

    export const EditableBooleanComponent = (props: EditableBooleanComponentProps) => (
      <ApolloReactComponents.Query<EditableBooleanQuery, EditableBooleanQueryVariables> query={EditableBooleanDocument} {...props} />
    );
    
export type EditableBooleanProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EditableBooleanQuery, EditableBooleanQueryVariables>
    } & TChildProps;
export function withEditableBoolean<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditableBooleanQuery,
  EditableBooleanQueryVariables,
  EditableBooleanProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EditableBooleanQuery, EditableBooleanQueryVariables, EditableBooleanProps<TChildProps, TDataName>>(EditableBooleanDocument, {
      alias: 'editableBoolean',
      ...operationOptions
    });
};

/**
 * __useEditableBooleanQuery__
 *
 * To run a query within a React component, call `useEditableBooleanQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditableBooleanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditableBooleanQuery({
 *   variables: {
 *      field: // value for 'field'
 *   },
 * });
 */
export function useEditableBooleanQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditableBooleanQuery, EditableBooleanQueryVariables>) {
        return ApolloReactHooks.useQuery<EditableBooleanQuery, EditableBooleanQueryVariables>(EditableBooleanDocument, baseOptions);
      }
export function useEditableBooleanLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditableBooleanQuery, EditableBooleanQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditableBooleanQuery, EditableBooleanQueryVariables>(EditableBooleanDocument, baseOptions);
        }
export type EditableBooleanQueryHookResult = ReturnType<typeof useEditableBooleanQuery>;
export type EditableBooleanLazyQueryHookResult = ReturnType<typeof useEditableBooleanLazyQuery>;
export type EditableBooleanQueryResult = ApolloReactCommon.QueryResult<EditableBooleanQuery, EditableBooleanQueryVariables>;
export const EditableFloatDocument = gql`
    query EditableFloat($field: String) {
  EditableFloat(field: $field, orderBy: editDate_desc) {
    field
    floatValue
    editDate
    editor {
      name
    }
    references {
      shortReference
    }
  }
}
    `;
export type EditableFloatComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EditableFloatQuery, EditableFloatQueryVariables>, 'query'>;

    export const EditableFloatComponent = (props: EditableFloatComponentProps) => (
      <ApolloReactComponents.Query<EditableFloatQuery, EditableFloatQueryVariables> query={EditableFloatDocument} {...props} />
    );
    
export type EditableFloatProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EditableFloatQuery, EditableFloatQueryVariables>
    } & TChildProps;
export function withEditableFloat<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditableFloatQuery,
  EditableFloatQueryVariables,
  EditableFloatProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EditableFloatQuery, EditableFloatQueryVariables, EditableFloatProps<TChildProps, TDataName>>(EditableFloatDocument, {
      alias: 'editableFloat',
      ...operationOptions
    });
};

/**
 * __useEditableFloatQuery__
 *
 * To run a query within a React component, call `useEditableFloatQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditableFloatQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditableFloatQuery({
 *   variables: {
 *      field: // value for 'field'
 *   },
 * });
 */
export function useEditableFloatQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditableFloatQuery, EditableFloatQueryVariables>) {
        return ApolloReactHooks.useQuery<EditableFloatQuery, EditableFloatQueryVariables>(EditableFloatDocument, baseOptions);
      }
export function useEditableFloatLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditableFloatQuery, EditableFloatQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditableFloatQuery, EditableFloatQueryVariables>(EditableFloatDocument, baseOptions);
        }
export type EditableFloatQueryHookResult = ReturnType<typeof useEditableFloatQuery>;
export type EditableFloatLazyQueryHookResult = ReturnType<typeof useEditableFloatLazyQuery>;
export type EditableFloatQueryResult = ApolloReactCommon.QueryResult<EditableFloatQuery, EditableFloatQueryVariables>;
export const EditableIntDocument = gql`
    query EditableInt($field: String) {
  EditableInt(field: $field, orderBy: editDate_desc) {
    field
    intValue
    editDate
    editor {
      name
    }
    references {
      shortReference
    }
  }
}
    `;
export type EditableIntComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EditableIntQuery, EditableIntQueryVariables>, 'query'>;

    export const EditableIntComponent = (props: EditableIntComponentProps) => (
      <ApolloReactComponents.Query<EditableIntQuery, EditableIntQueryVariables> query={EditableIntDocument} {...props} />
    );
    
export type EditableIntProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EditableIntQuery, EditableIntQueryVariables>
    } & TChildProps;
export function withEditableInt<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditableIntQuery,
  EditableIntQueryVariables,
  EditableIntProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EditableIntQuery, EditableIntQueryVariables, EditableIntProps<TChildProps, TDataName>>(EditableIntDocument, {
      alias: 'editableInt',
      ...operationOptions
    });
};

/**
 * __useEditableIntQuery__
 *
 * To run a query within a React component, call `useEditableIntQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditableIntQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditableIntQuery({
 *   variables: {
 *      field: // value for 'field'
 *   },
 * });
 */
export function useEditableIntQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditableIntQuery, EditableIntQueryVariables>) {
        return ApolloReactHooks.useQuery<EditableIntQuery, EditableIntQueryVariables>(EditableIntDocument, baseOptions);
      }
export function useEditableIntLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditableIntQuery, EditableIntQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditableIntQuery, EditableIntQueryVariables>(EditableIntDocument, baseOptions);
        }
export type EditableIntQueryHookResult = ReturnType<typeof useEditableIntQuery>;
export type EditableIntLazyQueryHookResult = ReturnType<typeof useEditableIntLazyQuery>;
export type EditableIntQueryResult = ApolloReactCommon.QueryResult<EditableIntQuery, EditableIntQueryVariables>;
export const EditableOmniGeneReferenceDocument = gql`
    query EditableOmniGeneReference($field: String) {
  EditableOmniGeneReference(field: $field, orderBy: editDate_desc) {
    field
    gene {
      name
    }
    editDate
    editor {
      name
    }
    references {
      shortReference
    }
  }
}
    `;
export type EditableOmniGeneReferenceComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EditableOmniGeneReferenceQuery, EditableOmniGeneReferenceQueryVariables>, 'query'>;

    export const EditableOmniGeneReferenceComponent = (props: EditableOmniGeneReferenceComponentProps) => (
      <ApolloReactComponents.Query<EditableOmniGeneReferenceQuery, EditableOmniGeneReferenceQueryVariables> query={EditableOmniGeneReferenceDocument} {...props} />
    );
    
export type EditableOmniGeneReferenceProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EditableOmniGeneReferenceQuery, EditableOmniGeneReferenceQueryVariables>
    } & TChildProps;
export function withEditableOmniGeneReference<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditableOmniGeneReferenceQuery,
  EditableOmniGeneReferenceQueryVariables,
  EditableOmniGeneReferenceProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EditableOmniGeneReferenceQuery, EditableOmniGeneReferenceQueryVariables, EditableOmniGeneReferenceProps<TChildProps, TDataName>>(EditableOmniGeneReferenceDocument, {
      alias: 'editableOmniGeneReference',
      ...operationOptions
    });
};

/**
 * __useEditableOmniGeneReferenceQuery__
 *
 * To run a query within a React component, call `useEditableOmniGeneReferenceQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditableOmniGeneReferenceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditableOmniGeneReferenceQuery({
 *   variables: {
 *      field: // value for 'field'
 *   },
 * });
 */
export function useEditableOmniGeneReferenceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditableOmniGeneReferenceQuery, EditableOmniGeneReferenceQueryVariables>) {
        return ApolloReactHooks.useQuery<EditableOmniGeneReferenceQuery, EditableOmniGeneReferenceQueryVariables>(EditableOmniGeneReferenceDocument, baseOptions);
      }
export function useEditableOmniGeneReferenceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditableOmniGeneReferenceQuery, EditableOmniGeneReferenceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditableOmniGeneReferenceQuery, EditableOmniGeneReferenceQueryVariables>(EditableOmniGeneReferenceDocument, baseOptions);
        }
export type EditableOmniGeneReferenceQueryHookResult = ReturnType<typeof useEditableOmniGeneReferenceQuery>;
export type EditableOmniGeneReferenceLazyQueryHookResult = ReturnType<typeof useEditableOmniGeneReferenceLazyQuery>;
export type EditableOmniGeneReferenceQueryResult = ApolloReactCommon.QueryResult<EditableOmniGeneReferenceQuery, EditableOmniGeneReferenceQueryVariables>;
export const EditableStatementDocument = gql`
    query EditableStatement($field: String) {
  EditableStatement(field: $field, orderBy: editDate_desc) {
    field
    statement
    editDate
    editor {
      name
    }
    references {
      shortReference
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
    firstPage
    lastPage
    publicationYear
    abstract
    authors {
      id
      surname
      firstInitial
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
export const EditableProteinEffectDocument = gql`
    query EditableProteinEffect($field: String) {
  EditableProteinEffect(field: $field, orderBy: editDate_desc) {
    field
    proteinEffect
    editDate
    editor {
      name
    }
    references {
      shortReference
    }
  }
}
    `;
export type EditableProteinEffectComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EditableProteinEffectQuery, EditableProteinEffectQueryVariables>, 'query'>;

    export const EditableProteinEffectComponent = (props: EditableProteinEffectComponentProps) => (
      <ApolloReactComponents.Query<EditableProteinEffectQuery, EditableProteinEffectQueryVariables> query={EditableProteinEffectDocument} {...props} />
    );
    
export type EditableProteinEffectProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EditableProteinEffectQuery, EditableProteinEffectQueryVariables>
    } & TChildProps;
export function withEditableProteinEffect<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditableProteinEffectQuery,
  EditableProteinEffectQueryVariables,
  EditableProteinEffectProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EditableProteinEffectQuery, EditableProteinEffectQueryVariables, EditableProteinEffectProps<TChildProps, TDataName>>(EditableProteinEffectDocument, {
      alias: 'editableProteinEffect',
      ...operationOptions
    });
};

/**
 * __useEditableProteinEffectQuery__
 *
 * To run a query within a React component, call `useEditableProteinEffectQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditableProteinEffectQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditableProteinEffectQuery({
 *   variables: {
 *      field: // value for 'field'
 *   },
 * });
 */
export function useEditableProteinEffectQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditableProteinEffectQuery, EditableProteinEffectQueryVariables>) {
        return ApolloReactHooks.useQuery<EditableProteinEffectQuery, EditableProteinEffectQueryVariables>(EditableProteinEffectDocument, baseOptions);
      }
export function useEditableProteinEffectLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditableProteinEffectQuery, EditableProteinEffectQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditableProteinEffectQuery, EditableProteinEffectQueryVariables>(EditableProteinEffectDocument, baseOptions);
        }
export type EditableProteinEffectQueryHookResult = ReturnType<typeof useEditableProteinEffectQuery>;
export type EditableProteinEffectLazyQueryHookResult = ReturnType<typeof useEditableProteinEffectLazyQuery>;
export type EditableProteinEffectQueryResult = ApolloReactCommon.QueryResult<EditableProteinEffectQuery, EditableProteinEffectQueryVariables>;
export const EditableStringListDocument = gql`
    query EditableStringList($field: String) {
  EditableStringList(field: $field, orderBy: editDate_desc) {
    field
    stringList
    editDate
    editor {
      name
    }
  }
}
    `;
export type EditableStringListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<EditableStringListQuery, EditableStringListQueryVariables>, 'query'>;

    export const EditableStringListComponent = (props: EditableStringListComponentProps) => (
      <ApolloReactComponents.Query<EditableStringListQuery, EditableStringListQueryVariables> query={EditableStringListDocument} {...props} />
    );
    
export type EditableStringListProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<EditableStringListQuery, EditableStringListQueryVariables>
    } & TChildProps;
export function withEditableStringList<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  EditableStringListQuery,
  EditableStringListQueryVariables,
  EditableStringListProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, EditableStringListQuery, EditableStringListQueryVariables, EditableStringListProps<TChildProps, TDataName>>(EditableStringListDocument, {
      alias: 'editableStringList',
      ...operationOptions
    });
};

/**
 * __useEditableStringListQuery__
 *
 * To run a query within a React component, call `useEditableStringListQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditableStringListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditableStringListQuery({
 *   variables: {
 *      field: // value for 'field'
 *   },
 * });
 */
export function useEditableStringListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<EditableStringListQuery, EditableStringListQueryVariables>) {
        return ApolloReactHooks.useQuery<EditableStringListQuery, EditableStringListQueryVariables>(EditableStringListDocument, baseOptions);
      }
export function useEditableStringListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditableStringListQuery, EditableStringListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<EditableStringListQuery, EditableStringListQueryVariables>(EditableStringListDocument, baseOptions);
        }
export type EditableStringListQueryHookResult = ReturnType<typeof useEditableStringListQuery>;
export type EditableStringListLazyQueryHookResult = ReturnType<typeof useEditableStringListLazyQuery>;
export type EditableStringListQueryResult = ApolloReactCommon.QueryResult<EditableStringListQuery, EditableStringListQueryVariables>;