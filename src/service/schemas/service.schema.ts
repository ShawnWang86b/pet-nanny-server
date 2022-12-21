import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Service extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    required: true,
    ref: 'PetSitter',
  })
  serviceId: MongooseSchema.Types.ObjectId;

  @Prop()
  category: string;

  @Prop()
  subcategory: string;

  @Prop()
  image: string;

  @Prop()
  serviceDescription: string;

  @Prop()
  rate: number;

  @Prop()
  rateDescription: string;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
