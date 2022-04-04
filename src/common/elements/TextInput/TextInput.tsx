import React from 'react';
import { TextInput } from 'react-native';

type Props = {
    style?: {};
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    editable?: boolean;
    returnKeyType?: any
};

const myText: React.FC<Props> = ({
    style,
    value,
    onChangeText,
    placeholder,
    editable,
    returnKeyType
}) => {

    return (
        <TextInput
            value={value}
            style={[{
                fontSize: 18
            }, style]}
            onChangeText={(text) => onChangeText(text)}
            placeholder={placeholder}
            editable={editable}
            returnKeyType={returnKeyType ? returnKeyType :"default"}
        />
    )
}

export default myText;