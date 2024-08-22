import { Concert } from "./model";

export class ConcertController {
    private readonly repo: ConcertRepository = new ConcertRepository();

    /**
     * Get all concerts
     *
     * @param {Request} req
     * @param {Response} res
     * @returns {Promise<Response>}
     */
    async getConcerts(req: Request, res: Response): Promise<Response>{ 
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