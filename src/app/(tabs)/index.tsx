import { ActivityIndicator, FlatList, Text } from 'react-native';
import PostListItem from '@/components/PostListItem';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const postList = gql`
  query PostListQuery {
    postList {
      id
      content
      image
      profile {
        id
        name
        position
        image
      }
    }
  }
`;

const postPaginatedList = gql`
  query PostPaginatedListQuery($first: Int, $after: Int) {
    postPaginatedList(first: $first, after: $after) {
      id
      content
      image
      profile {
        id
        name
        position
        image
      }
    }
  }
`;

export default function HomeFeedScreen() {
  const [hasMore, setHasMore] = useState(true);
  const { loading, error, data, fetchMore } = useQuery(postPaginatedList, {
    variables: { first: 5 },
  });

  const loadMore = async () => {
    if (!hasMore) {
      return;
    }

    const res = await fetchMore({
      variables: { after: data.postPaginatedList.length },
    });
    if (res.data.postPaginatedList.length === 0) {
      setHasMore(false);
    }
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error);
    return <Text>Something went wrong!</Text>;
  }

  return (
    <FlatList
      data={data.postPaginatedList}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
      onEndReached={loadMore}
    />
  );
}
