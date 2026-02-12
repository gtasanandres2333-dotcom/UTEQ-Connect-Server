import { Router } from 'express';
import {
    getAllPersonal,
    getPersonalById,
    createNewPersonal,
    updatePersonalById,
    deletePersonalById,
    getPersonalByDepartamento,
    getPersonalByEstatus,
    getPersonalConUbicacion,
    getProfesorConUbicacion,
    searchPersonal
} from './personal.controller.js';

const router = Router();

router.get('/buscar', searchPersonal);
router.get('/departamento/:departamento', getPersonalByDepartamento);
router.get('/estatus/:estatus', getPersonalByEstatus);
router.get('/ubicacion/departamento/:departamento', getPersonalConUbicacion);
router.get('/ubicacion/profesor/:numeroEmpleado', getProfesorConUbicacion);

router.get('/', getAllPersonal);
router.get('/:id', getPersonalById);
router.post('/', createNewPersonal);
router.put('/:id', updatePersonalById);
router.delete('/:id', deletePersonalById);

export default router;
