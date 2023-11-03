import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface ParticipantProps {
  name: string
  onDeleteParticipant: Function
}

export default function Participant({ name, onDeleteParticipant }: ParticipantProps) {

  function handleDeleteParticipant() {
    onDeleteParticipant(name)
  }

  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
      </View>
      <TouchableOpacity onPress={handleDeleteParticipant} style={styles.deleteButton}>
        <Text style={styles.textButton}>-</Text>
      </TouchableOpacity>
    </View>
  );
}