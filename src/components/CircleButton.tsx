import { View, Text, StyleSheet } from 'react-native';

interface Props {
  children: string;
}

const CircleButton = (props: Props) => {
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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

})

export default CircleButton;
