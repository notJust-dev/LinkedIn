import { ActivityIndicator, ScrollView, Text } from 'react-native';
import posts from '../../../assets/data/posts.json';
import PostListItem from '@/components/PostListItem';
import { useLocalSearchParams } from 'expo-router';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query MyQuery($id: ID!) {
    post(id: $id) {
      content
      id
      image
      profile {
        id
        name
        image
        position
      }
    }
  }
`;

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();
  const { loading, error, data } = useQuery(query, { variables: { id } });

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    console.log(error);
    return <Text>Something went wrong...</Text>;
  }

  return (
    <ScrollView>
      <PostListItem post={data.post} />
    </ScrollView>
  );
}
