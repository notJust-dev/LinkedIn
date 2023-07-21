import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import PostListItem from '@/components/PostListItem';
import posts from '../../../assets/data/posts.json';

const firstPost = posts[2];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <PostListItem post={firstPost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
