import * as constants from '../constants/constants';
import customData from '../API/jsondata';


// const customData = require('../API/jsondata.json');

export const fetchNewsData = () => {
      
        return {
            type: 'FETCH_NEWS_DATA',
            payload: customData.data.results
        };
    
}