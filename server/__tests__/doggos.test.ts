import request from "supertest";
import app from "../src/app";
import { connectMongoose, disconnectMongoose } from "../testUtils/mongoose";
import { Doggo } from "../src/models";

describe("Doggos Tests", () => {
  let testDoggos: typeof Doggo[] = [];

  beforeEach(async () => {
    await connectMongoose();
  });

  afterEach(async () => {
    await Promise.all(testDoggos.map((doggo) => doggo.remove()));
    await disconnectMongoose();
  });

  describe("Get Doggos", () => {
    it("should get no doggos", async () => {
      const res = await request(app).get("/doggo");
      expect(res.status).toEqual(200);
      expect(res.body.doggos).toEqual([]);
    });

    it("should get 3 doggos", async () => {
      testDoggos = await Doggo.create([
        { name: "Jett", age: 8, imageUrl: "some-image-url" },
        { name: "Reyna", age: 9, imageUrl: "some-image-url" },
        { name: "Neon", age: 7, imageUrl: "some-image-url" },
      ]);
      const res = await request(app).get("/doggo");
      expect(res.status).toEqual(200);
      expect(res.body.doggos).toHaveLength(3);
    });
  });

  describe("Create Doggo", () => {
    it("should create a doggo", async () => {
      const res = await request(app).post("/doggo").send({
        name: "Viper",
        age: 3,
      });
      expect(res.status).toEqual(201);
      testDoggos = await Promise.all([Doggo.findOne({ name: "Viper" })]);
      expect(testDoggos).toHaveLength(1);
      expect(testDoggos[0]).toBeTruthy();
    });
  });

  describe("Delete Doggo", () => {
    it("should delete a doggo", async () => {
      testDoggos = await Doggo.create([
        { name: "Jett", age: 8, imageUrl: "some-image-url" },
      ]);
      const res = await request(app)
        .delete("/doggo")
        .send({ id: (testDoggos[0] as any)._id.toString() });
      expect(res.status).toEqual(200);
    });
  });
});
