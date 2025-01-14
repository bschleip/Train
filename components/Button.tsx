import { StyleSheet, View, Pressable, Text } from "react-native"

type Props = {
    label: string;
    theme?: 'boxed'
    onPress?: () => void;
}

export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'boxed') {
        return (
            <View
              style={[
                styles.buttonContainer,
              ]}>
              <Pressable
                style={[styles.button, { backgroundColor: '#333' }]}
                onPress={onPress}>
                <Text style={[styles.buttonLabel, { fontWeight: 'bold' }]}>{label}</Text>
              </Pressable>
            </View>
        );
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });