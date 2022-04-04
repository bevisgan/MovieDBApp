
import {StyleSheet} from 'react-native';
import { ColorCode } from 'src/resource/colorCode';

export default StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    gradientContainer:{
        padding: 20,
        width: SCREEN_W,
        alignItems: 'center'
    },
    title:{
        fontSize: 48,
        letterSpacing: 3,
        color: ColorCode.white
    }
});