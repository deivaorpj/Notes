import React from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';
import { Container, Title } from './styles';

interface Props {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    buttonColor?: string;
    titleColor?: string;
}


export function Button({ title, onPress, buttonColor, titleColor, ...rest }: Props) {
    return (
        <Container onPress={onPress} buttonColor={buttonColor} {...rest}>
            <Title titleColor={titleColor}>{title}</Title>
        </Container>
    );
}