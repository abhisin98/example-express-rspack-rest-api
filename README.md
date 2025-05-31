# Example Express Rspack REST API

## 📌 Overview

This repository contains a REST API built using **Express.js** and **Rspack**, providing efficient and scalable backend services.

## 🚀 Features

- Fast and lightweight Express.js setup
- Optimized bundling using Rspack
- Modular and scalable API structure
- Environment configuration support
- Error handling and logging
- Middleware integration

## 🔧 Installation

To get started, clone the repository and install dependencies:

```sh
git clone https://github.com/abhisin98/example-express-rspack-rest-api.git
cd example-express-rspack-rest-api
pnpm install
```

## ⚙️ Configuration

Create a .env file in the root directory and specify your environment variables:

```sh
PORT=4000
NODE_ENV=development
```

## ▶️ Running the Server

Start the Express server:

```sh
pnpm run start
```

For development mode:

```sh
pnpm run dev
```

## 📦 Rspack Integration

Bundle the application using Rspack:

```sh
pnpm run build
```

## 📜 API Routes

GET /api/status
Returns the API status.

```sh
{
  "status": true,
  "info": "API is running"
}
```

## 📜 Example API Endpoints

Below are the available endpoints in this API:

| Method     | Endpoint                 | Description              |
| ---------- | ------------------------ | ------------------------ |
| **GET**    | `/api/v1/example`        | Fetch example data       |
| **POST**   | `/api/v1/example/add`    | Create new example entry |
| **PUT**    | `/api/v1/example/update` | Update example data      |
| **DELETE** | `/api/v1/example/delete` | Remove example entry     |

## 🛠️ Development Setup

Run ESLint and Prettier:

```sh
pnpm run lint
pnpm run format
```

Testing
Run unit tests:

```sh
pnpm run test
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request. 🚀

## 📃 License

This project is licensed under the MIT License.

```sh
Let me know if you need any modifications or extra sections! 🚀
```
