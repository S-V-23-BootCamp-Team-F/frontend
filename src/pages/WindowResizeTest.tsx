import { useWindowResize } from "@/hooks/useWindowResize";

export default function WindowResizeTest() {
  const [width, height] = useWindowResize();

  return (
    <section className="mt-4">
      width: {width}, height: {height}
    </section>
  );
}
