import { FaGithub, FaLinkedin, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

export default function ContactPage() {
  return (
    <main style={styles.page}>
      <section style={styles.card}>
        <div style={styles.header}>
          <div>
            <p style={styles.overline}>Get in touch</p>
            <h1 style={styles.title}>Contact Me</h1>
            <p style={styles.subtitle}>
              I&apos;m a software developer focused on building clean, accessible, and scalable web applications.
              Reach out for collaboration, freelance work, or just a friendly tech chat.
            </p>
          </div>
        </div>

        <div style={styles.grid}>
          <a href="mailto:hello@example.com" style={styles.cardItem}>
            <FaEnvelope style={styles.icon} />
            <div>
              <h2 style={styles.cardTitle}>Email</h2>
              <p>hello@example.com</p>
            </div>
          </a>

          <a href="tel:+1234567890" style={styles.cardItem}>
            <FaPhoneAlt style={styles.icon} />
            <div>
              <h2 style={styles.cardTitle}>Phone</h2>
              <p>+254759735505</p>
            </div>
          </a>

          <a href="https://github.com/nelson-tommogo" target="_blank" rel="noreferrer" style={styles.cardItem}>
            <FaGithub style={styles.icon} />
            <div>
              <h2 style={styles.cardTitle}>GitHub</h2>
              <p>github.com/nelson-tommogo</p>
            </div>
          </a>

          <a href="https://linkedin.com/in/nelson-tommogo" target="_blank" rel="noreferrer" style={styles.cardItem}>
            <FaLinkedin style={styles.icon} />
            <div>
              <h2 style={styles.cardTitle}>LinkedIn</h2>
              <p>linkedin.com/in/nelson-tommogo</p>
            </div>
          </a>

          <a href="https://twitter.com/nelson_tommogo" target="_blank" rel="noreferrer" style={styles.cardItem}>
            <FaTwitter style={styles.icon} />
            <div>
              <h2 style={styles.cardTitle}>X</h2>
              <p>@nelson_tommogo</p>
            </div>
          </a>

          <a href="https://yourwebsite.com" target="_blank" rel="noreferrer" style={styles.cardItem}>
            <FaGlobe style={styles.icon} />
            <div>
              <h2 style={styles.cardTitle}>Portfolio</h2>
              <p>yourwebsite.com</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    minHeight: '100vh',
    padding: '40px 24px',
    display: 'flex',
    justifyContent: 'center',
    background: '#f5f7fb',
  },
  card: {
    width: '100%',
    maxWidth: '860px',
    background: '#ffffff',
    borderRadius: '24px',
    boxShadow: '0 24px 80px rgba(13, 26, 65, 0.08)',
    padding: '36px',
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
  },
  header: {
    display: 'flex',
    gap: '24px',
    alignItems: 'flex-start',
  },
  overline: {
    margin: 0,
    fontSize: '0.85rem',
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: '#4f6d9b',
  },
  title: {
    margin: '12px 0 8px',
    fontSize: '2.4rem',
    lineHeight: 1.05,
    color: '#0f172a',
  },
  subtitle: {
    margin: 0,
    maxWidth: '680px',
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#52627c',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '18px',
  },
  cardItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    padding: '20px',
    borderRadius: '18px',
    border: '1px solid rgba(79, 109, 155, 0.12)',
    textDecoration: 'none',
    color: '#0f172a',
    background: '#f9fbff',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  icon: {
    width: '28px',
    height: '28px',
    color: '#2563eb',
    flexShrink: 0,
    marginTop: '2px',
  },
  cardTitle: {
    margin: '0 0 6px',
    fontSize: '1.05rem',
    color: '#0f172a',
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginTop: '8px',
    color: '#64748b',
    fontSize: '0.95rem',
  },
  locationIcon: {
    width: '18px',
    height: '18px',
    color: '#475569',
  },
};
