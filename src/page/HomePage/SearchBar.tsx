import React from 'react';
import { View } from 'react-native';
import TextInput from '../../common/elements/TextInput/TextInput';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ColorCode} from '../../resource/colorCode';
import {SearchBarstyles as styles} from 'src/page/HomePage/styles'

type Props = {
    searchQuery: string;
    setSearchQuery: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({
    searchQuery,
    setSearchQuery
}) => {
    return (
        <View style={styles.container}>
            <FontAwesome name={"search"} size={20} color={ColorCode.black} />
            <TextInput
                style={styles.inputText}
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholder={"Search"}
                returnKeyType="search"
            />
        </View>
    )
}



export default SearchBar;