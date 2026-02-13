import City from "./City/City";

export default function Filter() {
  const handleSearch = (formData: FormData) => {
    console.log(Object.fromEntries(formData.entries()));
  };
  return (
    <div>
      <form action={handleSearch}>
        <City/>
      </form>
    </div>
  );
}
