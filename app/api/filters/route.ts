import { ApiResponse, CityType } from "./../../../types/camper";
import { mockApi } from "../externalApi";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await mockApi.get<ApiResponse>("/campers");
    const items = data.items;

    const location = [...new Set(items.map((item) => item.location))] as CityType[];

    return NextResponse.json(location);
  } catch {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
