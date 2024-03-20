import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, NoteContainer, NoteText } from './styles';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../../Components/IconButton';

const ListScreen = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const savedNotes = await AsyncStorage.getItem('notes');
      if (savedNotes !== null) {
        setNotes(JSON.parse(savedNotes));
      }
      console.log("🚀 ~ loadNotes ~ savedNotes:", savedNotes)
    } catch (error) {
      console.error('Error loading notes:', error);
    }
  };

  const deleteNote = async (index: number) => {
    try {
      const updatedNotes = [...notes];
      updatedNotes.splice(index, 1);
      setNotes(updatedNotes);
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const navigateToEditNote = (index: number) => {
    const noteToEdit = notes[index];
    navigation.navigate('AddNota', { noteToEdit });
  };

  const renderNoteItem = ({ item, index }: { item: string, index: number }) => (
    <NoteContainer>
      <NoteText>{item}</NoteText>
      <IconButton iconName="trash" onPress={() => deleteNote(index)} />
      <IconButton iconName="edit" onPress={() => navigateToEditNote(index)} />
    </NoteContainer>
  );

  return (
    <Container>
      <FlatList
        data={notes}
        renderItem={renderNoteItem}
        keyExtractor={(item, index) => index.toString()}
        extraData={notes}
      />
    </Container>
  );
};

export default ListScreen;
