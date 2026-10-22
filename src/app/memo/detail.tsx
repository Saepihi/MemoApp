import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Header from '../../components/Header';
import CircleButton from '../../components/CircleButton';

const Detail = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2026/10/22</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoContent}>リスト内の詳細情報を書き込む</Text>
      </ScrollView>
      <CircleButton style= {{top: 160, bottom: "auto" }}>
        <Feather name="edit-2" size={32} color="white" />
      </CircleButton>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  memoHeader: {
    backgroundColor: '#4ebaf8',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },

  memoTitle: {
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },

  memoDate: {
    color: 'white',
    fontSize: 12,
    lineHeight: 16
  },

  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },

  memoContent: {
    fontSize: 16,
    lineHeight: 24
  }

});



export default Detail;
