export default async function Page({ params }: {params: Promise<{ id: string }> }) {

  const { id } = await params;
  
  return (
    <div className="text-3xl">Video #{id}</div>
  );

}