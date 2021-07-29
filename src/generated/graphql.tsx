import gql from 'graphql-tag';
import * as React from 'react';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  idno: Scalars['String'];
  href: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  content: Scalars['String'];
  comments_count: Scalars['String'];
  public_reactions_count: Scalars['String'];
  positive_reactions_count: Scalars['String'];
  avatar: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Articles = {
  __typename?: 'Articles';
  articles?: Maybe<Array<Article>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Interest = {
  __typename?: 'Interest';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  interest: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
};

export type Language = {
  __typename?: 'Language';
  id: Scalars['Int'];
  language: Scalars['String'];
  value: Scalars['String'];
  color: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: UserResponse;
  login: UserResponse;
  patchProfile: UserResponse;
  logout: Scalars['Boolean'];
  postBookmark: Response;
  deleteBookmark: Response;
  postRepository: Repository;
};


export type MutationRegisterArgs = {
  options: InputRegistration;
};


export type MutationLoginArgs = {
  options: InputLogin;
};


export type MutationPatchProfileArgs = {
  options: InputPatchUser;
};


export type MutationPostBookmarkArgs = {
  input: InputBookmark;
};


export type MutationDeleteBookmarkArgs = {
  id: Scalars['Int'];
};


export type MutationPostRepositoryArgs = {
  input: InputRepository;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getUserArticles?: Maybe<Articles>;
  getLanguages: Array<Language>;
};

export type Repository = {
  __typename?: 'Repository';
  id: Scalars['Int'];
  userId: Scalars['Int'];
  href: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Response = {
  __typename?: 'Response';
  code: Scalars['Float'];
  message: Scalars['String'];
  data?: Maybe<Article>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  interests: Array<Interest>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type InputBookmark = {
  href: Scalars['String'];
  idno: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  content: Scalars['String'];
  comments_count: Scalars['Float'];
  public_reactions_count: Scalars['Float'];
  positive_reactions_count: Scalars['Float'];
  avatar: Scalars['String'];
};

export type InputLogin = {
  tokenId: Scalars['String'];
  email: Scalars['String'];
};

export type InputPatchUser = {
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  interests: Array<Scalars['String']>;
};

export type InputRegistration = {
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
};

export type InputRepository = {
  title: Scalars['String'];
  href: Scalars['String'];
  description: Scalars['String'];
};

export type ArticleFragment = (
  { __typename?: 'Article' }
  & Pick<Article, 'id' | 'href' | 'idno' | 'title' | 'description' | 'content' | 'comments_count' | 'public_reactions_count' | 'positive_reactions_count' | 'avatar'>
);

export type InterestFragment = (
  { __typename?: 'Interest' }
  & Pick<Interest, 'id' | 'interest'>
);

export type RepositoryFragment = (
  { __typename?: 'Repository' }
  & Pick<Repository, 'id' | 'title' | 'description' | 'href'>
);

export type ResponseFragment = (
  { __typename?: 'Response' }
  & Pick<Response, 'code' | 'message'>
);

export type UserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'first_name' | 'last_name'>
);

export type PostBookmarkMutationVariables = Exact<{
  input: InputBookmark;
}>;


export type PostBookmarkMutation = (
  { __typename?: 'Mutation' }
  & { postBookmark: (
    { __typename?: 'Response' }
    & Pick<Response, 'code' | 'message'>
    & { data?: Maybe<(
      { __typename?: 'Article' }
      & ArticleFragment
    )> }
  ) }
);

export type DeleteBookmarkMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteBookmarkMutation = (
  { __typename?: 'Mutation' }
  & { deleteBookmark: (
    { __typename?: 'Response' }
    & Pick<Response, 'code' | 'message'>
    & { data?: Maybe<(
      { __typename?: 'Article' }
      & ArticleFragment
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  options: InputLogin;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & { interests: Array<(
        { __typename?: 'Interest' }
        & InterestFragment
      )> }
      & UserFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type PatchProfileMutationVariables = Exact<{
  options: InputPatchUser;
}>;


export type PatchProfileMutation = (
  { __typename?: 'Mutation' }
  & { patchProfile: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & UserFragment
    )> }
  ) }
);

export type PostRepositoryMutationVariables = Exact<{
  input: InputRepository;
}>;


export type PostRepositoryMutation = (
  { __typename?: 'Mutation' }
  & { postRepository: (
    { __typename?: 'Repository' }
    & RepositoryFragment
  ) }
);

export type GetUserArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserArticlesQuery = (
  { __typename?: 'Query' }
  & { getUserArticles?: Maybe<(
    { __typename?: 'Articles' }
    & { articles?: Maybe<Array<(
      { __typename?: 'Article' }
      & ArticleFragment
    )>> }
  )> }
);

export type GetLanguageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLanguageQuery = (
  { __typename?: 'Query' }
  & { getLanguages: Array<(
    { __typename?: 'Language' }
    & Pick<Language, 'id' | 'language' | 'color' | 'value'>
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & { interests: Array<(
      { __typename?: 'Interest' }
      & InterestFragment
    )> }
    & UserFragment
  )> }
);

export const ArticleFragmentDoc = gql`
    fragment Article on Article {
  id
  href
  idno
  title
  description
  content
  comments_count
  public_reactions_count
  positive_reactions_count
  avatar
}
    `;
export const InterestFragmentDoc = gql`
    fragment Interest on Interest {
  id
  interest
}
    `;
export const RepositoryFragmentDoc = gql`
    fragment Repository on Repository {
  id
  title
  description
  href
}
    `;
export const ResponseFragmentDoc = gql`
    fragment Response on Response {
  code
  message
}
    `;
export const UserFragmentDoc = gql`
    fragment User on User {
  id
  email
  first_name
  last_name
}
    `;
export const PostBookmarkDocument = gql`
    mutation PostBookmark($input: inputBookmark!) {
  postBookmark(input: $input) {
    code
    message
    data {
      ...Article
    }
  }
}
    ${ArticleFragmentDoc}`;

export const PostBookmarkComponent = (props: Omit<Urql.MutationProps<PostBookmarkMutation, PostBookmarkMutationVariables>, 'query'> & { variables?: PostBookmarkMutationVariables }) => (
  <Urql.Mutation {...props} query={PostBookmarkDocument} />
);


export function usePostBookmarkMutation() {
  return Urql.useMutation<PostBookmarkMutation, PostBookmarkMutationVariables>(PostBookmarkDocument);
};
export const DeleteBookmarkDocument = gql`
    mutation DeleteBookmark($id: Int!) {
  deleteBookmark(id: $id) {
    code
    message
    data {
      ...Article
    }
  }
}
    ${ArticleFragmentDoc}`;

export const DeleteBookmarkComponent = (props: Omit<Urql.MutationProps<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>, 'query'> & { variables?: DeleteBookmarkMutationVariables }) => (
  <Urql.Mutation {...props} query={DeleteBookmarkDocument} />
);


export function useDeleteBookmarkMutation() {
  return Urql.useMutation<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>(DeleteBookmarkDocument);
};
export const LoginDocument = gql`
    mutation Login($options: inputLogin!) {
  login(options: $options) {
    user {
      ...User
      interests {
        ...Interest
      }
    }
    errors {
      field
      message
    }
  }
}
    ${UserFragmentDoc}
${InterestFragmentDoc}`;

export const LoginComponent = (props: Omit<Urql.MutationProps<LoginMutation, LoginMutationVariables>, 'query'> & { variables?: LoginMutationVariables }) => (
  <Urql.Mutation {...props} query={LoginDocument} />
);


export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export const LogoutComponent = (props: Omit<Urql.MutationProps<LogoutMutation, LogoutMutationVariables>, 'query'> & { variables?: LogoutMutationVariables }) => (
  <Urql.Mutation {...props} query={LogoutDocument} />
);


export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const PatchProfileDocument = gql`
    mutation PatchProfile($options: inputPatchUser!) {
  patchProfile(options: $options) {
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;

export const PatchProfileComponent = (props: Omit<Urql.MutationProps<PatchProfileMutation, PatchProfileMutationVariables>, 'query'> & { variables?: PatchProfileMutationVariables }) => (
  <Urql.Mutation {...props} query={PatchProfileDocument} />
);


export function usePatchProfileMutation() {
  return Urql.useMutation<PatchProfileMutation, PatchProfileMutationVariables>(PatchProfileDocument);
};
export const PostRepositoryDocument = gql`
    mutation PostRepository($input: inputRepository!) {
  postRepository(input: $input) {
    ...Repository
  }
}
    ${RepositoryFragmentDoc}`;

export const PostRepositoryComponent = (props: Omit<Urql.MutationProps<PostRepositoryMutation, PostRepositoryMutationVariables>, 'query'> & { variables?: PostRepositoryMutationVariables }) => (
  <Urql.Mutation {...props} query={PostRepositoryDocument} />
);


export function usePostRepositoryMutation() {
  return Urql.useMutation<PostRepositoryMutation, PostRepositoryMutationVariables>(PostRepositoryDocument);
};
export const GetUserArticlesDocument = gql`
    query GetUserArticles {
  getUserArticles {
    articles {
      ...Article
    }
  }
}
    ${ArticleFragmentDoc}`;

export const GetUserArticlesComponent = (props: Omit<Urql.QueryProps<GetUserArticlesQuery, GetUserArticlesQueryVariables>, 'query'> & { variables?: GetUserArticlesQueryVariables }) => (
  <Urql.Query {...props} query={GetUserArticlesDocument} />
);


export function useGetUserArticlesQuery(options: Omit<Urql.UseQueryArgs<GetUserArticlesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserArticlesQuery>({ query: GetUserArticlesDocument, ...options });
};
export const GetLanguageDocument = gql`
    query GetLanguage {
  getLanguages {
    id
    language
    color
    value
  }
}
    `;

export const GetLanguageComponent = (props: Omit<Urql.QueryProps<GetLanguageQuery, GetLanguageQueryVariables>, 'query'> & { variables?: GetLanguageQueryVariables }) => (
  <Urql.Query {...props} query={GetLanguageDocument} />
);


export function useGetLanguageQuery(options: Omit<Urql.UseQueryArgs<GetLanguageQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetLanguageQuery>({ query: GetLanguageDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...User
    interests {
      ...Interest
    }
  }
}
    ${UserFragmentDoc}
${InterestFragmentDoc}`;

export const MeComponent = (props: Omit<Urql.QueryProps<MeQuery, MeQueryVariables>, 'query'> & { variables?: MeQueryVariables }) => (
  <Urql.Query {...props} query={MeDocument} />
);


export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};