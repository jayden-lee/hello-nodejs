# Express CRUD Example with MongoDB

## Installing MongoDB
```
docker pull mongo
docker run --name mongo -d -v /Users/jayden/Dev/mongodb/db:/data/db -p 27017:27017 mongo -auth
```

## MongoDB 사용자 생성
```
docker exec -it mongo bash
mongo
use admin
db.createUser({user: 'root', pwd: 'admin007!', roles: ['root']})
```

## MongoDB IDE Tool
- [Compass](https://www.mongodb.com/download-center/compass)

<img width="1392" alt="compass-connection" src="https://user-images.githubusercontent.com/43853352/68990632-d2a06680-0898-11ea-8a88-03a935c1a78c.png">

### 데이터베이스 생성
```
use nodejs
```

### 컬렉션 생성
```
db.createCollection('users')
db.createCollection('comments')
```

### 다큐먼트 생성
```
db.users.save({name:'jayden', age:29, married: false, comment: '안녕하세요', createdAt: new Date()});
db.users.save({name:'ella', age:27, married: false, comment: '안녕하세요', createdAt: new Date()});

db.users.find({name: 'jayden'}, {_id:1})

db.comments.save({commenter: ObjectId("5dcfb87c482070b3b824567a"), comment: '안녕하세요. 댓글입니다.', createdAt: new Date() });
```