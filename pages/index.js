import Link from "next/link";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

export default function Home({ events }) {
  // console.log(events); // This will log on the browser

  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/events?_sort=day:ASC&_limit=3`);
  const events = await res.json();

  return {
    props: { events },
    revalidate: 1, // If something changes, this will update with an delay of 1sec
  };
}

/*
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  // console.log(events); // This will log in terminal coz this runs in server

  return {
    props: { events },
  };
}
*/
