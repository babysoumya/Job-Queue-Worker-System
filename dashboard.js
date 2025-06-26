const Arena = require('bull-arena');
const express = require('express');
const { Queue } = require('bullmq');

const app = express();

const arenaConfig = Arena({
  BullMQ: Queue,
  queues: [
    {
      name: 'job-queue',
      hostId: 'Local Redis',
      type: 'bullmq',
      redis: {
        host: 'localhost',
        port: 6379,
      },
    },
  ],
}, {
  basePath: '/arena',
  disableListen: true,
});

app.use('/', arenaConfig);

app.listen(3001, () => {
  console.log('Arena UI listening at http://localhost:3001/arena');
});
