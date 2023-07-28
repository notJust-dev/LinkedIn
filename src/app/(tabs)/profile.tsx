import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useAuth } from '@clerk/clerk-expo';

export default function JobsScreen() {
  const { signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobs Screen</Text>

      <Text
        onPress={() => signOut()}
        style={{ marginTop: 'auto', margin: 10, fontSize: 20, color: 'red' }}
      >
        Sign out
      </Text>
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
