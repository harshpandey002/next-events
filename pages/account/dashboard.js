import { parseCookies } from "@/helpers/index";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function DashboardPage({ events }) {
  return (
    <Layout title="User Dashboard">
      <h1>Dashboard</h1>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = parseCookies(req);

  const res = await fetch(`${API_URL}/events/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const events = await res.json();

  return {
    props: {
      events,
      token,
    },
  };
}
