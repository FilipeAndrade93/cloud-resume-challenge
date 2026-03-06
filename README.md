# Cloud Resume Challenge - Filipe Andrade

[![Live Site](https://img.shields.io/badge/Live%20Site-filipe--andrade.com-orange?style=for-the-badge)](https://filipe-andrade.com)
[![Frontend](https://img.shields.io/badge/Frontend-React%20%2B%20TypeScript-blue?style=for-the-badge)](https://react.dev)
[![Backend](https://img.shields.io/badge/Backend-Java%20%2B%20AWS%20Lambda-green?style=for-the-badge)](https://aws.amazon.com/lambda/)

A full-stack cloud-hosted CV inspired by the [Cloud Resume Challenge](https://cloudresumechallenge.dev/), combining a modern frontend with a serverless AWS backend.

![Preview](./frontend/public/fa_linkedin_banner.png)

---

## Live

**[https://filipe-andrade.com](https://filipe-andrade.com)**

---

## Architecture

```
User Browser
     │
     ▼
Route 53 (DNS)
     │
     ▼
CloudFront (CDN + HTTPS)
     │
     ├──▶ S3 Bucket (Static frontend assets)
     │
     └──▶ AWS Lambda Function URL (Visitor counter API)
               │
               ▼
          DynamoDB (Visitor count persistence)
```

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React + TypeScript | UI framework |
| SCSS (BEM) | Styling |
| Vite | Build tool |
| AWS S3 | Static file hosting |
| AWS CloudFront | Global CDN + HTTPS |
| AWS Route 53 | Custom domain DNS |

### Backend
| Technology | Purpose |
|---|---|
| Java 21 | Lambda runtime |
| Spring Boot | Application framework |
| AWS Lambda | Serverless function |
| AWS DynamoDB | Visitor count storage |
| AWS Function URL | HTTP endpoint |

---

## Features

- Fully responsive, optimised for mobile, tablet and desktop
- Live visitor counter tracking visits via a serverless Lambda and DynamoDB
- Custom domain served over HTTPS at `filipe-andrade.com`
- Global CDN via CloudFront edge locations for fast load times worldwide
- Collapsible project cards with an interactive expandable experience timeline
- BEM SCSS architecture with design tokens for maintainable, scalable styling

---

## Project Structure

```
cloud-resume-challenge/
├── frontend/                  # React + TypeScript + SCSS
│   ├── src/
│   │   ├── components/
│   │   │   ├── Hero/
│   │   │   ├── About/
│   │   │   ├── Experience/
│   │   │   ├── Education/
│   │   │   ├── Skills/
│   │   │   ├── OtherActivities/
│   │   │   ├── Contacts/
│   │   │   └── Navbar/
│   │   └── styles/            # Global variables, mixins, breakpoints
│   └── public/
└── backend/                   # Java + Spring Boot Lambda
    └── src/
        └── main/
            └── java/
                └── com/example/demo/
                    ├── BackendApplication.java
                    ├── CounterController.java
                    ├── DynamoDBService.java
                    └── Handler.java
```

---

## Running Locally

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
mvn clean package -DskipTests
# Deploy JAR to AWS Lambda manually or via CLI
```

### Environment Variables
Create a `.env` file in `frontend/`:
```
VITE_AWS_ENDPOINT=https://your-lambda-function-url
```

---

## AWS Infrastructure

| Service | Usage |
|---|---|
| S3 | Hosts the built React app (`dist/`) |
| CloudFront | CDN distribution with HTTPS and custom domain |
| Route 53 | DNS records pointing to CloudFront |
| ACM | Free TLS certificate for `filipe-andrade.com` |
| Lambda | Serverless visitor counter function |
| DynamoDB | Single-table storage for visitor count |

---

## What I Learned

- Deploying and configuring a full AWS static hosting pipeline (S3 → CloudFront → Route 53)
- Writing and deploying a Java Spring Boot Lambda function with a Function URL
- Managing CORS between a CloudFront-hosted frontend and a Lambda backend
- Structuring SCSS at scale using BEM conventions and a design token system
- Handling responsive layouts with a two-breakpoint mixin system and `clamp()` for fluid typography
- Debugging DNS propagation and CloudFront cache invalidation

---

## Contact

**Filipe Andrade** - [filipe-andrade.com](https://filipe-andrade.com) - [LinkedIn](https://www.linkedin.com/in/filipe-andrade-4549138b/) - [GitHub](https://github.com/FilipeAndrade93)
