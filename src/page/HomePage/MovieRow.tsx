import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientView from '../../common/elements/View/GradientView';
import AntDesign from 'react-native-vector-icons/AntDesign'; 
import {ColorCode} from '../../resource/colorCode';
import {Movie} from '../../modal/movie';
import FastImage from 'react-native-fast-image'

type Props = {
    item: Movie;
}

const MovieRow: React.FC<Props> = ({
    item,    
}) => {
    const imageWidth = 100;
    const imageUrl = "https://image.tmdb.org/t/p/w200/";

    return (
        <GradientView style={styles.itemCont}>
            <View style={styles.rateCont}>
                <AntDesign name={"star"} size={20} color={ColorCode.gold} />
                <Text style={styles.text}>{item.vote_average}</Text>                
            </View>
            
            <FastImage
                style={{ width: imageWidth*.7, height: imageWidth }}
                source={{
                    uri: `${imageUrl}${item.poster_path}`,
                    headers: { Authorization: 'someAuthToken' },
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
            />
            <View style={styles.infoCont}>
                <Text style={[styles.text, {fontWeight: 'bold'}]}>{item.title}</Text>
                <Text style={styles.text}>{item.release_date}</Text>
                <Text style={styles.text} numberOfLines={2}>{item.overview}</Text>
            </View>            
        </GradientView>
    )
}

const styles = StyleSheet.create({
    itemCont:{
        marginTop: 5,
        padding: 12,
        paddingRight: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoCont: {
        paddingHorizontal: 7,
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        color: ColorCode.white,
        fontSize: 16,
        marginBottom: 5
    },
    rateCont: {
        position: 'absolute',
        right: 7,
        top: 7,
        flexDirection: 'row'
    }
});

export default MovieRow;