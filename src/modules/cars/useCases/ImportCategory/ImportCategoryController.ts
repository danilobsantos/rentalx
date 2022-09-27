import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    // constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

    handle(resquest: Request, response: Response): Response {
        const { file } = resquest;

        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

        importCategoryUseCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController };
