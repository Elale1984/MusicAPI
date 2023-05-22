import { Request, RequestHandler, Response } from "express";
import * as ArtistDao from './artist.dao';

export const readArtists: RequestHandler = async (req: Request, res: Response) => {
    try {
        const artist = await ArtistDao.readArtists();
        console.log("The artist retrieved successfully and is ", artist);
        res.status(200).json(
            artist
        );
    } catch (error) {
        console.error('[artist.controller][readArtist][Error] ', error);
        res.status(500).json({
            message: 'There was an error when fetching artists'
        });
    }
    
};