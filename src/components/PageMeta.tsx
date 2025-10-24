import Head from "next/head";
import { buildMeta } from "@/lib/seo";

type PageMetaProps = {
  title?: string;
  description?: string;
  image?: string;
};

const PageMeta = ({ title, description, image }: PageMetaProps) => {
  const meta = buildMeta({
    title,
    description,
    ogImage: image
  });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:url" content={meta.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.ogImage} />
    </Head>
  );
};

export default PageMeta;
