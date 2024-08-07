import CompanyLogo from '../../Images/logo.png';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  // const theme = useTheme();

  return (
    <>
      <img src={CompanyLogo} alt="Simis" width="80" height="70" style={{ marginTop:'6px'}} />
    </>
  );
};

export default Logo;
