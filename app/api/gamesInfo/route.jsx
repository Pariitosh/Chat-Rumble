import { NextResponse,NextRequest } from "next/server";

const info={"totalgames":0,gamesinfo:[{roomid:0,contestants:["c1","c2"]}]}

export async function GET(NextRequest){
    return NextResponse.json(info)
}
