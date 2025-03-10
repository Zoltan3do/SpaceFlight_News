import FlipperCard from "./FlipperCard";

function CustomHome() {
  return (
    <>
      <div>
        <FlipperCard
          image_url={`https://www.esa.int/var/esa/storage/images/esa_multimedia/videos/2025/03/hera_asteroid_mission_s_mars_flyby/26607880-1-eng-GB/Hera_asteroid_mission_s_Mars_flyby_card_full.png`}
          authors={["ESA"]}
          title="Hera asteroid mission’s Mars flyby"
          url="https://www.esa.int/ESA_Multimedia/Videos/2025/03/Hera_asteroid_mission_s_Mars_flyby"
          news_site="ESA"
          summary="On  Wednesday 12 March 2025 ESA’s Hera spacecraft for planetary defence performs a flyby of Mars. The gravity of the red planet shifts the spacecraft’s trajectory towards its final destination of the Didymos binary asteroid system, shortening its trip by months and saving substantial fuel."
          published_at="2025-03-10T15:00:00Z"
        />
      </div>
    </>
  );
}
export default CustomHome;
