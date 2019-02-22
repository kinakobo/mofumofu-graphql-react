/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllLinksQuery
// ====================================================

export interface AllLinksQuery_allLinks {
  __typename: "Link";
  id: string;
  url: string;
  description: string;
}

export interface AllLinksQuery {
  allLinks: AllLinksQuery_allLinks[];
}
