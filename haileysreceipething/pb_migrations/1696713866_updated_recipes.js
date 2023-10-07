migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pzefdjowkyqd01s")

  collection.listRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pzefdjowkyqd01s")

  collection.listRule = null

  return dao.saveCollection(collection)
})
