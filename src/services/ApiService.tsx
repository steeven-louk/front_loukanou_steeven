// apiService.ts

import axios from 'axios';

 // Remplacez par l'URL de votre API
const autoCompleteUrl = `https://api.comparatrip.eu/cities/autocomplete/?q=`; //recherche dans les villes disponibles sur Tictactrip
const populareCityUrl = "https://api.comparatrip.eu/cities/popular/5"; //recherche les 5 villes les plus populaires

// Méthode pour récupérer la liste des destinations
export const getDestinations = async (destinationSearch:string, querySearch:string) => {
  
    const populareByCityUrl = `https://api.comparatrip.eu/cities/popular/from/${querySearch}/5`;//recherche les 5 villes les plus populaires au départ d’une ville donnée

    try {
        // recuperation des données de l'API
        const { data } = await axios.get(autoCompleteUrl + destinationSearch);
        const getPopulareCity = await axios.get(populareByCityUrl);
        
        // recuperation des données de l'API

        switch (true) {

            // si la recherche de depart est vide
        case querySearch.length === 0:
            return data;


            // si la recherche de destination et de depart sont vide
        case destinationSearch === "" && querySearch.trim().length > 0:
            return getPopulareCity.data;


            // si la recherche de destination est remplie ou si le depart est vide
        case destinationSearch.length > 0 || querySearch.trim().length <= 0:
            return data;
        }
    } catch (error) {
    // ✅Recuperation des erreurs
            throw new Error('Erreur lors de la récupération des destinations');

    } 
};



// Méthode pour récupérer la liste des departs
   export const getFromDestination = async (querySearch:string) => {
      try {
        // recuperation des données de l'API
        const { data } = await axios.get(autoCompleteUrl + querySearch);
        const dataPopulare = await axios.get(populareCityUrl);
       
        // recuperation des données de l'API

        switch (true) {
          // si la recherche de depart est vide
          case querySearch === "": 
            return dataPopulare.data;


            // à default recherche dans les villes disponibles
          default:
            return data;
        }
      } catch (error) {
        // ✅Recuperation des erreurs
        throw new Error('Erreur lors de la récupération de la destination de depart');

      }
    };
