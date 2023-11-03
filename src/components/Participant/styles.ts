import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#2b2b2b',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginTop: 16,
  },
  nameContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  name: {
    color: '#fff',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'darkred',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  }
});

export default styles