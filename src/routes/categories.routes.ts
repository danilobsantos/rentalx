import { Router } from "express"; // o router ele nos ajuda a manipular as rotas de forma modular.
// importar biblioteca multer
import multer from "multer";

// import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/ImportCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
// import { CreateCategoryService } from "../modules/cars/useCases/createCategory/CreateCategoryUseCase";

const categoriesRoutes = Router();

// instanciando função do multer
const upload = multer({
    dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
    // const lista = categoriesRepository.list();
    // return response.json(lista);
});
// criando rota de upload
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);

    // const { file } = request;
    // console.log(file);
    // return response.send();
});

export { categoriesRoutes };
