import React, {useEffect, useState} from 'react';
import {Button, Card, CardContent, Typography} from '@mui/material';
import axios from 'axios';

const People = () => {
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [people, setPeople] = useState([]);
    const username = 'vinicius';

    useEffect(() => {
        fetchFavorites().then(r => {
            fetchPeople().then(rr => {
                setPeople(tool(r, rr))
                setLoading(false);
            });
            setFavorites(r.data)
        });
    }, []);

    const tool = (r, rr) => {
        let filmsWithFavoriteStatus = [];

        if (r.data && rr.data.results) {
            filmsWithFavoriteStatus = rr.data.results.map(p => {
                const filmId = p.url.split('/').filter(Boolean).slice(-1)[0];
                const favoriteItem = r.data.find(item => item.swapi_id === filmId);

                return {
                    ...p,
                    isFavorite: !!favoriteItem,
                    api_id: favoriteItem ? favoriteItem.id : null
                };
            });
        } else {
            filmsWithFavoriteStatus = rr.data.results.map(p => ({
                ...p,
                isFavorite: false,
                api_id: null
            }));
        }

        return filmsWithFavoriteStatus;
    }

    const fetchFavorites = async () => {
        try {
            return await axios.get(`http://localhost:5000/favorites/people/${username}`);
        } catch (error) {
            console.error('Erro ao buscar favoritos:', error);
            return [];
        }
    };

    const fetchPeople = async () => {
        try {
            return await axios.get(`https://swapi.dev/api/people/`);
        } catch (error) {
            console.error('Erro ao buscar favoritos:', error);
            return []
        }
    };

    const removeFromFavorites = async (id) => {
        try {
            await fetch(`http://localhost:5000/favorites/${id}/${username}/`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Connection': 'keep-alive',
                },
            })
        } catch (error) {
            console.error('Erro ao remover dos favoritos:', error);
        }

        window.location.reload();
    };

    const addToFavorites = async (id) => {
        const data = {
            username: username,
            description: 'Descrição do favorito',
            swapi_id: `${id}`,
            type: 'people'
        };

        try {
            await axios.post('http://localhost:5000/favorites/', data);
        } catch (error) {
            console.error('Erro ao adicionar aos favoritos:', error);
        }

        window.location.reload();
    };


    return (
        <div>
            {loading ? (
                <Typography variant="h5">Carregando...</Typography>
            ) : (
                people.map((film) => (
                    <Card sx={{ maxWidth: 400 }}>
                        <CardContent key={film.id}>
                            <Typography variant="h5">{film.name}</Typography>
                            <Typography variant="body1">{film.gender}</Typography>
                            {film.isFavorite ? (
                                <Button variant="contained" color="error" onClick={() => removeFromFavorites(film.api_id)}>Remover dos favoritos</Button>
                            ) : (
                                <Button variant="contained" color="primary" onClick={() => addToFavorites(film.url.slice(-2, -1)[0])}>Adicionar aos favoritos</Button>
                            )}
                        </CardContent>
                    </Card>
                ))
            )}
        </div>
    );
};

export default People;
