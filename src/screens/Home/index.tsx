import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { useState } from 'react';
import Participant from '../../components/Participant';

export default function Home() {
  const [text, setText] = useState('')
  const [list, setList] = useState<string[]>([])

  function handleAddParticipant() {
    if (text === '') return

    const normalizedText = text.toLowerCase()
    const normalizedList = list.map(item => item.toLowerCase())

    if (normalizedList.includes(normalizedText)) {
      Alert.alert('Participante já adicionado', 'Verifique se o nome inserido está correto.')
      return
    }

    setList(((state) => [...state, text]))
    setText('')
  }

  function deleteParticipant(name: string) {
    const index = list.indexOf(name)
    Alert.alert(
      'Remover participante?',
      `Tem certeza que deseja remover o participante: ${name}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: () => { return }
        },
        
      ]
    )
      
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Insira o nome do participante...'
          placeholderTextColor={'#6b6b6b'}
          value={text}
          onChangeText={(text) => setText(text)}
        />
        <TouchableOpacity onPress={handleAddParticipant} style={styles.addButton}>
          <Text style={styles.textAddButton}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listTitle}>Participantes</Text>
      
        {
          list.length >= 1
            ? list.map((text, index) => (
            <Participant
              key={index}
              name={text}
              onDeleteParticipant={deleteParticipant}
            />
          ))
            : (
              <View style={styles.emptyList}>
                <Text style={styles.listTitle}>Lista vazia</Text>
              </View>
            )
        }

    </View>
  );
}


