import { ActivityIndicator, FlatList, Text } from 'react-native';
import PostListItem from '@/components/PostListItem';
// import posts from '../../../assets/data/posts.json';
import { gql, useQuery } from '@apollo/client';

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

export default function HomeFeedScreen() {
  const { loading, error, data } = useQuery(postList);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error);
    return <Text>Something went wrong!</Text>;
  }

  console.log(data);

  return (
    <FlatList
      data={data.postList}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    />
  );
}
