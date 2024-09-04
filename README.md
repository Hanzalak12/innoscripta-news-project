## Innoscripta Backend Laravel News API

The challenge is to build a news aggregator website that pulls articles from various sources and displays them in a clean,
easy-to-read format

<img src="https://res.cloudinary.com/diaylgu7a/image/upload/f_auto,q_auto/rzpzb5fyot8xfxdovv4u"/>

### Installation

#### Install manually

1. Clone this repository : git clone https://github.com/hanzalak12/innoscripta-news-project.git
2. Execute : cd innoscripta-news-project
3. Execute : cd serverSide
4. Execute : copy .env.example .env **(if you have windows)** or cp .env.example .env **(if you have linux/macos)**
5. Execute: docker-compose up -d --build **(if you have docker installed)**
6. Execute: docker-compose exec app composer install
7. Execute migrations: docker-compose exec app php artisan migrate
8. Access the application via http://localhost:8000
#### Install with Makefile


1. Clone this repository : git clone https://github.com/hanzalak12/innoscripta-news-project.git
2. Execute : cd innoscripta-news-project
3. Execute : cd serverSide
4. make boot **(install dependencies and run migration)**
5. demo account: 
        email: hanzalakhan@gmail.com  
        password: 12345678

#### Other commands
1. make up **(start docker)**
2. make down **(stop docker)**









## Innoscripta React News APP

The challenge is to build a news aggregator website that pulls articles from various sources and displays them in a clean,
easy-to-read format

<img src="https://res.cloudinary.com/diaylgu7a/image/upload/f_auto,q_auto/ziaqovbawnzfjzh5e7iz">

### Installation


1. Clone this repository : git clone https://github.com/hanzalak12/innoscripta-news-project.git
2. Execute : cd innoscripta-news-project
3. Execute : cd clientSide
4. Execute : docker-compose up -d --build
5. Access the application via http://localhost:3000