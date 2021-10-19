import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceDetail from '../PlaceDetail/PlaceDetail';
import PlaceList from '../PlaceList/PlaceList';
import { connect } from 'react-redux';
import {deletePlace, loadPlaces} from '../../Redux/actionCreators';



const mapStateToProps = state => {
    return{
        placeList: state.placeList
    }
}


const mapDispatchToProps = dispatch => {
    return{
        deletePlace: key => dispatch(deletePlace(key)),
        loadPlaces: () => dispatch(loadPlaces()),
    }
}



const FindPlaces = props => {

  const [selectedPlace, setselectedPlace] = useState(null);


  useEffect(() => {
    props.loadPlaces();
  }) 


  const handelSelectedPlace = key => {
    const place = props.placeList.find(place => {
      return place.key === key;
    })
    setselectedPlace(place);

  }

  const handelHidePlace = () => {
    setselectedPlace(null);
  }


  const handelDeleteItem = key => {
    props.deletePlace(key);
    setselectedPlace(null);
  }

  let placeDetail = null;
  if(selectedPlace!==null){
    placeDetail = <PlaceDetail 
    place={selectedPlace} 
    hide={handelHidePlace} 
    delete={handelDeleteItem}
    />
  }

  return (
    <View style={styles.container}>
      {placeDetail}
       <PlaceList 
       placeList={props.placeList}
       handelSelectedPlace={handelSelectedPlace}
        />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column'
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(FindPlaces);