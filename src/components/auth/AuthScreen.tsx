import { View, Text } from 'react-native';
import SignInScreen from './SignInScreen';
import { useState } from 'react';
import SignUpScreen from './SignUpScreen';

const AuthScreen = () => {
  const [activeTab, setActiveTab] = useState('sign-in');

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text
          onPress={() => setActiveTab('sign-in')}
          style={{
            fontWeight: '600',
            fontSize: 20,
            color: activeTab === 'sign-in' ? 'royalblue' : 'gray',
          }}
        >
          Sign in
        </Text>
        <Text
          onPress={() => setActiveTab('sign-up')}
          style={{
            fontWeight: '600',
            fontSize: 20,
            color: activeTab === 'sign-up' ? 'royalblue' : 'gray',
          }}
        >
          Sign up
        </Text>
      </View>
      {activeTab === 'sign-in' && <SignInScreen />}
      {activeTab === 'sign-up' && <SignUpScreen />}
    </View>
  );
};

export default AuthScreen;
