import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [Isloading, setIsloading] =  useState(true);

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san jose'
        }
      });
      setIsloading(true);
      const myTimeout = setTimeout(() => {
        setIsloading(false);
      }, 5000);
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong!');
    }
  };

  // Call searchApi when component
  // is first rendered.  BAD CODE!
  // searchApi('pasta');
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage, Isloading];
};
