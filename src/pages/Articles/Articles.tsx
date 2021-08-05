import React, { useState, useEffect, useMemo } from 'react';
import { PageHeader, Divider, Typography } from 'antd';
import moment from 'moment';
import { httpAxios } from '../../utils';
import { List, Modal, Loader } from '../../components';
import {
  usePostBookmarkMutation,
  useGetUserArticlesQuery,
  GetUserArticlesDocument,
  useMeQuery,
} from '../../generated/graphql';
import _ from 'lodash';

const { Title } = Typography;

interface ArticlesProps {}

export const Articles: React.FC<ArticlesProps> = ({}) => {
  // const [{fetching: logoutFetching},logout] = useLogoutMutation();
  const [{ data: meData }] = useMeQuery();
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [, postBookmark] = usePostBookmarkMutation();
  const [
    { data: bookmarkedArticles, fetching: useArticlesFetching },
  ] = useGetUserArticlesQuery();
  const [articles, setArticles] = useState([]);

  const getArticles = async (page: any | null | undefined = 1) => {
    // display modal
    setLoading(true);
    const articles = await httpAxios.get(
      `/get-articles?page=${page}&userId=${meData?.me?.id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (articles && articles.data) {
      const articlesData = articles?.data?.articles.map((article: any) => {
        return {
          href: article.url,
          title: article.title,
          avatar: article?.user?.profile_image,
          description: `${article?.user?.name} - ${moment(
            article.published_at
          ).format('MMMM DD, YYYY')}`,
          content: article.description,
          user: {
            ...article.user,
          },
          comments_count: article.comments_count,
          tag_list: article.tag_list,
          public_reactions_count: article.public_reactions_count,
          positive_reactions_count: article.positive_reactions_count,
          ...article,
        };
      });
      setArticles(articlesData);
    }
    // set axios loader to false after fetching
    setLoading(false);
  };

  useEffect(() => {
    getArticles(page);
  }, [page]);

  const onClickBookmark = (item: any) => {
    if (
      bookmarkedArticles &&
      bookmarkedArticles.getUserArticles &&
      bookmarkedArticles.getUserArticles.articles &&
      bookmarkedArticles?.getUserArticles.articles.length > 10
    ) {
      setOpenModal(!openModal);
      return;
    }
    postBookmark({
      input: {
        href: item.href,
        idno: item.id.toString(),
        title: item.title,
        description: item.description,
        content: item.content,
        comments_count: item.comments_count,
        public_reactions_count: item.public_reactions_count,
        positive_reactions_count: item.positive_reactions_count,
        avatar: item.avatar,
      },
    });

    // getArticles();
  };

  const throttledOnClickBookmark = useMemo(
    () => _.throttle(onClickBookmark, 1000),
    []
  );

  const onChangePage = (listPage: number) => {
    setPage(listPage);
  };

  const onCloseModal = () => {
    setOpenModal(!openModal);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div style={{ padding: '0 16px' }}>
        <Title level={3}>Repositories</Title>
        <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
          {`List of trending repositories.`}
        </span>
      </div>
      <Divider />
      <Modal
        toggleModal={() => onCloseModal()}
        open={openModal}
        content="You've already reached the maximum number of articles to be bookmarked."
        title="Cannot bookmark"
        onCancel={onCloseModal}
      />
      {/* <List
        listData={articles}
        onClickBookmark={onClickBookmark}
        articles={bookmarkedArticles?.getUserArticles?.articles}
        onChangePage={onChangePage}
        total={100}
      /> */}
      {useArticlesFetching ? (
        <Loader />
      ) : (
        <List
          listData={articles}
          onClickBookmark={throttledOnClickBookmark}
          articles={bookmarkedArticles?.getUserArticles?.articles}
          onChangePage={onChangePage}
          total={100}
          page={page}
        />
      )}
    </div>
  );
};
export default Articles;
