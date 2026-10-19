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

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2024/06/01</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2024/06/01</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2024/06/01</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonText}>+</Text>
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
  memoListItem: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
  circleButton: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: '#4ebaf8',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleButtonText: {
    color: '#fff',
    fontSize: 32,
    lineHeight: 32
  }

});

export default Index;

