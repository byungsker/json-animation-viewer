import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.privacy" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "en" ? "/privacy" : `/${locale}/privacy`,
      languages: { en: "/privacy", ko: "/ko/privacy" },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");
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
            <p>
              {t.rich("s2Desc1", {
                strong: (chunks) => <strong className="text-white">{chunks}</strong>,
              })}
            </p>
            <p className="mt-3">{t("s2Desc2")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s3Title")}</h2>
            <p>{t("s3Desc")}</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                {t.rich("s3Analytics", {
                  strong: (chunks) => <strong className="text-white">{chunks}</strong>,
                })}
              </li>
              <li>
                {t.rich("s3Cookies", {
                  strong: (chunks) => <strong className="text-white">{chunks}</strong>,
                })}
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s4Title")}</h2>
            <p>{t("s4Desc1")}</p>
            <p className="mt-3">
              {t.rich("s4Desc2", {
                link: (chunks) => (
                  <a
                    href="https://www.google.com/settings/ads"
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

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s5Title")}</h2>
            <p>{t("s5Desc")}</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>{t.rich("s5Vercel", { strong: (chunks) => <strong className="text-white">{chunks}</strong> })}</li>
              <li>{t.rich("s5Adsense", { strong: (chunks) => <strong className="text-white">{chunks}</strong> })}</li>
              <li>{t.rich("s5SearchConsole", { strong: (chunks) => <strong className="text-white">{chunks}</strong> })}</li>
            </ul>
            <p className="mt-3">{t("s5Note")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s6Title")}</h2>
            <p>{t("s6Desc")}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">{t("s7Title")}</h2>
            <p>{t("s7Desc")}</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>{t("s7Right1")}</li>
              <li>{t("s7Right2")}</li>
              <li>{t("s7Right3")}</li>
              <li>{t("s7Right4")}</li>
            </ul>
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
            <p>
              {t.rich("s10Desc", {
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
