import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
export default function Home({ events }) {
  // console.log(events); // This will log on the browser

  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/events`);
//   const events = await res.json();

//   // console.log(events); // This will log in terminal coz this runs in server

//   return {
//     props: { events },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1, // If something changes, this will update with an delay of 1sec
  };
}
