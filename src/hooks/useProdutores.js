import { useState, useEffect } from 'react';

import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores(){
    const [ titulo, setTitulo ] = useState('');
    const [ lista, setLista ] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        retorno.lista.sort((a,b) => a.estrelas > b.estrelas)
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []) // [] = Faz a função quando o componente é carregado

    return [ titulo, lista ];
}