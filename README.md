# ⚙️ Job Queue + Worker System with Node.js, Redis, BullMQ

A scalable job queue and worker system to process background tasks asynchronously using Redis, [BullMQ](https://docs.bullmq.io/), and Arena UI for monitoring.

---

## 🛠 Features

- 🧵 Decoupled producer-consumer architecture
- ✅ Reliable background task processing
- 🔁 Retry logic for failed jobs
- 👀 Web UI monitoring with [Arena](https://github.com/bee-queue/arena)
- 🧪 Easy local setup with Docker (for Redis)

---


## 🚀 Getting Started

1. Clone the Repo
git clone https://github.com/babysoumya/job-queue-system.git
cd job-queue-system

2. npm install

3. Make sure Docker is running, then:
  docker run -d -p 6379:6379 --name redis-server redis



## 🚀 Getting Started

1. Start the Job Producer
  cd producer
  node index.js
2. Start the Job Worker
  cd worker
  node index.js
![image](https://github.com/user-attachments/assets/86cc6b5e-c01e-4ec1-8e98-c16108ccbc5a)

![image](https://github.com/user-attachments/assets/cf361db3-2069-4b6f-a9f3-1ae55aa63aaf)



4. Start Arena Dashboard (Monitoring UI)
  node dashboard.js
![image](https://github.com/user-attachments/assets/85fa76c6-4a10-4cb0-ab41-a584ce9db64b)
