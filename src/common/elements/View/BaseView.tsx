import React from 'react';
import { 
    SafeAreaView, 
    View
} from 'react-native';
import { ColorCode } from 'src/resource/colorCode';

type Props = {
    children?: {};
    style?: {};
};

const BaseView: React.FC<Props> = props => {
    const {children, style} = props;
 
    return (
        <SafeAreaView
            style={{ 
                flex: 1,
                backgroundColor: ColorCode.white
            }}
        >           
            <View
                style={{
                    flex: 1,                    
                    ...style
                }}
            >
                {children && children}
            </View>
        </SafeAreaView>
    )
}

export default BaseView;

