import { NextResponse } from "next/server";
import { dbConnect } from '@/utils/conexion';

export function GET(request, { params }){
    return NextResponse.json({
        message:"obteniendo Juego..."
    });
}

export function DELETE(request,{params}){
    dbConnect();
    return NextResponse.json({
        message:"eliminando Juego..."
    });
}

export function PUT(request,{params}){
    return NextResponse.json({
        message:"modificando Juego..."
    });
}