import React, { useEffect, useState } from 'react';
import { PageHeader, List, Avatar, Divider, Button, Typography } from 'antd';
import axios from 'axios';
// import { List } from '../../components';
import { httpAxios } from '../../utils';
import { GithubOutlined, BookOutlined } from '@ant-design/icons';
import moment from 'moment';
import {
  useGetRepositoriesQuery,
  useMeQuery,
  usePostRepositoryMutation,
} from '../../generated/graphql';
import { Loader } from '../../components';
// import { fetchRepositories } from '@huchenme/github-trending';

const { Title } = Typography;

interface RepositoriesProps {}

export const Repositories: React.FC<RepositoriesProps> = ({}) => {
  const [{ data: meData, fetching: meFetching }] = useMeQuery();
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [, postRepository] = usePostRepositoryMutation();
  const [
    { data: repositoryData, fetching: repositoryFetching },
  ] = useGetRepositoriesQuery();
  const getTrendingRepositories = async (page: any | null | undefined = 1) => {
    setLoading(true);
    const repoItems = await httpAxios.get(`/get-repositories`, {
      params: {
        page: page,
        language: meData?.me?.language?.value,
      },
    });
    if (repoItems && repoItems?.data) {
      setRepositories(repoItems?.data?.data);
    }
    setLoading(false);
    // if (repoItems && repoItems.data) {
    //   const repos = repoItems?.data?.repositories?.items?.map((repo: any) => {
    //     return {
    //       href: repo.clone_url,
    //       title: repo.name,
    //       avatar: repo?.owner?.avatar_url,
    //       description: `${repo?.owner?.login} - ${moment(
    //         repo.created_at
    //       ).format('MMMM DD, YYYY')}`,
    //       content: repo.description,
    //       user: {
    //         ...repo.owner,
    //       },
    //       comments_count: repo.comments_count,
    //       tag_list: article.tag_list,
    //       public_reactions_count: article.public_reactions_count,
    //       positive_reactions_count: article.positive_reactions_count,
    //       ...article,
    //     };
    //   });
    //   setRepositories(repos);
    // }
  };

  // console.log(repositoryData?.getRespositories);

  useEffect(() => {
    getTrendingRepositories();
  }, []);

  const onClickBookmark = async (item: any) => {
    await postRepository({
      input: {
        title: item.title,
        href: item.href,
        description: item.description,
      },
    });
  };

  if (loading) {
    return <Loader />;
  }

  const bookmarkedRepo = (item: any) => {
    return (repositoryData?.getRepositories as any)?.some(
      (repo: any) => repo.href === item.href
    );
  };

  return (
    <div>
      {/* <PageHeader className="site-page-header" title="Repositories" /> */}
      <div style={{ padding: '0 16px' }}>
        <Title level={3}>Repositories</Title>
        <span style={{ color: 'rgba(0, 0, 0, 0.45)' }}>
          {`List of trending repositories filtered by ${meData?.me?.language?.language}.`}
        </span>
      </div>
      <Divider />
      <List
        itemLayout="horizontal"
        dataSource={[
          ...repositories.map((repository: any) => {
            return {
              ...repository,
              title: repository.title.substring(1),
            };
          }),
        ]}
        renderItem={(item: any) => {
          return (
            <List.Item
              extra={
                <Button
                  type="link"
                  onClick={() => onClickBookmark(item)}
                  icon={<BookOutlined />}
                  {...((bookmarkedRepo(item) as any)
                    ? { className: 'btn-warning' }
                    : {})}
                >
                  {(bookmarkedRepo(item) as any) ? 'Bookmarked' : 'Bookmark'}
                </Button>
              }
            >
              <List.Item.Meta
                avatar={
                  // <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <GithubOutlined />
                }
                title={
                  <a href={item.href} target="_blank">
                    {item.title}
                  </a>
                }
                description={item.description}
              />
            </List.Item>
          );
        }}
      />
    </div>
  );
};
export default Repositories;
