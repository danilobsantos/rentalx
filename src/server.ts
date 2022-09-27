import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";
import "./shared/container";

const app = express();

app.use(express.json());
// criando uma rota de documentação e setando alguns parâmetros.
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);
// app.use("/categories", categoriesRoutes);
// app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("Server is running!"));
