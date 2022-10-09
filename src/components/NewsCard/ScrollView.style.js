import React from 'react';
import { StyleSheet , Dimensions} from 'react-native';


export default StyleSheet.create({
    banner_image: {
      height: Dimensions.get('window').height/ 5,
      width: Dimensions.get('window').height/ 2,
    },
});