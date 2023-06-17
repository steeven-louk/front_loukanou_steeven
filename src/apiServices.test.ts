import axios from 'axios';
import { getDestinations, getFromDestination } from './services/ApiService';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Service', () => {
    afterEach(()=>{
        jest.clearAllMocks();
    });

    it('should fetch destinations successfully', async()=>{
        const destinations = ['paris', 'paris'];

           
        const data =[
            {
                "id": 57,
                "unique_name": "avignon",
                "local_name": "Avignon, Provence-Alpes-Côte d'Azur, France",
                "latitude": 43.952499,
                "longitude": 4.804022,
                "new_id": "c|FRavignon_@spg6j",
                "city_id": 57,
                "gpuid": "c|FRavignon_@spg6j",
                "nb_search": "12",
                "popular": true,
                "iscity": true
                }
]
                
            

        // Mock de la reponse de l'API
        const response = {data: data}
        mockedAxios.get.mockResolvedValueOnce(response);

        //Appel de la méthode getDestinations
        const result = await getDestinations(destinations[0], destinations[1]);
        // verification des données retournées par la méthode getDestinations
        expect(result).toEqual(data);
        
        expect(axios.get).toHaveBeenCalledTimes(2)
        expect(axios.get).toHaveBeenCalledWith('https://api.comparatrip.eu/cities/popular/from/paris/5');

    })



    it('should fetch depart successfully', async()=>{
        const querySearch = 'paris';
      
           const data =[
{
    "city_id": 628,
    "station_id": 0,
    "local_name": "Paris, Île-de-France, France",
    "latitude": 48.8566,
    "longitude": 2.3515,
    "unique_name": "paris",
    "station_unique_name": null,
    "iscity": true,
    "score": 46,
    "serviced": true,
    "emoji": null,
    "gpuid": "c|FRparis___@u09tv"
    },
    {
    "city_id": 15173,
    "station_id": 0,
    "local_name": "Paris Charles-de-Gaulle Airport, Île-de-France, France",
    "latitude": 49.0096906,
    "longitude": 2.5479245,
    "unique_name": "paris-charles-de-gaulle-airport",
    "station_unique_name": null,
    "iscity": true,
    "score": 23,
    "serviced": true,
    "emoji": null,
    "gpuid": "c|FRpachgaai@u09yf"
    },
    {
    "city_id": 2181,
    "station_id": 0,
    "local_name": "Paris Aéroport Orly, Île-de-France, France",
    "latitude": 48.7453214,
    "longitude": 2.3951433,
    "unique_name": "paris-aeroport-orly",
    "station_unique_name": null,
    "iscity": true,
    "score": 16,
    "serviced": true,
    "emoji": null,
    "gpuid": "c|FRparaeror@u09tq"
    }
    ]

        mockedAxios.get.mockResolvedValueOnce({data: data});

        //Appel de la méthode getFromDestination
         const result = await getFromDestination(querySearch);
    
         // verification des données retournées par la méthode getDestinations
         expect(result).toEqual(data);

        expect(axios.get).toHaveBeenCalledTimes(2);
        expect(axios.get).toHaveBeenCalledWith(`https://api.comparatrip.eu/cities/autocomplete/?q=${querySearch}`);
        
    });
});


