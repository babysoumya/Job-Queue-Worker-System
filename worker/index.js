const { Worker } = require('bullmq');
const IORedis = require('ioredis');

const connection = new IORedis();

const worker = new Worker('job-queue', async job => {
  console.log(`Processing job ${job.id} of type ${job.name}`);
  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate work
  console.log(`Job ${job.id} completed with payload:`, job.data);
}, { connection });

console.log('Worker started...');