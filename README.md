# Segmentation with JSON Logic

This is an experiment in using JSON logic to segment data based on a static configuration JSON.


## Getting started

Install and start the server:

```sh
npm install
npm run build
npm start
```

## Routes

### Get segmentation details:

```sh
curl --location 'http://localhost:3333/segment/Person/Color'
```

### Segment a model:

```sh
curl --location 'http://localhost:3333/segment/Person/Color' \
    --header 'Content-Type: application/json' \
    --data '{ "favouriteColor": "green" }'
```

Should return:

```json
{
  "name": "Likes Green",
  "id": "person-color-green",
  "rule": {
    "==": [
      {
        "var": "favouriteColor"
      },
      "green"
    ]
  }
}
```