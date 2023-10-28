export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    web: string;
    poster:string;

   
    public constructor(id: number, name: string, channel: string, seasons: number, description:string, web:string, poster:string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.web = web;
        this.poster = poster;

      
    }
   }