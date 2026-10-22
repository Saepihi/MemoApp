import { View, Text, StyleSheet, type ViewStyle } from 'react-native';

interface Props {
  children:string | React.ReactNode;
  style?: ViewStyle;
}

const CircleButton = (props: Props) => {
  const { children, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
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
