
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MerchantsService } from './merchants.service';
import { ProductDto } from './dto/create-products.dto';

@Controller('merchants')
export class MerchantsController {
    constructor(private readonly merchantsService: MerchantsService) {}

    @Get(':merchantId')
    getProducts(@Param('merchantId') merchantId: string) {
      return this.merchantsService.findAllByMerchantId(merchantId);
    }
    
    @Post()
    createProduct(@Body() productDto: ProductDto) {
      return this.merchantsService.create(productDto);
    }
  
    @Put(':skuId')
    editProduct(@Param('skuId') skuId: string, @Body() productDto: ProductDto) {
      return this.merchantsService.update(skuId, productDto);
    }
  
    @Delete(':skuId/:merchantId')
    deleteProduct(@Param('skuId') skuId: string, @Param('merchantId') merchantId: string) {
      return this.merchantsService.delete(skuId, merchantId);
    }

    @Get()
    getAllProducts() {
      return this.merchantsService.findAll();
    }
}



















// import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
// import { MerchantsService } from './merchants.service';
// import { ProductDto } from './dto/create-products.dto';


// @Controller('merchants')
// export class MerchantsController {
//     constructor(private readonly merchantsService: MerchantsService) {}

//     @Get(':merchantId')
//     getProducts(@Param('merchantId') merchantId: string) {
//       return this.merchantsService.findAllByMerchantId(merchantId);
//     }
  
//     @Post()
//     createProduct(@Body() productDto: ProductDto) {
//       return this.merchantsService.create(productDto);
//     }
  
//     @Put(':skuId')
//     editProduct(@Param('skuId') skuId: string, @Body() productDto: ProductDto) {
//       return this.merchantsService.update(skuId, productDto);
//     }
  
//     @Delete(':skuId')
//     deleteProduct(@Param('skuId') skuId: string) {
//       return this.merchantsService.delete(skuId);
//     }

//     @Get()
//     getAllProducts() {
//       return this.merchantsService.findAll()
//     }


// }
