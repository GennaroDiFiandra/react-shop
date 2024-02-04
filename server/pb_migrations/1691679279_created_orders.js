migrate((db) => {
  const collection = new Collection({
    "id": "kr6otwqcsy5oell",
    "created": "2023-08-10 14:54:39.969Z",
    "updated": "2023-08-10 14:54:39.969Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nawe0sdp",
        "name": "cartItems",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "wlzddrhn",
        "name": "userId",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "0q7nqcbq",
        "name": "total",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "k3fbszac",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "submitted",
            "processing",
            "completed"
          ]
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
  const collection = dao.findCollectionByNameOrId("kr6otwqcsy5oell");

  return dao.deleteCollection(collection);
})
