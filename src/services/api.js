import axios from 'axios'

export function Pokemons (limit, offset){
    return axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
                .then(result => result);
} /** results --> Retorna o name e URI */

export function namePokemon(name){
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(result => result.data)
} /** Retorna -> (importantes) name, id, order */

export function idPokemonImg (id) {
    return axios.get(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
                .then(result => result.data)
} /** Retorna somente a imagem com o mesmo id da API solicitada */