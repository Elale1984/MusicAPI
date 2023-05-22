import { execute } from "../services/mysql.connector";
import { Artist } from "./artists.model";
import { artistQueries } from './artist.queries'

export const readArtists = async () => {
    console.log("Reading Artist method in dao");
    return execute<Artist[]>(artistQueries.readArtists, []);
};