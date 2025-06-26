const express = require('express');
const { Queue } = require('bullmq');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(express.json());

const queue = new Queue('job-queue', {
  connection: {
    host: 'localhost',
    port: 6379
  }
});

app.post('/send-email', async (req, res) => {
  const { to, subject, body } = req.body;

  if (!to || !subject || !body) {
    return res.status(400).send({ error: 'Missing email fields' });
  }

  const jobId = uuidv4();

  await queue.add('email', { to, subject, body }, {
    jobId,                            // Unique ID for deduplication or traceability
    attempts: 3,                      // Retry on failure up to 3 times
    backoff: {
      type: 'exponential',
      delay: 1000                    // 1s, 2s, 4s backoff
    },
    removeOnComplete: true,          // Clean up after success
    removeOnFail: false              // Keep failed jobs for dashboard/monitoring
  });

  console.log(`Job queued: ${jobId}`);

  res.send({ message: 'Job queued', jobId });
});

app.listen(3000, () => {
  console.log('Job producer running at http://localhost:3000');
});