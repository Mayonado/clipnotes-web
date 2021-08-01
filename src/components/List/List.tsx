import React from 'react';
import { List as AntdList, Space, Avatar, Button, Tag } from 'antd';
import {
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
  BookOutlined,
  DeleteOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import './List.less';
import { useLocation } from 'react-router-dom';
import { Empty } from '../';

interface ListProps {
  listData?: any;
  onClickBookmark?: Function;
  articles?: any;
  onChangePage?: any;
  total?: number | undefined;
  onDeleteBookmark?: Function;
  page?: number;
}

// const listData: Array<any> = [];
// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'https://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

export const List: React.FC<ListProps> = ({
  listData,
  onClickBookmark,
  articles,
  onChangePage,
  total,
  onDeleteBookmark,
  page,
}) => {
  const location = useLocation();
  const IconText = (iconProp: any) => (
    <Space>
      {React.createElement(iconProp.icon)}
      {iconProp.text}
    </Space>
  );

  return (
    <AntdList
      itemLayout="vertical"
      size="large"
      pagination={
        total && total > 10
          ? {
              onChange: page => onChangePage(page),
              pageSize: 10,
              total: total ? total : 0,
              current: page,
            }
          : false
      }
      locale={{
        emptyText: (
          <Empty
            title="We can't found any data!"
            subtitle={
              "We can't found any articles/repositories that you bookmark."
            }
          />
        ),
      }}
      dataSource={listData}
      renderItem={(item: any) => {
        return (
          <AntdList.Item
            key={item.id}
            actions={[
              <IconText
                icon={StarOutlined}
                text={item?.public_reactions_count || 0}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text={item?.positive_reactions_count || 0}
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text={`${item.comments_count ? item.comments_count : 0}`}
                key="list-vertical-message"
              />,
              [
                ...(item && item.tag_list
                  ? item.tag_list.map((tag: any) => (
                      <Tag color="geekblue-inverse" key={tag}>
                        {tag}
                      </Tag>
                    ))
                  : []),
              ],
            ]}
            extra={
              location.pathname !== '/bookmarks' ? (
                <Button
                  type="link"
                  {...(articles &&
                  articles.some((bookmark: any) => bookmark.idno == item.id)
                    ? { className: 'btn-warning' }
                    : {})}
                  icon={<BookOutlined />}
                  {...(onClickBookmark
                    ? { onClick: () => onClickBookmark(item) }
                    : {})}
                >
                  {articles &&
                  articles.some((bookmark: any) => bookmark.idno == item.id)
                    ? 'bookmarked'
                    : 'bookmark'}
                </Button>
              ) : (
                <Button
                  type="link"
                  icon={<DeleteOutlined />}
                  danger
                  onClick={() => {
                    if (onDeleteBookmark) onDeleteBookmark(item.id);
                  }}
                  // {...(onClickBookmark
                  //   ? { onClick: () => onClickBookmark(item) }
                  //   : {})}
                />
                // </Button>
              )
            }
          >
            <AntdList.Item.Meta
              avatar={
                item.avatar ? <Avatar src={item.avatar} /> : <GithubOutlined />
              }
              title={
                <a href={item.href} target="_blank">
                  {item.title}
                </a>
              }
              description={item.description}
            />
          </AntdList.Item>
        );
      }}
    />
  );
};
export default List;
