let users;

if(localStorage.getItem("storedUsers")===null) {
users = [];
} else {
    users=JSON.parse(localStorage.getItem("storedUsers"))
}

export {users};