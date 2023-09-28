import { NextResponse } from "next/server";
import clientPromise from '../../../lib/mongodb'
import Game from '../../../models/game';
import { request } from "http";

export async function GET(){
    const client = await clientPromise
    const db = client.db('stores'); 
    const collection = db.collection('Game'); 
    const data = await collection.find({}).toArray();
    return NextResponse.json(data);
}
export async function POST(request){

    const game =await request.json();
    const newGame = new Game(game);
    console.log(newGame);

    /*try {
        const game =await request.json();
        const newGame = new Game(game);
        const savedGame = await newGame.save();
        console.log(savedGame);
        return NextResponse.json(savedGame);
    } catch (error) {
        return NextResponse.json(error.message, {
          status: 400,
        });
    };*/
}