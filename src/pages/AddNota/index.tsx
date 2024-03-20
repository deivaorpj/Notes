import React, { useState } from 'react';
import { NavigationProp } from "@react-navigation/native";
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Input } from './styles';
import { Button } from '../../Components/Button';

const AddNota = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const [note, setNote] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const saveNote = async () => {
    try {
      console.log('Tentando salvar nota:', note);
      const savedNotes = await AsyncStorage.getItem('notes');
      const updatedNotes = savedNotes ? JSON.parse(savedNotes) : [];
      if (editingIndex !== null) {
        updatedNotes[editingIndex] = note;
        setEditingIndex(null);
      } else {
        updatedNotes.push(note);
      }
      console.log('Notas atualizadas:', updatedNotes);
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
      setNote('');
      navigation.navigate('Lista');
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const editNote = (index: number, noteText: string) => {
    setEditingIndex(index);
    setNote(noteText);
  };

  return (
    <Container>
      <Input
        placeholder="Digite sua nota..."
        multiline
        value={note}
        onChangeText={setNote}
      />
      <Button title={editingIndex !== null ? "Salvar Edição" : "Salvar Nota"} onPress={saveNote} />
    </Container>
  );
};

export default AddNota;
