import { validationResult } from 'express-validator';

const validarCampos = async ( req, res, next ) => {

    const fields = req.body;
    const { errors } = validationResult(req);



    req.body.errorFields = errors;


    next(); // Go to the next middleware
};


export { validarCampos };
