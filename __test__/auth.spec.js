const axios = require('axios');
const {userCollection} = require('../schema/userSchema');
const {router} = require('../routes/auth'); 

let authorization;

it("Test for registration endpoing",async()=>{
    
try {
    
        const response = await axios.post("http://localhost:3000/v1/auth/register", {
            fullName: "admin test",
            username: "admintest",
            password: "admintest",
            role: "admin"
        });
    
        expect(response.status).toBe(201);
        expect(response.data).toBe(`User created successfully.`);

        console.log("user registered successfully")
    
    } catch (error) {
    console.log(error)
}

});


it("Test for login endpoint.", async()=>{
    try {
        let response = await axios
        .post("http://localhost:3000/v1/auth/login",{
        "username": "admintest",
        "password": "admintest"
         
    });

    global.userToken = response.data.token;

    expect(response.status).toBe(200);
    expect(typeof(response.data)).toBe("object");
        
    } catch (error) {
        console.log(error.message)
    }
});


test("Test for adding new shop item.", async()=>{
    try {
        
    const response = await axios.post("http://localhost:3000/v1/shop", {
        "name": "Item two",
        "description": "This is item two",
        "price": 1000,
        "isInStock": false
    }, {
        headers:{
            authorization : `Bearer ${userToken}`
        }
    });

    expect(response.data.isRequestSuccessful).toBe(true);
    expect(typeof(response.data)).toBe("object");
    } catch (error) {
        console.log(`Error while adding a task.\n${error}`);
    }
});

test("Test for getting the list of shop items.", async()=>{
    try {
        const response = await axios.get("http://localhost:3000/v1/shop",{
        headers: {
            authorization : `Bearer ${userToken}`
        }
    });
    
    expect(response.data.isRequestSuccessful).toBe(true)
    } catch (error) {
        console.log(`Error while getting all task.\n${error}`);
    }
});

test("Test for delete endpoint", async()=>{
    try {
        const response = await axios.delete("http://localhost:3000/v1/shop/delete/6548b3dcbd9f8564a8d3b286", {
        headers:{
            authorization : `Bearer ${userToken}`
        }
    });

    expect(response.status).toBe(202);
    } catch (error) {
        console.log(error);
    }
});