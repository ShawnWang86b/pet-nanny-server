import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServiceModule } from './service/service.module';
import { AdminModule } from './admin/admin.module';
import { PetSitterModule } from './pet-sitter/pet-sitter.module';

@Module({
  imports: [ MongooseModule.forRoot(process.env.DATABASE_URL), UsersModule, AuthModule, ServiceModule, AdminModule, PetSitterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
