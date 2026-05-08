import { useLanguage } from "../i18n/LanguageContext";
import "./Footer.css";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Keylor. {t.footer.rights}
        </p>

        <p className="footer-made">{t.footer.end}</p>
      </div>
    </footer>
  );
}
