import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

type Props = {
    children?: {};
};

const KeyboardAwareView: React.FC<Props> = props => {
    const {children} = props;
 
    return (
        <KeyboardAwareScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
        >           
            {children && children}
        </KeyboardAwareScrollView>
    )
}

export default KeyboardAwareView;

