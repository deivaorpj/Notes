import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  border-radius: 50px
`;

export const Input = styled.TextInput`
  height: 150px;
  border-color: gray;
  border-width: 1px;
  margin-bottom: 20px;
  padding: 10px;
`;

export const NoteContainer = styled.View`
  border-color: gray;
  border-width: 1px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  aling-items:center;
  border-radius:10px
    
`;

export const NoteText = styled.Text`
flex:1
`;