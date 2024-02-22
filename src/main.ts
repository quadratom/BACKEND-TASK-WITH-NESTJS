import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
        .setTitle('Saas')
        .setDescription('The Saas API documentation')
        .setVersion('1.0')
        .setLicense('Download Postman collection', '/apidocs-json')
        .addBearerAuth()
        .build();
    const document = SwaggerModule.createDocument(app, config);
    
    // http://localhost:3000/apidocs

    SwaggerModule.setup('apidocs', app, document);
  await app.listen(3000);
}
bootstrap();




// QUESTION 2

//  ENTITY RELATIONSHIP DIAGRAM

// To represent the entities in the problem (merchants and products), we can create two tables: Merchants and Products. Here's a simple Entity-Relationship Diagram (ERD) for the database design:

// +--------------+       +--------------+
// |   Merchants  |       |   Products   |
// +--------------+       +--------------+
// | merchantId   | 1    *| skuId        |
// | name         |       | name         |
// | ...          |       | description  |
// +--------------+       | price        |
//                        | merchantId   |  *--------|----- 1  +--------------+
//                        +--------------+                     |   Merchants  |
//                                                              +--------------+