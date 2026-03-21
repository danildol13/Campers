import { Infos, firstCategories, vehicleDetails } from "@/types/camper";

interface Props {
  camper: Infos;
}

export default function Features({ camper }: Props) {
  return (
    <div>
      {firstCategories.map(
        (key) => camper[key] && <span key={key}>{key}</span>,
      )}
      {camper.transmission === "automatic" && <span>automatic</span>}
      {camper.engine && <span>{camper.engine}</span>}
      {vehicleDetails.map((key) => (
        <div key={key}>
          <span>{key}</span>
          <span>{camper[key]}</span>
        </div>
      ))}
    </div>
  );
}
