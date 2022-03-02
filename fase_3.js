import http from 'http';
import { Student } from './fase_2.js';

let data_reader = function (req) {
    return new Promise((resolve) => {
        let data = '';
        req.on('data', chunk => data += chunk)
        req.on('end', () => resolve(JSON.parse(data)))
    })
}

// Webservice class
class Webservice {
    constructor(endpoint, fields) {
        this.endpoint = endpoint
        this.data = []
        this.id = 0,
        this.fields = fields
    }

    GET () {
        return this.data;
    }

    POST(el) {

        if (!this.validate(el))
            return false;

        let student = new Student( el.firstname, el.lastname, el.birthdate, el.grades )
        this.id++
        student.id = this.id
        this.data.push(student)

        return student;
    }

    validate(el) {
        return this.fields.every(field => el[field]);
    }

}

let webservices = {
    '/students': new Webservice( 'students', [ 'firstname', 'lastname', 'birthdate', 'grades' ] )
}

const router = async function (req, res) {
    let url = req.url
    let method = req.method
    let body = method == 'POST' ? await data_reader(req) : null;

    // For security and execution assurance
    if (!webservices[url] || !webservices[url][method]) {
        res.writeHead(404)
        res.end()

        return;
    }

    let result = webservices[url][method]( body )

    // If the request is invalid, return a 400 "Bad request"
    if (!result) {
        res.writeHead(404)
        res.end()

        return;
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
}



const server = http.createServer(router);
server.listen(8080);

/*
curl -X POST -H "Content-Type: application/json" -d '{"firstname": "Pasquale","lastname": "Mazzei","birthdate": "08/03/1988","grades": "10,9,5,8.59,10"}' http://localhost:8080/students
*/