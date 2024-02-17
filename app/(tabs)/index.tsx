import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import React, { useState } from 'react';
import Welcome from '../../components/home/welcome/Welcome';
import { useRouter } from 'expo-router';
import { COLORS, SIZES } from '../../constants';
import { Popularjobs } from '../../components';

export default function TabOneScreen() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }} />
          
          <Popularjobs />
          <Text style={styles.title}>Tab One1</Text>
          <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
          <EditScreenInfo path="app/(tabs)/index.tsx" />
        </View>
      </ScrollView>
    </SafeAreaView>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
