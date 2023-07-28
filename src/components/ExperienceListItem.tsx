import { Experience } from '@/types';
import { Text, View, Image, StyleSheet } from 'react-native';

type ExperienceListItemProps = {
  experience: Experience;
};

export default function ExperienceListItem({
  experience,
}: ExperienceListItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: experience.companyimage }} style={styles.image} />

      <View>
        <Text style={styles.title}>{experience.title}</Text>
        <Text>{experience.companyname}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',

    backgroundColor: 'white',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});
