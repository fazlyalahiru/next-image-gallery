import { getAllPhotos } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await getAllPhotos();
    let filteredData = [];
    data.map(singleData => filteredData.push(
        { id: singleData.id, title: singleData.title, url: singleData.url }
    ))
    return NextResponse.json(filteredData);
}