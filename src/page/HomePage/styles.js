
import {StyleSheet} from 'react-native';
import { ColorCode } from '../../resource/colorCode';

export const styles = StyleSheet.create({
    container:{                
        paddingHorizontal: 20
    },
    textInput:{
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: ColorCode.theme,
        borderRadius: 10,
        marginBottom: 5,
        textAlignVertical: 'center',
        paddingLeft: 12
    },
    gradientContainer:{
        padding: 20,
        borderRadius: 10,
        marginTop: SCREEN_H * .3,
        marginBottom: 40,
        alignItems: 'center'
    },
    title: {
        fontSize: 48,
        color: ColorCode.white
    },
    emptyListCont: {
        alignItems: 'center',
        marginTop: SCREEN_H * .2
    },
    emptyText: {
        fontSize: 24,
        color: ColorCode.theme,
        marginTop: 20
    },
    movieCountText: {
        marginBottom: 5
    }
});

export const SearchBarstyles = StyleSheet.create({
    container:{
        marginVertical: 7,
        paddingHorizontal: 12,
        paddingVertical: ISIOS ? 12 : 0,
        flexDirection: 'row',
        borderRadius: 50,
        backgroundColor: ColorCode.lightGray,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputText:{
        flex: 1,
        marginLeft: 5,
        color: ColorCode.black,        
    }
});