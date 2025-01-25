import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="text-center m-2 text-gray-400 text-sm tracking-widest italic cursor-default">
        {t("footer")}
      </h1>
    </>
  );
}

export default Footer;
