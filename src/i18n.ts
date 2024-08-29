import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

//! Danh sách các mã ngôn ngữ
const locales = ["en", "vi"];

//! lấy cấu hình cho các yêu cầu quốc tế hóa
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    //! lấy json của tệp json tương ứng với mã ngôn ngữ.
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
