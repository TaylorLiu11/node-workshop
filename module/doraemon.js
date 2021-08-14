let Doraemon = {
    name: "Doraemon",
    email: "dora@gmail.com",
    username: "dorayaki",
    color: "blue"
};

function getName() {
    return Doraemon.name;
}

function getEmail() {
    return Doraemon.email;
}

function getUsername() {
    return Doraemon.username;
}

function getColor() {
    return Doraemon.color;
}

module.exports = {
    getName,
    getEmail
};

