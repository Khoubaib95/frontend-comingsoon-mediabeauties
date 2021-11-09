import { Helmet } from "react-helmet";
//import { defaultLocale } from "../contexts/language/language.config";

type SeoProps = {
  // SEO
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  mobile?: {
    play?: string;
    apple?: string;
  };
};

const SEO = ({
  title = "",
  description = "",
  canonical,
  image,
  mobile,
}: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="og:title" property="og:title" content={title} />
    {mobile?.play && (
      <meta name="google-play-app" content={`app-id=${mobile.play}`} />
    )}
    {mobile?.apple && (
      <meta name="apple-itunes-app" content={`app-id=${mobile.apple}`} />
    )}
    {canonical && <meta property="og:url" content={`${canonical}`} />}
    {image && <meta property="og:image" content={`${image}`} />}
    {image && <meta name="twitter:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    {/*defaultLocale && (
      <meta httpEquiv="content-language" content={defaultLocale} />
    )*/}
  </Helmet>
);

export default SEO;
