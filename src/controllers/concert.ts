import { Concert } from "../models/concert";
import { Request, Response } from "express";
import * as repo from '../repository/concert'


    /**
     * Get all concerts
     *
     * @param {Request} req
     * @param {Response} res
     * @returns {Promise<Response>}
     */
   
    const getAllConcerts = async (req: Request, res: Response): Promise<Response> => { 
        try {
            const concerts = repo.getAll();
            return res.status(200).json(concerts);
        } catch (err) {
            return res.status(500).json({
                error: err.message || err,
                status: 500
            });
        }
    }

export default {getAllConcerts}