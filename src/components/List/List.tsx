import React from 'react';
import { List as AntdList, Avatar, Button, Tag } from 'antd';
import {
  // MessageOutlined,
  // LikeOutlined,
  // StarOutlined,
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
  // const IconText = (iconProp: any) => (
  //   <Space>
  //     {React.createElement(iconProp.icon)}
  //     {iconProp.text}
  //   </Space>
  // );

  const bookmarked = (item: any) => {
    return (
      articles && articles.some((bookmark: any) => bookmark.idno == item.id)
    );
  };
  // console.log(listData);

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
              pageSizeOptions: ['10'],
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
            className="list-item"
            actions={[
              // <IconText
              //   icon={StarOutlined}
              //   text={item?.public_reactions_count || 0}
              //   key="list-vertical-star-o"
              // />,
              // <IconText
              //   icon={LikeOutlined}
              //   text={item?.positive_reactions_count || 0}
              //   key="list-vertical-like-o"
              // />,
              // <IconText
              //   icon={MessageOutlined}
              //   text={`${item.comments_count ? item.comments_count : 0}`}
              //   key="list-vertical-message"
              // />,
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
              location.pathname !== '/clipped-notes' ? (
                <Button
                  type="link"
                  {...(bookmarked(item)
                    ? { className: 'btn-warning cursor-default' }
                    : {})}
                  icon={<BookOutlined />}
                  {...(onClickBookmark && !bookmarked(item)
                    ? { onClick: () => onClickBookmark(item) }
                    : {})}
                >
                  {bookmarked(item) ? 'Saved' : 'Save to notes'}
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
                >
                  Delete
                </Button>
              )
            }
          >
            <AntdList.Item.Meta
              avatar={
                item.avatar ? <Avatar src={item.avatar} /> : <GithubOutlined />
              }
              title={
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="list-title"
                >
                  <strong>{item.title}</strong>
                </a>
              }
              description={item.description}
            />
            {item.content}
          </AntdList.Item>
        );
      }}
    />
  );
};
export default List;
