migrate((db) => {
  const collection = new Collection({
    "id": "pzefdjowkyqd01s",
    "created": "2023-10-07 21:02:54.254Z",
    "updated": "2023-10-07 21:02:54.254Z",
    "name": "recipes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "eeziiypq",
        "name": "name",
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
        "id": "ci3qc7hb",
        "name": "special_attributes",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 4,
          "values": [
            "vegan",
            "gluten-free",
            "vegetarian",
            "keto"
          ]
        }
      },
      {
        "system": false,
        "id": "b8h9xvql",
        "name": "base",
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
        "id": "pwkr3g7y",
        "name": "servings",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null
        }
      },
      {
        "system": false,
        "id": "7ikzt365",
        "name": "ingredients",
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
        "id": "istotib9",
        "name": "instructions",
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
        "id": "0nmpichw",
        "name": "calories",
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
        "id": "fhjt19u8",
        "name": "protein",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("pzefdjowkyqd01s");

  return dao.deleteCollection(collection);
})
