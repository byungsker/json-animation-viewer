import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900">
      <h1 className="text-5xl font-bold text-white mb-4">{t("title")}</h1>
      <h2 className="text-2xl font-semibold text-white mb-6">
        {t("subtitle")}
      </h2>
      <p className="text-gray-300 mb-8 text-center max-w-md">
        {t("description")}
      </p>
      <Link
        href="/"
        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
      >
        {t("goHome")}
      </Link>
    </div>
  );
}
