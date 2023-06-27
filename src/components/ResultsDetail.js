import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import { LinearGradient } from 'expo-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

const ResultsDetail = ({ result, Isloading }) => {
  return (
    Isloading ? (<ShimmerPlaceholder style={styles.ImgShimmerStyle}/>) : 
    (<View style={{ marginLeft: 15 }}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold' }}>{result.name}</Text>
        <Text> {result.rating} Stars, {result.review_count} Reviews </Text>
      </View>
    </View>)
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 140,
    borderRadius: 10,
    marginBottom: 5
  },
  ImgShimmerStyle : {
    width: 250,
    height: 140,
    borderRadius: 10,
    marginBottom: 5,
    marginLeft : 15
  }
});

export default ResultsDetail;
