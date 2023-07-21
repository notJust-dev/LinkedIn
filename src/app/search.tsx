import { Text, View, StyleSheet, FlatList } from 'react-native';
import users from '../../assets/data/users.json';
import UserListItem from '@/components/UserListItem';
import { useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search users',
        onChangeText: setSearch,
      },
    });
  }, [navigation]);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserListItem user={item} />}
      />
    </View>
  );
}
