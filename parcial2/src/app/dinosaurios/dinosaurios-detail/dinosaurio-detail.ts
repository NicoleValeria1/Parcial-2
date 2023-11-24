import { Dinosaurio } from "../dinosaurio";

export class DinosaurioDetail extends Dinosaurio {
    constructor(
        id: number,
        name: string,
        scientificName: string,
        description: string,
        shortDescription: string,
        era: string,
        feeding: string,
        discoveryCountry: string,
        image: string,
    ) {
      super(id, name, scientificName, description, shortDescription, era, feeding, discoveryCountry, image)
    }
  }