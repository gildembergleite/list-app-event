import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 24,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 24,
    gap: 12,
  },
  textInput: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#2b2b2b',
    color: '#fff',
    height: '100%',
    padding: 8,
    fontSize: 16,
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#149eca',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderRadius: 5,
  },
  textAddButton: {
    color: '#fff',
    fontSize: 20,
  },
  eventName: {
    fontSize: 20,
    color: '#fff',
    marginTop: 24,
  },
  eventDate: {
    fontSize: 14,
    marginBottom: 20,
    color: '#6b6b6b'
  },
  listTitle: {
    color: '#fff',
    fontSize: 16,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  emptyList: {
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default styles