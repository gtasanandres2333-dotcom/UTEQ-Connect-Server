import mongoose, { Schema, Document } from "mongoose";

export interface IDestino extends Document {
    nombre: string;
    posicion: {
        latitude: number;
        longitude: number;
    };
}

const DestinoSchema = new Schema<IDestino>({
    nombre: { 
        type: String, 
        required: true,
        trim: true
    },
    posicion: {
        latitude: { 
            type: Number, 
            required: true,
            min: -90,
            max: 90
        },
        longitude: { 
            type: Number, 
            required: true,
            min: -180,
            max: 180
        }
    }
}, {
    timestamps: true,
    collection: 'destinos'
});


export default mongoose.model<IDestino>('Destino', DestinoSchema);