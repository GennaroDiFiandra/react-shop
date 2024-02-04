migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ci2id3f6g5z2y4")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8ci2id3f6g5z2y4")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
