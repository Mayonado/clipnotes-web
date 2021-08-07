import React, { useState, useEffect, useMemo } from 'react';
import { Divider, Typography, Tag } from 'antd';
import moment from 'moment';
import { httpAxios } from '../../utils';
import { List, Modal, Loader } from '../../components';
import {
  usePostBookmarkMutation,
  useGetUserArticlesQuery,
  // GetUserArticlesDocument,
  useMeQuery,
} from '../../generated/graphql';
import _ from 'lodash';
import { useContext } from 'react';
import LoaderContext from '../../context/LoaderContext/LoaderContext';
import './Articles.less';

const { Title } = Typography;

interface ArticlesProps {}

export const Articles: React.FC<ArticlesProps> = ({}) => {
  // const [{fetching: logoutFetching},logout] = useLogoutMutation();
  const loader: any = useContext(LoaderContext);
  const [{ data: meData }] = useMeQuery();
  const [openModal, setOpenModal] = useState(false);
  // const [page, setPage] = useState(1);
  const [, postBookmark] = usePostBookmarkMutation();
  const [
    { data: bookmarkedArticles, fetching: useArticlesFetching },
  ] = useGetUserArticlesQuery();
  const [articles, setArticles] = useState([]);

  const getArticles = async () => {
    // displays loader on http request
    loader.show();

    // axios request to articles endpoint
    const articles = await httpAxios.get(
      `/get-articles?userId=${meData?.me?.id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (articles && articles.data) {
      const articlesData = articles?.data?.articles.map((article: any) => {
        return {
          id: article.id,
          href: article.url,
          title: article.title,
          avatar: article?.user?.profile_image,
          description: `${article?.user?.name} - ${moment(
            article.published_at
          ).format('MMMM DD, YYYY')}`,
          content: article.description,
          tag_list: article.tag_list,
          // user: {
          //   ...article.user,
          // },
          // comments_count: article.comments_count,
          // public_reactions_count: article.public_reactions_count,
          // positive_reactions_count: article.positive_reactions_count,
          // ...article,
        };
      });
      setArticles(articlesData);
    }

    loader.hide();
  };

  useEffect(() => {
    getArticles();
  }, []);

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
        author: item.description,
        content: item.content,
        tags: JSON.stringify(item.tag_list),
        avatar: item.avatar,
      },
    });

    // getArticles();
  };

  const throttledOnClickBookmark = useMemo(
    () => _.throttle(onClickBookmark, 1000),
    []
  );

  // const onChangePage = (listPage: number) => {
  //   setPage(listPage);
  // };

  const onCloseModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="articles-page">
      <div className="page-title">
        <Title level={3}>Articles</Title>
        <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
          {`List of trending articles in dev to `}{' '}
        </span>
        {meData?.me?.language?.value ? (
          <>
            <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
              filtered by&nbsp;
            </span>
            <Tag>{meData?.me?.language?.language}</Tag>
          </>
        ) : (
          ''
        )}
        {/* {meData?.me && meData?.me?.interests?.length > 0
          ? meData?.me?.interests?.map((interest: any) => {
              console.log(interest);
              return <Tag>{interest.interest}</Tag>;
            })
          : ''} */}
      </div>
      <Divider />
      <Modal
        toggleModal={() => onCloseModal()}
        open={openModal}
        content="You've already reached the maximum number of articles to be save."
        title="Cannot save"
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
          // onChangePage={onChangePage}
          // total={articles.length}
          // page={page}
        />
      )}
    </div>
  );
};
export default Articles;
