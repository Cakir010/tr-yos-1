import React, { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const YosContext = createContext();

const YosContextProvider = ({ children }) => {
    const [location, setLocation] = useState([]);
    const [uni, setUni] = useState([]);
    const [depertman, setDepertman] = useState([]);
    const [city, setCity] = useState([]);
    const [uniId, setUniId] = useState([]);
    const [filterDep, setFilterDep] = useState([]);
  
    const ApiKey =
      "mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf";
    const BASE_URL_LOCA = `https://tr-yös.com/api/v1/location/allcities.php?token=${ApiKey}`;
    const BASE_URL_UNI = `https://tr-yös.com/api/v1/education/alluniversities.php?token=${ApiKey}`;
    const BASE_URL_DEP = `https://tr-yös.com/api/v1/record/alldepartments.php?token=mBbAINPS8DwIL5J9isMwnEJGr4OgSkC55SCm2BqnVeJ8r1gxGFlrl8mFN7Q18GA9D/HsXeDS5arTZx6l974b31678f8f18db56809a16f9728baf`;
  
    const getLoca = async () => {
      try {
        const { data } = await axios(BASE_URL_LOCA);
        setLocation(data);
      } catch (error) {
        console.log(error);
      }
    };

    const getUni = async () => {
      try {
        const { data } = await axios(BASE_URL_UNI);
        setUni(data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const getDep = async () => {
      try {
        const { data } = await axios(BASE_URL_DEP);
        setDepertman(data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getLoca();
      getUni();
      getDep();
    }, []);
  
    const getCities = () => {
      return city?.map((item) => item.value);
    };
  
    const cities = getCities();
  
    const getUniId = () => {
      return uniId?.map((item) => item.value);
    };
  
    const uniIdies = getUniId();
  
    const getFilterDep = () => {
      return filterDep?.map((item) => item.label);
    };
    const filterDepss = getFilterDep();

  return <YosContext.Provider value={values}>{children}</YosContext.Provider>;
};

export default YosContextProvider;
