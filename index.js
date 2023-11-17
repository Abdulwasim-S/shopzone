import express from "express";
import cors from "cors";
import {} from "dotenv/config.js";
import { db_connection } from "./Database/db_connection.js";
import { RouterPage } from "./Routers/RouterPage.js";
import { AdminPage } from "./Routers/AdminPage.js";
import { UserPage } from "./Routers/UserPage.js";
import { ProductsPage } from "./Routers/Products.js";
import { isAuth } from "./Helper/isAuth.js";

const app = express();
const { PORT } = process.env;

app.use(cors({ origin: "*" }));
app.use(express.json());
await db_connection();
app.use("/", RouterPage);
app.use("/admin", AdminPage);
app.use("/user", UserPage);
app.use("/products", isAuth, ProductsPage);

app.listen(PORT, () => console.log("Listning in port :", PORT));
