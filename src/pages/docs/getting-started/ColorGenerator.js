import React from 'react';
import { Alert, Block, Button, Text, TextArea } from '@cloudhub-ux/core';

const ColorGenerator = props => {
  const [error, setError] = React.useState('');
  const [rawText, setRawText] = React.useState('');
  const [jsonColors, setJsonColors] = React.useState({});

  const genarateColors = () => {
    try {
      setError('');
      const colorObj = JSON.parse(rawText);
      const keys = Object.keys(colorObj);

      const getColors = (str = 'primary') => {
        return keys
          .filter(key => key.includes(str))
          .reduce((acc, key) => {
            if (`${key}`.includes('100')) {
              acc[`lighter`] = colorObj[`${key}`];
            }
            if (`${key}`.includes('300')) {
              acc[`light`] = colorObj[`${key}`];
            }
            if (`${key}`.includes('500')) {
              acc[`main`] = colorObj[`${key}`];
            }
            if (`${key}`.includes('700')) {
              acc[`dark`] = colorObj[`${key}`];
            }
            if (`${key}`.includes('900')) {
              acc[`darker`] = colorObj[`${key}`];
            }

            return acc;
          }, {});
      };

      let primaryColors = getColors('primary');
      let secondaryColors = getColors('secondary');
      let successColors = getColors('success');
      let infoColors = getColors('info');
      let warningColors = getColors('warning');
      let dangerColors = getColors('danger');

      setJsonColors({
        primaryColors,
        secondaryColors,
        successColors,
        infoColors,
        warningColors,
        dangerColors,
      });
    } catch (error) {
      setError(error.toString());
    }
  };

  return (
    <Block flex={false}>
      <Block flex={false}>
        <Text header>Color object generator</Text>
      </Block>
      <Block row flex={false}>
        <Block padding>
          <Block row flex={false}>
            <Block>
              <Text subHeader>Paste colors from eva design to generate</Text>
              {error && <Alert error>{error}</Alert>}
            </Block>
            <Block flex={false}>
              <Button contained onClick={genarateColors}>
                <Text>Generate</Text>
              </Button>
            </Block>
          </Block>
          <TextArea
            rows={30}
            style={{ height: '100%' }}
            value={rawText}
            onChange={e => setRawText(e.target.value)}
          />
        </Block>
        <Block padding>
          <pre>{`${JSON.stringify(jsonColors, null, '\t')}`}</pre>
        </Block>
      </Block>
    </Block>
  );
};

export default ColorGenerator;
