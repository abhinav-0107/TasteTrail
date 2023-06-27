import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import {LinearGradient} from 'expo-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient); 

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage, Isloading] = useResults();
  // const [Isloading, setIsloading] =  useState(true);

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => {
          searchApi(term); //GET from API
          setTerm("");
          console.log(results.length);
          // if(results.length){
            // const myTimeout = setTimeout(() => {
            //   setIsloading(false);
            // }, 1100);
          // }
        }}
      />

      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>

        <ResultsList
          results={filterResultsByPrice('$')}
          title="Cost Effective"
          Isloading={Isloading}
        />

        <ResultsList 
          results={filterResultsByPrice('$$')} 
          title="Bit Pricier" 
          Isloading={Isloading}
        />

        <ResultsList
          results={filterResultsByPrice('$$$')}
          title="Big Spender"
          Isloading={Isloading}
        />

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
