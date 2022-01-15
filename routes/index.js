import express from 'express';
import {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaDetalleViaje
} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js'
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";

const router = express.Router();

/*
 *req -> Lo que enviamos
 *res -> Lo que express nos responde
 */
router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/viajes/:slug', paginaDetalleViaje);

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales',[
    check('nombre', 'El nombre es requerido').notEmpty(),
    check('correo', 'Ingrese un correo valido').isEmail(),
    check('mensaje', 'El mensaje es requerido').notEmpty(),
    validarCampos
], guardarTestimonial);

export default router;
