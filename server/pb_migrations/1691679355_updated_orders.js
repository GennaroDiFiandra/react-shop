migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr6otwqcsy5oell")

  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kr6otwqcsy5oell")

  collection.createRule = null

  return dao.saveCollection(collection)
})
