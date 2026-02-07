// location.controller.ts
import { Request, Response } from 'express';
import * as locationService from './location.service';

export const getLocations = async (req: Request, res: Response) => {
    try {
        const destinos = await locationService.findAllDestinos();
        res.json({ 
            success: true,
            data: destinos 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error instanceof Error ? error.message : 'Error desconocido' 
        });
    }
};

export const getAllAddresses = async (req: Request, res: Response) => {
    try {
        const destinos = await locationService.findAllDestinos();
        const addresses = destinos.map(d => ({
            nombre: d.nombre,
            posicion: d.posicion
        }));
        res.json({ 
            success: true,
            data: addresses 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error instanceof Error ? error.message : 'Error desconocido' 
        });
    }
};