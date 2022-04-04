import {Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export const StorageKey = {
  movieList: 'MOVIE_LIST',
  movieLoadedPage: "MOVIE_LOADED_PAGE"
};

class storageHelper {
  setStorage = async (key: string, value: any) => {
    try {
      // JXLog(`STORAGE-SET-${key} = ${value}`);
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
      console.log(`Error-setStorage e = ${e}`)
    }
  };

  getStorage = async (key: string, callback?:() => void) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (!value) return null;
      try {
        let v = JSON.parse(value);
        // JXLog(`STORAGE-GET-${key} = ${v}`);
        callback && callback()
        return v;
      } catch {
        // JXLog(`STORAGE-GET-${key} = " + ${value}`);
        callback && callback()
        return value;
      }
    } catch (e) {
      // error reading value
      console.log(`Error-getStorage e = ${e}`)
    }
  };

  removeStorage = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // remove error
      console.log(`Error-removeStorage e = ${e}`)
    }
  };

  getAllKeys = async () => {
    let keys: any = [];
    try {
      keys = await AsyncStorage.getAllKeys();
    } catch (e) {
      // read key error
      console.log(`Error-getAllKeys e = ${e}`);
    }
  };

  saveMovieList = async (page: string, movieList: []) => {
    try {
      // JXLog(`STORAGE-SET-${key} = ${value}`);
      const jsonValue = JSON.stringify(movieList);
      await AsyncStorage.setItem(StorageKey.movieList, jsonValue);
      await AsyncStorage.setItem(StorageKey.movieLoadedPage, page);
    } catch (e) {
      // saving error
      console.log(`Error-saveMovieList e = ${e}`);
    }
  }; 

  getMovieList = async (callback:(page: number, movieList: []) => void) => {
    try {
      let page = await AsyncStorage.getItem(StorageKey.movieLoadedPage);
      let list = await AsyncStorage.getItem(StorageKey.movieList);
      
      if(!list) return;
      
      let listParsed = JSON.parse(list);      
      // JXLog("bevis listParsed = ", listParsed)
      
      let intPage = parseInt(page)
      
      return callback(parseInt(page), listParsed);
      
    } catch (e) {
      // error reading value    
      console.log(`Error-getMovieList e = ${e}`);
    }
  };
}

const helper = new storageHelper();
export default helper;

