import { ApiProperty } from "@nestjs/swagger";

export class ProductDto {
  @ApiProperty({
    type: String,
    description: 'skuId Description',
    example: 'skuId',
})
    readonly skuId: string;

    @ApiProperty({
      type: String,
      description: 'name Description',
      example: 'name',
  })
    readonly name: string;

    @ApiProperty({
      type: String,
      description: 'Product Description',
      example: 'heineken',
  })
    readonly description: string;

    @ApiProperty({
      type: Number,
      example: 1,
  })
    readonly price: number;

    @ApiProperty({
      type: String,
      description: 'MerchantId Description',
      example: 'Merchant name',
  })
    readonly merchantId: string;
  }

  
  // "skuId": "",
  // "name": "read",
  // "description": "read is bad",
  // "price": 1,
  // "merchantId": ""