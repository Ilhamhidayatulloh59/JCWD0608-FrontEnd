import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "Page Product",
  openGraph: {
    url: ""
  }
};

export default function Page() {
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
}
