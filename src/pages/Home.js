import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, Typography} from '@mui/material';
import axios from 'axios';

const Home = () => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [films, setFilms] = useState([]);
    const username = 'vinicius';

    useEffect(() => {
        fetchFavorites().then(r => {
            fetchFilms().then(rr => {
                let filmsWithFavoriteStatus = []
                if(r.data){
                    const favoriteIds = r.data.map(item => item.swapi_id);
                    filmsWithFavoriteStatus = rr.data.results.map(film => ({
                        ...film,
                        isFavorite: favoriteIds.includes(film.id)
                    }));
                }else{
                    filmsWithFavoriteStatus = rr.data.results.map(film => ({
                        ...film,
                        isFavorite: false
                    }));
                }
                setFilms(filmsWithFavoriteStatus);
                setLoading(false)
            });
            setFavorites(r.data)
        });
    }, []);

    const fetchFavorites = async () => {
        try {
            return await axios.get(`http://localhost:5000/favorites/films/${username}`);
        } catch (error) {
            console.error('Erro ao buscar favoritos:', error);
            return [];
        }
    };

    const fetchFilms = async () => {
        try {
            return await axios.get(`https://swapi.dev/api/films/`);
        } catch (error) {
            console.error('Erro ao buscar favoritos:', error);
            return []
        }
    };

    const removeFromFavorites = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/${id}/${username}`);
        } catch (error) {
            console.error('Erro ao remover dos favoritos:', error);
        }
    };

    const addToFavorites = async (id) => {
        const data = {
            username: username,
            description: 'Descrição do favorito',
            swapi_id: id,
            type: 'films'
        };

        try {
            await axios.post('http://localhost:5000/', data);
        } catch (error) {
            console.error('Erro ao adicionar aos favoritos:', error);
        }
    };


    return (
        <div>
            {loading ? (
                <Typography variant="h5">Carregando...</Typography>
            ) : (
                films.map((film) => (
                    <Card sx={{ maxWidth: 400 }}>
                        <CardContent>
                            <Typography variant="h5">{film.title}</Typography>
                            <Typography variant="body1">{film.release_date}</Typography>
                            <Typography variant="body1">{film.director}</Typography>
                            {film.isFavorite ? (
                                <Button variant="contained" color="error" onClick={() => removeFromFavorites(film.id)}>Remover dos favoritos</Button>
                            ) : (
                                <Button variant="contained" color="primary" onClick={() => addToFavorites(film.id)}>Adicionar aos favoritos</Button>
                            )}
                        </CardContent>
                    </Card>
                ))
            )}
        </div>
    );
};

export default Home;
