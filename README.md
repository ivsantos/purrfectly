# 🐱 Purrfectly

Welcome to Purrfectly, the ultimate online shopping destination for pet owners! Our unique feature, shoppable videos, allows you to see our pet products in action, used by its final consumers, our mascots! And if you fall in love with one of the animals that appears in the videos, you can even adopt them, as they are in need of a home.

## Features
- Shoppable videos: This feature allows you to see our pet products in action, used by real mascots.
- Pet adoption: You can adopt one of our mascots if you fall in love with them.
- Wide selection of pet products: We offer a wide variety of high-quality products for all your pet's needs.
- Blog-like section with tips and care about your pets.

This project aims to participate in [@midudev](https://www.github.com/midudev) hackathon in collaboration with [Cloudinary](https://cloudinary.com/).

![Landing page](https://user-images.githubusercontent.com/18705658/223207759-f539a62b-3787-4f52-913a-be89f8cd93bb.png)
![Catalog](https://user-images.githubusercontent.com/18705658/223208066-26dd1428-f2c4-4dcb-b552-545406060146.png)
![Adoptables](https://user-images.githubusercontent.com/18705658/223207953-54b009b1-fca8-496a-bcee-c77d188e3dfc.png)
![Tips and cart](https://user-images.githubusercontent.com/18705658/223208142-fabdca71-9eaa-49c5-8fb2-6d879f659be3.png)

<p align="center">
<a href="https://purrfectly.vercel.app/" target="blank">View project</a>
·
<a href="https://github.com/ivsantos/purrfectly/issues/new/choose">Report Bug</a>
·
<a href="https://github.com/ivsantos/purrfectly/issues/new/choose">Request Feature</a>
</p>


## 🛠️ Installation Steps
A `.env` file is needed with the following variables:
```
DATABASE_URL -> Connection URL of your primary database.
SHADOW_DATABASE_URL -> Connection URL of the shadow database needed by Prisma for migration operations.
SESSION_SECRET -> The session secret used by remix to handle cookie sessions.
VERCEL_FORCE_NO_BUILD_CACHE -> This is needed if deployed in Vercel in order for it to not cache models and avoid problems.
CLOUDINARY_CLOUD_NAME -> The cloud name of your cloudinary account.
STRIPE_SECRET_KEY -> Used to allow payments (test mode).
```

1. Clone the repository

```bash
git clone https://github.com/ivsantos/purrfectly.git
```

2. CD into the working directory

```bash
cd purrfectly
```

3. Install dependencies

```bash
npm install
```

4. Run the app (Docker is needed to create a PostgreSQL instance with docker-compose)

```bash
npm run docker
npm run dev
```

Enjoy! 🎉


## 💻 Built with
- [Remix.run](https://remix.run/)
- [Typescript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Headless UI](https://headlessui.com/)
- [Stripe](https://stripe.com/)
- [Cloudinary](https://cloudinary.com/) as the core logic of the shoppable videos and catalog images transformations
- [Docker](https://www.docker.com/)
- [ChatGTP](https://chat.openai.com/) as the content generation for the catalog, adoptables and blog posts
- [iStockPhoto](https://www.istockphoto.com/) as the video and images provider
- [Storyset](https://storyset.com/) as the hero logos


## 🙇 Special Thanks
- [@midudev](https://www.github.com/midudev) for the hackathon and the inspiration to the community to keep moving 👋
