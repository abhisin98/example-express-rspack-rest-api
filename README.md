# Express & Rspack API

## 📌 Overview

This project is an API built using **Express.js** for handling HTTP requests and **Rspack** for efficient module bundling.

## 🚀 Features

- RESTful API with Express.js
- Optimized bundling using Rspack
- Environment variable management
- Error handling and logging
- Middleware integration
- Modular route handling

## 🔧 Installation

To get started, clone the repository and install dependencies:

```sh
git clone <repository-url>
cd <project-folder>
pnpm install
```

⚙️ Configuration
Create a .env file in the root directory and specify your environment variables:

```sh
PORT=4000
NODE_ENV=development
```

▶️ Running the Server
Start the Express server:

```sh
pnpm run start
```

For development mode:

```sh
pnpm run dev
```

📦 Rspack Integration
Bundle the application using Rspack:

```sh
pnpm run build
```

📜 API Routes

GET /api/status
Returns the API status.

```sh
{
  "status": true,
  "info": "API is running"
}
```

🛠️ Development Setup
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

🤝 Contributing
Feel free to open issues or submit pull requests! 🚀

📃 License
This project is licensed under the MIT License.

```sh
Let me know if you'd like any modifications! 🚀
```
