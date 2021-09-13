export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type BoardReturn = {
  __typename?: 'BoardReturn';
  contents?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  like?: Maybe<Scalars['Int']>;
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  writer?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CreateProductInput = {
  detail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard?: Maybe<Return>;
  createProduct?: Maybe<Return>;
  createProfile?: Maybe<Return>;
  deleteBoard?: Maybe<Return>;
  deleteProduct?: Maybe<Return>;
  deleteProfile?: Maybe<Return>;
  updateBoard?: Maybe<Return>;
  updateProduct?: Maybe<Return>;
  updateProfile?: Maybe<Return>;
};


export type MutationCreateBoardArgs = {
  contents?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  writer?: Maybe<Scalars['String']>;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
  seller?: Maybe<Scalars['String']>;
};


export type MutationCreateProfileArgs = {
  age?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
};


export type MutationDeleteBoardArgs = {
  number?: Maybe<Scalars['Int']>;
};


export type MutationDeleteProductArgs = {
  productId?: Maybe<Scalars['ID']>;
};


export type MutationDeleteProfileArgs = {
  name?: Maybe<Scalars['String']>;
};


export type MutationUpdateBoardArgs = {
  contents?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  writer?: Maybe<Scalars['String']>;
};


export type MutationUpdateProductArgs = {
  productId?: Maybe<Scalars['ID']>;
  updateProductInput: UpdateProductInput;
};


export type MutationUpdateProfileArgs = {
  age?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  school?: Maybe<Scalars['String']>;
};

export type ProductReturn = {
  __typename?: 'ProductReturn';
  _id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['Date']>;
  detail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
  seller?: Maybe<Scalars['String']>;
};

export type ProfileReturn = {
  __typename?: 'ProfileReturn';
  age?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  school?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  fetchBoard?: Maybe<BoardReturn>;
  fetchBoards?: Maybe<Array<BoardReturn>>;
  fetchBoardsCount: Scalars['Int'];
  fetchProduct?: Maybe<ProductReturn>;
  fetchProducts?: Maybe<Array<ProductReturn>>;
  fetchProductsCount: Scalars['Int'];
  fetchProfile?: Maybe<ProfileReturn>;
  fetchProfiles?: Maybe<Array<ProfileReturn>>;
  fetchProfilesCount: Scalars['Int'];
};


export type QueryFetchBoardArgs = {
  number?: Maybe<Scalars['Int']>;
};


export type QueryFetchBoardsArgs = {
  page?: Maybe<Scalars['Int']>;
};


export type QueryFetchProductArgs = {
  productId?: Maybe<Scalars['ID']>;
};


export type QueryFetchProductsArgs = {
  page?: Maybe<Scalars['Int']>;
};


export type QueryFetchProfileArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryFetchProfilesArgs = {
  page?: Maybe<Scalars['Int']>;
};

export type Return = {
  __typename?: 'Return';
  _id?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type UpdateProductInput = {
  detail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};
