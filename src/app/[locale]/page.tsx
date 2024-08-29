import { useTranslations } from "next-intl";

export default function HomePage() {
  //! trong file json, giá trị chỉ có thể là string.
  const t = useTranslations("HomePage");
  return (
    <h1>
      <p>{t("title")}</p>
      <p>{t("name")}</p>
    </h1>
  );
}
