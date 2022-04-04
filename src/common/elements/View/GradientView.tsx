import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { ColorCode } from 'src/resource/colorCode';

type Props = {
    children?: {};
    style?: {};
};

const GradientView: React.FC<Props> = props => {
    const {children, style} = props;
 
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={ColorCode.gradient.theme}
            style={style ? style : { flex: 1 }}
        >
            {children && children}
        </LinearGradient>
    )
}

export default GradientView;

