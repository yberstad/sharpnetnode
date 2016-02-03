import express from 'express';
/*import schema from './data/schema';
import GraphQLHTTP from 'express-qraphql';


app.use(express.static('public'));
app.use('/graphql', GraphQLHTTP({
	schema,
	graphql: true
}))*/

let app = express();
app.get('/', (req, res) => res.send('Hello'));
app.listen('3000', () => console.log('Listening on port 3000'));