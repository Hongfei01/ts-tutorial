import zod from 'zod';
const url = `https://www.course-api.com/react-tours-project`;

const tourSchema = zod.object({
  id: zod.string(),
  name: zod.string(),
  info: zod.string(),
  image: zod.string(),
  price: zod.string(),
});

type Tour = zod.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status:${response.status}`);
    }
    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) throw new Error(`invalid data: ${result.error}`);
    return result.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => console.log(tour.name));
