import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Block, Text, Button, IconButton, Container } from 'cloudhub-components';
import { useMetrics } from 'cloudhub-components/dist/customhooks';
import Menu from '@material-ui/icons/Menu';

import sizes from 'cloudhub-components/dist/theme/Sizes';
import { colors, Images } from '../theme';

const Header = React.forwardRef((props, ref) => {
  const { isMobile } = useMetrics();

  return (
    <Block
      flex={false}
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1,
      }}
      center
      color={colors.mistyWhite}
      shadow
    >
      <Container
        flex={false}
        maxWidth={isMobile ? 'sm' : 'lg'}
        style={{ margin: 0, padding: 0 }}
      >
        <Block row wrap middle ref={ref}>
          {!isMobile && (
            <Link to="/" style={{ margin: 0, padding: 0 }}>
              <Block
                flex={false}
                style={{
                  minWidth: 200,
                }}
              >
                <img
                  src={Images.logo}
                  alt="Clou Hub Limited"
                  style={{
                    height: sizes.navBarHeight - 15,
                  }}
                />
              </Block>
            </Link>
          )}
          <Block
            flex={false}
            row
            middle
            margin={[0, sizes.margin]}
            style={{ minWidth: 380 }}
          >
            <Link to="/">
              <Text h3 primary>
                {props.siteTitle}
              </Text>
            </Link>
          </Block>

          {isMobile && (
            <Block flex={false} middle>
              <IconButton>
                <Menu size={24} />
              </IconButton>
            </Block>
          )}

          <Block right={!isMobile}>
            <Block flex={false} row style={{ minWidth: 350 }}>
              <Link to="/docs/getting-started">
                <Button
                  // color="primary"
                  style={{ height: sizes.navBarHeight, borderRadius: 0 }}
                >
                  <Text h6>Docs</Text>
                </Button>
              </Link>
              <a
                href="https://github.com/cloudhubke/cloudhub-components"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  // color="primary"
                  style={{ height: sizes.navBarHeight, borderRadius: 0 }}
                >
                  <Text h6>Github</Text>
                </Button>
              </a>
            </Block>
          </Block>
        </Block>
      </Container>
    </Block>
  );
});

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
