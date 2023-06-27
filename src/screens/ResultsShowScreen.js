import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const [loading, setloading] = useState(true); //State of shimmer.
  const [errorMsg, setErrorMsg] = useState('');
  const id = route.params.id;

  // API Call
  const getResult = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      const myTimeout = setTimeout(() => {
        setloading(false);
      }, 1100);
    } catch (e) {
      setErrorMsg('Something went wrong! Please try again later.');
    }
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return (
      <Text style={styles.errStyle}>{errorMsg}</Text> //To display the error message!
    );
  }

  return (
    <View style={{ alignItems: 'center' }}>
      {loading ? <ShimmerPlaceholder style={styles.shimmertextStyle} /> : <Text style={styles.textStyle}>{result.name}</Text>}
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            loading ? <ShimmerPlaceholder style={styles.image} /> : <Image style={styles.image} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
};

// styles

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10
  },
  image: {
    height: 200,
    width: 300,
    margin: 5,
    borderRadius: 10
  },
  shimmertextStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    width: 300,
    marginTop: 10,
    borderRadius: 10,
    height: 32
  },
  errStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    top: 250,
    left: 40
  }
});

export default ResultsShowScreen;
