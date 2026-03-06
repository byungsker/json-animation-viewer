import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.terms" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/terms" : `/${locale}/terms`,
      languages: { en: "/terms", ko: "/ko/terms" },
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("terms");
  const tc = await getTranslations("common");

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors"
        >
          {tc("backToHome")}
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">{t("title")}</h1>
        <p className="text-gray-400 text-sm mb-10">{t("lastUpdated")}</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s1Title")}</h2>
            <p>
              {t.rich("s1Desc", {
                link: (chunks) => (
                  <a href="https://json-animation-viewer.com" className="text-blue-400 hover:underline">
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s2Title")}</h2>
            <p>{t("s2Desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s3Title")}</h2>
            <p>{t("s3Desc")}</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>{t("s3Rule1")}</li>
              <li>{t("s3Rule2")}</li>
              <li>{t("s3Rule3")}</li>
              <li>{t("s3Rule4")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s4Title")}</h2>
            <p>{t("s4Desc1")}</p>
            <p className="mt-3">{t("s4Desc2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s5Title")}</h2>
            <p>{t("s5Desc")}</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>{t("s5Item1")}</li>
              <li>{t("s5Item2")}</li>
              <li>{t("s5Item3")}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s6Title")}</h2>
            <p>{t("s6Desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s7Title")}</h2>
            <p>{t("s7Desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s8Title")}</h2>
            <p>{t("s8Desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s9Title")}</h2>
            <p>{t("s9Desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s10Title")}</h2>
            <p>{t("s10Desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s11Title")}</h2>
            <p>
              {t.rich("s11Desc", {
                link: (chunks) => (
                  <a
                    href="https://github.com/byungsker/json-animation-viewer"
                    className="text-blue-400 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
