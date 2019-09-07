'use strict';
let numberOfTask = 0;
const log = () => {
  ++numberOfTask;
  console.log(`Задание номер ${numberOfTask}`);
};
import { default as users } from './users.js';

log();
const getUserNames = users => {
  return users.map(user => user.name);
};
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez',....

log();
const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color)
};
console.log(getUsersWithEyeColor(users, 'blue'));

log();
const getUsersWithGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .map(user => user.name);
};
console.log(getUsersWithGender(users, 'male'));

log();
const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};

console.log(getInactiveUsers(users));

log();
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

log();
const getUsersWithAge = (users, min, max) => {
  return users.filter(user => min < user.age && user.age < max)
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

log();

const calculateTotalBalance = users => {
  return users.reduce((acc, user) => acc += user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

log();

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.find(friend => friendName === friend))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

log();

const getNamesSortedByFriendsCount = users => {
  return users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

log();

const getSortedUniqueSkills = users => {
  return users
    .reduce((acc, user) => {
      user.skills.map(skill => {
        if (!acc.includes(skill)) {
          acc.push(skill);
        }
      });
      return acc;
    }, [])
    .sort();
};

console.log(getSortedUniqueSkills(users));
