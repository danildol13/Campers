import { NextResponse, NextRequest } from "next/server";
import { mockApi } from "../externalApi";
import { ApiResponse, Infos, EquipmentType } from "@/types/camper";

const VALID_EQUIPMENT: EquipmentType[] = ["AC", "kitchen", "bathroom", "TV"];
const VALID_TRANSMISSION = ["automatic"];

export async function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams;
  const page = Number(sp.get("page")) || 1;
  const limit = Number(sp.get("limit")) || 4;
  const city = sp.get("city");
  const type = sp.get("type");
  const equipment = sp
    .getAll("equipment")
    .filter(
      (eq) =>
        VALID_EQUIPMENT.includes(eq as EquipmentType) ||
        VALID_TRANSMISSION.includes(eq),
    );

  const { data } = await mockApi.get<ApiResponse>("/campers");

  const filteredData = data.items.filter((item) => {
    const cityMatch = !city || item.location.includes(city);
    const typeMatch = !type || item.form === type;
    const equipmentMatch =
      equipment.length === 0 ||
      equipment.every((eq) => {
        if (eq === "automatic") return item.transmission === "automatic";
        return item[eq as keyof Infos] === true;
      });
    return cityMatch && typeMatch && equipmentMatch;
  });

  const startIndex = (page - 1) * limit;
  const paginatedData = filteredData.slice(startIndex, startIndex + limit);
  return NextResponse.json(paginatedData);
}
