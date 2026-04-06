import { useTheme } from '../contexts/ThemeContext';

const Logo = ({ className = "nav-logo-mark", alt = "Speion logo" }) => {
  const { theme } = useTheme();

  const logoSrc = theme === 'dark' ? '/logo-dark.webp' : '/logo-light.webp';

  return (
    <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={logoSrc}
        alt={alt}
        className={className}
        width={70}
        height={70}
        style={{ 
          mixBlendMode: theme === 'dark' ? 'screen' : 'multiply',
          filter: theme === 'dark' ? 'brightness(1.1) contrast(1.1)' : 'none'
        }}
      />
    </div>
  );
};

export default Logo;