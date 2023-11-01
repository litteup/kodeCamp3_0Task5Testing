const axios = require('axios');


const authorization = " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTQwZmVhNDYxZGNhMDY5ZmU3YWE3NDgiLCJ1c2VybmFtZSI6ImFkbWlueCIsInBhc3N3b3JkIjoiJDJiJDEwJDlvdi5QWkEzMmVhVy5SdFF4RnRYUE9RZG5sNGwxQS8vOVBrUkY1SDJGcm9aQy54YW44WVY2Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjk4NzU4NTQzfQ.bHleRMlb7jrC3-KpQ1QcYBN4toagCg7mDNRC-76k8XQ"

test("Test for registration endpoint.", async()=>{
    const response = await axios.post("http://localhost:3000/v1/auth/register", {
        fullName: "admin test2",
        username: "adminTest2",
        password: "admintest2",
        role: "admin"
    });

    expect(response.status).toBe(201);
    expect(response.data).toBe("User created successfully.");
});


test("Test for login endpoint.", async()=>{
    const response = await axios.post("http://localhost:3000/v1/auth/login",{
        "username": "userx",
        "password": "userx"
    });

    expect(response.status).toBe(200);
    expect(typeof(response.data)).toBe("object");
});

test("Test for adding new shop item.", async()=>{
    const response = await axios.post("http://localhost:3000/v1/shop", {
        "name": "Item two",
        "description": "This is item two",
        "price": 1000,
        "isInStock": false
    }, {
        headers:{
            authorization
        }
    });

    expect(response.data.isRequestSuccessful).toBe(true);
    expect(typeof(response.data)).toBe("object");
});

test("Test for getting the list of shop items.", async()=>{
    const response = await axios.get("http://localhost:3000/v1/shop",{
        headers: {
            authorization
        }
    });

    expect(response.data.isRequestSuccessful).toBe(true)
});

test("Test for delete endpoint", async()=>{
    const response = await axios.delete("http://localhost:3000/v1/shop/delete/6542a2227f1ea91ae74bb6a5", {
        headers:{
            authorization
        }
    });

    expect(response.status).toBe(202);
});