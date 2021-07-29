import React, { useState } from 'react';
import { PageHeader, Tabs, Divider } from 'antd';
import { List, ConfirmationModal } from '../../components';
import {
  useGetUserArticlesQuery,
  useDeleteBookmarkMutation,
} from '../../generated/graphql';

const { TabPane } = Tabs;

interface BookmarksProps {}

export const Bookmarks: React.FC<BookmarksProps> = ({}) => {
  const [openConfirmation, setOpenConfirmation] = useState({
    show: false,
    id: null,
  });
  const [{ data, fetching }] = useGetUserArticlesQuery();
  const [, deleteBookmark] = useDeleteBookmarkMutation();

  const toggleOnDeleteModal = (id: any) => {
    setOpenConfirmation({
      show: !openConfirmation.show,
      id: id,
    });
  };

  const onDeleteBookmark = async () => {
    await deleteBookmark({
      id: openConfirmation.id!,
    });
    setOpenConfirmation({
      show: false,
      id: null,
    });
  };

  return (
    <div>
      <PageHeader className="site-page-header" title="Bookmarks" />
      <Divider />
      <Tabs tabPosition="left" defaultActiveKey="1">
        <ConfirmationModal
          title="Are you sure you want to delete this bookmark?"
          content="Once you delete this article on your bookmark possibly you can't find it on list of articles."
          onOkFunction={() => onDeleteBookmark()}
          onCancelFunction={() =>
            setOpenConfirmation({
              show: false,
              id: null,
            })
          }
          open={openConfirmation.show}
        />
        <TabPane tab="Repositories" key="1">
          Repositories
        </TabPane>
        <TabPane tab="Articles" key="2">
          <List
            listData={!fetching ? data?.getUserArticles?.articles : []}
            total={data?.getUserArticles?.articles!.length}
            onDeleteBookmark={toggleOnDeleteModal}
            // onClickBookmark={onClickBookmark}
            // bookmarks={bookmarks?.getUserBookmarks?.bookmarks}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};
export default Bookmarks;
