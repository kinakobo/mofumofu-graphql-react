/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateLinkMutation
// ====================================================

export interface CreateLinkMutation_createLink {
  __typename: "Link";
  id: string;
  url: string;
  description: string;
}

export interface CreateLinkMutation {
  createLink: CreateLinkMutation_createLink;
}

export interface CreateLinkMutationVariables {
  url: string;
  description: string;
}
