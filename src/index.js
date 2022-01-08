class SwapiService {
  _mainUrl = "https://swapi.dev/api";

  async getResurce(url) {
    const resp = await fetch(`${this._mainUrl+url}`);
    if (!resp.ok) {
      throw new Error(`Ошибка чтения ресурса ${this._mainUrl}. ${resp.status}`)
    }
    const body = await resp.json();
    return body;
  }

  async getAllPeople() {
    const resp = await this.getResurce(`/people/`);
    return resp.results
  }

  getPerson(id) {
    return this.getResurce(`/people/${id}`);
  }

  async getAllPlanets() {
    const resp = await this.getResurce(`/planets/`);
    return resp.results
  }

  getPlanet(id) {
    return this.getResurce(`/planets/${id}`);
  }

  async getAllStarShips() {
    const resp = await this.getResurce(`/starships/`);
    return resp.results
  }

  getStarship(id) {
    return this.getResurce(`/starships/${id}`);
  }
}

const swapiService = new SwapiService();

// swapiService.getAllPeople().then((data) => {
//   data.forEach((el) => console.log(el));
// });

swapiService.getPerson(1).then((data) => {
  console.log(data);
});

// getData("https://swapi.dev/api/people/").then((body) => {
//   console.log(body);
// });

// fetch("https://swapi.dev/api/people/")
//   .then((res) => res.json())
//   .then((body) => {
//     body.results.forEach((element) => {
//       console.log(element.name);
//     });
//   });
