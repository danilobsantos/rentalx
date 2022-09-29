import { container } from "tsyringe";

import { UsersRepository } from "../../modules/account/repositories/implements/UsersRepository";
import { IUsersRepository } from "../../modules/account/repositories/IUserRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implements/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implements/SpecificationsRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationRepository";

// passar a interface
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationRepository",
    SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);
