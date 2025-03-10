const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello from AWS Lambda!Demo message changes to check the pipeline' });
});

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
    awsServerlessExpress.proxy(server, event, context);
};
