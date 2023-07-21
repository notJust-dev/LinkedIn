import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Post } from '@/types';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

type PostListItemProps = {
  post: Post;
};

type FooterButtonProp = {
  text: string;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
};

function FooterButton({ text, icon }: FooterButtonProp) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <FontAwesome name={icon} size={16} color="gray" />
      <Text style={{ marginLeft: 5, color: 'gray', fontWeight: '500' }}>
        {text}
      </Text>
    </View>
  );
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={`/posts/${post.id}`} asChild>
      <Pressable style={styles.container}>
        {/* Header */}
        <Link href={`/users/${post.author.id}`} asChild>
          <Pressable style={styles.header}>
            <Image
              source={{ uri: post.author.image }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{post.author.name}</Text>
              <Text>{post.author.position}</Text>
            </View>
          </Pressable>
        </Link>

        {/* Text content */}
        <Text style={styles.content}>{post.content}</Text>

        {/* Image content */}
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <FooterButton text="Like" icon="thumbs-o-up" />
          <FooterButton text="Comment" icon="comment-o" />
          <FooterButton text="Share" icon="share" />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  // Body
  content: {
    margin: 10,
    marginTop: 0,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },

  // footer
  footer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: 'lightgray',
  },
});
