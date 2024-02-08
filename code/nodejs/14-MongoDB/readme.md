# NoSQL

- Slides: https://docs.google.com/presentation/d/1xqwQm6-_75ElOmyJ42I7l0zuPg9Z5SUte1Rbuqe3WH8

# MongoDB

- CommunityServer: https://www.mongodb.com/try/download/community
- Compass: https://www.mongodb.com/try/download/compass
- Cloud: https://account.mongodb.com
- VSCode Extension: https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode

### MongoDB

- Installation Notes:

  - Windows

    - MongoDB CommunityServer & Compass
      - https://www.mongodb.com/try/download/community
      - https://lms.clarusway.com/mod/lesson/view.php?id=4089
    - MongoDB Shell (Mongosh):
      - https://www.mongodb.com/try/download/shell [Select "Windows 64-bit (8.1+) (MSI)"]
      - Set "uncheck" for "install just for you"

  - MacOS
    - HomeBrew: https://brew.sh
      ```sh
      # HomeBrew Install
      $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
      $ brew -v # --version
      # HomeBrew Uninstall:
      $ brew cleanup # delete unused apps.
      $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)"
      ```
    - MongoDB CommunityServer & Mongosh: https://www.mongodb.com/docs/v4.0/tutorial/install-mongodb-on-os-x/
      ```sh
      $ brew tap mongodb/brew # brew tap
      $ brew install mongodb-community
      $ brew services start mongodb-community # brew services list|stop
      # Manual Start: $ mongod --config /usr/local/etc/mongod.conf --fork
      ```
    - MongoDB Compass: https://www.mongodb.com/try/download/compass
  - Linux:
    - https://www.mongodb.com/docs/manual/administration/install-on-linux/

### Mongosh:

    ```sh
    $ mongosh --version
    $ mongosh # defaul:local
    $ mongosh mongodb://localhost:27017/
    ```

### MongoDB on Cloud (Atlas):

Sign-In -> https://mongodb.com

    * Create Organization
        * CloudService: Atlas
        * IP Access: NO
    * Create Project
    * Create Database
        * Cluster: Free
        * Set User&Pass
        * Use LocalEnvironment
        * Add IP for access
    * Click Connect for connection-strings:
        * For NodeJS: Drivers
        * And other tools (ex:Compass)

### Mongosh Commands:

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
      - db.coll.find({ age: { $lt: 15 } }) // <= : less than equal
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
