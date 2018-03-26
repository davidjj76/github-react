This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Development

After clone this repo...
```sh
npm install
npm start
```

## Production
```sh
npm run build
```

and serve with any server (http-server or configure nginx or whatever)

## With docker

Build and start container
```sh
docker-compose up -d --build
```

Build and start container for production (node + nginx)
```sh
docker-compose -f docker-compose-prod.yml up -d --build
```

Stop container
```sh
docker-compose stop
```

## See in production
https://blissful-hamilton-88ee6b.netlify.com/.
