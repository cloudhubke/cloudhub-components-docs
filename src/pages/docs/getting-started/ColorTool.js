import React from 'react';
import { Alert, Block, IconButton, Input, Text } from '@cloudhub-ux/core';
import { Refresh } from '@mui/icons-material';
import axios from 'axios';
import { sizes } from '../../../theme';

const axiosInstance = () =>
  axios.create({
    baseURL: 'https://app.uibakery.io/api/painter/support',
    headers: {
      prxy: 'no-proxy',
      'Content-Type': 'application/json',
    },
  });

const exampleColors = {
  danger: [
    '#FEEBD0',
    '#FED3A2',
    '#FEB374',
    '#FD9552',
    '#FC6419',
    '#D84712',
    '#B52E0C',
    '#921A07',
    '#780D04',
  ],
  info: [
    '#D8FEF7',
    '#B1FEF6',
    '#8BFDFA',
    '#6DF3FB',
    '#3EE0F9',
    '#2DB2D6',
    '#1F88B3',
    '#136290',
    '#0B4777',
  ],
  primary: [
    '#D6E4FF',
    '#ADC8FF',
    '#84A9FF',
    '#6690FF',
    '#3366FF',
    '#254EDB',
    '#1939B7',
    '#102693',
    '#091A7A',
  ],
  success: [
    '#E9FDD9',
    '#CDFCB3',
    '#AAF88C',
    '#88F16E',
    '#54E840',
    '#34C72E',
    '#20A725',
    '#148622',
    '#0C6F20',
  ],
  warning: [
    '#FEFBD4',
    '#FEF5AA',
    '#FDEE80',
    '#FBE760',
    '#F9DB2C',
    '#D6B820',
    '#B39716',
    '#90770E',
    '#776008',
  ],
};

const ColorTool = props => {
  const [error, setError] = React.useState('');
  const [allColors, setAllColors] = React.useState(exampleColors);
  const [primary, setPrimary] = React.useState(exampleColors.primary[4]);
  const [secondary, setSecondary] = React.useState(exampleColors.primary[4]);

  const colorCategories = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
  ];

  const getColors = async color => {
    try {
      const { data } = await axiosInstance().get('', {
        params: {
          primary: `${color}`.replace('#', ''),
        },
      });
      if (data && data.primary) {
        setAllColors(data);
        setPrimary(data.primary[4]);
      }
    } catch (error) {
      setError(error.toString());
    }
  };

  return (
    <Block flex={false} style={{ height: 450 }}>
      {error && <Alert error>{error}</Alert>}
      <Block row flex={false}>
        <Block>
          <Text title>Primary</Text>
        </Block>
        <Block>
          <Text title>Secondary</Text>
        </Block>
      </Block>
      <Block row flex={false}>
        <Block row>
          <Block
            flex={false}
            color={primary}
            style={{ width: sizes.inputHeight, height: sizes.inputHeight }}
            margin={[0, 5]}
            borderRadius
          >
            {`  `}
          </Block>
          <Block>
            <Input value={primary} onChange={e => setPrimary(e.target.value)} />
          </Block>
          <Block flex={false}>
            <IconButton onClick={() => getColors(primary)}>
              <Refresh />
            </IconButton>
          </Block>
        </Block>

        <Block row>
          <Block
            flex={false}
            color={primary}
            style={{ width: sizes.inputHeight, height: sizes.inputHeight }}
            margin={[0, 5]}
            borderRadius
          >
            {`  `}
          </Block>
          <Block>
            <Input
              value={secondary}
              onChange={e => setSecondary(e.target.value)}
            />
          </Block>
          <Block flex={false}>
            <IconButton>
              <Refresh />
            </IconButton>
          </Block>
        </Block>
      </Block>
      <Block row>
        {colorCategories.map(category => {
          let categoryColors = allColors[category] || [];
          return (
            <Block>
              <Block flex={false}>
                <Text bold right>
                  {category}
                </Text>
              </Block>
              {categoryColors.map((color, index) => {
                return (
                  <Block row>
                    <Block padding={2.5} flex={false} style={{ width: 55 }}>
                      <Text small right>
                        {(index + 1) * 100}
                      </Text>
                    </Block>
                    <Block color={color} />
                  </Block>
                );
              })}
            </Block>
          );
        })}
      </Block>
    </Block>
  );
};

export default ColorTool;
