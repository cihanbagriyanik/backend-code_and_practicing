test### Mongosh Commands:

https://www.mongodb.com/developer/products/mongodb/cheat-sheet/

- General:
  - help
  - cls
  - exit
  - quit
- Databases:
  - show dbs // show databases
  - use newdb
  - db.dropDatabase()
- Collections:
  - show collections // show tables
  - db.getCollectionNames()
  - db.getCollectionInfos()
  - db.createCollection('collName')
  - db.collName.renameCollection('collName2')
  - db.collName2.drop()
- Documents:
  - INSERT:
    - db.coll.insertOne( { new_values } )
    - db.coll.insertMany([ { new_values } ])
  - FIND:
    - db.coll.findOne( { filters }, { fields } )
    - db.coll.find( { filters }, { fields } )
    - db.coll.distinct('fieldName')
    - Comparison:
      - db.coll.find({ age: { $exists: true } }) // if exists
      - db.coll.find({ age: { $eq: 15 } }) // == : equal
      - db.coll.find({ age: { $ne: 15 } }) // <> : not equal
      - db.coll.find({ age: { $gt: 15 } }) // > : greather than
      - db.coll.find({ age: { $gte: 15 } }) // >= : greather than equal
      - db.coll.find({ age: { $lt: 15 } }) // <= : less than
      - db.coll.find({ age: { $lte: 15 } }) // <= : less than equal
      - db.coll.find({ age: { $in: [10, 11, 12] } }) // in list
      - db.coll.find({ age: { $nin: [10, 11, 12] } }) // not in list
    - Regex:
      - db.coll.find({ firstName: { $regex: 'Test' } }) // Contains 'Test'
      - db.coll.find({ firstName: /Test/ }) // Contains 'Test'
      - db.coll.find({ firstName: /test/i }) // Case-InSensitive
      - db.coll.find({ firstName: /^Test/ }) // StartsWith 'Test'
      - db.coll.find({ firstName: /Test$/ }) // EndsWith 'Test'
    - Logical:
      - db.coll.find({ 'age': { $not: { $eq: 15 } } }) // NOT {EQUAL}
      - db.coll.find({ 'firstName': 'Test6', 'age': 16 }) // default: AND
      - db.coll.find({ $and: [{ 'firstName': 'Test6' }, { 'age': 16 }] }) // AND
      - db.coll.find({ $or: [{ 'firstName': 'Test6' }, { 'age': 15 }] }) // OR
      - db.coll.find({ $nor: [{ 'firstName': 'Test6' }, { 'age': 15 }] }) // NOT OR
    - Limit:
      - db.coll.find().limit(5)
      - db.coll.find().skip(5).limit(5)
    - Sort:
      <!-- //! 1 is ASC and -1 is DESC in sort() -->
      - db.coll.find().sort({ age: -1 }).limit(5)
    - Count:
      - db.coll.find().count()
      - db.coll.countDocuments()
      - db.coll.countDocuments({ firstName: 'Test' })
      - db.coll.estimatedDocumentCount()
  - UPDATE:
    - db.coll.updateOne( { filters }, { $set: { new_values } } )
    - db.coll.updateMany( { filters }, { $set: { new_values } } )
  - DELETE:
    - db.coll.deleteOne( { filters } )
    - db.coll.deleteMany( { filters } )

```
    Create "session.mongodb.js" named file
    (must ending with "mongodb.js")
    and run commands with mongodb-vscode-extension.
```
