const request = require("supertest");
const { app } = require("./server");

describe("Transactions API", () => {
    it("should create a new transaction", async()=>{
        const response = await request(app)
        .post("/transactions")
        .send({
            amount: 100,
            description: "Test"
        });

        expect(response.statusCode).toBe(201);
        expect(response.body.amount).toBe(100);
        expect(response.body.description).toBe("Test");
    })
});