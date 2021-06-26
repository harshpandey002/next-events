import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

function EventPage({ evt }) {
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  );
}

export default EventPage;

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: false,
  };

  /*
  return {
    paths: [
      {params: {id: 1}},
      {params: {id: 2}},
      {params: {id: 3}},
    ]
  }
  */
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();
  return {
    props: { evt: events[0] },
    revalidate: 1,
  };
}

// export async function getServerSideProps({ query: { slug } }) {
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const event = await res.json();
//   return {
//     props: { evt: event[0] },
//   };
// }
