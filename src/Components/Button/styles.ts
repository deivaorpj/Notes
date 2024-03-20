import styled from 'styled-components/native'
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

export const Container = styled(TouchableOpacity) <{ buttonColor?: string }>`
  background-color: #000;
  border-radius: 5px;
  padding: 18px;
  align-items: center;
`;

export const Title = styled.Text<{ titleColor?: string }>`
  font-size: 12px;
  color: #FFF;
`;