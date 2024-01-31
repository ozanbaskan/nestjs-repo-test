import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { SequelizeModule } from "@nestjs/sequelize";
import { dbConfig } from "./db.config";

@Module({
  imports: [UserModule, SequelizeModule.forRoot(dbConfig as any)],
  controllers: [],
  providers: [],
})
export class AppModule {}
