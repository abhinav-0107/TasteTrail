import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResultsDetail from "./ResultsDetail";
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import {LinearGradient} from 'expo-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient); 


const ResultsList = ({ title, results, Isloading }) => {
  const navigation = useNavigation();
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      { Isloading ? <ShimmerPlaceholder style={styles.textShimmerStyle}/> : <Text style={styles.title}>{title}</Text>}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
            }>
              <ResultsDetail Isloading={Isloading} result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
  textShimmerStyle: {
    height : 18,
    width : 200,
    borderRadius : 10,
    marginBottom : 8,
    marginLeft : 15
  }
});

export default ResultsList;
