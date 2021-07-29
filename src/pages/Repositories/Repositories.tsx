import React, { useEffect, useState } from 'react';
import { PageHeader, List, Avatar, Divider, Button } from 'antd';
import axios from 'axios';
// import { List } from '../../components';
import { httpAxios } from '../../utils';
import { GithubOutlined } from '@ant-design/icons';
import moment from 'moment';
// import { fetchRepositories } from '@huchenme/github-trending';

interface RepositoriesProps {}

export const Repositories: React.FC<RepositoriesProps> = ({}) => {
  const [repositories, setRepositories] = useState([]);
  // useEffect(() => {
  //   const repositories = axios
  //     .get('http://localhost:5000/get-repositories', {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         'Access-Control-Allow-Methods':
  //           'GET, PUT, POST, DELETE, HEAD, OPTIONS',
  //         'Access-Control-Allow-Headers': '*',
  //         Accept: 'application/json, text/plain',
  //       },
  //     })
  //     .then((res: any) => {
  //       console.log(res);
  //     });
  // }, []);
  const getTrendingRepositories = async (page: any | null | undefined = 1) => {
    const repoItems = await httpAxios.get(`/get-repositories?page=${page}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (repoItems && repoItems?.data) {
      setRepositories(repoItems?.data?.data);
      console.log('THIS IS THE REPOITEMS', repoItems);
    }
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

  useEffect(() => {
    getTrendingRepositories();
  }, []);

  const onClickBookmark = (item: any) => {
    console.log(item);
  };

  return (
    <div>
      <PageHeader className="site-page-header" title="Repositories" />
      <Divider />
      <List
        itemLayout="horizontal"
        dataSource={[...repositories]}
        renderItem={(item: any) => {
          console.log(item);
          return (
            <List.Item
              extra={
                <Button type="link" onClick={() => onClickBookmark(item)}>
                  Bookmark
                </Button>
              }
            >
              <List.Item.Meta
                avatar={
                  // <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  <GithubOutlined />
                }
                title={<a href={item.href}>{item.title}</a>}
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
