/**
 * @format
 */

import 'react-native';
import storageHelper from '../src/common/utils/storageHelper';

it('checks if storageHelper.getMovieList returned correct result', async () => {
  await storageHelper.getMovieList((page, list) => {
    expect(page).toMatchObject(Number);    
    expect(list).toMatchObject([]);
  });
});