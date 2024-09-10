import express, {Response, Request, NextFunction }from 'express';

const app = express();
const port = 3000;

app.use('/', (req: Request, res: Response, next: NextFunction) => {

    res.status(200).send({data: "hello mbare"});
});

app.listen(port, () => {

    console.log(`server running on port ${port}`)
});


