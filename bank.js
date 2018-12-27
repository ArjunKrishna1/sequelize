import connection from './config';
import sequelize from 'sequelize';
import { create } from 'domain';

var user =  connection.define('user', {
  email : {
    type: sequelize.STRING
  },
  password: {
    type: sequelize.STRING
  },
  userid: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4 
  }
});

var banks =  connection.define('banks', {
  userid: {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4 
  },
  money: {
    type: sequelize.INTEGER
  }
});

var chat = connection.define('chat', {
  chatid : {
    type: sequelize.UUID,
    defaultValue: sequelize.UUIDV4 
  },
  user1:{
    type: sequelize.UUIDV4
  },
  user2:{
    type: sequelize.UUIDV4
  }
});

var msgs = connection.define('msgs', {
  chatid: {
    type: sequelize.UUIDV4
    
  },
  user:{
    type: sequelize.UUIDV4
  },
  message: {
    type: sequelize.TEXT
  }

})


//connection.sync({force : true});
/*
var amountToWithdraw = 200;
connection.transaction(function (t) {

  return banks.findOne({where: {
         money: {
           $gt: 0
         }
      }, lock: t.LOCK.UPDATE ).then(function(banks){
      console.log("index running")
      banks.money += amountToWithdraw;
      return banks.save({transaction: t});
    })
    .catch(err => console.log(err))
  })
*/
var amountToWithdraw = 300;
banks.findOne({where:{
  money: {
    $gt: 0
  }}}).then(function(banks){
    console.log("bank running")
    banks.money -= amountToWithdraw;
    banks.save();
  })

  .catch(err => console.log(err));










/*
banks
  .findOrCreate({where: {id : 1}, defaults: { money:5000}})
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
    console.log(created)
  })
  */








/*
  sequelize.transaction(function (t) {

    // chain all your queries here. make sure you return them.
    return User.create({
      firstName: 'Abraham',
      lastName: 'Lincoln'
    }, {transaction: t}).then(function (user) {
      return user.setShooter({
        firstName: 'John',
        lastName: 'Boothe'
      }, {transaction: t});
    });
  
  }).then(function (result) {
    // Transaction has been committed
    // result is whatever the result of the promise chain returned to the transaction callback
  }).catch(function (err) {
    // Transaction has been rolled back
    // err is whatever rejected the promise chain returned to the transaction callback
  });
  */



//Find by Id
/*
user.findById(2).then(
  user => console.log(user.get({
    plain: true
  }))
)
.catch(err => console.log(err))
.finally(() => connection.close());
*/