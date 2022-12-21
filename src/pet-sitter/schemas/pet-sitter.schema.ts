import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Service } from '../../service/schemas/service.schema';

class Address {
  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  line1: string;

  @Prop()
  line2: string;

  @Prop()
  line3: string;

  @Prop()
  postCode: string;

  @Prop()
  state: string;

  @Prop()
  latitude: number;

  @Prop()
  longitude: number;
}

@Schema({ timestamps: true })
export class PetSitter extends Document {
  @Prop({ unique: true })
  email: string;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  password: string;

  @Prop()
  image: string;

  @Prop()
  displayImage: [string];

  @Prop()
  location: Address;

  @Prop()
  about: string;

  @Prop()
  lastActiveTime: string;

  @Prop({ default: false })
  isDeleted: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Service.name })
  service: Service;
}

export const PetSitterSchema = SchemaFactory.createForClass(PetSitter);
