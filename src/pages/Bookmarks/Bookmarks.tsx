import React, { useState, useContext } from 'react';
import { PageHeader, Tabs, Divider } from 'antd';
import { List, ConfirmationModal } from '../../components';
import {
  useGetUserArticlesQuery,
  useDeleteBookmarkMutation,
  useGetRepositoriesQuery,
  useDeleteRepositoryMutation,
} from '../../generated/graphql';

import ModalContext from '../../context/ModalContext/ModalContext';
import { useEffect } from 'react';

const { TabPane } = Tabs;

interface BookmarksProps {}

export const Bookmarks: React.FC<BookmarksProps> = ({}) => {
  const modal: any = useContext(ModalContext);
  const [repoId, setRepoId] = useState<number>(0);
  const [articleId, setArticleId] = useState<number>(0);
  const [{ data, fetching }] = useGetUserArticlesQuery();
  const [, deleteBookmark] = useDeleteBookmarkMutation();
  const [, deleteRepository] = useDeleteRepositoryMutation();
  const [
    { data: repositoryData, fetching: fetchingRepository },
  ] = useGetRepositoriesQuery();

  const toggleOnDeleteModal = (id: any) => {
    // setOpenConfirmation({
    //   show: !openConfirmation.show,
    //   id: id,
    // });
    modal.setModalConfig({
      title: 'Are you sure you?',
      content:
        "Once you delete this article on your bookmark possibly you can't find it on list of articles.",
      onCancelFunction: () => modal.hide(),
      onOkFunction: () => onDeleteBookmark(id),
    });
    modal.show();
  };

  const onDeleteBookmark = async (id: number) => {
    await deleteBookmark({
      id,
    });
    modal.hide();
    // setArticleId();
  };

  const onDeleteRepository = async (id: any) => {
    // console.log('REPO ID', repoId);
    await deleteRepository({
      id,
    });
    modal.hide();
  };

  const toggleOnDeleteRepositoryModal = async (id: any) => {
    modal.setModalConfig({
      title: 'Are you sure you?',
      content:
        'This repository will delete permanently and possible you will not see this repository in trending list.',
      onCancelFunction: () => modal.hide(),
      onOkFunction: () => onDeleteRepository(id),
    });
    modal.show();
  };

  return (
    <div>
      <PageHeader className="site-page-header" title="Bookmarks" />
      <Divider />
      <Tabs tabPosition="left" defaultActiveKey="1">
        {/* <ConfirmationModal
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
        /> */}
        <TabPane tab="Repositories" key="1">
          <List
            listData={
              !fetchingRepository ? repositoryData?.getRepositories : []
            }
            total={repositoryData?.getRepositories?.length}
            onDeleteBookmark={toggleOnDeleteRepositoryModal}
            // onClickBookmark={onClickBookmark}
            // bookmarks={bookmarks?.getUserBookmarks?.bookmarks}
          />
        </TabPane>
        <TabPane tab="Articles" key="2">
          <List
            listData={!fetching ? data?.getUserArticles?.articles : []}
            total={data?.getUserArticles?.articles?.length}
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
