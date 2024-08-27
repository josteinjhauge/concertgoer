import { Concert } from "./model";
import { Request, Response } from "express";

export class ConcertController {
    private readonly repo: ConcertRepository = new ConcertRepository();

    /**
     * Get all concerts
     *
     * @param {Request} req
     * @param {Response} res
     * @returns {Promise<Response>}
     */
    async getAllConcerts(req: Request, res: Response): Promise<Response>{ 
        try {
            const concerts: Concert[] = await repo.getConcerts({}, true);

            return res.status(200).json(concerts);
        } catch (err) {
            return res.status(500).json({
                error: err.message || err,
                status: 500
            });
        }
    }
}