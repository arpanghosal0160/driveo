import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Platform, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-white'>
      <Text>Uber clone</Text>
      <StatusBar style="auto"/>

    </SafeAreaView>
  );
}

