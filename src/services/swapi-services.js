export default class SwapiService {
  _mainUrl = "https://swapi.dev/api";
  _mainImage = "https://starwars-visualguide.com/assets/img";

  getResurce = async (url) => {
    const resp = await fetch(`${this._mainUrl + url}`);
    if (!resp.ok) {
      throw new Error(`Ошибка чтения ресурса ${this._mainUrl}. ${resp.status}`);
    }
    const body = await resp.json();
    return body;
  };

  getAllPeople = async () => {
    const resp = await this.getResurce(`/people/`);
    return resp.results.map(this._transformDataPeople);
  };

  getPerson = async (id) => {
    const resp = await this.getResurce(`/people/${id}`);
    return this._transformDataPeople(resp);
  };

  getAllPlanets = async () => {
    const resp = await this.getResurce(`/planets/`);
    return resp.results.map(this._transformDataPlanet);
  };

  getPlanet = async (id) => {
    const item = await this.getResurce(`/planets/${id}`);
    return this._transformDataPlanet(item);
  };

  getAllStarShips = async () => {
    const resp = await this.getResurce(`/starships/`);

    return resp.results.map(this._transformDataStarShip);
  };

  getStarship = async (id) => {
    const resp = await this.getResurce(`/starships/${id}`);
    return this._transformDataStarShip(resp);
  };

  getPersonImageUrl = (id) => {
    return `${this._mainImage}/characters/${id}.jpg`;
  };

  getStarShipImageUrl = (id) => {
    return `${this._mainImage}/starships/${id}.jpg`;
  };

  getPlanetImageUrl = (id) => {
    return `${this._mainImage}/planets/${id}.jpg`;
  };

  _transformDataPeople(element) {
    const regExpr = /\/([0-9]*)\/$/;

    return {
      id: element.url.match(regExpr)[1],
      name: element.name,
      height: element.height,
      mass: element.mass,
      hairColor: element.hair_color,
      skinColor: element.skin_color,
      eyeColor: element.eye_color,
      birthYear: element.birth_year,
      gender: element.gender,
    };
  }

  _transformDataStarShip(element) {
    return {
      name: element.name,
      model: element.model,
      manufacturer: element.manufacturer,
      costInCredits: element.cost_in_credits,
      length: element.length,
      maxAtmospheringSpeed: element.max_atmosphering_speed,
      starshipClass: element.starship_class,
    };
  }

  _transformDataPlanet(element) {
    const regExpr = /\/([0-9]*)\/$/;

    return {
      id: element.url.match(regExpr)[1],
      name: element.name,
      population: element.population,
      diameter: element.diameter,
      rotationPeriod: element.rotation_period,
    };
  }
}
