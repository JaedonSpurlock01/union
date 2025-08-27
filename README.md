# Union

Your research paper AI assistant that focuses on democratizing doctorate-level research to everyone.

# Features

- User accounts / authentication
- Upload a PDF
- Generate a brief AI-powered summary.
- The summary will link to different sections of the paper.
- AI-based highlighting of the paper
- Conversational AI (chatbot)

## Deferred Features

These are futures we plan to implement in the future

- Visualize references/citations as an interactive graph
- Add user-friendly research paper search

# Tech Stack

- React 19
- NextJS 15
- TailwindCSS
- Shadcn/UI
- TRPC
- Tanstack Query
- Better Auth
- Postgres (Neon)
- Drizzle

# Local development

1. Make sure you have NodeJS installed. You can install it using this link: https://nodejs.org/en/download/
2. Create a .env file in the root directory: `touch .env`

3. Fill the .env file with these contents

```
DATABASE_URL=
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

4. Set up google credentials for the auth provider by following the Google Cloud instructions here: https://www.better-auth.com/docs/authentication/google

5. Generate a database URL by creating a project on [Neon](https://neon.tech) and clicking connect and copying the connection string

6. Install dependencies by doing `npm install`

7. Run the development server by doing `npm run dev`

8. (Optional) Open the drizzle studio to see the database: `npm run db:studio`
