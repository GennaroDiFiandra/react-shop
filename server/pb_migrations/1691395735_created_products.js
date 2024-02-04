migrate((db) => {
  const collection = new Collection({
    "id": "8ci2id3f6g5z2y4",
    "created": "2023-08-07 08:08:55.095Z",
    "updated": "2023-08-07 08:08:55.095Z",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ex3izwqs",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yy9pwadz",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hbmekvod",
        "name": "price",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "mkgktm0y",
        "name": "image",
        "type": "url",
        "required": true,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8ci2id3f6g5z2y4");

  return dao.deleteCollection(collection);
})
