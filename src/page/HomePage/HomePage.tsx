import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, FlatList, ListRenderItem, ActivityIndicator, RefreshControl } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import BaseView from "src/common/elements/View/BaseView";
import {styles} from 'src/page/HomePage/styles';
import SearchBar from 'src/page/HomePage/SearchBar';
import {useGetPopularMovieQuery} from 'src/service/movieApi';
import {Movie} from 'src/modal/movie';
import { ColorCode } from 'src/resource/colorCode';
import {getMovieList, getCurrentMoviePage, MovieSlice} from 'src/store/movieSlice';
import MovieRow from 'src/page/HomePage/MovieRow';
import NetInfo from "@react-native-community/netinfo";
import storageHelper from "src/common/utils/storageHelper"

type Props = {
    navigation: any
}

const LoginPage: React.FC<Props> = props => {
    const {navigation} = props;  
    const dispatch = useDispatch(); 
    const [searchQuery, setSearchQuery] = useState("");
    const [page, setPage] = useState(1);
    const [dataList, setDataList] = useState<Movie[]>([]);
    const [isConnected, setIsConnected] = useState(true);

    const movieList = useSelector(getMovieList);
    const currentPage = useSelector(getCurrentMoviePage);
    const {isLoading, isFetching, refetch} = useGetPopularMovieQuery({page});

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);

            if(isConnected) return;            
            storageHelper.getMovieList((page, movieList) => {
                if(!movieList) return;
                dispatch(MovieSlice.actions.reset());
                dispatch(MovieSlice.actions.setMovie({page: page, data: movieList}))
            });       
        });
          
        return () => {
            unsubscribe();
        }
    }, []);

    useEffect(() => {        
        setDataList(movieList);
    }, [movieList]);

    useEffect(() => {
        if(movieList.length == 0) return;        
        let filteredData = movieList.filter(f => f.title.toLowerCase().includes(searchQuery.toLowerCase()))        
        setDataList(filteredData);       
    }, [searchQuery]);

    const renderItem: ListRenderItem<Movie> = ({item}) => {
        return (         
           <MovieRow item={item}/>
        );
    }
    
    const onEndReached = () => {
        if(searchQuery.length > 0) return;
        setPage(currentPage + 1);
    }

    const onRefresh = () => {
        if(!isConnected) return;
        dispatch(
            MovieSlice.actions.reset()
        );
        refetch();
    }

    return (
        <BaseView style={styles.container}>            
            <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <Text style={styles.movieCountText}>Movie Count: {dataList.length}</Text>
        
            <FlatList
                keyExtractor={(item, i) => i.toString()}
                data={dataList}                
                refreshing={isLoading}                                               
                renderItem={renderItem}
                ListFooterComponent={() => {
                    return isFetching ? 
                        <ActivityIndicator size="large" color={ColorCode.theme} />
                        : null;
                }}
                ListEmptyComponent={
                    <View style={styles.emptyListCont}>
                        <Entypo name={"emoji-sad"} size={80} color={ColorCode.theme} />
                        <Text style={styles.emptyText}>Oppsss.. No Movie found!</Text>
                    </View>
                }
                refreshControl={
                    <RefreshControl
                        refreshing={isLoading}
                        onRefresh={onRefresh}
                    />
                }
                showsVerticalScrollIndicator={false}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.1}               
                ListFooterComponentStyle={{
                    paddingBottom: 50,
                }}                
            />          
        </BaseView>
    )
}

export default LoginPage;