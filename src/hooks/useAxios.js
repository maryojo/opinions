import { useState, useEffect } from "react";


const useAxios = (configObj) =>{
  const {
    axiosInstance,
    method,
    url,
    requestConfig = {}
  } = configObj;

  const [data, setData ] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);



  useEffect(() =>{
    // const controller = new AbortController();

    const fetchData = async () =>{
      try{
        const res = await axiosInstance[method.toLowerCase()](url, {
          ...requestConfig,
          // signal: controller.signal
        });
        console.log(res);
        setData(res.data);
      } catch (err) {
        console.log(err.message);
        setError(err.message)
      } finally {
          setLoading(false);
      }
    }

    fetchData();

    //useEffect cleanup function
    // return () => controller.abort();
  }, [])

  return [data, error, loading]
}

export default useAxios