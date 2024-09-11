import express, {Response, Request }from 'express';
import path from 'path'
import { getDashboardData } from './controllers/getDashboardData';
import { SALUTATION, TITLE } from './constants/string';
const app = express();
const port = 3000;

/**
 * lets setup view engine with plug 
 */
app.set('view engine', 'pug')

app.use('/public',express.static(path.join(__dirname + '/public')))

app.set('views', path.join(__dirname, './views/'))

app.get('/', async (req: Request, res: Response) => {

    const dataToPass = await getDashboardData()
    res.render('index',{title: TITLE, message: SALUTATION, data: dataToPass});

});

app.listen(port, () => {

    console.log(`server running on port ${port}`)
});



export default app