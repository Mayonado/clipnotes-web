import { cacheExchange } from '@urql/exchange-graphcache';
import { createClient, dedupExchange, fetchExchange } from 'urql';
import {
  GetUserArticlesDocument,
  GetUserArticlesQuery,
  LoginMutation,
  MeDocument,
  MeQuery,
  PostBookmarkMutation,
  DeleteBookmarkMutation,
} from '../generated/graphql';
import { betterUpdateQuery } from './betterUpdateQuery';

export const createUrqlClient = createClient({
  url: `${process.env.REACT_APP_API_URL}/graphql`,
  fetchOptions: {
    credentials: 'include',
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          //   logout: (_result, args, cache, info) => {
          //     betterUpdateQuery<LogoutMutation, MeQuery>(
          //       cache,
          //       { query: MeDocument },
          //       _result,
          //       () => ({ me: null })
          //     );
          //   },
          login: (_result, args, cache, info) => {
            betterUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  console.log(result.login.user);
                  return {
                    me: result.login.user,
                  };
                }
              }
            );
          },
          postBookmark: (_result: any, args, cache, info) => {
            betterUpdateQuery<PostBookmarkMutation, GetUserArticlesQuery>(
              cache,
              { query: GetUserArticlesDocument },
              _result,
              (res: any, query: any) => {
                if (_result?.postBookmark.data) {
                  cache.updateQuery(
                    { query: GetUserArticlesDocument },
                    (datas: any) => {
                      datas.getUserArticles.articles.push(
                        _result?.postBookmark?.data
                      );
                      return datas;
                    }
                  );
                }
                return {
                  getUserArticles: {
                    articles: [
                      ...query.getUserArticles.articles,
                      res.postBookmark.data,
                    ],
                  },
                };
              }
            );
          },

          deleteBookmark: (_result: any, args, cache, info) => {
            betterUpdateQuery<DeleteBookmarkMutation, GetUserArticlesQuery>(
              cache,
              { query: GetUserArticlesDocument },
              _result,
              (res: any, query: any) => {
                if (_result?.deleteBookmark?.data) {
                  cache.updateQuery(
                    { query: GetUserArticlesDocument },
                    (datas: any) => {
                      // datas.getUserArticles.articles.push(
                      //   _result?.postBookmark?.data
                      // );
                      const newDataSet = datas.getUserArticles.articles.filter(
                        (article: any) =>
                          article.id !== _result?.deleteBookmark?.data?.id
                      );
                      datas.getUserArticles.articles = newDataSet;
                      return datas;
                    }
                  );
                }
                return {
                  getUserArticles: {
                    articles: query.getUserArticles.articles.filter(
                      (article: any) =>
                        article.id !== _result?.deleteBookmark?.data?.id
                    ),
                  },
                };
              }
            );
          },

          // postBookmark: (_result, args, cache, info) => {
          //   betterUpdateQuery<PostBookmarkMutation, GetUserBookmarksQuery>)
          //   cache,
          //   { query:  GetUserBookmarksDocument },
          //   _result,
          //   (result, query) => {
          //   }
          // }
          //   register: (_result, args, cache, info) => {
          //     betterUpdateQuery<RegisterMutation, MeQuery>(
          //       cache,
          //       { query: MeDocument },
          //       _result,
          //       (result, query) => {
          //         if (result.register.errors) {
          //           return query;
          //         } else {
          //           return {
          //             me: result.register.user,
          //           };
          //         }
          //       }
          //     );
          //   },
        },
      },
    }),
    fetchExchange,
  ],
});
