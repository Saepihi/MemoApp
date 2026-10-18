import { View, Text, StyleSheet } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>MemoApp</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>
      <View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024/06/01</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024/06/01</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024/06/01</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>
      <View>
        <Text>+</Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    backgroundColor: '#4ebaf8',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    lineHeight: 32,
    color: '#fff'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.7)'
  },
});

export default Index;

