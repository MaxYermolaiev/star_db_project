export default class engine {
    path = 'https://swapi.dev/api';
    async queryData(url) {
        let res = await fetch(`${this.path}${url}`);
        if (!res.ok) throw new Error('cant fetch data from data base')
        return await res.json()
    }
     getAllPlanets=async()=> {
        let temp = await this.queryData('/planets/');
        return temp.results.map(this._transformPlanet);
    }
     getPlanet=async(id)=> {
        let temp = await this.queryData(`/planets/${id}`)
        return this._transformPlanet(temp)
    }
     getAllPeoples=async()=> {
        let temp = await this.queryData('/people/');
        return temp.results.map(this._transformPerson);
    }
     getPerson=async(id)=> {
        const person = await this.queryData(`/people/${id}/`);
        return this._transformPerson(person);
    }
     getAllStarships=async()=> {
        let temp = await this.queryData('/starships/');
        return temp.results.map(this._transformStarship);
    }
    async getStarship(id) {
        let temp =  this.queryData(`/starships/${id}`);
        return this._transformStarship(temp)
    }
    _extractId=(item)=>{
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }
    _transformPerson=(person)=>{
       // let idRegExp = /\/([0-9]*)\/$/;
        //let id= person.url.match(idRegExp)[1];
        //let id=this._extractId(person)
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birthYear,
            eyeColor: person.eyeColor
        }
    }

    _transformStarship=(starship)=>{
        let idRegExp = /\/([0-9]*)\/$/;
        let id= starship.url.match(idRegExp)[1];
        return {
            id,
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }
    _transformPlanet=(planet) =>{
        let idRegExp = /\/([0-9]*)\/$/;
        let id= planet.url.match(idRegExp)[1];
        return {
            id,
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }
}

