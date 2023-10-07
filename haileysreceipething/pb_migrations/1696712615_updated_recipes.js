migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pzefdjowkyqd01s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fhavdtlt",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pzefdjowkyqd01s")

  // remove
  collection.schema.removeField("fhavdtlt")

  return dao.saveCollection(collection)
})
