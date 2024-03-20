import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons'; // Importe o ícone desejado
import { Icon } from './styles';

interface IconButtonProps {
    iconName: string;
    color?: string;
    onPress: () => void;
}
const IconButton: React.FC<IconButtonProps> = ({ iconName, onPress }) => {
    return (
        <ButtonContainer onPress={onPress}>
            <Icon name={iconName} size={24} color="#000" />
        </ButtonContainer>
    );
};

const ButtonContainer = styled(TouchableOpacity)`
  padding: 10px;
`;

export default IconButton;
