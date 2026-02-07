
import Destino from './location.model';

export const findAllDestinos = async () => {
    try {
        const destinos = await Destino.find();
        return destinos;
    } catch (error) {
        throw new Error('Error obteniendo destinos');
    }
};
