'use strict';

// массив имен всех пользователей
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));

// массив объектов пользователей по цвету глаз
const getUsersWithEyeColor = (users, color) =>
    users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));

// массив имен пользователей по полу
const getUsersWithGender = (users, gender) =>
    users.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male'));

// массив только неактивных пользователей
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));

// пользоваль по email
const getUserWithEmail = (users, email) =>
    users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

// массив пользователей попадающих в возрастную категорию от min до max лет
const getUsersWithAge = (users, min, max) =>
    users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// общая сумма баланса всех пользователей
const calculateTotalBalance = users =>
    users.reduce((acc, user) => acc + user.balance, 0);

console.log(calculateTotalBalance(users));

// массив имен всех пользователей у которых есть друг с указанным именем
const getUsersWithFriend = (users, friendName) =>
    users
        .filter(user => user.friends.find(friend => friend === friendName))
        .map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// массив имен людей, отсортированных в зависимости от количества их друзей
const getNamesSortedByFriendsCount = users =>
    users
        .sort((userA, userB) => userA.friends.length - userB.friends.length)
        .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));

// массив всех умений всех пользователей в алфавитном порядке, без повторяющихся умений
const getSortedUniqueSkills = users =>
    users
        .map(user => user.skills)
        .flat()
        .filter((skill, index, arr) => arr.indexOf(skill) === index)
        .sort();

console.log(getSortedUniqueSkills(users));
